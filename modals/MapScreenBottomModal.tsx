import React, { FC } from 'react'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import BottomMapDetails from '../modules/home/map_screen/BottomMapDetails'
import { Image } from 'react-native'
import { BoldText, Text, View } from '../components/overrides/Themed'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {}

const MapScreenBottomModal: FC<Props> = (props) => {
	const bottomSheetRef = React.useRef<BottomSheet>(null)

	const snapPoints = React.useMemo(() => ['65%', '95%'], [])

	const handleSheetChanges = React.useCallback((index: number) => {
		// console.log('handleSheetChanges', index)
	}, [])

	return (
		<BottomSheet
			handleStyle={{
				display: 'none',
			}}
			style={{
				shadowColor: 'gray',
				shadowOffset: {
					width: 0,
					height: 0,
				},
				shadowOpacity: 0.2,
				shadowRadius: 5.46,
				// elevation: 19,
				width: '100%',
				borderWidth: 3,
				borderColor: '#F2F4F6',
				borderTopLeftRadius: 20,
				borderTopRightRadius: 20,
			}}
			ref={bottomSheetRef}
			index={1}
			snapPoints={snapPoints}
			onChange={handleSheetChanges}>
			<View
				style={{
					flexDirection: 'row',
					height: 70,
					borderBottomWidth: 1,
					borderBottomColor: '#EBEDEF',
					width: '100%',
					alignItems: 'center',
					padding: 15,
				}}>
				<BoldText style={{ fontSize: 16, flex: 1 }}>
					We found 16 skin clinics
				</BoldText>
				<TouchableOpacity
					style={{
						width: 80,
						height: 36,
						borderWidth: 1,
						borderColor: '#EBEDEF',
						borderRadius: 10,
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'row',
					}}>
					<Image
						style={{
							height: 24,
							resizeMode: 'contain',
							width: 24,
							marginRight: 8,
						}}
						source={require('../assets/app/MapScreen/sort.png')}
					/>
					<Text>Sort</Text>
				</TouchableOpacity>
			</View>
			<BottomSheetScrollView>
				<BottomMapDetails />
			</BottomSheetScrollView>
		</BottomSheet>
	)
}

export default MapScreenBottomModal
