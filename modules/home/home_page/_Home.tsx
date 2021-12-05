import React, { FC } from 'react'
import { Text, View } from 'react-native'
import SearchComponent from '../../../components/forms/SearchComponent'
import AppScreen from '../../../components/Screen'
import ScrollVIewWithRefresh from '../../../components/ScrollVIewWithRefresh'
import SearchModal from '../../../modals/SearchModal'
import HomeTopBar from './HomeTopBar'
import HomeUpcomingAppointments from './HomeUpcomingAppointments'
import NearbyClinics from './NearbyClinics'
import Slider from './Slider'

type Props = {}

const _Home: FC<Props> = (props) => {
	const [focus, setFocus] = React.useState<boolean>(false)

	return (
		<AppScreen>
			<HomeTopBar />
			<ScrollVIewWithRefresh onRefresh={() => {}} loading={false}>
				<View style={{ marginTop: 12 }}></View>
				<Slider />
				<SearchComponent
					focus={(value: boolean) => {
						setFocus(value)
					}}
				/>
				<HomeUpcomingAppointments />
				<NearbyClinics />
			</ScrollVIewWithRefresh>
			<SearchModal
				focus={focus}
				onBlur={() => {
					setFocus(false)
				}}
			/>
		</AppScreen>
	)
}

export default _Home
