import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    getFocusedRouteNameFromRoute,
    NavigationContainer
} from "@react-navigation/native";

import StackNavigator from "./StackNavigator";
import TabsNavigator from "./TabsNavigator";

const RootStack = createStackNavigator();

const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "home";
   
    return routeName
  };

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
                        headerTitleAlign: "left"
                      })}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationProvider;