import React, { FC } from 'react'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import HomeSearchComponent from '../modules/home/home_page/HomeSearchComponent'
import { View } from '../components/overrides/Themed'
import DepartmentLists from '../modules/home/select_doctor/DepartmentLists'

type Props = {
	focus: boolean
}

const SelectDepartmentModal: FC<Props> = (props) => {
	const searchRef = React.useRef<BottomSheet>(null)

	const snapPoints = React.useMemo(() => ['25%', '73%'], [])

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
			backgroundStyle={{
				borderRadius: 0,
				borderTopWidth: 1,
				borderTopColor: '#F2F5F8',
			}}
			ref={searchRef}
			index={1}
			snapPoints={snapPoints}>
			<BottomSheetScrollView>
				<DepartmentLists />
			</BottomSheetScrollView>
		</BottomSheet>
	)
}

export default SelectDepartmentModal
