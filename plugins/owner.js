import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت SASUKE TECH 」*

*المطور :*\nwa.me/212710725533
*مجموعتي الرسمية:*\nhttps://chat.whatsapp.com/H7iwUtSGtFZI8q0Xf4tbpz

`.trim()
  m.reply(caption)
}
handler.help = ['owner','المطور']
handler.tags = ['infobot']
handler.command = /^(owner|المطور)$/i
handler.limit = false

export default handler
