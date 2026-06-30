import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { ScenarioRegistry } from "@/components/sdk-playground/scenarios/ScenarioRegistry";
import { ScenarioCategory } from "@/components/sdk-playground/scenarios/types/ScenarioCategory";

export default function ScenariosScreen() {
  const [selectedCategory, setSelectedCategory] = useState<ScenarioCategory | "All">("All");
  
  const categories = ["All", ...ScenarioRegistry.getCategories()];
  
  const scenarios = selectedCategory === "All" 
    ? ScenarioRegistry.getAll()
    : ScenarioRegistry.getByCategory(selectedCategory);

  const handleExecute = (scenario: any) => {
    // In a real app, this would execute the scenario runner
    console.log("Executing scenario:", scenario.name);
    // You could call the scenario executor here
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
        <Text className="text-xl font-bold text-gray-900 dark:text-white">Scenario Explorer</Text>
        <Text className="text-gray-500 text-sm mt-1">Execute and test predefined notification scenarios</Text>
      </View>

      <View className="py-3">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setSelectedCategory(category as any)}
              className={`px-4 py-2 mr-2 rounded-full border ${
                selectedCategory === category 
                  ? "bg-blue-600 border-blue-600" 
                  : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              }`}
            >
              <Text className={`font-medium ${
                selectedCategory === category ? "text-white" : "text-gray-700 dark:text-gray-300"
              }`}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView className="flex-1 px-4">
        {scenarios.map((scenario) => (
          <View key={scenario.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl mb-4 shadow-sm border border-gray-100 dark:border-gray-700">
            <View className="flex-row justify-between items-start">
              <View className="flex-1 pr-4">
                <Text className="text-lg font-bold text-gray-900 dark:text-white mb-1">{scenario.title}</Text>
                <Text className="text-sm text-gray-500 mb-2">{scenario.description}</Text>
                <View className="bg-blue-50 dark:bg-blue-900/30 self-start px-2 py-1 rounded">
                  <Text className="text-xs text-blue-700 dark:text-blue-300 font-medium">{scenario.category}</Text>
                </View>
              </View>
              
              <TouchableOpacity 
                onPress={() => handleExecute(scenario)}
                className="bg-green-600 px-4 py-2 rounded-lg"
              >
                <Text className="text-white font-bold">Run</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View className="h-10" />
      </ScrollView>
    </SafeAreaView>
  );
}
