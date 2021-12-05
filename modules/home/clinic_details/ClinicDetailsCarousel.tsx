import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'

type Props = {}

const ClinicDetailsCarousel: FC<Props> = (props) => {
	return (
		<View>
			<Image
				source={require('../../../assets/app/ClinicDetails/details.png')}
				style={{ height: 294, width: '100%', resizeMode: 'stretch' }}
			/>
			<View></View>
		</View>
	)
}

export default ClinicDetailsCarousel
