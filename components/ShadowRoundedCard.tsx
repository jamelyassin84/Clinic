import React, { FC } from 'react'
import { Text, View } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

type Props = {
	margin?: boolean
}

const ShadowRoundedCard: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<View
			style={{
				borderWidth: 1,
				borderRadius: 15,
				borderColor: '#E3EBF5',
				marginTop: 17,
				marginRight: props.margin ? 15 : 0,
				shadowColor: 'gray',
				shadowOffset: {
					width: 2,
					height: 2,
				},
				shadowOpacity: 0.3,
				shadowRadius: 8.46,
				backgroundColor: Colors[colorScheme].background,
				// elevation: 19,
			}}>
			{props.children}
		</View>
	)
}

export default ShadowRoundedCard
