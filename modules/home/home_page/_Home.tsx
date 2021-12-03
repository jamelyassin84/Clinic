import React, { FC } from 'react'
import { Text, View } from 'react-native'
import AppScreen from '../../../components/Screen'
import ScrollVIewWithRefresh from '../../../components/ScrollVIewWithRefresh'
import HomeTopBar from './HomeTopBar'

type Props = {}

const _Home: FC<Props> = (props) => {
	return (
		<AppScreen>
			<HomeTopBar />
			<ScrollVIewWithRefresh onRefresh={() => {}} loading={false}>
				<View style={{ marginTop: 22 }}></View>
				<Text>_Home</Text>
			</ScrollVIewWithRefresh>
		</AppScreen>
	)
}

export default _Home
