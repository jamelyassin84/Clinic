import React, { FC } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText, Text } from '../../../components/overrides/Themed'

type Props = {}

const AppointmentTab: FC<Props> = (props) => {
	return (
		<View style={{ marginTop: 21 }}>
			<View
				style={{
					width: 200,
					height: 44,
					borderRadius: 12,
					backgroundColor: '#ECF0F4',
					alignSelf: 'center',
					padding: 4,
					flexDirection: 'row',
				}}>
				<TouchableOpacity
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'white',
						flex: 1,
						paddingHorizontal: 21,
						paddingVertical: 7,
						borderRadius: 9,
						shadowColor: 'gray',
						shadowOffset: {
							width: 0,
							height: 0,
						},
						shadowOpacity: 0.2,
						shadowRadius: 5.46,
					}}>
					<BoldText
						style={{
							textAlign: 'center',
							fontSize: 15,
							color: '#00B074',
						}}>
						Current
					</BoldText>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						flex: 1,
						paddingHorizontal: 21,
						paddingVertical: 7,
						borderRadius: 9,
					}}>
					<Text
						style={{
							textAlign: 'center',
							fontSize: 15,
							color: '#6F7D8F',
						}}>
						History
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default AppointmentTab
