import { createStackNavigator } from '@react-navigation/stack';
import { Bienvenida } from '../screen/Bienvenida';
import { Division } from '../screen/Division';



export type RootStackParams = {
  Bienvenida: undefined;
  Division: undefined;
}

const Stack = createStackNavigator <RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bienvenida"  component={Bienvenida} />
      <Stack.Screen name="Division"  component={Division} />
    </Stack.Navigator>
  );
}