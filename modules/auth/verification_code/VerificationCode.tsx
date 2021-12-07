import { TouchableOpacity } from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { View } from 'react-native'
import BackToTop from '../../../components/BacktoTop'
import { BoldText, Text } from '../../../components/overrides/Themed'
import AppScreen from '../../../components/Screen'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'
import VerificationInput from './VerificationInput'

type Props = {}

const VerificationCode: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const navigation = useNavigation()

	return (
		<AppScreen green>
			<BackToTop />
			<BoldText
				style={{
					fontSize: 20,
					alignSelf: 'center',
					marginTop: 39,
					textAlign: 'center',
					marginBottom: 12,
				}}>
				Enter verification code
			</BoldText>
			<Text
				style={{
					color: '#6F7D8F',
					alignSelf: 'center',
					paddingHorizontal: 60,
					textAlign: 'center',
					fontSize: 15,
					marginBottom: 64,
				}}>
				We sent you a verification code via SMS.
			</Text>

			<View
				style={{
					flexDirection: 'row',
					alignSelf: 'center',
				}}>
				<VerificationInput />
				<VerificationInput />
				<VerificationInput />
				<VerificationInput />
			</View>

			<View
				style={{
					flexDirection: 'row',
					alignSelf: 'center',
					position: 'absolute',
					top: '50%',
				}}>
				<Text
					style={{
						color: '#6F7D8F',
						alignSelf: 'center',
						paddingTop: 12,
						textAlign: 'center',
						fontSize: 16,
						marginRight: 16,
					}}>
					Didn’t receive it?
				</Text>
				<TouchableOpacity
					onPress={() => navigation.navigate('SetLocation')}>
					<Text
						style={{
							color: Colors[colorScheme].tint,
							alignSelf: 'center',
							paddingTop: 12,
							textAlign: 'center',
							fontSize: 16,
						}}>
						Click here
					</Text>
				</TouchableOpacity>
			</View>
		</AppScreen>
	)
}

export default VerificationCode
