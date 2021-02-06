const countriesIso = {
	AF: 'Afghanistan',
	AX: 'Åland Islands',
	AL: 'Albania',
	DZ: 'Algeria',
	AS: 'American Samoa',
	AD: 'Andorra',
	AO: 'Angola',
	AI: 'Anguilla',
	AQ: 'Antarctica',
	AG: 'Antigua and Barbuda',
	AR: 'Argentina',
	AM: 'Armenia',
	AW: 'Aruba',
	AU: 'Australia',
	AT: 'Austria',
	AZ: 'Azerbaijan',
	BS: 'Bahamas',
	BH: 'Bahrain',
	BD: 'Bangladesh',
	BB: 'Barbados',
	BY: 'Belarus',
	BE: 'Belgium',
	BZ: 'Belize',
	BJ: 'Benin',
	BM: 'Bermuda',
	BT: 'Bhutan',
	BO: 'Bolivia',
	BA: 'Bosnia and Herzegovina',
	BW: 'Botswana',
	BL: 'Saint Barthélemy',
	BV: 'Bouvet Island',
	BR: 'Brazil',
	IO: 'British Indian Ocean Territory',
	BN: 'Brunei Darussalam',
	BQ: 'BONAIRE, SINT EUSTATIUS AND SABA',
	BG: 'Bulgaria',
	BF: 'Burkina Faso',
	BI: 'Burundi',
	KH: 'Cambodia',
	CM: 'Cameroon',
	CA: 'Canada',
	CV: 'Cape Verde',
	CW: 'Curaçao',
	MF: 'Saint Martin',
	KY: 'Cayman Islands',
	CF: 'Central African Republic',
	TD: 'Chad',
	CL: 'Chile',
	CN: 'China',
	CX: 'Christmas Island',
	CC: 'Cocos (Keeling) Islands',
	CO: 'Colombia',
	KM: 'Comoros',
	CG: 'Congo',
	CD: 'The Democratic Republic of the Congo',
	CK: 'Cook Islands',
	CR: 'Costa Rica',
	CI: "Cote D'Ivoire",
	HR: 'Croatia',
	CU: 'Cuba',
	CY: 'Cyprus',
	CZ: 'Czech Republic',
	DK: 'Denmark',
	DJ: 'Djibouti',
	DM: 'Dominica',
	DO: 'Dominican Republic',
	EC: 'Ecuador',
	EG: 'Egypt',
	SV: 'El Salvador',
	GQ: 'Equatorial Guinea',
	ER: 'Eritrea',
	EE: 'Estonia',
	ET: 'Ethiopia',
	FK: 'Falkland Islands (Malvinas)',
	FO: 'Faroe Islands',
	FJ: 'Fiji',
	FI: 'Finland',
	FR: 'France',
	GF: 'French Guiana',
	PF: 'French Polynesia',
	TF: 'French Southern Territories',
	GA: 'Gabon',
	GM: 'Gambia',
	GE: 'Georgia',
	DE: 'Germany',
	GH: 'Ghana',
	GI: 'Gibraltar',
	GR: 'Greece',
	GL: 'Greenland',
	GD: 'Grenada',
	GP: 'Guadeloupe',
	GU: 'Guam',
	GT: 'Guatemala',
	GG: 'Guernsey',
	GN: 'Guinea',
	GW: 'Guinea-Bissau',
	GY: 'Guyana',
	HT: 'Haiti',
	HM: 'Heard Island and Mcdonald Islands',
	VA: 'Holy See (Vatican City State)',
	HN: 'Honduras',
	HK: 'Hong Kong',
	HU: 'Hungary',
	IS: 'Iceland',
	IN: 'India',
	ID: 'Indonesia',
	IR: 'Islamic Republic Of Iran',
	IQ: 'Iraq',
	IE: 'Ireland',
	IM: 'Isle of Man',
	IL: 'Israel',
	IT: 'Italy',
	JM: 'Jamaica',
	JP: 'Japan',
	JE: 'Jersey',
	JO: 'Jordan',
	KZ: 'Kazakhstan',
	KE: 'Kenya',
	KI: 'Kiribati',
	KP: "Democratic People's Republic of Korea",
	KR: 'Republic of Korea',
	XK: 'Kosovo',
	KW: 'Kuwait',
	KG: 'Kyrgyzstan',
	LA: "Lao People's Democratic Republic",
	LV: 'Latvia',
	LB: 'Lebanon',
	LS: 'Lesotho',
	LR: 'Liberia',
	LY: 'Libyan Arab Jamahiriya',
	LI: 'Liechtenstein',
	LT: 'Lithuania',
	LU: 'Luxembourg',
	MO: 'Macao',
	MK: 'The Former Yugoslav Republic of Macedonia',
	MG: 'Madagascar',
	MW: 'Malawi',
	MY: 'Malaysia',
	MV: 'Maldives',
	ML: 'Mali',
	MT: 'Malta',
	MH: 'Marshall Islands',
	MQ: 'Martinique',
	MR: 'Mauritania',
	MU: 'Mauritius',
	YT: 'Mayotte',
	MX: 'Mexico',
	FM: 'Federated States of Micronesia',
	MD: 'Republic of Moldova',
	MC: 'Monaco',
	MN: 'Mongolia',
	ME: 'Montenegro',
	MS: 'Montserrat',
	MA: 'Morocco',
	MZ: 'Mozambique',
	MM: 'Myanmar',
	NA: 'Namibia',
	NR: 'Nauru',
	NP: 'Nepal',
	NL: 'Netherlands',
	AN: 'Netherlands Antilles',
	NC: 'New Caledonia',
	NZ: 'New Zealand',
	NI: 'Nicaragua',
	NE: 'Niger',
	NG: 'Nigeria',
	NU: 'Niue',
	NF: 'Norfolk Island',
	MP: 'Northern Mariana Islands',
	NO: 'Norway',
	OM: 'Oman',
	PK: 'Pakistan',
	PW: 'Palau',
	PS: 'Occupied Palestinian Territory',
	PA: 'Panama',
	PG: 'Papua New Guinea',
	PY: 'Paraguay',
	PE: 'Peru',
	PH: 'Philippines',
	PN: 'Pitcairn',
	PL: 'Poland',
	PT: 'Portugal',
	PR: 'Puerto Rico',
	QA: 'Qatar',
	RE: 'Reunion',
	RO: 'Romania',
	RU: 'Russian Federation',
	RW: 'Rwanda',
	SH: 'Saint Helena',
	KN: 'Saint Kitts and Nevis',
	LC: 'Saint Lucia',
	PM: 'Saint Pierre and Miquelon',
	VC: 'Saint Vincent and the Grenadines',
	WS: 'Samoa',
	SM: 'San Marino',
	ST: 'Sao Tome and Principe',
	SA: 'Saudi Arabia',
	SN: 'Senegal',
	RS: 'Serbia',
	SC: 'Seychelles',
	SL: 'Sierra Leone',
	SG: 'Singapore',
	SK: 'Slovakia',
	SI: 'Slovenia',
	SS: 'South Sudan',
	SB: 'Solomon Islands',
	SO: 'Somalia',
	ZA: 'South Africa',
	GS: 'South Georgia and the South Sandwich Islands',
	ES: 'Spain',
	LK: 'Sri Lanka',
	SD: 'Sudan',
	SR: 'Suriname',
	SJ: 'Svalbard and Jan Mayen',
	SZ: 'Swaziland',
	SE: 'Sweden',
	CH: 'Switzerland',
	SY: 'Syrian Arab Republic',
	TW: 'Taiwan',
	TJ: 'Tajikistan',
	TZ: 'United Republic of Tanzania',
	TH: 'Thailand',
	TL: 'Timor-Leste',
	TG: 'Togo',
	TK: 'Tokelau',
	TO: 'Tonga',
	TT: 'Trinidad and Tobago',
	TN: 'Tunisia',
	TR: 'Turkey',
	TM: 'Turkmenistan',
	TC: 'Turks and Caicos Islands',
	TV: 'Tuvalu',
	UG: 'Uganda',
	UA: 'Ukraine',
	SX: 'Sint Maarten',
	AE: 'United Arab Emirates',
	GB: 'United Kingdom',
	US: 'United States',
	UM: 'United States Minor Outlying Islands',
	UY: 'Uruguay',
	UZ: 'Uzbekistan',
	VU: 'Vanuatu',
	VE: 'Venezuela',
	VN: 'Viet Nam',
	VG: 'British Virgin Islands',
	VI: 'U.S. Virgin Islands',
	WF: 'Wallis and Futuna',
	EH: 'Western Sahara',
	YE: 'Yemen',
	ZM: 'Zambia',
	ZW: 'Zimbabwe',
	WO: 'World'
};
const store = new Vuex.Store({
	state: {
		day_cases: {
			by_locations: {
				confirmed: [],
				recovered: [],
				deaths: []
			},
			max: {
				confirmed: 0,
				recovered: 0,
				deaths: 0
			}
		},
		displayed_series: {
			aggregate: {
				confirmed: [],
				recovered: [],
				deaths: []
			},
			by_locations: {
				confirmed: [],
				recovered: [],
				deaths: []
			},
			max: {
				confirmed: 0,
				recovered: 0,
				deaths: 0
			},
			total: {
				confirmed: 0,
				recovered: 0,
				deaths: 0
			}
		},
		all_series: {},
		cases_type: 'confirmed',
		current_location: '',
		worldmap: {},
		current_hover_location: '',
		notify: {
			show: false,
			message: '',
			type: 'error'
		},
		location_loading: false
	},
	mutations: {
		update_location_loading(state, status) {
			state.location_loading = status;
		},
		update_day_cases(state, payload) {
			const cases = payload.data;
			// Get max of each data series
			state.day_cases = cases;
		},
		update_cases_type(state, type) {
			state.cases_type = type;
			// Set current hue to modify colors
			const hue = getComputedStyle(document.documentElement).getPropertyValue(`--${type}-hue`);
			document.documentElement.style.setProperty('--current-hue', hue);
		},
		update_displayed_series(state, data) {
			state.series = data;
		},
		update_all_series(state, payload) {
			const { data, extra } = payload;
			const { iso } = extra;
			state.all_series[iso] = data;
		},
		update_location(state, location) {
			state.current_location = location;
		},
		update_world_map(state, payload) {
			const map = payload.data;
			state.worldmap = JSON.parse(map);
		},
		update_current_hover_location(state, iso) {
			state.current_hover_location = iso;
		},
		update_notify(state, data) {
			state.notify = { ...state.notify, ...data };
		}
	},
	getters: {
		getLocationLoading(state) {
			return state.location_loading;
		},
		getNotifyDetails(state) {
			return state.notify;
		},
		getCountriesList() {
			return countriesIso;
		},
		getCurrentHoverLocation(state) {
			return state.current_hover_location;
		},
		getWorldMap(state) {
			return state.worldmap;
		},
		/**
		 * Get world map path and value for each location
		 *
		 * @param {object} state
		 * @param {object} getters
		 */
		getWorldMapData(state, getters) {
			const cases = getters.getDayCaseByType;
			const mapData = Object.keys(getters.getWorldMap).reduce((acc, key) => {
				const value = cases[key]?.value || 0;
				acc[key] = {
					path: getters.getWorldMap[key],
					value
				};
				return acc;
			}, {});

			return mapData.length === 0 ? [] : mapData;
		},
		/**
		 * Retrun cases based on selected type ('confirmed', 'recovered', 'deaths')
		 *
		 * @param {object} state
		 */
		getDayCaseByType(state) {
			const cases = state.day_cases.by_locations[state.cases_type];

			const keys = Object.keys(cases).sort((a, b) => cases[b].value - cases[a].value);
			const casesOrdered = {};
			keys.forEach(k => (casesOrdered[k] = cases[k]));
			return casesOrdered.length === 0 ? {} : casesOrdered;
		},
		/**
		 * Get total day cases count
		 *
		 * @param {object} state
		 */
		getDayCasesTotalCount(state) {
			const casesTypes = ['confirmed', 'deaths', 'recovered'];
			const casesTotal = {};
			casesTypes.forEach(caseType => {
				casesTotal[caseType] =
					state.day_cases.by_locations[caseType][state.current_location]?.value;
			});
			return casesTotal;
		},
		getMaxCountPerDay(state) {
			const max = state.day_cases.max[state.cases_type];
			return max || 0;
		},
		getDisplayedCasesType(state) {
			return state.cases_type;
		},
		getAllSeries(state) {
			return state.all_series;
		},
		getDisplayedSeries(state) {
			return state.all_series[state.current_location];
		},
		getSeriesByCaseType(state, getters) {
			return getters.getDisplayedSeries?.aggregate[state.cases_type] || [];
		},
		getCurrentLocation(state) {
			return state.current_location;
		}
	},
	actions: {
		loadFromBackend({ commit }, { endpoint, request_data = {}, config = {}, mutation_key }) {
			return new Promise((resolve, reject) => {
				this._vm.$http
					.post(endpoint, request_data, config)
					.then(response => {
						commit(mutation_key, { data: response.data, extra: request_data });
						resolve(response.data);
					})
					.catch(error => {
						commit('update_notify', { message: error, show: true });
						reject(error.response);
					});
			});
		}
	}
});
const { mapGetters, mapMutations } = Vuex;

