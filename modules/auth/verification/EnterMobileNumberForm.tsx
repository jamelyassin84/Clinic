import React, { FC } from 'react'
import { View, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

type Props = {}

const EnterMobileNumberForm: FC<Props> = (props) => {
	return (
		<View
			style={{
				height: 56,
				borderWidth: 1,
				borderColor: '#99A8BC',
				borderRadius: 10,
				marginHorizontal: 40,
				marginTop: 87,
				flexDirection: 'row',
			}}>
			<View
				style={{
					width: '100%',
					height: '100%',
					flexDirection: 'row',
					paddingVertical: 13,
				}}>
				<TouchableOpacity
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						height: '100%',
					}}>
					<Image
						style={{
							height: 20,
							resizeMode: 'contain',
							width: 50,
						}}
						source={require('../../../assets/app/Verification/flag.png')}
					/>
					<Image
						style={{
							height: 5,
							resizeMode: 'contain',
							width: 10,
							marginRight: 13,
						}}
						source={require('../../../assets/app/Verification/arrow-down.png')}
					/>
				</TouchableOpacity>
				<TextInput
					onChangeText={(text) => {}}
					placeholder="Mobile Number"
					style={{
						alignSelf: 'center',
						flex: 1,
						borderLeftWidth: 1,
						borderColor: '#99A8BC',
						paddingLeft: 13,
						height: '100%',
					}}
					keyboardType="number-pad"
				/>
			</View>
		</View>
	)
}

export default EnterMobileNumberForm
