let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `“${sad.getRandom()}”`, author, ['Sad', `${usedPrefix}sad`], m)

// https://jalantikus.com/tips/kata-kata-bucin/
const sad = [
  "Aku berharap kamu menjadi pelangi yang muncul setelah hujan, tapi nyatanya kamu malah pergi bahkan sebelum hujan datang.",
  "Kau tahu perbedaan aku dan kamu? Kau yang suka melukai dan aku yang suka memaklumi.",
  "Sebelum kau sedingin hamparan hujan deras. Kau pernah sehangat embusan napas.",
  "Pernah berjuang untuk sebuah senyuman, hingga akhirnya tinggal kenangan. Pernah menjadi bayangan, lalu hilang terbawa angan.",
  "Menyapamu, aku lupa diri. Diabaikanmu, aku tahu diri. Hati bilang gas pol. Otak bilang rem.",
  "Kau bisa melakukan kesalahan sama berulang kali. Bisa meminta maaf berulang kali. Tapi, seseorang belum tentu bisa memaafkanmu berulang kali.",
  "Kalau membunuh perasaan sendiri kena pidana, sudah sejak lama saya dipenjara.",
  "Di sudut rasa bersalah yang kusesali, aku betul-betul menunggumu kembali.",
  "Baru kusesali setelah ia pergi, dan menginginkannya kembali setelah ia menemukan pujaan hati.",
  "Kita adalah sisa-sisa kepastian yang tak dipastikan.",
  "Kau akan tahu betapa berharganya seseorang apabila ia sudah pergi meninggalkanmu.",
  "Mungkin kita pernah saling merindukan, namun tak pernah berani untuk saling mengungkapkan.",
  "Sakit rasanya sewaktu tahu seseorang yang selama ini dia percayai justru yang menaburkan luka di hatinya.",
  "Ada yang rela sabar demi sebuah kabar, ada juga yang rela mati-matian demi sebuah kepastian.",
  "Semua tentang kita kini telah berakhir menjadi sebuah kenangan dan masa lalu.",
  "Kita tidak akan bisa kembali merasakan yang dulu. Hanya saja kita bisa merasakan semua yang dulu tanpa kembali.",
  "Kamu masih mempertahankan dia. Tapi dia lebih senang terlepas darimu.",
  "Setahan-tahannya orang bertahan akan ada waktunya dia harus terpaksa meninggalkan.",
  "Kata maaf tidak akan ada artinya jika kesalahannya tetap diulangi.",
  "Beberapa orang akan ada yang pergi dan datang di kehidupanmu, lalu ada yang berlalu begitu saja.",
  "Jangan pernah menjalin hubungan dengan orang yang masih mengingat masa lalunya karena itu hanya akan menyakitimu saja.",
  "Melihatmu dari kejauhan dan sesekali tatapan mata kita saling bertemu. Lalu berpura-pura tidak saling melihat dan mengabaikan.",
  "Aku dan dompetku merasakan hal yang sama, kami berdua merasa kosong.",
  "Jika sabar tak sanggup membawamu kembali, biar ikhlas yang mengantarmu pergi.",
  "Jika akhirnya bukan aku yang kau pilih setidaknya aku sudah pernah ada di hatimu walaupun sementara.",
  "Kalau memang kenyataan tidak sesuai dengan harapan, untuk apa diteruskan?",
  "Kalau tahu kadar singgahmu yang hanya sementara bukan selamanya, mungkin dulu akan kusuguhkan segelas kopi saja, bukan seluruh cinta.",
  "Terkadang kita egois meminta seseorang untuk tetap tinggal tapi lupa memberikan tempat yang nyaman.",
  "Jangan kasihan sebagai alasanmu untuk tetap bertahan.",
  "Jika masih tidak bisa melupakan, setidaknya cobalah untuk mengikhlaskan.",
  "Jika keadaan tidak berubah, maka perasaanku yang harus berubah. Dia tidak hilang, hanya saja dia kembali pulang pada tulang rusuk yang semestinya.",
  "Tidak ada pria yang terlalu sibuk untuk wanita yang benar-benar dia inginkan. Dan tidak ada pria yang terlalu cuek untuk perempuan yang benar-benar dicintainya.",
  "Jika pilihanmu adalah dia, pergilah. Aku hanya bisa merelakan, walau nyatanya aku tidak serela itu.",
  "Teruslah melatih keikhlasan, ia akan berguna pada suatu keputusan.",
  "Kau telah jauh entah di mana. Aku kehilangan peta, hanya ada kompas yang tak tahu cara menggunakannya, sebab ia kehilangan arah utamanya.",
  "Sekalipun waktu memberi kesempatan untuk mengulang, aku tidak akan melakukannya.",
  "Aku bisa bersaing dengan orang yang menyukaimu, tapi tidak dengan orang pilihanmu.",
  "Bumi Allah itu luas, jangan dipersempit dengan kalimat 'aku tak bisa bahagia tanpanya'."
  "Wajar jika hatimu terlalu sakit, itu artinya cintamu tidak bercanda.",
  "Aku rindu, tapi bukan padamu. Aku rindu pada diriku yang dulu baik-baik saja.",
  "Dulu kau dan aku masih di satu cerita. Sekarang kabarmu hanya kutemukan di semilir berita.",
  "Jatuh cintalah pada dia yang pernah patah hati. Ia lebih paham bagaimana caranya menghargai.",
  "Adalah wajar jika seseorang yang sudah terlalu sering mendengarkan selamat tinggal, pasti akan kesulitan berucap selamat datang.",
  "Bukan dia yang jahat, tapi bapermu yang salah tempat.",
  "Aku pernah dikhianati setengah mati oleh dia yang kupercaya setengah mati.",
  "Selagi hati masih tertinggal, mustahil untuk kaki berlari pergi meninggalkan.",
  "Bukannya dia lupa kepadamu, hanya saja di sana ada seseorang yang lebih membuatnya bahagia daripada kamu.",
  "Sebagian dari kita banyak yang masih menjaga hati untuk orang yang telah pindah ke lain hati.",
  "Ada manusia yang benar-benar tidak tahu diri, dia menyakitimu, tapi dia bertingkah seakan-akan dialah yang tersakiti.",
  "Akhirnya aku sampai di titik di mana mendengar namamu terasa biasa saja dan mengingatmu tak lagi menjadi luka.",
  "Setelah janji kau tebar, kau pergi tanpa kabar.",
  "Aku tahu, hidupmu memang bukan tentang aku saja. Tapi mengertilah, aku cemburu jika kamu terlalu asyik dengan yang lain dibanding aku.",
  "Cemburu adalah cinta yang sedang khawatir. Benci adalah cinta yang pernah tersakiti. Tapi semua itu dasarnya tetap satu yaitu cinta.",
  "Bertahan tapi tak ditahan. Menunggu tapi tak ditunggu.",
  "Ku memberimu yang terbaik, mengapa ia yang mendapatkan yang terbaik darimu.",
  "Tapi...yang kamu kodein juga lagi kodein orang lain.",
  "Mungkin akhirnya kita tak akan bersama. Setidaknya, pernah saling berbagi cerita. Tentang lelahmu mengikuti dia. Tentang sedihku mendengar sedihmu sepanjang usia.",
  "Saya tetap sama. Masih sayang kamu. Bedanya, rasa sayang itu hadir dalam bentuk bahagia melihatmu dengan yang lain. Mengertilah, teguhkan hatimu padanya.",
  "Kenapa harus membawa nama lain untuk hal-hal tentang kita?",
  "Udah dibantu, dibaikin, dan diperhatiin, tapi makasihnya sama orang lain.",
  "Aku akan terus berjuang meski hatimu tidak memihak kepadamu. Karena aku tidak ingin kamu mencintai orang yang salah.",
  "Sakit itu ketika seseorang mengatakan sayang kepadamu tapi hatinya untuk orang lain.",
  "Tenanglah, saya tidak akan mencintai orang yang telah mencintai orang lain.",
  "Kau bilang cemburumu lebih besar. Kau salah, cemburuku yang lebih besar.",
  "Tidak ada ikatan, namun ada kecemburuan, kekhawatiran, dan rasa takut kehilangan."
]

handler.help = ['quotesedih']
handler.tags = ['internet']
handler.command = /^(quotesedih)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler