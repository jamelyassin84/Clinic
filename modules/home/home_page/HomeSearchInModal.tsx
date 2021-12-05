import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

type Props = {
	blurModal: Function
}

const HomeSearchInModal: FC<Props> = (props) => {
	let input: any = React.useRef(null)

	React.useEffect(() => {
		input.current?.focus()
	}, [])

	const colorScheme = useColorScheme()
	return (
		<View
			style={{
				height: 56,
				borderWidth: 1,
				borderColor: '#E6ECF2',
				borderRadius: 10,
				flexDirection: 'row',
				backgroundColor: Colors[colorScheme].background,
				shadowColor: 'gray',
				shadowOffset: {
					width: 0,
					height: 0,
				},
				shadowOpacity: 0.2,
				shadowRadius: 5.46,

				// elevation: 19,
				marginBottom: 42,
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
					ref={input}
					onBlur={() => props.blurModal()}
				/>
			</View>
		</View>
	)
}

export default HomeSearchInModal
