import React, { useState } from "react";
import { View } from "@/components/ui/view";


import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";

export default function AuthNavigator() {
  const [screen, setScreen] = useState<"login" | "register">("login");

  return (
    <View className="flex-1 items-center justify-center bg-background-50">
      {screen === "login" ? (
        <LoginScreen goToRegister={() => setScreen("register")} />
      ) : (
        <RegisterScreen goToLogin={() => setScreen("login")} />
      )}
    </View>
  );
}
