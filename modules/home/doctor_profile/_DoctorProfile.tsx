import React, { FC } from 'react'
import { Text, View } from 'react-native'
import ScreenWithBack from '../../../components/ScreenWithBack'

type Props = {}

const _DoctorProfile: FC<Props> = (props) => {
	return (
		<ScreenWithBack header="Doctor profile">
			<Text>_DoctorProfile</Text>
		</ScreenWithBack>
	)
}

export default _DoctorProfile
