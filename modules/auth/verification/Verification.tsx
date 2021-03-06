import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { View, Image, KeyboardAvoidingView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import BackToTop from '../../../components/BacktoTop'
import { BoldText, Text } from '../../../components/overrides/Themed'
import AppScreen from '../../../components/Screen'
import EnterMobileNumberForm from './EnterMobileNumberForm'

type Props = {}

const Verification: FC<Props> = (props) => {
	const navigation = useNavigation()

	return (
		<AppScreen green>
			<BackToTop />
			<Image
				style={{
					marginTop: 104,
					height: 156,
					resizeMode: 'contain',
					alignSelf: 'center',
					marginBottom: 30,
				}}
				source={require('../../../assets/app/Verification/verify.png')}
			/>
			<BoldText
				style={{
					fontSize: 20,
					alignSelf: 'center',
					textAlign: 'center',
				}}>
				Verify your mobile
			</BoldText>
			<Text
				style={{
					color: '#6F7D8F',
					alignSelf: 'center',
					paddingTop: 12,
					paddingHorizontal: 60,
					textAlign: 'center',
					fontSize: 15,
				}}>
				We will send a text to verify your number. No fees will apply.
			</Text>

			<EnterMobileNumberForm />

			<TouchableOpacity
				onPress={() => navigation.navigate('VerificationCode')}>
				<Image
					style={{
						height: 50,
						resizeMode: 'contain',
						alignSelf: 'center',
						marginTop: 30,
					}}
					source={require('../../../assets/app/Verification/continue-disabled.png')}
				/>
			</TouchableOpacity>
		</AppScreen>
	)
}

export default Verification
