import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {}

const BackToTop: FC<Props> = (props) => {
	const navigation = useNavigation()

	return (
		<View
			style={{
				width: '100%',
			}}>
			<TouchableOpacity
				onPress={() => {
					navigation.goBack()
				}}>
				<Image
					style={{
						height: 24,
						resizeMode: 'contain',
					}}
					source={require('../assets/app/Verification/back.png')}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default BackToTop
