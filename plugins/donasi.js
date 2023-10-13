let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let pay = 'https://telegra.ph/file/4cee3e4a3e8321c90a1da.jpg'
let sewa = `
╭─❀ SEWA ❀─╮
┊ • 1 Minggu: 3K
┊ • 1 Bulan: 10K
┠─❀ PREMIUM ❀─┨
┊ • 1 Bulan: 5k
╰───❀───╯
┌─❀ Donasi & Payment ❀─┐
│ • Dana: [${global.pdana}]
│ • Pulsa: [${global.ppulsa}]
│ • Gopay: [${global.pgopay}]
❏──❀──❏
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: sewa}, m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^donasi$/i

export default handler
