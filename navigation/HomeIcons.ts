export function resolveHomeIcon(
	menu: 'home' | 'appointments' | 'settings' | 'promotion',
) {
	return [HomeIcons[menu].default, HomeIcons[menu].active]
}

export const HomeIcons = {
	home: {
		default:
			'<svg xmlns="http://www.w3.org/2000/svg" width="22.829" height="22" viewBox="0 0 22.829 22"><path id="Path_11493" data-name="Path 11493" d="M3,13l2.222-2.222m0,0L13,3l7.778,7.778m-15.556,0V21.889A1.111,1.111,0,0,0,6.333,23H9.667M20.778,10.778,23,13m-2.222-2.222V21.889A1.111,1.111,0,0,1,19.667,23H16.333M9.667,23a1.111,1.111,0,0,0,1.111-1.111V17.444a1.111,1.111,0,0,1,1.111-1.111h2.222a1.111,1.111,0,0,1,1.111,1.111v4.444A1.111,1.111,0,0,0,16.333,23M9.667,23h6.667" transform="translate(-1.586 -2)" fill="none" stroke="#99a8bc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>        ',
		active: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24"><g id="home-icon" transform="translate(-25 -740)"><rect id="Rectangle_3519" data-name="Rectangle 3519" width="28" height="24" transform="translate(25 740)" fill="none"/><path id="Path_11493" data-name="Path 11493" d="M3,13l2.222-2.222m0,0L13,3l7.778,7.778m-15.556,0V21.889A1.111,1.111,0,0,0,6.333,23H9.667M20.778,10.778,23,13m-2.222-2.222V21.889A1.111,1.111,0,0,1,19.667,23H16.333M9.667,23a1.111,1.111,0,0,0,1.111-1.111V17.444a1.111,1.111,0,0,1,1.111-1.111h2.222a1.111,1.111,0,0,1,1.111,1.111v4.444A1.111,1.111,0,0,0,16.333,23M9.667,23h6.667" transform="translate(26.5 739.039)" fill="none" stroke="#00b074" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g></svg>',
	},
	appointments: {
		default:
			'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">  <path id="Path_11494" data-name="Path 11494" d="M8.556,7.444V3m8.889,4.444V3m-10,8.889H18.556M5.222,23H20.778A2.222,2.222,0,0,0,23,20.778V7.444a2.222,2.222,0,0,0-2.222-2.222H5.222A2.222,2.222,0,0,0,3,7.444V20.778A2.222,2.222,0,0,0,5.222,23Z" transform="translate(-2 -2)" fill="none" stroke="#99a8bc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
		active: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24">  <g id="Appointments-icon" transform="translate(-25 -740)">    <rect id="Rectangle_3519" data-name="Rectangle 3519" width="28" height="24" transform="translate(25 740)" fill="none"/>    <path id="Path_11494" data-name="Path 11494" d="M8.556,7.444V3m8.889,4.444V3m-10,8.889H18.556M5.222,23H20.778A2.222,2.222,0,0,0,23,20.778V7.444a2.222,2.222,0,0,0-2.222-2.222H5.222A2.222,2.222,0,0,0,3,7.444V20.778A2.222,2.222,0,0,0,5.222,23Z" transform="translate(26.5 739)" fill="none" stroke="#00b074" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>  </g></svg>',
	},
	settings: {
		default:
			'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">  <g id="Group_74050" data-name="Group 74050" transform="translate(-2 -2)">    <path id="Path_11495" data-name="Path 11495" d="M11.138,4.464a1.916,1.916,0,0,1,3.723,0A1.916,1.916,0,0,0,17.72,5.648,1.916,1.916,0,0,1,20.352,8.28a1.916,1.916,0,0,0,1.184,2.858,1.916,1.916,0,0,1,0,3.723,1.915,1.915,0,0,0-1.184,2.858,1.916,1.916,0,0,1-2.633,2.633,1.915,1.915,0,0,0-2.858,1.184,1.916,1.916,0,0,1-3.723,0A1.916,1.916,0,0,0,8.28,20.352,1.916,1.916,0,0,1,5.648,17.72a1.916,1.916,0,0,0-1.184-2.858,1.916,1.916,0,0,1,0-3.723A1.916,1.916,0,0,0,5.648,8.28,1.916,1.916,0,0,1,8.28,5.648,1.916,1.916,0,0,0,11.138,4.464Z" fill="none" stroke="#99a8bc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>    <path id="Path_11496" data-name="Path 11496" d="M16.333,12.667A3.667,3.667,0,1,1,12.667,9,3.667,3.667,0,0,1,16.333,12.667Z" transform="translate(0.333 0.333)" fill="none" stroke="#99a8bc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>  </g></svg>',
		active: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24">  <g id="settings-icon" transform="translate(-25 -740)">    <rect id="Rectangle_3519" data-name="Rectangle 3519" width="28" height="24" transform="translate(25 740)" fill="none"/>    <g id="Group_74050" data-name="Group 74050" transform="translate(26 739)">      <path id="Path_11495" data-name="Path 11495" d="M11.138,4.464a1.916,1.916,0,0,1,3.723,0A1.916,1.916,0,0,0,17.72,5.648,1.916,1.916,0,0,1,20.352,8.28a1.916,1.916,0,0,0,1.184,2.858,1.916,1.916,0,0,1,0,3.723,1.915,1.915,0,0,0-1.184,2.858,1.916,1.916,0,0,1-2.633,2.633,1.915,1.915,0,0,0-2.858,1.184,1.916,1.916,0,0,1-3.723,0A1.916,1.916,0,0,0,8.28,20.352,1.916,1.916,0,0,1,5.648,17.72a1.916,1.916,0,0,0-1.184-2.858,1.916,1.916,0,0,1,0-3.723A1.916,1.916,0,0,0,5.648,8.28,1.916,1.916,0,0,1,8.28,5.648,1.916,1.916,0,0,0,11.138,4.464Z" fill="none" stroke="#00b074" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>      <path id="Path_11496" data-name="Path 11496" d="M16.333,12.667A3.667,3.667,0,1,1,12.667,9,3.667,3.667,0,0,1,16.333,12.667Z" transform="translate(0.333 0.333)" fill="none" stroke="#00b074" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>    </g>  </g></svg>',
	},
	promotion: {
		default:
			'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22">  <g id="Group_74051" data-name="Group 74051" transform="translate(-4 -2)">    <path id="Path_11497" data-name="Path 11497" d="M17.309,7.461a4.561,4.561,0,0,1-4.655,4.461A4.561,4.561,0,0,1,8,7.461,4.561,4.561,0,0,1,12.655,3,4.561,4.561,0,0,1,17.309,7.461Z" transform="translate(0.345)" fill="none" stroke="#99a8bc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>    <path id="Path_11498" data-name="Path 11498" d="M13,14a7.9,7.9,0,0,0-8,7.806H21A7.9,7.9,0,0,0,13,14Z" transform="translate(0 1.194)" fill="none" stroke="#99a8bc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>  </g></svg>',
		active: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24">  <g id="profile-icon" transform="translate(-25 -740)">    <rect id="Rectangle_3519" data-name="Rectangle 3519" width="28" height="24" transform="translate(25 740)" fill="none"/>    <g id="Group_74051" data-name="Group 74051" transform="translate(26 738.964)">      <path id="Path_11497" data-name="Path 11497" d="M17.309,7.461a4.561,4.561,0,0,1-4.655,4.461A4.561,4.561,0,0,1,8,7.461,4.561,4.561,0,0,1,12.655,3,4.561,4.561,0,0,1,17.309,7.461Z" transform="translate(0.345)" fill="none" stroke="#00b074" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>      <path id="Path_11498" data-name="Path 11498" d="M13,14a7.9,7.9,0,0,0-8,7.806H21A7.9,7.9,0,0,0,13,14Z" transform="translate(0 1.194)" fill="none" stroke="#00b074" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g></g></svg>',
	},
}