let axi = axios.create({
	baseURL: 'https://covid.kalimah-apps.com/wp-json/api/v1/',
	// baseURL: 'http://kitab.test/wp-json/api/v1/',
	timeout: 100000
});
Vue.prototype.$http = axi;
Vue.component('loaderBar', {
	template: '#loader-bar-template',
	props: ['loading', 'loadingText', 'loadedPercentage', 'loadingIndeterminant']
});

Vue.component('countrieslist', {
	template: '#countries-list-template',
	data() {
		return {
			search_keywords: '',
			is_loading: {}
		};
	},
	computed: {
		...mapGetters([
			'getDayCaseByType',
			'getCountriesList',
			'getCurrentLocation',
			'getAllSeries',
			'getLocationLoading'
		]),
		getCasesWithCountriesNames() {
			return Object.keys(this.getDayCaseByType).reduce((list, iso) => {
				list[iso] = this.getDayCaseByType[iso];
				list[iso].name = this.getCountriesList[iso];
				return list;
			}, {});
		},
		filterCountriesList() {
			const locationsList = this.getCasesWithCountriesNames;
			if (this.search_keywords === '') return locationsList;

			return Object.keys(locationsList).reduce((list, iso) => {
				const location = locationsList[iso];
				if (iso !== 'none' && location.name.toLowerCase().indexOf(this.search_keywords) > -1) {
					list[iso] = locationsList[iso];
				}
				return list;
			}, {});
		}
	},
	methods: {
		...mapMutations(['update_location', 'update_location_loading']),
		selectCountry(iso) {
			// check if the data for this location has been loaded already
			if (iso in this.getAllSeries) {
				this.update_location(iso);
				return;
			}

			// Don't process if there is another country data being loaded
			if (this.getLocationLoading !== false) return;

			// show loader
			//this.$set(this.is_loading, iso, true);
			this.update_location_loading(iso);

			this.$store
				.dispatch('loadFromBackend', {
					endpoint: 'get-total-series',
					request_data: { iso },
					mutation_key: 'update_all_series'
				})
				.then(() => {
					this.update_location(iso);
					this.update_location_loading(false);
				})
				.catch(() => {
					this.update_location_loading(false);
				});
		},
		filterCountries(e) {
			this.search_keywords = e.target.value.toLowerCase();
		}
	}
});

