import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { BoldText } from '../../../components/overrides/Themed'
import SearchBadges from '../../../components/SearchBadges'
import HomeSearchInModal from './HomeSearchInModal'

type Props = {
	blurModal: Function
}

const HomeSearchComponent: FC<Props> = (props) => {
	const badges: string[] = [
		'Popular Searches',
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
					<SearchBadges key={index} name={badge} />
				))}
			</View>
		</View>
	)
}

export default HomeSearchComponent
