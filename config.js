import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import moment from 'moment-timezone';
import PhoneNumber from 'awesome-phonenumber';

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH');
let wibm = moment.tz('Asia/Jakarta').format('mm');
let wibs = moment.tz('Asia/Jakarta').format('ss');
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`;

let d = new Date(new Date + 3600000);
let locale = 'id';
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5];
let week = d.toLocaleDateString(locale, { weekday: 'long' });
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

global.owner = [
  ['6285786539008', 'Fall', true]
];
global.mods = [];
global.prems = ['6285786539008'];
global.nomorbot = '6285712408309';
global.nomorown = '6285786539008'; // Owner Utama
//global.nomorown1 = '628570442454'; 
//global.nomorown2 = '628570442454';
global.nomorwa = '6285786539008';

global.readMore = readMore;
global.author = 'Fall';
global.namebot = 'Kreybot-MD';
global.wm = '© Kreybot By Fall';
global.watermark = wm;
global.wm2 = 'Fall';
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`;
global.bottime = `Time: ${wktuwib}`;
global.titlebot = 'Kreybot-MD';
global.stickpack = 'Kreybot by Fall';
global.stickauth = '© Fall';
global.week = `${week} ${date}`;
global.wibb = `${wktuwib}`;
global.nameown1 = 'Fall';
global.nameown2 = 'Fall';
global.Linkgc = 'Bentar';
global.lynk = '-';
//Link Social Media Ganti Aja Kalau Ga Punya Biarin Aja
global.sig = 'https://www.instagram.com/fahrul_mt'; //instagram
global.sgh = 'https://github.com/sukmaga'; //github
global.sgc = 'https://chat.whatsapp.com/'; //group whatsapp
global.sdc = '-'; //discord
global.snh = 'https://youtube.com/'; //youtube
//Donasi/Payment
global.pdana = '0857-8653-9008'; // dana
global.povo = '-';
global.pgopay = '0857-8653-9008'; // gopay
global.plinkaja = '-'; //link aja
global.ppulsa = '0857-8653-9008'; // pulsa
global.ppulsa2 = '0857-8653-9008'; //pulsa 2
// wait proses
global.stiker_wait = '_Sedang Di Proses, Mohon Tunggu_.....';
global.wait = '_Sedang Di Proses, Mohon Tunggu_....';
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!';
global.multiplier = 69; // The higher, The harder levelup
//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ TAMPILAN ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.LyAtas1 = '•⟅━━━ ❨'
global.LyAtas2 = '❩'
global.Ly = '┃'
global.lybwh = '┗━━┈┈ ⳻⳻'
global.sym = '◈▻'
global.sym2 = '➭'
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.dashmenu = '❏ *DASHBOARD* ❏'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = '✦'
global.htki = '『' // Hiasan Titile (KIRI)
global.htka = '』' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '✦'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']



global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
  let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
};

global.uptime = 'u2069112-9044f062bc338a615a82ed6b'; // Masukin APIKEY uptimerobot kamu disini ===== https://uptimerobot.com/dashboard?ref=website-header#mySettings
global.openai = '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';  //api key bisa didapatkan dari https://openai.com/api/
global.org = 'org-zQBKfVg4odom4Qt7UMsFSJHX';  //openAI Organization name
global.deepai = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'; // https://deepai.org
global.zenzkey = 'zenzkey_1ec92f71d3bb';
global.lolkey = 'SGWN';
global.rose = '7bbbf7df4aaae5c9f807b347';
global.xzn = 'fahrul12'; 
global.zeltoria = 'Elistz'//ganti dengan apikey yang kamu dapat dari https://xzn.wtf
global.APIs = {
  lol: 'https://api.lolhuman.xyz',
  rose: 'https://api.itsrose.site',
  xzn: 'https://xzn.wtf',
  zeltoria: 'https://api.zeltoria.my.id'
};

global.APIKeys = { 
  'https://api.lolhuman.xyz': 'SGWN',
  'https://api.itsrose.site': 'Rs-Danil_Elistz'
};

global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
global.dpdf = 'application/pdf';
global.drtf = 'text/rtf';
global.optsnsfw = true;
global.premnsfw = true;
// foto/image bot
//ganti aja kalau ga tau cara gantinya buka telegra.ph upload
//foto nya di situ terus salin link nya kesini

global.fsizedoc = '999';
global.fpagedoc = '999';

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
