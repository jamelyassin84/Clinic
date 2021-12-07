import React, { FC } from 'react'
import { Text, View } from 'react-native'
import ScreenWithBack from '../../components/ScreenWithBack'
import BookingHistoryDoctors from './BookingHistoryDoctors'

type Props = {}

const _BookingHistory: FC<Props> = (props) => {
	return (
		<ScreenWithBack header="Patient Booking History">
			<View style={{ paddingHorizontal: 17 }}>
				<BookingHistoryDoctors
					doctor="Dr. Hanadi Yassin"
					position="Cardiologist"
					clinic="Cleaveland Clinic"
					yearsOfExperience={25}
					date="Sun, 19 Apr 2021 "
					time="10:30 AM - 11:00 AM"
					image={require('../../assets/app/DoctorsList/d1.png')}
					Attended={false}
				/>

				<BookingHistoryDoctors
					doctor="Dr. Nour Ahmed"
					position="Cardiologist"
					clinic="Cleaveland Clinic"
					yearsOfExperience={25}
					date="Sun, 19 Apr 2021 "
					time="10:30 AM - 11:00 AM"
					image={require('../../assets/app/DoctorsList/d2.png')}
					Attended={true}
				/>
			</View>
		</ScreenWithBack>
	)
}

export default _BookingHistory
