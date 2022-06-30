// lewd
import fetch from 'node-fetch'

let handler = async(m, { conn }) => {
    let img = await fetch(`https://storage.caliph71.xyz/img/yuri/${gr()+'.png'}`).then(a => a.buffer())
    await conn.sendFile(m.chat, img, 'yuri.png', '', m)
}
handler.help = ['yuri']
//handler.tags = ['porn']
handler.command = /^yuri$/i
export default handler
function gr() {
  return Math.floor(Math.random() * 25) + 10;
}
