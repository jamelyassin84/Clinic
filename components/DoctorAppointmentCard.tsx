import React, { FC } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { BoldText } from './overrides/Themed'
import RoundedCard from './RoundedCard'

type Props = {
	doctor: string
	position: string
	image: any
	date: any
	time: any
}

const DoctorAppointmentCard: FC<Props> = (props) => {
	return (
		<RoundedCard>
			<TouchableOpacity>
				<View
					style={{
						flexDirection: 'row',
						paddingVertical: 15,
						backgroundColor: '#F2F4F7',
						borderTopLeftRadius: 15,
						borderTopRightRadius: 15,
					}}>
					<View
						style={{
							borderWidth: 2,
							borderRadius: 10,
							borderColor: 'white',
							marginLeft: 15,
							height: 50,
						}}>
						<Image
							style={{
								height: 50,
								width: 50,
								resizeMode: 'contain',
								borderRadius: 10,
							}}
							source={props.image}
						/>
					</View>
					<View style={{ flex: 1, marginLeft: 15 }}>
						<BoldText>{props.doctor}</BoldText>
						<Text style={{ color: 'gray' }}>{props.position}</Text>
					</View>
				</View>
				<View style={{ paddingVertical: 16, paddingHorizontal: 25 }}>
					<Text>{props.date}</Text>
					<Text>{props.time}</Text>
				</View>
			</TouchableOpacity>
		</RoundedCard>
	)
}

export default DoctorAppointmentCard
