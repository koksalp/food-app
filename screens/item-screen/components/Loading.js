import { StyleSheet, Text, View } from "react-native"; 

export default function Loading() {
  return <Text style={styles.text}>Loading...</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});
