/* 日期转换为农历日期显示 */
const lunar = {
  tg: "甲乙丙丁戊己庚辛壬癸",
  dz: "子丑寅卯辰巳午未申酉戌亥",
  number: "一二三四五六七八九十",
  year: "鼠牛虎兔龙蛇马羊猴鸡狗猪",
  month: "正二三四五六七八九十冬腊",
  monthadd: [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  calendar: [
    0xa4b,
    0x5164b,
    0x6a5,
    0x6d4,
    0x415b5,
    0x2b6,
    0x957,
    0x2092f,
    0x497,
    0x60c96,
    0xd4a,
    0xea5,
    0x50da9,
    0x5ad,
    0x2b6,
    0x3126e,
    0x92e,
    0x7192d,
    0xc95,
    0xd4a,
    0x61b4a,
    0xb55,
    0x56a,
    0x4155b,
    0x25d,
    0x92d,
    0x2192b,
    0xa95,
    0x71695,
    0x6ca,
    0xb55,
    0x50ab5,
    0x4da,
    0xa5b,
    0x30a57,
    0x52b,
    0x8152a,
    0xe95,
    0x6aa,
    0x615aa,
    0xab5,
    0x4b6,
    0x414ae,
    0xa57,
    0x526,
    0x31d26,
    0xd95,
    0x70b55,
    0x56a,
    0x96d,
    0x5095d,
    0x4ad,
    0xa4d,
    0x41a4d,
    0xd25,
    0x81aa5,
    0xb54,
    0xb6a,
    0x612da,
    0x95b,
    0x49b,
    0x41497,
    0xa4b,
    0xa164b,
    0x6a5,
    0x6d4,
    0x615b4,
    0xab6,
    0x957,
    0x5092f,
    0x497,
    0x64b,
    0x30d4a,
    0xea5,
    0x80d65,
    0x5ac,
    0xab6,
    0x5126d,
    0x92e,
    0xc96,
    0x41a95,
    0xd4a,
    0xda5,
    0x20b55,
    0x56a,
    0x7155b,
    0x25d,
    0x92d,
    0x5192b,
    0xa95,
    0xb4a,
    0x416aa,
    0xad5,
    0x90ab5,
    0x4ba,
    0xa5b,
    0x60a57,
    0x52b,
    0xa93,
    0x40e95
  ]
};

function getLunarDate(date) {
  let year, month, day;
  if (!date) {
    (date = new Date()),
      (year = date.getFullYear()),
      (month = date.getMonth()),
      (day = date.getDate());
  } else {
    (date = date.split("-")),
      (year = parseInt(date[0])),
      (month = date[1] - 1),
      (day = parseInt(date[2]));
  }

  if (year < 1921 || year > 2020) {
    return {};
  }

  let total, m, n, k, bit, lunarYear, lunarMonth, lunarDay;
  let isEnd = false;
  let tmp = year;
  if (tmp < 1900) {
    tmp += 1900;
  }
  total =
    (tmp - 1921) * 365 +
    Math.floor((tmp - 1921) / 4) +
    lunar.monthadd[month] +
    day -
    38;
  if (year % 4 == 0 && month > 1) {
    total++;
  }
  for (m = 0; ; m++) {
    k = lunar.calendar[m] < 0xfff ? 11 : 12;
    for (n = k; n >= 0; n--) {
      bit = (lunar.calendar[m] >> n) & 1;
      if (total <= 29 + bit) {
        isEnd = true;
        break;
      }
      total = total - 29 - bit;
    }
    if (isEnd) break;
  }
  lunarYear = 1921 + m;
  lunarMonth = k - n + 1;
  lunarDay = total;
  if (k == 12) {
    if (lunarMonth == Math.floor(lunar.calendar[m] / 0x10000) + 1) {
      lunarMonth = 1 - lunarMonth;
    }
    if (lunarMonth > Math.floor(lunar.calendar[m] / 0x10000) + 1) {
      lunarMonth--;
    }
  }
  return {
    lunarYear: lunarYear,
    lunarMonth: lunarMonth,
    lunarDay: lunarDay
  };
}

function getLunarDateString(lunarDate) {
  if (!lunarDate.lunarDay) return;
  let data = {};
  let lunarYear = lunarDate.lunarYear;
  let lunarMonth = lunarDate.lunarMonth;
  let lunarDay = lunarDate.lunarDay;

  data.tg = lunar.tg.charAt((lunarYear - 4) % 10);
  data.dz = lunar.dz.charAt((lunarYear - 4) % 12);
  data.year = lunar.year.charAt((lunarYear - 4) % 12);
  data.month =
    lunarMonth < 1
      ? "(闰)" + lunar.month.charAt(-lunarMonth - 1)
      : lunar.month.charAt(lunarMonth - 1);

  data.day =
    lunarDay < 11 ? "初" : lunarDay < 20 ? "十" : lunarDay < 30 ? "廿" : "三十";

  if (lunarDay % 10 != 0 || lunarDay == 10) {
    data.day += lunar.number.charAt((lunarDay - 1) % 10);
  }

  return data;
}
export { lunar, getLunarDate, getLunarDateString };
/* var lunarDate = getLunarDate('2019-11-8')
var lunarDateString = getLunarDateString(lunarDate)
var today = lunarDateString.tg + lunarDateString.dz + '年' + lunarDateString.month + '月' + lunarDateString.day
console.log(lunarDate);
console.log(today); */
