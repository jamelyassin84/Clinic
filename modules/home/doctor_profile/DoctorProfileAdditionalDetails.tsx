import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText } from '../../../components/overrides/Themed'

type Props = {}

const DoctorProfileAdditionalDetails: FC<Props> = (props) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 28,
				borderBottomWidth: 10,
				borderBottomColor: '#F5F5F5',
				paddingBottom: 23,
			}}>
			<View style={{ flex: 1 }}>
				<BoldText
					style={{
						color: '#0A2440',
						fontSize: 20,
						textAlign: 'center',
					}}>
					300+
				</BoldText>
				<Text
					style={{
						fontSize: 14,
						color: '#6F7D8F',
						textAlign: 'center',
					}}>
					Patients
				</Text>
			</View>

			<View style={{ flex: 1 }}>
				<BoldText
					style={{
						color: '#0A2440',
						fontSize: 20,
						textAlign: 'center',
					}}>
					10 Years
				</BoldText>
				<Text
					style={{
						fontSize: 14,
						color: '#6F7D8F',
						textAlign: 'center',
					}}>
					Experience
				</Text>
			</View>

			<View style={{ flex: 1 }}>
				<View
					style={{
						alignItems: 'center',
						flexDirection: 'row',
						justifyContent: 'center',
					}}>
					<Image
						style={{ height: 16, width: 16, marginRight: 6 }}
						source={require('../../../assets/app/DoctorProfile/star.png')}
					/>
					<BoldText
						style={{
							color: '#0A2440',
							fontSize: 20,
							textAlign: 'center',
						}}>
						3.0
					</BoldText>
				</View>
				<Text
					style={{
						fontSize: 14,
						color: '#6F7D8F',
						textAlign: 'center',
					}}>
					Rating
				</Text>
			</View>
		</View>
	)
}

export default DoctorProfileAdditionalDetails
