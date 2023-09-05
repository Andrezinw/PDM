import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Login</Text>
      <TextInput
        style={estilos.input}
        placeholder="Email"
        keyboard="email-address"
      />
      <TextInput
        style={estilos.input}
        placeholder="Senha"
        secureTextEbtry={true}
      />
      <Button title="Entrar"/>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgraundColor: 'snow',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    lineHeight: 48,
    borderBottomWidth: 1,
    borderBottomColor: 'lighgray',
    marginBottom: 16,
  },
});

export default Login;
