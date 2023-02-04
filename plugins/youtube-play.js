import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Dj Gama Naufal`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
*${htki} PLAY ${htka}*

${htjava} *Title:* ${title}
📤 *Published:* ${publishedTime}
⏰ *Duration:* ${durationH}
👁️ *Views:* ${viewH}

🔗 *Url:* ${url}
📔 *Description:* ${description}
  `.trim(), wm, thumbnail, url, '📣 𝙆𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚', null, null, [
    ['🎶 𝘼𝙪𝙙𝙞𝙤', `${usedPrefix}yta ${url} yes`],
    ['🎥 𝙑𝙞𝙙𝙚𝙤', `${usedPrefix}ytv ${url} yes`],
    ['🔎 𝙋𝙚𝙣𝙘𝙖𝙧𝙞𝙖𝙣 𝙔𝙤𝙪𝙩𝙪𝙗𝙚', `${usedPrefix}yts ${url}`]
  ], m)
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true
handler.register = true
handler.level = 0

export default handler