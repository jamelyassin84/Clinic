import React, { FC } from 'react'
import { Image } from 'react-native'
import { BoldText } from '../../../components/overides/Themed'
import AppScreen from '../../../components/Screen'
import SignInBottomSheet from '../../../modals/SignInBottomSheet'

type Props = {}

const _SignInScreen: FC<Props> = (props) => {
	return (
		<AppScreen>
			<Image
				style={{
					height: 124,
					resizeMode: 'contain',
					position: 'absolute',
					top: '20%',
				}}
				source={require('../../../assets/app/app/SignIn/1.png')}
			/>
			<BoldText
				style={{
					textAlign: 'center',
					fontSize: 22,
					width: 212,
					alignSelf: 'center',
					position: 'absolute',
					top: '35%',
				}}>
				Clinic appointments made easily
			</BoldText>
			<SignInBottomSheet />
		</AppScreen>
	)
}

export default _SignInScreen
