import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName, Platform } from 'react-native'
import BottomTabICon from '../components/BottomTabICon'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import _Appointments from '../modules/appointments/_Appointments'
import _Home from '../modules/home/home_page/_Home'
import _Promotions from '../modules/promotions/_Promotions'
import _Settings from '../modules/settings/_Settings'
import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import { RootStackParamList, RootTabParamList } from '../types'
import { resolveHomeIcon } from './HomeIcons'

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName
}) {
	return (
		<NavigationContainer
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<RootNavigator />
		</NavigationContainer>
	)
}

// ---------- Screens ----------

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: 'Oops!' }}
			/>
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	)
}

// ---------- BottomTab ----------

const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
	const colorScheme = useColorScheme()

	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
				tabBarStyle: {
					height: 83,
					borderTopWidth: 1,
					borderTopColor: Colors[colorScheme].borderColor,
				},
				tabBarHideOnKeyboard: true,
			}}>
			<BottomTab.Screen
				name="Home"
				component={_Home}
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<BottomTabICon
							sources={resolveHomeIcon('home')}
							color={color}
						/>
					),
					headerShown: false,
					tabBarLabelStyle: {
						transform: [
							{
								translateY: Platform.OS === 'android' ? -28 : 0,
							},
						],
					},
					tabBarIconStyle: {
						marginTop: -20,
					},
				}}
			/>
			<BottomTab.Screen
				name="Appointments"
				component={_Appointments}
				options={{
					title: 'Appointments',
					tabBarIcon: ({ color }) => (
						<BottomTabICon
							sources={resolveHomeIcon('appointments')}
							color={color}
						/>
					),
					headerShown: false,
					tabBarLabelStyle: {
						transform: [
							{
								translateY: Platform.OS === 'android' ? -28 : 0,
							},
						],
					},
					tabBarIconStyle: {
						marginTop: -20,
					},
				}}
			/>
			<BottomTab.Screen
				name="Settings"
				component={_Settings}
				options={{
					title: 'Settings',
					tabBarIcon: ({ color }) => (
						<BottomTabICon
							sources={resolveHomeIcon('settings')}
							color={color}
						/>
					),
					headerShown: false,
					tabBarLabelStyle: {
						transform: [
							{
								translateY: Platform.OS === 'android' ? -28 : 0,
							},
						],
					},
					tabBarIconStyle: {
						marginTop: -20,
					},
				}}
			/>
			<BottomTab.Screen
				name="Promotions"
				component={_Promotions}
				options={{
					title: 'Promotions',
					tabBarIcon: ({ color }) => (
						<BottomTabICon
							sources={resolveHomeIcon('promotion')}
							color={color}
						/>
					),
					headerShown: false,
					tabBarLabelStyle: {
						transform: [
							{
								translateY: Platform.OS === 'android' ? -28 : 0,
							},
						],
					},
					tabBarIconStyle: {
						marginTop: -20,
					},
				}}
			/>
		</BottomTab.Navigator>
	)
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name']
	color: string
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}
