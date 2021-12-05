import React, { FC } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { BoldText } from '../../../components/overrides/Themed'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

type Props = {}

const HomeTopBar: FC<Props> = (props) => {
	const colorscheme = useColorScheme()

	return (
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
	)
}

export default HomeTopBar
