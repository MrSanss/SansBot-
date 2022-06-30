import fetch from 'node-fetch'

let handler = async(m, { conn }) => {
    let img = await fetch(`http://rubensedboy.000webhostapp.com/SansBot/milf/${gr()+'.jpeg'}`).then(a => a.buffer())
    await conn.sendFile(m.chat, img, 'milf.jpeg', '', m)
}
handler.help = ['milf']
//handler.tags = ['porn']
handler.command = /^milf$/i
export default handler
function gr() {
  return Math.floor(Math.random() * 60) + 10;
}
