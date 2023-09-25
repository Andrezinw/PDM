import { createDrawerNavigator } from '@react-navigation/drawer';
import Sobre from '../screens/Sobre';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

const NavegacaoGaveta = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
};

export default NavegacaoGaveta;
