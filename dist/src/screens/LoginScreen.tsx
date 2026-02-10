import React, { useState } from "react";
import { View } from "@/components/ui/view";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
// import { View, Input, Button, Text } from "@gluestack-ui/themed";
import { config } from "../../components/ui/gluestack-ui-provider/config"; // adjust path
import { useUserStore } from "../store/UserStore";

export default function LoginScreen({ goToRegister }) {
  const { login } = useUserStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      await login(email, password);
    } catch (e) {
      console.log("Login error:", e);
    }
  }

  return (
    <View className="flex-1 justify-center items-center bg-background-50 p-6">
      <Input className="rounded mb-4 w-64">
        <InputField
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
      </Input>

      <Input className="rounded mb-4 w-64">
        <InputField
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </Input>

      <Button className="bg-secondary-500 m-[25px]" onPress={handleLogin} action="primary" variant="solid" size="xl">
        <ButtonText className="text-typography-950 font-bold">Login</ButtonText>
      </Button>

      {/* Bottom navigation */}
      <Button className="" onPress={goToRegister}>
        <ButtonText className="text-secondary-500">Don't have an account?</ButtonText>
      </Button>
    </View>
  );
}
