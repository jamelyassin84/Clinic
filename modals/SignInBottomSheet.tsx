import React, { FC } from 'react'
import { Text, View } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import SignInBottomModal from '../modules/auth/sign-in/SignInBottomModal'

type Props = {}

const SignInBottomSheet: FC<Props> = (props) => {
	// ref
	const bottomSheetRef = React.useRef<BottomSheet>(null)

	// variables
	const snapPoints = React.useMemo(() => ['25%', '40%'], [])

	// callbacks
	const handleSheetChanges = React.useCallback((index: number) => {
		console.log('handleSheetChanges', index)
	}, [])

	return (
		<BottomSheet
			handleStyle={{
				display: 'none',
			}}
			style={{
				shadowColor: 'lighthray',
				shadowOffset: {
					width: 1,
					height: -4,
				},
				shadowOpacity: 0.2,
				shadowRadius: 15.46,
				elevation: 19,
				width: '100%',
				alignItems: 'center',
				borderTopLeftRadius: 50,
				borderTopRightRadius: 50,
				backgroundColor: '#fff',
			}}
			ref={bottomSheetRef}
			index={1}
			snapPoints={snapPoints}
			onChange={handleSheetChanges}>
			<SignInBottomModal />
		</BottomSheet>
	)
}

export default SignInBottomSheet
