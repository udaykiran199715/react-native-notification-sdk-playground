"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseAdmin = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const messaging_1 = require("firebase-admin/messaging");
// Initialize immediately at module load — required for Cloud Functions v2
if ((0, app_1.getApps)().length === 0) {
    (0, app_1.initializeApp)();
}
class FirebaseAdmin {
    static app;
    static getApp() {
        if (!FirebaseAdmin.app) {
            FirebaseAdmin.app = (0, app_1.getApp)();
        }
        return FirebaseAdmin.app;
    }
    static firestore() {
        return (0, firestore_1.getFirestore)(FirebaseAdmin.getApp());
    }
    static messaging() {
        return (0, messaging_1.getMessaging)(FirebaseAdmin.getApp());
    }
}
exports.FirebaseAdmin = FirebaseAdmin;
