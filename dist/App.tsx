import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider/index";
import { UserProvider, useUserStore } from "./src/store/UserStore";

import TabNavigator from "./src/components/navigation/TabNavigator";
import AuthNavigator from "./src/components/navigation/AuthNavigator";

import { View, Text } from "@gluestack-ui/themed";

function LoadingScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background-50">
      <Text className="text-typography-950" size="xl">Loading...</Text>
    </View>
  );
}


function RootNavigation() {
  const { user, loading } = useUserStore();

  if (loading) return <LoadingScreen />;
  return user ? <TabNavigator /> : <AuthNavigator />;
}


export default function App() {
  useEffect(() => {
    console.log("[App] Mounted");
  }, []);

  return (
      <GluestackUIProvider mode="dark">
        <View className="bg-background-50">
          <Text className="text-typography-white" size="6xl">The Chitose Blueprint</Text>
        </View>
      </GluestackUIProvider>
  );
}
