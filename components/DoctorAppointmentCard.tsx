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
	callback: Function
}

const DoctorAppointmentCard: FC<Props> = (props) => {
	return (
		<RoundedCard>
			<TouchableOpacity onPress={() => props.callback()}>
				<View
					style={{
						flexDirection: 'row',
						paddingVertical: 15,
						backgroundColor: '#F2F4F7',
						borderTopLeftRadius: 15,
						borderTopRightRadius: 15,
						alignItems: 'center',
					}}>
					<View
						style={{
							borderWidth: 2,
							borderRadius: 10,
							borderColor: 'white',
							marginLeft: 15,
							height: 50,
							shadowColor: 'gray',
							shadowOffset: {
								width: 0,
								height: 0,
							},
							shadowOpacity: 0.2,
							shadowRadius: 5.46,
							position: 'relative',
							zIndex: 9,
							// elevation: 19,
						}}>
						<Image
							style={{
								height: 50,
								width: 50,
								resizeMode: 'stretch',
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
				<View
					style={{
						paddingVertical: 16,
						paddingHorizontal: 25,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<BoldText style={{ color: '#594A88', fontSize: 15 }}>
						{props.date}
					</BoldText>
					<BoldText
						style={{
							marginLeft: 20,
							color: '#594A88',
							fontSize: 15,
						}}>
						{props.time}
					</BoldText>
				</View>
			</TouchableOpacity>
		</RoundedCard>
	)
}

export default DoctorAppointmentCard
