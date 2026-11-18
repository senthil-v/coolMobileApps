export interface AmavasaiDate {
  id: string;
  isoDate: string; // YYYY-MM-DD
  year: 2026 | 2027;
  displayDate: string;
  weekday: string;
  vasaraSanskrit: string;
  samvatsara: string;
  ayana: 'Dakṣiṇāyane' | 'Uttarāyane';
  ritu: string;
  masaSanskrit: string;
  masaTamil: string;
  tamilDay: string;
  nakshatra: string;
  nakshatraTamil: string;
  specialObservance?: string;
  tithiNote: string;
}

export const AMAVASAI_DATES: AmavasaiDate[] = [
  // Remaining of 2026 (Current reference: Nov 17, 2026 -> Dec 8, 2026 is upcoming; Nov 8 included for recent reference)
  {
    id: '2026-11-08',
    isoDate: '2026-11-08',
    year: 2026,
    displayDate: 'November 8, 2026',
    weekday: 'Sunday',
    vasaraSanskrit: 'Bhānu Vāsara',
    samvatsara: 'Parābhava Nāma Saṁvatsare',
    ayana: 'Dakṣiṇāyane',
    ritu: 'Śarad Ṛtau',
    masaSanskrit: 'Tulā Māse',
    masaTamil: 'Aippasi',
    tamilDay: 'Aippasi 22',
    nakshatra: 'Svātī',
    nakshatraTamil: 'Swathi',
    specialObservance: 'Deepavali Amavasai (Completed)',
    tithiNote: 'Amavasya Tithi: Nov 8, 11:27 AM – Nov 9, 12:31 PM IST',
  },
  {
    id: '2026-12-08',
    isoDate: '2026-12-08',
    year: 2026,
    displayDate: 'December 8, 2026',
    weekday: 'Tuesday',
    vasaraSanskrit: 'Bhauma Vāsara',
    samvatsara: 'Parābhava Nāma Saṁvatsare',
    ayana: 'Dakṣiṇāyane',
    ritu: 'Hemanta Ṛtau',
    masaSanskrit: 'Vṛścika Māse',
    masaTamil: 'Karthigai',
    tamilDay: 'Karthigai 22',
    nakshatra: 'Anurādhā',
    nakshatraTamil: 'Anusham',
    specialObservance: 'Final Amavasai of 2026',
    tithiNote: 'Amavasya Tithi: Dec 8, 04:12 AM – Dec 9, 06:21 AM IST',
  },
  // Full Year 2027 (All 13 Amavasai dates)
  {
    id: '2027-01-07',
    isoDate: '2027-01-07',
    year: 2027,
    displayDate: 'January 7, 2027',
    weekday: 'Thursday',
    vasaraSanskrit: 'Guru Vāsara',
    samvatsara: 'Parābhava Nāma Saṁvatsare',
    ayana: 'Dakṣiṇāyane',
    ritu: 'Hemanta Ṛtau',
    masaSanskrit: 'Dhanur Māse',
    masaTamil: 'Margazhi',
    tamilDay: 'Margazhi 23',
    nakshatra: 'Pūrvāṣāḍhā',
    nakshatraTamil: 'Pooradam',
    tithiNote: 'Margazhi Amavasai · Pausha Krishna Amavasya',
  },
  {
    id: '2027-02-06',
    isoDate: '2027-02-06',
    year: 2027,
    displayDate: 'February 6, 2027',
    weekday: 'Saturday',
    vasaraSanskrit: 'Sthira (Śani) Vāsara',
    samvatsara: 'Parābhava Nāma Saṁvatsare',
    ayana: 'Uttarāyane',
    ritu: 'Śiśira Ṛtau',
    masaSanskrit: 'Makara Māse',
    masaTamil: 'Thai',
    tamilDay: 'Thai 23',
    nakshatra: 'Śravaṇa',
    nakshatraTamil: 'Thiruvonam',
    specialObservance: 'Thai Amavasai · Shani Amavasai',
    tithiNote: 'Major sacred Pitru Tharpanam day in Uttarayana',
  },
  {
    id: '2027-03-08',
    isoDate: '2027-03-08',
    year: 2027,
    displayDate: 'March 8, 2027',
    weekday: 'Monday',
    vasaraSanskrit: 'Indu (Soma) Vāsara',
    samvatsara: 'Parābhava Nāma Saṁvatsare',
    ayana: 'Uttarāyane',
    ritu: 'Śiśira Ṛtau',
    masaSanskrit: 'Kumbha Māse',
    masaTamil: 'Masi',
    tamilDay: 'Masi 24',
    nakshatra: 'Śatabhiṣak',
    nakshatraTamil: 'Sadayam',
    specialObservance: 'Somvati Amavasai',
    tithiNote: 'Auspicious Monday Amavasai for ancestor offerings',
  },
  {
    id: '2027-04-06',
    isoDate: '2027-04-06',
    year: 2027,
    displayDate: 'April 6, 2027',
    weekday: 'Tuesday',
    vasaraSanskrit: 'Bhauma Vāsara',
    samvatsara: 'Parābhava Nāma Saṁvatsare',
    ayana: 'Uttarāyane',
    ritu: 'Vasanta Ṛtau',
    masaSanskrit: 'Mīna Māse',
    masaTamil: 'Panguni',
    tamilDay: 'Panguni 23',
    nakshatra: 'Uttara Bhādrapadā',
    nakshatraTamil: 'Uthirattadhi',
    tithiNote: 'Panguni Amavasai · Final Amavasai of Parabhava year',
  },
  {
    id: '2027-05-06',
    isoDate: '2027-05-06',
    year: 2027,
    displayDate: 'May 6, 2027',
    weekday: 'Thursday',
    vasaraSanskrit: 'Guru Vāsara',
    samvatsara: 'Plavaṅga Nāma Saṁvatsare',
    ayana: 'Uttarāyane',
    ritu: 'Vasanta Ṛtau',
    masaSanskrit: 'Meṣa Māse',
    masaTamil: 'Chithirai',
    tamilDay: 'Chithirai 23',
    nakshatra: 'Bharaṇī',
    nakshatraTamil: 'Bharani',
    tithiNote: 'Chithirai Amavasai · First Amavasai of Plavanga year',
  },
  {
    id: '2027-06-04',
    isoDate: '2027-06-04',
    year: 2027,
    displayDate: 'June 4, 2027',
    weekday: 'Friday',
    vasaraSanskrit: 'Bhṛgu (Śukra) Vāsara',
    samvatsara: 'Plavaṅga Nāma Saṁvatsare',
    ayana: 'Uttarāyane',
    ritu: 'Grīṣma Ṛtau',
    masaSanskrit: 'Vṛṣabha Māse',
    masaTamil: 'Vaikasi',
    tamilDay: 'Vaikasi 21',
    nakshatra: 'Kṛttikā',
    nakshatraTamil: 'Karthigai',
    tithiNote: 'Vaikasi Amavasai · Shani Jayanti',
  },
  {
    id: '2027-07-04',
    isoDate: '2027-07-04',
    year: 2027,
    displayDate: 'July 4, 2027',
    weekday: 'Sunday',
    vasaraSanskrit: 'Bhānu Vāsara',
    samvatsara: 'Plavaṅga Nāma Saṁvatsare',
    ayana: 'Uttarāyane',
    ritu: 'Grīṣma Ṛtau',
    masaSanskrit: 'Mithuna Māse',
    masaTamil: 'Aani',
    tamilDay: 'Aani 20',
    nakshatra: 'Ārdrā',
    nakshatraTamil: 'Thiruvadirai',
    tithiNote: 'Aani Amavasai',
  },
  {
    id: '2027-08-02',
    isoDate: '2027-08-02',
    year: 2027,
    displayDate: 'August 2, 2027',
    weekday: 'Monday',
    vasaraSanskrit: 'Indu (Soma) Vāsara',
    samvatsara: 'Plavaṅga Nāma Saṁvatsare',
    ayana: 'Dakṣiṇāyane',
    ritu: 'Varṣā Ṛtau',
    masaSanskrit: 'Karkaṭaka Māse',
    masaTamil: 'Aadi',
    tamilDay: 'Aadi 17',
    nakshatra: 'Puṣya',
    nakshatraTamil: 'Poosam',
    specialObservance: 'Aadi Amavasai · Somvati Amavasai',
    tithiNote: 'Highly revered Dakshinayana Pitru Tharpanam day',
  },
  {
    id: '2027-08-31',
    isoDate: '2027-08-31',
    year: 2027,
    displayDate: 'August 31, 2027',
    weekday: 'Tuesday',
    vasaraSanskrit: 'Bhauma Vāsara',
    samvatsara: 'Plavaṅga Nāma Saṁvatsare',
    ayana: 'Dakṣiṇāyane',
    ritu: 'Varṣā Ṛtau',
    masaSanskrit: 'Siṁha Māse',
    masaTamil: 'Avani',
    tamilDay: 'Avani 15',
    nakshatra: 'Maghā',
    nakshatraTamil: 'Magam',
    tithiNote: 'Avani Amavasai (Second Amavasai in August 2027)',
  },
  {
    id: '2027-09-29',
    isoDate: '2027-09-29',
    year: 2027,
    displayDate: 'September 29, 2027',
    weekday: 'Wednesday',
    vasaraSanskrit: 'Saumya (Budha) Vāsara',
    samvatsara: 'Plavaṅga Nāma Saṁvatsare',
    ayana: 'Dakṣiṇāyane',
    ritu: 'Śarad Ṛtau',
    masaSanskrit: 'Kanyā Māse',
    masaTamil: 'Purattasi',
    tamilDay: 'Purattasi 13',
    nakshatra: 'Uttara Phalgunī',
    nakshatraTamil: 'Uthiram',
    specialObservance: 'Mahalaya Amavasai (Sarva Pitru)',
    tithiNote: 'Culmination of Mahalaya Paksha · Foremost ancestor day',
  },
  {
    id: '2027-10-29',
    isoDate: '2027-10-29',
    year: 2027,
    displayDate: 'October 29, 2027',
    weekday: 'Friday',
    vasaraSanskrit: 'Bhṛgu (Śukra) Vāsara',
    samvatsara: 'Plavaṅga Nāma Saṁvatsare',
    ayana: 'Dakṣiṇāyane',
    ritu: 'Śarad Ṛtau',
    masaSanskrit: 'Tulā Māse',
    masaTamil: 'Aippasi',
    tamilDay: 'Aippasi 12',
    nakshatra: 'Citrā',
    nakshatraTamil: 'Chithirai',
    specialObservance: 'Deepavali Amavasai',
    tithiNote: 'Aippasi Amavasai · Kedaragauri Vratam',
  },
  {
    id: '2027-11-27',
    isoDate: '2027-11-27',
    year: 2027,
    displayDate: 'November 27, 2027',
    weekday: 'Saturday',
    vasaraSanskrit: 'Sthira (Śani) Vāsara',
    samvatsara: 'Plavaṅga Nāma Saṁvatsare',
    ayana: 'Dakṣiṇāyane',
    ritu: 'Hemanta Ṛtau',
    masaSanskrit: 'Vṛścika Māse',
    masaTamil: 'Karthigai',
    tamilDay: 'Karthigai 11',
    nakshatra: 'Viśākhā',
    nakshatraTamil: 'Visakam',
    tithiNote: 'Karthigai Amavasai · Shani Amavasai',
  },
  {
    id: '2027-12-28',
    isoDate: '2027-12-28',
    year: 2027,
    displayDate: 'December 28, 2027',
    weekday: 'Monday',
    vasaraSanskrit: 'Indu (Soma) Vāsara',
    samvatsara: 'Plavaṅga Nāma Saṁvatsare',
    ayana: 'Dakṣiṇāyane',
    ritu: 'Hemanta Ṛtau',
    masaSanskrit: 'Dhanur Māse',
    masaTamil: 'Margazhi',
    tamilDay: 'Margazhi 12',
    nakshatra: 'Mūla',
    nakshatraTamil: 'Moolam',
    specialObservance: 'Somvati Amavasai · Hanumath Jayanthi',
    tithiNote: 'Final Amavasai of 2027',
  },
];

