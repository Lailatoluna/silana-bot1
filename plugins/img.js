import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
const prohibited = ['caca', 'polla', 'porno', 'porn', 'zb', 'trma', 'zbi zabi', 'puta', 'puto', 'ليونيل', 'ميسي', 'إسرائيل','pussy', 'hentai', 'pene', 'israel', 'xn xx', 'zoofilia', 'mia khalifa', 'سكس', '9lawi', 'بورنو', 'إباحي', 'ميا خليفة', 'pornhub', 'xnxx', 'xvideos', 'messi', 'vagina', 'marsha may', 'misha cross', 'sexmex', 'furry', 'messi Lionel', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia', 'pinga', 'horny', 'ass', 'nude', 'اباحي', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'pija', 'verga', 'كس', 'violation', 'violacion', 'bdsm', 'cachonda', '+18', 'cp', 'mia marin', 'lana rhoades', 'cepesito', '🔞', 'buceta', 'xxx']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return conn.reply(m.chat, '*SIR TL3B 🥷🏼⚠️*', m, )

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) throw `*تحميل صور من غوغل*\nمثــــال :\n*.img* sasuke utchiha`

const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `> *SASUKE TECH☑️*` , m) 
}
handler.help = ['img']
handler.tags = ['downloader']
handler.command = /^(img)$/i

export default handler
