import React, { useState } from "react";
import { View, Text, Button, ButtonText, Input, InputField } from "@gluestack-ui/themed";
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
    <View flex={1} justifyContent="center" alignItems="center" backgroundColor="$background50" padding="$6">
      <Text fontSize={32} marginBottom="$6" fontWeight="$bold" color="$typography950">
        Register
      </Text>

      <Input variant="rounded" marginBottom="$4" width="$64">
        <InputField
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
      </Input>

      <Input variant="rounded" marginBottom="$4" width="$64">
        <InputField
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </Input>

      <Button onPress={handleRegister} width="$64" marginBottom="$4">
        <ButtonText>Create Account</ButtonText>
      </Button>

      {/* Bottom navigation */}
      <Button variant="link" onPress={goToLogin}>
        <ButtonText color="$secondary500">Back to Login</ButtonText>
      </Button>
    </View>
  );
}
