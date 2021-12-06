import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
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
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
			{offers.map((offers: string, index: number) => {
				if (index === 0) {
					return (
						<BoldText
							style={{
								fontSize: 16,
								color: Colors[colorScheme].tint,
								alignSelf: 'center',
								marginRight: 20,
							}}>
							{offers}
						</BoldText>
					)
				}
				return (
					<Text
						style={{
							fontSize: 16,
							alignSelf: 'center',
							marginRight: 20,
						}}>
						{offers}
					</Text>
				)
			})}
		</ScrollView>
	)
}

export default ClinicOffersTab
