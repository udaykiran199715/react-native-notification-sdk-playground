"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseNotificationSender = void 0;
const FirebaseAdmin_1 = require("../firebase/FirebaseAdmin");
class FirebaseNotificationSender {
    async send(message, targets) {
        {
            if (targets.length === 0) {
                return {
                    success: [],
                    failed: [],
                };
            }
            const fcmData = {
                ...(message.data ?? {}),
            };
            if (message.navigation) {
                fcmData["_navigation_route"] = message.navigation.route;
                if (message.navigation.params) {
                    fcmData["_navigation_params"] = JSON.stringify(message.navigation.params);
                }
            }
            const multicast = {
                tokens: targets.map((target) => target.token),
                notification: {
                    title: message.title,
                    body: message.body,
                    imageUrl: message.imageUrl,
                },
                data: Object.keys(fcmData).length > 0 ? fcmData : undefined,
            };
            const response = await FirebaseAdmin_1.FirebaseAdmin.messaging().sendEachForMulticast(multicast);
            const success = [];
            const failed = [];
            response.responses.forEach((result, index) => {
                const token = targets[index].token;
                if (result.success) {
                    success.push(token);
                    return;
                }
                failed.push({
                    token,
                    error: result.error?.code ?? "unknown-error",
                });
            });
            return {
                success,
                failed,
            };
        }
    }
}
exports.FirebaseNotificationSender = FirebaseNotificationSender;
