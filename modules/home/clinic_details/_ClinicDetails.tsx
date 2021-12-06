import React, { FC } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BoldText, Text } from '../../../components/overrides/Themed'
import ScreenWithBack from '../../../components/ScreenWithBack'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'
import About from './About'
import _ClinicAbout from './about/_ClinicAbout'
import ClinicDetailsButtons from './ClinicDetailsButtons'
import ClinicDetailsCarousel from './ClinicDetailsCarousel'
import ClinicDetailsFloatingButton from './ClinicDetailsFloatingButton'
import ClinicDetailsHeader from './ClinicDetailsHeader'
import ClinicTimings from './ClinicTimings'
import _ClinicOffers from './offers/_ClinicOffers'

type Props = {}

const _ClinicDetails: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<ScreenWithBack header="Cleveland Clinic">
			{/* <_ClinicAbout /> */}
			<_ClinicOffers />
		</ScreenWithBack>
	)
}

export default _ClinicDetails