export interface AncestorEntry {
  name: string;
  deceased: boolean;
}

export interface LineageProfile {
  kartaName: string;
  vedaTradition: 'Yajurveda' | 'Rigveda' | 'Samaveda';
  maleSuffix: 'Śarmaṇaḥ' | 'Varmaṇaḥ' | 'Guptasya' | 'Dāsasya';
  femaleSuffix: 'Nāmnīm' | 'Devī Nāmnīm' | 'Dāsyāḥ';
  paternalGotram: string;
  paternalMale: [AncestorEntry, AncestorEntry, AncestorEntry]; // Gen 1 Father, Gen 2 Grandfather, Gen 3 Great-Grandfather
  paternalFemale: [AncestorEntry, AncestorEntry, AncestorEntry]; // Gen 1 Mother, Gen 2 Grandmother, Gen 3 Great-Grandmother
  maternalGotram: string;
  maternalMale: [AncestorEntry, AncestorEntry, AncestorEntry]; // Gen 1 Maternal Grandfather, Gen 2 His Father, Gen 3 His Grandfather
  maternalFemale: [AncestorEntry, AncestorEntry, AncestorEntry]; // Gen 1 Maternal Grandmother, Gen 2 Her Mother-in-law, Gen 3 Great-Grandmother
  updatedAt?: string;
}

