import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { BoldText, Text } from '../../../components/overrides/Themed'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

type Props = {
	index: number
	name: string
	location: string
	kilometers: number
	isFavorite: boolean
	isSponsored: boolean
	image: any
	isNearby: boolean
}

const ClinicsInMaps: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const navigation = useNavigation()

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('_ClinicDetails')}
			style={{
				borderRadius: 10,
				backgroundColor: Colors[colorScheme].background,
				shadowColor: 'gray',
				shadowOffset: {
					width: 0,
					height: 0,
				},
				shadowOpacity: 0.2,
				shadowRadius: 5.46,
				marginTop: 20,
				minWidth: '100%',
				padding: 16,
				flexDirection: 'row',
				alignItems: 'center',
			}}>
			<View>
				<Image
					style={{
						height: 80,
						width: 90,
						resizeMode: 'stretch',
						borderRadius: 10,
					}}
					source={props.image}
				/>
				<Image
					style={{
						height: 55,
						width: 70,
						resizeMode: 'stretch',
						borderRadius: 10,
						position: 'absolute',
						marginLeft: -5,
					}}
					source={
						props.isNearby
							? require('../../../assets/app/MapScreen/circle-active.png')
							: require('../../../assets/app/MapScreen/circle.png')
					}
				/>
				<BoldText
					style={{
						color: props.isNearby
							? Colors[colorScheme].tint
							: 'gray',
						fontSize: 20,
						position: 'absolute',
						marginLeft: 24,
						marginTop: 9,
					}}>
					{props.index}
				</BoldText>
			</View>
			<View style={{ marginLeft: 15, flex: 1 }}>
				<BoldText style={{ fontSize: 16 }}>{props.name}</BoldText>
				<Text style={{ marginTop: 5, color: 'gray' }}>
					{props.location}
				</Text>
				<Text style={{ marginTop: 8, color: 'gray' }}>
					{props.kilometers} Kms Away
				</Text>
			</View>
			<View style={{ alignSelf: 'flex-end', height: '100%' }}>
				<TouchableOpacity style={{ flex: 1, alignSelf: 'flex-end' }}>
					<Image
						style={{
							height: 42,
							width: 18,
							resizeMode: 'contain',
							marginTop: -6,
						}}
						source={
							props.isFavorite
								? require('../../../assets/app/MapScreen/heart-active.png')
								: require('../../../assets/app/MapScreen/heart.png')
						}
					/>
				</TouchableOpacity>

				<View
					style={[
						{
							backgroundColor: '#0A2440',
							alignItems: 'center',
							justifyContent: 'center',
							paddingHorizontal: 12,
							paddingVertical: 5,
							borderTopLeftRadius: 10,
							borderBottomRightRadius: 10,
							alignSelf: 'flex-end',
							transform: [{ translateX: 16 }, { translateY: 16 }],
						},
						!props.isSponsored
							? { position: 'absolute', left: -5000 }
							: {},
					]}>
					<Text style={{ color: 'white' }}>Sponsored</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default ClinicsInMaps
