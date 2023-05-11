import { Pressable, StyleSheet, Text, View } from "react-native";

export default function LoadImage({ handleImageLoaded, style }) { 
  return (
    <View style={[styles.container, style, ]}>
      <Pressable onPress={handleImageLoaded} style={styles.pressable}> 
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.textMain]}>Image Loading...</Text>
          <Text style={[styles.text, styles.textSecondary]}>If it took longer than usual, click here to load image</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: "white",
  }, 
  pressable: {
    flex: 1 
  } , 
  textContainer: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    paddingVertical: 8, 
  } , 
  text: {
    textAlign: "center", 
    color: "black", 
  }, 
  textMain: { 
    fontSize: 24, 
    color: "black", 
  } , 
  textSecondary: {
    fontSize: 16, 
    color: "black", 
  }
});
