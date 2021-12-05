import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText, Text } from '../../../components/overrides/Themed'
import ClinicsInMaps from './ClinicsInMaps'
import { dummyClinics } from './DummClinics'

type Props = {}

const BottomMapDetails: FC<Props> = (props) => {
	return (
		<View>
			<View style={{ padding: 16 }}>
				{dummyClinics.map((clinic: any, index: number) => (
					<ClinicsInMaps
						key={index}
						index={index}
						name={clinic.name}
						location={clinic.location}
						kilometers={clinic.kilometers}
						isFavorite={clinic.isFavorite}
						isSponsored={clinic.isSponsored}
						image={clinic.image}
						isNearby={clinic.isNearby}
					/>
				))}
			</View>
		</View>
	)
}

export default BottomMapDetails
