import React, { FC } from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText } from '../../../components/overrides/Themed'
import ShadowRoundedCard from '../../../components/ShadowRoundedCard'

type Props = {
	image: any
	name: string
	type: any
}

const Clinics: FC<Props> = (props) => {
	return (
		<ShadowRoundedCard margin={false}>
			<TouchableOpacity>
				<View
					style={{
						borderTopLeftRadius: 10,
						borderTopRightRadius: 10,
						maxHeight: 140,
						width: '100%',
					}}>
					<Image
						source={props.image}
						style={{
							maxHeight: 140,
							resizeMode: 'stretch',
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
							width: '100%',
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

export default Clinics
