import { FirestoreCollections } from "../constants/FirestoreCollections";
import { FirebaseAdmin } from "../firebase/FirebaseAdmin";
import { UserDocument } from "../models/UserDocument";

export class UserRepository {
  public async getUser(userId: string): Promise<UserDocument | null> {
    const document = await FirebaseAdmin.firestore()
      .collection(FirestoreCollections.USERS)
      .doc(userId)
      .get();

    if (!document.exists) {
      return null;
    }

    return document.data() as UserDocument;
  }
}
