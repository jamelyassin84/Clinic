import React, { FC } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import HomeSearchComponent from '../modules/home/home_page/HomeSearchComponent'

type Props = {
	focus: boolean
	onBlur: Function
}

const SearchModal: FC<Props> = (props) => {
	const searchRef = React.useRef<BottomSheet>(null)

	const snapPoints = React.useMemo(() => ['25%', '95%'], [])

	const [focus, setFocus] = React.useState(false)

	React.useEffect(() => {
		if (props.focus === false) {
			searchRef.current?.close()
			return
		}
		searchRef.current?.snapToIndex(1)
	}, [focus])

	return (
		<BottomSheet
			handleStyle={{
				display: 'none',
			}}
			style={{
				width: '100%',
				padding: 22,
			}}
			backgroundStyle={{
				borderRadius: 0,
				borderTopWidth: 1,
				borderTopColor: '#F2F5F8',
			}}
			ref={searchRef}
			index={1}
			snapPoints={snapPoints}>
			<HomeSearchComponent
				blurModal={() => {
					searchRef.current?.close()
				}}
			/>
		</BottomSheet>
	)
}

export default SearchModal
