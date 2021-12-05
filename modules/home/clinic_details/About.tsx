import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Card from '../../../components/Card'
import { BoldText, Text } from '../../../components/overrides/Themed'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

type Props = {}

const About: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<Card>
			<BoldText style={{ fontSize: 16 }}>About</BoldText>
			<Text style={{ color: '#6F7D8F', fontSize: 15, marginTop: 16 }}>
				The cleveland clinic abu dhabi is a multi specialty hospital
				located in abu dhabi, united arab emirates. The 364 bed luxury
				hospital, part of cleveland clinic foundation, usa, has been
				open to the public…
			</Text>
			<TouchableOpacity>
				<Text
					style={{
						fontSize: 15,
						color: Colors[colorScheme].tint,
						marginTop: 10,
					}}>
					Read more
				</Text>
			</TouchableOpacity>
		</Card>
	)
}

export default About
Card
