/**
 * DeidaraTV Matches Data
 * =======================
 * 
 * Instructions to add/edit matches:
 * 1. Fill in the team names and flag image URLs.
 * 2. Set 'dateTime' in the format: "YYYY-MM-DDTHH:MM:SS" (e.g., "2026-06-14T22:00:00").
 *    The status (Not Started / Live / Ended) will be calculated automatically based on this time:
 *    - Before the start time: "لم تبدأ بعد" (Not Started)
 *    - From start time up to 2 hours and 30 minutes: "جارية" (Live)
 *    - After 2 hours and 30 minutes from start time: "انتهت" (Ended)
 * 3. Add streaming servers with their iframe/player URLs in the 'servers' array.
 * 4. Add the scores if the match is live or ended. If the match hasn't started yet, the scores will be hidden.
 */

const MATCHES_DATA = [
  {
    id: 1,
    team1: {
      name: "المغرب",
      logo: "https://flagcdn.com/w160/ma.png"
    },
    team2: {
      name: "البرازيل",
      logo: "https://flagcdn.com/w160/br.png"
    },
    team1Score: 1,
    team2Score: 1,
    // Live Match: Started 1 hour ago relative to current time 04:12 (starts at 03:12)
    dateTime: "2026-06-14T02:00:00",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 1",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" },
      { name: "سيرفر 2", url: "https://p4.panda-hd.online/albaplayer/extra-1" },
      { name: "سيرفر 3 (متعدد)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 2,
    team1: {
      name: "سويسرا",
      logo: "https://flagcdn.com/w160/ch.png"
    },
    team2: {
      name: "قطر",
      logo: "https://flagcdn.com/w160/qa.png"
    },
    team1Score: 1,
    team2Score: 1,
    // Ended Match: Started 5 hours ago relative to current time 04:12 (starts at 23:12 of previous day)
    dateTime: "2026-06-13T23:12:00",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 2",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 3,
    team1: {
      name: "باراغواي",
      logo: "https://flagcdn.com/w160/py.png"
    },
    team2: {
      name: "الولايات المتحدة",
      logo: "https://flagcdn.com/w160/us.png"
    },
    team1Score: 0,
    team2Score: 0,
    // Upcoming Match: Starts in 3 hours relative to current time 04:12 (starts at 07:12)
    dateTime: "2026-06-14T07:12:00",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD Max 1",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" }
    ]
  },
  {
    id: 4,
    team1: {
      name: "إسبانيا",
      logo: "https://flagcdn.com/w160/es.png"
    },
    team2: {
      name: "إيطاليا",
      logo: "https://flagcdn.com/w160/it.png"
    },
    team1Score: 0,
    team2Score: 0,
    // Upcoming Match: Starts in 6 hours relative to current time 04:12 (starts at 10:12)
    dateTime: "2026-06-14T10:12:00",
    league: "كأس العالم - المجموعات",
    channel: "beIN Sports HD 1 Premium",
    servers: [
      { name: "سيرفر 1 (رئيسي)", url: "https://z1.depoooo.com/albaplayer/bein-1/?serv=1" },
      { name: "سيرفر 2", url: "https://p4.panda-hd.online/albaplayer/extra-1" }
    ]
  }
];
