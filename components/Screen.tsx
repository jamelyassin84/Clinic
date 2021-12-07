import React, { FC } from 'react'
import { Dimensions, Platform, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

type Props = {
	green?: boolean
}

const AppScreen: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<SafeAreaView
			style={{
				backgroundColor: !props.green
					? Colors[colorScheme].background
					: Colors[colorScheme].BG,
			}}>
			<View
				style={{
					height: Dimensions.get('screen').height,
					width: Dimensions.get('screen').width,
					paddingTop: 10,
					backgroundColor: !props.green
						? Colors[colorScheme].background
						: Colors[colorScheme].BG,
				}}>
				{props.children}
			</View>
		</SafeAreaView>
	)
}

export default AppScreen
