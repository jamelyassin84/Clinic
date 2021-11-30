import React, { FC } from 'react'
import { Image, View } from 'react-native'

type Props = {
	image: string | any
	callback: Function
}

const SocialButton: FC<Props> = (props) => {
	return (
		<View>
			<Image style={{ height: 80, width: 120 }} source={props.image} />
		</View>
	)
}

export default SocialButton
