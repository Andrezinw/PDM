import { NavigationContainer } from '@react-navigation/native';
import NavegacaoPilha from './routes/navegacaoPilha'
import NavegacaoAba from './routes/NavegacaoAba'
import NavegacaoGaveta from './routes/NavegacaoGaveta'

const App = () => {
  return (
    
    <NavigationContainer>
        
    <NavegacaoAba/>

  </NavigationContainer> 

  );
};

export default App;
