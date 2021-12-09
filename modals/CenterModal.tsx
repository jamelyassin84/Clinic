import React, { FC } from 'react'
import { Dimensions, Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText, Text } from '../components/overrides/Themed'
import DoctorCard from '../modules/home/appointment_confirmed/DoctorCard'

type Props = {}

const CenterModal: FC<Props> = (props) => {
	return (
		<View
			style={{
				position: 'absolute',
				zIndex: 99,
				backgroundColor: 'rgba(0,0,0,0.7)',
				width: Dimensions.get('screen').width,
				height: Dimensions.get('screen').height,
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<View
				style={{
					backgroundColor: 'white',
					width: Dimensions.get('screen').width - 32,
					minHeight: 540,
					borderRadius: 30,
					borderWidth: 1,
					borderColor: '#E6ECF2',
					alignItems: 'center',
				}}>
				<Image
					style={{
						height: 104,
						resizeMode: 'contain',
						marginTop: 30,
					}}
					source={require('../assets/app/ConfirmAppointment/clinic.png')}
				/>

				<BoldText
					style={{
						fontSize: 22,
						paddingHorizontal: 68,
						textAlign: 'center',
						marginTop: 10,
					}}>
					Your appointment is confirmed
				</BoldText>

				<DoctorCard
					doctor="Dr. Reda Amber"
					position="Oncologist"
					date="Thu, 25 May 2021 "
					time="02:00 PM - 02:30 PM"
					image={require('../assets/app/NearbyClinics/amber.png')}
				/>

				<TouchableOpacity style={{ marginTop: 26 }}>
					<Text style={{ color: '#00B074', fontSize: 16 }}>
						Dismiss
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default CenterModal