Vue.component('flag', {
	template: '#flag-template',
	props: ['iso'],
	computed: {
		flag() {
			if (this.iso === 'none' || this.iso === '') return '';
			//return `https://covid.kalimah-apps.com/index.php?flag_iso=${this.iso}`;
			return `https://raw.githubusercontent.com/lipis/flag-icon-css/master/flags/4x3/${this.iso}.svg`;
		}
	}
});

Vue.component('location-tooltip', {
	template: '#location-tooltip-template',
	data() {
		return {
			tooltip_x: 0,
			tooltip_y: 0,
			show_tooltip: false
		};
	},
	mounted() {
		this.$root.$on('mouse_coord', coord => {
			this.tooltip_x = coord.tooltip_x;
			this.tooltip_y = coord.tooltip_y;
		});

		this.$root
			.$on('tooltip_on', () => {
				this.show_tooltip = true;
			})
			.$on('tooltip_off', () => {
				this.show_tooltip = false;
			});
	},
	computed: {
		...mapGetters([
			'getDayCaseByType',
			'getCountriesList',
			'getCurrentHoverLocation',
			'getDisplayedCasesType'
		]),
		getTooltipData() {
			const location = this.getCurrentHoverLocation;

			if (location === 'WO' || location === '') return {};

			const data = this.getDayCaseByType[location];
			// Some countires (Turkminstan and Greenland) don't have data
			if (typeof data === 'undefined') {
				return {
					title: this.getCountriesList[location]
				};
			}

			// Get data and return an object
			const dailyDiffValue = data.diff.value;
			const dailyDiffType = data.diff.type;

			// Make sure percentage is only showing two decimal points
			const dailyPercentage = (data.diff.value * 100) / data.value;
			const dailyPercentageRounded = Math.round(dailyPercentage * 100) / 100;

			return {
				title: this.getCountriesList[location],
				type: this.getDisplayedCasesType,
				count: data.value.toLocaleString('en-US'),
				diff: dailyDiffValue.toLocaleString('en-US'),
				difftext: dailyDiffType === 'extra' ? 'Increase' : 'Decrease',
				percentage: dailyPercentageRounded
			};
		},
		getTooltipStyle() {
			const left = this.tooltip_x;
			const top = this.tooltip_y;

			return {
				opacity: this.show_tooltip === true ? 1 : 0,
				left: `${left}px`,
				top: `${top}px`
			};
		}
	}
});

