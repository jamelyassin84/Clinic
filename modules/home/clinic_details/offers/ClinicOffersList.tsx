import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { BoldText } from '../../../../components/overrides/Themed'
import { dummyOffersLists } from './DummyOffersList'

type Props = {}

const ClinicOffersList: FC<Props> = (props) => {
	return (
		<View style={{ backgroundColor: '#F5F5F5', padding: 16 }}>
			{dummyOffersLists.map((list, index) => (
				<View
					key={index}
					style={{
						flexDirection: 'row',
						width: '100%',
						padding: 16,
						shadowColor: 'gray',
						shadowOffset: {
							width: 0,
							height: 2,
						},
						shadowOpacity: 0.1,
						shadowRadius: 8.46,
						backgroundColor: 'white',
						marginTop: 10,
						borderRadius: 15,
						alignItems: 'center',
					}}>
					<View style={{ flex: 1, paddingRight: 15 }}>
						<BoldText style={{ fontSize: 15, color: '#0A2440' }}>
							{list.name}
						</BoldText>
						<Text style={{ fontSize: 14, color: '#6F7D8F' }}>
							{list.description}
						</Text>
					</View>
					<View style={{ borderRadius: 10, height: 80, width: 80 }}>
						<Image
							style={{
								height: 80,
								width: 80,
								resizeMode: 'stretch',
								borderRadius: 10,
							}}
							source={list.image}
						/>
					</View>
				</View>
			))}
		</View>
	)
}

export default ClinicOffersList
