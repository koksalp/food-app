import { Image, Pressable, Text, View } from "react-native";

export default function ItemContainer({
  itemName,
  color,
  onPress: onPressFn,
  imageSource, upperCase, 
}) {
  return (
    <View style={[styles.outerContainer, { backgroundColor: color }]}>
      <Pressable
        style={styles.pressable}
        android_ripple={{ color: "#ccc" }}
        onPress={onPressFn}
      >
        <View style={styles.innerContainer}>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.text}>{upperCase === true ? itemName.toUpperCase() : itemName}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    height: 150,
    margin: 16,
    borderRadius: 10,
    backgroundColor: "#aaaaaa",
  },
  pressable: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  }, 
  image: {
    width: "100%", 
    height: 200, 
  }, 
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
