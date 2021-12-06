import React, { FC } from 'react'
import { Text, View } from 'react-native'

type Props = {
	name: string
	position: string
	experience: string
	image: any
}

const DoctorsList: FC<Props> = (props) => {
	return (
		<View>
			<Text>DoctorsList</Text>
		</View>
	)
}

export default DoctorsList
