import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import { BoldText } from '../../../components/overrides/Themed'

type Props = {}

const ConfirmAppointmentButtons: FC<Props> = (props) => {
	const navigation = useNavigation()
	return (
		<View
			style={{
				height: 100,
				borderTopWidth: 1,
				borderTopColor: '#CFDAE8',
				width: Dimensions.get('screen').width,
				backgroundColor: 'white',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'row-reverse',
			}}>
			<TouchableOpacity
				style={{
					width: '50%',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				onPress={() => {}}>
				<Image
					style={{
						maxHeight: '100%',
						alignSelf: 'center',
						marginTop: 20,
						resizeMode: 'contain',
					}}
					source={require('../../../assets/app/ConfirmAppointment/confirm.png')}
				/>
			</TouchableOpacity>
			<View style={{ width: '50%', paddingLeft: 15 }}>
				<TouchableOpacity
					style={{
						backgroundColor: '#DBF4EB',
						borderRadius: 12,
						paddingVertical: 13,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<BoldText style={{ fontSize: 18, color: '#00B074' }}>
						Back
					</BoldText>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default ConfirmAppointmentButtons
