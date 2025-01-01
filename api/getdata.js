import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from 'firebase/firestore';

// تهيئة Firebase
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//const today = new Date();
//const formattedDate = today.toLocaleDateString('en-CA');

const allTeams = [
    {
        "id": 33,
        "enTeam": "Manchester United",
        "arTeam": "مانشستر يونايتد"
    },
    {
        "id": 34,
        "enTeam": "Newcastle",
        "arTeam": "نيوكاسل"
    },
    {
        "id": 35,
        "enTeam": "Bournemouth",
        "arTeam": "بورنموث"
    },
    {
        "id": 36,
        "enTeam": "Fulham",
        "arTeam": "فولهام"
    },
    {
        "id": 39,
        "enTeam": "Wolves",
        "arTeam": "وولفرهامبتون"
    },
    {
        "id": 40,
        "enTeam": "Liverpool",
        "arTeam": "ليفربول"
    },
    {
        "id": 41,
        "enTeam": "Southampton",
        "arTeam": "ساوثهامبتون"
    },
    {
        "id": 42,
        "enTeam": "Arsenal",
        "arTeam": "آرسنال"
    },
    {
        "id": 45,
        "enTeam": "Everton",
        "arTeam": "إيفرتون"
    },
    {
        "id": 46,
        "enTeam": "Leicester",
        "arTeam": "ليستر سيتي"
    },
    {
        "id": 47,
        "enTeam": "Tottenham",
        "arTeam": "توتنهام"
    },
    {
        "id": 48,
        "enTeam": "West Ham",
        "arTeam": "وست هام"
    },
    {
        "id": 49,
        "enTeam": "Chelsea",
        "arTeam": "تشيلسي"
    },
    {
        "id": 50,
        "enTeam": "Manchester City",
        "arTeam": "مانشستر سيتي"
    },
    {
        "id": 51,
        "enTeam": "Brighton",
        "arTeam": "برايتون"
    },
    {
        "id": 52,
        "enTeam": "Crystal Palace",
        "arTeam": "كريستال بالاس"
    },
    {
        "id": 55,
        "enTeam": "Brentford",
        "arTeam": "برينتفورد"
    },
    {
        "id": 57,
        "enTeam": "Ipswich",
        "arTeam": "إبسويتش"
    },
    {
        "id": 65,
        "enTeam": "Nottingham Forest",
        "arTeam": "نوتينغهام فورست"
    },
    {
        "id": 66,
        "enTeam": "Aston Villa",
        "arTeam": "أستون فيلا"
    },
    {
        "id": 157,
        "enTeam": "Bayern München",
        "arTeam": "بايرن ميونيخ"
    },
    {
        "id": 160,
        "enTeam": "SC Freiburg",
        "arTeam": "فرايبورغ"
    },
    {
        "id": 161,
        "enTeam": "VfL Wolfsburg",
        "arTeam": "فولفسبورغ"
    },
    {
        "id": 162,
        "enTeam": "Werder Bremen",
        "arTeam": "فيردر بريمن"
    },
    {
        "id": 163,
        "enTeam": "Borussia Mönchengladbach",
        "arTeam": "بوروسيا مونشنغلادباخ"
    },
    {
        "id": 164,
        "enTeam": "FSV Mainz 05",
        "arTeam": "ماينز 05"
    },
    {
        "id": 165,
        "enTeam": "Borussia Dortmund",
        "arTeam": "بوروسيا دورتموند"
    },
    {
        "id": 167,
        "enTeam": "1899 Hoffenheim",
        "arTeam": "هوفنهايم"
    },
    {
        "id": 168,
        "enTeam": "Bayer Leverkusen",
        "arTeam": "باير ليفركوزن"
    },
    {
        "id": 169,
        "enTeam": "Eintracht Frankfurt",
        "arTeam": "آينتراخت فرانكفورت"
    },
    {
        "id": 170,
        "enTeam": "FC Augsburg",
        "arTeam": "أوغسبورغ"
    },
    {
        "id": 172,
        "enTeam": "VfB Stuttgart",
        "arTeam": "شتوتغارت"
    },
    {
        "id": 173,
        "enTeam": "RB Leipzig",
        "arTeam": "لايبزيغ"
    },
    {
        "id": 176,
        "enTeam": "VfL Bochum",
        "arTeam": "بوخوم"
    },
    {
        "id": 180,
        "enTeam": "1. FC Heidenheim",
        "arTeam": "هايدنهايم"
    },
    {
        "id": 182,
        "enTeam": "Union Berlin",
        "arTeam": "يونيون برلين"
    },
    {
        "id": 186,
        "enTeam": "FC St. Pauli",
        "arTeam": "سانت باولي"
    },
    {
        "id": 191,
        "enTeam": "Holstein Kiel",
        "arTeam": "هولشتاين كيل"
    },
    {
        "id": 77,
        "enTeam": "Angers",
        "arTeam": "أنجيه"
    },
    {
        "id": 79,
        "enTeam": "Lille",
        "arTeam": "ليل"
    },
    {
        "id": 80,
        "enTeam": "Lyon",
        "arTeam": "ليون"
    },
    {
        "id": 81,
        "enTeam": "Marseille",
        "arTeam": "مارسيليا"
    },
    {
        "id": 82,
        "enTeam": "Montpellier",
        "arTeam": "مونبلييه"
    },
    {
        "id": 83,
        "enTeam": "Nantes",
        "arTeam": "نانت"
    },
    {
        "id": 84,
        "enTeam": "Nice",
        "arTeam": "نيس"
    },
    {
        "id": 85,
        "enTeam": "Paris Saint Germain",
        "arTeam": "باريس سان جيرمان"
    },
    {
        "id": 91,
        "enTeam": "Monaco",
        "arTeam": "موناكو"
    },
    {
        "id": 93,
        "enTeam": "Reims",
        "arTeam": "ريمس"
    },
    {
        "id": 94,
        "enTeam": "Rennes",
        "arTeam": "رين"
    },
    {
        "id": 95,
        "enTeam": "Strasbourg",
        "arTeam": "ستراسبورغ"
    },
    {
        "id": 96,
        "enTeam": "Toulouse",
        "arTeam": "تولوز"
    },
    {
        "id": 106,
        "enTeam": "Stade Brestois 29",
        "arTeam": "ستاد بريست 29"
    },
    {
        "id": 108,
        "enTeam": "Auxerre",
        "arTeam": "أوكسير"
    },
    {
        "id": 111,
        "enTeam": "LE Havre",
        "arTeam": "لوهافر"
    },
    {
        "id": 116,
        "enTeam": "Lens",
        "arTeam": "لانس"
    },
    {
        "id": 1063,
        "enTeam": "Saint Etienne",
        "arTeam": "سانت إتيان"
    },
    {
        "id": 487,
        "enTeam": "Lazio",
        "arTeam": "لاتسيو"
    },
    {
        "id": 489,
        "enTeam": "AC Milan",
        "arTeam": "إي سي ميلان"
    },
    {
        "id": 490,
        "enTeam": "Cagliari",
        "arTeam": "كالياري"
    },
    {
        "id": 492,
        "enTeam": "Napoli",
        "arTeam": "نابولي"
    },
    {
        "id": 494,
        "enTeam": "Udinese",
        "arTeam": "أودينيزي"
    },
    {
        "id": 495,
        "enTeam": "Genoa",
        "arTeam": "جنوى"
    },
    {
        "id": 496,
        "enTeam": "Juventus",
        "arTeam": "يوفنتوس"
    },
    {
        "id": 497,
        "enTeam": "AS Roma",
        "arTeam": "روما"
    },
    {
        "id": 499,
        "enTeam": "Atalanta",
        "arTeam": "أتلانتا"
    },
    {
        "id": 500,
        "enTeam": "Bologna",
        "arTeam": "بولونيا"
    },
    {
        "id": 502,
        "enTeam": "Fiorentina",
        "arTeam": "فيورنتينا"
    },
    {
        "id": 503,
        "enTeam": "Torino",
        "arTeam": "تورينو"
    },
    {
        "id": 504,
        "enTeam": "Verona",
        "arTeam": "فيرونا"
    },
    {
        "id": 505,
        "enTeam": "Inter",
        "arTeam": "إنتر ميلان"
    },
    {
        "id": 511,
        "enTeam": "Empoli",
        "arTeam": "إمبولي"
    },
    {
        "id": 517,
        "enTeam": "Venezia",
        "arTeam": "فينيزيا"
    },
    {
        "id": 523,
        "enTeam": "Parma",
        "arTeam": "بارما"
    },
    {
        "id": 867,
        "enTeam": "Lecce",
        "arTeam": "ليتشي"
    },
    {
        "id": 895,
        "enTeam": "Como",
        "arTeam": "كومو"
    },
    {
        "id": 1579,
        "enTeam": "Monza",
        "arTeam": "مونزا"
    },
    {
        "id": 529,
        "enTeam": "Barcelona",
        "arTeam": "برشلونة"
    },
    {
        "id": 530,
        "enTeam": "Atletico Madrid",
        "arTeam": "أتلتيكو مدريد"
    },
    {
        "id": 531,
        "enTeam": "Athletic Club",
        "arTeam": "أتلتيك بيلباو"
    },
    {
        "id": 532,
        "enTeam": "Valencia",
        "arTeam": "فالنسيا"
    },
    {
        "id": 533,
        "enTeam": "Villarreal",
        "arTeam": "فياريال"
    },
    {
        "id": 534,
        "enTeam": "Las Palmas",
        "arTeam": "لاس بالماس"
    },
    {
        "id": 536,
        "enTeam": "Sevilla",
        "arTeam": "إشبيلية"
    },
    {
        "id": 537,
        "enTeam": "Leganes",
        "arTeam": "ليجانيس"
    },
    {
        "id": 538,
        "enTeam": "Celta Vigo",
        "arTeam": "سيلتا فيغو"
    },
    {
        "id": 540,
        "enTeam": "Espanyol",
        "arTeam": "إسبانيول"
    },
    {
        "id": 541,
        "enTeam": "Real Madrid",
        "arTeam": "ريال مدريد"
    },
    {
        "id": 542,
        "enTeam": "Alaves",
        "arTeam": "ديبورتيفو ألافيس"
    },
    {
        "id": 543,
        "enTeam": "Real Betis",
        "arTeam": "ريال بيتيس"
    },
    {
        "id": 546,
        "enTeam": "Getafe",
        "arTeam": "خيتافي"
    },
    {
        "id": 547,
        "enTeam": "Girona",
        "arTeam": "جيرونا"
    },
    {
        "id": 548,
        "enTeam": "Real Sociedad",
        "arTeam": "ريال سوسيداد"
    },
    {
        "id": 720,
        "enTeam": "Valladolid",
        "arTeam": "بلد الوليد"
    },
    {
        "id": 727,
        "enTeam": "Osasuna",
        "arTeam": "أوساسونا"
    },
    {
        "id": 728,
        "enTeam": "Rayo Vallecano",
        "arTeam": "رايو فاييكانو"
    },
    {
        "id": 798,
        "enTeam": "Mallorca",
        "arTeam": "مايوركا"
    },
    {
        "name": "Albania",
        "code": "AL",
        "flag": "https://media.api-sports.io/flags/al.svg",
        "arTeam": "ألبانيا",
        "id": 778
    },
    {
        "name": "Algeria",
        "code": "DZ",
        "flag": "https://media.api-sports.io/flags/dz.svg",
        "arTeam": "الجزائر",
        "id": ""
    },
    {
        "name": "Andorra",
        "code": "AD",
        "flag": "https://media.api-sports.io/flags/ad.svg",
        "arTeam": "أندورا",
        "id": 1110
    },
    {
        "name": "Angola",
        "code": "AO",
        "flag": "https://media.api-sports.io/flags/ao.svg",
        "arTeam": "أنغولا",
        "id": 1529
    },
    {
        "name": "Antigua-And-Barbuda",
        "code": "AG",
        "flag": "https://media.api-sports.io/flags/ag.svg",
        "arTeam": "أنتيغوا وبربودا",
        "id": 5526
    },
    {
        "name": "Argentina",
        "code": "AR",
        "flag": "https://media.api-sports.io/flags/ar.svg",
        "arTeam": "الأرجنتين",
        "id": 26
    },
    {
        "name": "Armenia",
        "code": "AM",
        "flag": "https://media.api-sports.io/flags/am.svg",
        "arTeam": "أرمينيا",
        "id": 1094
    },
    {
        "name": "Aruba",
        "code": "AW",
        "flag": "https://media.api-sports.io/flags/aw.svg",
        "arTeam": "أروبا",
        "id": 8167
    },
    {
        "name": "Australia",
        "code": "AU",
        "flag": "https://media.api-sports.io/flags/au.svg",
        "arTeam": "أستراليا",
        "id": 20
    },
    {
        "name": "Austria",
        "code": "AT",
        "flag": "https://media.api-sports.io/flags/at.svg",
        "arTeam": "النمسا",
        "id": 775
    },
    {
        "name": "Azerbaidjan",
        "code": "AZ",
        "flag": "https://media.api-sports.io/flags/az.svg",
        "arTeam": "أذربيجان",
        "id": 1096
    },
    {
        "name": "Bahrain",
        "code": "BH",
        "flag": "https://media.api-sports.io/flags/bh.svg",
        "arTeam": "البحرين",
        "id": 1547
    },
    {
        "name": "Bangladesh",
        "code": "BD",
        "flag": "https://media.api-sports.io/flags/bd.svg",
        "arTeam": "بنغلاديش",
        "id": 1560
    },
    {
        "name": "Barbados",
        "code": "BB",
        "flag": "https://media.api-sports.io/flags/bb.svg",
        "arTeam": "بربادوس",
        "id": 5527
    },
    {
        "name": "Belarus",
        "code": "BY",
        "flag": "https://media.api-sports.io/flags/by.svg",
        "arTeam": "بيلاروسيا",
        "id": 1100
    },
    {
        "name": "Belgium",
        "code": "BE",
        "flag": "https://media.api-sports.io/flags/be.svg",
        "arTeam": "بلجيكا",
        "id": 1
    },
    {
        "name": "Belize",
        "code": "BZ",
        "flag": "https://media.api-sports.io/flags/bz.svg",
        "arTeam": "بليز",
        "id": 5528
    },
    {
        "name": "Benin",
        "code": "BJ",
        "flag": "https://media.api-sports.io/flags/bj.svg",
        "arTeam": "بنين",
        "id": 1516
    },
    {
        "name": "Bermuda",
        "code": "BM",
        "flag": "https://media.api-sports.io/flags/bm.svg",
        "arTeam": "برمودا",
        "id": 5158
    },
    {
        "name": "Bhutan",
        "code": "BT",
        "flag": "https://media.api-sports.io/flags/bt.svg",
        "arTeam": "بوتان",
        "id": 1540
    },
    {
        "name": "Bolivia",
        "code": "BO",
        "flag": "https://media.api-sports.io/flags/bo.svg",
        "arTeam": "بوليفيا",
        "id": 2381
    },
    {
        "name": "Bosnia",
        "code": "BA",
        "flag": "https://media.api-sports.io/flags/ba.svg",
        "arTeam": "البوسنة والهرسك",
        "id": 1113
    },
    {
        "name": "Botswana",
        "code": "BW",
        "flag": "https://media.api-sports.io/flags/bw.svg",
        "arTeam": "بوتسوانا",
        "id": 1520
    },
    {
        "name": "Brazil",
        "code": "BR",
        "flag": "https://media.api-sports.io/flags/br.svg",
        "arTeam": "البرازيل",
        "id": 6
    },
    {
        "name": "Bulgaria",
        "code": "BG",
        "flag": "https://media.api-sports.io/flags/bg.svg",
        "arTeam": "بلغاريا",
        "id": ""
    },
    {
        "name": "Burkina-Faso",
        "code": "BF",
        "flag": "https://media.api-sports.io/flags/bf.svg",
        "arTeam": "بوركينا فاسو",
        "id": 1502
    },
    {
        "name": "Burundi",
        "code": "BI",
        "flag": "https://media.api-sports.io/flags/bi.svg",
        "arTeam": "بوروندي",
        "id": 1528
    },
    {
        "name": "Cambodia",
        "code": "KH",
        "flag": "https://media.api-sports.io/flags/kh.svg",
        "arTeam": "كمبوديا",
        "id": 1543
    },
    {
        "name": "Cameroon",
        "code": "CM",
        "flag": "https://media.api-sports.io/flags/cm.svg",
        "arTeam": "الكاميرون",
        "id": 1530
    },
    {
        "name": "Canada",
        "code": "CA",
        "flag": "https://media.api-sports.io/flags/ca.svg",
        "arTeam": "كندا",
        "id": 5529
    },
    {
        "name": "Chile",
        "code": "CL",
        "flag": "https://media.api-sports.io/flags/cl.svg",
        "arTeam": "تشيلي",
        "id": 2383
    },
    {
        "name": "China",
        "code": "CN",
        "flag": "https://media.api-sports.io/flags/cn.svg",
        "arTeam": "الصين",
        "id": 1566
    },
    {
        "name": "Chinese-Taipei",
        "code": "TW",
        "flag": "https://media.api-sports.io/flags/tw.svg",
        "arTeam": "تايوان",
        "id": 1557
    },
    {
        "name": "Colombia",
        "code": "CO",
        "flag": "https://media.api-sports.io/flags/co.svg",
        "arTeam": "كولومبيا",
        "id": 8
    },
    {
        "name": "Congo",
        "code": "CD",
        "flag": "https://media.api-sports.io/flags/cd.svg",
        "arTeam": "الكونغو",
        "id": 1517
    },
    {
        "name": "Congo-DR",
        "code": "CG",
        "flag": "https://media.api-sports.io/flags/cg.svg",
        "arTeam": "الكونغو الديمقراطية",
        "id": 1508
    },
    {
        "name": "Costa-Rica",
        "code": "CR",
        "flag": "https://media.api-sports.io/flags/cr.svg",
        "arTeam": "كوستاريكا",
        "id": 29
    },
    {
        "name": "Croatia",
        "code": "HR",
        "flag": "https://media.api-sports.io/flags/hr.svg",
        "arTeam": "كرواتيا",
        "id": 3
    },
    {
        "name": "Cuba",
        "code": "CU",
        "flag": "https://media.api-sports.io/flags/cu.svg",
        "arTeam": "كوبا",
        "id": 2388
    },
    {
        "name": "Curacao",
        "code": "CW",
        "flag": "https://media.api-sports.io/flags/cw.svg",
        "arTeam": "كوراساو",
        "id": 5530
    },
    {
        "name": "Cyprus",
        "code": "CY",
        "flag": "https://media.api-sports.io/flags/cy.svg",
        "arTeam": "قبرص",
        "id": 1106
    },
    {
        "name": "Czech-Republic",
        "code": "CZ",
        "flag": "https://media.api-sports.io/flags/cz.svg",
        "arTeam": "جمهورية التشيك",
        "id": 770
    },
    {
        "name": "Denmark",
        "code": "DK",
        "flag": "https://media.api-sports.io/flags/dk.svg",
        "arTeam": "الدنمارك",
        "id": 21
    },
    {
        "name": "Dominican-Republic",
        "code": "DO",
        "flag": "https://media.api-sports.io/flags/do.svg",
        "arTeam": "جمهورية الدومينيكان",
        "id": 5532
    },
    {
        "name": "Ecuador",
        "code": "EC",
        "flag": "https://media.api-sports.io/flags/ec.svg",
        "arTeam": "الإكوادور",
        "id": 2382
    },
    {
        "name": "Egypt",
        "code": "EG",
        "flag": "https://media.api-sports.io/flags/eg.svg",
        "arTeam": "مصر",
        "id": 32
    },
    {
        "name": "El-Salvador",
        "code": "SV",
        "flag": "https://media.api-sports.io/flags/sv.svg",
        "arTeam": "السلفادور",
        "id": 5159
    },
    {
        "name": "England",
        "code": "GB-ENG",
        "flag": "https://media.api-sports.io/flags/gb-eng.svg",
        "arTeam": "إنجلترا",
        "id": 10
    },
    {
        "name": "Estonia",
        "code": "EE",
        "flag": "https://media.api-sports.io/flags/ee.svg",
        "arTeam": "إستونيا",
        "id": 1101
    },
    {
        "name": "Eswatini",
        "code": "SZ",
        "flag": "https://media.api-sports.io/flags/sz.svg",
        "arTeam": "إسواتيني",
        "id": 2995
    },
    {
        "name": "Ethiopia",
        "code": "ET",
        "flag": "https://media.api-sports.io/flags/et.svg",
        "arTeam": "إثيوبيا",
        "id": 1506
    },
    {
        "name": "Faroe-Islands",
        "code": "FO",
        "flag": "https://media.api-sports.io/flags/fo.svg",
        "arTeam": "جزر فارو",
        "id": 1098
    },
    {
        "name": "Fiji",
        "code": "FJ",
        "flag": "https://media.api-sports.io/flags/fj.svg",
        "arTeam": "فيجي",
        "id": 5160
    },
    {
        "name": "Finland",
        "code": "FI",
        "flag": "https://media.api-sports.io/flags/fi.svg",
        "arTeam": "فنلندا",
        "id": 1099
    },
    {
        "name": "France",
        "code": "FR",
        "flag": "https://media.api-sports.io/flags/fr.svg",
        "arTeam": "فرنسا",
        "id": 2
    },
    {
        "name": "Gabon",
        "code": "GA",
        "flag": "https://media.api-sports.io/flags/ga.svg",
        "arTeam": "الغابون",
        "id": 1503
    },
    {
        "name": "Gambia",
        "code": "GM",
        "flag": "https://media.api-sports.io/flags/gm.svg",
        "arTeam": "غامبيا",
        "id": 1492
    },
    {
        "name": "Georgia",
        "code": "GE",
        "flag": "https://media.api-sports.io/flags/ge.svg",
        "arTeam": "جورجيا",
        "id": 1104
    },
    {
        "name": "Germany",
        "code": "DE",
        "flag": "https://media.api-sports.io/flags/de.svg",
        "arTeam": "ألمانيا",
        "id": 25
    },
    {
        "name": "Ghana",
        "code": "GH",
        "flag": "https://media.api-sports.io/flags/gh.svg",
        "arTeam": "غانا",
        "id": 1504
    },
    {
        "name": "Gibraltar",
        "code": "GI",
        "flag": "https://media.api-sports.io/flags/gi.svg",
        "arTeam": "جبل طارق",
        "id": 1093
    },
    {
        "name": "Greece",
        "code": "GR",
        "flag": "https://media.api-sports.io/flags/gr.svg",
        "arTeam": "اليونان",
        "id": 1117
    },
    {
        "name": "Grenada",
        "code": "GD",
        "flag": "https://media.api-sports.io/flags/gd.svg",
        "arTeam": "غرينادا",
        "id": 5533
    },
    {
        "name": "Guadeloupe",
        "code": "GP",
        "flag": "https://media.api-sports.io/flags/gp.svg",
        "arTeam": "جوادلوب",
        "id": 10983
    },
    {
        "name": "Guatemala",
        "code": "GT",
        "flag": "https://media.api-sports.io/flags/gt.svg",
        "arTeam": "غواتيمالا",
        "id": 5161
    },
    {
        "name": "Guinea",
        "code": "GN",
        "flag": "https://media.api-sports.io/flags/gn.svg",
        "arTeam": "غينيا",
        "id": 1509
    },
    {
        "name": "Haiti",
        "code": "HT",
        "flag": "https://media.api-sports.io/flags/ht.svg",
        "arTeam": "هايتي",
        "id": 2386
    },
    {
        "name": "Honduras",
        "code": "HN",
        "flag": "https://media.api-sports.io/flags/hn.svg",
        "arTeam": "هندوراس",
        "id": 4672
    },
    {
        "name": "Hong-Kong",
        "code": "HK",
        "flag": "https://media.api-sports.io/flags/hk.svg",
        "arTeam": "هونغ كونغ",
        "id": 4460
    },
    {
        "name": "Hungary",
        "code": "HU",
        "flag": "https://media.api-sports.io/flags/hu.svg",
        "arTeam": "المجر",
        "id": 769
    },
    {
        "name": "Iceland",
        "code": "IS",
        "flag": "https://media.api-sports.io/flags/is.svg",
        "arTeam": "آيسلندا",
        "id": 18
    },
    {
        "name": "India",
        "code": "IN",
        "flag": "https://media.api-sports.io/flags/in.svg",
        "arTeam": "الهند",
        "id": 1537
    },
    {
        "name": "Indonesia",
        "code": "ID",
        "flag": "https://media.api-sports.io/flags/id.svg",
        "arTeam": "إندونيسيا",
        "id": 1571
    },
    {
        "name": "Iran",
        "code": "IR",
        "flag": "https://media.api-sports.io/flags/ir.svg",
        "arTeam": "إيران",
        "id": 22
    },
    {
        "name": "Iraq",
        "code": "IQ",
        "flag": "https://media.api-sports.io/flags/iq.svg",
        "arTeam": "العراق",
        "id": 1567
    },
    {
        "name": "Ireland",
        "code": "IE",
        "flag": "https://media.api-sports.io/flags/ie.svg",
        "arTeam": "أيرلندا",
        "id": 1119
    },
    {
        "name": "Italy",
        "code": "IT",
        "flag": "https://media.api-sports.io/flags/it.svg",
        "arTeam": "إيطاليا",
        "id": 768
    },
    {
        "name": "Ivory-Coast",
        "code": "CI",
        "flag": "https://media.api-sports.io/flags/ci.svg",
        "arTeam": "ساحل العاج",
        "id": 1501
    },
    {
        "name": "Jamaica",
        "code": "JM",
        "flag": "https://media.api-sports.io/flags/jm.svg",
        "arTeam": "جامايكا",
        "id": 2385
    },
    {
        "name": "Japan",
        "code": "JP",
        "flag": "https://media.api-sports.io/flags/jp.svg",
        "arTeam": "اليابان",
        "id": 12
    },
    {
        "name": "Jordan",
        "code": "JO",
        "flag": "https://media.api-sports.io/flags/jo.svg",
        "arTeam": "الأردن",
        "id": 1548
    },
    {
        "name": "Kazakhstan",
        "code": "KZ",
        "flag": "https://media.api-sports.io/flags/kz.svg",
        "arTeam": "كازاخستان",
        "id": 1095
    },
    {
        "name": "Kenya",
        "code": "KE",
        "flag": "https://media.api-sports.io/flags/ke.svg",
        "arTeam": "كينيا",
        "id": 1511
    },
    {
        "name": "Kosovo",
        "code": "XK",
        "flag": "https://media.api-sports.io/flags/xk.svg",
        "arTeam": "كوسوفو",
        "id": 1111
    },
    {
        "name": "Kuwait",
        "code": "KW",
        "flag": "https://media.api-sports.io/flags/kw.svg",
        "arTeam": "الكويت",
        "id": 1570
    },
    {
        "name": "Kyrgyzstan",
        "code": "KG",
        "flag": "https://media.api-sports.io/flags/kg.svg",
        "arTeam": "قيرغيزستان",
        "id": 1554
    },
    {
        "name": "Laos",
        "code": "LA",
        "flag": "https://media.api-sports.io/flags/la.svg",
        "arTeam": "لاوس",
        "id": 1558
    },
    {
        "name": "Latvia",
        "code": "LV",
        "flag": "https://media.api-sports.io/flags/lv.svg",
        "arTeam": "لاتفيا",
        "id": 1092
    },
    {
        "name": "Lebanon",
        "code": "LB",
        "flag": "https://media.api-sports.io/flags/lb.svg",
        "arTeam": "لبنان",
        "id": 1551
    },
    {
        "name": "Lesotho",
        "code": "LS",
        "flag": "https://media.api-sports.io/flags/ls.svg",
        "arTeam": "ليسوتو",
        "id": 1518
    },
    {
        "name": "Liberia",
        "code": "LR",
        "flag": "https://media.api-sports.io/flags/lr.svg",
        "arTeam": "ليبيريا",
        "id": 1525
    },
    {
        "name": "Libya",
        "code": "LY",
        "flag": "https://media.api-sports.io/flags/ly.svg",
        "arTeam": "ليبيا",
        "id": 1526
    },
    {
        "name": "Liechtenstein",
        "code": "LI",
        "flag": "https://media.api-sports.io/flags/li.svg",
        "arTeam": "ليختنشتاين",
        "id": 1107
    },
    {
        "name": "Lithuania",
        "code": "LT",
        "flag": "https://media.api-sports.io/flags/lt.svg",
        "arTeam": "ليتوانيا",
        "id": 1097
    },
    {
        "name": "Luxembourg",
        "code": "LU",
        "flag": "https://media.api-sports.io/flags/lu.svg",
        "arTeam": "لوكسمبورغ",
        "id": 1102
    },
    {
        "name": "Macao",
        "code": "MO",
        "flag": "https://media.api-sports.io/flags/mo.svg",
        "arTeam": "ماكاو",
        "id": 9420
    },
    {
        "name": "Macedonia",
        "code": "MK",
        "flag": "https://media.api-sports.io/flags/mk.svg",
        "arTeam": "مقدونيا",
        "id": ""
    },
    {
        "name": "Malawi",
        "code": "MW",
        "flag": "https://media.api-sports.io/flags/mw.svg",
        "arTeam": "مالاوي",
        "id": 1495
    },
    {
        "name": "Malaysia",
        "code": "MY",
        "flag": "https://media.api-sports.io/flags/my.svg",
        "arTeam": "ماليزيا",
        "id": 1538
    },
    {
        "name": "Maldives",
        "code": "MV",
        "flag": "https://media.api-sports.io/flags/mv.svg",
        "arTeam": "المالديف",
        "id": 1549
    },
    {
        "name": "Mali",
        "code": "ML",
        "flag": "https://media.api-sports.io/flags/ml.svg",
        "arTeam": "مالي",
        "id": 1500
    },
    {
        "name": "Malta",
        "code": "MT",
        "flag": "https://media.api-sports.io/flags/mt.svg",
        "arTeam": "مالطا",
        "id": 1112
    },
    {
        "name": "Mauritania",
        "code": "MR",
        "flag": "https://media.api-sports.io/flags/mr.svg",
        "arTeam": "موريتانيا",
        "id": 1491
    },
    {
        "name": "Mauritius",
        "code": "MU",
        "flag": "https://media.api-sports.io/flags/mu.svg",
        "arTeam": "موريشيوس",
        "id": 1497
    },
    {
        "name": "Mexico",
        "code": "MX",
        "flag": "https://media.api-sports.io/flags/mx.svg",
        "arTeam": "المكسيك",
        "id": 16
    },
    {
        "name": "Moldova",
        "code": "MD",
        "flag": "https://media.api-sports.io/flags/md.svg",
        "arTeam": "مولدوفا",
        "id": 1114
    },
    {
        "name": "Mongolia",
        "code": "MN",
        "flag": "https://media.api-sports.io/flags/mn.svg",
        "arTeam": "منغوليا",
        "id": 5534
    },
    {
        "name": "Montenegro",
        "code": "ME",
        "flag": "https://media.api-sports.io/flags/me.svg",
        "arTeam": "مونتينيغرو",
        "id": 1109
    },
    {
        "name": "Morocco",
        "code": "MA",
        "flag": "https://media.api-sports.io/flags/ma.svg",
        "arTeam": "المغرب",
        "id": 31
    },
    {
        "name": "Myanmar",
        "code": "MM",
        "flag": "https://media.api-sports.io/flags/mm.svg",
        "arTeam": "ميانمار",
        "id": 1556
    },
    {
        "name": "Namibia",
        "code": "NA",
        "flag": "https://media.api-sports.io/flags/na.svg",
        "arTeam": "ناميبيا",
        "id": 1493
    },
    {
        "name": "Nepal",
        "code": "NP",
        "flag": "https://media.api-sports.io/flags/np.svg",
        "arTeam": "نيبال",
        "id": 1545
    },
    {
        "name": "Netherlands",
        "code": "NL",
        "flag": "https://media.api-sports.io/flags/nl.svg",
        "arTeam": "هولندا",
        "id": ""
    },
    {
        "name": "New-Zealand",
        "code": "NZ",
        "flag": "https://media.api-sports.io/flags/nz.svg",
        "arTeam": "نيوزيلندا",
        "id": 4673
    },
    {
        "name": "Nicaragua",
        "code": "NI",
        "flag": "https://media.api-sports.io/flags/ni.svg",
        "arTeam": "نيكاراغوا",
        "id": 5164
    },
    {
        "name": "Nigeria",
        "code": "NG",
        "flag": "https://media.api-sports.io/flags/ng.svg",
        "arTeam": "نيجيريا",
        "id": 19
    },
    {
        "name": "Northern-Ireland",
        "code": "GB-NIR",
        "flag": "https://media.api-sports.io/flags/gb-nir.svg",
        "arTeam": "أيرلندا الشمالية",
        "id": 771
    },
    {
        "name": "Norway",
        "code": "NO",
        "flag": "https://media.api-sports.io/flags/no.svg",
        "arTeam": "النرويج",
        "id": 1090
    },
    {
        "name": "Oman",
        "code": "OM",
        "flag": "https://media.api-sports.io/flags/om.svg",
        "arTeam": "عمان",
        "id": 1552
    },
    {
        "name": "Pakistan",
        "code": "PK",
        "flag": "https://media.api-sports.io/flags/pk.svg",
        "arTeam": "باكستان",
        "id": 5535
    },
    {
        "name": "Palestine",
        "code": "PS",
        "flag": "https://media.api-sports.io/flags/ps.svg",
        "arTeam": "فلسطين",
        "id": 1562
    },
    {
        "name": "Panama",
        "code": "PA",
        "flag": "https://media.api-sports.io/flags/pa.svg",
        "arTeam": "بنما",
        "id": 11
    },
    {
        "name": "Paraguay",
        "code": "PY",
        "flag": "https://media.api-sports.io/flags/py.svg",
        "arTeam": "باراغواي",
        "id": ""
    },
    {
        "name": "Peru",
        "code": "PE",
        "flag": "https://media.api-sports.io/flags/pe.svg",
        "arTeam": "بيرو",
        "id": 30
    },
    {
        "name": "Philippines",
        "code": "PH",
        "flag": "https://media.api-sports.io/flags/ph.svg",
        "arTeam": "الفلبين",
        "id": 1555
    },
    {
        "name": "Poland",
        "code": "PL",
        "flag": "https://media.api-sports.io/flags/pl.svg",
        "arTeam": "بولندا",
        "id": 24
    },
    {
        "name": "Portugal",
        "code": "PT",
        "flag": "https://media.api-sports.io/flags/pt.svg",
        "arTeam": "البرتغال",
        "id": 27
    },
    {
        "name": "Qatar",
        "code": "QA",
        "flag": "https://media.api-sports.io/flags/qa.svg",
        "arTeam": "قطر",
        "id": 1569
    },
    {
        "name": "Romania",
        "code": "RO",
        "flag": "https://media.api-sports.io/flags/ro.svg",
        "arTeam": "رومانيا",
        "id": 774
    },
    {
        "name": "Russia",
        "code": "RU",
        "flag": "https://media.api-sports.io/flags/ru.svg",
        "arTeam": "روسيا",
        "id": 4
    },
    {
        "name": "Rwanda",
        "code": "RW",
        "flag": "https://media.api-sports.io/flags/rw.svg",
        "arTeam": "رواندا",
        "id": 1514
    },
    {
        "name": "San-Marino",
        "code": "SM",
        "flag": "https://media.api-sports.io/flags/sm.svg",
        "arTeam": "سان مارينو",
        "id": 1115
    },
    {
        "name": "Saudi-Arabia",
        "code": "SA",
        "flag": "https://media.api-sports.io/flags/sa.svg",
        "arTeam": "السعودية",
        "id": 23
    },
    {
        "name": "Scotland",
        "code": "GB-SCT",
        "flag": "https://media.api-sports.io/flags/gb-sct.svg",
        "arTeam": "اسكتلندا",
        "id": 1108
    },
    {
        "name": "Senegal",
        "code": "SN",
        "flag": "https://media.api-sports.io/flags/sn.svg",
        "arTeam": "السنغال",
        "id": 13
    },
    {
        "name": "Serbia",
        "code": "RS",
        "flag": "https://media.api-sports.io/flags/rs.svg",
        "arTeam": "صربيا",
        "id": 14
    },
    {
        "name": "Singapore",
        "code": "SG",
        "flag": "https://media.api-sports.io/flags/sg.svg",
        "arTeam": "سنغافورة",
        "id": 1546
    },
    {
        "name": "Slovakia",
        "code": "SK",
        "flag": "https://media.api-sports.io/flags/sk.svg",
        "arTeam": "سلوفاكيا",
        "id": 773
    },
    {
        "name": "Slovenia",
        "code": "SI",
        "flag": "https://media.api-sports.io/flags/si.svg",
        "arTeam": "سلوفينيا",
        "id": 1091
    },
    {
        "name": "Somalia",
        "code": "SO",
        "flag": "https://media.api-sports.io/flags/so.svg",
        "arTeam": "الصومال",
        "id": 8050
    },
    {
        "name": "South-Africa",
        "code": "ZA",
        "flag": "https://media.api-sports.io/flags/za.svg",
        "arTeam": "جنوب أفريقيا",
        "id": 1531
    },
    {
        "name": "South-Korea",
        "code": "KR",
        "flag": "https://media.api-sports.io/flags/kr.svg",
        "arTeam": "كوريا الجنوبية",
        "id": 17
    },
    {
        "name": "Spain",
        "code": "ES",
        "flag": "https://media.api-sports.io/flags/es.svg",
        "arTeam": "إسبانيا",
        "id": 9
    },
    {
        "name": "Sudan",
        "code": "SD",
        "flag": "https://media.api-sports.io/flags/sd.svg",
        "arTeam": "السودان",
        "id": 1510
    },
    {
        "name": "Surinam",
        "code": "SR",
        "flag": "https://media.api-sports.io/flags/sr.svg",
        "arTeam": "سورينام",
        "id": 8171
    },
    {
        "name": "Sweden",
        "code": "SE",
        "flag": "https://media.api-sports.io/flags/se.svg",
        "arTeam": "السويد",
        "id": 5
    },
    {
        "name": "Switzerland",
        "code": "CH",
        "flag": "https://media.api-sports.io/flags/ch.svg",
        "arTeam": "سويسرا",
        "id": 15
    },
    {
        "name": "Syria",
        "code": "SY",
        "flag": "https://media.api-sports.io/flags/sy.svg",
        "arTeam": "سوريا",
        "id": 1565
    },
    {
        "name": "Tajikistan",
        "code": "TJ",
        "flag": "https://media.api-sports.io/flags/tj.svg",
        "arTeam": "طاجيكستان",
        "id": 1536
    },
    {
        "name": "Tanzania",
        "code": "TZ",
        "flag": "https://media.api-sports.io/flags/tz.svg",
        "arTeam": "تنزانيا",
        "id": 1489
    },
    {
        "name": "Thailand",
        "code": "TH",
        "flag": "https://media.api-sports.io/flags/th.svg",
        "arTeam": "تايلاند",
        "id": 1564
    },
    {
        "name": "Togo",
        "code": "TG",
        "flag": "https://media.api-sports.io/flags/tg.svg",
        "arTeam": "توجو",
        "id": 1534
    },
    {
        "name": "Trinidad-And-Tobago",
        "code": "TT",
        "flag": "https://media.api-sports.io/flags/tt.svg",
        "arTeam": "ترينيداد وتوباجو",
        "id": 5168
    },
    {
        "name": "Tunisia",
        "code": "TN",
        "flag": "https://media.api-sports.io/flags/tn.svg",
        "arTeam": "تونس",
        "id": 28
    },
    {
        "name": "Turkey",
        "code": "TR",
        "flag": "https://media.api-sports.io/flags/tr.svg",
        "arTeam": "تركيا",
        "id": ""
    },
    {
        "name": "Turkmenistan",
        "code": "TM",
        "flag": "https://media.api-sports.io/flags/tm.svg",
        "arTeam": "تركمانستان",
        "id": 1539
    },
    {
        "name": "Uganda",
        "code": "UG",
        "flag": "https://media.api-sports.io/flags/ug.svg",
        "arTeam": "أوغندا",
        "id": 1519
    },
    {
        "name": "Ukraine",
        "code": "UA",
        "flag": "https://media.api-sports.io/flags/ua.svg",
        "arTeam": "أوكرانيا",
        "id": 772
    },
    {
        "name": "United-Arab-Emirates",
        "code": "AE",
        "flag": "https://media.api-sports.io/flags/ae.svg",
        "arTeam": "الإمارات العربية المتحدة",
        "id": 1563
    },
    {
        "name": "Uruguay",
        "code": "UY",
        "flag": "https://media.api-sports.io/flags/uy.svg",
        "arTeam": "أوروغواي",
        "id": 7
    },
    {
        "name": "USA",
        "code": "US",
        "flag": "https://media.api-sports.io/flags/us.svg",
        "arTeam": "الولايات المتحدة الأمريكية",
        "id": 2384
    },
    {
        "name": "Uzbekistan",
        "code": "UZ",
        "flag": "https://media.api-sports.io/flags/uz.svg",
        "arTeam": "أوزبكستان",
        "id": 1568
    },
    {
        "name": "Venezuela",
        "code": "VE",
        "flag": "https://media.api-sports.io/flags/ve.svg",
        "arTeam": "فنزويلا",
        "id": 2379
    },
    {
        "name": "Vietnam",
        "code": "VN",
        "flag": "https://media.api-sports.io/flags/vn.svg",
        "arTeam": "فيتنام",
        "id": 1542
    },
    {
        "name": "Wales",
        "code": "GB-WLS",
        "flag": "https://media.api-sports.io/flags/gb-wls.svg",
        "arTeam": "ويلز",
        "id": 767
    },
    {
        "name": "Yemen",
        "code": "YE",
        "flag": "https://media.api-sports.io/flags/ye.svg",
        "arTeam": "اليمن",
        "id": 1550
    },
    {
        "name": "Zambia",
        "code": "ZM",
        "flag": "https://media.api-sports.io/flags/zm.svg",
        "arTeam": "زامبيا",
        "id": 1507
    },
    {
        "name": "Zimbabwe",
        "code": "ZW",
        "flag": "https://media.api-sports.io/flags/zw.svg",
        "arTeam": "زيمبابوي",
        "id": 1522
    }
]

