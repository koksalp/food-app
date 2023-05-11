import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/categories-screen/CategoriesScreen";
import ItemScreen from "./screens/item-screen/ItemScreen";
import ItemsScreen from "./screens/items-screen/ItemsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriesScreen} /> 
          <Stack.Screen name="Items" component={ItemsScreen} /> 
          <Stack.Screen name="Item" component={ItemScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
