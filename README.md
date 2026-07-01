# React Native Notification SDK Playground

> 🚀 Official demonstration and testing application for **react-native-notification-sdk**

The **React Native Notification SDK Playground** is the official reference application for **react-native-notification-sdk**. It demonstrates how to integrate, configure, test, and validate every major feature provided by the SDK using **Expo**, **Expo Router**, **Firebase Cloud Messaging (FCM)**, and **Firebase Firestore**.

Whether you're integrating the SDK into a new application or exploring its capabilities, this playground provides complete end-to-end examples covering notification delivery, audience targeting, deep linking, device registration, and notification testing.

---

# React Native Notification SDK

## NPM Package

📦 https://www.npmjs.com/package/react-native-notification-sdk

Install the SDK:

```bash
npm install react-native-notification-sdk
```

or

```bash
yarn add react-native-notification-sdk
```

---

# Why this Playground?

This playground has been built to help developers:

- Learn the SDK quickly
- Understand the SDK architecture
- Explore notification scenarios
- Test notification rules
- Verify Firebase Cloud Messaging integration
- Test audience targeting
- Validate notification templates
- Test deep linking
- Test notification images
- Understand the recommended integration flow

---

# Features

## Notification Engine

- Dynamic Notification Rules
- Dynamic Template Resolution
- Payload Validation
- Notification Images
- Dynamic Deep Linking
- Navigation Parameters
- Audience Resolution

---

## Audience Targeting

Supported audience types:

- All Users
- Specific Users

Examples include:

- Customer Notifications
- Employee Notifications
- Driver Notifications
- Manager Notifications
- Admin Notifications

---

## Firebase Integration

- Firebase Cloud Messaging (FCM)
- Firebase Firestore
- Device Registration
- User Registration
- Token Management

---

## Device Management

- Notification Permission
- FCM Token
- Register Current User
- Clear Current User
- Verify AudienceType.USERS

---

## Deep Linking

Every notification module has its own destination screen.

Supported modules:

- Banking
- E-Commerce
- Chat
- Healthcare
- HRMS
- Logistics
- Marketplace
- SaaS
- Social

Each notification demonstrates complete deep-link navigation using Expo Router.

---

# Playground Screens

## Dashboard

Displays SDK information and device status.

Includes:

- SDK Version
- Platform
- React Native Version
- Notification Permission
- Current User
- Firebase Information

---

## Explorer

The Explorer is the primary testing interface.

Features:

- Browse Categories
- Browse Scenarios
- View Notification Details
- View Payload
- View Navigation
- Emit Notifications
- Test Notification Rules

---

## Device

Manage the current device registration.

Features:

- View Notification Permission
- View Firebase Token
- Register Test User
- Clear Registered User
- Verify AudienceType.USERS

---

## Notification Target Screens

Dedicated module screens used to validate deep linking.

Modules:

- Banking
- E-Commerce
- Chat
- Healthcare
- HRMS
- Logistics
- Marketplace
- SaaS
- Social

Each module displays:

- Received Navigation Route
- Navigation Parameters
- Raw Payload

---

# Project Structure

```text
app/
│
├── (tabs)/
│
├── (notification-target)/
│   ├── banking.tsx
│   ├── ecommerce.tsx
│   ├── chat.tsx
│   ├── healthcare.tsx
│   ├── hrms.tsx
│   ├── logistics.tsx
│   ├── marketplace.tsx
│   ├── saas.tsx
│   └── social.tsx
│
components/
│
└── sdk-playground/
    ├── common/
    ├── context/
    ├── features/
    ├── rules/
    ├── scenarios/
    ├── services/
    └── utils/
```

---

# Supported Categories

The playground currently contains notification examples for:

- Banking
- E-Commerce
- Chat
- Healthcare
- HRMS
- Logistics
- Marketplace
- SaaS
- Social

Each category contains multiple real-world notification scenarios.

---

# Notification Lifecycle

