let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

export function before(m, { isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)
    console.log(isBadword)

    if (chat.antiBadword && isBadword) {
        user.warning += 1
        this.sendButton(m.chat, `๐ง๐ฒ๐ฟ๐ฑ๐ฒ๐๐ฒ๐ธ๐๐ถ ๐ง๐ฒ๐น๐ฎ๐ต ๐ ๐ฒ๐ป๐ด๐ถ๐ฟ๐ถ๐บ ๐๐ฎ๐๐ฎ ๐๐ผ๐๐ผ๐ฟ !\n*๐๐ข๐ฏ๐จ๐ข๐ฏ ๐๐ฐ๐น๐ช๐ค ๐ ๐ข๐ข!!!*
โ ๏ธ๏ธ ๐๐๐๐๐๐๐ ๐๐: ${user.warning} / 5 โ

โ ๐ฃ๐๐ฅ๐๐ก๐๐๐ง๐๐ก โ

[โ] ๐๐ช๐ฌ๐ข ๐๐ข๐ณ๐ฏ๐ช๐ฏ๐จ ๐๐ฆ๐ฏ๐ค๐ข๐ฑ๐ข๐ช 5 ๐๐ข๐ฎ๐ถ ๐๐ฌ๐ข๐ฏ *๐๐ช๐ฃ๐ข๐ฏ๐ฏ๐ฆ๐ฅ+๐๐ช๐ค๐ฌ*

๐๐ฎ๐บ๐ ๐๐ฎ๐ป๐๐ฎ ๐๐ถ๐๐ฎ ๐ ๐ฒ๐บ๐ถ๐ป๐๐ฎ ๐ข๐๐ป๐ฒ๐ฟ ๐จ๐ป๐๐๐ธ ๐๐๐ธ๐ฎ ๐๐ฎ๐ป๐ป๐ฒ๐ฑ๐ป๐๐ฎ !\n\n ๐ฝ๐ฎ ๐๐ฎ๐ณ๐ถ๐๐ฑ๐ซ๐
๐ฝ๐๐๐ ๐ฟ๐๐๐๐ฌ๐๐ ๐๐ ( ห ยณห)โฅ๏ธ
โBarang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diamโ (HR. al-Bukhari dan Muslim).`, wm, [['โ ๏ธ ๐ฒ๐๐ ๐๐๐๐๐๐๐ โ ๏ธ', '.cekwarn'], ['๐๐ช๐๐ช๐ฃ๐๐ ๐๐ฌ๐ฃ๐๐ง', '.owner']], m)
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
