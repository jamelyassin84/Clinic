import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { BoldText } from '../../../components/overides/Themed'
import PrimaryButton from '../../../components/PrimaryButton'
import SocialButton from '../../../components/SocialButton'

type Props = {}

const SignInBottomModal: FC<Props> = (props) => {
	const socials = [
		require('../../../assets/app/app/SignIn/g.png'),
		require('../../../assets/app/app/SignIn/f.png'),
		require('../../../assets/app/app/SignIn/a.png'),
	]
	return (
		<View>
			<BoldText
				style={{
					marginTop: 40,
					fontSize: 20,
				}}>
				Sign in with
			</BoldText>

			<View
				style={{
					flex: 1,
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
