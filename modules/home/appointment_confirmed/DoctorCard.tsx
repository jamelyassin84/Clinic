import React, { FC } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText } from '../../../components/overrides/Themed'
import RoundedCard from '../../../components/RoundedCard'

type Props = {
	doctor: string
	position: string
	image: any
	date: any
	time: any
}

const DoctorCard: FC<Props> = (props) => {
	return (
		<RoundedCard>
			<View style={{ width: Dimensions.get('screen').width - 32 - 34 }}>
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
						justifyContent: 'center',
						paddingBottom: 30,
					}}>
					<BoldText style={{ color: '#594A88', fontSize: 15 }}>
						Date : {props.date}
					</BoldText>
					<BoldText
						style={{
							color: '#594A88',
							fontSize: 15,
						}}>
						Time : {props.time}
					</BoldText>
					<BoldText
						style={{
							color: '#0A2440',
							fontSize: 15,
							marginTop: 30,
						}}>
						Cleveland Clinic
					</BoldText>
					<Text style={{ color: '#6F7D8F', fontSize: 13 }}>
						Al Reem, Abu Dhabhi
					</Text>
				</View>
			</View>
		</RoundedCard>
	)
}

export default DoctorCard