export const DEFAULT_LINEAGE_PROFILE: LineageProfile = {
  kartaName: '',
  vedaTradition: 'Yajurveda',
  maleSuffix: 'Śarmaṇaḥ',
  femaleSuffix: 'Nāmnīm',
  paternalGotram: '',
  paternalMale: [
    { name: '', deceased: true },
    { name: '', deceased: true },
    { name: '', deceased: true },
  ],
  paternalFemale: [
    { name: '', deceased: true },
    { name: '', deceased: true },
    { name: '', deceased: true },
  ],
  maternalGotram: '',
  maternalMale: [
    { name: '', deceased: true },
    { name: '', deceased: true },
    { name: '', deceased: true },
  ],
  maternalFemale: [
    { name: '', deceased: true },
    { name: '', deceased: true },
    { name: '', deceased: true },
  ],
};

export const GANESHA_MANTRA = {
  title: 'Sri Mahaganapathi Dhyanam & Mantra',
  instruction:
    'Face East in Upaviti position (sacred thread on left shoulder). Gently tap temples lightly with knuckles while chanting Shuklambaradharam.',
  shlokaEnglish:
    'Śuklāmbaradharaṁ viṣṇuṁ śaśivarṇaṁ caturbhujam |\nPrasannavadanaṁ dhyāyet sarvavighnopaśāntaye ||\n\nVakratuṇḍa mahākāya sūryakoṭi samaprabha |\nNirvighnaṁ kuru me deva sarvakāryeṣu sarvadā ||\n\nOṁ gaṁ gaṇapataye namaḥ ||',
  shlokaTamil:
    'சுக்லாம்பரதரம் விஷ்ணும் சசிவர்ணம் சதுர்புஜம் |\nப்ரசன்ன வதனம் த்யாயேத் சர்வ விக்நோப சாந்தயே ||\n\nவக்ரதுண்ட மஹாகாய சூர்யகோடி சமப்ரப |\nநிர்விக்னம் குரு மே தேவ சர்வ கார்யேஷு சர்வதா ||\n\nஓம் கம் கணபதயே நம: ||',
  meaning:
    'Meditating upon Lord Ganesha clad in white, radiant like the moon, four-armed with a serene countenance, we pray for the removal of all obstacles before beginning sacred rites.',
};

