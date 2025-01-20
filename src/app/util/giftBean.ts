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
            title: 'Yamaha MT-09',
            url: 'https://www.yamaha-motor.eu/it/it/motorcycles/hyper-naked/pdp/mt-09-2025/?srsltid=AfmBOorUB00LYHDxPgFd86pQc5NWmWKUkICcgX3cwucWOU-IQ4ZcHSSC#2025-MT09AS-MDNM6',
            img: 'mt09.png',
            color: 'Nero',
            size: '-',
            isDisabled: false,
            dateInsert: '2024-11-30 00:00:00'
        },
        {
            title: 'Tiger Sport 800',
            url: 'https://www.triumphmotorcycles.it/moto/adventure/tiger-sport-800/tiger-sport-800-2025',
            img: 'tiger-sport.png',
            color: 'Sapphire black',
            size: '-',
            isDisabled: false,
            dateInsert: '2024-11-30 00:00:00'
        },
        {
            title: 'Anker caricatore',
            url: 'https://www.amazon.it/dp/B09Q6BJ742?ref=cm_sw_r_cso_cp_apin_dp_26651946T4GTQ8XR8FYF&ref_=cm_sw_r_cso_cp_apin_dp_26651946T4GTQ8XR8FYF&social_share=cm_sw_r_cso_cp_apin_dp_26651946T4GTQ8XR8FYF&starsLeft=1&skipTwisterOG=1',
            img: 'anker-caricatore.png',
            color: '',
            size: '',
            note: '',
            isDisabled: false,
            dateInsert: '2024-12-13 08:30:00'
        },
        {
            title: 'Anker cavo',
            url: 'https://www.amazon.it/dp/B0D4YZCM18?ref=cm_sw_r_cso_cp_apin_dp_N44MR5BDH1MV8NCTETAP&ref_=cm_sw_r_cso_cp_apin_dp_N44MR5BDH1MV8NCTETAP&social_share=cm_sw_r_cso_cp_apin_dp_N44MR5BDH1MV8NCTETAP&starsLeft=1&skipTwisterOG=1',
            img: 'anker-cavo.png',
            color: '',
            size: '',
            note: '',
            isDisabled: false,
            dateInsert: '2024-12-13 08:30:00'
        },
        {
            title: 'MT-07 Grafiche',
            url: 'https://www.decalmoto.com/yamaha/4224-4640-mt-07-700-2022-factory-racing.html#/25-modello-model_a',
            img: 'mt07-grafiche.jpg',
            color: 'MODEL A',
            size: '',
            isDisabled: false,
            dateInsert: '2024-12-20 13:15:00'
        },
    ]
}