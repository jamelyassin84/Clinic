import React, { FC } from 'react'
import { Text, View } from 'react-native'

type Props = {}

const RoundedCard: FC<Props> = (props) => {
	return (
		<View
			style={{
				borderWidth: 1,
				borderRadius: 15,
				borderColor: '#E3EBF5',
				marginTop: 17,
			}}>
			{props.children}
		</View>
	)
}

export default RoundedCard