export const GAYATRI_MANTRA = {
  title: 'Pranayamam & Sri Gayatri Mahamantram',
  instruction:
    'Perform Pranayamam (touch right ear / regulate breath) and recite Gayatri Mantra 10, 28, or 108 times silently or softly before shifting to Prachinaviti for Pitru Sankalpam.',
  pranayamaEnglish:
    'Oṁ bhūḥ · Oṁ bhuvaḥ · Oṁ suvaḥ · Oṁ mahaḥ · Oṁ janaḥ · Oṁ tapaḥ · Oṁ satyam |\nOṁ tatsavitur vareṇyaṁ bhargo devasya dhīmahi |\nDhiyo yo naḥ pracodayāt |\nOṁ āpo jyotī raso’mṛtaṁ brahma bhūr bhuvaḥ suvar om ||',
  gayatriEnglish:
    'Oṁ bhūr bhuvaḥ suvaḥ |\nTat savitur vareṇyam |\nBhargo devasya dhīmahi |\nDhiyo yo naḥ pracodayāt ||',
  gayatriTamil:
    'ஓம் பூர் புவஸ் ஸுவ: |\nதத் ஸவிதுர் வரேண்யம் |\nபர்கோ தேவஸ்ய தீமஹி |\nதியோ யோ ந: ப்ரசோதயாத் ||',
  meaning:
    'We meditate upon the supreme effulgence of Lord Savitur, Creator of the Universe; may that divine radiance illumine our intellect and guide our actions.',
};

