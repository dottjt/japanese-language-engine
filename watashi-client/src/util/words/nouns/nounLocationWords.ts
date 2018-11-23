import {
  CATEGORY_LOCATION,

  NOUN_PLURAL_GENERAL,

  NOUN_TYPE_SPACE,
} from '../../constants/wordConstants';

import { createNounWord } from '../utilWord';

// singular:	'Condominium / Apartment / Mansion

const wordHome = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '家',
  singular: 'home',
});

const wordBuilding = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '建物',
  hiragana: 'たてもの',
  singular:	'Building',
});

const wordBuildingTwo = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: 'ビル',
  hiragana: 'biru',
  singular: 'building',
});

const wordLocation = createNounWord({ // place
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '場所',
  hiragana: 'ばしょ',
  singular:	'location', // place 
});

const wordAirport = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '空港',
  hiragana: 'くうこう',
  singular:	'airport',
});

const wordAirportTwo = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '飛行場',
  hiragana: 'ひこうじょう',
  singular:	'airport',
});

const wordHarbour = createNounWord({ // / Port
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '港',
  hiragana: 'みなと',
  singular:	'harbour', // / Port
});

const wordPostOffice = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '郵便局',
  hiragana: 'ゆうびんきょく',
  singular:	'post office',
});

const wordBank = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '銀行',
  hiragana: 'ぎんこう',
  singular:	'bank',
});

const wordTownHall = createNounWord({ // municipal Office / City Hall / 
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '市役所',
  hiragana: 'しやくしょ',
  singular:	'town hall', // municipal Office / City Hall / 
});

const wordTrainStation = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '駅',
  hiragana: 'えき',
  singular:	'train station',
});

const wordHospital = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '病院',
  hiragana: 'びょういん',
  singular:	'hospital',
});

const wordBeautySalon = createNounWord({ // / Hair Salon
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '美容院',
  hiragana: 'びよういん',
  singular:	'beauty Salon', // / Hair Salon
});

const wordSchool = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '学校',
  hiragana: 'がっこう',
  singular:	'school',
});

const wordPrimarySchool = createNounWord({ //  / Elementary School
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '小学校',
  hiragana: 'しょうがっこう',
  singular:	'primary school', // / Elementary School
});

const wordSecondarySchool = createNounWord({ //  / Junior High School
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '中学校',
  hiragana: 'ちゅうがっこう',
  singular:	'secondary school', //  / Junior High School
});

const wordSeniorHighSchool = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '高校',
  hiragana: 'こうこう',
  singular:	'senior high school',
});

const wordUniversity = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '大学',
  hiragana: 'だいがく',
  singular:	'university',
});

const wordGraduateSchool = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '大学院',
  hiragana: 'だいがくいん',
  singular:	'graduate cchool',
});

const wordHostel = createNounWord({ // Dormitory
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '寮',
  hiragana: 'りょう',
  singular:	'hostel', //  Dormitory
});

const wordBoardingHouse = createNounWord({ // dormitory
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '寄宿舎',
  hiragana: 'きしゅくしゃ',
  singular:	'boarding house',
});

const wordLibrary = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '図書館',
  hiragana: 'としょかん',
  singular:	'library',
});

const wordAquarium = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '水族館',
  hiragana: 'すいぞくかん',
  singular:	'aquarium',
});

const wordCinema = createNounWord({ // movie Theater
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '映画館',
  hiragana: 'えいがかん',
  singular:	'cinema', // movie Theater
});

const wordMuseum = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '博物館',
  hiragana: 'はくぶつかん',
  singular:	'museum',
});

const wordArtMuseum = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '美術館',
  hiragana: 'びじゅつかん',
  singular:	'art museum',
});

const wordGynasium = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '体育館',
  hiragana: 'たいいくかん',
  singular:	'gynasium',
});

const wordMemorialHall = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '記念館',
  hiragana: 'きねんかん',
  singular:	'memorial hall',
});

const wordEmbassy = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '大使館',
  hiragana: 'たいしかん',
  singular:	'embassy',
});

const wordJapaneseHotel = createNounWord({ //  / Inn
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '旅館',
  hiragana: 'りょかん',
  singular:	'japanese hotel', //  / Inn
});

const wordHotel = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: 'ホテル',
  hiragana: 'hoteru',
  singular: 'hotel',
});

const wordFactory = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '工場',
  hiragana: 'こうじょう',
  singular:	'factory',
});

const wordMarketPlace = createNounWord({ // / Bazaar
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '市場',
  hiragana: 'いちば',
  singular:	'market place', // / Bazaar
});

const wordMeetingPlace = createNounWord({ //  / Assembly Hall
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '会場',
  hiragana: 'かいじょう',
  singular:	'meeting place', //  / Assembly Hall
});

const wordBanquetHall = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '宴会場',
  hiragana: 'えんかいじょう',
  singular:	'banquet hall',
});

const wordPark = createNounWord({ //  / Garden (Public)
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '公園',
  hiragana: 'こうえん',
  singular:	'park', // Garden (Public)
});

const wordGarden = createNounWord({ // / Yard (within the house)
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '庭',
  hiragana: 'にわ',
  singular:	'garden', //  / Yard (within the house)
});

const wordPoliceBox = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '交番',
  hiragana: 'こうばん',
  singular:	'police box',
});

