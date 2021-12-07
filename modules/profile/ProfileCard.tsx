import React, { FC } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Text } from '../../components/overrides/Themed'

type Props = {}

const ProfileCard: FC<Props> = (props) => {
	return (
		<View
			style={{
				marginTop: 15,
				borderRadius: 10,
				backgroundColor: 'white',
				height: 287,
				width: Dimensions.get('screen').width - 32,
				borderWidth: 1,
				borderColor: '#E6ECF2',
				paddingHorizontal: 51,
				paddingVertical: 15,
				shadowColor: 'gray',
				shadowOffset: {
					width: 0,
					height: 0,
				},
				shadowOpacity: 0.2,
				shadowRadius: 5.46,
			}}>
			<Text style={styles.text}>Age : 28</Text>
			<Text style={styles.text}>Gender : Female</Text>
			<Text style={styles.text}>Date Of Birth: 02/14/1993</Text>
			<Text style={styles.text}>
				Address: {'/n'} Flat 1005, Majid Bldg. Al Barsha Dubai , United
				Arab Emirates
			</Text>
			<Text style={styles.text}>Mobile : +971 50 000 0000</Text>
			<Text style={styles.text}>Email : clarriseumair@gmail.com</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 14,
		color: '#6F7D8F',
		marginTop: 15,
	},
})

export default ProfileCard
