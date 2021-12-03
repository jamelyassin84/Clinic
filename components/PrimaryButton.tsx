import React, { FC } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { BoldText } from './overrides/Themed'

type Props = {
	name: string
	callback: Function
}

const PrimaryButton: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<TouchableOpacity
			style={{
				alignSelf: 'center',
				height: 56,
				width: 300,
				backgroundColor: Colors[colorScheme].tint,
			}}
			onPress={() => props.callback()}>
			<BoldText style={{ color: 'white' }}>{props.name}</BoldText>
		</TouchableOpacity>
	)
}

export default PrimaryButton
