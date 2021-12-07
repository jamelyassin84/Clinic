import React, { FC } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText } from '../../components/overrides/Themed'
import ScreenWithBack from '../../components/ScreenWithBack'
import ProfileCard from './ProfileCard'

type Props = {}

const _Profile: FC<Props> = (props) => {
	return (
		<ScreenWithBack header="Profile">
			<TouchableOpacity
				style={{
					alignSelf: 'flex-end',
					marginRight: 23,
					// transform: [{ translateY: -10 }],
					position: 'relative',
					zIndex: 999,
				}}>
				<Text style={{ color: '#00B074', fontSize: 15 }}>Edit</Text>
			</TouchableOpacity>
			<View style={{ flex: 1, position: 'absolute', zIndex: -1 }}>
				<Image
					style={{
						resizeMode: 'stretch',
						width: Dimensions.get('screen').width,
						height: Dimensions.get('screen').height,
					}}
					source={require('../../assets/app/Profile/bg.png')}
				/>
			</View>
			<View style={{ alignItems: 'center', paddingTop: 54 }}>
				<View
					style={{
						alignItems: 'center',
						width: 210,
						height: 210,
						borderRadius: 15,
						borderWidth: 1,
						borderColor: 'white',
					}}>
					<Image
						style={{
							alignItems: 'center',
							width: 210,
							height: 210,
							borderRadius: 15,
							borderWidth: 1,
							borderColor: 'white',
						}}
						source={require('../../assets/app/DoctorsList/d6.png')}
					/>
				</View>

				<BoldText style={{ fontSize: 18, marginTop: 15 }}>
					Chris Umair
				</BoldText>

				<ProfileCard />
			</View>
		</ScreenWithBack>
	)
}

export default _Profile
