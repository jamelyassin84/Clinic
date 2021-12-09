import React, { FC } from 'react'
import { Text, View } from 'react-native'
import AppScreen from '../../../components/Screen'
import ScrollVIewWithRefresh from '../../../components/ScrollVIewWithRefresh'
import SelectDepartmentModal from '../../../modals/SelectDepartmentModal'
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
				<View style={{ height: 50 }} />
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
			<SelectDepartmentModal focus={true} />
		</AppScreen>
	)
}

export default _SelectDoctor
