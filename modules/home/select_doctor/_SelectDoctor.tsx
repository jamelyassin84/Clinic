import React, { FC } from 'react'
import { Text, View } from 'react-native'
import AppScreen from '../../../components/Screen'
import ScrollVIewWithRefresh from '../../../components/ScrollVIewWithRefresh'
import DoctorsList from './DoctorsList'
import { dummyDoctorsLists } from './DummyDoctorsLists'
import SelectDoctorHeader from './SelectDoctorHeader'
import SelectDoctorSearch from './SelectDoctorSearch'
import SelectDoctorTabs from './SelectDoctorTabs'

type Props = {}

const _SelectDoctor: FC<Props> = (props) => {
	return (
		<AppScreen>
			<SelectDoctorHeader />

			<ScrollVIewWithRefresh onRefresh={() => {}} loading={false}>
				<SelectDoctorSearch />
				<SelectDoctorTabs />

				{dummyDoctorsLists.map((doctor: any, index: number) => (
					<DoctorsList
						key={index}
						name={doctor.name}
						position={doctor.position}
						experience={doctor.experience}
						image={doctor.image}
					/>
				))}
			</ScrollVIewWithRefresh>
		</AppScreen>
	)
}

export default _SelectDoctor
