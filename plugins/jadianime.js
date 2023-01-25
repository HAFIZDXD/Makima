import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

async function ibengapi(url, pick) {
	let rul = null
	try {
		let res = await fetch(`https://api.ibeng.tech/api/maker/anime?url=${url}&apikey=ibeng`)
		let anu = await res.json()
		let urls = await anu.extra.match(/(((https?:\/\/)|(www\.))[^\s]+)(jpe?g|mp4)/g)
		urls = urls.map(v => v.split('"')[0])
		rul = urls[pick]
	} catch (e) { console.log(e) }
	finally { return rul }
}

let handler = async (m, { conn, usedPrefix, command, args }) => {
	let c = `*Jadi Anime*`
	if (/url/.test(command)) {
		let url = await ibengapi(args[0], /v/.test(command) ? 0 : 3)
		if (!url) throw 'failed save media'
		await conn.sendMessage(m.chat, /mp4/.test(url) ? { video: { url: url }, caption: c } : { image: { url: url }, caption: c }, { quoted : m })
	} else {
		let q = m.quoted ? m.quoted : m
		let mime = (q.msg || q).mimetype || q.mediaType || ''
		if (/image/g.test(mime) && !/webp/g.test(mime)) {
			let img = await q.download?.()
			let out = await uploadImage(img)
			let url = await ibengapi(out, 4)
			if (!url) return m.reply(`[ ! ] Gagal, gunakan foto lainnya.`)
			await conn.sendButton(m.chat, c, 'ibeng tools 2023', url, [['Compare', `${usedPrefix}toanimecurl ${out}`], ['Video', `${usedPrefix}toanimevurl ${out}`]], m)
		} else throw `Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`
	}
}

handler.help = ['jadianime']
handler.tags = ['tools']
handler.command = /^((to|jadi)a?nime((c|v)url)?)$/i

handler.premium = true
handler.limit = true

export default handler