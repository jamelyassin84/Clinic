import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Card from '../../../components/Card'
import { BoldText, Text } from '../../../components/overrides/Themed'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

type Props = {}

const NearbyClinics: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const navigation = useNavigation()
	return (
		<Card>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<BoldText style={{ fontSize: 15, flex: 1 }}>
					Nearby Clinics
				</BoldText>
				<TouchableOpacity style={{ alignSelf: 'flex-end' }}>
					<Text style={{ color: Colors[colorScheme].tint }}>
						show all
					</Text>
				</TouchableOpacity>
			</View>
		</Card>
	)
}

export default NearbyClinics
