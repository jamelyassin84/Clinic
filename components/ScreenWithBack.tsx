import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { BoldText } from './overrides/Themed'
import ScrollVIewWithRefresh from './ScrollVIewWithRefresh'

type Props = {
	header: string
}

const ScreenWithBack: FC<Props> = (props) => {
	const navigation = useNavigation()
	const colorScheme = useColorScheme()

	return (
		<SafeAreaView
			style={{
				backgroundColor: Colors[colorScheme].background,
			}}>
			<View
				style={{
					height: Dimensions.get('screen').height,
					width: Dimensions.get('screen').width,
					paddingTop: 10,
					backgroundColor: Colors[colorScheme].background,
				}}>
				<View
					style={{
						width: '100%',
						height: 35,
						borderBottomWidth: 1,
						borderBottomColor: Colors[colorScheme].borderColor,
					}}>
					<TouchableOpacity
						style={{ flex: 1 }}
						onPress={() => {
							navigation.goBack()
						}}>
						<Image
							style={{
								height: 24,
								resizeMode: 'contain',
							}}
							source={require('../assets/app/Verification/back.png')}
						/>
					</TouchableOpacity>
					<BoldText
						style={{
							textAlign: 'center',
							alignSelf: 'center',
							fontSize: 16,
							marginTop: -11,
						}}>
						{props.header}
					</BoldText>
					<View style={{ flex: 1 }}></View>
				</View>
				<ScrollVIewWithRefresh loading={false} onRefresh={() => {}}>
					{props.children}
				</ScrollVIewWithRefresh>
			</View>
		</SafeAreaView>
	)
}

export default ScreenWithBack
