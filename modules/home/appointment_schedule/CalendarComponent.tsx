import React, { FC } from 'react'
import { View } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'

type Props = {}

const CalendarComponent: FC<Props> = (props) => {
	LocaleConfig.locales['fr'] = {
		monthNames: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		monthNamesShort: [
			'Jan.',
			'Feb.',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul.',
			'Aug',
			'Sep.',
			'Oct.',
			'Nov.',
			'Déc.',
		],
		dayNames: [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday',
		],
		dayNamesShort: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		today: 'Today',
	}
	LocaleConfig.defaultLocale = 'fr'

	return (
		<View style={{ marginVertical: 26 }}>
			<Calendar theme={{}} />
		</View>
	)
}

export default CalendarComponent
