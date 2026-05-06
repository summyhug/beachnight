/**
 * Hero pairings: curated English lines (region + beach).
 * Each row is `region<TAB>countryHint<TAB>beach` — `countryHint` is resolved to ISO 3166-1 alpha-2
 * for IP-based ticker ordering (see `buildTickerPairingsOrder`).
 */
export type BeachPairing = {
  region: string;
  beach: string;
  line: string;
  countryCode: string;
};

export function lineForPair(p: BeachPairing): string {
  return p.line;
}

const pairingKey = (p: BeachPairing) => `${p.region}\0${p.beach}`;

function shuffleArray<T>(items: T[], rng: () => number): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Hero ticker order:
 * - First line: a beach in the visitor’s country (random among matches).
 * - Remaining lines: shuffled mix; ~30% of slots (when possible) are from the visitor’s country.
 * - Unknown / no match: fully shuffled global list.
 */
export function buildTickerPairingsOrder(
  pairings: BeachPairing[],
  country: string | null | undefined,
  rng: () => number = Math.random
): BeachPairing[] {
  const n = pairings.length;
  if (n <= 1) return [...pairings];

  const cc = country?.trim().toUpperCase() ?? "";
  const isRegional = (p: BeachPairing) =>
    Boolean(cc) && p.countryCode === cc && p.countryCode !== "ZZ";

  const regional = pairings.filter(isRegional);
  if (!cc || regional.length === 0) {
    return shuffleArray(pairings, rng);
  }

  const shuffledRegional = shuffleArray(regional, rng);
  const first = shuffledRegional[0];
  const firstKey = pairingKey(first);

  const regionalRest = shuffleArray(
    regional.filter((p) => pairingKey(p) !== firstKey),
    rng
  );
  const globalRest = shuffleArray(
    pairings.filter((p) => !isRegional(p) && pairingKey(p) !== firstKey),
    rng
  );

  const targetRegionalTotal = Math.min(
    regional.length,
    Math.max(1, Math.round(0.3 * n))
  );
  const wantRegionalInRest = Math.min(
    regionalRest.length,
    Math.max(0, targetRegionalTotal - 1)
  );

  const slots = n - 1;
  const preferRegional = shuffleArray(
    Array.from({ length: slots }, (_, i) => i < wantRegionalInRest),
    rng
  );

  const out: BeachPairing[] = [first];
  let r = 0;
  let g = 0;

  for (let i = 0; i < slots; i++) {
    const pickRegionalFirst = preferRegional[i];
    const tryRegional = () => {
      if (r < regionalRest.length) return regionalRest[r++];
      return null;
    };
    const tryGlobal = () => {
      if (g < globalRest.length) return globalRest[g++];
      return null;
    };

    const choice = pickRegionalFirst
      ? tryRegional() ?? tryGlobal()
      : tryGlobal() ?? tryRegional();
    if (choice) out.push(choice);
  }

  return out;
}

