import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import tw from "tailwind-react-native-classnames"
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/store'

import SplashScreen from './src/screens/SplashScreen'
import HomeScreen from './src/screens/HomeScreen'
import MainScreen from './src/screens/MainScreen'
import CategoryScreen from './src/screens/CategoryScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import SignInScreen from './src/screens/SignInScreen'
import MoreScreen from './src/screens/MoreScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import AccountScreen from './src/screens/AccountScreen'
import PasswordScreen from './src/screens/PasswordScreen'
import HelpScreen from './src/screens/HelpScreen'

import MapProvider from './src/contexts/MapContext'
import DatabaseProvider from './src/contexts/DatabaseContext'
import MoreContextProvider from './src/contexts/MoreContext'
import ProfileProvider from './src/contexts/profileContext'
import SettingScreen from './src/screens/SettingScreen'
import { globalStyles } from './src/utils/globalStyles'
import MessageScreen from './src/screens/MessageScreen'


const screens = [
    {
        name: 'MainScreen',
        component: MainScreen
    },
    {
        name: 'Message',
        component: MessageScreen
    },
    {
        name: 'Account',
        component: AccountScreen
    },
    {
        name: 'Setting',
        component: SettingScreen
    },
    {
        name: 'Help',
        component: HelpScreen
    },
    {
        name: 'Password',
        component: PasswordScreen
    },
    {
        name: 'Category',
        component: CategoryScreen
    },
    {
        name: 'Home',
        component: HomeScreen
    },
    {
        name: 'Profile',
        component: ProfileScreen
    },
    {
        name: 'Landing',
        component: SplashScreen
    },
    {
        name: 'SignUp',
        component: SignUpScreen
    },
    {
        name: 'More',
        component: MoreScreen
    },
    {
        name: 'SignIn',
        component: SignInScreen
    },
    {
        name: 'Details',
        component: DetailsScreen
    },
]


const App = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Provider store={store}>
            <DatabaseProvider>
                <MoreContextProvider>
                    <ProfileProvider>
                        <MapProvider>
                            <View style={[globalStyles.fullScreen, {backgroundColor: "#fff"}]}>
                                <NavigationContainer>
                                    <Stack.Navigator initialRouteName='Landing' screenOptions={{headerShown: false, gestureEnabled: true}}>
                                        { screens.map(({name, component}, index) => (
                                            <Stack.Screen key={`${name}-${index}`} name={name}  component={component} />
                                        ))}
                                    </Stack.Navigator>
                                </NavigationContainer>
                            </View>
                        </MapProvider>
                    </ProfileProvider>
                </MoreContextProvider>
            </DatabaseProvider>
        </Provider>
    )
}

export default App;