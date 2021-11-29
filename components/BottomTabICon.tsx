import React, { FC } from 'react'
import { SvgXml } from 'react-native-svg'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

type Props = {
	sources: any[]
	color: string
}

const BottomTabICon: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<SvgXml
			height="28"
			xml={
				props.color === Colors[colorScheme].tint
					? props.sources[1].toString()
					: props.sources[0].toString()
			}
		/>
	)
}
export default BottomTabICon
