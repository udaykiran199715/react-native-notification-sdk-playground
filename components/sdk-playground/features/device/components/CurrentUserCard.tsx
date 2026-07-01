import React from "react";
import { Text, View } from "react-native";

import { Button, Section, Select } from "@/components/sdk-playground/common";
import { type NotificationUser } from "react-native-notification-sdk";

interface TestUser {
  readonly id: string;
  readonly name: string;
}

type Props = {
  readonly testUsers: readonly TestUser[];

  readonly selectedUser: NotificationUser | undefined;
  readonly onChangeUser: (userId: string) => void;

  readonly currentUser?: NotificationUser | undefined;

  readonly isLoading: boolean;

  readonly onRegister: () => void | Promise<void>;
  readonly onClear: () => void | Promise<void>;
};

export function CurrentUserCard({
  testUsers,
  selectedUser,
  onChangeUser,
  currentUser,
  isLoading,
  onRegister,
  onClear,
}: Props): React.JSX.Element {
  return (
    <Section title="Current User">
      <Select
        label="Test User"
        value={selectedUser?.id}
        options={testUsers.map((user) => ({
          label: `${user.id} - ${user?.name}`,
          value: user.id,
        }))}
        onChange={onChangeUser}
      />

      <Button title="Register User" onPress={onRegister} loading={isLoading} />

      <View className="mt-5 rounded-xl bg-neutral-100 p-4 dark:bg-neutral-900">
        <Text className="text-xs font-medium uppercase text-neutral-500">
          Registered User
        </Text>

        <Text className="mt-2 text-base font-semibold text-neutral-900 dark:text-white">
          {currentUser?.metadata?.name?.toString() ?? "No user registered"}
        </Text>
      </View>

      <Button
        title="Clear User"
        className="mt-4"
        disabled={!currentUser || isLoading}
        onPress={onClear}
      />
    </Section>
  );
}
