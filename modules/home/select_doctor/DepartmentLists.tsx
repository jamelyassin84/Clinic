import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText } from '../../../components/overrides/Themed'
import { dummyDepartments } from './DummyDepartmentList'

type Props = {}

const DepartmentLists: FC<Props> = (props) => {
	const navigation = useNavigation()
	return (
		<View style={{ paddingHorizontal: 7 }}>
			{dummyDepartments.map((departments: string, index: number) => (
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('DepartmentScreen')
					}}
					style={{
						paddingTop: 27,
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					<BoldText
						key={index}
						style={{ color: '#0A2440', fontSize: 15, flex: 1 }}>
						{departments}
					</BoldText>
					<Image
						style={{ height: 20, width: 20 }}
						source={
							index === 2
								? require('../../../assets/app/SelectDoctor/radio-active.png')
								: require('../../../assets/app/SelectDoctor/radio.png')
						}
					/>
				</TouchableOpacity>
			))}
		</View>
	)
}

export default DepartmentLists
