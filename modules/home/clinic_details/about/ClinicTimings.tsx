import React, { FC } from 'react'
import { View } from 'react-native'
import Card from '../../../../components/Card'
import { BoldText } from '../../../../components/overrides/Themed'
import { dummyClinicTimings } from '../DummyTimings'
type Props = {}

const ClinicTimings: FC<Props> = (props) => {
	return (
		<Card>
			<BoldText style={{ fontSize: 16 }}>Clinic timings</BoldText>
			<View
				style={{
					borderWidth: 1,
					borderColor: '#E6ECF2',
					borderRadius: 10,
					padding: 24,
					marginTop: 16,
				}}>
				{dummyClinicTimings.map((timing: any, index: number) => (
					<View
						key={index}
						style={{
							flexDirection: 'row',
							marginBottom: 20,
						}}>
						<BoldText
							style={{
								flex: 1,
								fontSize: 15,
								color: '#0A2440',
							}}>
							{timing.day}
						</BoldText>
						<BoldText style={{ color: '#0A2440' }}>
							{timing.start}-{timing.end}
						</BoldText>
					</View>
				))}
			</View>
			<View style={{ height: 150 }} />
		</Card>
	)
}

export default ClinicTimings
