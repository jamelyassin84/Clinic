import React, { FC } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import Card from '../../../components/Card'
import { BoldText, Text } from '../../../components/overrides/Themed'

type Props = {}

const AppointmentLocation: FC<Props> = (props) => {
	return (
		<Card>
			<BoldText style={{ fontSize: 16 }}>Cleveland Clinic</BoldText>

			<View
				style={{
					marginTop: 6,
					flexDirection: 'row',
					alignItems: 'center',
				}}>
				<BoldText style={{ fontSize: 14, marginRight: 10 }}>
					Address:
				</BoldText>
				<Text style={{ fontSize: 14 }}>
					12 Cleveland Road, Jersey Je1 4Hd, Jersey
				</Text>
			</View>
			<View style={{ borderRadius: 10, marginTop: 20 }}>
				<Image
					style={{ height: 200, width: '100%', borderRadius: 10 }}
					source={require('../../../assets/app/AppointmentDetails/clinic.png')}
				/>
			</View>

			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					marginTop: 18,
				}}>
				<View style={{ alignItems: 'center', marginRight: 41 }}>
					<TouchableOpacity>
						<Image
							style={{ height: 57, width: 47, borderRadius: 10 }}
							source={require('../../../assets/app/AppointmentDetails/call-icon.png')}
						/>
					</TouchableOpacity>
					<Text style={{ marginTop: 8, color: '#6F7D8F' }}>Call</Text>
				</View>
				<View style={{ alignItems: 'center' }}>
					<TouchableOpacity>
						<Image
							style={{ height: 57, width: 47, borderRadius: 10 }}
							source={require('../../../assets/app/AppointmentDetails/map.png')}
						/>
					</TouchableOpacity>
					<Text style={{ marginTop: 8, color: '#6F7D8F' }}>
						View Map
					</Text>
				</View>
			</View>

			<TouchableOpacity
				style={{
					alignItems: 'center',
					backgroundColor: '#DBF4EB',
					padding: 14,
					borderRadius: 12,
					marginTop: 25,
				}}>
				<BoldText style={{ color: '#00B074', fontSize: 18 }}>
					Cancel
				</BoldText>
			</TouchableOpacity>

			<TouchableOpacity
				style={{
					alignItems: 'center',
					backgroundColor: '#FBC703',
					padding: 14,
					borderRadius: 12,
					marginTop: 25,
				}}>
				<BoldText style={{ color: 'white', fontSize: 18 }}>
					Rate Us
				</BoldText>
			</TouchableOpacity>
		</Card>
	)
}

export default AppointmentLocation
