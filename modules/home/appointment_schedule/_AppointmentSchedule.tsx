import React, { FC } from 'react'
import ScreenWithBack from '../../../components/ScreenWithBack'
import ChooseTime from './ChooseTime'
import { View } from '../../../components/overrides/Themed'
import { Dimensions } from 'react-native'
import ScheduleNowButton from './ScheduleNowButton'
import CalendarComponent from './CalendarComponent'
import ConfirmAppointmentModal from '../../../modals/ConfirmAppointmentModal'
import CenterModal from '../../../modals/CenterModal'
import AppointmentTab from './AppointMentTab'

type Props = {}

const _AppointmentSchedule: FC<Props> = (props) => {
	const [centralModalIsShowing, setCentralModalIsShowing] =
		React.useState(false)

	return (
		<View style={{ height: Dimensions.get('screen').height }}>
			<ScreenWithBack header="Select date & time">
				<AppointmentTab />
				<CalendarComponent />
				<ChooseTime />
			</ScreenWithBack>
			<ScheduleNowButton />
			<ConfirmAppointmentModal
				willConfirm={() => {
					setCentralModalIsShowing(true)
				}}
			/>
			<CenterModal
				isShowing={centralModalIsShowing}
				willDismiss={() => setCentralModalIsShowing(false)}
			/>
		</View>
	)
}

export default _AppointmentSchedule
