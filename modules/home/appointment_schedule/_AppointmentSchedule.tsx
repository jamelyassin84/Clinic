import React, { FC } from 'react'
import ScreenWithBack from '../../../components/ScreenWithBack'
import AppointmentTab from './AppointmentTab'
import ChooseTime from './ChooseTime'
import Calendar from './Calendar'
import { View } from '../../../components/overrides/Themed'
import { Dimensions } from 'react-native'
import ScheduleNowButton from './ScheduleNowButton'

type Props = {}

const _AppointmentSchedule: FC<Props> = (props) => {
	return (
		<View style={{ height: Dimensions.get('screen').height }}>
			<ScreenWithBack header="Select date & time">
				<AppointmentTab />
				<Calendar />
				<ChooseTime />
			</ScreenWithBack>
			<ScheduleNowButton />
		</View>
	)
}

export default _AppointmentSchedule
