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
            title: 'Yamaha Tracer 9 GT 2024',
            url: 'https://www.yamaha-motor.eu/it/it/motorcycles/sport-touring/pdp/tracer-9-gt-2024/',
            img: 'tracer-9-gt.png',
            color: 'Pure White',
            size: '-',
            isDisabled: false,
            dateInsert: '2025-05-20 00:00:00'
        },
        {
            title: 'Yamaha Tracer 9 GT + 2024',
            url: 'https://www.autoscout24.it/annunci/yamaha-tracer-9-gt--benzina-blu-azzurro-25f0f599-4b71-49cf-bdeb-2dc34289cacf?sort=standard&desc=0&lastSeenGuidPresent=false&cldtidx=1&position=1&search_id=us54e7on53&source_otp=t30&ap_tier=t30&source=listpage_search-results&order_bucket=unknown&new_taxonomy_available=false&boosting_product=mia&relevance_adjustment=boost&applied_boost_level=t30&boost_level=t30',
            img: 'tracer-gt-plus.png',
            color: 'Icon Performance',
            size: '-',
            isDisabled: false,
            dateInsert: '2025-09-30 08:05:00'
        },
        {
            title: 'Insta360 asta',
            url: 'https://www.amazon.it/Insta360-Selfie-Stick-Invisibile-114/dp/B0BKZNX4KF/ref=sr_1_6?crid=12E2M8V7VL7VD&dib=eyJ2IjoiMSJ9.6TbzMNcOSSQfVzisvPMLCW5y5LePyM2rqruAcchUC492XnJhoiNQwUr6J0JWIWTFGwXuAbC5i6cdZPuiZfoiVaYA_gL-wa5PHGjYHx_9_TlyAQdJgJb-o7T4294WFOVCb-WHjO-bljijoxSDJnBClVs0Cpd3Tk5rN9rIfzB9NM42YiBqba68XfHPZwMX5w2jxsjfwQ9WWD6hNbT4Tu6i77mLrIlh8ZIGpSbgXVC2Vt5zi3g6RO4Y4WuwiE8wARPZui5liBAKk0dpOvheVuQ4trqlz9Fc0mGV7Hd8kTSXmuI.EPvIvpN7gQqdTQx3cMcT05JqjSu-zT68CMbZXDn2OhQ&dib_tag=se&keywords=insta+360+asta&qid=1759212521&sprefix=insta+360+as%2Caps%2C254&sr=8-6',
            img: 'insta360-asta.png',
            color: '',
            size: '',
            isDisabled: false,
            dateInsert: '2025-09-30 08:03:00'
        },
        {
            title: 'Zaino sci',
            url: 'https://www.decathlon.it/tutti-gli-sport/sport-invernali/zaini-sci?pdt-highlight=333497&mc=8817094&utm_source=google&utm_medium=cpc&utm_campaign=it_t-perf_ct-shopp_n-b2c-brand-products_ts-gen_f-cv_o-roas_&gad_source=1&gad_campaignid=20498729453&gclid=Cj0KCQjw3OjGBhDYARIsADd-uX6mMFFhmE5l8V0YMs0X0VSaDjbPZUoRfv5HivlBxEqhvJybgKr1wLYaAg6wEALw_wcB',
            img: 'zaino-sci.png',
            color: 'Bianco, Nero',
            size: '',
            isDisabled: false,
            dateInsert: '2025-09-30 08:26:00'
        },
        {
            title: 'Scarpone sci Head',
            url: 'https://www.decathlon.it/p/scarpone-sci-uomo-head-formula-120/_/R-p-X8923483?mc=8923483',
            img: 'scarpone-sci-head.png',
            color: '',
            size: '43/44',
            isDisabled: false,
            dateInsert: '2025-09-30 09:00:00'
        },
        {
            title: 'Scarpone sci Rossignol',
            url: 'https://www.decathlon.it/p/mp/rossignol/scarponi-da-sci-uomo-alltrack-110-hv-gw/_/R-p-11f8a237-40a7-4d54-b838-54d7d09f0d38?mc=11f8a237-40a7-4d54-b838-54d7d09f0d38_c251&c=grigio',
            img: 'scarpone-sci-rossignol.png',
            color: '',
            size: '43/44',
            isDisabled: false,
            dateInsert: '2025-09-30 09:00:00'
        },
        {
            title: 'Scarpone sci Tecnica',
            url: 'https://www.nencinisport.it/it/tecnica-mach-boa-hv-100-x-gw-3712743.html',
            img: 'scarpone-sci-tecnica.png',
            color: '',
            size: '43/44',
            isDisabled: false,
            dateInsert: '2025-09-30 09:00:00'
        },
        {
            title: 'Casco sci',
            url: 'https://www.decathlon.it/p/casco-sci-snowboard-adulto-e-bambino-fs300-viola/_/R-p-166071?mc=8660316&c=bianco%20brillante',
            img: 'casco-sci-1.png',
            color: 'Bianco/Nero',
            size: 'L',
            isDisabled: false,
            dateInsert: '2025-09-30 09:21:00'
        },
    ]
}