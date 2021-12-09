import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText, View } from '../../../components/overrides/Themed'
import ScreenWithBack from '../../../components/ScreenWithBack'

type Props = {}

const _UploadAPhotoScreen: FC<Props> = (props) => {
	const navigation = useNavigation()
	return (
		<ScreenWithBack header="Patient Details">
			<BoldText
				style={{
					color: '#0A2440',
					alignSelf: 'center',
					fontSize: 11,
					marginTop: 30,
					marginBottom: 16,
				}}>
				Upload Photo
			</BoldText>
			<TouchableOpacity>
				<View
					style={{
						borderRadius: 6,
						borderWidth: 1,
						width: 223,
						height: 223,
						alignItems: 'center',
						justifyContent: 'center',
						alignSelf: 'center',
						borderColor: '#CFDAE8',
						marginBottom: 16,
						shadowColor: 'gray',
						shadowOffset: {
							width: 0,
							height: 0,
						},
						shadowOpacity: 0.4,
						shadowRadius: 5.46,
					}}>
					<AntDesign name="plus" size={24} color="black" />
				</View>
			</TouchableOpacity>
			<Text
				style={{ color: '#6F7D8F', alignSelf: 'center', fontSize: 11 }}>
				Photo
			</Text>

			<TouchableOpacity
				style={{ marginTop: 240 }}
				onPress={() => navigation.navigate('Root')}>
				<Image
					style={{
						height: 105,
						alignSelf: 'center',
						resizeMode: 'contain',
					}}
					source={require('../../../assets/app/PatientsDetails/done.png')}
				/>
			</TouchableOpacity>
		</ScreenWithBack>
	)
}

export default _UploadAPhotoScreen
