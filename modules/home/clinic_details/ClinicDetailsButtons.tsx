import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Card from '../../../components/Card'
import { Text, View } from '../../../components/overrides/Themed'

type Props = {}

const ClinicDetailsButtons: FC<Props> = (props) => {
	return (
		<Card>
			<View style={style.container}>
				<View style={style.wrapper}>
					<TouchableOpacity style={style.button}>
						<Image
							source={require('../../../assets/app/ClinicDetails/call.png')}
							style={style.image}
						/>
					</TouchableOpacity>
					<Text style={style.buttonText}>Call</Text>
				</View>

				<View style={style.wrapper}>
					<TouchableOpacity style={style.button}>
						<Image
							source={require('../../../assets/app/ClinicDetails/map.png')}
							style={style.image}
						/>
					</TouchableOpacity>
					<Text style={style.buttonText}>View Map</Text>
				</View>

				<View style={style.wrapper}>
					<TouchableOpacity style={style.button}>
						<Image
							source={require('../../../assets/app/ClinicDetails/instagram.png')}
							style={style.image}
						/>
					</TouchableOpacity>
					<Text style={style.buttonText}>Instagram</Text>
				</View>

				<View style={style.wrapper}>
					<TouchableOpacity style={style.button}>
						<Image
							source={require('../../../assets/app/ClinicDetails/save.png')}
							style={style.image}
						/>
					</TouchableOpacity>
					<Text style={style.buttonText}>Save</Text>
				</View>
			</View>
		</Card>
	)
}

const style = StyleSheet.create({
	container: {
		marginTop: -20,
		flexDirection: 'row',
	},
	wrapper: {
		flex: 1,
		alignItems: 'center',
	},
	button: {},
	image: {
		height: 62,
		width: 62,
		resizeMode: 'contain',
	},
	buttonText: {
		color: '#6F7D8F',
		fontSize: 13,
	},
})

export default ClinicDetailsButtons
