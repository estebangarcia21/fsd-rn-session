import { View, StyleSheet, Text } from "react-native";
import { CartItem } from "./Cart";

export function IndexShoppingItem({ name, price }: CartItem) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{name}</Text>
      <Text style={styles.priceText}>${price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 4,
    borderColor: '#b8b8b8',
    backgroundColor: '#3be9e1',
    color: '#fff',
  },
  titleText: {
    fontSize: 25,
    fontFamily: 'ReadexPro_600SemiBold',
  },
  priceText: {
    fontSize: 16,
    fontFamily: 'ReadexPro_400Regular',
  }
});
