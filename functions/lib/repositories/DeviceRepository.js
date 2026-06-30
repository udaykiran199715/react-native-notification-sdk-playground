"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceRepository = void 0;
const FirestoreCollections_1 = require("../constants/FirestoreCollections");
const FirebaseAdmin_1 = require("../firebase/FirebaseAdmin");
class DeviceRepository {
    async getDevicesByUserIds(userIds) {
        if (userIds.length === 0) {
            return [];
        }
        const snapshot = await FirebaseAdmin_1.FirebaseAdmin.firestore()
            .collection(FirestoreCollections_1.FirestoreCollections.DEVICES)
            .where("userId", "in", [...userIds])
            .get();
        return snapshot.docs.map((document) => document.data());
    }
    async deleteToken(token) {
        await FirebaseAdmin_1.FirebaseAdmin.firestore()
            .collection(FirestoreCollections_1.FirestoreCollections.DEVICES)
            .doc(token)
            .delete();
    }
    async getAllTokens() {
        const snapshot = await FirebaseAdmin_1.FirebaseAdmin.firestore()
            .collection(FirestoreCollections_1.FirestoreCollections.DEVICES)
            .get();
        return snapshot.docs.map((document) => document.data());
    }
}
exports.DeviceRepository = DeviceRepository;
