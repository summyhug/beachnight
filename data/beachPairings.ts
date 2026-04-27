/**
 * Hero pairings: curated English lines (region + beach).
 * `countryCode` is ISO 3166-1 alpha-2 for IP-based “your country first” ordering.
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

/** Put pairings matching the visitor’s country first; stable order within each group. */
export function orderPairingsForViewer(
  pairings: BeachPairing[],
  country: string | null | undefined
): BeachPairing[] {
  if (!country) return [...pairings];
  const cc = country.toUpperCase();
  const match = pairings.filter((p) => p.countryCode === cc);
  const rest = pairings.filter((p) => p.countryCode !== cc);
  return [...match, ...rest];
}

const RAW_LIST = `
Faroe Islands	Tjornuvik Beach
Shetland Islands	St Ninian's Ayre
Orkney Islands	Scapa Beach
Isle of Wight	Alum Bay
Anglesey	Llanddwyn Beach
Isle of Man	Peel Beach
Lewis and Harris	Luskentyre Beach
Isle of Skye	Coral Beach
Achill Island	Keem Bay
Aran Islands	Kilmurvey Beach
Arranmore	Leabgarrow Beach
Blasket Islands	Trá Bán (White Beach)
Lofoten	Haukland Beach
Bornholm	Dueodde Beach
Rømø	Sønderstrand
Hiiumaa	Luidja Beach
Rügen	Binz Beach
Sylt	Weststrand
Amrum	Kniepsand
Wangerooge	Hauptstrand
Langeoog	Hauptstrand
Norderney	Weiße Düne
Jersey	St. Ouen's Bay
Île d'Houat	Grande Plage
Île de Noirmoutier	Plage des Dames
Île de Ré	Conche des Baleines
Île d'Oléron	Plage de Vert Bois
Islas Cíes	Playa de Rodas
Lanzarote	Playa Papagayo
Fuerteventura	Playa de Sotavento
Tenerife	Las Teresitas
Gran Canaria	Maspalomas
La Gomera	Playa de Valle Gran Rey
Formentera	Ses Illetes
Açores	Poços de Capela
Île de Porquerolles	Plage Notre-Dame
Corsica/Corse	Plage de Palombaggia
Elba	Fetovaia
Capri	Marina Grande
Salina	Spiaggia di Rinella
Favignana	Cala Rossa
Lampedusa	Spiaggia dei Conigli
Gozo	Ramla Bay
Rab	Rajska Plaza
Korčula	Pupnatska Luka
Mljet	Saplunara Beach
Lopud	Šunj Beach
Corfu	Paleokastritsa Beach
Lefkada	Porto Katsiki
Kefalonia	Myrtos Beach
Zakynthos	Navagio Beach
Elafonisos	Simos Beach
Andros	Batsi Beach
Ios	Mylopotas Beach
Naxos	Plaka Beach
Milos	Sarakiniko Beach
Santorini	Red Beach
Skiathos	Lalaria Beach
Skopelos	Kastani Beach
Chios	Mavra Volia
Crete	Elafonisi Beach
Djerba	Sidi Mahrez Beach
Sal	Praia de Santa Maria
Boa Vista	Praia Santa Mónica
Santiago Island	Praia do Tarrafal
Bioko	Playa de Arena Blanca
Príncipe	Praia Banana
São Tomé	Praia das Sete Ondas
Tristan da Cunha	Runaway Beach
Saint Helena	Sandy Bay Beach
Fernando de Noronha	Praia do Sancho
Ilha de Itaparica	Praia de Ponta de Areia
Ilha Grande	Praia de Lopes Mendes
Ilhabela	Praia do Jabaquara
Ilha do Mel	Praia do Farol
Aruba	Eagle Beach
Curaçao	Grote Knip
Bonaire	Te Amo Beach
Isla de Margarita	Playa El Agua
Trinidad	Maracas Beach
Tobago	Pigeon Point Beach
Barbados	Carlisle Bay
Grenada	Grand Anse Beach
St. Lucia	Reduit Beach
Martinique	Plage des Salines
Dominica	Mero Beach
Antigua	Dickenson Bay
Barbuda	Pink Sand Beach
Montserrat	Rendezvous Beach
St Kitts	Frigate Bay
Nevis	Pinney's Beach
Puerto Rico	Isla Verde Beach
Bahamas	Cable Beach
Turks and Caicos	Grace Bay Beach
Cozumel	Playa Palancar
Roatán	West Bay Beach
Providencia	Bahía Suroeste
Long Island	Long Beach
Bermuda	Horseshoe Bay Beach
Santa Cruz (Galápagos)	Tortuga Bay
Española (Galápagos)	Gardner Bay
Easter Island / Rapa Nui	Anakena Beach
Chiloé	Cole-Cole
Gorgona	Playa Palmeras
Rarotonga	Muri Beach
Aitutaki	O'otu Beach
Fiji	Natadola Beach
Tahiti	Vaiava Beach
Bora Bora	Matira Beach
Moorea	Temae Beach
Huahine	Avea Beach
Tarawa	Betio Beach
Kiritimati	Long Beach
Marshall Islands	Laura Beach
Nauru	Anibare Bay
Upolu	Lalomanu Beach
Savai'i	Manase Beach
Tonga	Ha'atafu Beach
Tuvalu	Funafuti Lagoon
Maui	Ka'anapali Beach
Kauai	Hanalei Bay
Pitcairn	St. Paul's Pool
Rakiura	Bathing Beach
Waiheke Island	Oneroa Beach
Mauritius	Flic en Flac Beach
Comoros	Chomoni Beach
Seychelles	Beau Vallon
Malé	Artificial Beach
Maldives	SEE SINKING STATES
Andaman Islands	Corbyn's Cove
Lakshadweep	Kavaratti Beach
Réunion	L'Ermitage Beach
Mayotte	Plage de N'Gouja
Zanzibar	Shangani Beach
Langkawi	Pantai Cenang Beach
Phuket	Nai Harn Beach
Koh Samui	Chaweng Beach
Koh Phi Phi	Maya Bay Beach
Koh Phangan	Zen Beach
Koh Tao	Sairee Beach
Koh Lanta	Klong Dao Beach
Koh Lipe	Sunrise Beach (Hat Chao Ley)
Koh Chang	White Sand Beach
Koh Samet	Sai Kaew Beach
Phu Quoc	Bai Sao Beach
Koh Rong	Sok San Beach
Con Dao	Dam Trau Beach
Phu Quy	Triều Dương Bay
Cat Ba Island	Cat Co Beaches
Cham Islands	Bai Ong Beach
Hainan	Dadonghai Beach
Gulangyu Island	Gangzaihou Beach
Zhujiajian	Nansha Beach
Putuo Island	Thousand Step Beach
Weizhou Island	Shiluokou Beach
Lantau Island	Cheung Sha Beach
Jeju	Hamdeok Beach
Ulleungdo	Hakpo Beach
Geoje Island	Hakdong Mongdol Beach
Miyajima	Mikasahama
Okinawa	Araha Beach
Yakushima	Isso Beach
Sado Island	Futatsugame Beach
Ishigaki	Kabira Bay
Naoshima	Gotanji Beach
Izu Oshima	Kobohama Beach
Ogasawara	Ohmura Beach
Enoshima	Katase Higashihama Beach
Goto Islands	Takahama Beach
Cebu	Basdako White Beach
Siargao	Cloud 9
Bohol	Alona Beach
Coron	Banul Beach
Bali	Kuta Beach
Lombok	Selong Belanak Beach
Gili T	Gili Trawangan Beach
Gili Air	South Beach
Gili Meno	Main Village Beach
Komodo Island	Pink Beach
Nusa Penida	Crystal Bay Beach
Sumba	Walakiri Beach
Bangka Belitung Islands	Tanjung Tinggi Beach
Raja Ampat	Friwen Beach
Kepulauan Seribu	Pasir Perawan Beach
Cadiz	La Caleta
Barcelona	Barceloneta
Malaga	Malagueta
Valencia	Malvarrosa
Alicante	El Postiguet
Vigo	Samil
A Coruna	Riazor
Gijon	San Lorenzo
Santander	El Sardinero
Donostia	La Concha
Porto	Matosinhos
Lisbon	Carcavelos
Marseille	Le Prado
Cannes	La Croisette
Nice	Promenade des Anglais
Biarritz	Grande Plage
Cagliari	Poetto
Palermo	Mondello
Copenhagen	Amager Strand
Gdansk	Brzezno
Las Palmas	Las Canteras
Split	Bacvice
Trieste	Barcola
Tallinn	Pirita
Dublin	Sandymount
Edinburgh	Portobello Beach
Halifax	Crystal Crescent
Boston	Carson
NY	Coney Island
Miami	South Beach
LA	Santa Monica
San Francisco	Ocean Beach
Vancouver	Kitsilano Beach
Rio	Ipanema
Busan	Haeundae
Hong Kong	Repulse Bay
Da Nang	My Khe
Singapore	Siloso
Sydney	Bondi
Auckland	Mission Bay
Wellington	Oriental Bay
Chennai	Marina
Mumbai	Juhu
Odesa	Arcadia
Antalya	Konyaalti
Tel Aviv	Gordon Beach
Alexandria	El Maamoura
Dakar	N'Gor
Lagos	Elegushi
Cape Town	Camps Bay
Durban	The Golden Mile
Dar Es Salaam	Coco Beach
Mombasa	Nyali
Taipei	Fulong Beach
Port Moresby	Ela Beach
Tuvalu	Tuvalu Coastal Beaches
Maldives	Maldives Atolls
Kiribati	Kiribati Coastal Beaches
Marshall Islands	Marshall Islands Lagoons
Denmark	Grenen at Skagen
Latvia	Jurmala
Lithuania	Palanga Beach
Poland	Sopot Beach
Netherlands	Scheveningen
Croatia	Zlatni Rat
Bosnia	Neum Beach
Albania	Ksamil Beach
Bulgaria	Sunny Beach
Romania	Mamaia Beach
Bangladesh	Cox's Bazar Beach
Philippines	White Beach (Boracay)
Costa Rica	Manuel Antonio
Panama	Playa Coronado
Colombia	Playa Blanca
Argentina	Mar del Plata
Uruguay	Playa Brava (Punta del Este)
Cuba	Varadero
Portugal	Nazaré Beach
Turkey	Ölüdeniz Blue Lagoon
Guatemala	Playa Blanca
El Salvador	Playa El Tunco
Nicaragua	Playa San Juan del Sur
Chile	Viña del Mar Beaches
Peru	Playa Máncora
Ecuador	Montañita Beach
Goa	Calangute
Kerala	Kovalam Beach
West Bengal	Digha Beach
Krabi	Railay Beach
Queensland	Whitehaven Beach
Tasmania	Wineglass Bay Beach
British Columbia	Long Beach (Vancouver Island)
Washington State	Ruby Beach
Oregon	Cannon Beach
California	Malibu Beach
Maine	Old Orchard Beach
Massachusetts	Revere Beach
Rhode Island	Narragansett Town Beach
Connecticut	Hammonasset Beach
New Jersey	Cape May Beach
Delaware	Rehoboth Beach
Maryland	Ocean City Beach
Virginia	Virginia Beach
North Carolina	Outer Banks
South Carolina	Myrtle Beach
Georgia	Tybee Island Beach
Alabama	Gulf Shores Beach
Mississippi	Biloxi Beach
Louisiana	Grand Isle Beach
Texas	South Padre Island Beach
Baja California	Playa Balandra
Sinaloa	Mazatlán Beach
Jalisco	Playa de los Muertos
Oaxaca	Zicatela Beach
Quintana Roo	Playa Paraíso
Rio Grande do Sul	Praia do Cassino
Santa Catarina	Praia do Rosa
São Paulo state	Maresias Beach
Bahia	Praia do Espelho
Maranhão	Atins Beach
`.trim();

