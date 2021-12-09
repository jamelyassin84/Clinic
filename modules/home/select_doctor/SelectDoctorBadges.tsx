import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { Text } from '../../../components/overrides/Themed'

type Props = {
	active: Boolean
	callback: Function
	name: string
	isDropDown?: boolean
	isCancelable?: boolean
	isCancelableFunction?: Function
}

const SelectDoctorBadges: FC<Props> = (props) => {
	return (
		<View
			style={{
				borderWidth: 1,
				borderColor: props.active ? '#00B074' : '#E3EBF5',
				backgroundColor: props.active ? '#00B07414' : 'white',
				borderRadius: 12,
				alignSelf: 'center',
				justifyContent: 'center',
				paddingVertical: 8,
				paddingHorizontal: 23,
				marginRight: 14,
			}}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text style={{ color: '#0A2440', fontSize: 14 }}>
					{props.name}
				</Text>
				{props.isDropDown && (
					<Image
						style={{ width: 12, height: 6, marginLeft: 15 }}
						source={require('../../../assets/app/SelectDoctor/dropdown.png')}
					/>
				)}
			</View>
		</View>
	)
}

export default SelectDoctorBadges