const wordShrine = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '神社',
  hiragana: 'じんじゃ',
  singular:	'shrine',
});

const wordTemple = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '寺',
  hiragana: 'てら',
  singular:	'temple',
});

const wordChurch = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '教会',
  hiragana: 'きょうかい',
  singular:	'church',
});

const wordNurserySchool = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '保育園',
  hiragana: 'ほいくえん',
  singular:	'nursery school',
});

const wordKindergarten = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '幼稚園',
  hiragana: 'ようちえん',
  singular:	'kindergarten',
});

const wordBotanicalGarden = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '植物園',
  hiragana: 'しょくぶつえん',
  singular:	'botanical garden',
});

const wordZoo = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '動物園',
  hiragana: 'どうぶつえん',
  singular:	'zoo',
});

const wordNeighborhood = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '近所',
  hiragana: 'きんじょ',
  singular:	'neighborhood',
});

const wordShop = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '店',
  hiragana: 'みせ',
  singular:	'shop',
});

const wordGroceryStore = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '食料品店',
  hiragana: 'しょくりょうひんてん',
  singular:	'grocery store',
});

const wordFlorist = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '花屋',
  hiragana: 'はなや',
  singular:	'florist',
});

const wordPharmacy = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '薬屋',
  hiragana: 'くすりや',
  singular:	'pharmacy',
});

const wordFishmonger = createNounWord({ // fish Dealer / 
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '魚屋',
  hiragana: 'さかなや',
  singular:	'fishmonger', // fish Dealer / 
});

const wordButcher = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '肉屋',
  hiragana: 'にくや',
  singular:	'butcher',
});

const wordGreenGrocery  = createNounWord({ // / Fruit and Vegetable Store
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '八百屋',
  hiragana: 'やおや',
  singular:	'green grocery', //  / Fruit and Vegetable Store
});

const wordBarbershop = createNounWord({ //  / Barber
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '床屋',
  hiragana: 'とこや',
  singular:	'barbershop', // / Barber
});

const wordBakery = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: 'パン屋',
  hiragana: 'パンや',
  singular:	'bakery',
});

const wordBookstore = createNounWord({ // / Bookshop
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '本屋',
  hiragana: 'ほんや',
  singular:	'bookstore', // / Bookshop
});

const wordStationeryShop = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '文房具屋',
  hiragana: 'ぶんぼうぐや',
  singular:	'stationery shop',
});

const wordPawnshop = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '質屋',
  hiragana: 'しちや',
  singular:	'pawnshop',
});

const wordJapaneseBar = createNounWord({ // / Pub
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '居酒屋',
  hiragana: 'いざかや',
  singular:	'japanese bar', // / Pub
});

const wordPublicBath = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '風呂屋',
  hiragana: 'ふろや',
  singular:	'public bath',
});

const wordHotSpring = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '温泉',
  hiragana: 'おんせん',
  singular:	'hot spring',
});

const wordOpenAirBath = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '露天風呂',
  hiragana: 'ろてんぶろ',
  singular:	'open air bath',
});

const wordApartment = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: 'アパート',
  hiragana: 'アパート',
  singular:	'apartment',
});

const wordDepartmentStore = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: 'デパート',
  hiragana: 'デパート',
  singular:	'department store',
});

const wordRestaurant = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: 'レストラン',
  hiragana: 'レストラン',
  singular:	'restaurant',
});

const wordDisneyland = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: 'ディズニーランド',
  hiragana: 'ディズニーランド',
  singular:	'disneyland',
});

const wordSupermarket = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: 'スーパー',
  hiragana: 'スーパー',
  singular:	'supermarket',
});


const nounArray = [
  wordHome,
  wordBuilding,
  wordBuildingTwo,
  wordLocation,
  wordAirport,
  wordAirportTwo,
  wordHarbour,
  wordPostOffice,
  wordBank,
  wordTownHall,
  wordTrainStation,
  wordHospital,
  wordBeautySalon,
  wordSchool,
  wordPrimarySchool,
  wordSecondarySchool,
  wordSeniorHighSchool,
  wordUniversity,
  wordGraduateSchool,
  wordHostel,
  wordBoardingHouse,
  wordLibrary,
  wordAquarium,
  wordCinema,
  wordMuseum,
  wordArtMuseum,
  wordGynasium,
  wordMemorialHall,
  wordEmbassy,
  wordJapaneseHotel,
  wordHotel,
  wordFactory,
  wordMarketPlace,
  wordMeetingPlace,
  wordBanquetHall,
  wordPark,
  wordGarden,
  wordPoliceBox,
  wordShrine,
  wordTemple,
  wordChurch,
  wordNurserySchool,
  wordKindergarten,
  wordBotanicalGarden,
  wordZoo,
  wordNeighborhood,
  wordShop,
  wordGroceryStore,
  wordFlorist,
  wordPharmacy,
  wordFishmonger,
  wordButcher,
  wordGreenGrocery,
  wordBarbershop,
  wordBakery,
  wordBookstore,
  wordStationeryShop,
  wordPawnshop,
  wordJapaneseBar,
  wordPublicBath,
  wordHotSpring,
  wordOpenAirBath,
  wordApartment,
  wordDepartmentStore,
  wordRestaurant,
  wordDisneyland,
  wordSupermarket,
];

export default nounArray;
