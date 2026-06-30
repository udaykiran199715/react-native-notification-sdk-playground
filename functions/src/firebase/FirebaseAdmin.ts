import { App, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";
import { getMessaging, Messaging } from "firebase-admin/messaging";

// Initialize immediately at module load — required for Cloud Functions v2
if (getApps().length === 0) {
  initializeApp();
}

export class FirebaseAdmin {
  private static app: App;

  public static getApp(): App {
    if (!FirebaseAdmin.app) {
      FirebaseAdmin.app = getApp();
    }
    return FirebaseAdmin.app;
  }

  public static firestore(): Firestore {
    return getFirestore(FirebaseAdmin.getApp());
  }

  public static messaging(): Messaging {
    return getMessaging(FirebaseAdmin.getApp());
  }
}
