import { View, Text } from "@gluestack-ui/themed";
import { config } from "../../components/ui/gluestack-ui-provider/config"; // adjust path

export default function ModuleSelectionScreen() {
  return (
    <View
      flex={1}
      backgroundColor="$background50"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        fontSize={20}
        fontWeight="$bold"
        color="$typography50"
        marginBottom="$sm"
      >
        Welcome to the Module Selection Screen
      </Text>
    </View>
  );
}
