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
            title: 'Becco',
            url: 'https://www.vasileiadisworks.com/front-wing-v2-for-yamaha-tracer-9',
            img: 'becco.png',
            color: '',
            size: 'Tracer 9 GT+',
            isDisabled: false,
            dateInsert: '2026-04-07 21:38:00',
            note: ''
        },
    ]
}