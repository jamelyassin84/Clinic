import React, { FC } from 'react'
import { Dimensions, Platform, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

type Props = {}

const AppScreen: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<SafeAreaView>
			<View
				style={{
					height: Dimensions.get('screen').height,
					width: Dimensions.get('screen').width,
					paddingTop: Platform.OS === 'ios' ? 40 : 20,
					backgroundColor: Colors[colorScheme].background,
				}}>
				{props.children}
			</View>
		</SafeAreaView>
	)
}

export default AppScreen