export const OORJAM_VAHANTHEE = {
  title: 'Concluding Pitru Mantra (Ūrjaṁ Vahantīḥ)',
  instruction:
    'Pour the remaining sesame water generously over the darbha koorcham at the conclusion of all paternal and maternal offerings, then return the sacred thread to left shoulder (Upaviti) and offer Namaskaram.',
  english:
    'Ūrjaṁ vahantīr amṛtaṁ ghṛtaṁ payaḥ kīlālaṁ parisrutaṁ svadhā stha tarpayata me pitṝn tṛpyata tṛpyata tṛpyata ||',
  tamil:
    'ஊர்ஜம் வஹந்தீர் அம்ருதம் க்ருதம் பய: கீலாலம் பரிஸ்ருதம் ஸ்வதா ஸ்த தர்பயத மே பித்ரூன் த்ருப்யத த்ருப்யத த்ருப்யத ||',
  meaning:
    'May these sacred waters carrying nourishment, nectar, ghee, and sweetness satisfy my ancestors; be contented, be contented, be contented.',
};

export interface GeneratedMantraItem {
  id: string;
  side: 'Paternal' | 'Maternal';
  gender: 'Male' | 'Female';
  generationIndex: 1 | 2 | 3;
  relationshipTitle: string;
  sanskritRelation: string;
  divineForm: 'Vasu Rūpa' | 'Rudra Rūpa' | 'Āditya Rūpa';
  gotram: string;
  ancestorName: string;
  isDeceased: boolean;
  mantraEnglish: string;
  mantraNote?: string;
}

