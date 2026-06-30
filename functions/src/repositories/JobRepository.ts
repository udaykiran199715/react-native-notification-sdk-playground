import { FieldValue } from "firebase-admin/firestore";

import { FirestoreCollections } from "../constants/FirestoreCollections";
import { JobStatus } from "../enums/JobStatus";
import { FirebaseAdmin } from "../firebase/FirebaseAdmin";
import { NotificationJobDocument } from "../models/NotificationJobDocument";
import { NotificationSendResult } from "../types/NotificationSendResult";

export class JobRepository {
  public async getJob(jobId: string): Promise<NotificationJobDocument | null> {
    const document = await FirebaseAdmin.firestore()
      .collection(FirestoreCollections.JOBS)
      .doc(jobId)
      .get();

    if (!document.exists) {
      return null;
    }

    return {
      id: document.id,
      ...(document.data() as Omit<NotificationJobDocument, "id">),
    };
  }

  public async markProcessing(jobId: string): Promise<void> {
    await FirebaseAdmin.firestore()
      .collection(FirestoreCollections.JOBS)
      .doc(jobId)
      .update({
        status: JobStatus.PROCESSING,
        processingStartedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });
  }

  public async markCompleted(
    jobId: string,
    result: NotificationSendResult,
  ): Promise<void> {
    await FirebaseAdmin.firestore()
      .collection(FirestoreCollections.JOBS)
      .doc(jobId)
      .update({
        status: JobStatus.COMPLETED,
        successfulTokens: result.success.length,
        failedTokens: result.failed.length,
        completedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });
  }

  public async markFailed(jobId: string, error: string): Promise<void> {
    await FirebaseAdmin.firestore()
      .collection(FirestoreCollections.JOBS)
      .doc(jobId)
      .update({
        status: JobStatus.FAILED,
        lastError: error,
        completedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });
  }

  public async incrementRetryCount(jobId: string): Promise<void> {
    await FirebaseAdmin.firestore()
      .collection(FirestoreCollections.JOBS)
      .doc(jobId)
      .update({
        retryCount: FieldValue.increment(1),
        updatedAt: FieldValue.serverTimestamp(),
      });
  }

  public async tryMarkProcessing(jobId: string): Promise<boolean> {
    const document = FirebaseAdmin.firestore()
      .collection(FirestoreCollections.JOBS)
      .doc(jobId);

    return FirebaseAdmin.firestore().runTransaction(async (transaction) => {
      const snapshot = await transaction.get(document);

      if (!snapshot.exists) {
        return false;
      }

      const job = snapshot.data() as NotificationJobDocument;

      if (job.status !== JobStatus.PENDING && job.status !== JobStatus.FAILED) {
        return false;
      }

      const update: Record<string, unknown> = {
        status: JobStatus.PROCESSING,
        processingStartedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      };

      if (job.status === JobStatus.FAILED) {
        update.retryCount = FieldValue.increment(1);
      }

      transaction.update(document, update);

      return true;
    });
  }

  public async getRetryableJobs(
    maxRetries: number,
  ): Promise<readonly NotificationJobDocument[]> {
    const snapshot = await FirebaseAdmin.firestore()
      .collection(FirestoreCollections.JOBS)
      .where("status", "==", JobStatus.FAILED)
      .where("retryCount", "<", maxRetries)
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<NotificationJobDocument, "id">),
    }));
  }

  public async resetForRetry(jobId: string): Promise<void> {
    await FirebaseAdmin.firestore()
      .collection(FirestoreCollections.JOBS)
      .doc(jobId)
      .update({
        status: JobStatus.PENDING,
        updatedAt: FieldValue.serverTimestamp(),
        lastError: null,
      });
  }
}
