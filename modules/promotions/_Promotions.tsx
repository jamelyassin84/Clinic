import React, { FC } from 'react'
import { Text, View } from 'react-native'
import AppScreen from '../../components/Screen'
import ScreenWithBack from '../../components/ScreenWithBack'
import PromoClinics from './PromoClinics'
import SearchDoctorInPromotions from './SearchDoctorInPromotions'

type Props = {}

const _Promotions: FC<Props> = (props) => {
	return (
		<ScreenWithBack header="Promo & Offers">
			<SearchDoctorInPromotions />

			<PromoClinics
				image={require('../../assets/app/Home/danat.png')}
				promo="50% off"
				services="on all services"
				clinic_name="Cleveland Clinic"
				type="Clinic"
				date="Dec 31 2021"
				others="Terms and condition may apply."
				overlay="rgba(57, 57, 57,.7)"
			/>

			<PromoClinics
				image={require('../../assets/app/Home/sheik.png')}
				promo="50% off"
				services="on all services"
				clinic_name="Sheik Khalifa"
				type="Clinic"
				date="Dec 31 2021"
				others="Terms and condition may apply."
				overlay="rgba(203, 18, 18,.7)"
			/>

			<PromoClinics
				image={require('../../assets/app/NearbyClinics/health.png')}
				promo="BUY 1 GET 2"
				services="on all services"
				clinic_name="Health Point Hospital"
				type="Clinic"
				date="Dec 31 2021"
				others="Terms and condition may apply."
				overlay="rgba(203, 165, 18,.7)"
			/>
			<View style={{ height: 100 }} />
		</ScreenWithBack>
	)
}

export default _Promotions
