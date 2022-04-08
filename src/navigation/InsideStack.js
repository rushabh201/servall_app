import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import MyTabBar from './components/MyTabBar';
import {
  DashboardStack,
  AllStack,
  ChooseGarage,
  MyCustomers,
  CustomerDetails,
  Login,
  Accounts,
  CustomerInfo,
  More,
  Parts,
  Services,
} from '../screens';

const MainStack = createNativeStackNavigator();
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function SurveyStack() {
    return (
        <Stack.Navigator
            initialRouteName={'survey'}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'survey'}
                component={SurveyScreen}
            />
            <Stack.Screen
                name={'pay-pal-account'}
                component={PayPalAccountScreen}
            />
            <Stack.Screen
                name={'survey-intro'}
                component={SurveyIntroScreen}
            />
            <Stack.Screen
                name={'survey-submitted'}
                component={SurveySubmittedScreen}
                options={{ gestureEnabled: false }}
            />
        </Stack.Navigator>
    )
}

function RewardStack() {
    return (
        <Stack.Navigator
            initialRouteName={'rewards'}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'rewards'}
                component={RewardsScreen}
            />
            <Stack.Screen
                name={'pay-pal-account'}
                component={PayPalAccountScreen}
            />
        </Stack.Navigator>
    )
}

function AccountStack() {
    return (
        <Stack.Navigator
            initialRouteName={'account'}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'account'}
                component={AccountScreen}
            />
            <Stack.Screen
                name={'change-password'}
                component={ChangePassword}
            />
            <Stack.Screen
                name={'refer-friend'}
                component={ReferFriendScreen}
            />
            <Stack.Screen
                name={'faq'}
                component={faqScreen}
            />
            <Stack.Screen
                name={'contact_us'}
                component={ContactUsScreen}
            />
            <Stack.Screen
                name={'terms-condition'}
                component={TermsCondition}
            />
            <Stack.Screen
                name={'privacy-policy'}
                component={privacyPolicyScreen}
            />
            <Stack.Screen
                name={'pay-pal-account'}
                component={PayPalAccountScreen}
            />
            <Stack.Screen
                name={'verify_user'}
                component={VerifyUserScreen}
            />
            <Stack.Screen
                name={'notification_settings'}
                component={NotificationSettingsScreen}
            />
        </Stack.Navigator>
    )
}

function MainTab() {
    return (
    <Tab.Navigator
      initialRouteName="Services"
       screenOptions={{
        tabBarActiveTintColor: colors.default_theme.primary,
        // headerRight: () => (
        //   <View style={{flexDirection: "row",justifyContent: "flex-end",paddingRight:15,width: 170}}>
        //     <Button
        //       onPress={() => navigation.navigate('ChooseGarage')}
        //       style={styles.buttonStyle}
        //       color={colors.black}
        //       icon={ (color) => <Icon name={'edit'} size={18} color={colors.secondary} /> }
        //       uppercase={false} 
        //     > Choose Garage </Button>
        //     </View>
        //   )
      }}
    
    >
      <Tab.Screen 
        name="Services"  
        component={Services} 
        style={{ fontSize:14 }}
        options={{
          tabBarLabel: 'Service',
          tabBarIcon: ({color}) => (
            <Icon name={'tools'} size={20}  color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }} 
        />
      <Tab.Screen 
        name="Parts" 
        component={Parts}   
        style={{ fontSize:14 }}     
        options={{
          tabBarLabel: 'Parts',
          tabBarIcon: ({color}) => (
            <Icon name={'wrench'} size={20}  color={color}  />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }} 
        />
      <Tab.Screen 
        name="Accounts" 
        component={Accounts}
        options={{
          tabBarLabel: 'Accounts',
          tabBarIcon: ({color}) => (
            <Icon name={'calculator'} size={20}  color={color}  />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }} 
        />
      
      <Tab.Screen 
        name="AllStack" 
        component={AllStack}  
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color}) => (
            <Icon name={'bars'} size={20}  color={color}  />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
          headerShown: false,
        }} 
        />
    </Tab.Navigator>
        // <Tab.Navigator
        //     backBehavior={'initialRoute'}
        //     // tabBarOptions={{
        //     //     keyboardHidesTabBar: true
        //     // }}
        //     screenOptions={{
        //         tabBarHideOnKeyboard: true,
        //         headerShown: false
        //     }}
        //     tabBar={props => <DashboardStack {...props} />}>
        //     <Tab.Screen
        //         name="survey"
        //         component={DashboardStack}
        //         options={({ route }) => {
        //             return ({
        //                 title: 'Surveys',
        //                 icon: 'survey'
        //             })
        //         }}
        //     />
        //     <Tab.Screen
        //         name="rewards"
        //         component={DashboardStack}
        //         options={({ route }) => {
        //             return ({
        //                 title: 'Rewards',
        //                 icon: 'rewards'
        //             })
        //         }}
        //     />
        //     <Tab.Screen
        //         name="account"
        //         component={DashboardStack}
        //         options={({ route }) => {
        //             return ({
        //                 title: 'Account',
        //                 icon: 'account'
        //             })
        //         }}
        //     />
        // </Tab.Navigator>
    )
}

export default function InsideStack() {
    return (

        // <NavigationContainer>
            <MainStack.Navigator
            initialRouteName="MainTab"
            screenOptions={{
                headerShown: false,
            }}
            >
                <MainStack.Screen name="Login" component={Login} />
                <MainStack.Screen name="MainTab" component={MainTab} />
            </MainStack.Navigator>
        // </NavigationContainer>
        // <Stack.Navigator screenOptions={{ headerShown: false }}>
        //     <Stack.Screen
        //         name={'main-tab'}
        //         component={MainTab}
        //     />
        //     {/* <Stack.Screen
        //         name={'survey-preview'}
        //         component={SurveyPreviewScreen}
        //         options={{ gestureEnabled: false }}
        //     /> */}
        //     {/* <Stack.Screen
        //         name={'forgot_password'}
        //         component={ForgotPassword}
        //     /> */}
        // </Stack.Navigator>
    )
}