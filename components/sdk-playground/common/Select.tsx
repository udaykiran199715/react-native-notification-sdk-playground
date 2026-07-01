import React, { useMemo, useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";

export interface SelectOption {
  readonly label: string;
  readonly value: string;
}

interface SelectProps {
  readonly label: string;
  readonly value?: string;
  readonly placeholder?: string;
  readonly options: readonly SelectOption[];
  readonly onChange: (value: string) => void;
}

export function Select({
  label,
  value,
  placeholder = "Select",
  options,
  onChange,
}: SelectProps): React.JSX.Element {
  const [visible, setVisible] = useState(false);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value],
  );

  return (
    <View className="mb-4">
      <Text className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {label}
      </Text>

      <Pressable
        onPress={() => setVisible(true)}
        className="h-12 flex-row items-center justify-between rounded-lg border border-neutral-300 bg-white px-4 dark:border-neutral-700 dark:bg-neutral-900"
      >
        <Text className="text-base text-neutral-900 dark:text-white">
          {selectedOption?.label ?? placeholder}
        </Text>

        <Text className="text-lg text-neutral-500">⌄</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/40">
          <View className="max-h-[70%] rounded-t-3xl bg-white dark:bg-neutral-900">
            <View className="border-b border-neutral-200 px-5 py-4 dark:border-neutral-700">
              <Text className="text-lg font-semibold text-neutral-900 dark:text-white">
                {label}
              </Text>
            </View>

            <ScrollView>
              {options.map((option) => {
                const selected = option.value === value;

                return (
                  <Pressable
                    key={option.value}
                    onPress={() => {
                      onChange(option.value);
                      setVisible(false);
                    }}
                    className={`border-b border-neutral-100 px-5 py-4 dark:border-neutral-800 ${
                      selected ? "bg-blue-50 dark:bg-blue-950" : ""
                    }`}
                  >
                    <Text
                      className={`text-base ${
                        selected
                          ? "font-semibold text-blue-600 dark:text-blue-400"
                          : "text-neutral-900 dark:text-white"
                      }`}
                    >
                      {option.label}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>

            <Pressable
              onPress={() => setVisible(false)}
              className="m-4 h-12 items-center justify-center rounded-lg bg-neutral-200 dark:bg-neutral-800"
            >
              <Text className="font-semibold text-neutral-900 dark:text-white">
                Cancel
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
