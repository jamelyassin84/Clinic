import React, { FC } from 'react'
import { Text, View } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'

type Props = {}

const SignInBottomSheet: FC<Props> = (props) => {
	// ref
	const bottomSheetRef = React.useRef<BottomSheet>(null)

	// variables
	const snapPoints = React.useMemo(() => ['25%', '50%'], [])

	// callbacks
	const handleSheetChanges = React.useCallback((index: number) => {
		console.log('handleSheetChanges', index)
	}, [])

	return (
		<BottomSheet
			ref={bottomSheetRef}
			index={1}
			snapPoints={snapPoints}
			onChange={handleSheetChanges}>
			<View></View>
		</BottomSheet>
	)
}

export default SignInBottomSheet
