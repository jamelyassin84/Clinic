import React, { FC } from 'react'
import { Image, View } from 'react-native'

type Props = {}

const Slider: FC<Props> = (props) => {
	return (
		<View>
			<Image
				style={{
					height: 160,
					resizeMode: 'stretch',
					width: '100%',
				}}
				source={require('../../../assets/app/Home/banner.png')}
			/>
		</View>
	)
}

export default Slider
