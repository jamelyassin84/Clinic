import React, { FC } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapScreenBottomModal from '../../../modals/MapScreenBottomModal'
import BottomMapHeader from './MapHeader'

type Props = {}

const _MapScreen: FC<Props> = (props) => {
	return (
		<View style={styles.container}>
			<MapView style={styles.map} />

			<SafeAreaView>
				<BottomMapHeader />
			</SafeAreaView>
			<MapScreenBottomModal />
		</View>
	)
}

export default _MapScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		position: 'absolute',
		zIndex: -1,
	},
})
