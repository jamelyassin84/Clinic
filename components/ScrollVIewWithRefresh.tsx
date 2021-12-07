import React, { FC } from 'react'
import { Dimensions, RefreshControl, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

type Props = {
	loading: boolean
	onRefresh: Function
}

const ScrollVIewWithRefresh: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	return (
		<ScrollView
			style={{
				height: Dimensions.get('screen').height,
				width: Dimensions.get('screen').width,
				position: 'relative',
				zIndex: -1,
			}}
			showsVerticalScrollIndicator={false}
			refreshControl={
				<RefreshControl
					tintColor={Colors[colorScheme].tint}
					refreshing={props.loading}
					onRefresh={props.onRefresh()}
				/>
			}>
			{props.children}
			<View style={{ height: 50 }}></View>
		</ScrollView>
	)
}
export default ScrollVIewWithRefresh
