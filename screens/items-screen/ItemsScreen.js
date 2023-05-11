import { FlatList, StyleSheet, Text, View } from "react-native";
import ItemContainer from "../../components/ItemContainer";
import { CATEGORIES } from "../../helpers/constants";
import { handleCategoryName } from "../../helpers/functions";

export default function ItemsScreen({ navigation, route }) {
  const { categoryName } = route.params; 
  const items = CATEGORIES[categoryName].items; 

  function handlePress(itemName) {
    navigation.navigate("Item", {
        itemName: itemName, 
        categoryName: categoryName 
    }); 
  } 
  return (
    <View style={styles.container}>
      <FlatList numColumns={2} data={items} keyExtractor={item => item.name} renderItem={({ item }) => (
          <ItemContainer
            itemName={item.name}
            color={item.color} 
            upperCase 
            onPress={() => handlePress(item.name)} 
          />
        )}/>
    </View>
  ); 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
