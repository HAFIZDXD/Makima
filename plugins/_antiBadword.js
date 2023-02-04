let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

export function before(m, { isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)
    console.log(isBadword)

    if (chat.antiBadword && isBadword) {
        user.warning += 1
        this.sendButton(m.chat, `𝗧𝗲𝗿𝗱𝗲𝘁𝗲𝗸𝘀𝗶 𝗧𝗲𝗹𝗮𝗵 𝗠𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗞𝗮𝘁𝗮 𝗞𝗼𝘁𝗼𝗿 !\n*𝘑𝘢𝘯𝘨𝘢𝘯 𝘛𝘰𝘹𝘪𝘤 𝘠𝘢𝘢!!!*
☠︎︎ 𝘞𝘈𝘙𝘕𝘐𝘕𝘎 𝘔𝘜: ${user.warning} / 5 ┊

❗ 𝗣𝗘𝗥𝗜𝗡𝗚𝗔𝗧𝗔𝗡 ❗

[❗] 𝘑𝘪𝘬𝘢 𝘞𝘢𝘳𝘯𝘪𝘯𝘨 𝘔𝘦𝘯𝘤𝘢𝘱𝘢𝘪 5 𝘒𝘢𝘮𝘶 𝘈𝘬𝘢𝘯 *𝘋𝘪𝘣𝘢𝘯𝘯𝘦𝘥+𝘒𝘪𝘤𝘬*

𝗞𝗮𝗺𝘂 𝗛𝗮𝗻𝘆𝗮 𝗕𝗶𝘀𝗮 𝗠𝗲𝗺𝗶𝗻𝘁𝗮 𝗢𝘄𝗻𝗲𝗿 𝗨𝗻𝘁𝘂𝗸 𝗕𝘂𝗸𝗮 𝗕𝗮𝗻𝗻𝗲𝗱𝗻𝘆𝗮 !\n\n 𝘽𝙮 𝗛𝗮𝗳𝗶𝘇𝗱𝗫𝗗
𝘽𝙖𝙘𝙖 𝘿𝙞𝙗𝙖𝙬𝙖𝙝 𝙔𝙖 ( ˘ ³˘)♥︎
“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`, wm, [['⚠︎ 𝙲𝚎𝚔 𝚆𝚊𝚛𝚗𝚒𝚗𝚐 ⚠︎', '.cekwarn'], ['𝙃𝙪𝙗𝙪𝙣𝙜𝙞 𝙊𝙬𝙣𝙚𝙧', '.owner']], m)
        if (user.warning >= 5) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                	this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
                   //this.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
                }
            }
        }
    }
    return !0
}



// jasa buat by Fokusdotid (Fokus ID)
