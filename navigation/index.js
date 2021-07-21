import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from '@expo/vector-icons';
import {
    getFocusedRouteNameFromRoute,
    NavigationContainer
} from "@react-navigation/native";

import StackNavigator from "./StackNavigator";
import TabsNavigator from "./TabsNavigator";

const RootStack = createStackNavigator();

const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Quadrojoy";
    return routeName
};

  const getIconHeaderRight = () => (
    //   <Button />
  <FontAwesome name="list-ol" size={24} color="black" style={{marginRight: 20}}/>
  )

const NavigationProvider = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                headerMode={"screen"}
                initialRouteName={"TabsNavigator"}
            >
                <RootStack.Screen
                    component={StackNavigator}
                    name="StackNavigator"
                    options={{ headerShown: false }}
                    initialParams={{
                        item: null
                    }}
                />
                <RootStack.Screen
                    component={TabsNavigator}
                    name="TabsNavigator"
                    options={({ route }) => ({
                        headerLeft: null,
                        headerTitle: getHeaderTitle(route),
                        headerTitleAlign: "left",
                        headerStyle: {
                            backgroundColor: '#F8F8F8',
                            shadowColor: 'transparent',
                            elevation: 0
                        },
                        headerTitleStyle: {marginLeft: 3},
                        headerRight: () => getIconHeaderRight()
                    })}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationProvider;