import { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { getProperString } from "../../../helpers/functions"; 
export default function ItemInfo({
  itemData,
  itemName,
  imageUri,
  handleImageLoaded,
}) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  function handleImageLoaded() {
    console.log("image loaded successfully"); 
    setIsImageLoaded(true);
  }
  return (
    <View style={styles.container}>
      {!isImageLoaded && (
        <View style={[styles.imageLoadingContainer, styles.imageDimensions]}>
          <Text style={styles.imageLoadingText}>Image Loading...</Text>
        </View>
      )}
      <Image
        style={[
          styles.image,
          styles.imageDimensions,
          !isImageLoaded && { display: "none" }, 
        ]}
        source={{ uri: imageUri }}
        onLoad={handleImageLoaded}
      />
      <Text style={[styles.heading]}>{itemName.toUpperCase()}</Text>
      <FlatList
        data={Object.keys(itemData)}
        keyExtractor={(item) => Math.random().toString()}
        renderItem={({ item }) => (
          <Text style={styles.text}>
            <Text style={styles.bold}>{getProperString(item)}: </Text>
            {itemData[item]}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  image: {
    marginBottom: 16,
  },
  imageDimensions: {
    width: "100%",
    height: 300,
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
  text: {
    fontSize: 18,
    margin: 8,
  },
  bold: {
    fontWeight: "bold",
  },
  imageLoadingText: {
    fontSize: 30,
  },
  imageLoadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
