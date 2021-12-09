import React, { FC } from 'react'
import { View } from 'react-native'
import { BoldText, Text } from '../../../components/overrides/Themed'

type Props = {}

const About: FC<Props> = (props) => {
	return (
		<View style={{ padding: 16 }}>
			<BoldText style={{ fontSize: 16 }}>About</BoldText>

			<Text
				style={{
					fontSize: 15,
					color: '#6F7D8F',
					marginTop: 14,
				}}>
				Dr. Iram sarfraz joined cleveland clinic in april 2019.
				previously, she worked as a consultant dermatologist at sheikh
				khalifa medical city from 2005-2011.{'\n'}
				{'\n'} Between 2011 and 2017, dr. al suwaidi worked at the
				renowned charité university hospital in Berlin Germany, to get
				her German board certification in dermatology and venerology.
			</Text>
		</View>
	)
}

export default About