/** Free-text / alias → ISO 3166-1 alpha-2 (lowercase keys). */
function countryHintToCode(hint: string): string | null {
  const k = hint
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (!k) return null;
  if (/^[a-z]{2}$/.test(k)) return k.toUpperCase();

  const map: Record<string, string> = {
    denmark: "DK",
    uk: "GB",
    "united kingdom": "GB",
    ireland: "IE",
    norway: "NO",
    estonia: "EE",
    germany: "DE",
    france: "FR",
    spain: "ES",
    portugal: "PT",
    italy: "IT",
    malta: "MT",
    croatia: "HR",
    greece: "GR",
    greecee: "GR", // common typo
    turkey: "TR",
    tunisia: "TN",
    "cabo verde": "CV",
    "equatorial guinea": "GQ",
    "eq guinea": "GQ",
    "sao tome & principe": "ST",
    "sao tome and principe": "ST",
    brazil: "BR",
    venezuela: "VE",
    usa: "US",
    us: "US",
    "u.s.": "US",
    "u.s.a.": "US",
    mexico: "MX",
    honduras: "HN",
    colombia: "CO",
    ecuador: "EC",
    chile: "CL",
    "cook islands": "CK",
    fiji: "FJ",
    "french polynesia": "PF",
    kiribati: "KI",
    samoa: "WS",
    tonga: "TO",
    "south korea": "KR",
    "s korea": "KR",
    "s. korea": "KR",
    japan: "JP",
    china: "CN",
    india: "IN",
    vietnam: "VN",
    cambodia: "KH",
    thailand: "TH",
    malaysia: "MY",
    taiwan: "TW",
    hongkong: "HK",
    "hong kong": "HK",
    pakistan: "PK",
    ukraine: "UA",
    lebanon: "LB",
    israel: "IL",
    egypt: "EG",
    libya: "LY",
    lyibia: "LY", // typo
    algeria: "DZ",
    morocco: "MA",
    mauritania: "MR",
    mauretania: "MR", // typo
    senegal: "SN",
    "sierra leone": "SL",
    liberia: "LR",
    "ivory coast": "CI",
    "cote d'ivoire": "CI",
    "costa di marfil": "CI",
    ghana: "GH",
    togo: "TG",
    benin: "BJ",
    nigeria: "NG",
    gabon: "GA",
    angola: "AO",
    "south africa": "ZA",
    mozambique: "MZ",
    kenya: "KE",
    kenia: "KE", // typo
    somalia: "SO",
    oman: "OM",
    tanzania: "TZ",
    tansania: "TZ", // typo
    canada: "CA",
    australia: "AU",
    "new zealand": "NZ",
    nz: "NZ",
    indonesia: "ID",
    philippines: "PH",
    dominican: "DO",
    "dom rep": "DO",
    bahamas: "BS",
    cuba: "CU",
    "costa rica": "CR",
    panama: "PA",
    guatemala: "GT",
    "el salvador": "SV",
    nicaragua: "NI",
    peru: "PE",
    "papua new guinea": "PG",
    singapore: "SG",
    cyprus: "CY",
    "new brunswick": "CA",
    "nova scotia": "CA",
    "british columbia": "CA",
    "prince edward island": "CA",
    newfoundland: "CA",
    "washington state": "US",
    oregon: "US",
    california: "US",
    maine: "US",
    "new hampshire": "US",
    massachusetts: "US",
    "rhode island": "US",
    connecticut: "US",
    "new jersey": "US",
    delaware: "US",
    maryland: "US",
    virginia: "US",
    "north carolina": "US",
    "south carolina": "US",
    georgia: "US",
    alabama: "US",
    mississippi: "US",
    louisiana: "US",
    texas: "US",
    netherlands: "NL",
    poland: "PL",
    latvia: "LV",
    lithuania: "LT",
    sweden: "SE",
    finland: "FI",
    bosnia: "BA",
    albania: "AL",
    bulgaria: "BG",
    romania: "RO",
    bangladesh: "BD",
    argentina: "AR",
    uruguay: "UY",
    schleswigholstein: "DE", // no space key
    normandie: "FR",
    "cote d'azur": "FR",
    asturias: "ES",
    galicia: "ES",
    calabria: "IT",
    sicilia: "IT",
    sardinia: "IT",
    puglia: "IT",
    marche: "IT",
    "emilia-romagna": "IT",
    veneto: "IT",
    sinai: "EG",
    cornwall: "GB",
    northumberland: "GB",
    lincolnshire: "GB",
    dorset: "GB",
    highland: "GB",
    "county sligo": "IE",
    bengo: "AO",
    benguela: "AO",
    "western cape": "ZA",
    "inhambane province": "MZ",
    "nampula province": "MZ",
    "kwale county": "KE",
    "lamu county": "KE",
    puntland: "SO",
    somaliland: "SO",
    dhofar: "OM",
    goa: "IN",
    kerala: "IN",
    "west bengal": "IN",
    phetchaburi: "TH",
    krabi: "TH",
    guangxi: "CN",
    hebei: "CN",
    chungcheong: "KR",
    "hualien county": "TW",
    "yamagata prefecture": "JP",
    "wakayama prefecture": "JP",
    "kagawa prefecture": "JP",
    palawan: "PH",
    johor: "MY",
    pahang: "MY",
    "south sulawesi": "ID",
    bengkulu: "ID",
    queensland: "AU",
    tasmania: "AU",
    gisborne: "NZ",
    "hawke's bay": "NZ",
    taranaki: "NZ",
    marlborough: "NZ",
    tasman: "NZ",
    "west coast": "NZ",
    otago: "NZ",
    northland: "NZ",
    "bay of plenty": "NZ",
    nelson: "NZ",
    "baja california": "MX",
    sonora: "MX",
    sinaloa: "MX",
    nayarit: "MX",
    jalisco: "MX",
    colima: "MX",
    michoacan: "MX",
    michoacán: "MX",
    oaxaca: "MX",
    chiapas: "MX",
    "quintana roo": "MX",
    yucatan: "MX",
    yucatán: "MX",
    veracruz: "MX",
    camaguey: "CU",
    cienfuegos: "CU",
    "la guajira": "CO",
    "rio grande do sul": "BR",
    "santa catarina": "BR",
    "santa caterina": "BR", // typo
    parana: "BR",
    paraná: "BR",
    "estado de sao paulo": "BR",
    "estado de são paulo": "BR",
    bahia: "BR",
    maranhao: "BR",
    maranhão: "BR",
    aland: "FI",
    "aland islands": "FI",
    "åland": "FI",
    congo: "CG",
    "democratic republic of the congo": "CD",
    reunion: "RE",
    mayotte: "YT",
    martinique: "MQ",
  };
  return map[k] ?? null;
}

