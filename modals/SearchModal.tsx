import React, { FC } from 'react'
import { Text, View } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import SignInBottomModal from '../modules/auth/sign-in/SignInBottomModal'
import HomeSearchComponent from '../modules/home/home_page/HomeSearchComponent'

type Props = {
	focus: Boolean
}

const SearchModal: FC<Props> = (props) => {
	const searchRef = React.useRef<BottomSheet>(null)

	const snapPoints = React.useMemo(() => ['25%', '95%'], [])

	const handleSheetChanges = React.useCallback((index: number) => {
		// console.log('handleSheetChanges', index)
	}, [])

	React.useEffect(() => {
		if (props.focus === false) {
			searchRef.current?.close()
			return
		}
		searchRef.current?.snapToIndex(1)
	}, [props.focus])

	return (
		<BottomSheet
			handleStyle={{
				display: 'none',
			}}
			style={{
				width: '100%',
				padding: 22,
			}}
			ref={searchRef}
			index={1}
			snapPoints={snapPoints}
			onChange={handleSheetChanges}>
			<HomeSearchComponent />
		</BottomSheet>
	)
}

export default SearchModal
