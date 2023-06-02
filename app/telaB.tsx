import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{width: 150, height: 150, alignItems: 'center', justifyContent: 'center' }} source={require('./img/cerejeira2.png')}></Image>
      <Text style={styles.text}>Cadastro</Text>
      <Link style={{fontSize: 18, fontWeight: 'bold'}} href="/telaC">Ir para tela C</Link>
      <TextInput style={styles.input} placeholder='nome'></TextInput>
      <TextInput style={styles.input} placeholder='E-mail'></TextInput>
      <TextInput style={styles.input} placeholder='Data de Nascimento'></TextInput>
      <TextInput style={styles.input} placeholder='CPF'></TextInput>
      <TouchableOpacity style={styles.buttonText}>Salvar o cadastro</TouchableOpacity>
      <TouchableOpacity href="/telaA" style={styles.buttonText}>Voltar</TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 10,
    width: '80%',
    marginTop: 10,
  },
  buttonText: {
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10
  }
});
