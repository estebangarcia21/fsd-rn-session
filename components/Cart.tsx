import { View, Text } from "react-native";

export interface CartItem {
  name: string;
  price: number;
}

export interface CartProps {
  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
}

export function Cart({ cartItems, setCartItems }: CartProps) {
  return (
    <View>
      <Text>Shopping Cart</Text>
      {cartItems.map((item) => (
        <Text>{item.name} - {item.price}</Text>
      ))}
    </View>
  );
}
