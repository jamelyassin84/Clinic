import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
	from: any
	to: any
	isActive: boolean
}

const TimeBadge: FC<Props> = (props) => {
	return (
		<TouchableOpacity
			style={{
				flex: 1,
				marginBottom: 18,
				borderWidth: 1,
				borderColor: props.isActive ? '#00B074' : '#E3EBF5',
				paddingVertical: 10,
				paddingHorizontal: 12,
				borderRadius: 10,
				alignItems: 'center',
				backgroundColor: props.isActive ? '#00B07414' : 'white',
			}}>
			<Text style={{ color: 'black', fontSize: 14 }}>
				{props.from} - {props.from}
			</Text>
		</TouchableOpacity>
	)
}

export default TimeBadge
