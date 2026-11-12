export interface GiftBean {
    title:string,
    url:string,
    img:string,
    color:string,
    size:string,
    note?:string,
    isDisabled:boolean,
    dateInsert:string
}

export function getAllGifts(): GiftBean[] {
    return [
        {
            title: 'Bonifico PayPal',
            url: 'https://regali-bonny.netlify.app/assets/images-gift/paypal.png',
            img: 'paypal.png',
            color: '',
            size: '',
            note: 'Pagamenti da 5€',
            isDisabled: false,
            dateInsert: '2024-11-30 00:00:00'
        },
        {
            title: 'Scrivania regolabile',
            url: 'https://www.flexispot.it/scrivania-regolabile-in-altezza-e1.html',
            img: 'scrivania-regolabile.png',
            color: '',
            size: '',
            isDisabled: false,
            dateInsert: '2025-12-02 10:21:00',
            note: 'Prodotto di esempio'
        },
        {
            title: 'Spinning mare',
            url: 'https://www.nencinisport.it/it/sport/pesca/',
            img: 'nencini-sport.png',
            color: '',
            size: '',
            isDisabled: false,
            dateInsert: '2026-10-02 11:13:00',
            note: 'Canna + mulinello per spinning in mare da scogliera, grammi massimo ta i 40/60g. Chiedere a loro.'
        },
        {
            title: 'Valvole',
            url: 'https://amzn.eu/d/03cAHf6N',
            img: 'valvole.png',
            color: 'Nero',
            size: '',
            isDisabled: false,
            dateInsert: '2026-11-12 13:33:00',
            note: ''
        },
        {
            title: 'Telecomando Insta360',
            url: 'https://a.aliexpress.com/_EIjPTTs',
            img: 'telecomando-insta360.png',
            color: 'Colore nero',
            size: '',
            isDisabled: false,
            dateInsert: '2026-11-12 13:34:00',
            note: ''
        },
    ]
}