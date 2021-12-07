import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { BoldText, Text } from '../../components/overrides/Themed'

type Props = {
	image: any
	promo: string
	services: string
	clinic_name: string
	type: string
	date: any
	others: string
	overlay: string
}

const PromoClinics: FC<Props> = (props) => {
	const navigation = useNavigation()
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('_ClinicDetails')}
			style={{
				marginTop: 20,
				backgroundColor: 'white',
				borderRadius: 10,
				height: 205,
				shadowColor: 'gray',
				shadowOffset: {
					width: 0,
					height: 0,
				},
				shadowOpacity: 0.35,
				shadowRadius: 14.46,
				marginHorizontal: 16,
			}}>
			<View
				style={{
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
					height: 140,
					backgroundColor: props.overlay,
					position: 'absolute',
					zIndex: 999,
					width: '100%',
					paddingHorizontal: 20,
					paddingVertical: 40,
				}}>
				<Text style={{ color: 'white', fontSize: 41 }}>
					{props.promo}
				</Text>
				<Text style={{ color: 'white', fontSize: 20 }}>
					{props.services}
				</Text>
				<Text
					style={{
						color: 'white',
						fontSize: 7,
						alignSelf: 'flex-end',
					}}>
					{props.others}
				</Text>
			</View>

			<View
				style={{
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
					height: 140,
					position: 'relative',
					zIndex: -1,
				}}>
				<Image
					source={props.image}
					style={{
						height: 140,
						resizeMode: 'stretch',
						borderTopLeftRadius: 10,
						borderTopRightRadius: 10,
						width: '100%',
					}}
				/>
			</View>

			<View style={{ padding: 16, paddingVertical: 12 }}>
				<BoldText style={{ fontSize: 15, color: '#0A2440' }}>
					{props.clinic_name}
				</BoldText>
				<View style={{ flexDirection: 'row' }}>
					<Text style={{ color: '#6F7D8F', fontSize: 13, flex: 1 }}>
						{props.type}
					</Text>
					<Text style={{ color: '#6F7D8F', fontSize: 13 }}>
						Valid Til {props.date}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default PromoClinics
