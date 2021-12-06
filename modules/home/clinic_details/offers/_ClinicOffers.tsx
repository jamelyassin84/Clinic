import { Entypo } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText } from '../../../../components/overrides/Themed'
import ClinicDetailsCarousel from '../ClinicDetailsCarousel'
import ClinicOffersList from './ClinicOffersList'
import ClinicOffersTab from './ClinicOffersTab'

type Props = {
	isShowing: Function
	show: boolean
}

const _ClinicOffers: FC<Props> = (props) => {
	return (
		<View style={props.show ? {} : { position: 'absolute', left: -500 }}>
			<ClinicDetailsCarousel />
			<View
				style={{
					paddingVertical: 18,
					backgroundColor: 'white',
				}}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						paddingHorizontal: 16,
					}}>
					<BoldText style={{ fontSize: 22, marginRight: 20 }}>
						Cleveland Clinic
					</BoldText>
					<TouchableOpacity onPress={() => props.isShowing()}>
						<Entypo
							name="chevron-thin-down"
							size={18}
							color="black"
						/>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexDirection: 'row',
						marginVertical: 5,
						borderBottomWidth: 1,
						borderBottomColor: '#EEEEEE',
						paddingHorizontal: 16,
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
				<ClinicOffersTab />
				<ClinicOffersList />
			</View>
		</View>
	)
}

export default _ClinicOffers