Vue.component('notify', {
	template: '#notify-template',
	props: ['show', 'type', 'message'],
	data() {
		return {
			show_notify: false
		};
	},
	methods: {
		...mapMutations(['update_notify'])
	},
	watch: {
		show(newShowValue) {
			this.show_notify = newShowValue;
			if (newShowValue === false) return;
			setTimeout(() => {
				this.update_notify({ message: '', show: false });
			}, 8000);
		}
	}
});

Vue.component('worldmap', {
	template: '#worldmap-template',
	data() {
		return {
			map_container: null,
			map_svg: null,
			loading: true,
			loading_text: 'Loading Map',
			loaded_percentage: 0,
			viewbox: '0 267 1000 400',
			show_tooltip_timer: null,
			show_tooltip: false,
			tooltip_x: 0,
			tooltip_y: 0,
			x_rotate: 0,
			y_rotate: 0
		};
	},
	mounted() {
		this.$store.dispatch('loadFromBackend', {
			endpoint: 'get-day-cases',
			mutation_key: 'update_day_cases'
		});
		// Load world map on start
		this.$store
			.dispatch('loadFromBackend', {
				endpoint: 'get-world-map',
				mutation_key: 'update_world_map',
				config: {
					onDownloadProgress: progressEvent => {
						const total = parseFloat(
							progressEvent.currentTarget.getResponseHeader('x-map-filesize')
						);
						const current = progressEvent.loaded;

						const percentCompleted = Math.floor((current / total) * 100);
						this.loaded_percentage = percentCompleted;
					}
				}
			})
			.then(() => {
				this.loading = false;
			})
			.catch(() => {
				this.loading = false;
			});

		this.map_container = this.$refs.world_map_container;
		this.map_svg = this.$refs.world_map;
	},
	methods: {
		...mapMutations([
			'update_location',
			'update_current_hover_location',
			'update_location_loading'
		]),
		resetLocation() {
			this.update_location('WO');
		},
		/**
		 * Rotate map on mouse move
		 *
		 * @param {object} e Event
		 */
		rotateMap(e) {
			const rect = this.map_svg.getBoundingClientRect();
			const left = e.x - rect.x;
			const top = e.y - rect.y;
			const horizontalMiddle = rect.height / 2;
			const verticalMiddle = rect.width / 2;
			this.x_rotate = (((top - horizontalMiddle) * 4) / horizontalMiddle) * -1;
			this.y_rotate = ((left - verticalMiddle) * 4) / verticalMiddle;
		},
		stopRotateMap() {
			setTimeout(() => {
				this.x_rotate = 0;
				this.y_rotate = 0;
			}, 200);
		},
		selectLocation(iso) {
			// Dont process click if not data available
			const data = this.getDayCaseByType[iso];
			if (typeof data === 'undefined') {
				return;
			}

			// check if the data for this location has been loaded already
			if (iso in this.getAllSeries) {
				this.update_location(iso);
				return;
			}

			// show loader
			this.update_location_loading(true);

			this.$store
				.dispatch('loadFromBackend', {
					endpoint: 'get-total-series',
					request_data: { iso },
					mutation_key: 'update_all_series'
				})
				.then(() => {
					this.update_location(iso);
					this.update_location_loading(false);
				})
				.catch(() => {
					this.update_location_loading(false);
				});
		},
		/**
		 * Each additional decimal place means differnt range of lightness.
		 * 100, 1000, 10000 and so on.
		 * This function calculate the lightness within the range of the decimal places
		 */
		getLightRange(max, range) {
			const split = max.toString().split('');
			const l = split.length - 1;
			return {
				max: Math.round((50 / l) * range),
				min: Math.round((50 / l) * range - 1)
			};
		},
		/**
		 * Get percentage number within a provided range
		 */
		getPercentageRangeNumber(min, max, percent) {
			return Math.round(min + ((max - min) * percent) / 50);
		},
		/**
		 * Get color of location based on its value
		 * Darker means higher value
		 */
		getColor(value) {
			// Get decimal places
			const decimalPlaces = value.toString().split('').length;
			const maxCount = this.getMaxCountPerDay;

			// Get lightness percentage between 0 and 50
			const lightnessPercent = Math.round((value * 50) / maxCount);
			const range = this.getLightRange(maxCount, decimalPlaces);
			const adjustedLightnessPercentage = this.getPercentageRangeNumber(
				range.min,
				range.max,
				lightnessPercent
			);

			const hueColor = `${this.getCurrentHueColor()}deg`;
			/*
			 * return hsl color. 80  is used to reverse colors
			 * to represent higher values with dark color accents and
			 * lower values with light color accents
			 */
			return `hsl(${hueColor}, 70%, ${80 - adjustedLightnessPercentage}%)`;
		},
		/**
		 * Handle mouse enter on specific location to show tooltip
		 *
		 * @param {object} event
		 * @param {string} iso
		 */
		handleMoustEnter(event, iso) {
			clearTimeout(this.show_tooltip_timer);
			this.update_current_hover_location(iso);
			this.$root.$emit('tooltip_on');
		},
		/**
		 * Emit coordinates on mouse move to move tooltip
		 *
		 * @param {object} e Mouse event object
		 */
		handleMouseMove(e) {
			this.$root.$emit('mouse_coord', { tooltip_x: e.pageX, tooltip_y: e.pageY });
		},
		/**
		 * Hide tooltip on mouse out
		 */
		handleMoustOut() {
			clearTimeout(this.show_tooltip_timer);
			this.show_tooltip_timer = setTimeout(() => {
				// this.show_tooltip = false;
				this.$root.$emit('tooltip_off');
			}, 100);
		},

		getCurrentHueColor() {
			return getComputedStyle(document.documentElement).getPropertyValue('--current-hue');
		}
	},
	computed: {
		...mapGetters([
			'getDayCaseByType',
			'getWorldMapData',
			'getMaxCountPerDay',
			'getDisplayedCasesType',
			'getCountriesList',
			'getCurrentLocation',
			'getAllSeries',
			'getCurrentHoverLocation',
			'getLocationLoading'
		]),

		getMapStyle() {
			return {
				'--map-rotate-x': `${this.x_rotate}deg`,
				'--map-rotate-y': `${this.y_rotate}deg`
			};
		},
		/**
		 * Return world map data with choropleth hsl values
		 */
		getWorlMapWithColors() {
			return Object.keys(this.getWorldMapData).reduce((acc, key) => {
				acc[key] = this.getWorldMapData[key];
				acc[key].color = this.getColor(acc[key].value);
				return acc;
			}, {});
		},
		getMaxCount() {
			return Object.keys(this.getWorldMapData);
		}
	},
	watch: {
		getWorlMapWithColors() {
			this.$nextTick(() => {});
		},
		getCurrentLocation(newLocationsIso) {
			const iso = newLocationsIso;
			// let viewbox = '0 0 700.9375 337.375';
			let viewbox = '0 267.77886962890625 1000 400';

			// get locations iso (if world is not selected)
			if (iso !== 'WO' && this.map_svg != null) {
				const { width, height, x, y } = document.querySelector(`#${iso}`).getBBox();
				const halfWidth = width / 2;
				const halfHeight = height / 2;
				viewbox = `${x - halfWidth} ${y - halfHeight} ${width + width} ${height + height}`;
			}
			// animate viewbox for selected ISO
			TweenLite.to(this.$data, {
				duration: 1.5,
				ease: 'expo.out',
				viewbox: viewbox
			});
		}
	}
});

