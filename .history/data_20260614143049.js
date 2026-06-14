/**
 * DeidaraTV Configuration & Matches Data
 * ========================================
 * 
 * IMPORTANT: All match times (dateTime) MUST be in UTC/GMT (with "Z" suffix).
 * The website will automatically convert and display them in each visitor's local timezone.
 * 
 * Example: If a match starts at 21:00 Morocco time (GMT+1), enter "2026-06-14T20:00:00Z"
 *          If a match starts at 21:00 Saudi time (GMT+3), enter "2026-06-14T18:00:00Z"
 */

const MATCHES_DATA = [
  {
    id: 1,
    team1: {
      name: "الولايات المتحدة",
      logo: "https://flagcdn.com/w160/us.png"
    },
    team2: {
      name: "باراغواي",
      logo: "https://flagcdn.com/w160/py.png"
    },
    team1Score: 4,
    team2Score: 1,
    dateTime: "2026-06-13T01:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 1 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 2,
    team1: {
      name: "قطر",
      logo: "https://flagcdn.com/w160/qa.png"
    },
    team2: {
      name: "سويسرا",
      logo: "https://flagcdn.com/w160/ch.png"
    },
    team1Score: 1,
    team2Score: 1,
    dateTime: "2026-06-13T19:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 2 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 3,
    team1: {
      name: "البرازيل",
      logo: "https://flagcdn.com/w160/br.png"
    },
    team2: {
      name: "المغرب",
      logo: "https://flagcdn.com/w160/ma.png"
    },
    team1Score: 1,
    team2Score: 1,
    dateTime: "2026-06-13T22:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 1 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" },
      { name: "سيرفر 2", url: "https://p4.panda-hd.online/albaplayer/extra-1" }
    ]
  },
  {
    id: 4,
    team1: {
      name: "هايتي",
      logo: "https://flagcdn.com/w160/ht.png"
    },
    team2: {
      name: "اسكتلندا",
      logo: "https://flagcdn.com/w160/gb-sct.png"
    },
    team1Score: 0,
    team2Score: 1,
    dateTime: "2026-06-14T01:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 3 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 5,
    team1: {
      name: "أستراليا",
      logo: "https://flagcdn.com/w160/au.png"
    },
    team2: {
      name: "تركيا",
      logo: "https://flagcdn.com/w160/tr.png"
    },
    team1Score: 2,
    team2Score: 0,
    dateTime: "2026-06-14T04:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 1 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 6,
    team1: {
      name: "ألمانيا",
      logo: "https://flagcdn.com/w160/de.png"
    },
    team2: {
      name: "كوراساو",
      logo: "https://flagcdn.com/w160/cw.png"
    },
    team1Score: 0,
    team2Score: 0,
    dateTime: "2026-06-14T17:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 1 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 7,
    team1: {
      name: "هولندا",
      logo: "https://flagcdn.com/w160/nl.png"
    },
    team2: {
      name: "اليابان",
      logo: "https://flagcdn.com/w160/jp.png"
    },
    team1Score: 0,
    team2Score: 0,
    dateTime: "2026-06-14T20:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 2 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 8,
    team1: {
      name: "ساحل العاج",
      logo: "https://flagcdn.com/w160/ci.png"
    },
    team2: {
      name: "الإكوادور",
      logo: "https://flagcdn.com/w160/ec.png"
    },
    team1Score: 0,
    team2Score: 0,
    dateTime: "2026-06-14T23:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 3 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 9,
    team1: {
      name: "السويد",
      logo: "https://flagcdn.com/w160/se.png"
    },
    team2: {
      name: "تونس",
      logo: "https://flagcdn.com/w160/tn.png"
    },
    team1Score: 0,
    team2Score: 0,
    dateTime: "2026-06-15T02:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 1 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 10,
    team1: {
      name: "إسبانيا",
      logo: "https://flagcdn.com/w160/es.png"
    },
    team2: {
      name: "الرأس الأخضر",
      logo: "https://flagcdn.com/w160/cv.png"
    },
    team1Score: 0,
    team2Score: 0,
    dateTime: "2026-06-15T16:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 1 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 11,
    team1: {
      name: "بلجيكا",
      logo: "https://flagcdn.com/w160/be.png"
    },
    team2: {
      name: "مصر",
      logo: "https://flagcdn.com/w160/eg.png"
    },
    team1Score: 0,
    team2Score: 0,
    dateTime: "2026-06-15T19:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 2 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 12,
    team1: {
      name: "المملكة العربية السعودية",
      logo: "https://flagcdn.com/w160/sa.png"
    },
    team2: {
      name: "أوروغواي",
      logo: "https://flagcdn.com/w160/uy.png"
    },
    team1Score: 0,
    team2Score: 0,
    dateTime: "2026-06-15T22:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 1 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 13,
    team1: {
      name: "إيران",
      logo: "https://flagcdn.com/w160/ir.png"
    },
    team2: {
      name: "نيوزيلندا",
      logo: "https://flagcdn.com/w160/nz.png"
    },
    team1Score: 0,
    team2Score: 0,
    dateTime: "2026-06-16T01:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 3 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 14,
    team1: {
      name: "فرنسا",
      logo: "https://flagcdn.com/w160/fr.png"
    },
    team2: {
      name: "السنغال",
      logo: "https://flagcdn.com/w160/sn.png"
    },
    team1Score: 0,
    team2Score: 0,
    dateTime: "2026-06-16T19:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 1 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 15,
    team1: {
      name: "العراق",
      logo: "https://flagcdn.com/w160/iq.png"
    },
    team2: {
      name: "النرويج",
      logo: "https://flagcdn.com/w160/no.png"
    },
    team1Score: 0,
    team2Score: 0,
    dateTime: "2026-06-16T22:00:00Z",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 2 Max",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  }
];
