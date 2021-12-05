import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {}

const ClinicDetailsHeader: FC<Props> = (props) => {
	const navigation = useNavigation()
	return (
		<View style={style.container}>
			<View style={style.wrapper}>
				<TouchableOpacity
					onPress={() => navigation.navigate('Root')}
					style={style.button}>
					<Image
						source={require('../../../assets/app/ClinicDetails/home.png')}
						style={style.image}
					/>
				</TouchableOpacity>
			</View>
			<View style={[style.wrapper, { flex: 1, marginStart: -10 }]}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={style.button}>
					<Image
						source={require('../../../assets/app/ClinicDetails/back.png')}
						style={style.image}
					/>
				</TouchableOpacity>
			</View>
			<View style={style.wrapper}>
				<TouchableOpacity onPress={() => {}} style={style.button}>
					<Image
						source={require('../../../assets/app/ClinicDetails/heart.png')}
						style={style.image}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		marginTop: -20,
		flexDirection: 'row',
		position: 'absolute',
		zIndex: 1,
		paddingTop: 60,
		paddingHorizontal: 13,
	},
	wrapper: {
		alignItems: 'flex-start',
	},
	button: {
		alignItems: 'flex-start',
	},
	image: {
		height: 62,
		width: 62,
		resizeMode: 'contain',
	},
})

export default ClinicDetailsHeader
