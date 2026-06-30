"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobRepository = void 0;
const firestore_1 = require("firebase-admin/firestore");
const FirestoreCollections_1 = require("../constants/FirestoreCollections");
const JobStatus_1 = require("../enums/JobStatus");
const FirebaseAdmin_1 = require("../firebase/FirebaseAdmin");
class JobRepository {
    async getJob(jobId) {
        const document = await FirebaseAdmin_1.FirebaseAdmin.firestore()
            .collection(FirestoreCollections_1.FirestoreCollections.JOBS)
            .doc(jobId)
            .get();
        if (!document.exists) {
            return null;
        }
        return {
            id: document.id,
            ...document.data(),
        };
    }
    async markProcessing(jobId) {
        await FirebaseAdmin_1.FirebaseAdmin.firestore()
            .collection(FirestoreCollections_1.FirestoreCollections.JOBS)
            .doc(jobId)
            .update({
            status: JobStatus_1.JobStatus.PROCESSING,
            processingStartedAt: firestore_1.FieldValue.serverTimestamp(),
            updatedAt: firestore_1.FieldValue.serverTimestamp(),
        });
    }
    async markCompleted(jobId, result) {
        await FirebaseAdmin_1.FirebaseAdmin.firestore()
            .collection(FirestoreCollections_1.FirestoreCollections.JOBS)
            .doc(jobId)
            .update({
            status: JobStatus_1.JobStatus.COMPLETED,
            successfulTokens: result.success.length,
            failedTokens: result.failed.length,
            completedAt: firestore_1.FieldValue.serverTimestamp(),
            updatedAt: firestore_1.FieldValue.serverTimestamp(),
        });
    }
    async markFailed(jobId, error) {
        await FirebaseAdmin_1.FirebaseAdmin.firestore()
            .collection(FirestoreCollections_1.FirestoreCollections.JOBS)
            .doc(jobId)
            .update({
            status: JobStatus_1.JobStatus.FAILED,
            lastError: error,
            completedAt: firestore_1.FieldValue.serverTimestamp(),
            updatedAt: firestore_1.FieldValue.serverTimestamp(),
        });
    }
    async incrementRetryCount(jobId) {
        await FirebaseAdmin_1.FirebaseAdmin.firestore()
            .collection(FirestoreCollections_1.FirestoreCollections.JOBS)
            .doc(jobId)
            .update({
            retryCount: firestore_1.FieldValue.increment(1),
            updatedAt: firestore_1.FieldValue.serverTimestamp(),
        });
    }
    async tryMarkProcessing(jobId) {
        const document = FirebaseAdmin_1.FirebaseAdmin.firestore()
            .collection(FirestoreCollections_1.FirestoreCollections.JOBS)
            .doc(jobId);
        return FirebaseAdmin_1.FirebaseAdmin.firestore().runTransaction(async (transaction) => {
            const snapshot = await transaction.get(document);
            if (!snapshot.exists) {
                return false;
            }
            const job = snapshot.data();
            if (job.status !== JobStatus_1.JobStatus.PENDING && job.status !== JobStatus_1.JobStatus.FAILED) {
                return false;
            }
            const update = {
                status: JobStatus_1.JobStatus.PROCESSING,
                processingStartedAt: firestore_1.FieldValue.serverTimestamp(),
                updatedAt: firestore_1.FieldValue.serverTimestamp(),
            };
            if (job.status === JobStatus_1.JobStatus.FAILED) {
                update.retryCount = firestore_1.FieldValue.increment(1);
            }
            transaction.update(document, update);
            return true;
        });
    }
    async getRetryableJobs(maxRetries) {
        const snapshot = await FirebaseAdmin_1.FirebaseAdmin.firestore()
            .collection(FirestoreCollections_1.FirestoreCollections.JOBS)
            .where("status", "==", JobStatus_1.JobStatus.FAILED)
            .where("retryCount", "<", maxRetries)
            .get();
        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    }
    async resetForRetry(jobId) {
        await FirebaseAdmin_1.FirebaseAdmin.firestore()
            .collection(FirestoreCollections_1.FirestoreCollections.JOBS)
            .doc(jobId)
            .update({
            status: JobStatus_1.JobStatus.PENDING,
            updatedAt: firestore_1.FieldValue.serverTimestamp(),
            lastError: null,
        });
    }
}
exports.JobRepository = JobRepository;
