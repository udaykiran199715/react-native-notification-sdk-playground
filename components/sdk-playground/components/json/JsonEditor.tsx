import * as Clipboard from "expo-clipboard";
import React, { useEffect, useMemo, useState } from "react";
import { TextInput, View } from "react-native";

import { Card } from "../../common";
import { JsonStatus } from "./JsonStatus";
import { JsonToolbar } from "./JsonToolbar";

type Props = {
  value: object;

  onChange?(value: object): void;
};

export function JsonEditor({ value, onChange }: Props): React.JSX.Element {
  const initialValue = useMemo(() => JSON.stringify(value, null, 2), [value]);

  const [text, setText] = useState(initialValue);

  useEffect(() => {
    setText(initialValue);
  }, [initialValue]);

  const valid = useMemo(() => {
    try {
      JSON.parse(text);
      return true;
    } catch {
      return false;
    }
  }, [text]);

  const handleFormat = () => {
    try {
      const formatted = JSON.stringify(JSON.parse(text), null, 2);

      setText(formatted);
    } catch {}
  };

  const handleReset = () => {
    setText(initialValue);
  };

  const handleCopy = async () => {
    await Clipboard.setStringAsync(text);
  };

  const handleChange = (value: string) => {
    setText(value);

    try {
      onChange?.(JSON.parse(value));
    } catch {}
  };

  return (
    <Card>
      <JsonToolbar
        onFormat={handleFormat}
        onReset={handleReset}
        onCopy={handleCopy}
      />

      <JsonStatus valid={valid} />

      <View className="mt-4 rounded-xl bg-neutral-100 p-3 dark:bg-neutral-950">
        <TextInput
          multiline
          value={text}
          onChangeText={handleChange}
          autoCorrect={false}
          autoCapitalize="none"
          textAlignVertical="top"
          className="min-h-[320px] font-mono text-sm text-neutral-900 dark:text-white"
        />
      </View>
    </Card>
  );
}
