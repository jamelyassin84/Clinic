import React, { FC } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { BoldText } from '../../components/overrides/Themed'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'

type Props = {
	doctor: string
	position: string
	clinic: string
	yearsOfExperience: string | Number
	image: any
	date: any
	time: any
	Attended: Boolean
}

const BookingHistoryDoctors: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<View
			style={{
				marginTop: 21,
				backgroundColor: '#F2F4F7',
				borderRadius: 15,
				borderWidth: 1,
				borderColor: '#E3EBF5',
			}}>
			<View
				style={[
					{
						position: 'absolute',
						top: 30,
						right: 24,
						zIndex: 10,
					},
					!props.Attended ? {} : { left: -500 },
				]}>
				<BoldText
					style={{ fontSize: 16, color: Colors[colorScheme].tint }}>
					Attended
				</BoldText>
			</View>
			<View
				style={[
					{
						position: 'absolute',
						top: 30,
						right: 24,
						zIndex: 10,
					},
					props.Attended ? {} : { left: -500 },
				]}>
				<BoldText style={{ fontSize: 16, color: '#E03030' }}>
					Canceled
				</BoldText>
			</View>

			<View
				style={{
					flexDirection: 'row',
					paddingVertical: 25,
					alignItems: 'center',
				}}>
				<View
					style={{
						borderWidth: 3,
						borderColor: 'white',
						marginLeft: 16,
						position: 'relative',
						zIndex: 9,
						borderRadius: 10,
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
					<BoldText
						style={{
							fontSize: 18,
							maxWidth: '60%',
							lineHeight: 21,
						}}>
						{props.doctor}
					</BoldText>
					<Text
						style={{
							color: 'gray',
							fontSize: 14,
							marginBottom: 6,
						}}>
						{props.position},
					</Text>
				</View>
			</View>
			<View
				style={{
					paddingHorizontal: 25,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					height: 57,
					marginTop: -30,
				}}>
				<BoldText style={{ color: '#6F7D8F', fontSize: 15 }}>
					{props.date}
				</BoldText>
				<BoldText
					style={{
						marginLeft: 35,
						color: '#6F7D8F',
						fontSize: 15,
					}}>
					{props.time}
				</BoldText>
			</View>
		</View>
	)
}

export default BookingHistoryDoctors
