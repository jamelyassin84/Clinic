import React, { FC } from 'react'
import { Text, View } from 'react-native'
import ConfirmAppointmentBody from './ConfirmAppointmentBody'
import ConfirmAppointmentButtons from './ConfirmAppointmentButtons'
import ConfirmAppointmentHeader from './ConfirmAppointmentHeader'

type Props = {
	willConfirm: Function
}

const _ConfirmAppointmentComponent: FC<Props> = (props) => {
	return (
		<View>
			<ConfirmAppointmentHeader />
			<ConfirmAppointmentBody />
			<ConfirmAppointmentButtons
				willConfirm={() => {
					props.willConfirm()
				}}
			/>
		</View>
	)
}

export default _ConfirmAppointmentComponent