Vue.component('series', {
	template: '#series-template',
	data() {
		return {
			chart: null,
			chart_type: 'bar',
			series_type: 'daily',
			series_representation: 'change',
			series_loading: true,
			monthNames: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec'
			]
		};
	},
	mounted() {
		// Check if there is data in localStorage and apply it
		const keys = ['chart_type', 'series_type', 'series_representation'];
		keys.forEach(k => {
			const stateValue = localStorage.getItem(k);
			if (stateValue != null) this[k] = stateValue;
		});
		/**
		 * Show a dashed line vertically on line graphs
		 */
		Chart.plugins.register({
			afterDatasetDraw: (chart, dataset) => {
				if (chart.tooltip._active && chart.tooltip._active.length && dataset.meta.type === 'line') {
					const activePoint = chart.tooltip._active[0];
					const { ctx } = chart;
					const yAxis = chart.scales['y-axis-0'];
					const { x } = activePoint.tooltipPosition();
					const topY = yAxis.top;
					const bottomY = yAxis.bottom; // activePoint.tooltipPosition().y;

					// Get current hue and darken it
					const currentHue = this.getCurrentHueColor();

					// draw line
					ctx.save();
					ctx.beginPath();
					ctx.setLineDash([3, 3]);
					ctx.moveTo(x, topY);
					ctx.lineTo(x, bottomY);
					ctx.lineWidth = 1;
					ctx.strokeStyle = `hsla(${currentHue}deg, 100%, 15%, 0.8)`;
					ctx.stroke();
					ctx.restore();
				}
			}
		});

		// Setup chart
		Chart.defaults.scale.gridLines.drawOnChartArea = false;
		this.chart = new Chart(this.$refs.chart, {
			type: 'bar',
			data: {
				labels: [],
				datasets: [
					{
						label: 'Count',
						backgroundColor: '#3e95cd',
						hoverBackgroundColor: 'blue'
					},
					{
						label: 'Count',
						fill: false,
						type: 'line',
						pointRadius: 0,
						pointHoverRadius: 6,
						pointHoverBackgroundColor: 'red',
						pointHoverBorderWidth: 0,
						hidden: true
					}
				]
			},
			options: {
				hover: {
					mode: 'index',
					intersect: false,
					animationDuration: 0
				},
				tooltips: {
					intersect: false,
					enabled: false,
					mode: 'index',
					/**
					 * Custom tooltip with div
					 */
					custom(tooltipModel) {
						// Tooltip Element
						const tooltipEl = document.querySelector('#chartjs-tooltip');
						const title = tooltipEl.querySelector('.title');
						const body = tooltipEl.querySelector('.count-total-number');

						// Hide/show  tooltip
						tooltipEl.style.opacity = tooltipModel.opacity;

						// Set Text
						if (tooltipModel.body) {
							const titleLines = tooltipModel.title || [];
							const bodyLines = tooltipModel.body.map(bodyItem => bodyItem.lines);
							title.innerHTML = titleLines[0];
							body.innerHTML = bodyLines[0];
						}

						tooltipEl.style.left = `${tooltipModel.caretX}px`;
					},
					callbacks: {
						label: tooltipItem => {
							let label = this.getDisplayedCasesType;

							if (label) {
								label += ': ';
							}
							label += tooltipItem.yLabel.toLocaleString('en-US');
							return label;
						}
					}
				},
				maintainAspectRatio: false,
				legend: { display: false },
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
								callback: value => this.format(value)
							}
						}
					],
					xAxes: [
						{
							type: 'time',
							offset: true
						}
					]
				}
			}
		});

		// check if the data for this location has been loaded already
		if ('WO' in this.getAllSeries) {
			this.update_location('WO');
			this.series_loading = false;
			return;
		}

		this.$store
			.dispatch('loadFromBackend', {
				endpoint: 'get-total-series',
				request_data: { iso: 'WO' },
				mutation_key: 'update_all_series'
			})
			.then(() => {
				this.series_loading = false;
				this.update_location('WO');
				this.updateChart();
			})
			.catch(() => {
				this.series_loading = false;
			});
	},
	methods: {
		...mapMutations(['update_location']),
		/**
		 * Format long numbers to display short numbers with B for billions,
		 * M for millions and K for thousands
		 */
		format(num) {
			const number = Math.abs(Number(num));
			let formattedNumber = number;
			// Nine Zeroes for Billions
			switch (true) {
				case number >= 1.0e9:
					formattedNumber = `${Math.round(number) / 1.0e9} B`;
					break;
				case number >= 1.0e6:
					formattedNumber = `${Math.round(number) / 1.0e6} M`;
					break;
				case number >= 1.0e3:
					formattedNumber = `${Math.round(number) / 1.0e3} K`;
					break;
				default:
					formattedNumber = number;
					break;
			}

			return formattedNumber;
		},
		getCurrentHueColor() {
			return getComputedStyle(document.documentElement).getPropertyValue('--current-hue');
		},
		/**
		 * Update chart to reflect changes. FromTo daily and weekly. FromTo bar and line,
		 * FromTo cumlative, change and log
		 */
		updateChart(enableAnimation = false) {
			const newType = this.series_type;
			const seriesData = this.getSeriesByCaseType;

			if (seriesData.length === 0) return;

			const data = [];
			const labels = [];
			let xAxes = {};
			const rep = this.series_representation;
			// if series type is set week, aggregate data
			if (newType === 'weekly') {
				let lastWeek = 0;
				let count = 0;
				seriesData.forEach(series => {
					const currentWeek = moment(series.date).week();
					count += rep === 'cumulative' ? parseInt(series.value) : parseInt(series.diff.value);
					if (lastWeek !== currentWeek) {
						labels.push(series.date);
						data.push(count);
						count = 0;
						lastWeek = currentWeek;
					}
				});

				xAxes = {
					barPercentage: 1.1,
					categoryPercentage: 1.2,
					time: {
						unit: 'week',
						unitStepSize: 5,
						displayFormats: { week: 'w - YYYY' }
					}
				};
			} else {
				seriesData.forEach(series => {
					data.push(rep === 'cumulative' ? series.value : series.diff.value);
					labels.push(series.date);
				});
				xAxes = {
					barPercentage: 0.8,
					categoryPercentage: 0.9,
					time: {
						unit: 'month',
						unitStepSize: 1,
						displayFormats: { month: 'MMM YYYY' }
					}
				};
			}

			// update x axes
			this.chart.options.scales.xAxes[0] = { ...this.chart.options.scales.xAxes[0], ...xAxes };

			// Show logarthmic or linear scale
			let yAxesType = 'linear';
			if (this.series_representation === 'log') yAxesType = 'logarithmic';
			this.chart.options.scales.yAxes[0].type = yAxesType;

			// update dataset
			this.chart.data.datasets.forEach((dataset, i) => {
				dataset.data = data;
				// updte color baased on series selected
				dataset.backgroundColor = `hsl(${this.getCurrentHueColor()}deg, 80%, 50%)`;
				dataset.borderColor = `hsl(${this.getCurrentHueColor()}deg, 80%, 50%)`;

				// Bar hover color
				dataset.hoverBackgroundColor = `hsl(${this.getCurrentHueColor()}deg, 100%, 10%)`;

				// line point (circle) background color and border color
				dataset.pointHoverBackgroundColor = `hsl(${this.getCurrentHueColor()}deg, 80%, 50%)`;
				dataset.pointHoverBorderColor = `hsl(${this.getCurrentHueColor()}deg, 80%, 50%)`;

				// Hide/show dataset based on chart type
				if (this.chart_type === 'bar') {
					dataset.hidden = i !== 0;
				} else {
					dataset.hidden = i !== 1;
				}
			});
			this.chart.data.labels = labels;
			if (!enableAnimation) this.chart.update(0);
			else this.chart.update();
		}
	},
	computed: {
		...mapGetters(['getSeriesByCaseType', 'getDisplayedCasesType', 'getAllSeries'])
	},
	watch: {
		chart_type(newType) {
			localStorage.setItem('chart_type', newType);
			this.updateChart(true);
		},
		series_type(newType) {
			localStorage.setItem('series_type', newType);
			this.updateChart();
		},
		series_representation(newRepresentation) {
			localStorage.setItem('series_representation', newRepresentation);
			this.updateChart(true);
		},
		getDisplayedCasesType() {
			// update chart
			this.updateChart(true);
		},
		getSeriesByCaseType() {
			this.updateChart(true);
		}
	}
});
new Vue({
	el: '#app',
	store,
	data: {
		show_countries_list: false,
		confirmed: 0,
		recovered: 0,
		deaths: 0,
		show_copyright: false,
		is_full_screen: false,
		copyright_data: {
			'Covid Data': 'https://github.com/CSSEGISandData/COVID-19',
			Flags: 'https://github.com/lipis/flag-icon-css',
			Map: 'https://github.com/markmarkoh/datamaps',
			FontAwesome: 'https://fontawesome.com/',
			'Chart.js': 'https://www.chartjs.org/',
			gsap: 'https://greensock.com/gsap/',
			'moment.js': 'https://momentjs.com/',
			'Subtle Patterns': 'https://www.toptal.com/designers/subtlepatterns/'
		}
	},
	methods: {
		...mapMutations({ changeCaseType: 'update_cases_type' }),
		enterFullScreen() {
			const element = document.querySelector('#app');
			const requestFullScreen =
				element.requestFullscreen ||
				element.webkitRequestFullScreen ||
				element.mozRequestFullScreen ||
				element.msRequestFullScreen;
			requestFullScreen.call(element);
		},
		exitFullScreen() {
			const cancellFullScreen =
				document.exitFullscreen ||
				document.mozCancelFullScreen ||
				document.webkitExitFullscreen ||
				document.msExitFullscreen;
			cancellFullScreen.call(document);
		}
	},
	computed: {
		...mapGetters([
			'getDayCasesTotalCount',
			'getDisplayedCasesType',
			'getCurrentLocation',
			'getCountriesList',
			'getNotifyDetails'
		]),
		recoveredCount() {
			return Number.isNaN(this.recovered) ? 'No Data' : this.recovered.toLocaleString('en-US');
		},
		deathsCount() {
			return this.deaths.toLocaleString('en-US');
		},
		confirmedCount() {
			return this.confirmed.toLocaleString('en-US');
		}
	},
	watch: {
		/**
		 * Animate count change on every update
		 */
		getDayCasesTotalCount(newTotals) {
			Object.keys(newTotals).forEach(caseType => {
				TweenLite.to(this.$data, 1, {
					[caseType]: newTotals[caseType],
					roundProps: caseType,
					ease: 'expo.out'
				});
			});
		},
		is_full_screen(newValue) {
			if (newValue === true) this.enterFullScreen();
			else this.exitFullScreen();
		}
	}
});