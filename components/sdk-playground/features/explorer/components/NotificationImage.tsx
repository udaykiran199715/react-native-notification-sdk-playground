import React from "react";
import { Image } from "react-native";

type Props = {
  image?: string;
};

export function NotificationImage({
  image,
}: React.PropsWithChildren<Props>): React.JSX.Element | null {
  if (!image) {
    return null;
  }

  return (
    <Image
      source={{ uri: image }}
      resizeMode="cover"
      className="mt-4 h-48 w-full rounded-xl"
    />
  );
}
