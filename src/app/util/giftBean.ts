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
        {
            title: 'Logitech G G432',
            url: 'https://www.amazon.it/dp/B07MTXLFXV?ref=cm_sw_r_cso_wa_apin_dp_QF2QA8J1P15ZK8Y6Q03N&ref_=cm_sw_r_cso_wa_apin_dp_QF2QA8J1P15ZK8Y6Q03N&social_share=cm_sw_r_cso_wa_apin_dp_QF2QA8J1P15ZK8Y6Q03N',
            img: 'cuffie-1.png',
            color: '',
            size: '',
            isDisabled: false,
            dateInsert: '2026-11-16 14:00:00',
            note: ''
        },
        {
            title: 'Logitech G G335',
            url: 'https://www.amazon.it/dp/B07W6J6TG5?ref=cm_sw_r_cso_wa_apin_dp_0TYMNA10VS1WTZPQGHJF&ref_=cm_sw_r_cso_wa_apin_dp_0TYMNA10VS1WTZPQGHJF&social_share=cm_sw_r_cso_wa_apin_dp_0TYMNA10VS1WTZPQGHJF',
            img: 'cuffie-2.png',
            color: '',
            size: '',
            isDisabled: false,
            dateInsert: '2026-11-16 14:01:00',
            note: ''
        },
        {
            title: 'Specchietti',
            url: 'https://www.urbanobruni.it/it/retrovisori-e-manopole/specchi-retrovisori/specchi-retrovisori-bar-end-ghost-ultra-flat/',
            img: 'specchietti.png',
            color: '',
            size: '',
            isDisabled: false,
            dateInsert: '2026-11-25 10:24:00',
            note: 'Non sapendo cos\'altro mettere...'
        },
        {
            title: 'Mtech jeans',
            url: 'https://www.wheelup.it/jeans-da-moto-dynoforce-aa-nero.html?_gl=1*ec9y95*_up*MQ..&gbraid=0AAAAAC4p4IcNJMKZZzjiyKrdPpjYvO4TB',
            img: 'mtech-jeans.png',
            color: '',
            size: 'Boh',
            isDisabled: false,
            dateInsert: '2026-11-25 10:50:00',
            note: ''
        },
        {
            title: 'MyRide pantalone',
            url: 'https://www.wheelup.it/pantaloni-neoshield-elements-series-nero-nero.html?_gl=1*ec9y95*_up*MQ..&gbraid=0AAAAAC4p4IcNJMKZZzjiyKrdPpjYvO4TB',
            img: 'myride-pantalone.png',
            color: '',
            size: '2XL',
            isDisabled: false,
            dateInsert: '2026-11-25 11:00:00',
            note: ''
        },
        {
            title: 'Mtech pantalone',
            url: 'https://www.wheelup.it/pantaloni-da-moto-rampage-air-windproof-nero-nero-bianco.html?_gl=1*ec9y95*_up*MQ..&gbraid=0AAAAAC4p4IcNJMKZZzjiyKrdPpjYvO4TB',
            img: 'mtech-pantalone.png',
            color: '',
            size: '2XL',
            isDisabled: false,
            dateInsert: '2026-11-25 11:03:00',
            note: ''
        },
    ]
}