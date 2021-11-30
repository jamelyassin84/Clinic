import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
	name: string
	callback: Function
}

const PrimaryButton: FC<Props> = (props) => {
	return (
		<TouchableOpacity
			onPress={() => {
				props.callback()
			}}></TouchableOpacity>
	)
}

export default PrimaryButton