const COUNTRY_CODE_BY_REGION: Record<string, string> = {
  "Faroe Islands": "FO",
  "Shetland Islands": "GB",
  "Orkney Islands": "GB",
  "Isle of Wight": "GB",
  Anglesey: "GB",
  "Isle of Man": "IM",
  "Lewis and Harris": "GB",
  "Isle of Skye": "GB",
  "Achill Island": "IE",
  "Aran Islands": "IE",
  Arranmore: "IE",
  "Blasket Islands": "IE",
  Lofoten: "NO",
  Bornholm: "DK",
  "Rømø": "DK",
  Hiiumaa: "EE",
  "Rügen": "DE",
  Sylt: "DE",
  Amrum: "DE",
  Jersey: "JE",
  Lanzarote: "ES",
  Fuerteventura: "ES",
  Tenerife: "ES",
  "Gran Canaria": "ES",
  "La Gomera": "ES",
  Formentera: "ES",
  "Corsica/Corse": "FR",
  Elba: "IT",
  Capri: "IT",
  Salina: "IT",
  Favignana: "IT",
  Lampedusa: "IT",
  Gozo: "MT",
  Rab: "HR",
  "Korčula": "HR",
  Mljet: "HR",
  Lopud: "HR",
  Corfu: "GR",
  Lefkada: "GR",
  Kefalonia: "GR",
  Zakynthos: "GR",
  Elafonisos: "GR",
  Andros: "GR",
  Ios: "GR",
  Naxos: "GR",
  Milos: "GR",
  Santorini: "GR",
  Skiathos: "GR",
  Skopelos: "GR",
  Chios: "GR",
  Crete: "GR",
  Djerba: "TN",
  Sal: "CV",
  "Boa Vista": "CV",
  "Santiago Island": "CV",
  Bioko: "GQ",
  "São Tomé": "ST",
  "Saint Helena": "SH",
  "Fernando de Noronha": "BR",
  Aruba: "AW",
  "Curaçao": "CW",
  Bonaire: "BQ",
  Trinidad: "TT",
  Tobago: "TT",
  Barbados: "BB",
  Grenada: "GD",
  "St. Lucia": "LC",
  Martinique: "MQ",
  Dominica: "DM",
  Antigua: "AG",
  Barbuda: "AG",
  Montserrat: "MS",
  "St Kitts": "KN",
  Nevis: "KN",
  "Puerto Rico": "PR",
  Bahamas: "BS",
  Bermuda: "BM",
  Fiji: "FJ",
  Tahiti: "PF",
  "Bora Bora": "PF",
  Moorea: "PF",
  Huahine: "PF",
  Tarawa: "KI",
  Kiritimati: "KI",
  Tuvalu: "TV",
  Mauritius: "MU",
  Comoros: "KM",
  Seychelles: "SC",
  Maldives: "MV",
  "Andaman Islands": "IN",
  Lakshadweep: "IN",
  "Réunion": "RE",
  Mayotte: "YT",
  Zanzibar: "TZ",
  Langkawi: "MY",
  Phuket: "TH",
  "Koh Samui": "TH",
  "Koh Phi Phi": "TH",
  "Koh Phangan": "TH",
  "Koh Tao": "TH",
  "Koh Lanta": "TH",
  "Koh Lipe": "TH",
  "Koh Chang": "TH",
  "Koh Samet": "TH",
  "Phu Quoc": "VN",
  "Koh Rong": "KH",
  "Con Dao": "VN",
  "Phu Quy": "VN",
  Hainan: "CN",
  Jeju: "KR",
  Ulleungdo: "KR",
  Okinawa: "JP",
  Cebu: "PH",
  Siargao: "PH",
  Bohol: "PH",
  Coron: "PH",
  Bali: "ID",
  Lombok: "ID",
  "Nusa Penida": "ID",
  Sumba: "ID",
  "Raja Ampat": "ID",
  Cadiz: "ES",
  Barcelona: "ES",
  Malaga: "ES",
  Valencia: "ES",
  Alicante: "ES",
  Vigo: "ES",
  Porto: "PT",
  Lisbon: "PT",
  Marseille: "FR",
  Cannes: "FR",
  Nice: "FR",
  Biarritz: "FR",
  Cagliari: "IT",
  Palermo: "IT",
  Copenhagen: "DK",
  Gdansk: "PL",
  Split: "HR",
  Trieste: "IT",
  Tallinn: "EE",
  Dublin: "IE",
  Edinburgh: "GB",
  Halifax: "CA",
  Boston: "US",
  NY: "US",
  Miami: "US",
  LA: "US",
  "San Francisco": "US",
  Vancouver: "CA",
  Rio: "BR",
  Busan: "KR",
  "Hong Kong": "HK",
  "Da Nang": "VN",
  Singapore: "SG",
  Sydney: "AU",
  Auckland: "NZ",
  Wellington: "NZ",
  Chennai: "IN",
  Mumbai: "IN",
  Odesa: "UA",
  Antalya: "TR",
  "Tel Aviv": "IL",
  Alexandria: "EG",
  Dakar: "SN",
  Lagos: "NG",
  "Cape Town": "ZA",
  Durban: "ZA",
  "Dar Es Salaam": "TZ",
  Mombasa: "KE",
  Taipei: "TW",
  "Port Moresby": "PG",
  Denmark: "DK",
  Latvia: "LV",
  Lithuania: "LT",
  Poland: "PL",
  Netherlands: "NL",
  Croatia: "HR",
  Bosnia: "BA",
  Albania: "AL",
  Bulgaria: "BG",
  Romania: "RO",
  Bangladesh: "BD",
  Philippines: "PH",
  "Costa Rica": "CR",
  Panama: "PA",
  Colombia: "CO",
  Argentina: "AR",
  Uruguay: "UY",
  Cuba: "CU",
  Portugal: "PT",
  Turkey: "TR",
  Guatemala: "GT",
  "El Salvador": "SV",
  Nicaragua: "NI",
  Chile: "CL",
  Peru: "PE",
  Ecuador: "EC",
  Goa: "IN",
  Kerala: "IN",
  Queensland: "AU",
  Tasmania: "AU",
  "British Columbia": "CA",
  "Washington State": "US",
  Oregon: "US",
  California: "US",
  Maine: "US",
  Massachusetts: "US",
  "Rhode Island": "US",
  Connecticut: "US",
  "New Jersey": "US",
  Delaware: "US",
  Maryland: "US",
  Virginia: "US",
  "North Carolina": "US",
  "South Carolina": "US",
  Georgia: "US",
  Alabama: "US",
  Mississippi: "US",
  Louisiana: "US",
  Texas: "US",
  "Baja California": "MX",
  Sinaloa: "MX",
  Jalisco: "MX",
  Oaxaca: "MX",
  "Quintana Roo": "MX",
  "Rio Grande do Sul": "BR",
  "Santa Catarina": "BR",
  "São Paulo state": "BR",
  Bahia: "BR",
  "Maranhão": "BR",
};

function toPairing(region: string, beach: string): BeachPairing {
  const countryCode = COUNTRY_CODE_BY_REGION[region] ?? "ZZ";
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
    const [region, beach] = row.split("\t").map((s) => s.trim());
    return toPairing(region, beach);
  });
