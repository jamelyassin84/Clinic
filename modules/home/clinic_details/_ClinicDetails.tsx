import React, { FC } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BoldText, Text } from '../../../components/overrides/Themed'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'
import About from './About'
import ClinicDetailsButtons from './ClinicDetailsButtons'
import ClinicDetailsCarousel from './ClinicDetailsCarousel'
import ClinicDetailsFloatingButton from './ClinicDetailsFloatingButton'
import ClinicDetailsHeader from './ClinicDetailsHeader'
import ClinicTimings from './ClinicTimings'

type Props = {}

const _ClinicDetails: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<View>
			<ClinicDetailsHeader />
			<ScrollView style={{ backgroundColor: 'white' }}>
				<ClinicDetailsCarousel />

				<View style={{ paddingVertical: 26, paddingHorizontal: 16 }}>
					<BoldText style={{ fontSize: 22 }}>
						Cleveland Clinic
					</BoldText>
					<BoldText style={{ fontSize: 14 }}>
						Address:
						<Text>12 Cleveland Road, Jersey Je1 4Hd, Jersey</Text>
					</BoldText>
					<BoldText style={{ fontSize: 14 }}>
						Hours:
						<BoldText style={{ color: Colors[colorScheme].tint }}>
							{' '}
							Open{' '}
						</BoldText>
						<BoldText>. Closes 10 PM</BoldText>
					</BoldText>
				</View>

				<ClinicDetailsButtons />

				<About />
				<ClinicTimings />
			</ScrollView>
			<ClinicDetailsFloatingButton />
		</View>
	)
}

export default _ClinicDetails
