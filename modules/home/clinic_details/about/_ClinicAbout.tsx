import { Entypo } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText } from '../../../../components/overrides/Themed'
import Colors from '../../../../constants/Colors'
import useColorScheme from '../../../../hooks/useColorScheme'
import About from './About'
import ClinicDetailsButtons from './ClinicDetailsButtons'
import ClinicDetailsCarousel from '../ClinicDetailsCarousel'
import ClinicTimings from './ClinicTimings'

type Props = {
	isShowing: Function
	show: boolean
}

const _ClinicAbout: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<View style={props.show ? {} : { position: 'absolute', left: -500 }}>
			<ClinicDetailsCarousel />
			<View style={{ paddingVertical: 18, paddingHorizontal: 16 }}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<BoldText style={{ fontSize: 22, marginRight: 20 }}>
						Cleveland Clinic
					</BoldText>
					<TouchableOpacity onPress={() => props.isShowing()}>
						<Entypo
							name="chevron-thin-up"
							size={18}
							color="black"
						/>
					</TouchableOpacity>
				</View>

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
					<View style={{ flexDirection: 'row' }}>
						<Text style={{ fontSize: 10, color: '#6F7D8F' }}>
							Reviews
						</Text>
						<View style={{ flexDirection: 'row' }}>
							<Image
								style={{
									height: 11,
									resizeMode: 'contain',
									width: 11,
									marginLeft: 5,
								}}
								source={require('../../../../assets/app/ClinicDetails/star.png')}
							/>
							<Image
								style={{
									height: 11,
									resizeMode: 'contain',
									width: 11,
									marginLeft: 5,
								}}
								source={require('../../../../assets/app/ClinicDetails/star.png')}
							/>
							<Image
								style={{
									height: 11,
									resizeMode: 'contain',
									width: 11,
									marginLeft: 5,
								}}
								source={require('../../../../assets/app/ClinicDetails/star.png')}
							/>
						</View>
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
