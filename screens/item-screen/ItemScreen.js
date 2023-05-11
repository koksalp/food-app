import { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../../helpers/constants";

import { getItemData, getItemUri } from "../../helpers/functions";
import ItemInfo from "./components/ItemInfo";
import Loading from "./components/Loading";

export default function ItemScreen({ route }) {
  const { itemName, categoryName } = route.params;

  const [itemData, setItemData] = useState({});

  useEffect(() => {
    async function fetchItemData() {
      const returnedItemData = await getItemData(itemName);
      delete returnedItemData[0].name;
      setItemData(returnedItemData[0]);
    }

    fetchItemData();
  }, []);

  return (
    <View style={styles.container}>
      {Object.keys(itemData).length === 0 ? ( 
        <Loading />
      ) : (
        <ItemInfo
          itemData={itemData}
          itemName={itemName}
          imageUri={getItemUri(itemName, categoryName)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
