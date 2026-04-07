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
            title: 'Portatarga',
            url: 'https://www.urbanobruni.it/it/accessori-ub/yamaha/tracer-9-tracer-9-gt-2021-2024/kit-portatarga-sport-touring-yamaha-tracer-9/',
            img: 'portatarga.png',
            color: '',
            size: '',
            isDisabled: false,
            dateInsert: '2026-04-07 15:29:00',
            note: 'Portatarga + luce targa + connettore luce targa'
        },
        {
            title: 'Frecce',
            url: 'https://www.urbanobruni.it/it/illuminazione/indicatori-di-direzione-a-led/indicatori-di-direzione-a-led-project-2/',
            img: 'frecce-1.png',
            color: '',
            size: '',
            isDisabled: false,
            dateInsert: '2026-04-07 15:45:00',
            note: 'X2'
        },
    ]
}