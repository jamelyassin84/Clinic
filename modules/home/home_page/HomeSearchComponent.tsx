import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { BoldText } from '../../../components/overrides/Themed'
import SearchBadges from '../../../components/SearchBadges'
import HomeSearchInModal from './HomeSearchInModal'

type Props = {
	blurModal: Function
}

const HomeSearchComponent: FC<Props> = (props) => {
	const navigation = useNavigation()
	const badges: string[] = [
		'Advanced Cure Diagnostic Center',
		'Cleveland Clinic',
		'24H Open Clinic',
		'Dr. Ahmed Shah - Cardiology',
	]
	return (
		<View>
			<HomeSearchInModal blurModal={() => props.blurModal()} />

			<BoldText style={{ color: '#0A2440', fontSize: 16 }}>
				Popular Searches
			</BoldText>

			<View style={{ display: 'flex', flexWrap: 'nowrap' }}>
				{badges.map((badge: string, index: number) => (
					<SearchBadges
						callback={() => navigation.navigate('_MapScreen')}
						key={index}
						name={badge}
					/>
				))}
			</View>
		</View>
	)
}

export default HomeSearchComponent
