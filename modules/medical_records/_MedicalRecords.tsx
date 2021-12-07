import React, { FC } from 'react'
import { Text, View } from 'react-native'
import ScreenWithBack from '../../components/ScreenWithBack'
import PatientsMedicalRecord from './PatientsMedicalRecord'

type Props = {}

const _MedicalRecords: FC<Props> = (props) => {
	return (
		<ScreenWithBack header="Patient Medical Records">
			<View style={{ paddingHorizontal: 14 }}>
				<PatientsMedicalRecord
					doctor="Dr. Hanadi Yassin"
					position="Cardiologist"
					clinic="Cleaveland Clinic"
					image={require('../../assets/app/DoctorsList/d1.png')}
					hasResults={true}
				/>
				<PatientsMedicalRecord
					doctor="Dr. Iram Sarfaz"
					position="Cardiologist"
					clinic="Cleaveland Clinic"
					image={require('../../assets/app/DoctorsList/d5.png')}
					hasResults={false}
				/>
				<PatientsMedicalRecord
					doctor="Dr. Hanadi Yassin"
					position="Cardiologist"
					clinic="Cleaveland Clinic"
					image={require('../../assets/app/DoctorsList/d1.png')}
					hasResults={false}
				/>
			</View>
		</ScreenWithBack>
	)
}

export default _MedicalRecords
