import React, { FC } from 'react'
import { Text, View } from 'react-native'
import SearchComponent from '../../../components/forms/SearchComponent'
import AppScreen from '../../../components/Screen'
import ScrollVIewWithRefresh from '../../../components/ScrollVIewWithRefresh'
import HomeTopBar from './HomeTopBar'
import Slider from './Slider'

type Props = {}

const _Home: FC<Props> = (props) => {
	return (
		<AppScreen>
			<HomeTopBar />
			<ScrollVIewWithRefresh onRefresh={() => {}} loading={false}>
				<View style={{ marginTop: 12 }}></View>
				<Slider />
				<SearchComponent />
			</ScrollVIewWithRefresh>
		</AppScreen>
	)
}

export default _Home
