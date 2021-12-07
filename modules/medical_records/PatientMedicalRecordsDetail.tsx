import React, { FC } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { BoldText, Text } from '../../components/overrides/Themed'
import ScreenWithBack from '../../components/ScreenWithBack'

type Props = {}

const PatientMedicalRecordsDetail: FC<Props> = (props) => {
	return (
		<ScreenWithBack header="Patient Medical Records">
			<View style={{ paddingHorizontal: 14 }}>
				<View
					style={{
						backgroundColor: '#F2F4F7',
						padding: 20,
						marginTop: 30,
						borderRadius: 10,
					}}>
					<BoldText style={{ fontSize: 16, color: '#252525' }}>
						Cleveland Clinic
					</BoldText>

					<BoldText
						style={{
							fontSize: 13,
							color: '#6F7D8F',
							marginBottom: 28,
						}}>
						Sun, 19 Apr 2021 10:30 AM - 11:00 AM
					</BoldText>

					<Text
						style={{
							fontSize: 13,
							color: '#6F7D8F',
							marginBottom: 49,
						}}>
						Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing
						Elit, Sed Diam Nonummy Nibh Euismod Tincidunt Ut Laoreet
						Dolore Magna Aliquam Erat Volutpat.Lorem Ipsum Dolor Sit
						Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy
						Nibh Euismod Tincidunt Ut Laoreet Dolore Magna Aliquam
						Erat Volutpat
					</Text>

					<TouchableOpacity style={{ width: 70 }}>
						<Image
							style={{
								resizeMode: 'stretch',
								width: 140,
								height: 154,
							}}
							source={require('../../assets/app/PatientsMedicalDetails/pdf.png')}
						/>
					</TouchableOpacity>

					<Text
						style={{
							fontSize: 13,
							color: '#6F7D8F',
							marginBottom: 49,
							marginLeft: 35,
							marginTop: 13,
						}}>
						Download PDF
					</Text>

					<TouchableOpacity>
						<Image
							style={{
								alignSelf: 'center',
								marginTop: 20,
								resizeMode: 'contain',
								width: '120%',
								maxHeight: 105,
							}}
							source={require('../../assets/app/PatientsMedicalDetails/button.png')}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</ScreenWithBack>
	)
}

export default PatientMedicalRecordsDetail
