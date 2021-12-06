import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText, Text } from '../../../components/overrides/Themed'

type Props = {}

const SelectDoctorHeader: FC<Props> = (props) => {
	return (
		<View
			style={{
				display: 'flex',
				paddingHorizontal: 9,
				paddingVertical: 15,
			}}>
			<Image
				source={require('../../../assets/app/DoctorsList/back.png')}
			/>
			<BoldText>Select doctor</BoldText>
			<TouchableOpacity>
				<Text>Cancel</Text>
			</TouchableOpacity>
		</View>
	)
}

export default SelectDoctorHeader
