import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { View } from 'react-native'
import { BoldText } from '../../../components/overrides/Themed'
import SearchBadges from '../../../components/SearchBadges'
import HomeSearchInModal from './HomeSearchInModal'

type Props = {
	blurModal: Function
}

const HomeSearchComponent: FC<Props> = (props) => {
	const navigation = useNavigation()

	const badges: any[] = [
		{
			name: 'Advanced Cure Diagnostic Center',
			type: 'clinic',
		},
		{
			name: 'Cleveland Clinic',
			type: 'clinic',
		},
		{
			name: '24H Open Clinic',
			type: 'clinic',
		},
		{
			name: 'Dr. Ahmed Shah - Cardiology',
			type: 'doctor',
		},
	]

	return (
		<View>
			<HomeSearchInModal blurModal={() => props.blurModal()} />

			<BoldText style={{ color: '#0A2440', fontSize: 16 }}>
				Popular Searches
			</BoldText>

			<View style={{ display: 'flex', flexWrap: 'nowrap' }}>
				{badges.map((badge: any, index: number) => (
					<SearchBadges
						callback={() =>
							badge.type === 'clinic'
								? navigation.navigate('_MapScreen')
								: navigation.navigate('_SelectDoctor')
						}
						key={index}
						name={badge.name}
					/>
				))}
			</View>
		</View>
	)
}

export default HomeSearchComponent
