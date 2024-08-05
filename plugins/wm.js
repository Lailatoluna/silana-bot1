import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw 'الرجاء الاشارة الى الملصق الذي تريد أن تغير حقوقه مثال : \n *.dyali SASUKE TECH*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*الرجاء الاشارة الى الملصق الذي تريد أن تغير حقوقه مثال : \n *.wm TECH | SASUKE*'
let img = await m.quoted.download()
if (!img) throw '*الرجاء  الاشارة الى الملصق الذي تريد أن تغير حقوقه مثال : \n *.wm TECH | SASUKE*'
stiker = await addExif(img, packname || global.packname, author || global.author)
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*راسل صاحب البوت هناك مشكلة\nwa.me/+212710725533*'
}}
handler.help = ['wm','dyali']
handler.tags = ['sticker']
handler.command = /^dyali|wm$/i
export default handler
