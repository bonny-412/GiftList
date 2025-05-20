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
            title: 'Giacca sci',
            url: 'https://www.ridestore.com/it/dope-blizzard-giacca-snowboard-uomo-surf',
            img: 'dope-1.png',
            color: 'Surf',
            size: 'XL',
            isDisabled: false,
            dateInsert: '2025-01-20 10:00:00'
        },
        {
            title: 'Giacca sci',
            url: 'https://www.ridestore.com/it/dope-blizzard-corduroy-giacca-snowboard-uomo-whitish',
            img: 'dope-2.png',
            color: 'Whitish Corduroy',
            size: 'XL',
            isDisabled: false,
            dateInsert: '2025-01-20 10:00:02'
        },
        {
            title: 'Giacca sci',
            url: 'https://www.ridestore.com/it/dope-adept-giacca-snowboard-uomo-surf',
            img: 'dope-3.png',
            color: 'Surf',
            size: 'XL',
            isDisabled: false,
            dateInsert: '2025-01-20 10:00:10'
        },
        {
            title: 'Giacca sci',
            url: 'https://www.ridestore.com/it/dope-adept-giacca-snowboard-uomo-whitish',
            img: 'dope-4.png',
            color: 'Whitish',
            size: 'XL',
            isDisabled: false,
            dateInsert: '2025-01-20 10:00:12'
        },
        {
            title: 'Giacca sci',
            url: 'https://www.ridestore.com/it/dope-adept-giacca-snowboard-uomo-stratos',
            img: 'dope-5.png',
            color: 'Stratos',
            size: 'XL',
            isDisabled: false,
            dateInsert: '2025-01-20 10:00:15'
        },
        {
            title: 'Giacca sci',
            url: 'https://www.ridestore.com/it/dope-adept-giacca-snowboard-uomo-grey-camo',
            img: 'dope-7.png',
            color: 'Grey Camo',
            size: 'XL',
            isDisabled: false,
            dateInsert: '2025-01-20 10:00:17'
        },
        {
            title: 'Yamaha Tracer 9 GT 2024',
            url: 'https://www.yamaha-motor.eu/it/it/motorcycles/sport-touring/pdp/tracer-9-gt-2024/',
            img: 'tracer-9-gt.png',
            color: 'Pure White',
            size: '-',
            isDisabled: false,
            dateInsert: '2025-05-20 00:00:00'
        },
        {
            title: 'Yamaha Tracer 9 GT 2025',
            url: 'https://www.yamaha-motor.eu/it/it/motorcycles/sport-touring/pdp/tracer-9-gt-2025/#2025-MT09ATRDXS-MLNM4',
            img: 'tracer-9-gt-2025.png',
            color: 'Tech Black',
            size: '-',
            isDisabled: false,
            dateInsert: '2025-05-20 01:00:00'
        },
    ]
}