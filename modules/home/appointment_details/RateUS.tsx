import { EvilIcons } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AirbnbRating } from 'react-native-ratings'
import { BoldText } from '../../../components/overrides/Themed'

type Props = {
	show: boolean
	willHide: Function
}

const RateUS: FC<Props> = (props) => {
	return (
		<View
			style={[
				{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'rgba(250,250,250,.5)',
					position: 'absolute',
					width: Dimensions.get('screen').width,
					height: Dimensions.get('screen').height,
					zIndex: 999,
				},
				props.show ? {} : { left: -5000 },
			]}>
			<View
				style={{
					height: 415,
					width: Dimensions.get('screen').width - 40,
					backgroundColor: 'white',
					padding: 15,
					borderRadius: 15,
					shadowColor: 'gray',
					shadowOffset: {
						width: 0,
						height: 0,
					},
					shadowOpacity: 0.2,
					shadowRadius: 15.46,
				}}>
				<TouchableOpacity
					onPress={() => {
						props.willHide()
					}}>
					<EvilIcons
						style={{ alignSelf: 'flex-end' }}
						name="close"
						size={24}
						color="black"
					/>
				</TouchableOpacity>
				<BoldText
					style={{
						textAlign: 'center',
						fontSize: 25,
						color: '#0A2440',
					}}>
					Rate Us!
				</BoldText>

				<BoldText
					style={{
						textAlign: 'center',
						fontSize: 20,
						color: '#0A2440',
						marginTop: 19,
						marginBottom: -30,
					}}>
					Cleveland Clinic
				</BoldText>
				<AirbnbRating
					count={5}
					reviews={[]}
					defaultRating={3}
					size={25}
				/>
				<Text
					style={{
						fontSize: 14,
						textAlign: 'center',
						color: '#6F7D8F',
						marginTop: 12,
					}}>
					Select Star
				</Text>

				<BoldText
					style={{
						textAlign: 'center',
						fontSize: 20,
						color: '#0A2440',
						marginTop: 19,
						marginBottom: -30,
					}}>
					Dr. Hanadi Yassin
				</BoldText>
				<AirbnbRating
					count={5}
					reviews={[]}
					defaultRating={0}
					size={25}
				/>
				<Text
					style={{
						fontSize: 14,
						textAlign: 'center',
						color: '#6F7D8F',
						marginTop: 12,
					}}>
					Select Star
				</Text>

				<TouchableOpacity
					onPress={() => {
						props.willHide()
					}}>
					<BoldText
						style={{
							textAlign: 'center',
							fontSize: 20,
							color: '#6F7D8F',
							marginTop: 65,
						}}>
						Done
					</BoldText>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default RateUS
