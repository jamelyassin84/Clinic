import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Card from '../../../components/Card'
import DoctorAppointmentCard from '../../../components/DoctorAppointmentCard'
import { BoldText, Text } from '../../../components/overrides/Themed'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

type Props = {}

const HomeUpcomingAppointments: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const navigation = useNavigation()
	return (
		<Card>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<BoldText style={{ fontSize: 15, flex: 1 }}>
					Upcoming appointments
				</BoldText>
				<TouchableOpacity style={{ alignSelf: 'flex-end' }}>
					<Text style={{ color: Colors[colorScheme].tint }}>
						show all
					</Text>
				</TouchableOpacity>
			</View>
			<DoctorAppointmentCard
				doctor="Dr. Hanadi Yassin"
				position="Cardiologist"
				date="Sun, 19 Apr 2021 "
				time="10:30 AM - 11:00 AM"
				image={require('../../../assets/app/Home/doctor.png')}
			/>
		</Card>
	)
}

export default HomeUpcomingAppointments
