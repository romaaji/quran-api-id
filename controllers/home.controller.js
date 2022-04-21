const config = require("../config/config");

const endpoints = [
  {
    path: `http://quran.romaa.my.id/surahs`,
    description: "dapatkan semua surah: /surahs",
  },
  {
    path: `http://quran.romaa.my.id/surahs/112`,
    description:
      "dapatkan surah tertentu menggunakan nomor surah dalam quran (1 - 114): /surahs/{nomorSurah}",
  },
  {
    path: `http://quran.romaa.my.id/surahs/112/ayahs`,
    description:
      "dapatkan semua ayat dari surah tertentu: /surahs/{numberSurah}/ayahs",
  },
  {
    path: `http://quran.romaa.my.id/surahs/112/ayahs/2`,
    description:
      "dapatkan ayat tertentu dari surah tertentu: /surahs/{numberSurah}/ayahs/{numberAyah}",
  },
  {
    path: `http://quran.romaa.my.id/random`,
    description: "dapatkan ayat acak: /random",
  },
];

const home = (req, res) => {
  res.json({
    endpoints,
    maintainer: "R. Aji Satrya",
    source: "https://github.com/romaaji/quran-api-id/",
  });
};

module.exports = { home };
