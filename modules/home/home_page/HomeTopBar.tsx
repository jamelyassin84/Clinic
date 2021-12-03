import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText } from '../../../components/overrides/Themed'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

type Props = {}

const HomeTopBar: FC<Props> = (props) => {
	const colorscheme = useColorScheme()

	return (
		<View style={{ flex: 10, marginTop: 20 }}>
			<View
				style={{
					width: '100%',
				}}>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						position: 'absolute',
						bottom: 0,
						justifyContent: 'center',
					}}>
					<Image
						source={require('../../..//assets/app/Home/location.png')}
						style={{
							width: 28,
							alignSelf: 'flex-end',
							marginLeft: 16,
							height: 28,
							resizeMode: 'cover',
						}}
					/>

					<BoldText
						style={{
							flex: 1,
							marginLeft: 8,
							fontSize: 15,
							alignSelf: 'center',
							transform: [{ translateY: 2 }],
						}}>
						Al Reem, Abu dhabi
					</BoldText>

					<TouchableOpacity
						style={{
							alignSelf: 'flex-end',
							transform: [{ translateY: 5 }],
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
			</View>
		</View>
	)
}

export default HomeTopBar
