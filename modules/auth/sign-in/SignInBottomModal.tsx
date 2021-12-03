import React, { FC } from 'react'
import { View } from 'react-native'
import { BoldText, Text } from '../../../components/overides/Themed'
import PrimaryButton from '../../../components/PrimaryButton'
import SocialButton from '../../../components/SocialButton'

type Props = {}

const SignInBottomModal: FC<Props> = (props) => {
	const socials = [
		require('../../../assets/app/SignIn/g.png'),
		require('../../../assets/app/SignIn/f.png'),
		require('../../../assets/app/SignIn/a.png'),
	]
	return (
		<View>
			<Text
				style={{
					margin: 30,
					fontSize: 20,
					alignSelf: 'center',
				}}>
				Sign in with
			</Text>

			<View
				style={{
					flexDirection: 'row',
					marginHorizontal: 24,
					alignContent: 'center',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				{socials.map((image: any, index: number) => (
					<SocialButton
						key={index}
						image={image}
						callback={() => {}}
					/>
				))}
			</View>
		</View>
	)
}

export default SignInBottomModal
