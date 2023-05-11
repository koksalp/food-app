import { FlatList, StyleSheet, Text, View } from "react-native";
import ItemContainer from "../../components/ItemContainer";
import { getCategories } from "../../helpers/functions";

const categories = getCategories(); 

export default function CategoriesScreen({ navigation }) { 
  function handlePress(categoryName) {
    navigation.navigate("Items", {
      categoryName: categoryName,
    });
  }

  return (
    <View style={styles.outerContainer}>
      <FlatList
        numColumns={2}
        data={Object.keys(categories)}
        keyExtractor={(item) => item } 
        renderItem={({ item }) => (
          <ItemContainer
            itemName={categories[item].name.toUpperCase()}
            color={categories[item].color} 
            onPress={() => handlePress(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({}); 