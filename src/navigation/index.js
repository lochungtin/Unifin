import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import detailScreen from '../screens/detailScreen';
import homeScreen from '../screens/homeScreen';
import scanScreen from '../screens/scanScreen';
import settingsScreen from '../screens/settingsScreen';
import subScreen from '../screens/subScreen';

const Main = createStackNavigator();
const Root = createBottomTabNavigator();

class AppNav extends React.Component {

    constructor(props) {
        super(props);
    }

    main = () => {
        return (
            <Main.Navigator>
                <Main.Screen name='Home' component={homeScreen} options={{ headerShown: false }} />
                <Main.Screen name='Detail' component={detailScreen} options={{ headerShown: false }} />
            </Main.Navigator>
        )
    }

    render() {
        return (
            <NavigationContainer>
                <Root.Navigator
                    initialRouteName='Home'
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let name = '';
                            switch (route.name) {
                                case 'Scan':
                                    name = 'home';
                                    break;
                                case 'Home':
                                    name = 'home';
                                    break;
                                case 'Sub':
                                    name = 'home';
                                    break;
                                case 'Settings':
                                    name = 'dots-horizontal-circle-outline';
                                    break;
                            }
                            return <Icon name={name} size={size} color={color} />
                        }
                    })}
                    tabBarOptions={{

                    }}
                >
                    <Root.Screen name='Scan' component={scanScreen} />
                    <Root.Screen name='Home' component={this.main} />
                    <Root.Screen name='Sub' component={subScreen} />
                    <Root.Screen name='Settings' component={settingsScreen} />
                </Root.Navigator>
            </NavigationContainer>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(AppNav);