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
π€ *Published:* ${publishedTime}
β° *Duration:* ${durationH}
ποΈ *Views:* ${viewH}

π *Url:* ${url}
π *Description:* ${description}
  `.trim(), wm, thumbnail, url, 'π£ ππ ππ€πͺπ©πͺππ', null, null, [
    ['πΆ πΌπͺπππ€', `${usedPrefix}yta ${url} yes`],
    ['π₯ πππππ€', `${usedPrefix}ytv ${url} yes`],
    ['π πππ£πππ§πππ£ ππ€πͺπ©πͺππ', `${usedPrefix}yts ${url}`]
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