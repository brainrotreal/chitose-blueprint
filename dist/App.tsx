import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "./global.css";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { UserProvider, useUserStore } from "./src/store/UserStore";

import TabNavigator from "./src/components/navigation/TabNavigator";
import AuthNavigator from "./src/components/navigation/AuthNavigator";

import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { Button } from "@/components/ui/button";

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
        <UserProvider>
          <NavigationContainer>
            <RootNavigation />
            <StatusBar style="auto" />
          </NavigationContainer>
        </UserProvider>
      </GluestackUIProvider>
  );
}
