import React, { FC } from 'react'
import { Text, View } from 'react-native'
import ScreenWithBack from '../../../components/ScreenWithBack'
import ClinicsCards from '../home_page/ClinicsCards'
import Clinics from './Clinics'

type Props = {}

const _NearbyClinics: FC<Props> = (props) => {
	return (
		<ScreenWithBack header="Nearby clinics (16)">
			<View style={{ padding: 16 }}>
				<Clinics
					name="Danat Al Emarat Hospital"
					type="Clinic"
					image={require('../../../assets/app/Home/danat.png')}
				/>
				<Clinics
					name="Sheikh Khalifa"
					type="Clinic"
					image={require('../../../assets/app/Home/sheik.png')}
				/>
				<Clinics
					name="Danat Al Emarat Hospital"
					type="Clinic"
					image={require('../../../assets/app/NearbyClinics/health.png')}
				/>
				<Clinics
					name="Sheikh Khalifa"
					type="Clinic"
					image={require('../../../assets/app/Home/sheik.png')}
				/>
			</View>
		</ScreenWithBack>
	)
}

export default _NearbyClinics
