import { QueryDocumentSnapshot } from "firebase-admin/firestore";

import { FirestoreCollections } from "../constants/FirestoreCollections";
import { FirebaseAdmin } from "../firebase/FirebaseAdmin";
import { DeviceDocument } from "../models/DeviceDocument";

export class DeviceRepository {
  public async getDevicesByUserIds(
    userIds: readonly string[],
  ): Promise<readonly DeviceDocument[]> {
    if (userIds.length === 0) {
      return [];
    }

    const snapshot = await FirebaseAdmin.firestore()
      .collection(FirestoreCollections.DEVICES)
      .where("userId", "in", [...userIds])
      .get();

    return snapshot.docs.map(
      (document: QueryDocumentSnapshot) => document.data() as DeviceDocument,
    );
  }

  public async deleteToken(token: string): Promise<void> {
    await FirebaseAdmin.firestore()
      .collection(FirestoreCollections.DEVICES)
      .doc(token)
      .delete();
  }

  public async getAllTokens(): Promise<readonly DeviceDocument[]> {
    const snapshot = await FirebaseAdmin.firestore()
      .collection(FirestoreCollections.DEVICES)
      .get();

    return snapshot.docs.map(
      (document: QueryDocumentSnapshot) => document.data() as DeviceDocument,
    );
  }
}
