import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { BoldText } from '../overrides/Themed'

type Props = {
	label: string
	placeholder?: string
	isSelect?: boolean
}

const PatientsDetailFormDefault: FC<Props> = (props) => {
	return (
		<View style={{ flex: 1, paddingHorizontal: 30 }}>
			<BoldText style={{ fontSize: 11 }}>{props.label}</BoldText>
			<TextInput
				placeholder={props.placeholder}
				style={{
					width: '100%',
					borderWidth: 1,
					borderColor: '#CFDAE8',
					height: 38,
					fontSize: 11,
					padding: 10,
					marginTop: 7,
					borderRadius: 6,
					marginBottom: 21,
				}}
			/>
		</View>
	)
}

export default PatientsDetailFormDefault
