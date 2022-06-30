import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/nsfw/trap')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'Kyaaaa>_<', author, json.url, [['trap', `${usedPrefix}trap`]], m)
}
handler.help = ['trap']
//handler.tags = ['porn']
handler.command = /^(trap)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
