import React, { FC } from 'react'
import { Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import { BoldText } from '../../../components/overrides/Themed'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

type Props = {
	doctor: string
	position: string
	clinic: string
	yearsOfExperience: string | Number
	image: any
}

const DoctorImageAndDetails: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<View>
			<View
				style={{
					flexDirection: 'row',
					paddingVertical: 35,
					borderBottomLeftRadius: 15,
					borderBottomRightRadius: 15,
					alignItems: 'center',
				}}>
				<Image
					style={{
						position: 'absolute',
						zIndex: -1,
						height: 170,
						width: Dimensions.get('screen').width,
						resizeMode: 'stretch',
						top: 0,
					}}
					source={require('../../../assets/app/DoctorProfile/bg.png')}
				/>
				<View
					style={{
						borderWidth: 3,
						borderRadius: 10,
						borderColor: 'white',
						marginLeft: 34,
						shadowOffset: {
							width: 0,
							height: 0,
						},
						shadowOpacity: 0.2,
						shadowRadius: 5.46,
						position: 'relative',
						zIndex: 9,
						height: 105,
						width: 105,
						// elevation: 19,
					}}>
					<Image
						style={{
							height: 100,
							width: 100,
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
		</View>
	)
}

export default DoctorImageAndDetails
