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
import SignUp from './src/screens/SignUpScreen'
import SignIn from './src/screens/SignInScreen'
import MoreScreen from './src/screens/MoreScreen'
import Details from './src/screens/DetailsScreen'
import Profile from './src/screens/ProfileScreen'
import Account from './src/screens/AccountScreen'
import PasswordScreen from './src/screens/PasswordScreen'

import MapProvider from './src/contexts/MapContext'
import DatabaseProvider from './src/contexts/DatabaseContext'
import MoreContextProvider from './src/contexts/MoreContext'
import ProfileProvider from './src/contexts/profileContext'


const screens = [
    {
        name: 'MainScreen',
        component: MainScreen
    },
    {
        name: 'Account',
        component: Account
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
        component: Profile
    },
    {
        name: 'Landing',
        component: SplashScreen
    },
    {
        name: 'SignUp',
        component: SignUp
    },
    {
        name: 'More',
        component: MoreScreen
    },
    {
        name: 'SignIn',
        component: SignIn
    },
    {
        name: 'Details',
        component: Details
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
                            <View style={[tw`w-full h-full`, {backgroundColor: "#fff"}]}>
                                <NavigationContainer>
                                    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false, gestureEnabled: true}}>
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