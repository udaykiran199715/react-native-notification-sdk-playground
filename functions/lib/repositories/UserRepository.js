"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const FirestoreCollections_1 = require("../constants/FirestoreCollections");
const FirebaseAdmin_1 = require("../firebase/FirebaseAdmin");
class UserRepository {
    async getUser(userId) {
        const document = await FirebaseAdmin_1.FirebaseAdmin.firestore()
            .collection(FirestoreCollections_1.FirestoreCollections.USERS)
            .doc(userId)
            .get();
        if (!document.exists) {
            return null;
        }
        return document.data();
    }
}
exports.UserRepository = UserRepository;
