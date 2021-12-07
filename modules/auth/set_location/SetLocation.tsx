import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText } from '../../../components/overrides/Themed'
import AppScreen from '../../../components/Screen'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'
import LocationInput from './LocationInput'

type Props = {}

const SetLocation: FC<Props> = (props) => {
	const navigation = useNavigation()
	const colorScheme = useColorScheme()

	return (
		<AppScreen green>
			<Image
				style={{
					height: 177,
					resizeMode: 'contain',
					alignSelf: 'center',
					marginTop: 120,
					marginBottom: 30,
				}}
				source={require('../../../assets/app/Location/image.png')}
			/>
			<BoldText
				style={{
					fontSize: 20,
					alignSelf: 'center',
					textAlign: 'center',
				}}>
				Set your location
			</BoldText>

			<LocationInput />

			<TouchableOpacity onPress={() => navigation.navigate('Root')}>
				<Image
					style={{
						height: 105,
						alignSelf: 'center',
						marginTop: 10,
						resizeMode: 'contain',
					}}
					source={require('../../../assets/app/Location/button.png')}
				/>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => navigation.navigate('Root')}>
				<Text
					style={{
						color: Colors[colorScheme].tint,
						textAlign: 'center',
						fontSize: 16,
					}}>
					Skip
				</Text>
			</TouchableOpacity>
		</AppScreen>
	)
}

export default SetLocation
