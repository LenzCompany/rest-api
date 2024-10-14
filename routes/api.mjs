import express from 'express'
import tiktok from 'tiktokdl'
import fetch from 'node-fetch'
var app = express()
const creator = "Ndaa"
/*
* @Pesan Error
*/
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
//downloader
app.get('/downloader/tiktok', async (req, res, next) => {
    const url = req.query.url;
    if(!url) return res.json(loghandler.noturl)
       let json = await tiktok.tiktokdl(url)
    res.json(json)
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