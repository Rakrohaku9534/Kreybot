import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text || !text.includes('|')) throw `Usage : ${usedPrefix + command} text1|text2\n\nExample: *${usedPrefix + command} Shiro|Neko*`
	let [l, r] = text.split`|`
	if (!l) throw `Input text1`
	if (!r) throw `Input text2`
	try {
		let fimg = await fetch(`https://api.akuari.my.id/ephoto/pornhub?text=${encodeURIComponent(l)}&text_2=${encodeURIComponent(r)}`)
		//if (!fimg.ok) throw 'Fitur Error'
		let fimgb = Buffer.from(await fimg.arrayBuffer())
		await conn.sendMessage(m.chat, { image: fimgb, caption: `${command}` }, { quoted: m })
	} catch (e) {
		console.log(e)
		m.reply(`Terjadi kesalahan, coba lagi nanti.`)
	}
}

handler.help = ['phtext <text1|text2>']
handler.tags = ['textpro']
handler.command = /^(phtext)$/i
handler.limit = true

export default handler