/**
 * When the sheet leaves country blank, infer ISO from the region (islands / territories).
 */
const COUNTRY_CODE_FALLBACK_BY_REGION: Record<string, string> = {
  Aruba: "AW",
  Bonaire: "BQ",
  "Curaçao": "CW",
  Barbados: "BB",
  Trinidad: "TT",
  Tobago: "TT",
  Grenada: "GD",
  "St. Lucia": "LC",
  Dominica: "DM",
  Antigua: "AG",
  Barbuda: "AG",
  Montserrat: "MS",
  "St Kitts": "KN",
  Nevis: "KN",
  "Turks and Caicos": "TC",
  Bermuda: "BM",
  Anguilla: "AI",
  "Cayman Islands": "KY",
  "British Virgin Islands": "VG",
  "US Virgin Islands": "VI",
  "Saint Martin": "MF",
  "Sint Maarten": "SX",
  "Saint Barthélemy": "BL",
  "Saint Vincent and the Grenadines": "VC",
  Nauru: "NR",
  Tuvalu: "TV",
  Vanuatu: "VU",
  "Solomon Islands": "SB",
  Pitcairn: "PN",
  Niue: "NU",
  "American Samoa": "AS",
  Guam: "GU",
  "Northern Mariana Islands": "MP",
  Mauritius: "MU",
  Comoros: "KM",
  Seychelles: "SC",
  Jersey: "JE",
  Guernsey: "GG",
  "Isle of Man": "IM",
  Greenland: "GL",
};

function resolveCountryCode(region: string, countryHint: string): string {
  const fromHint = countryHintToCode(countryHint);
  if (fromHint) return fromHint;
  return COUNTRY_CODE_FALLBACK_BY_REGION[region] ?? "ZZ";
}

