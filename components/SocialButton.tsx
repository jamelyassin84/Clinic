import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
	image: string | any
	callback: Function
}

const SocialButton: FC<Props> = (props) => {
	return (
		<TouchableOpacity onPress={() => props.callback()}>
			<Image style={{ height: 80, width: 120 }} source={props.image} />
		</TouchableOpacity>
	)
}

export default SocialButton
