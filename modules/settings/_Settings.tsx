import { Entypo } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Dimensions, Text, View, TouchableOpacity, Switch } from 'react-native'
import { BoldText } from '../../components/overrides/Themed'
import AppScreen from '../../components/Screen'
import ScreenWithBack from '../../components/ScreenWithBack'
import HomeTopBar from '../home/home_page/HomeTopBar'

type Props = {}

const _Settings: FC<Props> = (props) => {
	return (
		<ScreenWithBack header="Settings">
			<View style={{ height: 25 }} />
			<View
				style={{
					width: Dimensions.get('screen').width - 32,
					alignSelf: 'center',
					borderWidth: 1,
					borderColor: '#E6ECF2',
					borderRadius: 10,
					paddingVertical: 37,
					paddingHorizontal: 41,
					height: Dimensions.get('screen').height - 220,
				}}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<BoldText style={{ fontSize: 16, flex: 1 }}>Sync</BoldText>
					<Switch
						trackColor={{ false: '#B2BFCB', true: '#0381FF' }}
						thumbColor="white"
						ios_backgroundColor="#B2BFCB"
						value={false}
					/>
				</View>
				<View
					style={{
						borderBottomWidth: 1,
						borderBottomColor: '#E6ECF2',
						paddingVertical: 10,
					}}>
					<Text style={{ color: '#6F7D8F', fontSize: 14 }}>
						Calendar
					</Text>
				</View>
				<View
					style={{
						borderBottomWidth: 1,
						borderBottomColor: '#E6ECF2',
						paddingVertical: 10,
					}}>
					<Text style={{ color: '#6F7D8F', fontSize: 14 }}>
						Contacts
					</Text>
				</View>

				<BoldText style={{ fontSize: 16, marginTop: 50 }}>
					Language
				</BoldText>

				<TouchableOpacity
					style={{
						borderBottomWidth: 1,
						borderBottomColor: '#E6ECF2',
						paddingVertical: 10,
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					<Text style={{ color: '#6F7D8F', fontSize: 14, flex: 1 }}>
						English
					</Text>
					<Entypo name="check" size={14} color="#0381FF" />
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						borderBottomWidth: 1,
						borderBottomColor: '#E6ECF2',
						paddingVertical: 10,
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					<Text style={{ color: '#6F7D8F', fontSize: 14, flex: 1 }}>
						Arabic
					</Text>
					<View />
				</TouchableOpacity>

				<Text
					style={{
						color: '#6F7D8F',
						fontSize: 9,
						textAlignVertical: 'center',
						alignSelf: 'center',
						position: 'absolute',
						bottom: 70,
					}}>
					All Right Reserve @ Mawedy 2022
				</Text>

				<TouchableOpacity
					style={{
						position: 'absolute',
						bottom: 50,
						alignSelf: 'center',
					}}>
					<Text
						style={{
							color: '#2283FF',
							fontSize: 14,
							textAlignVertical: 'center',
							alignSelf: 'center',
							marginTop: 7,
						}}>
						Terms & Condition
					</Text>
				</TouchableOpacity>
			</View>
		</ScreenWithBack>
	)
}

export default _Settings
