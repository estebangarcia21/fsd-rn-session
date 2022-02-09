import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ReadexPro_400Regular, ReadexPro_500Medium, ReadexPro_600SemiBold, ReadexPro_700Bold } from '@expo-google-fonts/readex-pro';
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';
import { IndexShoppingItem } from './components/IndexShoppingItem';
import { Cart, CartItem } from './components/Cart';
import { useState } from 'react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { name: 'Apple', price: 1.99 },
    { name: 'Banana', price: 0.99 },
    { name: 'Orange', price: 0.59 },
  ]);
  const [fontsLoaded] = useFonts({
    ReadexPro_400Regular,
    ReadexPro_500Medium,
    ReadexPro_600SemiBold,
    ReadexPro_700Bold,
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Shoppy</Text>

      <IndexShoppingItem name='Shoes' price={100} />
      <IndexShoppingItem name='Boots' price={120} />
      <IndexShoppingItem name='Bicycle' price={1} />

      <Cart cartItems={cartItems} setCartItems={setCartItems} />
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40
  },
  titleText: {
    fontSize: 60,
    fontWeight: '600',
    fontFamily: 'ReadexPro_700Bold',
  }
});
