import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { PortalProvider } from "@gorhom/portal";
import AppNavigator from "./src/navigation/AuthNavigator";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PortalProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PortalProvider>
    </GestureHandlerRootView>
  );
}
