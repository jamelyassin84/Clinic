import React, { FC } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { BoldText, Text } from '../../../components/overrides/Themed'
import ShadowRoundedCard from '../../../components/ShadowRoundedCard'

type Props = {
	image: any
	name: string
	type: any
	callback: Function
}

const ClinicsCards: FC<Props> = (props) => {
	return (
		<ShadowRoundedCard margin={true}>
			<TouchableOpacity onPress={() => props.callback()}>
				<View
					style={{
						borderTopLeftRadius: 10,
						borderTopRightRadius: 10,
						maxHeight: 92,
					}}>
					<Image
						source={props.image}
						style={{
							maxHeight: 92,
							resizeMode: 'stretch',
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
							maxWidth: 191,
						}}
					/>
				</View>
				<View style={{ padding: 12 }}>
					<BoldText>{props.name}</BoldText>
					<Text>{props.type}</Text>
				</View>
			</TouchableOpacity>
		</ShadowRoundedCard>
	)
}

export default ClinicsCards
