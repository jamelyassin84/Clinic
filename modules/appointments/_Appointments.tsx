import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { View } from 'react-native'
import DoctorAppointmentCard from '../../components/DoctorAppointmentCard'
import AppScreen from '../../components/Screen'

type Props = {}

const _Appointments: FC<Props> = (props) => {
	const navigation = useNavigation()

	return (
		<AppScreen>
			<View style={{ padding: 16 }}>
				<DoctorAppointmentCard
					callback={() => navigation.navigate('_AppointmentDetails')}
					doctor="Dr. Hanadi Yassin"
					position="Cardiologist"
					date="Sun, 19 Apr 2021 "
					time="10:30 AM - 11:00 AM"
					image={require('../../assets/app/Home/doctor.png')}
				/>
				<DoctorAppointmentCard
					callback={() => navigation.navigate('_AppointmentDetails')}
					doctor="Dr. Reda Amber"
					position="Oncologist"
					date="Sun, 19 Apr 2021 "
					time="10:30 AM - 11:00 AM"
					image={require('../../assets/app/NearbyClinics/amber.png')}
				/>
			</View>
		</AppScreen>
	)
}

export default _Appointments
