import express from 'express'
import tiktok from 'tiktokdl'
import fetch from 'node-fetch'
var app = express()
const creator = "Ndaa"
/*
* @Pesan Error
*/

async function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
const loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notgcname: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer gcname'
        },
    notgcicon: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer gcicon'
        },
    notpp: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer pp'
        },
    notbg: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer bg'
        },
    notmemberCount: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer memberCount'
        },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter query'
        },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406, 
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: '404 ERROR'
    }
}

/*
Akhir Pesan Error
*/
//AI
app.get('/openai', async (req, res, next) => {
    const query = req.query.query;
    if(!query) return res.json(loghandler.notquery)
       let json = await fetch(`https://widipe.com/openai?text=${query}`)
    let result = await json.json()
    res.json(result)
})

// ------------------> Downloader <------------------------------

app.get('/downloader/tiktok', async (req, res, next) => {
    const url = req.query.url;
    if(!url) return res.json(loghandler.noturl)
       let json = await tiktok.tiktokdl(url)
    res.json(json)
})

// --------------------------------> GAMES <------------------------------------

app.get('/games/asahotak', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/asahotak.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/games/caklontong', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/caklontong.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/games/family100', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/family100.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/games/siapakahaku', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/siapakahaku.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/games/susunkata', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/susunkata.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/games/tebakbendera', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/tebakbendera.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/games/tebakgambar', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/tebakgambar.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/games/tebakkabupaten', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/tebakkabupaten.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/games/tebakkalimat', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/tebakkalimat.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/games/tebakkata', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/tebakkata.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/games/tebakkimia', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/tebakkimia.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/games/tebaklirik', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/tebaklirik.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/games/tebaktebakan', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/tebaktebakan.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/games/tekateki', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/tekateki.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})

// ------------------------> ISLAMIC <---------------------------
app.get('/islam/abdul-somad', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/refs/heads/master/ceramah/abdul%20somad.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/islam/adi-hidayat', async (req, res, next) => {
    let json = await fetch(`https://github.com/zeeoneofficial/My-SQL-Results/raw/refs/heads/master/ceramah/adi%20hidayat.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/islam/felix-siauw', async (req, res, next) => {
    let json = await fetch(`https://github.com/zeeoneofficial/My-SQL-Results/raw/refs/heads/master/ceramah/felix%20siauw.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/islam/khalid-basalamah', async (req, res, next) => {
    let json = await fetch(`https://github.com/zeeoneofficial/My-SQL-Results/raw/refs/heads/master/ceramah/khalid%20basalamah.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
//BATAS 
app.get('/islam/asmaulhusna', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/refs/heads/master/data/dataAsmaulHusna.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/islam/ayatkursi', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/refs/heads/master/data/dataAyatKursi.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/islam/bacaanshalat', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/refs/heads/master/data/dataBacaanShalat.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/islam/doaharian', async (req, res, next) => {
    let json = await fetch(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/refs/heads/master/data/dataDoaHarian.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/islam/kisahnabi', async (req, res, next) => {
    let json = await fetch(`https://github.com/zeeoneofficial/My-SQL-Results/raw/refs/heads/master/data/dataKisahNabi.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/islam/niatshalat', async (req, res, next) => {
    let json = await fetch(`https://github.com/zeeoneofficial/My-SQL-Results/raw/refs/heads/master/data/dataNiatShalat.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/islam/tahlil', async (req, res, next) => {
    let json = await fetch(`https://github.com/zeeoneofficial/My-SQL-Results/raw/refs/heads/master/data/dataTahlil.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
app.get('/islam/wirid', async (req, res, next) => {
    let json = await fetch(`https://github.com/zeeoneofficial/My-SQL-Results/raw/refs/heads/master/data/dataWirid.json`)
 let result = await json.json()
 const reslt = result
 res.json(reslt)
})
//nsfw
app.get('/nsfw/waifu', async (req, res, next) => {
       let json = await fetch(`https://api.waifu.pics/nsfw/waifu`)
    let result = await json.json()
    res.json(result)
})
app.get('/nsfw/trap', async (req, res, next) => {
    let json = await fetch(`https://api.waifu.pics/nsfw/trap`)
 let result = await json.json()
 res.json(result)
})
app.get('/nsfw/blowjob', async (req, res, next) => {
    let json = await fetch(`https://api.waifu.pics/nsfw/blowjob`)
 let result = await json.json()
 res.json(result)
})
app.get('/nsfw/neko', async (req, res, next) => {
    let json = await fetch(`https://api.waifu.pics/nsfw/neko`)
 let result = await json.json()
 res.json(result)
})
export default app;