import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText, Text } from '../../../components/overrides/Themed'

type Props = {}

const SelectDoctorHeader: FC<Props> = (props) => {
	return (
		<View
			style={{
				paddingHorizontal: 23,
				paddingVertical: 15,
				flexDirection: 'row',
				alignItems: 'center',
				paddingLeft: 17,
			}}>
			<Image
				style={{ height: 24, width: 24, marginRight: 15 }}
				source={require('../../../assets/app/DoctorsList/back.png')}
			/>
			<BoldText style={{ fontSize: 16, marginRight: 'auto' }}>
				Select doctor
			</BoldText>

			<TouchableOpacity>
				<Text style={{ fontSize: 15, color: '#00B074' }}>Cancel</Text>
			</TouchableOpacity>
		</View>
	)
}

export default SelectDoctorHeader
