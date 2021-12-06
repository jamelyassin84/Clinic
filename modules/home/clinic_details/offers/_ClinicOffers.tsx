import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { BoldText } from '../../../../components/overrides/Themed'
import ClinicDetailsCarousel from '../ClinicDetailsCarousel'
import ClinicOffersTab from './ClinicOffersTab'

type Props = {}

const _ClinicOffers: FC<Props> = (props) => {
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
				<ClinicOffersTab />
			</View>
		</View>
	)
}

export default _ClinicOffers
