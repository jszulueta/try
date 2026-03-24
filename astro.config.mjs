// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://MOCKIE26.github.io',
    base: process.env.VERCEL ? '/' : '/rcdok-website-new',

	integrations: [
		starlight({
			title: 'Diocese of Kalookan',
			sidebar: [
				{
					label: 'Home',
					link: "/",
				},
				{
					label: 'Community',
					autogenerate: { directory: 'community' },
				},
				{
					label: 'Faith',
					autogenerate: { directory: 'faith' },
				},
				{
					label: 'Parishes',
					items: [
						{ 
							label: 'Vicariate of Our Lady of Grace',
							collapsed: true, 
							items: [
								{ label: 'Diocesan Shrine of Our Lady of Grace', slug: 'parishes/vicar-grace/diocesan-shrine-of-our-lady-of-grace' },
								{ label: 'Sagrada Familia Parish', slug: 'parishes/vicar-grace/sagrada-familia-parish' },
								{ label: 'San Jose Parish – Agudo', slug: 'parishes/vicar-grace/san-jose-parish-agudo' },
								{ label: 'San Pancracio Parish', slug: 'parishes/vicar-grace/san-pancracio-parish' },
								{ label: 'Hearts of Jesus and Mary Parish', slug: 'parishes/vicar-grace/hearts-of-jesus-and-mary-parish' },
							],
						 },
						{ 
							label: 'Vicariate of Sacred Heart of Jesus', 
							collapsed: true, 
							items: [
								{ label: 'Sacred Heart of Jesus Parish – MBS', slug: 'parishes/vicar-heart/sacred-heart-of-jesus-parish-mbs' },
								{ label: 'Birhen Ng Lourdes Parish', slug: 'parishes/vicar-heart/birhen-ng-lourdes-parish' },
								{ label: 'St. Gabriel the Archangel Parish', slug: 'parishes/vicar-heart/st-gabriel-the-archangel-parish' },
								{ label: 'Sta. Quiteria & St. Francis of Assisi Parish', slug: 'parishes/vicar-heart/sta-quiteria-and-st-francis-of-assisi-parish' },
								{ label: 'Sts. Peter And John Parish', slug: 'parishes/vicar-heart/sts-peter-and-john-parish' },
								{ label: 'Our Lady of Lujan Parish', slug: 'parishes/vicar-heart/our-lady-of-lujan-parish' },												
							],
						},
						{ 
							label: 'Vicariate of San Bartolome', 
							collapsed: true, 
							items: [
								{ label: 'San Bartolome Parish', slug: 'parishes/vicar-bartolome/san-bartolome-parish' },
								{ label: 'Exaltation of the Holy Cross Parish', slug: 'parishes/vicar-bartolome/exaltation-of-the-holy-cross-parish' },
								{ label: 'Diocesan Shrine and Parish of Immaculate Conception', slug: 'parishes/vicar-bartolome/diocesan-shrine-and-parish-of-immaculate-conception' },
								{ label: 'San Antonio de Padua Parish', slug: 'parishes/vicar-bartolome/san-antonio-de-padua-parish' },
								{ label: 'Santa Cruz Parish', slug: 'parishes/vicar-bartolome/santa-cruz-parish' },
								{ label: 'Santo Rosario Parish', slug: 'parishes/vicar-bartolome/santo-rosario-parish' },												
							],
						},
						{ 
							label: 'Vicariate of San Jose De Navotas',
							collapsed: true, 
							items: [
								{ label: 'San Ildefonso Parish', slug: 'parishes/vicar-jose/san-ildefonso-parish' },
								{ label: 'San Exequiel Moreno Parish', slug: 'parishes/vicar-jose/san-exequiel-moreno-parish' },
								{ label: 'San Roque De Navotas Parish', slug: 'parishes/vicar-jose/san-roque-de-navotas-parish' },
								{ label: 'Diocesan Shrine & Parish of San Jose de Navotas', slug: 'parishes/vicar-jose/diocesan-shrine-and-parish-of-san-jose-de-navotas' },
								{ label: 'Sta. Clare of Assisi Parish', slug: 'parishes/vicar-jose/sta-clare-of-assisi-parish' },
								{ label: 'San Lorenzo Ruiz and Companion Martyrs Parish', slug: 'parishes/vicar-jose/san-lorenzo-ruiz-and-companion-martyrs-parish' },												
								{ label: 'Sto. Niño De Pasion Parish', slug: 'parishes/vicar-jose/sto-niño-de-pasion-parish' },										
								{ label: 'Nuestra Señora De Los Remedios – Quasi Parish', slug: 'parishes/vicar-jose/nuestra-señora-de-los-remedios-quasi-parish' },										
							],

						},
						{ 
							label: 'Vicariate of San Roque',
							collapsed: true, 
							items: [
								{ label: 'Immaculate Heart of Mary Parish', slug: 'parishes/vicar-roque/immaculate-heart-of-mary-parish' },
								{ label: 'Mary Help of Christians Parish', slug: 'parishes/vicar-roque/mary-help-of-christians-parish' },
								{ label: 'Sacred Heart of Jesus Parish', slug: 'parishes/vicar-roque/sacred-heart-of-jesus-parish' },
								{ label: 'St. Joseph the Workman Parish', slug: 'parishes/vicar-roque/st-joseph-the-workman-parish' },
								{ label: 'San Roque Cathedral Parish', slug: 'parishes/vicar-roque/san-roque-cathedral-parish' },
								{ label: 'Holy Trinity Quasi Parish', slug: 'parishes/vicar-roque/holy-trinity-quasi-parish' },												
							],

						},
					],
				},
				{
					label: 'Member Schools',
					autogenerate: { directory: 'member school' },
				},
				{
					label: 'Clergy',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Diocesan', slug: 'clergy/diocesan' },
						{ label: 'Religious', slug: 'clergy/religious' }
					],
				},
				{
					label: 'Ministries',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Missions',
					items: [
						{ 
							label: 'Mission Stations',
							collapsed: true, 
							items: [
								{ label: 'Birhen ng Fatima Mission Station', slug: 'missions/stations/birhen-ng-fatima' },
								{ label: 'Holy Cross - Catmon Mission Station', slug: 'missions/stations/holy-cross-catmon' },
								{ label: 'Our Lady of Fatima - Julian Felipe Mission Station', slug: 'missions/stations/our-lady-of-fatima-julian-felipe' },
								{ label: 'Mother of Perpetual Help - Karisma Mission Station', slug: 'missions/stations/mother-of-perpetual-help-karisma' },
								{ label: 'Our Lady of Peace - Letre Mission Station', slug: 'missions/stations/our-lady-of-peace-letre' },
								{ label: 'Tanza Pabahay Mission Station', slug: 'missions/stations/tanza-pabahay' },												
								{ label: 'Chapel of Our Lady of the Most Holy Rosary', slug: 'missions/stations/chapel-of-our-lady-of-the-most-holy-rosary' },
								{ label: 'Our Lady of the Sacred Heart Mission Station', slug: 'missions/stations/our-lady-of-the-sacred-heart' },
								{ label: 'Sacred Heart Kaunlaran Mission Station', slug: 'missions/stations/sacred-heart-kaunlaran' },
								{ label: 'Sagrada Familia Pamasawata Mission Station', slug: 'missions/stations/sagrada-familia-pamasawata' },
								{ label: 'St. Jude Thaddeus Mission Station', slug: 'missions/stations/st-jude-thaddeus' },
								{ label: 'Sta. Martha Mission Station', slug: 'missions/stations/sta-martha' },
								{ label: 'San Andres Mangingisda Mission Station', slug: 'missions/stations/san-andres-mangingisda' },
								{ label: 'Nuestro Señor de Longos Mission Station', slug: 'missions/stations/nuestro-señor-de-longos' },
								{ label: 'San Juan Bautista Mission Station', slug: 'missions/stations/san-juan-bautista' },
								{ label: 'San Vicente Ferrer Mission Station', slug: 'missions/stations/san-vicente-ferrer' },
								{ label: 'Señor Sta. Cruz Mission Station - Santulan', slug: 'missions/stations/señor-sta-cruz-santulan' },
								{ label: 'Sto. Niño Potrero Chapel Mission Station', slug: 'missions/stations/sto-niño-potrero' },
								{ label: 'San Vicente Ferrer Mission Station', slug: 'missions/stations/two-hearts-of-jesus-and-mary' },
								
							],

						},
						{ label: 'Mission Centers', slug: 'missions/centers' },
						{ label: 'Mission Programs', slug: 'missions/programs' },
						{ label: 'Mission Headquarters', slug: 'missions/headquarters' },
					],
				},
				{
					label: 'Cemeteries, Columbaries & Ossuaries',
					items: [
						{ label: 'Cemeteries', slug: 'cemeteries-columbaries-ossuaries/cemeteries' },
						{ label: 'Columbaries', slug: 'cemeteries-columbaries-ossuaries/columbaries' },
					],
				},
				{
					label: 'Events',
					autogenerate: { directory: 'events' },
				},
				{
					label: 'News',
					autogenerate: { directory: 'news' },
				},
				{
					label: 'About Us',
					collapsed: true,
					items: [
						{ label: 'Our History', slug: 'about-us/history' },
						{ label: 'Our Bishop', slug: 'about-us/our-bishop' },
						{ label: 'Coat of Arms', slug: 'about-us/about' }
					],
				},
				{
					label: 'Contact',
					autogenerate: { directory: 'contact' },
				},
			],
			components: {
        		PageTitle: './src/components/NewsPage.astro',
     		},
		}),
	],
});