function cleanGotram(g: string, fallback: string): string {
  const trimmed = g.trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

function cleanName(n: string, fallback: string): string {
  const trimmed = n.trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

export function buildSankalpamText(date: AmavasaiDate, lineage: LineageProfile): {
  openingCosmic: string;
  panchangamLine: string;
  paternalMaleClause: string;
  paternalFemaleClause: string;
  maternalMaleClause: string;
  maternalFemaleClause: string;
  closingClause: string;
  hasMissingNames: boolean;
} {
  const pGotram = cleanGotram(lineage.paternalGotram, '[Paternal Gotram]');
  const mGotram = cleanGotram(
    lineage.maternalGotram || lineage.paternalGotram,
    '[Maternal Gotram]'
  );

  const pM = lineage.paternalMale.map((a, i) =>
    a.deceased ? cleanName(a.name, `[Paternal Male Gen ${i + 1}]`) : null
  );
  const pF = lineage.paternalFemale.map((a, i) =>
    a.deceased ? cleanName(a.name, `[Paternal Female Gen ${i + 1}]`) : null
  );
  const mM = lineage.maternalMale.map((a, i) =>
    a.deceased ? cleanName(a.name, `[Maternal Male Gen ${i + 1}]`) : null
  );
  const mF = lineage.maternalFemale.map((a, i) =>
    a.deceased ? cleanName(a.name, `[Maternal Female Gen ${i + 1}]`) : null
  );

  const hasMissingNames =
    !lineage.paternalGotram.trim() ||
    !lineage.maternalGotram.trim() ||
    lineage.paternalMale.some((a) => a.deceased && !a.name.trim()) ||
    lineage.paternalFemale.some((a) => a.deceased && !a.name.trim()) ||
    lineage.maternalMale.some((a) => a.deceased && !a.name.trim()) ||
    lineage.maternalFemale.some((a) => a.deceased && !a.name.trim());

  const activePM = pM.filter(Boolean) as string[];
  const activePF = pF.filter(Boolean) as string[];
  const activeMM = mM.filter(Boolean) as string[];
  const activeMF = mF.filter(Boolean) as string[];

  const openingCosmic =
    'Śrī Govinda Govinda Govinda | Ādya śrī bhagavataḥ mahāpuruṣasya viṣṇor ājñayā pravartamānasya adya brahmaṇaḥ dvitīya parārdhe śvetavarāha kalpe vaivasvata manvantare aṣṭāviṁśatitame kaliyuge prathame pāde jambūdvīpe bhāratavarṣe bhāratakhaṇḍe meroḥ dakṣiṇe pārśve śakābde asmin vartamāne vyāvahārike prabhavādi ṣaṣṭi saṁvatsarāṇāṁ madhye —';

  const panchangamLine = `${date.samvatsara}, ${date.ayana}, ${date.ritu}, ${date.masaSanskrit} (${date.masaTamil}), Kṛṣṇa Pakṣe, Amāvasyāyāṁ Puṇyatithau, ${date.vasaraSanskrit} (${date.weekday}), ${date.nakshatra} Nakṣatra Yuktāyām, śubhayoga śubhakaraṇa evaṁ guṇa viśeṣaṇa viśiṣṭāyāṁ asyāṁ Amāvasyāyāṁ Puṇyatithau —`;

  const paternalMaleClause =
    activePM.length > 0
      ? `${pGotram} gotrāṇām, ${activePM.join(' · ')} ${lineage.maleSuffix}, Vasu-Rudra-Āditya svarūpāṇām asmad pitṛ-pitāmaha-prapitāmahānām;`
      : `${pGotram} gotrāṇām, (Paternal male generation skipped as marked living — reciting Vasu-Rudra-Āditya ancestral invocation);`;

  const paternalFemaleClause =
    activePF.length > 0
      ? `${pGotram} gotrāṇām, ${activePF.join(' · ')} ${lineage.femaleSuffix}, Vasu-Rudra-Āditya svarūpāṇām asmad mātṛ-pitāmahī-prapitāmahīnām;`
      : `${pGotram} gotrāṇām, (Paternal female generation skipped as marked living);`;

  const maternalMaleClause =
    activeMM.length > 0
      ? `${mGotram} gotrāṇām, ${activeMM.join(' · ')} ${lineage.maleSuffix}, Vasu-Rudra-Āditya svarūpāṇām asmad mātāmaha-mātṛpitāmaha-mātṛprapitāmahānām;`
      : `${mGotram} gotrāṇām, (Maternal male generation skipped as marked living);`;

  const maternalFemaleClause =
    activeMF.length > 0
      ? `${mGotram} gotrāṇām, ${activeMF.join(' · ')} ${lineage.femaleSuffix}, Vasu-Rudra-Āditya svarūpāṇām asmad mātāmahī-mātṛpitāmahī-mātṛprapitāmahīnām;`
      : `${mGotram} gotrāṇām, (Maternal female generation skipped as marked living);`;

  const closingClause = `ubhaya vaṁśa pitṝṇām akṣaya tṛptyarthaṁ Amāvasyā puṇyakāle tilatarpanaṁ kariṣye (${lineage.vedaTradition} vidhi) ||`;

  return {
    openingCosmic,
    panchangamLine,
    paternalMaleClause,
    paternalFemaleClause,
    maternalMaleClause,
    maternalFemaleClause,
    closingClause,
    hasMissingNames,
  };
}

export function buildTharpanaMantras(lineage: LineageProfile): GeneratedMantraItem[] {
  const pGotram = cleanGotram(lineage.paternalGotram, '[Paternal Gotram]');
  const mGotram = cleanGotram(
    lineage.maternalGotram || lineage.paternalGotram,
    '[Maternal Gotram]'
  );

  const forms: Array<'Vasu Rūpa' | 'Rudra Rūpa' | 'Āditya Rūpa'> = [
    'Vasu Rūpa',
    'Rudra Rūpa',
    'Āditya Rūpa',
  ];
  const formsSanskritMale = ['vasu-rūpaṁ', 'rudra-rūpaṁ', 'āditya-rūpaṁ'];
  const formsSanskritFemale = ['vasu-rūpāṁ', 'rudra-rūpāṁ', 'āditya-rūpāṁ'];

  const paternalMaleLabels = [
    { rel: 'Father (Gen 1)', sanskrit: 'pitaraṁ' },
    { rel: 'Paternal Grandfather (Gen 2)', sanskrit: 'pitāmahaṁ' },
    { rel: 'Paternal Great-Grandfather (Gen 3)', sanskrit: 'prapitāmahaṁ' },
  ];
  const paternalFemaleLabels = [
    { rel: 'Mother (Gen 1)', sanskrit: 'mātaraṁ' },
    { rel: 'Paternal Grandmother (Gen 2)', sanskrit: 'pitāmahīṁ' },
    { rel: 'Paternal Great-Grandmother (Gen 3)', sanskrit: 'prapitāmahīṁ' },
  ];
  const maternalMaleLabels = [
    { rel: 'Maternal Grandfather (Gen 1)', sanskrit: 'mātamahaṁ' },
    { rel: 'Maternal Great-Grandfather (Gen 2)', sanskrit: 'mātṛ-pitāmahaṁ' },
    { rel: 'Maternal Great-Great-Grandfather (Gen 3)', sanskrit: 'mātṛ-prapitāmahaṁ' },
  ];
  const maternalFemaleLabels = [
    { rel: 'Maternal Grandmother (Gen 1)', sanskrit: 'mātamahīṁ' },
    { rel: 'Maternal Great-Grandmother (Gen 2)', sanskrit: 'mātṛ-pitāmahīṁ' },
    { rel: 'Maternal Great-Great-Grandmother (Gen 3)', sanskrit: 'mātṛ-prapitāmahīṁ' },
  ];

  const items: GeneratedMantraItem[] = [];

  lineage.paternalMale.forEach((entry, idx) => {
    const gen = (idx + 1) as 1 | 2 | 3;
    const name = cleanName(entry.name, `[${paternalMaleLabels[idx].rel}]`);
    items.push({
      id: `pm-${gen}`,
      side: 'Paternal',
      gender: 'Male',
      generationIndex: gen,
      relationshipTitle: paternalMaleLabels[idx].rel,
      sanskritRelation: paternalMaleLabels[idx].sanskrit,
      divineForm: forms[idx],
      gotram: pGotram,
      ancestorName: name,
      isDeceased: entry.deceased,
      mantraEnglish: entry.deceased
        ? `${pGotram} gotraṁ, ${name} ${lineage.maleSuffix}, ${formsSanskritMale[idx]} asmad ${paternalMaleLabels[idx].sanskrit} svadhā namas tarpayāmi || (Chant & pour til water 3 times)`
        : 'Marked as living — skip this offering per traditional Dharma Shastra custom.',
      mantraNote: entry.deceased ? undefined : 'Living parent/ancestor is honored in person, not in Pitru Tharpanam.',
    });
  });

  lineage.paternalFemale.forEach((entry, idx) => {
    const gen = (idx + 1) as 1 | 2 | 3;
    const name = cleanName(entry.name, `[${paternalFemaleLabels[idx].rel}]`);
    items.push({
      id: `pf-${gen}`,
      side: 'Paternal',
      gender: 'Female',
      generationIndex: gen,
      relationshipTitle: paternalFemaleLabels[idx].rel,
      sanskritRelation: paternalFemaleLabels[idx].sanskrit,
      divineForm: forms[idx],
      gotram: pGotram,
      ancestorName: name,
      isDeceased: entry.deceased,
      mantraEnglish: entry.deceased
        ? `${pGotram} gotrāṁ, ${name} ${lineage.femaleSuffix}, ${formsSanskritFemale[idx]} asmad ${paternalFemaleLabels[idx].sanskrit} svadhā namas tarpayāmi || (Chant & pour til water 3 times)`
        : 'Marked as living — skip this offering per traditional Dharma Shastra custom.',
      mantraNote: entry.deceased ? undefined : 'Living mother/grandmother is honored in person, not in Pitru Tharpanam.',
    });
  });

  lineage.maternalMale.forEach((entry, idx) => {
    const gen = (idx + 1) as 1 | 2 | 3;
    const name = cleanName(entry.name, `[${maternalMaleLabels[idx].rel}]`);
    items.push({
      id: `mm-${gen}`,
      side: 'Maternal',
      gender: 'Male',
      generationIndex: gen,
      relationshipTitle: maternalMaleLabels[idx].rel,
      sanskritRelation: maternalMaleLabels[idx].sanskrit,
      divineForm: forms[idx],
      gotram: mGotram,
      ancestorName: name,
      isDeceased: entry.deceased,
      mantraEnglish: entry.deceased
        ? `${mGotram} gotraṁ, ${name} ${lineage.maleSuffix}, ${formsSanskritMale[idx]} asmad ${maternalMaleLabels[idx].sanskrit} svadhā namas tarpayāmi || (Chant & pour til water 3 times)`
        : 'Marked as living — skip this offering per traditional Dharma Shastra custom.',
    });
  });

  lineage.maternalFemale.forEach((entry, idx) => {
    const gen = (idx + 1) as 1 | 2 | 3;
    const name = cleanName(entry.name, `[${maternalFemaleLabels[idx].rel}]`);
    items.push({
      id: `mf-${gen}`,
      side: 'Maternal',
      gender: 'Female',
      generationIndex: gen,
      relationshipTitle: maternalFemaleLabels[idx].rel,
      sanskritRelation: maternalFemaleLabels[idx].sanskrit,
      divineForm: forms[idx],
      gotram: mGotram,
      ancestorName: name,
      isDeceased: entry.deceased,
      mantraEnglish: entry.deceased
        ? `${mGotram} gotrāṁ, ${name} ${lineage.femaleSuffix}, ${formsSanskritFemale[idx]} asmad ${maternalFemaleLabels[idx].sanskrit} svadhā namas tarpayāmi || (Chant & pour til water 3 times)`
        : 'Marked as living — skip this offering per traditional Dharma Shastra custom.',
    });
  });

  return items;
}
