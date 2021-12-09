import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PatientsDetailDateForm from '../../../components/forms/PatientsDetailDateForm'
import PatientsDetailForm from '../../../components/forms/PatientsDetailFormDefault'
import PatientsDetailNumberForm from '../../../components/forms/PatientsDetailNumberForm'
import ScreenWithBack from '../../../components/ScreenWithBack'

type Props = {}

const _PatientDetailsScreen: FC<Props> = (props) => {
	const navigation = useNavigation()
	return (
		<ScreenWithBack header="Patient Details">
			<View style={{ paddingVertical: 30 }}>
				<PatientsDetailForm label="First name" placeholder="John" />
				<PatientsDetailForm label="Last name" placeholder="Doe" />

				<View style={{ flexDirection: 'row' }}>
					<PatientsDetailNumberForm
						label="Gender"
						placeholder="Select"
					/>
					<PatientsDetailNumberForm label="Age" placeholder="20" />
				</View>
				<PatientsDetailForm label="Address" placeholder="Type" />
				<View style={{ flexDirection: 'row' }}>
					<PatientsDetailDateForm
						label="Date Of Birth"
						placeholder="mm/dd/yyyy"
					/>
					<PatientsDetailNumberForm
						label="Mobile"
						placeholder="+971"
					/>
				</View>
				<PatientsDetailForm label="Email" placeholder="Email" />

				<TouchableOpacity
					onPress={() => navigation.navigate('_UploadAPhotoScreen')}>
					<Image
						style={{
							height: 105,
							alignSelf: 'center',
							marginTop: 20,
							resizeMode: 'contain',
						}}
						source={require('../../../assets/app/PatientsDetails/next.png')}
					/>
				</TouchableOpacity>
			</View>
		</ScreenWithBack>
	)
}

export default _PatientDetailsScreen
