import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, text, command }) => {
try{
 if (`${global.xzn}` == 'YOUR_APIKEY_HERE') return m.reply('Apikey belum dipasang, silakan ambil apikey dari situs https://xzn.wtf')
  if (!text) return m.reply('Apa yang bisa saya bantu?')
    let response = await fetch(`https://xzn.wtf/api/openai?text=${text}&apikey=${global.xzn}`)
    let data = await response.json()
   
 await m.reply(data.result)
  } catch { 
  m.reply('Ada masalah, coba lagi')
  }
}
handler.help = ['chatgpt']
handler.tags = ['ai']
handler.command = /^chatgpt?$/i
handler.limit = true
handler.premium = true
export default handler
