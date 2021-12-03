import React, { FC } from 'react'
import { Text, View } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import SignInBottomModal from '../modules/auth/sign-in/SignInBottomModal'

type Props = {}

const SignInBottomSheet: FC<Props> = (props) => {
	const bottomSheetRef = React.useRef<BottomSheet>(null)

	const snapPoints = React.useMemo(() => ['25%', '45%'], [])

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
				alignItems: 'center',
				borderWidth: 5,
				borderColor: '#F2F4F6',
				borderTopLeftRadius: 20,
				borderTopRightRadius: 20,
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
