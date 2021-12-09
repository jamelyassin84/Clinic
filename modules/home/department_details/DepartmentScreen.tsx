import React, { FC } from 'react'
import { Text, View } from 'react-native'
import ScreenWithBack from '../../../components/ScreenWithBack'
import ScrollVIewWithRefresh from '../../../components/ScrollVIewWithRefresh'
import { dummyDoctorsLists } from '../select_doctor/DummyDoctorsLists'
import DepartmentDoctors from './DepartmentDoctors'

type Props = {}

const DepartmentScreen: FC<Props> = (props) => {
	return (
		<ScreenWithBack header="Department Cardiologist">
			<ScrollVIewWithRefresh onRefresh={() => {}} loading={false}>
				<View style={{ height: 23 }} />
				{dummyDoctorsLists.map((doctor: any, index: number) => (
					<DepartmentDoctors
						key={index}
						name={doctor.name}
						position={doctor.position}
						experience={doctor.experience}
						image={doctor.image}
					/>
				))}
			</ScrollVIewWithRefresh>
		</ScreenWithBack>
	)
}

export default DepartmentScreen
