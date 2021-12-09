import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { BoldText, Text } from '../../../components/overrides/Themed'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

type Props = {}

const HomeTopBar: FC<Props> = (props) => {
	const colorscheme = useColorScheme()
	const navigation = useNavigation()

	const [dropdownIsShowing, setDropdownIsShowing] = React.useState(false)

	return (
		<View style={{ maxHeight: 42 }}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: 5,
					paddingBottom: 5,
				}}>
				<Image
					source={require('../../..//assets/app/Home/location.png')}
					style={{
						width: 28,
						height: 28,
						alignSelf: 'flex-end',
						marginLeft: 16,
						resizeMode: 'contain',
					}}
				/>

				<BoldText
					style={{
						marginLeft: 8,
						fontSize: 15,
						alignSelf: 'center',
						flex: 1,
					}}>
					Al Reem, Abu Dhabi
				</BoldText>

				<TouchableOpacity
					onPress={() =>
						dropdownIsShowing
							? setDropdownIsShowing(false)
							: setDropdownIsShowing(true)
					}
					style={{
						flexDirection: 'row',
					}}>
					<Image
						source={require('../../../assets/app/Home/user.png')}
						style={{
							height: 28,
							resizeMode: 'contain',
							width: 28,
							marginRight: 14,
						}}
					/>
					<View
						style={{
							backgroundColor: '#FF7600',
							height: 12,
							width: 12,
							borderRadius: 50,
							borderWidth: 2,
							borderColor: Colors[colorscheme].background,
							transform: [{ translateX: -21 }],
						}}
					/>
				</TouchableOpacity>
			</View>

			<View
				style={[
					{
						position: 'absolute',
						backgroundColor: 'white',
						right: 20,
						zIndex: 9999,
						shadowColor: 'gray',
						shadowOffset: {
							width: 0,
							height: 4,
						},
						shadowOpacity: 0.3,
						shadowRadius: 3.46,
						paddingVertical: 15,
						paddingHorizontal: 30,
						borderRadius: 12,
						paddingBottom: 32,
						marginTop: 29,
					},
					dropdownIsShowing ? {} : { top: -500 },
				]}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('_Profile')
						setDropdownIsShowing(false)
					}}
					style={{ marginTop: 12 }}>
					<Text style={{ fontSize: 13 }}>Profile</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('_BookingHistory')
						setDropdownIsShowing(false)
					}}
					style={{ marginTop: 12 }}>
					<Text style={{ fontSize: 13 }}>Booking History</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('_MedicalRecords')
						setDropdownIsShowing(false)
					}}
					style={{ marginTop: 12 }}>
					<Text style={{ fontSize: 13 }}>Medical Records</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default HomeTopBar
