import type { PlaygroundScenario } from "./types/PlaygroundScenario";

import {
  OrderCancelledScenario,
  OrderConfirmedScenario,
  OrderCreatedScenario,
  OrderDeliveredScenario,
  OrderPackedScenario,
  OrderShippedScenario,
  OutForDeliveryScenario as EcommerceOutForDeliveryScenario,
  PaymentFailedScenario,
  PaymentSuccessfulScenario,
  RefundCompletedScenario,
  RefundInitiatedScenario,
} from "./ecommerce/scenarios";
import {
  TransactionSuccessScenario,
  TransactionFailedScenario,
  LowBalanceScenario,
  SalaryCreditedScenario,
  CreditCardDueScenario,
  EmiReminderScenario,
  AccountBlockedScenario,
  LoginAlertScenario,
  BeneficiaryAddedScenario,
  KycPendingScenario
} from "./banking/scenarios";
import {
  NewMessageScenario,
  MessageReactionScenario,
  MessageMentionScenario,
  GroupInviteScenario,
  GroupRemovedScenario,
  VoiceCallScenario,
  VideoCallScenario,
  MissedCallScenario,
  ChannelAnnouncementScenario,
  AdminBroadcastScenario
} from "./chat/scenarios";
import {
  AppointmentBookedScenario,
  AppointmentReminderScenario,
  AppointmentCancelledScenario,
  DoctorAssignedScenario,
  PrescriptionReadyScenario,
  MedicineReminderScenario,
  LabTestScheduledScenario,
  ReportReadyScenario,
  EmergencyAlertScenario,
  VaccinationReminderScenario
} from "./healthcare/scenarios";
import {
  LeaveRequestedScenario,
  LeaveApprovedScenario,
  LeaveRejectedScenario,
  AttendanceReminderScenario,
  ShiftAssignedScenario,
  OvertimeApprovedScenario,
  PayslipGeneratedScenario,
  HolidayAnnouncementScenario,
  BirthdayWishScenario,
  WorkAnniversaryScenario
} from "./hrms/scenarios";
import {
  ShipmentCreatedScenario,
  DriverAssignedScenario,
  VehicleDispatchedScenario,
  ShipmentDelayedScenario,
  ArrivedAtHubScenario,
  OutForDeliveryScenario as LogisticsOutForDeliveryScenario,
  DeliveryCompletedScenario,
  DeliveryFailedScenario,
  PodUploadedScenario,
  ReturnInitiatedScenario
} from "./logistics/scenarios";
import {
  FlashSaleScenario,
  WishlistPriceDropScenario,
  CouponAvailableScenario,
  SellerReplyScenario,
  OfferAcceptedScenario,
  OfferRejectedScenario,
  BidWonScenario,
  CartReminderScenario,
  RestockAlertScenario,
  NewArrivalScenario
} from "./marketplace/scenarios";
import {
  WorkspaceInviteScenario,
  TaskAssignedScenario,
  TaskCompletedScenario,
  CommentAddedScenario,
  MentionReceivedScenario,
  SubscriptionRenewedScenario,
  InvoiceGeneratedScenario,
  StorageLimitReachedScenario,
  MaintenanceScheduledScenario,
  NewFeatureReleasedScenario
} from "./saas/scenarios";
import {
  NewFollowerScenario,
  FriendRequestScenario,
  FriendAcceptedScenario,
  NewLikeScenario,
  NewCommentScenario,
  StoryMentionScenario,
  LiveStartedScenario,
  ProfileVerifiedScenario,
  AchievementUnlockedScenario,
  WeeklySummaryScenario
} from "./social/scenarios";
import { ScenarioCategory } from "./types/ScenarioCategory";

export class ScenarioRegistry {
  private static readonly scenarios: readonly PlaygroundScenario[] = [
    OrderCreatedScenario,
    OrderConfirmedScenario,
    PaymentSuccessfulScenario,
    PaymentFailedScenario,
    OrderPackedScenario,
    OrderShippedScenario,
    EcommerceOutForDeliveryScenario,
    OrderDeliveredScenario,
    OrderCancelledScenario,
    RefundInitiatedScenario,
    RefundCompletedScenario,
    TransactionSuccessScenario,
    TransactionFailedScenario,
    LowBalanceScenario,
    SalaryCreditedScenario,
    CreditCardDueScenario,
    EmiReminderScenario,
    AccountBlockedScenario,
    LoginAlertScenario,
    BeneficiaryAddedScenario,
    KycPendingScenario,
    NewMessageScenario,
    MessageReactionScenario,
    MessageMentionScenario,
    GroupInviteScenario,
    GroupRemovedScenario,
    VoiceCallScenario,
    VideoCallScenario,
    MissedCallScenario,
    ChannelAnnouncementScenario,
    AdminBroadcastScenario,
    AppointmentBookedScenario,
    AppointmentReminderScenario,
    AppointmentCancelledScenario,
    DoctorAssignedScenario,
    PrescriptionReadyScenario,
    MedicineReminderScenario,
    LabTestScheduledScenario,
    ReportReadyScenario,
    EmergencyAlertScenario,
    VaccinationReminderScenario,
    LeaveRequestedScenario,
    LeaveApprovedScenario,
    LeaveRejectedScenario,
    AttendanceReminderScenario,
    ShiftAssignedScenario,
    OvertimeApprovedScenario,
    PayslipGeneratedScenario,
    HolidayAnnouncementScenario,
    BirthdayWishScenario,
    WorkAnniversaryScenario,
    ShipmentCreatedScenario,
    DriverAssignedScenario,
    VehicleDispatchedScenario,
    ShipmentDelayedScenario,
    ArrivedAtHubScenario,
    LogisticsOutForDeliveryScenario,
    DeliveryCompletedScenario,
    DeliveryFailedScenario,
    PodUploadedScenario,
    ReturnInitiatedScenario,
    FlashSaleScenario,
    WishlistPriceDropScenario,
    CouponAvailableScenario,
    SellerReplyScenario,
    OfferAcceptedScenario,
    OfferRejectedScenario,
    BidWonScenario,
    CartReminderScenario,
    RestockAlertScenario,
    NewArrivalScenario,
    WorkspaceInviteScenario,
    TaskAssignedScenario,
    TaskCompletedScenario,
    CommentAddedScenario,
    MentionReceivedScenario,
    SubscriptionRenewedScenario,
    InvoiceGeneratedScenario,
    StorageLimitReachedScenario,
    MaintenanceScheduledScenario,
    NewFeatureReleasedScenario,
    NewFollowerScenario,
    FriendRequestScenario,
    FriendAcceptedScenario,
    NewLikeScenario,
    NewCommentScenario,
    StoryMentionScenario,
    LiveStartedScenario,
    ProfileVerifiedScenario,
    AchievementUnlockedScenario,
    WeeklySummaryScenario
  ];

  public static getAll(): readonly PlaygroundScenario[] {
    return this.scenarios;
  }

  public static getCategories(): readonly ScenarioCategory[] {
    return [...new Set(this.scenarios.map((s) => s.category))];
  }

  public static getByCategory(
    category: ScenarioCategory,
  ): readonly PlaygroundScenario[] {
    return this.scenarios.filter((scenario) => scenario.category === category);
  }

  public static getById(id: string): PlaygroundScenario | undefined {
    return this.scenarios.find((s) => s.id === id);
  }
}
