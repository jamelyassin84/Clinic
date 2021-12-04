import React, { FC } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { BoldText } from '../../../components/overrides/Themed'

type Props = {
	doctor: string
	position: string
	clinic: string
	yearsOfExperience: string | Number
	image: any
	date: any
	time: any
	callback: Function
}

const AppointmentDoctor: FC<Props> = (props) => {
	return (
		<TouchableOpacity
			style={{ borderBottomColor: '#F6F7F8', borderBottomWidth: 10 }}
			onPress={() => props.callback()}>
			<View
				style={{
					flexDirection: 'row',
					paddingVertical: 35,
					backgroundColor: '#F2F4F7',
					borderBottomLeftRadius: 15,
					borderBottomRightRadius: 15,
					alignItems: 'center',
				}}>
				<View
					style={{
						borderWidth: 3,
						borderRadius: 10,
						borderColor: 'white',
						marginLeft: 34,
						height: 80,
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
							height: 80,
							width: 80,
							resizeMode: 'stretch',
							borderRadius: 10,
						}}
						source={props.image}
					/>
				</View>
				<View style={{ flex: 1, marginLeft: 15 }}>
					<BoldText style={{ fontSize: 18 }}>{props.doctor}</BoldText>
					<Text
						style={{
							color: 'gray',
							fontSize: 14,
							marginBottom: 6,
						}}>
						{props.position}, {props.yearsOfExperience} Years
					</Text>
					<Text style={{ color: 'gray', fontSize: 14 }}>
						{props.clinic}
					</Text>
				</View>
			</View>
			<View
				style={{
					paddingVertical: 16,
					paddingHorizontal: 25,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					height: 57,
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
	)
}

export default AppointmentDoctor