/** `region<TAB>countryHint<TAB>beach` — countryHint may be empty if inferrable from region. */
const RAW_LIST = `
Faroe Islands	FO	Tjørnuvik Beach
Shetland	UK	St Ninian's Beach
Orkney	UK	Bay of Skaill
Isle of Wight	UK	Sandown Beach
Anglesey	UK	Llanddwyn Beach
Isle of Man	IM	Peel Beach
Lewis and Harris	UK	Luskentyre Beach
Isle of Skye	UK	Coral Beach
Achill Island	Ireland	Keem Beach
Aran Islands	Ireland	Kilmurvey Beach
Arranmore	Ireland	Leabgarrow Beach
Lofoten	Norway	Hauklandstranda
Bornholm	Denmark	Dueodde
Rømø	Denmark	Sønderstrand
Hiiumaa	Estonia	Luidja rand
Rügen	Germany	Binzer Strand
Sylt	Germany	Weststrand
Amrum	Germany	Kniepsand
Wangerooge	Germany	Hauptstrand
Norderney	Germany	Weiße Düne
Jersey	JE	St Ouen's Bay
Île d'Houat	France	Tréac'h Salus
Île de Noirmoutier	France	Plage des Dames
Île de Re	France	Conche des Baleines
Île d'Oléron	France	Plage de Vert Bois
Islas Cíes	Spain	Praia de Rodas
Lanzarote	Spain	Playa de Papagayo
Fuerteventura	Spain	Playa de Sotavento
Tenerife	Spain	Teresitas
Gran Canaria	Spain	Maspalomas
Gomera	Spain	Playa de Valle Gran Rey
Formentera	Spain	Ses Illetes
Açores	Portugal	Praia das Milicias
Île de Porquerolles	France	Plage Notre-Dame
Corsica	France	Plage de Palombaggia
Elba	Italy	Marina di Campo
Capri	Italy	Marina Grande
Salina	Italy	Spiaggia di Rinella
Favignana	Italy	Spiaggia di Lido Burrone
Lampedusa	Italy	Spiaggia dei Conigli
Gozo	Malta	Ramla Bay
Rab	Croatia	Rajska Plaža
Korcula	Croatia	Pupnatska Luka
Mljet	Croatia	Saplunara Beach
Lopud	Croatia	Šunj Beach
Corfu	Greece	Issos Beach
Lefkada	Greece	Porto Katsiki
Kefalonia	Greece	Myrtos Beach
Zakynthos	Greece	Navagio Beach
Elafonisos	Greece	Simos Beach
Andros	Greece	Batsi Beach
Ios	Greece	Mylopotas Beach
Naxos	Greece	Plaka Beach
Milos	Greece	Sarakiniko Beach
Santorini	Greece	Red Beach
Skiathos	Greece	Koukounaries Beach
Skopelos	Greece	Kastani Beach
Chios	Greece	Mavra Volia
Crete	Greece	Elafonisi Beach
Marmara Island	Turkey	Abroz Plajı
Djerba	Tunisia	Sidi Mahrez Beach
Sal (Cabo Verde)	Cabo Verde	Praia de Santa Maria
Boa Vista (Cabo Verde)	Cabo Verde	Praia Santa Mónica
Santiago (Cabo Verde)	Cabo Verde	Praia do Tarrafal
Bioko	Equatorial Guinea	Playa de Arena Blanca
Príncipe	Sao Tome & Principe	Praia das Bananas
Sao Tomé	Sao Tome & Principe	Praia das Sete Ondas
Saint Helena	SH	Sandy Bay Beach
Fernando de Noronha	Brazil	Praia do Sancho
Ilha de Itaparica	Brazil	Praia Ponta de Areia
Ilha Grande	Brazil	Praia de Lopes Mendes
Ilhabela	Brazil	Praia do Jabaquara
Ilha do Mel	Brazil	Praia do Farol
Aruba	AW	Eagle Beach
Curaçao	CW	Grote Knip
Bonaire	BQ	Te Amo Beach
Isla de Margarita	Venezuela	Playa El Agua
Trinidad	TT	Maracas Beach
Tobago	TT	Pigeon Point Beach
Barbados	BB	Carlisle Bay
Grenada	GD	Grand Anse Beach
St. Lucia	LC	Reduit Beach
Martinique	MQ	Plage des Salines
Dominica	DM	Mero Beach
Antigua	AG	Dickenson Bay
Barbuda	AG	Pink Sand Beach
Montserrat	MS	Rendezvous Beach
St Kitts	KN	Frigate Bay
Nevis	KN	Pinneys Beach
Puerto Rico	PR	Luquillo
Turks and Caicos	TC	Grace Bay Beach
Cozumel	Mexico	Playa Chen Rio
Roatán	Honduras	Playa Esmeralda
San Andrés	Colombia	Playa Spratt Bight
Providencia	Colombia	Playa Manzanillo
Long Island	US	Jones Beach
Bermuda	BM	Horseshoe Bay
Kodiak Island	US	White Sands Beach
Whidbey Island	US	Double Bluff Beach
Santa Rosa Island	US	Lobo Canyon
Islas Marietas	Mexico	Playa Escondida
Santa Cruz (Galápagos)	Ecuador	Bahía Tortuga
Española (Galápagos)	Ecuador	Bahía Gardner
Rapa Nui (Easter Island)	Chile	Anakena
Chiloé	Chile	Playa de Cucao
Rarotonga	Cook Islands	Muri Beach
Aitutaki	Cook Islands	Ootu Beach
Fiji	FJ	Natadola Beach
Tahiti	French Polynesia	Vaiava Beach
Bora Bora	French Polynesia	Matira Beach
Moorea	French Polynesia	Temae Beach
Tarawa	Kiribati	Betio Beach
Nauru	NR	Anibare Bay
Upolu	Samoa	Lalomanu Beach
Savai'i	Samoa	Manase Beach
Solomon Islands	SB	Mbonege Beach
Tonga	TO	Ha'atafu Beach
Maui	US	Ka'anapali Beach
Kauai	US	Hanalei Bay
Pitcairn	PN	St. Paul's Pool
Rakiura / Stewart Island	NZ	Mason Bay
Waiheke Island	NZ	Oneroa Beach
Mauritius	MU	Flic en Flac Beach
Comoros	KM	Chomoni Beach
Seychelles	SC	Beau Vallon Beach
Andaman Islands	India	Radhanagar Beach
Lakshadweep	India	Kavaratti Beach
Réunion	RE	Plage de l'Hermitage
Mayotte	YT	Plage de N'Gouja
Zanzibar	Tanzania	Shangani Beach
Langkawi	Malaysia	Pantai Cenang Beach
Phuket	Thailand	Nai Harn Beach
Koh Samui	Thailand	Chaweng Beach
Koh Phi Phi	Thailand	Maya Bay
Koh Phangan	Thailand	Zen Beach
Koh Tao	Thailand	Sairee Beach
Koh Lanta	Thailand	Khlong Dao Beach
Koh Lipe	Thailand	Sunrise Beach
Koh Chang	Thailand	White Sand Beach
Koh Samet	Thailand	Sai Kaew Beach
Phú Quốc	Vietnam	Bãi tắm Sao
Koh Rong	Cambodia	Sok San Beach
Côn Đảo	Vietnam	Bãi Đầm Trầu
Phú Quý	Vietnam	Triều Dương Bay
Cát Bà Island	Vietnam	Cat Co Beaches
Chàm Islands	Vietnam	Bãi Ong Beach
Hainan	China	Dadonghai Beach
Gulangyu Island	China	Gangzaihou Beach
Zhujiajian	China	Nansha Beach
Putuo Island	China	Thousand Step Beach
Weizhou Island	China	Shiluokou Beach
Lantau Island	HK	Cheung Sha Beach
Nan'ao Island	China	Qing'ao Bay
Hailing Island	China	Ten-Mile Silver Beach
Penghu	Taiwan	Aimen Beach
Green Island (Ludao)	Taiwan	Dabaisha Beach
Matsu Islands	Taiwan	Banli Beach
Jeju	South Korea	Hamdeok Beach
Ulleungdo	South Korea	Hakpo Beach
Geoje Island	South Korea	Hakdong Mongdol Beach
Miyajima	Japan	Tsutsumigaura Beach
Okinawa	Japan	Araha Beach
Yakushima	Japan	Isso Beach
Sado Island	Japan	Futatsugame Beach
Ishigaki	Japan	Kabira Bay
Naoshima	Japan	Gotanji Beach
Izu Oshima	Japan	Kobohama Beach
Ogasawara	Japan	Ohmura Beach
Goto Islands	Japan	Takahama Beach
Cebu	Philippines	Malapascua
Siargao	Philippines	Pacifico Beach
Bohol / Panglao	Philippines	Alona Beach
Coron	Philippines	Banul Beach
Bali	Indonesia	Kuta Beach
Lombok	Indonesia	Selong Belanak Beach
Gili Trawangan	Indonesia	Gili Trawangan Beach
Gili Air	Indonesia	South Beach
Gili Meno	Indonesia	Gili Meno Beach
Komodo Island	Indonesia	Pink Beach
Nusa Penida	Indonesia	Crystal Bay Beach
Pulau Sumba	Indonesia	Pantai Walakiri
Bangka Belitung Islands	Indonesia	Tanjung Tinggi Beach
Raja Ampat Islands	Indonesia	Friwen Beach
Kepulauan Seribu Islands	Indonesia	Pasir Perawan Beach
Cadiz	Spain	La Caleta
Barcelona	Spain	Barceloneta
Málaga	Spain	Malagueta
Valencia	Spain	Malvarrosa
Alicante	Spain	El Postiguet
Vigo	Spain	Samil
A Coruña	Spain	Riazor
Gijón	Spain	San Lorenzo
Santander	Spain	El Sardinero
Donostia-San Sebastián	Spain	La Concha
Porto	Portugal	Matosinhos
Lisbon	Portugal	Carcavelos
Marseille	France	Le Prado
Cannes	France	La Croisette
Nice	France	Promenade des Anglais
Biarritz	France	Grande Plage
Cagliari	Italy	Poetto
Palermo	Italy	Mondello
Copenhagen	Denmark	Amager Strand
Gdansk	Poland	Brzezno
Las Palmas	Spain	Las Canteras
Split	Croatia	Bacvice
Trieste	Italy	Barcola
Tallinn	Estonia	Pirita
Dublin	Ireland	Sandymount
Edinburgh	UK	Portobello Beach
Halifax	Canada	Lawrencetown
Boston	US	Revere Beach
New York City	US	Coney Island
Miami	US	South Beach
LA	US	Santa Monica
San Francisco	US	Ocean Beach
Vancouver	Canada	Kitsilano Beach
Puerto Vallarta	Mexico	Los Muertos
Acapulco	Mexico	La Condesa
Cancún	Mexico	Delfines
Havana	Cuba	Playas del Este
Nassau	Bahamas	Cable Beach
Santo Domingo	Dom Rep	Boca Chica
San Juan	Puerto Rico	Condado
Cartagena	Colombia	Bocagrande
Fortaleza	Brazil	Iracema
Natal	Brazil	Artistas
Recife	Brazil	Boa Viagem
Joao Pessoa	Brazil	Tambau
Maceio	Brazil	Pajucara
Aracajú	Brazil	Atalaia
Salvador	Brazil	Barra
Vitória	Brazil	Camburi
Rio	Brazil	Ipanema
Santos	Brazil	Gonzaga
Floripa	Brazil	Jurerê
Montevideo	Uruguay	Pocitos
Mar del Plata	Argentina	Bristol
Valparaíso	Chile	Caleta Portales
Busan	South Korea	Haeundae
Hong Kong	China	Repulse Bay
Qingdao	China	No.1 Bathing Beach
Xiamen	China	Hundao Road Beach
Shenzhen	China	Da Mei Sha
Sanya	China	Yalong Wan
Da Nang	Vietnam	My Khe
Singapore	Singapore	Siloso
Phuket	Thailand	Patong Beach
Nha Trang	Vietnam	Nha Trang Beach
Perth	Australia	Cottesloe
Melbourne	Australia	St. Kilda
Sydney	Australia	Bondi
Auckland	NZ	Mission Bay
Wellington	NZ	Oriental Bay
Chennai	India	Marina
Puducherry	India	Serenity Beach
Mangaluru	India	Panambur
Mumbai	India	Juhu
Karachi	Pakistan	Clifton Beach
Visakhapatnam	India	RK Beach
Kochi	India	Fort Kochi
Odesa	Ukraine	Arcadia
Antalya	Turkey	Konyaalti
Beirut	Lebanon	the Corniche
Haifa	Israel	Dado
Tel Aviv	Israel	Gordon Beach
Alexandria	Egypt	El Maamoura
Benghazi	Libya	Qaryounis
Tunis	Tunisia	La Marsa
Bizerte	Tunisia	Ras Angela
Algiers	Algeria	Sidi Fredj
Tangier	Morocco	La Plage
Rabat	Morocco	La Plage de Rabat
Casablanca	Morocco	Aïn Diab / La Corniche
Essaouira	Morocco	La Plage d'Essaouira
Agadir	Morocco	Plage Agadir
Nouakchott	Mauritania	La Plage de Nouakchott
Dakar	Senegal	N'Gor
St Louis (Senegal)	Senegal	Hydrobase
Freetown	Sierra Leone	Lumley
Monrovia	Liberia	Silver Beach
Abidjan	Ivory Coast	Assinie
Accra	Ghana	Lebadi
Lomé	Togo	La Plage
Cotonou	Benin	Fidjrossè
Lagos (Nigeria)	Nigeria	Elegushi Beach
Bata	Eq Guinea	La Playa de Bata
Libreville	Gabon	Pointe-Denis
Luanda	Angola	Ilha
Cape Town	South Africa	Camps Bay
Gqeberha	South Africa	King's Beach
Durban	South Africa	The Golden Mile
Maputo	Mozambique	Costa do Sol
Beira	Mozambique	Macuti
Dar Es Salaam	Tanzania	Coco Beach
Mombasa	Kenya	Nyali
Mogadishu	Somalia	Liido Beach
Taipei	Taiwan	Fulong Beach
Port Moresby	Papua New Guinea	Ela Beach
Tuvalu	TV	Funafuti Lagoon
Maldives	MV	North Malé Atoll
Kiribati	KI	Bairiki Beach
Marshall Islands	MH	Laura Beach
Denmark	DK	Grenen (Skagen)
Latvia	LV	Jūrmala
Lithuania	LT	Palanga Beach
Poland	PL	Sopot Beach
Netherlands	NL	Scheveningen
Croatia	HR	Zlatni Rat
Bosnia	BA	Neum Beaches
Albania	AL	Plazhi Ksamilit
Bulgaria	BG	Sunny Beach
Romania	RO	Mamaia Beach
Côte d'ivoire	CI	Assinie Beach
Congo	CG	Côte Sauvage
Bangladesh	BD	Cox's Bazar Beach
Philippines	PH	White Beach Boracay
Costa Rica	CR	Playa Manuel Antonio
Panama	PA	Isla Contadora Beaches
Argentina	AR	Mar del Plata
Uruguay	UY	Playa Brava - Punta del Este
Cuba	CU	Varadero
Portugal	PT	Nazaré Beach
Turkey	TR	Ölüdeniz Blue Lagoon
El Salvador	SV	Playa El Tunco
Nicaragua	NI	Playa San Juan del Sur
Chile	CL	Viña del Mar beaches
Peru	PE	Playa Mancora
Ecuador	EC	Playa Montañita
Nordland	NO	Hauklandstranda
Rogaland	NO	Solastranden
Agder	NO	Sjosanden
Halland	SE	Tylösand
Skåne	SE	Sandhammaren Beach
Öland	SE	Böda Beach
Gotland	SE	Tofta Strand
North Ostrobothnia	FI	Nallikari Beach
Satakunta	FI	Yyteri Beach
Aland	FI	Degersand
Ida-Viru	EE	Narva-Joesuu
Pärnu	EE	Pärnu Beach
Schleswig-Holstein	DE	St. Peter-Ording
Normandie	FR	Étretat
Cote d'Azur	FR	Pampelonne Beach
Asturias	ES	Playa de Rodiles
Galicia	ES	As Catedrais
Calabria	IT	Tropea beaches
Sicilia	IT	Scala dei Turchi
Sardinia	IT	Cala Goloritzé
Puglia	IT	Torre dell'Orso
Marche	IT	Due Sorelle Beach
Emilia-Romagna	IT	Rimini Beach
Veneto	IT	Lido di Jesolo
Paphos	CY	Coral Bay
Sinai	EG	Na'ama Bay
Cornwall	UK	Porthminster Beach
Northumberland	UK	Bamburgh Beach
Lincolnshire	UK	Skegness Beach
Dorset	UK	Durdle Door Beach
Highland	UK	Durness Beach
County Sligo	IE	Keem Beach
Bengo	AO	Cabo Ledo Beach
Benguela	AO	Baía Azul
Western Cape	ZA	Clifton Beaches
Inhambane Province	MZ	Praia do Tofo
Nampula Province	MZ	Ilha de Mocambique
Kwale County	KE	Diani Beach
Lamu County	KE	Shela Beach
Puntland	SO	Mareero Beach
Somaliland	SO	Berbera Beach
Dhofar	OM	Al Mughsail Beach
Goa	IN	Calangute
Kerala	IN	Kovalam Beach
West Bengal	IN	Digha Beach
Phetchaburi	TH	Cha-Am Beach
Krabi	TH	Railay Beach
Guangxi	CN	Silver Beach (Yintan)
Hebei	CN	Beidaihe Beach
Chungcheong	KR	Daecheon Beach
Hualien County	TW	Qixingtan Beach
Yamagata Prefecture	JP	Yunohama Beach
Wakayama Prefecture	JP	Shirahama Beach
Kagawa Prefecture	JP	Chichibugahama Beach
Palawan	PH	Nacpan Beach
Johor	MY	Desaru Beach
Pahang	MY	Teluk Cempedak
South Sulawesi	ID	Tanjung Bira Beach
Bengkulu	ID	Pantai Panjang
Queensland	AU	Whitehaven Beach
Tasmania	AU	Wineglass Bay Beach
Gisborne	NZ	Wainui Beach
Hawke's Bay	NZ	Ahuriri Beach
Taranaki	NZ	Back Beach
Marlborough	NZ	Whites Bay
Tasman	NZ	Kaiteriteri Beach
West Coast	NZ	Hokitika Beach
Christchurch	NZ	Sumner Beach
Otago	NZ	St. Clair Beach
Northland	NZ	Ninety Mile Beach
Bay of Plenty	NZ	Mount Maunganui Beach
Nelson	NZ	Tahunanui Beach
British Columbia	CA	Long Beach
New Brunswick	CA	Parlee Beach
Nova Scotia	CA	Martinique Beach
Prince Edward Island	CA	Cavendish Beach
Newfoundland	CA	Middle Cove
Washington State	US	Ruby Beach
Oregon	US	Cannon Beach
California	US	Malibu Beach
Maine	US	Old Orchard Beach
New Hampshire	US	Hampton Beach
Massachusetts	US	Revere Beach
Rhode Island	US	Narragansett Town Beach
Connecticut	US	Hammonasset Beach
New Jersey	US	Cape May Beach
Delaware	US	Rehoboth Beach
Maryland	US	Ocean City beach
Virginia	US	Assateague Island
North Carolina	US	Outer Banks
South Carolina	US	Myrtle Beach
Georgia	US	Tybee Island Beach
Alabama	US	Gulf Shores Beach
Mississippi	US	Biloxi Beach
Louisiana	US	Grand Isle Beach
Texas	US	South Padre Island Beach
Baja California	MX	Playa Balandra
Sonora	MX	San Carlos beaches
Sinaloa	MX	Mazatlán Beach
Nayarit	MX	Playa Sayulita
Jalisco	MX	Playa de los Muertos
Colima	MX	Manzanillo Beach
Michoacán	MX	La Ticla Beach
Oaxaca	MX	Zicatela Beach
Chiapas	MX	Boca del Cielo
Quintana Roo	MX	Playa Paraiso
Yucatán	MX	Playa Progreso
Veracruz	MX	Playa Macombo
Camaguey	CU	Playa Santa Lucía
Cienfuegos	CU	Playa de Rancho Luna
La Guajira	CO	Cabo de la Vela beaches
Rio Grande do Sul	BR	Praia do Cassino
Santa Catarina	BR	Praia do Rosa
Paraná	BR	Ilha do Mel beaches
Estado de São Paulo	BR	Maresias Beach
Bahia	BR	Praia do Espelho
Maranhão	BR	Atins Beach
`.trim();

function toPairing(region: string, beach: string, countryHint: string): BeachPairing {
  const countryCode = resolveCountryCode(region, countryHint);
  return {
    region,
    beach,
    countryCode,
    line: `No ${region} without ${beach}.`,
  };
}

export const beachPairings: BeachPairing[] = RAW_LIST.split("\n")
  .map((row) => row.trim())
  .filter(Boolean)
  .map((row) => {
    const parts = row.split("\t").map((s) => s.trim());
    if (parts.length < 3) {
      throw new Error(`beachPairings: expected region<TAB>country<TAB>beach, got: ${JSON.stringify(row)}`);
    }
    const [region, countryHint, beach] = parts;
    return toPairing(region, beach, countryHint);
  });
