import React, { FC } from 'react'
import { View, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

type Props = {}

const LocationInput: FC<Props> = (props) => {
	return (
		<View
			style={{
				height: 56,
				borderWidth: 1,
				borderColor: '#99A8BC',
				borderRadius: 10,
				marginHorizontal: 40,
				marginTop: 87,
				flexDirection: 'row',
			}}>
			<View
				style={{
					width: '100%',
					height: '100%',
					flexDirection: 'row',
					paddingVertical: 13,
				}}>
				<TouchableOpacity
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						height: '100%',
					}}>
					<Image
						style={{
							height: 20,
							resizeMode: 'contain',
							width: 50,
						}}
						source={require('../../../assets/app/Location/icon.png')}
					/>
				</TouchableOpacity>
				<TextInput
					onChangeText={(text) => {}}
					placeholder="Mobile Number"
					style={{
						alignSelf: 'center',
						flex: 1,
						height: '100%',
						fontSize: 15,
						fontFamily: 'Avenir',
					}}
					keyboardType="default"
					value="Al Reem, Abu Dhabi"
				/>
			</View>
		</View>
	)
}

export default LocationInput