async function fetchDataAndSaveToFirebase(d) {
    try {
        const response = await fetch(`https://v3.football.api-sports.io/fixtures?date=${d}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": process.env.FOOTBALL_API_KEY
            }
        })

        const data = await response.json();
        const arrId = [2, 3, 39, 61, 78, 135, 140];
        const filteredData = data.response.filter(item => arrId.includes(item.league.id));

        // Create a map for fast lookups
        const teamMap = new Map(allTeams.map(team => [team.id, team]));

        const processedResponse = filteredData.map((match) => {
            // Adding a new property to the "home" and "away" teams
            const homeTeam = teamMap.get(match.teams.home.id);
            if (homeTeam) {
                match.teams.home.arName = homeTeam.arTeam;
            }

            const awayTeam = teamMap.get(match.teams.away.id);
            if (awayTeam) {
                match.teams.away.arName = awayTeam.arTeam;
            }
            // Return the updated match object
            return match;
        });

        await setDoc(doc(db, "fixtures", d), { fixtures: processedResponse });

        //await setDoc(doc(db, "fixtures", "live"), data);
        console.log(`Data ${d} saved to Firebase successfully`);
    } catch (error) {
        console.error('Error fetching or saving data:', error);
    }

    await delay(500);
}

// Run every 15 minutes
setInterval(() => {
    const today = new Date();
const formattedDate = today.toLocaleDateString('en-CA');
    fetchDataAndSaveToFirebase(formattedDate);
}, 15 * 60 * 1000); // 15 minutes in milliseconds
//fetchDataAndSaveToFirebase(formattedDate);
