import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { BoldText } from '../../../components/overrides/Themed'

type Props = {}

const ConfirmAppointmentHeader: FC<Props> = (props) => {
	return (
		<View
			style={{
				paddingVertical: 16,
				paddingHorizontal: 15,
				borderBottomWidth: 1,
				borderBottomColor: '#E3EBF5',
			}}>
			<BoldText style={{ fontSize: 16 }}>Confirm Appointment</BoldText>
		</View>
	)
}

export default ConfirmAppointmentHeader
