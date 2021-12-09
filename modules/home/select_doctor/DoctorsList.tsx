import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText } from '../../../components/overrides/Themed'

type Props = {
	name: string
	position: string
	experience: string
	image: any
}

const DoctorsList: FC<Props> = (props) => {
	const navigation = useNavigation()
	return (
		<TouchableOpacity onPress={() => navigation.navigate('_DoctorProfile')}>
			<View
				style={{
					flexDirection: 'row',
					padding: 10,
					width: '92%',
					marginTop: 10,
					alignItems: 'center',
					shadowColor: 'gray',
					shadowOffset: {
						width: 0,
						height: 0,
					},
					shadowOpacity: 0.2,
					shadowRadius: 5.46,
					backgroundColor: 'white',
					marginHorizontal: 16,
					borderRadius: 13,
				}}>
				<View
					style={{ alignItems: 'center', justifyContent: 'center' }}>
					<View style={{ width: 60, height: 60, borderRadius: 13 }}>
						<Image
							source={props.image}
							style={{
								width: 60,
								height: 60,
								borderRadius: 13,
								resizeMode: 'stretch',
							}}
						/>
					</View>
				</View>
				<View style={{ marginLeft: 16, width: '65%' }}>
					<BoldText style={{ fontSize: 15 }}>{props.name}</BoldText>
					<Text style={{ color: '#6F7D8F', fontSize: 13 }}>
						{props.position} . {props.position} Years
					</Text>
				</View>
				<View style={{ marginLeft: 'auto', marginRight: 7 }}>
					<Image
						source={require('../../../assets/app/SelectDoctor/arrow-right.png')}
						style={{
							width: 7,
							height: 14,
							borderRadius: 13,
							resizeMode: 'stretch',
						}}
					/>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default DoctorsList
