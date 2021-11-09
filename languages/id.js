class ind {

    /**
     * @param {String} prefix
    **/
    constructor(prefix) {
        if (!prefix) throw new Error("Unknown prefix : set prefix first")
        this.prefix = prefix
    }

menu(pushname,sender){
  return `𝙷𝚊𝚕𝚘 ${pushname} ( @${sender.split("@")[0]})
𝙵𝚒𝚝𝚞𝚛 𝚢𝚊𝚗𝚐 𝚝𝚎𝚛𝚜𝚎𝚍𝚒𝚊 𝚙𝚊𝚍𝚊 𝚋𝚘𝚝 𝚒𝚗𝚒!

𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛 :
 • 𝚃𝚒𝚔𝚝𝚘𝚔
    » ${this.prefix}𝚝𝚒𝚔𝚝𝚘𝚔
 • 𝚈𝚘𝚞 𝚃𝚞𝚋𝚎
    » ${this.prefix}𝚢𝚝
 • 𝚃𝚠𝚒𝚝𝚝𝚎𝚛
    » ${this.prefix}𝚝𝚠𝚎𝚎𝚝
 • 𝚇𝚗𝚡𝚡
    » ${this.prefix}𝚡𝚗𝚡𝚡
    
𝚂𝚝𝚊𝚕𝚔𝚎𝚛
 • 𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖
    » ${this.prefix}𝚒𝚐𝚜𝚝𝚊𝚕𝚔
 • 𝚃𝚠𝚒𝚝𝚝𝚎𝚛
    » ${this.prefix}𝚝𝚠𝚜𝚝𝚊𝚕𝚔
 • 𝚃𝚒𝚔𝚃𝚘𝚔
    » ${this.prefix}𝚝𝚝𝚜𝚝𝚊𝚕𝚔
    
𝚂𝚝𝚒𝚌𝚔𝚎𝚛
 • 𝚂𝚝𝚒𝚌𝚔𝚎𝚛
    » ${this.prefix}𝚜
 • 𝚂𝚝𝚒𝚌𝚔𝚎𝚛 𝙰𝚙𝚒
    » ${this.prefix}𝚜𝚋𝚞𝚛𝚗
 • 𝚂𝚝𝚒𝚌𝚔𝚎𝚛 𝙿𝚎𝚝𝚒𝚛
    » ${this.prefix}𝚜𝚕𝚒𝚐𝚑𝚝
 • 𝚃𝚝𝚂
    » ${this.prefix}𝚝𝚝𝚙
 • 𝚃𝚝𝚊𝚂
    » ${this.prefix}𝚊𝚝𝚝𝚙


𝚃𝚑𝚊𝚗𝚔𝚜 𝚃𝚘 𝙰𝚕𝚕𝚊𝚑 𝚂𝚆𝚃
𝙱𝚎𝚜𝚝 𝚁𝚎𝚐𝚊𝚛𝚍𝚜 𝚂𝚎𝚗𝚔𝚞𝚞シ︎ `.trim()
}

    help(pushname) {
        return `Halo ${pushname}
Fitur yang tersedia pada bot ini
        `.trim()
    }

    menuList() {
        return [
            {title: "Downloader", rows: [
                {
                    title: "TikTok",
                    description: "Mengunduh audio/video dari tiktok tanpa watermark",
                    rowId: `${this.prefix}tiktok`
                },
                {
                    title: "YouTube",
                    description: "Mengunduh audio/video dari YouTube",
                    rowId: `${this.prefix}yt`
                },
                {
                    title: "Twitter",
                    description: "Mengunduh foto/video dari twitter",
                    rowId: `${this.prefix}tweet`
                },
                {
                    title: "XnXx",
                    description: "Mengunduh video dari xnxx",
                    rowId: `${this.prefix}xnxx`
                }
            ]},
            {title: "Stalker", rows: [
                {
                    title: "Instagram",
                    description: "Menampilkan profile instagram seseorang berdasarkan nama pengguna",
                    rowId: `${this.prefix}igstalk`
                },
                {
                    title: "Twitter",
                    description: "Menampilkan profile twitter seseorang berdasarkan nama pengguna",
                    rowId: `${this.prefix}twstalk`
                },
                {
                    title: "TikTok",
                    description: "Menampilkan profile tiktok seseorang berdasarkan nama pengguna",
                    rowId: `${this.prefix}ttstalk`
                }
            ]},
            {title: "Sticker", rows: [
                {
                    title: "Stiker",
                    description: "Mengubah foto menjadi stiker",
                    rowId: `${this.prefix}s`
                },
                {
                    title: "Stiker Api",
                    description: "Mengubah foto menjadi stiker dengan efek terbakar api",
                    rowId: `${this.prefix}sburn`
                },
                {
                    title: "Stiker Petir",
                    description: "Mengubah foto menjadi stiker dengan efek sambaran petir",
                    rowId: `${this.prefix}slight`
                },
                {
                    title: "TtS",
                    description: "Mengubah teks menjadi stiker",
                    rowId: `${this.prefix}ttp`
                },
                {
                    title: "TtaS",
                    description: "Mengubah teks menjadi stiker animasi (bergerak)",
                    rowId: `${this.prefix}attp`
                }
            ]}
        ]
    }

    err(cmd) {
        return {
            sticker: [`Kirim gambar dengan caption *${this.prefix+cmd}*`, `Contoh : *${this.prefix+cmd} teks*`, "Terjadi kesalahan", `Kirim gambar atau video dengan caption *${this.prefix+cmd}*`],
            deel: `Contoh : *${this.prefix+cmd} url*`,
            invalid: "Url tidak valid"
        }
    }

    res(res, type) {
        if (type === "tiktok") {
            return `👍 Suka : ${res.likes}\n🗯️ Komentar : ${res.comments}\n↪️ Dibagikan : ${res.shares}\n👀 Ditonton : ${res.plays}\n🎶 ${res.music.title} (${res.music.author})\n👤 ${res.author.username} (${res.author.name})\n📃 ${res.description}`
        } else if (type === "youtube") {
            return `📍 Judul : ${res.title}\n👍 Suka: ${res.likes}\n👎 Tidak suka : ${res.dislikes}\n👀 Ditonton : ${res.views}`
        } else if (type === "xnxx") {
            return `📍 Judul : ${res.title}\n👀 Ditonton : ${res.views}\n⏳ Durasi : ${res.duration}\n📃 ${res.description}`
        }
    }

    large(url) {
        return `Ukuran file terlalu besar, whatsapp tidak bisa mengirim video jika ukurannya terlalu besar\nLink video : ${url}`
    }

    wait() {
        return "𓊈BAIKLAH𓊉 Silahkan tunggu ......"
    }

    footer() {
        return `Tombol tidak muncul di pesan anda?
Masukkan perintah ini
*${this.prefix}tikaud url* | untuk mengambil musik saja dari tiktok
*${this.prefix}tikvid url* | untuk mengambil video saja dari tiktok
*${this.prefix}yta url* | untuk mengambil musik saja dari youtube
*${this.prefix}ytv url* | untuk mengambil video saja dari youtube
*${this.prefix}xnxx url sd* | untuk mengambil video dari xnxx dengan kualitas rendah
*${this.prefix}xnxx url hd* | untuk mengambil video dari xnxx dengan kualitas tinggi`
    }
}

module.exports = ind
