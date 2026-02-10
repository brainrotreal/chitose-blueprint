import React, { useState } from "react";
import { View, Text, Button } from "@gluestack-ui/themed";

import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";

export default function AuthNavigator() {
  const [screen, setScreen] = useState<"login" | "register">("login");

  return (
    <View flex={1} bg="$backgroundDark">
      {screen === "login" ? (
        <LoginScreen goToRegister={() => setScreen("register")} />
      ) : (
        <RegisterScreen goToLogin={() => setScreen("login")} />
      )}
    </View>
  );
}
