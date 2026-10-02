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
            title: 'Grafiche Modello A/B',
            url: 'https://www.decalmoto.com/it/yamaha/4950-8107-tracer-9-gt-racing-icon-performance.html#/25-modello-model_a/131-aspetto_finitura-lucido_glossy',
            img: 'grafiche-1.png',
            color: 'Modello A o B',
            size: '',
            isDisabled: false,
            dateInsert: '2026-10-02 12:13:00',
            note: 'Per il Modello A o B, sostituire tutte le parti bianche con il grigio originale della moto. La sostituzione deve riguardare sia le scritte sia le parti grafiche di fondo; in particolare, per il Modello B, anche il grande quadrato/riquadro dove è presente il numero 9 deve essere grigio anziché bianco.'
        }
    ]
}