import React, { FC } from 'react'
import { Text, View } from 'react-native'
import DoctorAppointmentCard from '../../../components/DoctorAppointmentCard'
import ScreenWithBack from '../../../components/ScreenWithBack'

type Props = {}

const _UpcomingAppointments: FC<Props> = (props) => {
	return (
		<ScreenWithBack header="Upcoming appointments (2)">
			<View style={{ padding: 16 }}>
				<DoctorAppointmentCard
					doctor="Dr. Hanadi Yassin"
					position="Cardiologist"
					date="Sun, 19 Apr 2021 "
					time="10:30 AM - 11:00 AM"
					image={require('../../../assets/app/Home/doctor.png')}
				/>
				<DoctorAppointmentCard
					doctor="Dr. Reda Amber"
					position="Oncologist"
					date="Sun, 19 Apr 2021 "
					time="10:30 AM - 11:00 AM"
					image={require('../../../assets/app/NearbyClinics/amber.png')}
				/>
			</View>
		</ScreenWithBack>
	)
}

export default _UpcomingAppointments
