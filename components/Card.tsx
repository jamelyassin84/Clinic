import React, { FC } from 'react'
import { Text, View } from 'react-native'

type Props = {}

const Card: FC<Props> = (props) => {
	return (
		<View
			style={{
				width: '100%',
				borderBottomColor: '#F6F7F8',
				borderBottomWidth: 10,
				padding: 20,
			}}>
			{props.children}
		</View>
	)
}

export default Card
