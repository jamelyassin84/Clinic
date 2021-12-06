import React, { FC } from 'react'

import ScreenWithBack from '../../../components/ScreenWithBack'
import _ClinicAbout from './about/_ClinicAbout'

import _ClinicOffers from './offers/_ClinicOffers'

type Props = {}

const _ClinicDetails: FC<Props> = (props) => {
	const [tab, setTab] = React.useState(1)

	return (
		<ScreenWithBack header="Cleveland Clinic">
			<_ClinicOffers
				isShowing={() => {
					setTab(2)
				}}
				show={tab === 1}
			/>
			<_ClinicAbout
				isShowing={() => {
					setTab(1)
				}}
				show={tab === 2}
			/>
		</ScreenWithBack>
	)
}

export default _ClinicDetails
