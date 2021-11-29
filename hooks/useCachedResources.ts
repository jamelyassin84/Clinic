import { FontAwesome } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false)

	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync()

				await Font.loadAsync({
					...FontAwesome.font,
					'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
				})
				await Font.loadAsync({
					...FontAwesome.font,
					'Avenir Normal': require('../assets/fonts/avenir.ttf'),
				})
				await Font.loadAsync({
					...FontAwesome.font,
					'SF Normal': require('../assets/fonts/sf.ttf'),
				})
				await Font.loadAsync({
					...FontAwesome.font,
					'Avenir Heavy': require('../assets/fonts/avenir-heavy.ttf'),
				})
			} catch (e) {
				console.warn(e)
			} finally {
				setLoadingComplete(true)
				SplashScreen.hideAsync()
			}
		}
		loadResourcesAndDataAsync()
	}, [])

	return isLoadingComplete
}
