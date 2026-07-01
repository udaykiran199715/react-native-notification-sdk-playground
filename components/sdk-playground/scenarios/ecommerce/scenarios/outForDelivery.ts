import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ScenarioTags } from "../../common/tags";
import { EcommerceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoOrderPayload } from "../payloads";

export const OutForDeliveryScenario: PlaygroundScenario =
  ScenarioFactory.create({
    id: "ecommerce-out-for-delivery",

    category: ScenarioCategory.ECOMMERCE,

    title: "Out For Delivery",

    description: "The order is out for delivery and will arrive soon.",

    event: EcommerceEvents.OUT_FOR_DELIVERY,

    payload: {
      id: "evt-out-for-delivery",

      data: {
        ...DemoOrderPayload,

        status: "OUT_FOR_DELIVERY",

        driverId: "DRV-1001",

        driverName: "Ravi Kumar",

        driverPhone: "+91XXXXXXXXXX",

        vehicleNumber: "TS09AB1234",

        otp: "4567",

        estimatedArrival: "30 mins",
      },
    },

    expected: CommonExpectedResults.delivery,

    tags: ScenarioTags.DELIVERY,
  });