```text
Scenario
      │
      ▼
Notification Rule
      │
      ▼
Notifications.emit(...)
      │
      ▼
Rule Engine
      │
      ▼
Payload Validation
      │
      ▼
Template Engine
      │
      ▼
Audience Resolver
      │
      ▼
Queue Publisher
      │
      ▼
Firebase Firestore
      │
      ▼
Firebase Cloud Messaging
      │
      ▼
Push Notification
      │
      ▼
User Taps Notification
      │
      ▼
Expo Router
      │
      ▼
Notification Target Screen
```

---

# Audience Testing

The playground supports all audience types provided by the SDK.

## All Users

```ts
AudienceType.ALL;
```

Notifications are delivered to every registered device.

---

## Specific Users

```ts
AudienceType.USERS;
```

Notifications are delivered only to users resolved from the configured audience sources.

Example:

```ts
audience: {
  type: AudienceType.USERS,
  sources: ["customerId"]
}
```

Payload:

```json
{
  "customerId": "CUS-1001"
}
```

The SDK automatically resolves the recipient, finds the registered device, and delivers the notification.

---

# Deep Linking

Every module demonstrates navigation using Expo Router.

Examples:

```text
/banking
/ecommerce
/chat
/healthcare
/hrms
/logistics
/marketplace
/saas
/social
```

Each notification opens its corresponding module and displays the received navigation parameters.

---

# Firebase Configuration

This Playground **does not** include Firebase configuration files because every developer should use their own Firebase project.

## Android

Download your Firebase configuration file and place it at:

```text
android/app/google-services.json
```

## iOS

Download your Firebase configuration file and place it at:

```text
ios/GoogleService-Info.plist
```

> These files are intentionally excluded from this repository because they contain project-specific Firebase configuration.

---

# SDK CLI Initialization

After installing the SDK, initialize your project by running:

```bash
npx react-native-notification-sdk init
```

The SDK CLI automatically generates the required Firebase backend configuration.

Generated files include:

```text
functions/
.firebaserc
firebase.json
firestore.indexes.json
firestore.rules
```

These files are **not included** in this repository because they are generated specifically for your Firebase project.

---

# Before Running the Playground

Complete the following steps before launching the application.

- Create a Firebase project.
- Add **google-services.json** to the Android project.
- Add **GoogleService-Info.plist** to the iOS project.
- Install the SDK.
- Run the SDK initialization command.

```bash
npm install react-native-notification-sdk

npx react-native-notification-sdk init
```

The CLI will automatically generate the required Firebase backend configuration.

---

# Files Excluded from Source Control

The following files are intentionally excluded because they contain Firebase credentials or are generated automatically.

```text
android/app/google-services.json
ios/GoogleService-Info.plist

functions/
.firebaserc
firebase.json
firestore.indexes.json
firestore.rules
```

---

# Getting Started

Install project dependencies.

```bash
npm install
```

or

```bash
yarn
```

---

# Running the Playground

Start Metro.

```bash
npm start
```

Run Android.

```bash
npm run android
```

Run iOS.

```bash
npm run ios
```

Run Web.

```bash
npm run web
```

---

# Recommended Testing Workflow

1. Launch the Playground.
2. Grant notification permission.
3. Register a test user from the Device screen.
4. Open Explorer.
5. Select a category.
6. Select a scenario.
7. Emit the notification.
8. Verify notification delivery.
9. Tap the notification.
10. Verify deep-link navigation.
11. Validate the received navigation parameters.

---

# Technology Stack

- React Native
- Expo SDK 54
- Expo Router
- TypeScript
- NativeWind
- Firebase Cloud Messaging (FCM)
- Firebase Firestore
- React Native Notification SDK

---

# Version Information

| Component                     | Version |
| ----------------------------- | ------- |
| Playground                    | 1.0.0   |
| React Native Notification SDK | 2.0.0   |
| React Native                  | 0.81.5  |
| Expo SDK                      | 54      |

---

# License

This playground is intended for demonstration, testing, and development purposes alongside **react-native-notification-sdk**.
