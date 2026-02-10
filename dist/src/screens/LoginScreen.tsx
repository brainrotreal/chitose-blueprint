import React, { useState } from "react";
import { View, Text, Button, ButtonText, Input, InputField } from "@gluestack-ui/themed";
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
    <View flex={1} justifyContent="center" alignItems="center" backgroundColor="$background50" padding="$6">
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

      <Button variant="solid" onPress={handleLogin} width="300px" height="50px" margin="25px" backgroundColor="$secondary500">
        <ButtonText textAlign="center" fontSize="35px" color="$typography950" fontWeight="$bold">Login</ButtonText>
      </Button>

      {/* Bottom navigation */}
      <Button variant="link" onPress={goToRegister}>
        <ButtonText color="$secondary500">Don't have an account?</ButtonText>
      </Button>
    </View>
  );
}
