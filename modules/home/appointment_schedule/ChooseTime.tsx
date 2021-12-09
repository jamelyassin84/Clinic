import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import { BoldText } from '../../../components/overrides/Themed'
import TimeBadge from '../../../components/TimeBadge'
import { dummySchedule } from './DummyTimeSchedule'

type Props = {}

const ChooseTime: FC<Props> = (props) => {
	const renderTimeBadges = ({ item, index }: any) => (
		<View style={{ flex: 1, paddingHorizontal: 5 }}>
			<TimeBadge
				from={item.from}
				to={item.to}
				isActive={'key' + index === 'key' + 0}
			/>
		</View>
	)
	return (
		<View
			style={{
				paddingVertical: 19,
				paddingHorizontal: 18,
				borderTopColor: '#F5F5F5',
				borderTopWidth: 10,
			}}>
			<BoldText style={{ fontSize: 16, marginBottom: 18 }}>
				Choose time
			</BoldText>

			<FlatList
				data={dummySchedule}
				renderItem={renderTimeBadges}
				keyExtractor={(item, index) => 'key' + index}
				numColumns={2}
			/>
		</View>
	)
}

export default ChooseTime
