import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import Card from '../../../components/Card'
import DoctorAppointmentCard from '../../../components/DoctorAppointmentCard'
import ScreenWithBack from '../../../components/ScreenWithBack'
import AppointmentDoctor from './AppointmentDoctor'
import AppointmentLocation from './AppointmentLocation'

type Props = {}

const _AppointmentDetails: FC<Props> = (props) => {
	const navigation = useNavigation()

	return (
		<ScreenWithBack header="Appointment Details">
			<AppointmentDoctor
				callback={() => navigation.navigate('_AppointmentDetails')}
				doctor="Dr. Hanadi Yassin"
				position="Cardiologist"
				clinic="Cleaveland Clinic"
				yearsOfExperience={25}
				date="Sun, 19 Apr 2021 "
				time="10:30 AM - 11:00 AM"
				image={require('../../../assets/app/Home/doctor.png')}
			/>
			<AppointmentLocation />
		</ScreenWithBack>
	)
}

export default _AppointmentDetails
