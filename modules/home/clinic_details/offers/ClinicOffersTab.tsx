import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText, Text } from '../../../../components/overrides/Themed'
import Colors from '../../../../constants/Colors'
import useColorScheme from '../../../../hooks/useColorScheme'

type Props = {}

const ClinicOffersTab: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	const offers: string[] = [
		'Dentistry',
		'Radiology',
		'Pediatric',
		'Physiotherapy',
	]

	return (
		<ScrollView
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			style={{
				backgroundColor: 'white',
				paddingVertical: 10,
				borderBottomColor: '#EEEEEE',
				borderBottomWidth: 1,
				paddingHorizontal: 16,
			}}>
			{offers.map((offers: string, index: number) => {
				if (index === 0) {
					return (
						<TouchableOpacity key={index}>
							<BoldText
								style={{
									fontSize: 16,
									color: Colors[colorScheme].tint,
									alignSelf: 'center',
									marginRight: 20,
								}}>
								{offers}
							</BoldText>
						</TouchableOpacity>
					)
				}
				return (
					<TouchableOpacity key={index}>
						<Text
							style={{
								fontSize: 16,
								alignSelf: 'center',
								marginRight: 20,
							}}>
							{offers}
						</Text>
					</TouchableOpacity>
				)
			})}
		</ScrollView>
	)
}

export default ClinicOffersTab
