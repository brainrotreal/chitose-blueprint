import React, { useState } from "react";
import { View } from "@/components/ui/view";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
// import { View, Input, Button, Text } from "@gluestack-ui/themed";
import { config } from "../../components/ui/gluestack-ui-provider/config"; // adjust path
import { useUserStore } from "../store/UserStore";

export default function RegisterScreen({ goToLogin }) {
  const { register } = useUserStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    try {
      await register(email, password);
    } catch (e) {
      console.log("Register error:", e);
    }
  }

  return (
    <View className="flex-1 justify-center items-center bg-background-50 p-6">
      <Text className="text-3xl mb-6 font-bold text-typography-950">
        Register
      </Text>

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

      <Button className="bg-secondary-500 m-[25px]" onPress={handleRegister} action="primary" variant="solid" size="xl">
        <ButtonText className="text-typography-950 font-bold">Create Account</ButtonText>
      </Button>

      {/* Bottom navigation */}
      <Button className="" onPress={goToLogin}>
        <ButtonText className="text-secondary-500">Back to Login</ButtonText>
      </Button>
    </View>
  );
}
