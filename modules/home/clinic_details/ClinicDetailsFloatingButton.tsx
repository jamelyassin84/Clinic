import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {}

const ClinicDetailsFloatingButton: FC<Props> = (props) => {
	const navigation = useNavigation()
	return (
		<View
			style={{
				height: 100,
				borderTopWidth: 1,
				borderTopColor: '#CFDAE8',
				width: '100%',
				position: 'absolute',
				bottom: 0,
				backgroundColor: 'white',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<TouchableOpacity
				onPress={() => navigation.navigate('_SelectDoctor')}>
				<Image
					style={{
						height: 105,
						alignSelf: 'center',
						marginTop: 20,
						resizeMode: 'contain',
					}}
					source={require('../../../assets/app/ClinicDetails/button.png')}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default ClinicDetailsFloatingButton
