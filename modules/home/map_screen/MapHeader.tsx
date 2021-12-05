import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText, Text } from '../../../components/overrides/Themed'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

type Props = {}

const BottomMapHeader: FC<Props> = (props) => {
	const navigation = useNavigation()
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
				marginTop: 20,
				marginBottom: 42,
				marginHorizontal: 23,
			}}>
			<View
				style={{
					width: '100%',
					height: '100%',
					flexDirection: 'row',
					paddingVertical: 13,
				}}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
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
							marginRight: 16,
						}}
						source={require('../../../assets/app/Verification/back.png')}
					/>
				</TouchableOpacity>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						width: '100%',
					}}>
					<BoldText
						style={{
							color: '#0A2440',
							fontSize: 14,
							marginRight: 'auto',
						}}>
						Skin Clinic
					</BoldText>
					<Text
						style={{
							color: '#6F7D8F',
							fontSize: 14,
							marginRight: 'auto',
						}}>
						Al Reem, Abu Dhabhi
					</Text>
				</View>
			</View>
		</View>
	)
}

export default BottomMapHeader
