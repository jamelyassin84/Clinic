import React, { FC } from 'react'
import { Dimensions } from 'react-native'
import { BoldText, Text, View } from '../../../components/overrides/Themed'
import ScreenWithBack from '../../../components/ScreenWithBack'
import About from './About'
import DoctorImageAndDetails from './DoctorImageAndDetails'
import DoctorProfileButton from './DoctorProfileButton'

type Props = {}

const _DoctorProfile: FC<Props> = (props) => {
	return (
		<View style={{ height: Dimensions.get('screen').height }}>
			<ScreenWithBack header="Doctor profile">
				<DoctorImageAndDetails
					doctor="Dr. Hanadi Yassin"
					position="Cardiologist"
					clinic="Cleaveland Clinic"
					yearsOfExperience={25}
					image={require('../../../assets/app/Home/doctor.png')}
				/>
				<About />
			</ScreenWithBack>
			<DoctorProfileButton />
		</View>
	)
}

export default _DoctorProfile
