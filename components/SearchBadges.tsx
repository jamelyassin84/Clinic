import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from './overrides/Themed'

type Props = {
	name: string
	callback: Function
}

const SearchBadges: FC<Props> = (props) => {
	return (
		<TouchableOpacity
			style={{
				paddingVertical: 11,
				paddingHorizontal: 16,
				backgroundColor: '#F2F5F8',
				borderRadius: 15,
				marginTop: 16,
			}}
			onPress={() => props.callback()}>
			<Text style={{ fontSize: 14 }}>{props.name}</Text>
		</TouchableOpacity>
	)
}

export default SearchBadges
