import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

const AppScreen: FC<Props> = (props) => {
	return (
		<SafeAreaView>
			<View>{props.children}</View>
		</SafeAreaView>
	)
}

export default AppScreen
