import React, { FC } from 'react'
import { Text, View } from 'react-native'
import DoctorAppointmentCard from '../../../components/DoctorAppointmentCard'

type Props = {}

const ConfirmAppointmentBody: FC<Props> = (props) => {
	return (
		<View
			style={{ marginBottom: 30, paddingHorizontal: 17, marginTop: 20 }}>
			<DoctorAppointmentCard
				callback={() => {}}
				doctor="Dr. Reda Amber"
				position="Dermatologist"
				date="Sun, 19 Apr 2021 "
				time="10:30 AM - 11:00 AM"
				image={require('../../../assets/app/DoctorsList/d5.png')}
			/>
		</View>
	)
}

export default ConfirmAppointmentBody
