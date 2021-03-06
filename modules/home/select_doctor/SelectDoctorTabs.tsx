import React, { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import SelectDepartmentModal from '../../../modals/SelectDepartmentModal'
import SelectDoctorBadges from './SelectDoctorBadges'

type Props = {}

const SelectDoctorTabs: FC<Props> = (props) => {
	return (
		<View>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				style={{ margin: 22, alignSelf: 'baseline' }}>
				<SelectDoctorBadges
					name="All"
					active={true}
					callback={() => {}}
				/>
				<SelectDoctorBadges
					name="Department"
					active={false}
					callback={() => {}}
					isDropDown={true}
				/>
			</ScrollView>
		</View>
	)
}

export default SelectDoctorTabs
