import React, { FC } from 'react'
import { Image } from 'react-native'
import { BoldText } from '../../../components/overides/Themed'
import AppScreen from '../../../components/Screen'

type Props = {}

const _SignInScreen: FC<Props> = (props) => {
	return (
		<AppScreen>
			<BoldText style={{ textAlign: 'center' }}>
				Clinic appointments made easily
			</BoldText>
		</AppScreen>
	)
}

export default _SignInScreen
