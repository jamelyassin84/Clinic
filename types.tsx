import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	Modal: undefined
	Root: NavigatorScreenParams<RootTabParamList> | undefined
	SignIn: undefined
	Verification: undefined
	VerificationCode: undefined
	SetLocation: undefined
	_PatientDetailsScreen: undefined
	_UploadAPhotoScreen: undefined

	_NearbyClinics: undefined
	_ClinicDetails: undefined
	_UpcomingAppointments: undefined
	_AppointmentDetails: undefined

	_MapScreen: undefined

	_Profile: undefined
	_BookingHistory: undefined
	_MedicalRecords: undefined
	PatientMedicalRecordsDetail: undefined

	DepartmentScreen: undefined
	_DoctorProfile: undefined
	_AppointmentSchedule: undefined

	_SelectDoctor: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabParamList = {
	Home: undefined
	Appointments: undefined
	Settings: undefined
	Promotions: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<RootTabParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>
