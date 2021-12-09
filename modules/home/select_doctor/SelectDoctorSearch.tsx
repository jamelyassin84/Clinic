import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

type Props = {}

const SelectDoctorSearch: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<View
			style={{
				height: 56,
				borderWidth: 1,
				borderColor: '#E6ECF2',
				borderRadius: 10,
				marginHorizontal: 17,
				flexDirection: 'row',
				marginTop: -25,
				backgroundColor: Colors[colorScheme].background,
				shadowColor: 'gray',
				shadowOffset: {
					width: 0,
					height: 0,
				},
				shadowOpacity: 0.2,
				shadowRadius: 5.46,
				position: 'relative',
				zIndex: 9,
				// elevation: 19,
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
							height: 24,
							resizeMode: 'contain',
							width: 24,
							margin: 12,
						}}
						source={require('../../../assets/app/Home/search-icon.png')}
					/>
				</TouchableOpacity>
				<TextInput
					onChangeText={(text) => {}}
					placeholder="Search Clinics, Doctors…"
					style={{
						alignSelf: 'center',
						flex: 1,
						height: '100%',
						fontSize: 15,
						fontFamily: 'Avenir',
					}}
					keyboardType="default"
					placeholderTextColor="#6F7D8F"
				/>
			</View>
		</View>
	)
}

export default SelectDoctorSearch
