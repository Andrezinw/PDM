import { View, StyleSheet } from 'react-native'
import Box from './components/Box';

// componente principal do app
const App = () => (
  <View style={[styles.container, styles.flexRow  ]}>
<Box size={50} color="blue" flex={1}></Box>
<Box size={50} color="red" flex={2}></Box>
<Box size={50} color="green" flex={3}></Box>
  </View>
);

// estilo objeto StyleSheet
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: 'column-reverse',
   
  },
  flexRow: {flexDirection:"row-reverse"}
});

export default App;