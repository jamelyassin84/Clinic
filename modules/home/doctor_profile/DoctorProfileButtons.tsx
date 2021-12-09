import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {}

const DoctorProfileButtons: FC<Props> = (props) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 25,
			}}>
			<TouchableOpacity>
				<Image
					style={{
						height: 72,
						width: 72,
						resizeMode: 'contain',
						marginRight: 20,
					}}
					source={require('../../../assets/app/DoctorProfile/call.png')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Image
					style={{
						height: 72,
						width: 72,
						resizeMode: 'contain',
						marginRight: 20,
					}}
					source={require('../../../assets/app/DoctorProfile/message.png')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Image
					style={{ height: 72, width: 72, resizeMode: 'contain' }}
					source={require('../../../assets/app/DoctorProfile/video.png')}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default DoctorProfileButtons
