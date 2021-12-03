import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Card from '../../../components/Card'
import { BoldText, Text } from '../../../components/overrides/Themed'
import ShadowRoundedCard from '../../../components/ShadowRoundedCard'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'
import ClinicsCards from './ClinicsCards'

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
				<TouchableOpacity
					style={{ alignSelf: 'flex-end' }}
					onPress={() => navigation.navigate('_NearbyClinics')}>
					<Text style={{ color: Colors[colorScheme].tint }}>
						show all
					</Text>
				</TouchableOpacity>
			</View>

			<ScrollView
				style={{ paddingBottom: 20 }}
				horizontal={true}
				showsHorizontalScrollIndicator={false}>
				<ClinicsCards
					name="Danat Al Emarat Hospital"
					type="Clinic"
					image={require('../../../assets/app/Home/danat.png')}
				/>
				<ClinicsCards
					name="Sheikh Khalifa"
					type="Clinic"
					image={require('../../../assets/app/Home/sheik.png')}
				/>
			</ScrollView>
		</Card>
	)
}

export default NearbyClinics
