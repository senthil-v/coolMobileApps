export type DeityId =
  | 'siva'
  | 'vishnu'
  | 'ambal'
  | 'mahalakshmi'
  | 'murugan'
  | 'ayyappa';

export interface Verse {
  id: string;
  label: string;
  english: string;
  tamil: string;
  meaning: string;
}

export interface ParayanamHymn {
  id: string;
  title: string;
  subtitle: string;
  composer: string;
  verses: Verse[];
}

export interface DeityProfile {
  id: DeityId;
  name: string;
  tamilName: string;
  epithet: string;
  sacredDay: string;
  offering: string;
  moolaMantra: string;
  moolaMantraTamil: string;
  image: string;
  accentHex: string;
  hymns: ParayanamHymn[];
}

export const HERO_SANCTUM_IMAGE = '/src/assets/images/hero_sanctum_lamp_1794944291890.jpg';
export const THARPANAM_RITUAL_IMAGE = '/src/assets/images/tharpanam_ritual_1794944295967.jpg';

export const DEITIES: DeityProfile[] = [
  {
    id: 'siva',
    name: 'Lord Siva',
    tamilName: 'சிவபெருமான்',
    epithet: 'Sri Dakshinamurthy & Nataraja',
    sacredDay: 'Mondays · Pradosham',
    offering: 'Bilva Leaves & Vibhuti',
    moolaMantra: 'Om Namah Shivaya',
    moolaMantraTamil: 'ஓம் நமசிவாய',
    image: '/src/assets/images/deity_siva_1794944291612.jpg',
    accentHex: '#4B5563',
    hymns: [
      {
        id: 'panchakshara',
        title: 'Sri Shiva Panchakshara Stotram',
        subtitle: 'Five sacred verses meditating on Na-Ma-Shi-Va-Ya',
        composer: 'Adi Shankaracharya',
        verses: [
          {
            id: 'p1',
            label: 'Verse 1 (Na)',
            english:
              'Nāgendrahārāya trilocanāya bhasmāṅgarāgāya maheśvarāya |\nNityāya śuddhāya digambarāya tasmai "Na"kārāya namaḥ śivāya ||',
            tamil:
              'நாகேந்த்ர ஹாராய த்ரிலோசனாய பஸ்மாங்க ராகாய மஹேச்வராய |\nநித்யாய சுத்தாய திகம்பராய தஸ்மை ந-காராய நம: சிவாய ||',
            meaning:
              'Salutations to Lord Shiva embodied in the letter "Na", who wears the king of serpents as a garland, possesses three eyes, smears sacred ash, and is eternal and pure.',
          },
          {
            id: 'p2',
            label: 'Verse 2 (Ma)',
            english:
              'Mandākinī salila candana carcitāya nandīśvara pramathanātha maheśvarāya |\nMandārapuṣpa bahupuṣpa supūjitāya tasmai "Ma"kārāya namaḥ śivāya ||',
            tamil:
              'மந்தாகினீ சலில சந்தன சர்சிதாய நந்தீச்வர ப்ரமதநாத மஹேச்வராய |\nமந்தார புஷ்ப பஹுபுஷ்ப சுபூஜிதாய தஸ்மை ம-காராய நம: சிவாய ||',
            meaning:
              'Salutations to Shiva embodied in "Ma", anointed with Ganga water and sandalwood, Lord of Nandi and the Ganas, worshipped with Mandara and sacred blossoms.',
          },
          {
            id: 'p3',
            label: 'Verse 3 (Shi)',
            english:
              'Śivāya gaurī vadanābja vṛnda sūryāya dakṣādhvara nāśakāya |\nŚrī nīlakaṇṭhāya vṛṣadhvajāya tasmai "Śi"kārāya namaḥ śivāya ||',
            tamil:
              'சிவாய கௌரீ வதநாப்ஜ வ்ருந்த சூர்யாய தக்ஷாத்வர நாசகாய |\nஸ்ரீ நீலகண்டாய வ்ருஷபத்வஜாய தஸ்மை சி-காராய நம: சிவாய ||',
            meaning:
              'Salutations to Shiva embodied in "Shi", who brings radiance to Goddess Gauri’s lotus face, wears the bull emblem, and holds the blue throat of compassion.',
          },
          {
            id: 'p4',
            label: 'Verse 4 (Va)',
            english:
              'Vasiṣṭha kumbhodbhava gautamārya munīndra devārcita śekharāya |\nCandrārka vaiśvānara locanāya tasmai "Va"kārāya namaḥ śivāya ||',
            tamil:
              'வசிஷ்ட கும்போத்பவ கௌதமார்ய முனீந்த்ர தேவர்சித சேகராய |\nசந்த்ரார்க்க வைச்வானர லோசனாய தஸ்மை வ-காராய நம: சிவாய ||',
            meaning:
              'Salutations to Shiva embodied in "Va", revered by sages Vasishtha, Agastya, and Gautama, whose three eyes are the Moon, Sun, and Sacred Fire.',
          },
          {
            id: 'p5',
            label: 'Verse 5 (Ya)',
            english:
              'Yakṣasvarūpāya jaṭādharāya pinākahastāya sanātanāya |\nDivyāya devāya digambarāya tasmai "Ya"kārāya namaḥ śivāya ||',
            tamil:
              'யக்ஷ ஸ்வரூபாய ஜடாதராய பினாக ஹஸ்தாய சனாதனாய |\nதிவ்யாய தேவாய திகம்பராய தஸ்மை ய-காராய நம: சிவாய ||',
            meaning:
              'Salutations to the eternal Lord embodied in "Ya", with matted locks and the Pinaka bow, radiant and boundless.',
          },
        ],
      },
      {
        id: 'lingashtakam',
        title: 'Sri Lingashtakam',
        subtitle: 'Eightfold adoration of the Sacred Shiva Lingam',
        composer: 'Traditional Puranic Hymn',
        verses: [
          {
            id: 'l1',
            label: 'Verse 1',
            english:
              'Brahmamurāri surārcita liṅgaṁ nirmala bhāṣita śobhita liṅgam |\nJanmaja duḥkha vināśaka liṅgaṁ tat praṇamāmi sadāśiva liṅgam ||',
            tamil:
              'ப்ரம்ம முராரி சுரார்சித லிங்கம் நிர்மல பாஷித சோபித லிங்கம் |\nஜன்மஜ து:க்க விநாசக லிங்கம் தத் ப்ரணமாமி சதாசிவ லிங்கம் ||',
            meaning:
              'I bow before the Sadashiva Lingam worshipped by Brahma, Vishnu, and the Devas, destroyer of the sorrows of birth and rebirth.',
          },
          {
            id: 'l2',
            label: 'Verse 2',
            english:
              'Devamuni pravarārcita liṅgaṁ kāmadahana karuṇākara liṅgam |\nRāvaṇa darpa vināśana liṅgaṁ tat praṇamāmi sadāśiva liṅgam ||',
            tamil:
              'தேவமுனி ப்ரவரார்சித லிங்கம் காமதஹன கருணாகர லிங்கம் |\nராவண தர்ப விநாசன லிங்கம் தத் ப்ரணமாமி சதாசிவ லிங்கம் ||',
            meaning:
              'I bow before that compassionate Sadashiva Lingam adored by celestial sages, who subdued ego and burned desire.',
          },
          {
            id: 'l3',
            label: 'Verse 3',
            english:
              'Sarvasugandhi sulepita liṅgaṁ buddhi vivardhana kāraṇa liṅgam |\nSiddha surāsura vandita liṅgaṁ tat praṇamāmi sadāśiva liṅgam ||',
            tamil:
              'சர்வ சுகந்தி சுலேபித லிங்கம் புத்தி விவர்தன காரண லிங்கம் |\nசித்த சுராசுர வந்தித லிங்கம் தத் ப்ரணமாமி சதாசிவ லிங்கம் ||',
            meaning:
              'I bow before the Sadashiva Lingam anointed with fragrant sandalwood, awakeness of higher wisdom and intellect.',
          },
          {
            id: 'l4',
            label: 'Verse 4',
            english:
              'Kanakamahāmaṇi bhūṣita liṅgaṁ phaṇipati veṣṭita śobhita liṅgam |\nDakṣa suyajña vināśana liṅgaṁ tat praṇamāmi sadāśiva liṅgam ||',
            tamil:
              'கனக மஹாமணி பூஷித லிங்கம் பணிபதி வேஷ்டித சோபித லிங்கம் |\nதக்ஷ சுயஜ்ஞ விநாசன லிங்கம் தத் ப்ரணமாமி சதாசிவ லிங்கம் ||',
            meaning:
              'I bow before the Sadashiva Lingam adorned with gold and gems, encircled by Vasuki, destroyer of arrogant ritual.',
          },
        ],
      },
      {
        id: 'civapuranam',
        title: 'Thiruvasagam — Civapuranam',
        subtitle: 'Opening invocation by Saint Manickavasagar',
        composer: 'Manickavasagar',
        verses: [
          {
            id: 'c1',
            label: 'Invocation',
            english:
              'Namashivāya vāzhga nāthan thāl vāzhga |\nImaippozhudhum en nenjil neengāthān thāl vāzhga |\nKokazhi ānda gurumanithan thāl vāzhga |\nĀgamam āgi nindru annippān thāl vāzhga ||',
            tamil:
              'நமச்சிவாய வாஅழ்க நாதன் தாள் வாழ்க |\nஇமைப்பொழுதும் என் நெஞ்சில் நீங்காதான் தாள் வாழ்க |\nகோகழி ஆண்ட குருமணிதன் தாள் வாழ்க |\nஆகமம் ஆகிநின்று அண்ணிப்பான் தாள் வாழ்க ||',
            meaning:
              'Hail Namashivaya! Hail the sacred feet of the Lord who never leaves my heart even for the blink of an eye.',
          },
        ],
      },
    ],
  },
  {
    id: 'vishnu',
    name: 'Lord Vishnu',
    tamilName: 'மஹாவிஷ்ணு',
    epithet: 'Sri Narayana & Srinivasa',
    sacredDay: 'Saturdays · Ekadashi',
    offering: 'Tulasi Garland & Butter',
    moolaMantra: 'Om Namo Narayanaya',
    moolaMantraTamil: 'ஓம் நமோ நாராயணாய',
    image: '/src/assets/images/deity_vishnu_1794944292143.jpg',
    accentHex: '#1E3A5F',
    hymns: [
      {
        id: 'vishnu-dhyanam',
        title: 'Vishnu Sahasranama Dhyanam',
        subtitle: 'Classical meditation sloka on Lord Maha Vishnu',
        composer: 'Vyasa Maharishi',
        verses: [
          {
            id: 'vd1',
            label: 'Shantakaram',
            english:
              'Śāntākāraṁ bhujagaśayanaṁ padmanābhaṁ sureśam |\nViśvādhāraṁ gaganasadṛśaṁ meghavarṇaṁ śubhāṅgam |\nLakṣmīkāntaṁ kamalanayanaṁ yogibhir dhyānagamyam |\nVande viṣṇuṁ bhavabhayaharaṁ sarvalokaikanātham ||',
            tamil:
              'சாந்தாகாரம் புஜகசயனம் பத்மநாபம் சுரேசம் |\nவிச்வாதாரம் ககனசத்ருசம் மேகவர்ணம் சுபாங்கம் |\nலக்ஷ்மீகாந்தம் கமலநயனம் யோகிபிர் த்யானகம்யம் |\nவந்தே விஷ்ணும் பவபயஹரம் சர்வலோகைக நாதம் ||',
            meaning:
              'I adore Lord Vishnu of serene form, reclining on Adisesha, boundless like the sky, consort of Lakshmi, remover of worldly fear, Lord of all worlds.',
          },
          {
            id: 'vd2',
            label: 'Sashankha Chakram',
            english:
              'Saśaṅkhacakraṁ sakirīṭakuṇḍalaṁ sapītavastraṁ sarasīruhekṣaṇam |\nSahāravakṣaḥsthala śobhikaustubhaṁ namāmi viṣṇuṁ śirasā caturbhujam ||',
            tamil:
              'சசங்க சக்ரம் சகிரீட குண்டலம் சபீத வஸ்த்ரம் சரசீருஹேக்ஷணம் |\nசஹார வக்ஷ:ஸ்தல சோபி கௌஸ்துபம் நமாமி விஷ்ணும் சிரசா சதுர்புஜம் ||',
            meaning:
              'I bow my head to four-armed Vishnu holding the conch and discus, adorned with golden crown, yellow silk, and the Kaustubha gem.',
          },
        ],
      },
      {
        id: 'dwadasa-nama',
        title: 'Sri Vishnu Dwadasa Nama Stotram',
        subtitle: 'Recitation of the 12 sacred protecting names',
        composer: 'Vedic Tradition',
        verses: [
          {
            id: 'dn1',
            label: 'Names 1 – 6',
            english:
              'Keśavaṁ Nārāyaṇaṁ Mādhavaṁ Govindam |\nViṣṇuṁ Madhusūdanaṁ Trivikramaṁ Vāmanam ||',
            tamil:
              'கேசவம் நாராயணம் மாதவம் கோவிந்தம் |\nவிஷ்ணும் மதுசூதனம் த்ரிவிக்ரமம் வாமனம் ||',
            meaning:
              'Meditating on Keshava, Narayana, Madhava, Govinda, Vishnu, Madhusudana, Trivikrama, and Vamana.',
          },
          {
            id: 'dn2',
            label: 'Names 7 – 12',
            english:
              'Śrīdharaṁ Hṛṣīkeśaṁ Padmanābhaṁ Dāmodaram |\nEtāni dvādaśa nāmāni prātar utthāya yaḥ paṭhet ||',
            tamil:
              'ஸ்ரீதரம் ஹ்ருஷீகேசம் பத்மநாபம் தாமோதரம் |\nஏதானி த்வாதச நாமானி ப்ராதர் உத்தாய ய: படேத் ||',
            meaning:
              'Reciting Sridhara, Hrishikesha, Padmanabha, and Damodara upon waking brings peace and clarity throughout the day.',
          },
        ],
      },
      {
        id: 'venkatesa-mangalam',
        title: 'Sri Venkatesa Prapatti',
        subtitle: 'Surrender at the Tirumala Lord’s lotus feet',
        composer: 'Prativadi Bhayankaram Annangaracharya',
        verses: [
          {
            id: 'vm1',
            label: 'Prapatti Verse',
            english:
              'Īśānāṁ jagato’sya veṅkaṭapater viṣṇoḥ parāṁ preyasīm |\nTadvakṣaḥsthala nityavāsarasikāṁ tatkṣānti saṁvardhinīm |\nPadmālaṅkṛta pāṇipallavayugāṁ padmāsanasthāṁ śriyam |\nVātsalyādi guṇojjvalāṁ bhagavatīṁ vande jaganmātaram ||',
            tamil:
              'ஈசானாம் ஜகதோஸ்ய வேங்கடபதேர் விஷ்ணோ: பராம் ப்ரேயசீம் |\nதத்வக்ஷ:ஸ்தல நித்யவாச ரசிகாம் தத்க்ஷாந்தி சம்வர்தினீம் |\nபத்மாலங்க்ருத பாணிபல்லவயுகாம் பத்மாசனஸ்தாம் ஸ்ரியம் |\nவாத்சல்யாதி குணோஜ்வலாம் பகவதிம் வந்தே ஜகன்மாதரம் ||',
            meaning:
              'I bow to Sri Mahalakshmi, Mother of the Universe, dwelling ever upon the chest of Lord Venkatesa, radiant with boundless compassion.',
          },
        ],
      },
    ],
  },
  {
    id: 'ambal',
    name: 'Ambal',
    tamilName: 'அம்பாள்',
    epithet: 'Sri Lalita & Meenakshi Devi',
    sacredDay: 'Fridays · Pournami',
    offering: 'Red Hibiscus & Kumkum',
    moolaMantra: 'Om Sri Matre Namah',
    moolaMantraTamil: 'ஓம் ஸ்ரீ மாத்ரே நமஹ',
    image: '/src/assets/images/deity_ambal_1794944292952.jpg',
    accentHex: '#881337',
    hymns: [
      {
        id: 'lalita-pancharatnam',
        title: 'Sri Lalita Pancharatnam',
        subtitle: 'Five jewel verses of morning Devi meditation',
        composer: 'Adi Shankaracharya',
        verses: [
          {
            id: 'lp1',
            label: 'Verse 1',
            english:
              'Prātaḥ smarāmi lalitā vadanāravindaṁ bimbādharaṁ pṛthulamauktika śobhināsam |\nĀkarṇa dīrgha nayanaṁ maṇikuṇḍalāḍhyaṁ mandasmitaṁ mṛgamadojjvala bhāladeśam ||',
            tamil:
              'ப்ராத: ஸ்மராமி லலிதா வதநாரவிந்தம் பிம்பாதரம் ப்ருதுல மௌக்திக சோபி நாசம் |\nஆகர்ண தீர்க நயனம் மணிகுண்டலாட்யம் மந்தஸ்மிதம் ம்ருகமதோஜ்வல பாலதேசம் ||',
            meaning:
              'At dawn I meditate upon Devi Lalita’s lotus countenance, adorned with a pearl nose-ring, compassionate wide eyes, gentle smile, and radiant kasturi tilak.',
          },
          {
            id: 'lp2',
            label: 'Verse 2',
            english:
              'Prātar bhajāmi lalitā bhujakalpa vallīṁ ratnāṅgulīya lasadaṅguli pallavāḍhyām |\nMāṇikya hema valayāṅgada śobhamānāṁ puṇḍrekṣucāpa kusumeṣu sṛṇīr dadhānām ||',
            tamil:
              'ப்ராதர் பஜாமி லலிதா புஜகல்ப வல்லீம் ரத்னாங்குலீய லசதங்குலி பல்லவாட்யாம் |\nமாணிக்ய ஹேம வலயாங்கத சோபமானாம் புண்ட்ரேக்ஷுசாப குசுமேஷு ஸ்ருணீர் ததானாம் ||',
            meaning:
              'I adore her graceful arms adorned with ruby bangles, holding the sugarcane bow, flower arrows, noose, and goad of grace.',
          },
          {
            id: 'lp3',
            label: 'Verse 3',
            english:
              'Prātar namāmi lalitā caraṇāravindaṁ bhakteṣṭa dāna nirataṁ bhavasindhu potam |\nPadmāsanādi suranāyaka pūjanīyaṁ padmāṅkuśa dhvaja sudarśana lāñchanāḍhyam ||',
            tamil:
              'ப்ராதர் நமாமி லலிதா சரணாரவிந்தம் பக்தேஷ்ட தான நிரதம் பவசிந்து போதம் |\nபத்மாசனாதி சுரநாயக பூஜநீயம் பத்மாங்குச த்வஜ சுதர்சன லாஞ்சனாட்யம் ||',
            meaning:
              'I bow at her lotus feet, the vessel that ferries devotees safely across the ocean of existence, revered by Brahma and all celestials.',
          },
        ],
      },
      {
        id: 'abhirami-andhadhi',
        title: 'Abhirami Andhadhi',
        subtitle: 'Opening Kaappu & Dawn Verse by Abhirami Pattar',
        composer: 'Abhirami Pattar',
        verses: [
          {
            id: 'aa1',
            label: 'Verse 1 (Udikkindra)',
            english:
              'Udikkindra sengadir uchith thilagam unarvudaiyor |\nMadhikkindra mānikkam mādhuḷam podhu malarkkamalai |\nThudikkindra minkodi mendik kunguma thoyam enna |\nVidhikkindra meni Abhirami endhan vizhutthunaiyae ||',
            tamil:
              'உதிக்கின்ற செங்கதிர் உச்சித் திலகம் உணர்வுடையோர் |\nமதிக்கின்ற மாணிக்கம் மாதுளம் போது மலர்க்கமலை |\nதுதிக்கின்ற மின்கொடி மென்கடிக் குங்கும தோயம் என்ன |\nவிதிக்கின்ற மேனி அபிராமி என்றன் விழுத்துணையே ||',
            meaning:
              'Like the rising crimson sun, the crowning jewel cherished by the wise, Mother Abhirami of vermilion radiance is my eternal refuge.',
          },
        ],
      },
      {
        id: 'mahishasura-mardini',
        title: 'Ayi Girinandini',
        subtitle: 'Opening stanza of Sri Mahishasura Mardini Stotram',
        composer: 'Adi Shankaracharya',
        verses: [
          {
            id: 'mm1',
            label: 'Stanza 1',
            english:
              'Ayi girinandini nanditamedini viśvavinodini nandinute |\nGirivaravindhya śirodhinivāsini viṣṇuvilāsini jiṣṇunute |\nBhagavati he śitikaṇṭhakuṭumbini bhūrikuṭumbini bhūrikṛte |\nJaya jaya he mahiṣāsuramardini ramyakapardini śailasute ||',
            tamil:
              'அயி கிரிநந்தினி நந்தித மேதினி விச்வவிநோதினி நந்தினுதே |\nகிரிவர விந்த்ய சிரோதி நிவாசினி விஷ்ணு விலாசினி ஜிஷ்ணுனுதே |\nபகவதி ஹே சிதிகண்ட குடும்பினி பூரிகுடும்பினி பூரிக்ருதே |\nஜய ஜய ஹே மஹிஷாசுர மர்தினி ரம்யகபர்தினி சைலசுதே ||',
            meaning:
              'Victory to Thee, Daughter of the Mountain, joy of the universe, Mother of endless compassion and fearless protector of righteousness.',
          },
        ],
      },
    ],
  },
  {
    id: 'mahalakshmi',
    name: 'Mahalakshmi',
    tamilName: 'மஹாலக்ஷ்மி',
    epithet: 'Ashtalakshmi & Sri Devi',
    sacredDay: 'Fridays · Deepavali',
    offering: 'Pink Lotus & Marigold',
    moolaMantra: 'Om Shreem Mahalakshmyai Namah',
    moolaMantraTamil: 'ஓம் ஸ்ரீம் மஹாலக்ஷ்ம்யை நமஹ',
    image: '/src/assets/images/deity_mahalakshmi_1794944294232.jpg',
    accentHex: '#B45309',
    hymns: [
      {
        id: 'mahalakshmi-ashtakam',
        title: 'Sri Mahalakshmi Ashtakam',
        subtitle: 'Classical eightfold prayer for grace, abundance & peace',
        composer: 'Indra Krutam (Padma Purana)',
        verses: [
          {
            id: 'ma1',
            label: 'Verse 1',
            english:
              'Namastestu mahāmāye śrīpīṭhe surapūjite |\nŚaṅkha cakra gadā haste mahālakṣmi namo’stu te ||',
            tamil:
              'நமஸ்தேஸ்து மஹாமாயே ஸ்ரீபீடே சுரபூஜிதே |\nசங்க சக்ர கதா ஹஸ்தே மஹாலக்ஷ்மி நமோஸ்துதே ||',
            meaning:
              'Salutations to Thee, O Mahamaya, seated on the throne of auspiciousness, worshipped by the Devas, holding conch, discus, and mace.',
          },
          {
            id: 'ma2',
            label: 'Verse 2',
            english:
              'Namaste garuḍārūḍhe kolāsura bhayaṅkari |\nSarvapāpa hare devi mahālakṣmi namo’stu te ||',
            tamil:
              'நமஸ்தே கருடாரூடே கோலாசுர பயங்கரி |\nசர்வபாப ஹரே தேவி மஹாலக்ஷ்மி நமோஸ்துதே ||',
            meaning:
              'Salutations to Thee who rides Garuda and removes all sorrow and negativities, O Mother Mahalakshmi.',
          },
          {
            id: 'ma3',
            label: 'Verse 3',
            english:
              'Sarvajñe sarvavarade sarvaduṣṭa bhayaṅkari |\nSarvaduḥkha hare devi mahālakṣmi namo’stu te ||',
            tamil:
              'சர்வஜ்ஞே சர்வ்வரதே சர்வ துஷ்ட பயங்கரி |\nசர்வ து:க்க ஹரே தேவி மஹாலக்ஷ்மி நமோஸ்துதே ||',
            meaning:
              'O All-knowing bestower of boons and remover of all hardships, salutations unto Thee.',
          },
          {
            id: 'ma4',
            label: 'Verse 4',
            english:
              'Siddhibuddhiprade devi bhuktimukti pradāyini |\nMantramūrte sadā devi mahālakṣmi namo’stu te ||',
            tamil:
              'சித்தி புத்தி ப்ரதே தேவி புக்திமுக்தி ப்ரதாயினி |\nமந்த்ரமூர்த்தே சதா தேவி மஹாலக்ஷ்மி நமோஸ்துதே ||',
            meaning:
              'Bestower of spiritual accomplishment, wisdom, worldly prosperity, and liberation, salutations to Thee.',
          },
        ],
      },
      {
        id: 'kanakadhara',
        title: 'Sri Kanakadhara Stotram',
        subtitle: 'Opening Hymn of Golden Grace',
        composer: 'Adi Shankaracharya',
        verses: [
          {
            id: 'kd1',
            label: 'Verse 1',
            english:
              'Aṅgaṁ hareḥ pulakabhūṣaṇam āśrayantī bhṛṅgāṅganeva mukulābharaṇaṁ tamālam |\nAṅgīkṛtākhila vibhūtir apāṅgalīlā māṅgalyadāstu mama maṅgaladevatāyāḥ ||',
            tamil:
              'அங்கம் ஹரே: புலகபூஷண மாச்ரயந்தீ ப்ருங்காங்கநேவ முகுளாபரணம் தமாலம் |\nஅங்கீக்ருதாகில விபூதிரபாங்க லீலா மாங்கல்ய தாஸ்து மம மங்கள தேவதாயா: ||',
            meaning:
              'May the merciful side-glance of Goddess Mahalakshmi—the source of all auspiciousness—shower blessings and prosperity upon us.',
          },
        ],
      },
    ],
  },
  {
    id: 'murugan',
    name: 'Lord Murugan',
    tamilName: 'முருகப்பெருமான்',
    epithet: 'Subrahmanya & Shanmuga',
    sacredDay: 'Tuesdays · Thaipusam · Sashti',
    offering: 'Kadamba Flowers & Panchamirtham',
    moolaMantra: 'Om Saravana Bhava',
    moolaMantraTamil: 'ஓம் சரவணபவ',
    image: '/src/assets/images/deity_murugan_1794944294138.jpg',
    accentHex: '#B91C1C',
    hymns: [
      {
        id: 'kanda-sashti-kavacham',
        title: 'Kanda Sashti Kavacham',
        subtitle: 'Sacred protective armour hymn to Lord Murugan',
        composer: 'Devaraya Swamigal',
        verses: [
          {
            id: 'ksk1',
            label: 'Kaappu (Opening)',
            english:
              'Thuthipporku valvinai pom thoonbam pom nenjil |\nPadhipporku selvam palithu kadhiththongum |\nNishtaiyum kaikoodum nimalar arul kandar |\nSashti kavacham thanai ||',
            tamil:
              'துதிப்போர்க்கு வல்வினைபோம் துன்பம்போம் நெஞ்சில் |\nபதிப்போர்க்கு செல்வம் பலித்து கதித்தோங்கும் |\nநிஷ்டையும் கைகூடும் நிமலர் அருள் கந்தர் |\nசஷ்டி கவசம் தனை ||',
            meaning:
              'For those who recite and enshrine Kanda Sashti Kavacham in their hearts, heavy karma dissolves, sorrow fades, prosperity flourishes, and stillness of mind dawns.',
          },
          {
            id: 'ksk2',
            label: 'Invocation (Amarar)',
            english:
              'Amarar idar theera amaram purindha |\nKumaran adi nenjae kuri ||',
            tamil:
              'அமரர் இடர் தீர அமரம் புரிந்த |\nகுமரன் அடி நெஞ்சே குறி ||',
            meaning:
              'O my heart, meditate upon the sacred feet of Kumaran, who waged battle to end the suffering of the celestials.',
          },
          {
            id: 'ksk3',
            label: 'Vel Protection',
            english:
              'Sattiyaay vandha enai thadutthu aatkolla |\nVanna mayil murugan vandhu enai kaakka |\nVelum mayilum thunai ||',
            tamil:
              'சஷ்டியை நோக்க சரவண பவனார் |\nசிஷ்டருக்கு உதவும் செங்கதிர் வேலோன் |\nபாதம் இரண்டில் பன்மணிச் சதங்கை |\nகீதம் பாடக் கிண்கிணி ஆட ||',
            meaning:
              'May the radiant Vel and peacock of Lord Saravanabhava protect every aspect of our being.',
          },
        ],
      },
      {
        id: 'kandar-anubhuti',
        title: 'Kandar Anubhuti',
        subtitle: 'Mystical Tamil verses by Saint Arunagirinathar',
        composer: 'Arunagirinathar',
        verses: [
          {
            id: 'ka1',
            label: 'Kaappu (Aadum Pari Vel)',
            english:
              'Aadum pari vel ani seval ena |\nPaadum paniyae paniyaai arulvaai |\nThedum kayamaamuganaich cheruvil |\nSaadum thani yaanai sagodharanae ||',
            tamil:
              'ஆடும் பரி வேல் அணி சேவல் எனப் |\nபாடும் பணியே பணியாய் அருள்வாய் |\nதேடும் கயமா முகனைச் செருவில் |\nசாடும் தனி யானை சகோதரனே ||',
            meaning:
              'O Brother of Lord Ganesha, grant me the singular duty of singing the glory of Your dancing peacock, sacred Vel, and rooster banner.',
          },
          {
            id: 'ka2',
            label: 'Uruvaai Aruvaai (Verse 51)',
            english:
              'Uruvaai aruvaai uladhaai iladhaai |\nMaruvaai malaraai maniyaai oliyaai |\nKaruvaai uyiraai gathiyaai vidhiyaai |\nGuruvaai varuvaai arulvaai guhanae ||',
            tamil:
              'உருவாய் அருவாய் உளதாய் இலதாய் |\nமருவாய் மலராய் மணியாய் ஒளியாய் |\nகருவாய் உயிராய் கதியாய் விதியாய் |\nகுருவாய் வருவாய் அருள்வாய் குகனே ||',
            meaning:
              'As form and formless, fragrance and blossom, gem and radiance, seed and life, come as my Guru and bestow grace, O Guha.',
          },
        ],
      },
      {
        id: 'thiruppugazh',
        title: 'Thiruppugazh — Muththaitharu',
        subtitle: 'First rhythmic Thiruppugazh bestowed by Murugan',
        composer: 'Arunagirinathar',
        verses: [
          {
            id: 'tp1',
            label: 'Opening Stanza',
            english:
              'Muththaitharu paththi thirunagai athikkirai satti saravana |\nMuththikkoru viththu gurupara enavodhum |\nMukkatparamaarkku suruthiyin muthpadha uraiththa |\nGuruvaana murugapperumanae ||',
            tamil:
              'முத்தைத்தரு பத்தித் திருநகை அத்திக்கிறை சத்திச் சரவண |\nமுத்திக்கொரு வித்துக் குருபர எனவோதும் |\nமுக்கட்பர மற்குச் சுருதியின் முற்பட்டது கற்பித்திருவரும் |\nமுப்பத்துமு வர்க்கத் தமரரும் அடிபேண ||',
            meaning:
              'O Gurupara Saravana, seed of liberation, who expounded the primordial Pranava mantra even to the three-eyed Lord Shiva.',
          },
        ],
      },
    ],
  },
  {
    id: 'ayyappa',
    name: 'Lord Ayyappa',
    tamilName: 'ஸ்ரீ ஐயப்பன்',
    epithet: 'Sabarimala Sri Dharma Sastha',
    sacredDay: 'Saturdays · Makara Jyothi',
    offering: 'Neyyabhishekam & Tulasi',
    moolaMantra: 'Swamiyae Saranam Ayyappa',
    moolaMantraTamil: 'சுவாமியே சரணம் ஐயப்பா',
    image: '/src/assets/images/deity_ayyappa_1794944294528.jpg',
    accentHex: '#1F2937',
    hymns: [
      {
        id: 'harivarasanam',
        title: 'Harivarasanam (Ashtakam)',
        subtitle: 'Sacred nightly lullaby sung before the Sanctum closes',
        composer: 'Kambankudi Kulathur Iyer',
        verses: [
          {
            id: 'hv1',
            label: 'Verse 1',
            english:
              'Harivarāsanaṁ viśvamohanaṁ haridadhīśvaraṁ ārādhyapādukam |\nArivimardanaṁ nityanartanaṁ hariharātmajaṁ devamāśraye ||',
            tamil:
              'ஹரிவராசனம் விச்வமோஹனம் ஹரிததீச்வரம் ஆராத்யபாதுகம் |\nஅரிவிமர்தனம் நித்யநர்த்தனம் ஹரிஹராத்மஜம் தேவமாச்ரயே ||',
            meaning:
              'I take refuge in Lord Hariharatmaja, seated royally, enchanter of the universe, adored by all, destroyer of inner foes.',
          },
          {
            id: 'hv2',
            label: 'Verse 2',
            english:
              'Śaraṇakīrtanaṁ bhaktamānasaṁ bharaṇalolupaṁ nartanālasam |\nAruṇabhāsuraṁ bhūtanāyakaṁ hariharātmajaṁ devamāśraye ||',
            tamil:
              'சரணகீர்த்தனம் பக்தமானசம் பரணலோலுபம் நர்த்தனாலசம் |\nஅருணபாசுரம் பூதநாயகம் ஹரிஹராத்மஜம் தேவமாச்ரயே ||',
            meaning:
              'Who delights in the Saranam chants of devotees’ hearts, radiant like the dawn, Lord of all beings.',
          },
          {
            id: 'hv3',
            label: 'Verse 3',
            english:
              'Praṇayasatyakaṁ prāṇanāyakaṁ praṇatakalpakaṁ suprabhāñcitam |\nPraṇavamandiraṁ kīrtanapriyaṁ hariharātmajaṁ devamāśraye ||',
            tamil:
              'ப்ரணயசத்யகம் ப்ராணநாயகம் ப்ரணதகல்பகம் சுப்ரபாஞ்சிதம் |\nப்ரணவமந்திரம் கீர்த்தனப்ரியம் ஹரிஹராத்மஜம் தேவமாச்ரயே ||',
            meaning:
              'Embodiment of truth and love, Lord of life-breath, wish-fulfilling tree to those who bow, dwelling in the temple of Om.',
          },
          {
            id: 'hv4',
            label: 'Verse 4',
            english:
              'Turagavāhanaṁ sundarānanaṁ varagadāyudhaṁ vedavarṇitam |\nGurukṛpākaraṁ kīrtanapriyaṁ hariharātmajaṁ devamāśraye ||',
            tamil:
              'துரகவானனம் சுந்தரானனம் வரகதாயுதம் வேதவர்ணிதம் |\nகுருக்ருபாகரம் கீர்த்தனப்ரியம் ஹரிஹராத்மஜம் தேவமாச்ரயே ||',
            meaning:
              'Riding the white steed, of serene countenance, extolled by the Vedas, ocean of Guru’s grace.',
          },
          {
            id: 'hv5',
            label: 'Verse 5',
            english:
              'Tribhuvanārcitaṁ devatātmakaṁ trinayanaṁ prabhuṁ divyadeśikam |\nTridaśapūjitaṁ cintitapradaṁ hariharātmajaṁ devamāśraye ||',
            tamil:
              'த்ரிபுவனார்ச்சிதம் தேவதாத்மகம் த்ரிநயனம் ப்ரபும் திவ்யதேசிகம் |\nத்ரிதசபூஜிதம் சிந்திதப்ரதம் ஹரிஹராத்மஜம் தேவமாச்ரயே ||',
            meaning:
              'Worshipped by the three worlds, Divine Preceptor, bestower of cherished boons.',
          },
          {
            id: 'hv6',
            label: 'Verse 6',
            english:
              'Bhavabhayāpahaṁ bhāvukāvahaṁ bhuvanamohanaṁ bhūtibhūṣaṇam |\nDhavalavāhanaṁ divyavāraṇaṁ hariharātmajaṁ devamāśraye ||',
            tamil:
              'பவபயாபஹம் பாவுகாவஹம் புவனமோஹனம் பூதிபூஷணம் |\nதவலவாஹனம் திவ்யவாரணம் ஹரிஹராத்மஜம் தேவமாச்ரயே ||',
            meaning:
              'Remover of worldly fears, bringer of auspiciousness, adorned with sacred vibhuti.',
          },
          {
            id: 'hv7',
            label: 'Verse 7',
            english:
              'Kalamṛdusmitaṁ sundarānanaṁ kalabhakomalaṁ gātramohanam |\nKalabhakesarī vājivāhanaṁ hariharātmajaṁ devamāśraye ||',
            tamil:
              'கலம்ருதுஸ்மிதம் சுந்தரானனம் கலபகோமளம் காத்ரமோஹனம் |\nகலபகேசரீ வாஜிவாஹனம் ஹரிஹராத்மஜம் தேவமாச்ரயே ||',
            meaning:
              'With a gentle sweet smile and auspicious grace, riding the noble lion and steed.',
          },
          {
            id: 'hv8',
            label: 'Verse 8',
            english:
              'Śritajanapriyaṁ cintitapradaṁ śrutivibhūṣaṇaṁ sādhujīvanam |\nŚrutimanoharaṁ gītalālasaṁ hariharātmajaṁ devamāśraye ||',
            tamil:
              'ஸ்ரிதஜனப்ரியம் சிந்திதப்ரதம் ஸ்ருதிவிபூஷணம் சாதுஜீவனம் |\nஸ்ருதிமனோஹரம் கீதலாலசம் ஹரிஹராத்மஜம் தேவமாச்ரயே ||',
            meaning:
              'Beloved of those who seek refuge, life-breath of the virtuous, delighted by devotional music.',
          },
        ],
      },
      {
        id: 'dharma-sastha-sloka',
        title: 'Sri Dharma Sastha Dhyanam',
        subtitle: 'Traditional Sabarimala Dhyana Sloka',
        composer: 'Vedic Tradition',
        verses: [
          {
            id: 'ds1',
            label: 'Lokaveeram',
            english:
              'Lokavīraṁ mahāpūjyaṁ sarvarakṣākaraṁ vibhum |\nPārvatī hṛdayānandaṁ śāstāraṁ praṇamāmyaham ||\nBhūtanātha sadānanda sarvabhūta dayāpara |\nRakṣa rakṣa mahābāho śāstre tubhyaṁ namo namaḥ ||',
            tamil:
              'லோகவீரம் மஹாபூஜ்யம் சர்வரக்ஷாகரம் விபும் |\nபார்வதி ஹ்ருதயானந்தம் சாஸ்தாரம் ப்ரணமாம்யஹம் ||\nபூதநாத சதானந்த சர்வபூத தயாபர |\nரக்ஷ ரக்ஷ மஹாபாஹோ சாஸ்த்ரே துப்யம் நமோ நம: ||',
            meaning:
              'I bow to Sri Dharma Sastha, supreme protector of all, delight of Mother Parvati’s heart. O Bhuthanatha, full of bliss and compassion, protect us always.',
          },
        ],
      },
    ],
  },
];
