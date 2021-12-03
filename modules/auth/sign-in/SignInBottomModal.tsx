import React, { FC } from 'react'
import { View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from '../../../components/overides/Themed'
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
					alignContent: 'center',
					alignItems: 'center',
					justifyContent: 'center',
					paddingHorizontal: 30,
				}}>
				{socials.map((image: any, index: number) => (
					<SocialButton
						key={index}
						image={image}
						callback={() => {}}
					/>
				))}
			</View>
			<TouchableOpacity onPress={() => {}}>
				<Image
					style={{
						height: 105,
						alignSelf: 'center',
						marginTop: 20,
						resizeMode: 'contain',
					}}
					source={require('../../../assets/app/SignIn/button.png')}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default SignInBottomModal
