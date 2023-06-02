import { Drawer } from "expo-router/drawer";
import Icon from 'react-native-vector-icons/Feather';

export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "index",
          title: "Index",
          drawerIcon: ({ color, size }) => (
            <Icon name="book" 
            color={color} 
            size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="telaA" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Sobre",
          title: "Sobre",
          drawerIcon: ({ color, size }) => (
            <Icon name="book" 
            color={color} 
            size={size} />
          ),
          drawerItemStyle: {height: 0}
        }}
      /> 
        <Drawer.Screen
          name="telaB" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Cadastro",
            title: "Cadastro",
            drawerIcon: ({ color, size }) => (
              <Icon name="home" 
              color={color} 
              size={size} />
            ),
            drawerItemStyle: {height: 0}
        }}
      />
        <Drawer.Screen
          name="telaC" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <Icon name="home" 
              color={color} 
              size={size} />
            ),
        }}
      />
    </Drawer>
  );
}