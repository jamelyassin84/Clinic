import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import ScreenWithBack from '../../../components/ScreenWithBack'
import ClinicsCards from '../home_page/ClinicsCards'
import Clinics from './Clinics'

type Props = {}

const _NearbyClinics: FC<Props> = (props) => {
	const navigation = useNavigation()
	return (
		<ScreenWithBack header="Nearby clinics (16)">
			<View style={{ padding: 16 }}>
				<Clinics
					callback={() => navigation.navigate('_ClinicDetails')}
					name="Danat Al Emarat Hospital"
					type="Clinic"
					image={require('../../../assets/app/Home/danat.png')}
				/>
				<Clinics
					callback={() => navigation.navigate('_ClinicDetails')}
					name="Sheikh Khalifa"
					type="Clinic"
					image={require('../../../assets/app/Home/sheik.png')}
				/>
				<Clinics
					callback={() => navigation.navigate('_ClinicDetails')}
					name="Danat Al Emarat Hospital"
					type="Clinic"
					image={require('../../../assets/app/NearbyClinics/health.png')}
				/>
				<Clinics
					callback={() => navigation.navigate('_ClinicDetails')}
					name="Sheikh Khalifa"
					type="Clinic"
					image={require('../../../assets/app/Home/sheik.png')}
				/>
			</View>
		</ScreenWithBack>
	)
}

export default _NearbyClinics
