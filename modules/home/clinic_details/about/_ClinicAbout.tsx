import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { BoldText } from '../../../../components/overrides/Themed'
import Colors from '../../../../constants/Colors'
import useColorScheme from '../../../../hooks/useColorScheme'
import About from '../About'
import ClinicDetailsButtons from '../ClinicDetailsButtons'
import ClinicDetailsCarousel from '../ClinicDetailsCarousel'
import ClinicTimings from '../ClinicTimings'

type Props = {}

const _ClinicAbout: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<View>
			<ClinicDetailsCarousel />
			<View style={{ paddingVertical: 18, paddingHorizontal: 16 }}>
				<BoldText style={{ fontSize: 22 }}>Cleveland Clinic</BoldText>

				<View
					style={{
						flexDirection: 'row',
						marginVertical: 5,
						borderBottomWidth: 0.2,
						borderBottomColor: '#EEEEEE',
					}}>
					<Text
						style={{
							fontSize: 10,
							color: '#6F7D8F',
							flex: 1,
							marginBottom: 16,
						}}>
						Based on 2 Ratings
					</Text>
					<View>
						<Text style={{ fontSize: 10, color: '#6F7D8F' }}>
							Reviews
						</Text>
					</View>
				</View>

				<BoldText style={{ fontSize: 14, marginTop: 8 }}>
					Address:
					<Text>12 Cleveland Road, Jersey Je1 4Hd, Jersey</Text>
				</BoldText>

				<BoldText style={{ fontSize: 14 }}>
					Hours:
					<BoldText style={{ color: Colors[colorScheme].tint }}>
						{' '}
						Open{' '}
					</BoldText>
					<BoldText>. Closes 10 PM</BoldText>
				</BoldText>
			</View>

			<ClinicDetailsButtons />

			<About />
			<ClinicTimings />
		</View>
	)
}

export default _ClinicAbout
