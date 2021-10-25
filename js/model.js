var array = [];
//mảng lưu các product
var id = 1

function Product(department, category, belongTo, productName, mainAvatar, brand, status, productType, priceSell, realPrice, moreImage, description) { //constructor function
    this.productID = id++, //cấp phát tự động 
        this.url = [department, category, belongTo],
        // department,(String)
        // trang điểm , chăm sóc da, chăm sóc cơ thể, phụ kiện, cho nam, nước hoa, săn quà..
        // category, (String)
        // trang điểm mặt, môi, mắt,.. 
        // belongTo, (String)
        // Cushion - Kem nền, Che khuyết điểm, Phấn phủ - Phấn nền, Má hồng, Tạo khối - Highlight, Xịt khoáng nền
        this.productName = productName,
        this.mainAvatar = mainAvatar,
        this.brand = brand,
        this.status = status,
        this.productType = productType,
        this.priceSell = priceSell,
        this.realPrice = realPrice,
        this.moreImage = moreImage,
        this.description = description
        // {
        //     productName,
        //     //tên sản phâm 
        //     descriptionsImage[],
        //     //ảnh trong phần mô tả
        //     descriptionsContent[]
        //     //phần nội dung mô tả cho sản phẩm
        // }
}

array.push(

    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Bông Tẩy Da Chết Cosrx One Step Original Clear Pad',
        './images/nhi-product/bong-tay-da-chet-cosrx-one-step-original-clear-pad.png',
        'Cosrx',
        'Còn hàng', [],
        '310000',
        '485000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Bông tẩy da chết Neogen Dermalogy Calming Cicatree Pad',
        './images/nhi-product/bong-tay-da-chet-neogen-dermalogy-calming-cicatree-pad.png',
        'Cosrx',
        'Còn hàng', [],
        '310000',
        '485000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Bông tẩy da chết Neogen Dermalogy Gauze Peeling',
        './images/nhi-product/bong-tay-da-chet-neogen-dermalogy-pha-gauze-peeling.png',
        'Neogen',
        'Còn hàng', [],
        '349000',
        '420000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Bông tẩy da chết than tre Neogen Dermalogy Real Charcoal Pad',
        './images/nhi-product/bong-tay-da-chet-than-tre-neogen-dermalogy-real-charcoal-pad.png',
        'Neogen',
        'Còn hàng', [],
        '349000',
        '420000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Dung dịch BHA Blackhead Power Liquid Cosrx',
        './images/nhi-product/dung-dich-bha-blackhead-power-liquid-cosrx.png',
        'Cosrx',
        'Còn hàng', [],
        '310000',
        '350000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Mặt Nạ Tẩy Da Chết Innisfree Green Barley Gommage Peeling Mask',
        './images/nhi-product/mat-na-tay-da-chet-innisfree-green-barley-gommage-peeling-mask.png',
        'Innisfree',
        'Còn hàng', [],
        '199000',
        '220000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Mặt Nạ Tẩy Tế Bào Chết Huxley Scrub Mask',
        './images/nhi-product/mat-na-tay-te-bao-chet-huxley-scrub-mask.png',
        'Huxley',
        'Còn hàng', [],
        '69000',
        '120000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Peel Da The Ordinary AHA 30% + BHA 2% Peeling Solution',
        './images/nhi-product/peel-da-the-ordinary-aha-30-bha-2-peeling-solution.png',
        'The Ordinary',
        'Còn hàng', [],
        '259000',
        '320000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Sữa Tẩy tế bào chết Evoluderm',
        './images/nhi-product/sua-tay-te-bao-chet-evoluderm.png',
        'Evoluderm',
        'Còn hàng', [],
        '115000',
        '175000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Tẩy Da Chết Cure Natural Aqua Gel',
        './images/nhi-product/tay-da-chet-cure-natural-aqua-gel.png',
        'The Cure',
        'Còn hàng', [],
        '490000',
        '500000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Tẩy Da Chết Hóa Học Some By Mi AHA BHA PHA 30 Days Miracle Truecica Clear Pad',
        './images/nhi-product/tay-da-chet-hoa-hoc-some-by-mi-aha-bha-pha-30-days-miracle-truecica-clear-pad.png',
        'Some By Mi',
        'Còn hàng', [],
        '229000',
        '330000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Tẩy da chết Klairs Gentle Black Sugar Facial Polish',
        './images/nhi-product/tay-da-chet-klairs-gentle-black-sugar-facial-polish.png',
        'Klairs',
        'Còn hàng', [],
        '279000',
        '320000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Tẩy da chết mặt Cocoon Cà phê Đắk Lắk',
        './images/nhi-product/tay-da-chet-mat-cocoon-ca-phe-dak-lak.png',
        'Cocoon',
        'Còn hàng', [],
        '130000',
        '159000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Tẩy da chết Missha Super Aqua D-tox Peeling Gel',
        './images/nhi-product/tay-da-chet-missha-super-aqua-d-tox-peeling-gel.png',
        'Missha',
        'Còn hàng', [],
        '135000',
        '190000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Tẩy Tế Bào Chết Cho Môi Innisfree Lip Peeling Booster',
        './images/nhi-product/tay-te-bao-chet-cho-moi-innisfree-lip-peeling-booster.png',
        'Innisfree',
        'Còn hàng', [],
        '95000',
        '120000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Tẩy Tế Bào Chết Làm Sáng Da Dạng Gel Sur.Medic Deep Clear Bright Calming Peeling Gel',
        './images/nhi-product/tay-te-bao-chet-lam-sang-da-dang-gel-sur-medic-deep-clear-bright-calming-peeling-gel.png',
        'Sur.Medic',
        'Còn hàng', [],
        '179000',
        '280000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Tẩy Tế Bào Chết NARUKO Tea Tree Shine Control and Blemish Clear Peeling Gel',
        './images/nhi-product/tay-te-bao-chet-naruko-tea-tree-shine-control-and-blemish-clear-peeling-gel.png',
        'Naruko',
        'Còn hàng', [],
        '199000',
        '220000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Tẩy Tế Bào Chết Rosette Peeling Gel',
        './images/nhi-product/tay-te-bao-chet-rosette-peeling-gel.png',
        'Rosette',
        'Còn hàng', [],
        '95000',
        '130000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Tẩy Tế Bào Chết ST.Ives Apricot (Hũ)',
        './images/nhi-product/tay-te-bao-chet-st-ives-apricot-hu.png',
        'St.ives',
        'Còn hàng', [],
        '120000', [], [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Tẩy Tế Bào Chết tuýp ST.Ives',
        './images/nhi-product/tay-te-bao-chet-tuyp-st-ives.png',
        'St.ives',
        'Còn hàng', [],
        '89000',
        '120000', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-te-bao-chet',
        'Tẩy Tế Bào Chết Yuja Niacin Brightening Peeling Gel Some By Mi',
        './images/nhi-product/tay-te-bao-chet-yuja-niacin-brightening-peeling-gel-some-by-mi.png',
        'Some By Mi',
        'Còn hàng', [],
        '169000',
        '205000', [], [],
    ),
    // Tẩy trang
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Dầu Tẩy Trang Klairs Gentle Black Deep Cleansing Oil',
        './images/nhi-product/dau-tay-trang-klairs-gentle-black-deep-cleansing-oil.png',
        'Klairs',
        'Còn hàng', [],
        '249000',
        '340000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Dầu tẩy trang Senka A.L.L Clear Oil',
        './images/nhi-product/dau-tay-trang-senka-a-l-l-clear-oil.png',
        'Senka',
        'Còn hàng', [],
        '259000',
        '420000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Dầu Tẩy Trang Skin1004 Madagascar Centella Light Cleansing Oil',
        './images/nhi-product/dau-tay-trang-skin1004-madagascar-centella-light-cleansing-oil.png',
        'Skin1004',
        'Còn hàng', [],
        '369000',
        '400000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Gel rửa mặt tẩy trang 2 trong 1 Senka Perfect Clear Cleanse 170ml',
        './images/nhi-product/gel-rua-mat-tay-trang-2-trong-1-senka-perfect-clear-cleanse-170ml.png',
        'Senka',
        'Còn hàng', [],
        '199,000',
        '220,000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước sữa tẩy trang 2 lớp Senka A.L.L Clear Milky Water 230ml',
        './images/nhi-product/nuoc-sua-tay-trang-2-lop-senka-a-l-l-clear-milky-water-230ml.png',
        'Skin1004',
        'Còn hàng', [],
        '109,000',
        '119000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước tẩy trang bí đao The Cocoon Winter Melon Micellar Water 500ml',
        './images/nhi-product/nuoc-tay-trang-bi-dao-the-cocoon-winter-melon-micellar-water-500ml.png',
        'Cocoon',
        'Còn hàng', [],
        '248000',
        '275000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước tẩy trang Caryophy Smart Cleansing Water',
        './images/nhi-product/nuoc-tay-trang-caryophy-smart-cleansing-water.png',
        'Caryophy',
        'Còn hàng', [],
        '49000',
        '145000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước Tẩy Trang Cho Da Dầu Mụn Vichy Normaderm Micellar 3 in 1',
        './images/nhi-product/nuoc-tay-trang-cho-da-dau-mun-vichy-normaderm-micellar-3-in-1.png',
        'Vichy',
        'Còn hàng', [],
        '299000',
        '405000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước tẩy trang Christian Lenart Eau Micellaire (100ml) - mẫu mới',
        './images/nhi-product/nuoc-tay-trang-christian-lenart-eau-micellaire-100ml-mau-moi.png',
        'Christian Lenart',
        'Còn hàng', [],
        '150000',
        '192000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước tẩy trang dành cho da nhạy cảm Peaux Sensibles La Roche - Posay Micellar Water (Chai vỏ trắng) Tặng xịt khoáng',
        './images/nhi-product/nuoc-tay-trang-danh-cho-da-nhay-cam-peaux-sensibles-la-roche-posay-micellar-water-chai-vo-trang-tang-xit-khoang-50ml-voi-chai-400ml.png',
        'La Roche-Posay',
        'Còn hàng', [],
        '199000',
        '235000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước tẩy trang dành cho dầu, da hỗn hợp và da nhạy cảm Vichy',
        './images/nhi-product/nuoc-tay-trang-danh-cho-dau-da-hon-hop-va-da-nhay-cam-vichy.png',
        'Vichy',
        'Còn hàng', [],
        '369000',
        '475000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước tẩy trang dưỡng da D Program Essence In Cleansing Water 180ml',
        './images/nhi-product/nuoc-tay-trang-duong-da-d-program-essence-in-cleasing-water-180ml.png',
        'D Program',
        'Còn hàng', [],
        '399000',
        '490000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước tẩy trang Evoluderm Eau Micellaire',
        './images/nhi-product/nuoc-tay-trang-evoluderm-eau-micellaire.png',
        'Evoluderm',
        'Còn hàng', [],
        '149000',
        '170000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước Tẩy Trang Green Tea Cleansing Water Innisfree',
        './images/nhi-product/nuoc-tay-trang-green-tea-cleansing-water-innisfree.png',
        'Innisfree',
        'Còn hàng', [],
        '225000',
        '270000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước tẩy trang Jonzac Eau Thermale Jonzac 500ml',
        './images/nhi-product/nuoc-tay-trang-jonzac-eau-thermale-jonzac-500ml.png',
        'Eau Thermale Jonzac',
        'Còn hàng', [],
        '250000',
        '539000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước tẩy trang La Roche - Posay Peaux Grasses Effaclar',
        './images/nhi-product/nuoc-tay-trang-danh-cho-da-dau-nhay-cam-la-roche-posay-peaux-grasses-effaclar-chai-vo-xanh-tang-xit-khoang-50ml-voi-chai-400ml.png',
        'La Roche-Posay',
        'Còn hàng', [],
        '219000',
        '250000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước tẩy trang Loreal Paris 3-in-1 Micellar Water',
        './images/nhi-product/nuoc-tay-trang-loreal-paris-3-in-1-micellar-water.png',
        "L'Oreal Paris",
        'Còn hàng', [],
        '175000',
        '209000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước tẩy trang mắt môi Senka A.L.L Clear Eye & Lip 150ml',
        './images/nhi-product/nuoc-tay-trang-mat-moi-senka-a-l-l-clear-eye-lip-150ml.png',
        'Senka',
        'Còn hàng', [],
        '99000',
        '195000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước tẩy trang Senka A.L.L Clear Water Micellar Formula 230ml',
        './images/nhi-product/nuoc-tay-trang-senka-a-l-l-clear-water-micellar-formula-230ml.png',
        'Senka',
        'Còn hàng', [],
        '89000',
        '109000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước tẩy trang than hoạt tính Byphasse Solution Micellaire Charbon Actif Detox Pure Skin',
        './images/nhi-product/nuoc-tay-trang-byphasse-solution-micellaire-charbon-actif-detox-pure-skin.png',
        'Byphasse',
        'Còn hàng', [],
        '125000', [], [], [],
    ),

    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Nước tẩy trang BYPHASSE Solution Micellaire Face',
        './images/nhi-product/nuo-c-ta-y-trang-byphasse-solution-micellaire-face.png',
        'Byphasse',
        'Còn hàng', [],
        '109000',
        '175000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Tẩy Trang Bioderma Sebium H20',
        './images/nhi-product/tay-trang-bioderma-sebium-h20.png',
        'Bioderma',
        'Còn hàng', [],
        '355000',
        '420000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Tẩy Trang Bioderma Sensibio H20',
        './images/nhi-product/tay-trang-bioderma-sensibio-h20.png',
        'Bioderma',
        'Còn hàng', [],
        '355000',
        '420000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Tẩy Trang Derladie Cleansing Water Witch Hazel',
        './images/nhi-product/tay-trang-derladie-cleansing-water-witch-hazel.png',
        'Derladie',
        'Còn hàng', [],
        '289000',
        '400000', [], [],
    ),
    // trang 3
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Tẩy trang Garnier Skin Naturals Nga 400ml #Hồng',
        './images/nhi-product/tay-trang-garnier-skin-naturals-nga-400ml-hong.png',
        'Garnier',
        'Còn hàng', [],
        '129000',
        '175000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Tẩy trang Garnier Skin Naturals Pháp 400ml',
        './images/nhi-product/tay-trang-garnier-skin-naturals-phap-400ml.png',
        'Garnier',
        'Còn hàng', [],
        '138000',
        '199000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Tẩy Trang Innisfree Micellar Oil Water 200ml',
        './images/nhi-product/tay-trang-innisfree-micellar-oil-water-200ml.png',
        'Innisfree',
        'Còn hàng', [],
        '155000',
        '225000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Tẩy Trang Lotion Micellaire Anti Pollution Christian Lenart (500ml)',
        './images/nhi-product/tay-trang-lotion-micellaire-anti-pollution-christian-lenart-500ml.jpg',
        'Christian Lenart',
        'Còn hàng', [],
        '320000',
        '420000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Tẩy trang mắt môi Maybelline Eye + Lip Makeup Remover 40ml',
        './images/nhi-product/tay-trang-mat-moi-maybelline-eye-lip-makeup-remover-40ml.jpg',
        'Maybelline',
        'Còn hàng', [],
        '79000',
        '90000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Tẩy trang Muji Oil Cleansing',
        './images/nhi-product/tay-trang-muji-oil-cleansing.png',
        'Muji',
        'Còn hàng', [],
        '218000',
        '265000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        "Tẩy trang Natury BIO I'EAU",
        './images/nhi-product/tay-trang-natury-bio-i-eau.jpg',
        'Natury Bio',
        'Còn hàng', [],
        '130000',
        '220000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Tẩy Trang Re:p Gentle Face Cleaning Remover Pad 180ml (70 miếng)',
        './images/nhi-product/tay-trang-re-p-gentle-face-cleaning-remover-pad-180ml-70-mieng.png',
        '',
        'Còn hàng', [],
        '389000',
        '550000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'tay-trang',
        'Tẩy trang Simple Micellar Cleansing Water',
        './images/nhi-product/tay-trang-simple-micellar-cleansing-water-1.png',
        'Simple',
        'Còn hàng', [],
        '89000',
        '149000', [], [],
    ),

    // matna
    // trang 1
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ Banobagi Vita Genic Jelly Mask',
        './images/nhi-product/matna/mat-na-banobagi-vita-genic-jelly-mask.png',
        'Banobagi',
        'Còn hàng', [],
        '15000',
        '19000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ BNBG Vita Genic Jelly Mask',
        './images/nhi-product/matna/mat-na-bnbg-vita-genic-jelly-mask.png',
        'BNBG',
        'Còn hàng', [],
        '30000',
        '17000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ BNBG Vita Tea Tree Healing Face Mask',
        './images/nhi-product/matna/mat-na-bnbg-vita-tea-tree-healing-face-mask.jpg',
        'BNBG',
        'Còn hàng', [],
        '35000',
        '23000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ By Wishtrend Natural Vitamin 21.5 Enhancing Sheet Mask',
        './images/nhi-product/matna/mat-na-by-wishtrend-natural-vitamin-21-5-enhancing-sheet-mask.png',
        'By Wishtrend',
        'Còn hàng', [],
        '29000',
        '32000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ Caryophy Portulaca Mask Sheet',
        './images/nhi-product/matna/mat-na-caryophy-portulaca-mask-sheet.png',
        'Caryophy',
        'Còn hàng', [],
        '29000',
        '50000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ Dr. Morita Facial Mask More Protection',
        './images/nhi-product/matna/mat-na-dr-morita-facial-mask-more-protection.png',
        'Dr.Morita',
        'Còn hàng', [],
        '19000',
        '30000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ Dr. Morita Moisturizing Facial Mask',
        './images/nhi-product/matna/mat-na-dr-morita-moisturizing-facial-mask.png',
        'Dr.Morita',
        'Còn hàng', [],
        '23000',
        '30000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ Dr. Morita Platinum Colloid',
        './images/nhi-product/matna/mat-na-dr-morita-platinum-colloid.png',
        'Dr.Morita',
        'Còn hàng', [],
        '21000',
        '32000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ Dưỡng Da BNBG Vita Cocktail',
        './images/nhi-product/matna/mat-na-duong-da-bnbg-vita-cocktail.png',
        'BNBG',
        'Còn hàng', [],
        '28000',
        '40000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        "Mặt Nạ Dưỡng Trắng Angel's Liquid Tone Up Whitening Program Glutathione V-ampoule",
        './images/nhi-product/matna/mat-na-duong-trang-angel-s-liquid-tone-up-whitening-program-glutathione-v-ampoule.png',
        "Angel's Liquid",
        'Còn hàng', [],
        '28000',
        '40000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ dưỡng trắng Naruko Arbutin Intense Brightening Mask',
        './images/nhi-product/matna/mat-na-duong-trang-naruko-arbutin-intense-brightening-mask.png',
        'Naruko',
        'Còn hàng', [],
        '19000',
        '25000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ Dưỡng Trắng, Chống Lão Hóa Derm All Matrix Facial Dermal-Care Mask',
        './images/nhi-product/matna/mat-na-duong-trang-chong-lao-hoa-derm-all-matrix-facial-dermal-care-mask.png',
        'Derm All Matrix',
        'Còn hàng', [],
        '75000',
        '100000', [], [],
    ),
    // trang 2
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ Giấy Avif Biocell Face Mask',
        './images/nhi-product/matna/mat-na-giay-avif-biocell-face-mask.png',
        ' Avif ',
        'Còn hàng', [],
        '26000',
        '34000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ Giấy Avif Intensive Hydrating Mask',
        './images/nhi-product/matna/mat-na-giay-avif-intensive-hydrating-mask.png',
        'Avif',
        'Còn hàng', [],
        '16000',
        '26000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ Giấy Banobagi Vita Cocktail Foil Mas',
        './images/nhi-product/matna/mat-na-giay-banobagi-vita-cocktail-foil-mask.png',
        'Banobagi',
        'Còn hàng', [],
        '25000',
        '34000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ giấy dưỡng da Senka Perfect Aqua Bouncy Mask',
        './images/nhi-product/matna/mat-na-giay-duong-da-senka-perfect-aqua-bouncy-mask.png',
        'Senka',
        'Còn hàng', [],
        '24000',
        '34000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ giấy dưỡng da Senka Perfect Aqua Rich Mask',
        './images/nhi-product/matna/mat-na-giay-duong-da-senka-perfect-aqua-rich-mask.png',
        'Senka',
        'Còn hàng', [],
        '24000',
        '32000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ Giấy Foodaholic Essential Mask',
        './images/nhi-product/matna/mat-na-giay-foodaholic-essential-mask.png',
        'Foodaholic',
        'Còn hàng', [],
        '8000',
        '16000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ giấy Innisfree My Real Squeeze Mask (mẫu mới)',
        './images/nhi-product/matna/mat-na-giay-innisfree-my-real-squeeze-mask.png',
        '',
        'Còn hàng', [],
        '19000',
        '25000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ Giấy Jm Solution Hydrogel Mask',
        './images/nhi-product/matna/mat-na-giay-jm-solution-hydrogel-mask.png',
        'JM Solution',
        'Còn hàng', [],
        '22000', [], [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ giấy Naruko Mask',
        './images/nhi-product/matna/mat-na-giay-naruko-mask.png',
        'Naruko',
        'Còn hàng', [],
        '24000',
        '30000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ Giấy Skin1004 Madagascar Centella Watergel Sheet Ampoule Mask',
        './images/nhi-product/matna/mat-na-giay-skin1004-madagascar-centella-watergel-sheet-ampoule-mask.png',
        'Skin1004',
        'Còn hàng', [],
        '44000',
        '50000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ giấy dưỡng da Senka Perfect Aqua White Mask',
        './images/nhi-product/matna/mat-na-giay-duong-da-senka-perfect-aqua-white-mask.png',
        'Senka',
        'Còn hàng', [],
        '24000',
        '34000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ giấy JM Solution Mask',
        './images/nhi-product/matna/mat-na-giay-jm-solution-mask.png',
        'JM Solution',
        'Còn hàng', [],
        '19000',
        '30000', [], [],
    ),
    // trang 3
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ Giấy Some By Mi Yuja Niacin Blemish Care Serum Mask',
        './images/nhi-product/matna/mat-na-giay-some-by-mi-yuja-niacin-blemish-care-serum-mask.png',
        ' Some By Mi',
        'Còn hàng', [],
        '23000',
        '35000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ giấy Sur. Medic',
        './images/nhi-product/matna/mat-na-giay-sur-medic.png',
        'Sur.Medic',
        'Còn hàng', [],
        '23000',
        '34000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ giấy The Saem Natural Mask Sheet',
        './images/nhi-product/matna/mat-na-giay-the-saem-natural-mask-sheet.png',
        'The Saem',
        'Còn hàng', [],
        '23000',
        '35000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ HNB My Healthy Skin Detox',
        './images/nhi-product/matna/mat-na-hnb-my-healthy-skin-detox.png',
        'HNB',
        'Còn hàng', [],
        '14000',
        '25000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ hoa hồng The Cocoon True Rose Face Mask Hydrate & Soften',
        './images/nhi-product/matna/mat-na-hoa-hong-the-cocoon-true-rose-face-mask-1.png',
        'Cocoon',
        'Còn hàng', [],
        '000',
        '000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ Innisfree Super Volcanic CLAY Mousse Mask 2X (chai)',
        './images/nhi-product/matna/mat-na-innisfree-super-volcanic-clay-mousse-mask-2x-chai.png',
        'Innisfree',
        'Còn hàng', [],
        '275000',
        '300000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ Klairs Midnight Blue',
        './images/nhi-product/matna/mat-na-klairs-midnight-blue.png',
        'Klairs',
        'Còn hàng', [],
        '39000',
        '62000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ Klairs Rich Moist Soothing Tencel Sheet Mask',
        './images/nhi-product/matna/mat-na-klairs-rich-moist-soothing-tencel-sheet-mask.png',
        'Klairs',
        'Còn hàng', [],
        '39000',
        '50000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ mắt JM Solution Golden Cocoon Home Esthetic Eye Patch (60 miếng)',
        './images/nhi-product/matna/mat-na-mat-jm-solution-golden-cocoon-home-esthetic-eye-patch-60-mieng.png',
        'JM Solution',
        'Còn hàng', [],
        '149000',
        '169000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ Mediheal',
        './images/nhi-product/matna/mat-na-mediheal.png',
        'Mediheal',
        'Còn hàng', [],
        '17000',
        '30000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ Melano CC Whitening Mask',
        './images/nhi-product/matna/mat-na-melano-cc-whitening-mask.png',
        'Rohto',
        'Còn hàng', [],
        '205000',
        '320000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ SexyLook Intensive Black Facial Mask',
        './images/nhi-product/matna/mat-na-sexylook-black-facial-mask.png',
        'Sexylook',
        'Còn hàng', [],
        '30000',
        '45000', [], [],
    ),
    // trang 4
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ Sexylook nâng cơ 360º',
        './images/nhi-product/matna/mat-na-sexylook-nang-co-360.png',
        'Sexylook',
        'Còn hàng', [],
        '16000',
        '30000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ sinh học cao cấp Sense Plus Premium Coconut Bio-Cell Mask',
        './images/nhi-product/matna/mat-na-sinh-hoc-cao-cap-sense-plus-premium-coconut-bio-cell-mask.png',
        'Sense Plus',
        'Còn hàng', [],
        '29000',
        '35000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ Some By Mi Glow Luminous Ampoule Mask',
        './images/nhi-product/matna/mat-na-some-by-mi-glow-luminous-ampoule-mask.png',
        'Some By Mi',
        'Còn hàng', [],
        '26000',
        '40000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ Some By Mi Super Matcha Pore Clean Clay Mask 100g',
        './images/nhi-product/matna/mat-na-some-by-mi-super-matcha-pore-clean-clay-mask-100g.png',
        'Some By Mi',
        'Còn hàng', [],
        '225000',
        '410000', [], [],
    ),
   
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ sủi bọt thải độc Su:m 37 Bright Award Bubble-De Mask',
        './images/nhi-product/matna/mat-na-sui-bot-thai-doc-su-m-37-bright-award-bubble-de-mask.png',
        'Sum37',
        'Còn hàng', [],
        '8500',
        '15000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt nạ thạch Sexylook Pure Jelly',
        './images/nhi-product/matna/mat-na-thach-sexylook-pure-jelly.png',
        'Sexylook',
        'Còn hàng', [],
        '55000',
        '70000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ Tiam My Signature Vita Red Mask',
        './images/nhi-product/matna/mat-na-tiam-my-signature-vita-red-mask.png',
        'Tiam',
        'Còn hàng', [],
        '26000',
        '35000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-giay',
        'Mặt Nạ Trị Mụn Derladie Witch Hazel Mask Pack',
        './images/nhi-product/matna/mat-na-tri-mun-derladie-witch-hazel-mask-pack.png',
        'Derladie',
        'Còn hàng', [],
        '25000',
        '35000', [], [],
    ),

    // mat na dat set
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-dat-set',
        'Sample mặt nạ Innisfree Super Volcanic Pore Clay Mask 2X (gói) - mẫu mới',
        './images/nhi-product/matna/sample-mat-na-innisfree-super-volcanic-pore-clay-mask-2x-goi-mau-moi.png',
        'Innisfree',
        'Còn hàng', [],
        '8000',
        '12000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-dat-set',
        'Mặt Nạ Đất Sét Kiehl’s Rare Earth Deep Pore Cleansing Masque',
        './images/nhi-product/matna/mat-na-dat-set-kiehl-s-rare-earth-deep-pore-cleansing-masque.png',
        'Kiehl’s',
        'Còn hàng', [],
        '168000',
        '210000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-dat-set',
        'Mặt nạ đất sét Innisfree Super Volcanic Pore Clay Mask 2X (hũ)',
        './images/nhi-product/matna/mat-na-dat-set-innisfree-super-volcanic-pore-clay-mask-2x-hu.png',
        'Innisfree',
        'Còn hàng', [],
        '199000',
        '269000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-dat-set',
        'Thanh lăn đất sét Neogen Canadian Clay Pore Stick Mask',
        './images/nhi-product/matna/thanh-lan-dat-set-neogen-canadian-clay-pore-stick-mask.png',
        'Neogen',
        'Còn hàng', [],
        '269000',
        '390000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-dat-set',
        'Mặt nạ đất sét Re:p Bio Fresh Mask With Real Herbs 130g',
        './images/nhi-product/matna/mat-na-dat-set-re-p-bio-fresh-mask-with-real-calming-herbs-130g.png',
        'Re:p',
        'Còn hàng', [],
        '439000',
        '590000', [], [],
    ),

    // mat na moi
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-moi-1',
        'Mặt nạ môi dưỡng ẩm Sense Plus Hydrating Lip Mask',
        './images/nhi-product/matna/mat-na-moi-duong-am-sense-plus-hydrating-lip-mask.png',
        'Sense Plus',
        'Còn hàng', [],
        '15000',
        '17000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-moi-1',
        'Mặt nạ ngủ môi Care:nel Lip Sleeping Mask',
        './images/nhi-product/matna/mat-na-ngu-moi-care-nel-lip-sleeping-mask.png',
        'Care:nel',
        'Còn hàng', [],
        '55000', [], [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-moi-1',
        'Mặt Nạ Ngủ Môi Laneige Lip Sleeping Mask',
        './images/nhi-product/matna/mat-na-ngu-moi-laneige-lip-sleeping-mask.png',
        'Laneige',
        'Còn hàng', [],
        '49000',
        '75000', [], [],
    ),
    //    mat na lot
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-lot-mun',
        'Mặt nạ lột Innisfree Super Volcanic Peel Off Mask 2X',
        './images/nhi-product/matna/mat-na-lot-mun-innisfree-super-volcanic-peel-off-mask-2x.png',
        'Innisfree ',
        'Còn hàng', [],
        '170000',
        '220000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-lot-mun',
        'Mặt nạ lột tẩy tế bào chết Real Calendula Peel Off Pack April Skin',
        './images/nhi-product/matna/mat-na-lot-tay-te-bao-chet-real-calendula-peel-off-pack-april-skin.png',
        'April Skin',
        'Còn hàng', [],
        '279000',
        '300000', [], [],
    ),

    // mat na mat
    new Product(
        'cham-soc-da',
        'mask-mat-na-1',
        'mat-na-mat',
        'Mặt nạ mắt dưỡng ẩm Sense Plus Moisturizing Eye Mask',
        './images/nhi-product/matna/mat-na-mat-duong-am-sense-plus-moisturizing-eye-mask.png',
        'Sense Plus',
        'Còn hàng', [],
        '16000',
        '22000', [], [],
    ),


    // dưỡng da
    // kem duong da
    // trang 1
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng Skin1004 Madagascar Centella Cream',
        './images/nhi-product/kemduong/kem-duong-skin1004-madagascar-centella-cream.png',
        'Skin1004',
        'Còn hàng', [],
        '269000',
        '389000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        "Kem Dưỡng I'm From Vitamin Tree Water-Gel",
        './images/nhi-product/kemduong/kem-duong-i-m-from-vitamin-tree-water-gel.png',
        "I'm From",
        'Còn hàng', [],
        '320000',
        '475000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Dear Klairs Midnight Blue Calming Cream',
        './images/nhi-product/kemduong/kem-duong-dear-klairs-midnight-blue-calming-cream.png',
        'Klairs',
        'Còn hàng', [],
        '279000',
        '375000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng phục hồi da Klairs Midnight Blue Calming Cream',
        './images/nhi-product/kemduong/kem-duong-phuc-hoi-da-klairs-midnight-blue-calming-cream.png',
        'Klairs',
        'Còn hàng', [],
        '349000',
        '420000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng trị mụn Some By Mi AHA-BHA-PHA 30 Days Miracle Cream',
        './images/nhi-product/kemduong/kem-duong-tri-mun-some-by-mi-aha-bha-pha-30-days-miracle-cream.png',
        'Some By Mi',
        'Còn hàng', [],
        '245000',
        '395000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Cho Da Khô Klairs Rich Moist Soothing Cream',
        './images/nhi-product/kemduong/kem-duong-cho-da-kho-klairs-rich-moist-soothing-cream.png',
        'Klairs',
        'Còn hàng', [],
        '309000', [], [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Nâng Tông Trắng Da Sur.medic Super Glutathione 100 Bright Tone Up Cream',
        './images/nhi-product/kemduong/kem-nang-tong-trang-da-sur-medic-super-glutathione-100-bright-tone-up-cream.png',
        'Sur.medic',
        'Còn hàng', [],
        '190000',
        '280000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Trắng Innisfree Jeju Cherry Blossom Tone-Up Cream',
        './images/nhi-product/kemduong/kem-duong-innisfree-jeju-cherry-blossom.png',
        'Innisfree',
        'Còn hàng', [],
        '285000',
        '400000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem chấm mụn Some By Mi Super Miracle Spot All Kill Cream',
        './images/nhi-product/kemduong/kem-cham-mun-some-by-mi-super-miracle-spot-all-kill-cream.png',
        'Some By Mi',
        'Còn hàng', [],
        '239000',
        '400000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem ốc sên Some By Mi Snail Truecica Miracle Repair Cream',
        './images/nhi-product/kemduong/kem-oc-sen-some-by-mi-snail-truecica-miracle-repair-cream.png',
        'Some By Mi',
        'Còn hàng', [],
        '289000',
        '350000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Trắng Da Ban Đêm Angel’s Liquid 7 Day Whitening Program Glutathione',
        './images/nhi-product/kemduong/kem-duong-trang-da-angel-s-liquid-7-day-whitening-program-glutathione-700-v-cream.png',
        "Angel's Liquid",
        'Còn hàng', [],
        '429000',
        '500000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Some By Mi Red Teatree Cicassoside Final Solution Cream',
        './images/nhi-product/kemduong/kem-duong-some-by-mi-red-teatree-cicassoside-final-solution-cream.png',
        'Some By Mi',
        'Còn hàng', [],
        '259000',
        '350000', [], [],
    ),
    // trang 2
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng V7 Dr.jact+ ( Full )',
        './images/nhi-product/kemduong/kem-duong-v7-toning-light.png',
        'Dr.jact+',
        'Còn hàng', [],
        '425000',
        '459000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Mờ Thâm Nám Angel’s Liquid 7Day Whitening Program Glutathione+Niacinamide',
        './images/nhi-product/kemduong/kem-mo-tham-nam-angel-s-liquid-7day-whitening-program-glutathione-niacinamide.png',
        'Angel’s Liquid',
        'Còn hàng', [],
        '439000',
        '500000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Bộ Dưỡng Ẩm Innisfree Jeju Cherry Blossom Special Kit (mini)',
        './images/nhi-product/kemduong/bo-duong-am-innisfree-jeju-cherry-blossom-special-kit.png',
        'Innisfree',
        'Còn hàng', [],
        '115000',
        '150000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        "Bộ dưỡng trắng da 7 ngày Angel's Liquid Whitening Program Glutathione",
        './images/nhi-product/kemduong/set-mini-duong-trang-da-7-ngay-angel-s-liquid-whitening-program-glutathione.png',
        "Angel's Liquid",
        'Còn hàng', [],
        '349000',
        '600000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng 9 Wishes Rice Radiance Cream 50ml',
        './images/nhi-product/kemduong/kem-duong-9-wishes-rice-radiance-cream-50ml.png',
        '9 Wishes',
        'Còn hàng', [],
        '279000',
        '460000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Ẩm 9 Wishes Pine Clear Recovery Treatment Cream',
        './images/nhi-product/kemduong/kem-duong-am-9-wishes-pine-clear-recovery-treatment-cream.png',
        '9 Wishes',
        'Còn hàng', [],
        '249000',
        '390000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Trắng Da, Trị Nám DongSung Rannce Cream',
        './images/nhi-product/kemduong/kem-duong-trang-da-tri-nam-dongsung-rannce-cream.png',
        'DongSung',
        'Còn hàng', [],
        '65000',
        '100000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Trắng Goodal Premium Tone Up Cream',
        './images/nhi-product/kemduong/kem-duong-trang-goodal-premium-tone-up-cream.png',
        'Goodal',
        'Còn hàng', [],
        '239000',
        '400000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng trắng toàn thân Secret Key Snow White Milky Pack',
        './images/nhi-product/kemduong/kem-duong-trang-toan-than-secret-key-snow-white-milky-pack.png',
        'Secret Key',
        'Còn hàng', [],
        '179000',
        '270000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng trắng da ban đêm Senka White Beauty Glow Gel Cream 50gr',
        './images/nhi-product/kemduong/kem-duong-trang-da-ban-dem-senka-white-beauty-glow-gel-cream-50gr.png',
        'Senka',
        'Còn hàng', [],
        '299000',
        '249000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Da AHC Capture Solution Max Cream',
        './images/nhi-product/kemduong/kem-duong-da-ahc-capture-solution-max-cream.png',
        'AHC',
        'Còn hàng', [],
        '199000',
        '300000', [], [],
    ),

    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Bộ dưỡng da Some By Mi AHA BHA PHA 30 Days Miracle Solution 4 Step Kit Edition (4 Items)',
        './images/nhi-product/kemduong/bo-duong-da-some-by-mi-aha-bha-pha-30-days-miracle-solution-4-step-kit-edition.png',
        'Some By Mi',
        'Còn hàng', [],
        '269000',
        '399000', [], [],
    ),

    // trang 3

    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Epona Dầu Ngựa Làm Sáng Da, Ngừa Lão Hóa All-In-One Total Skin Care Intensive (Đỏ)',
        './images/nhi-product/kemduong/kem-duong-epona-dau-ngua-lam-sang-da-ngua-lao-hoa-all-in-one-total-skin-care-intensive.png',
        'Epona',
        'Còn hàng', [],
        '339000',
        '420000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng Derladie Witch Hazel Perfect Vitamin Gel Cream',
        './images/nhi-product/kemduong/kem-duong-derladie-witch-hazel-perfect-vitamin-gel-cream.png',
        'Derladie',
        'Còn hàng', [],
        '399000',
        '500000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng trắng Tiam My Signature Red C Cream',
        './images/nhi-product/kemduong/kem-duong-trang-tiam-my-signature-red-c-cream.png',
        'Tiam',
        'Còn hàng', [],
        '309000',
        '355000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Ẩm Innisfree Jeju Cherry Blossom Jelly Cream',
        './images/nhi-product/kemduong/kem-duong-am-innisfree-jeju-cherry-blossom-jelly-cream.png',
        'Innisfree',
        'Còn hàng', [],
        '285000',
        '339000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng nâng tone Black Rouge Pink Tone Up Cream',
        './images/nhi-product/kemduong/kem-duong-nang-tone-black-rouge-pink-tone-up-cream.png',
        'Black Rouge',
        'Còn hàng', [],
        '179000',
        '200000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng trắng da MediskinByC Pure C+ Recovery Brightening Cream (mẫu mới)',
        './images/nhi-product/kemduong/kem-duong-trang-da-mediskinbyc-pure-c-recovery-brightening-cream.png',
        'MediskinByC',
        'Còn hàng', [],
        '389000', [], [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Sáng Da Some By Mi Yuja Niacin Brightening Moisture Gel Cream',
        './images/nhi-product/kemduong/kem-duong-sang-da-some-by-mi-yuja-niacin-brightening-moisture-gel-cream.png',
        'Some By Mi',
        'Còn hàng', [],
        '185000',
        '320000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng da Hồng Sâm Epona (vàng)',
        './images/nhi-product/kemduong/kem-duong-da-hong-sam-epona-vang.png',
        'Epona',
        'Còn hàng', [],
        '349000',
        '432000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Gel dưỡng phục hồi da La Roche-Posay CICAPLAST GEL B5 40ml',
        './images/nhi-product/kemduong/gel-duong-phuc-hoi-da-la-roche-posay-cicaplast-gel-b5-40ml.png',
        'Roche-Posay',
        'Còn hàng', [],
        '390000',
        '405000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Da Forencos Wonderwerk Marula',
        './images/nhi-product/kemduong/kem-duong-da-forencos-wonderwerk-marula-mini-10ml.png',
        'Forencos',
        'Còn hàng', [],
        '79000',
        '150000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Bộ dưỡng trắng Some By Mi Yuja Niacin 30 Days Brightening Starter Kit',
        './images/nhi-product/kemduong/bo-duong-trang-some-by-mi-yuja-niacin-30-days-brightening-starter-kit.png',
        'Some By Mi',
        'Còn hàng', [],
        '285000',
        '400000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Bộ Dưỡng Trị Mụn Some By Mi AHA-BHA-PHA 30 Days Miracle Travel Kit',
        './images/nhi-product/kemduong/bo-duong-tri-mun-some-by-mi-aha-bha-pha-30-days-miracle-travel-kit.png',
        'Some By Mi',
        'Còn hàng', [],
        '259000',
        '349000', [], [],
    ),
    // trang 4
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng La Roche-Posay EFFACLAR DUO + (Tặng Sửa rửa mặt 50ml)',
        './images/nhi-product/kemduong/kem-duong-la-roche-posay-effaclar-duo.png',
        'La Roche-Posay',
        'Còn hàng', [],
        '359000',
        '435000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Ẩm Neutrogena Hydro Boost',
        './images/nhi-product/kemduong/kem-duong-am-neutrogena-hydro-boost.png',
        'Neutrogena',
        'Còn hàng', [],
        '149000',
        '199000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Gel Dưỡng Ẩm JM Solution Marine Luminous Pearl',
        './images/nhi-product/kemduong/gel-duong-am-jm-solution-marine-luminous-pearl.png',
        'JM Solution',
        'Còn hàng', [],
        '85000',
        '120000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng da ban ngày Senka White Beauty Glow UV Cream 50g',
        './images/nhi-product/kemduong/kem-duong-da-ban-ngay-senka-white-beauty-glow-uv-cream-50g.png',
        'Senka',
        'Còn hàng', [],
        '229000',
        '370000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng giảm mụn đầu đen và giảm bóng nhờn La Roche-Posay EFFACLAR K (+)',
        './images/nhi-product/kemduong/kem-duong-giam-mun-dau-den-va-giam-bong-nhon-la-roche-posay-effaclar.png',
        'La Roche-Posay',
        'Còn hàng', [],
        '399000', [], [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Bộ Kit dưỡng trắng Tiam My Signature Red C',
        './images/nhi-product/kemduong/bo-kit-duong-trang-tiam-my-signature-red-c.png',
        'Tiam',
        'Còn hàng', [],
        '309000',
        '350000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Naturie Hatomugi Skin Conditioning Gel',
        './images/nhi-product/kemduong/kem-duong-naturie-hatomugi-skin-conditioning-gel.png',
        'Naturie',
        'Còn hàng', [],
        '219000',
        '280000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem giảm mụn chuyên biệt La Roche-Posay EFFACLAR A.I 15ml',
        './images/nhi-product/kemduong/kem-giam-mun-chuyen-biet-la-roche-posay-effaclar-a-i-15ml.png',
        'La Roche-Posay',
        'Còn hàng', [],
        '445000',
        '510000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng da By Wishtrend Vitamin 75 Maximizing Cream',
        './images/nhi-product/kemduong/kem-duong-da-by-wishtrend-vitamin-75-maximizing-cream.png',
        'By Wishtrend',
        'Còn hàng', [],
        '289000',
        '460000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng da ban đêm dành cho nam Mdoc Night Effects Whitening Gel 100g',
        './images/nhi-product/kemduong/kem-duong-da-ban-dem-danh-cho-nam-mdoc-night-effects-whitening-gel-100g.png',
        'Mdoc',
        'Còn hàng', [],
        '549000',
        '729000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng V7 Dr. Jart+',
        './images/nhi-product/kemduong/kem-duong-v7-dr-jart.png',
        'Dr.Jart+',
        'Còn hàng', [],
        '148000',
        '169000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng nâng tone Body Sur.medic Super Glutathione 100 Bright Body Tone Up Cream',
        './images/nhi-product/kemduong/kem-duong-nang-tone-body-sur-medic-super-glutathione-100-bright-body-tone-up-cream.png',
        'Sur.medic',
        'Còn hàng', [],
        '329000',
        '409000', [], [],
    ),
    // trang 5
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng Melano CC',
        './images/nhi-product/kemduong/kem-duong-melano-cc.png',
        'Rohto',
        'Còn hàng', [],
        '175000',
        '300000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        "Kem Dưỡng Trắng da ban ngày Angel's Liquid Glutathione 700 Light Tone-Up Cream SPF50+/PA+++",
        './images/nhi-product/kemduong/kem-duong-trang-da-ban-ngay-angel-s-liquid-glutathione-700-light-tone-up-cream-spf50-pa.png',
        "Angel's Liquid",
        'Còn hàng', [],
        '439000',
        '730000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Sample Kem Dưỡng Da Green Tea Seed Cream (gói)',
        './images/nhi-product/kemduong/sample-green-tea-seed-cream-goi.png',
        'Innisfree',
        'Còn hàng', [],
        '6000', [], [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Hạt Trà Xanh Innisfree Green Tea Seed Cream',
        './images/nhi-product/kemduong/kem-duong-hat-tra-xanh-innisfree-green-tea-seed-cream.png',
        'Innisfree',
        'Còn hàng', [],
        '305000',
        '389000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Bộ Dưỡng Some By Mi Miracle AC SOS Kit (set 4 items)',
        './images/nhi-product/kemduong/bo-duong-some-by-mi-miracle-ac-sos-kit.png',
        'Some By Mi',
        'Còn hàng', [],
        '295000',
        '400000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng trắng da Rosie Jafocean Jam (mẫu mới)',
        './images/nhi-product/kemduong/kem-duong-trang-da-rosie-jafocean-jam-mau-moi.png',
        'Seoul Rose',
        'Còn hàng', [],
        '249000',
        '300000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng The Ordinary Vitamin C Suspension 30% In Silicone',
        './images/nhi-product/kemduong/kem-duong-the-ordinary-vitamin-c-suspension-30-in-silicone.png',
        'The Ordinary',
        'Còn hàng', [],
        '215000',
        '290000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng ẩm Embryolisse Lait Creme Concentre',
        './images/nhi-product/kemduong/kem-duong-am-embryolisse-lait-creme-concentre.png',
        'Embryolisse',
        'Còn hàng', [],
        '375000',
        '470000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Bộ làm sạch sâu, giảm bã nhờn và nuôi dưỡng da Vichy',
        './images/nhi-product/kemduong/bo-lam-sach-sau-giam-ba-nhon-va-nuoi-duong-da-vichy.png',
        'Vichy',
        'Còn hàng', [],
        '319000',
        '405000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Bộ Vitamin Duo Trial Kit Klairs',
        './images/nhi-product/kemduong/bo-vitamin-duo-trial-kit-klairs.png',
        'Klairs',
        'Còn hàng', [],
        '299000',
        '480000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Da Ban Ngày/Ban Đêm Christian Lenart Crème De Nuit Anti-âge Nourriss',
        './images/nhi-product/kemduong/kem-duong-da-ban-dem-christian-lenart-creme-de-nuit-anti-age-nourrissante-60ml.png',
        'Christian Lenart',
        'Còn hàng', [],
        '239000',
        '420000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Trị Nám, Tàn Nhang Melasma-X 3D Whitening Clinic Beaute',
        './images/nhi-product/kemduong/kem-tri-nam-tan-nhang-melasma-x-3d-whitening-clinic-beaute.png',
        '3W Clinic',
        'Còn hàng', [],
        '228000',
        '300000', [], [],
    ),
    // trang 6
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng Sur.medic+ Super Peptide 100tm Collagen Lifting Cream 50ml',
        './images/nhi-product/kemduong/kem-duong-sur-medic-super-peptide-100tm-collagen-lifting-cream-50ml.png',
        'Sur.medic+',
        'Còn hàng', [],
        '439000',
        '790000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng ẩm Vichy Aqualia Thermal ( Tặng Serum Mineral 89 10ml)',
        './images/nhi-product/kemduong/kem-duong-am-vichy-aqualia-thermal.png',
        'Vichy',
        'Còn hàng', [],
        '639000',
        '835000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng da Forencos Wonderwerk Marula Tone Up Cream 50ml',
        './images/nhi-product/kemduong/kem-duong-da-forencos-wonderwerk-marula-tone-up-cream-50ml.png',
        'Forencos',
        'Còn hàng', [],
        '649000',
        '1000000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng trắng Mdoc Whitening Tone Up Cream 50 ml',
        './images/nhi-product/kemduong/kem-duong-trang-mdoc-whitening-tone-up-cream-50-ml.png',
        'Mdoc',
        'Còn hàng', [],
        '499000',
        '719000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng trắng da nâng tông 3 trong 1 Senka White Beauty Cream 100gr',
        './images/nhi-product/kemduong/kem-duong-trang-da-nang-tong-3-trong-1-senka-white-beauty-cream-100gr.png',
        'Senka',
        'Còn hàng', [],
        '265000',
        '290000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng Simple Vital Vitamin Day Cream',
        './images/nhi-product/kemduong/kem-duong-ban-ngay-simple-vital-vitamin-day-cream.png',
        'Simple',
        'Còn hàng', [],
        '130000',
        '150000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Bộ Kit Cocoon Bí Đao Chăm Sóc Da Mụn',
        './images/nhi-product/kemduong/bo-kit-cocoon-bi-dao-cham-soc-da-mun.png',
        'Cocoon',
        'Còn hàng', [],
        '130000',
        '199000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Bộ Sản Phẩm Chăm Sóc Cho Da Mụn D Program Acne Set',
        './images/nhi-product/kemduong/bo-san-pham-cham-soc-cho-da-mun-d-program-acne-set.png',
        'D Program',
        'Còn hàng', [],
        '199000',
        '245000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Bộ Dưỡng Da cho da khô D Program Moist Care Set (Lotion 23ml + Emulsion 11ml)',
        './images/nhi-product/kemduong/bo-duong-da-cho-da-kho-d-program-moist-care-set.png',
        'D Program',
        'Còn hàng', [],
        '199000',
        '245000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Bộ giảm mụn, thâm mụn & thu nhỏ lỗ chân lông La Roche-Posay',
        './images/nhi-product/kemduong/bo-giam-mun-tham-mun-thu-nho-lo-chan-long-la-roche-posay.png',
        'La Roche-Posay',
        'Còn hàng', [],
        '699000',
        '920000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng chống lão hoá Orchid Cream Innisfree',
        './images/nhi-product/kemduong/kem-duong-orchid-cream-innisfree.png',
        'Innisfree',
        'Còn hàng', [],
        '355000',
        '450000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng da Innisfree Green Tea Balancing Cream EX (mẫu mới 2019)',
        './images/nhi-product/kemduong/kem-duong-da-innisfree-green-tea-balancing-cream-ex.png',
        'Innisfree',
        'Còn hàng', [],
        '235000',
        '300000', [], [],
    ),
    // trang 7
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng da Salmon Oil Cream',
        './images/nhi-product/kemduong/kem-duong-da-salmon-oil-cream.png',
        'Cre8Skin',
        'Còn hàng', [],
        '339000',
        '480000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Innisfree Blueberry Rebalancing Cream',
        './images/nhi-product/kemduong/kem-duong-innisfree-blueberry-rebalancing-cream.png',
        'Innisfree',
        'Còn hàng', [],
        '165000',
        '220000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng Meishoku Whitening Essence Cream',
        './images/nhi-product/kemduong/kem-duong-meishoku-whitening-essence-cream.png',
        'Meishoku',
        'Còn hàng', [],
        '215000',
        '300000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem Dưỡng Da Trắng Hồng AHC Aura Secret Tone Up Cream',
        './images/nhi-product/kemduong/kem-duong-da-trang-hong-cang-bong-ahc-aura-secret-tone-up-cream.png',
        'AHC',
        'Còn hàng', [],
        '309000',
        '420000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng phục hồi và làm dịu da Eau Thermale Jonzac Reactive High Tolerance Rich Cream 40ml',
        './images/nhi-product/kemduong/kem-duong-phuc-hoi-va-lam-diu-da-eau-thermale-jonzac-reactive-high-tolerance-rich-cream-40ml.png',
        'Jonzac',
        'Còn hàng', [],
        '229000',
        '723000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng mịn da Eau Thermale Jonzac Perfection Perfect Skin Smoothing Cream',
        './images/nhi-product/kemduong/kem-duong-min-da-eau-thermale-jonzac-perfection-perfect-skin-smoothing-cream.png',
        'Jonzac',
        'Còn hàng', [],
        '369000',
        '704000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng dạng gel sữa dành cho da mụn Vichy Normaderm Phytosolution (Tặng kèm 2 kem chống nắng 3ml)',
        './images/nhi-product/kemduong/kem-duong-dang-gel-sua-danh-cho-da-mun-vichy-normaderm-phytosolution.png',
        'Vichy',
        'Còn hàng', [],
        '449000',
        '570000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Kem dưỡng trắng da ban đêm Forencos Peptide Redensifying Intensive Cream (Tím)',
        './images/nhi-product/kemduong/kem-duong-trang-da-ban-dem-forencos-peptide-redensifying-intensive-cream.png',
        'Forencos ',
        'Còn hàng', [],
        '775000',
        '1200000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-duong-da',
        'Nước dưỡng làm mềm & trắng da Senka White Beauty Lotion I',
        './images/nhi-product/kemduong/nuoc-duong-lam-mem-trang-da-senka-white-beauty-lotion-i.png',
        'Senka',
        'Còn hàng', [],
        '170000',
        '300000', [], [],
    ),


    // kem chong nang
    // trang 1
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem Chống Nắng 3W Intensive UV',
        './images/nhi-product/kemchongnang/kem-chong-nang-3w-intensive-uv.png',
        '3W Clinic',
        'Còn hàng', [],
        '55000₫ ',
        '90000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng SJM Medical Anti - UV Dr. Skincare (60g)',
        './images/nhi-product/kemchongnang/kem-chong-nang-sjm-medical-anti-uv-dr-skincare-60g.png',
        'Dr.Skincare',
        'Còn hàng', [],
        '65000',
        '115000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem Chống Nắng Omi Sun Bears',
        './images/nhi-product/kemchongnang/kem-chong-nang-omi-sun-bears.png',
        'Omi',
        'Còn hàng', [],
        '75000',
        '115000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng Nature Republic California Aloe Daily Sun Block (tuýp)',
        './images/nhi-product/kemchongnang/kem-chong-nang-nature-republic-california-aloe-daily-sun-block-tuyp.png',
        'Nature Republic',
        'Còn hàng', [],
        '110000',
        '160000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Xịt chống nắng JM Solution Luminous Sun Spray',
        './images/nhi-product/kemchongnang/xit-chong-nang-jm-solution-luminous-sun-spray.png',
        'JM Solution',
        'Còn hàng', [],
        '129000',
        '200000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem Chống Nắng The Saem Eco Earth Power Pink Sun Cream',
        './images/nhi-product/kemchongnang/kem-chong-nang-the-saem-eco-earth-power-pink-sun-cream.png',
        'The Saem',
        'Còn hàng', [],
        '135000',
        '175000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem Chống Nắng UV Perfect Loreal Paris',
        './images/nhi-product/kemchongnang/kem-chong-nang-uv-perfect-loreal-paris.png',
        " L'Oreal Paris",
        'Còn hàng', [],
        '135000',
        '148000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Tinh chất chống nắng Senka Perfect UV Essence',
        './images/nhi-product/kemchongnang/tinh-chat-chong-nang-senka-perfect-uv-essence.png',
        'Senka ',
        'Còn hàng', [],
        '149000',
        '240000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Sữa chống nắng Senka Perfect UV Milk N 40ml',
        './images/nhi-product/kemchongnang/sua-chong-nang-senka-perfect-uv-milk-n-40ml.png',
        'Senka ',
        'Còn hàng', [],
        '149000',
        '160000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Gel sữa chống nắng Senka Perfect UV Gel 80ml',
        './images/nhi-product/kemchongnang/gel-sua-chong-nang-senka-perfect-uv-gel-80ml-1.png',
        'Senka',
        'Còn hàng', [],
        '175000',
        '190000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem Chống Nắng Tone Up No Sebum Innisfree',
        './images/nhi-product/kemchongnang/kem-chong-nang-tone-up-no-sebum-innisfree.png',
        'Innisfree ',
        'Còn hàng', [],
        '189000',
        '250000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem Chống Nắng Nâng Tone Da Sunplay Skin Aqua Tone Up UV Essence',
        './images/nhi-product/kemchongnang/kem-chong-nang-nang-tone-da-sunplay-skin-aqua-tone-up-uv-essence.png',
        'Skin Aqua',
        'Còn hàng', [],
        '189000',
        '289000', [], [],
    ),
    // trang 2
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem Chống Nắng Dưỡng Da Rosie Seoulrose First Essence Whitening Serum Sunscreen SPFF45 PA+++',
        './images/nhi-product/kemchongnang/kem-chong-nang-duong-da-seoulrose-first-essence-whitening-serum-sunscreen-spff45-pa.png',
        'Seoul Rose',
        'Còn hàng', [],
        '199000',
        '260000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng Intensive Triple Shield Innisfree',
        './images/nhi-product/kemchongnang/kem-chong-nang-intensive-triple-shield-innisfree.png',
        'Innisfree',
        'Còn hàng', [],
        '199000',
        '265000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Set Kem chống nắng dạng thỏi Sur.medic Super Ceramide + Toner 50ml',
        './images/nhi-product/kemchongnang/set-kem-chong-nang-dang-thoi-sur-medic-super-ceramide-toner-50ml.png',
        'Sur.Medic ',
        'Còn hàng', [],
        '199000',
        '289000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem Chống Nắng 9 Wishes Pine Clear Recovery Treatment Sunscreen SPF50+/PA++++',
        './images/nhi-product/kemchongnang/kem-chong-nang-lam-9-wishes-pine-clear-recovery-treatment-sunscreen-spf50-pa-50ml.png',
        '9 Wishes',
        'Còn hàng', [],
        '199000',
        '320000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng Rosie First Essence Whitening Serum Sunscreen',
        './images/nhi-product/kemchongnang/kem-chong-nang-rosie-first-essence-whitening-serum-sunscreen.png',
        'Seoul Rose ',
        'Còn hàng', [],
        '199000',
        '230000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem Chống Nắng Innisfree Intensive Long Lasting Sunscreen EX',
        './images/nhi-product/kemchongnang/kem-chong-nang-innisfree-intensive-long-lasting-sunscreen-ex.png',
        'Innisfree',
        'Còn hàng', [],
        '199000',
        '250000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng 9 Wishes Sun Moisturizer',
        './images/nhi-product/kemchongnang/kem-chong-nang-9-wishes-sun-moisturizer.png',
        '9 Wishes',
        'Còn hàng', [],
        '199000',
        '380000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng trắng da Rosa Perfect Whitening',
        './images/nhi-product/kemchongnang/kem-chong-nang-trang-da-rosa-perfect-whitening.png',
        'Seoul Rose ',
        'Còn hàng', [],
        '229000',
        '260000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        "Kem Chống Nắng L'Oreal UV Defender Serum Protector",
        './images/nhi-product/kemchongnang/kem-chong-nang-l-oreal-uv-defender-serum-protector.png',
        "L'Oreal",
        'Còn hàng', [],
        '259000',
        [], [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem Chống Nắng Naruko Tea Tree Anti Acne Sunscreen',
        './images/nhi-product/kemchongnang/kem-chong-nang-naruko-tea-tree-anti-acne-sunscreen.png',
        'Naruko',
        'Còn hàng', [],
        '265000',
        '365000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem Chống Nắng Skin1004 Madagascar Centella Air-Fit Suncream',
        './images/nhi-product/kemchongnang/kem-chong-nang-skin1004-madagascar-centella-air-fit-suncream.png',
        'Skin1004 ',
        'Còn hàng', [],
        '279000',
        '395000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng Caryophy Smart Sunscreen Tone Up (50ml)',
        './images/nhi-product/kemchongnang/kem-chong-nang-caryophy-smart-sunscreen-tone-up-50ml.png',
        'Caryophy ',
        'Còn hàng', [],
        '288000',
        '380000', [], [],
    ),
    // trang 3
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem nền Trang Điểm Chống Nắng Anessa Perfect UV Sunscreen Skincare BB Foundation SPF50+/ PA++++ 25ml',
        './images/nhi-product/kemchongnang/kem-nen-trang-diem-chong-nang-anessa-perfect-uv-sunscreen-skincare-bb-foundation-spf50-pa-25ml.png',
        'Anessa',
        'Còn hàng', [],
        '289000',
        '375000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng Neogen Dermalogy Day Light Protection Sunscreen',
        './images/nhi-product/kemchongnang/kem-chong-nang-neogen-dermalogy-day-light-protection-sunscreen.png',
        'Neogen',
        'Còn hàng', [],
        '299000',
        '405000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem Chống Nắng Dưỡng Trắng Tiam Vita Red Sunscreen',
        './images/nhi-product/kemchongnang/kem-chong-nang-duong-trang-tiam-vita-red-sunscreen.png',
        'Tiam',
        'Còn hàng', [],
        '309000',
        '400000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Xịt chống nắng Anessa Perfect UV Sunscreen Skincare Spray A 60gr',
        './images/nhi-product/kemchongnang/xit-chong-nang-anessa-perfect-uv-sunscreen-skincare-spray-a-60gr.png',
        'Anessa',
        'Còn hàng', [],
        '330000',
        '435000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng chống ô nhiễm và bụi mịn Vichy Capital Soleil Matterend 3 in 1 (Tặng tẩy trang 50ml)',
        './images/nhi-product/kemchongnang/kem-chong-nang-chong-o-nhiem-va-bui-min-vichy-capital-soleil-matterend-3-in-1.png',
        'Vichy',
        'Còn hàng', [],
        '399000',
        '500000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng cải thiện dấu hiệu lão hóa Vichy Anti Age 3 in 1 (Tặng Serum 15ml)',
        './images/nhi-product/kemchongnang/kem-chong-nang-cai-thien-dau-hieu-lao-hoa-vichy-anti-age-3-in-1.png',
        'Vichy',
        'Còn hàng', [],
        '399000',
        '520000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng Vichy Ideal Soleil ( Tặng xịt khoáng 50ml + Tẩy trang 50ml )',
        './images/nhi-product/kemchongnang/kem-chong-nang-vichy-ideal-soleil.png',
        'Vichy',
        'Còn hàng', [],
        '399000',
        '500000',
         [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng Vichy ngăn sạm da, giảm thâm nám Anti Taches (Tặng Serum 15ml)',
        './images/nhi-product/kemchongnang/kem-chong-nang-vichy-ngan-sam-da-giam-tham-nam-anti-taches.png',
        'Vichy',
        'Còn hàng', [],
        '399000',
        '500000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng Anessa',
        './images/nhi-product/kemchongnang/kem-chong-nang-anessa.png',
        'Anessa',
        'Còn hàng', [],
        '419000',
        '550000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Xịt Chống Nắng Toàn Thân Anessa Perfect UV Sunscreen Bubble Spray A SPF50+/PA++++',
        './images/nhi-product/kemchongnang/xit-chong-nang-toan-than-anessa-perfect-uv-sunscreen-bubble-spray-a-spf50-pa.png',
        'Anessa',
        'Còn hàng', [],
        '425000',
        '509000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng La Roche-Posay Anthelios Anti-Imperfections 50ml',
        './images/nhi-product/kemchongnang/kem-chong-nang-la-roche-posay-anthelios-anti-imperfections-50ml.png',
        'La Roche-Posay',
        'Còn hàng', [],
        '429000',
        '490000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng La Roche-Posay Invisible Fluid (Tặng kèm Sữa rửa mặt 50ml)',
        './images/nhi-product/kemchongnang/kem-chong-nang-la-roche-posay-invisible-fluid.png',
        'La Roche-Posay',
        'Còn hàng', [],
        '429000',
        '490000', [], [],
    ),
    // trang 4
    new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Xịt chống nắng La Roche-Posay Anthelios Anti - Shine Invisible Fresh Mist',
        './images/nhi-product/kemchongnang/xit-chong-nang-la-roche-posay-anthelios-anti-shine-invisible-fresh-mist.png',
        'La Roche-Posay',
        'Còn hàng', [],
        '429000',
        '490000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Kem chống nắng La Roche-Posay Anthelios XL Non-Perfumed (Tặng kèm tẩy trang 50ml)',
        './images/nhi-product/kemchongnang/kem-chong-nang-la-roche-posay-anthelios-xl-non-perfumed.png',
        'La Roche-Posay',
        'Còn hàng', [],
        '439000',
        '490000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Sữa chống nắng Anessa Mild Milk 60ml',
        './images/nhi-product/kemchongnang/sua-chong-nang-anessa-mild-milk-60ml.png',
        'Anessa',
        'Còn hàng', [],
        '499000',
        '685000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Sữa chống nắng Anessa Perfect UV Suncreen Skincare Milk A 60ml',
        './images/nhi-product/kemchongnang/sua-chong-nang-anessa-perfect-uv-suncreen-skincare-milk-a-60ml.png',
        'Anessa',
        'Còn hàng', [],
        '525000',
        '685000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Tinh Chất Chống Nắng Trang Điểm Nâng Tông Da D Program Allerdefense Essence BB SPF43 PA+++ 40ml',
        './images/nhi-product/kemchongnang/tinh-chat-chong-nang-trang-diem-nang-tong-da-d-program-allerdefense-essence-bb-spf43-pa-40ml.png',
        'D Program',
        'Còn hàng', [],
        '539000',
        '700000', [], [],
    ),new Product(
        'cham-soc-da',
        'duong-da',
        'kem-chong-nang',
        'Tinh chất chống nắng dành cho nam MdoC Sunshine UV Solution Essence 50ml',
        './images/nhi-product/kemchongnang/tinh-chat-chong-nang-danh-cho-nam-mdoc-sunshine-uv-solution-essence-50ml.png',
        'MdoC',
        'Còn hàng', [],
        '539000',
        '659000', [], [],
    ),
),


    // toner-nuoc-can-bang
    // trang 1
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Huyết thanh dưỡng trắng chống lão hóa Mediskinbyc Idebenone C +Ampoule 2X',
        './images/nhi-product/toner-nuoc-can-bang/huyet-thanh-duong-trang-chong-lao-hoa-mediskinbyc-idebenone-c-ampoule-2x.png',
        'MediskinbyC',
        'Còn hàng', [],
        '340000',
        '618000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng & Dưỡng ẩm Senka Deep Moist Lotion I',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-duong-am-senka-deep-moist-lotion-i.png',
        'Senka ',
        'Còn hàng', [],
        '169000',
        '300000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng 9 Wishes Rice 72% White Lucent Refining Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-9-wishes-rice-72-white-lucent-refining-toner.png',
        '9 Wishes',
        'Còn hàng', [],
        '195000', [], [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Cân Bằng Da Bí Đao Cocoon Winter Melon Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-da-bi-dao-cocoon-winter-melon-toner.png',
        'Cocoon',
        'Còn hàng', [],
        '158000',
        '175000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng dạng miếng Coreana Biocos Daily Healing Pad',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-dang-mieng-coreana-biocos-daily-healing-pad.png',
        'Coreana',
        'Còn hàng', [],
        '289000',
        '359000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng dành cho nam MdoC Sebum Strike Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-hoa-hong-danh-cho-nam-mdoc-sebum-strike-toner.png',
        'MdoC',
        'Còn hàng', [],
        '469000',
        '659000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng Derladie Natural Moisture Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-derladie-natural-moisture-toner.png',
        'Derladie',
        'Còn hàng', [],
        '289000',
        '400000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng Evoluderm',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-evoluderm.png',
        'Evoluderm ',
        'Còn hàng', [],
        '99000',
        '169000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Cân Bằng Innisfree Jeju Cherry Blossom Skin',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-hoa-hong-innisfree-jeju-cherry-blossom-skin.png',
        'Innisfree',
        'Còn hàng', [],
        '245000',
        '350000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước căn bằng Jeju Volcanic Pore Toner Innisfree',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-jeju-volcanic-pore-toner-innisfree.png',
        'Innisfree',
        'Còn hàng', [],
        '250000',
        '380000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Cân Bằng JM Solution Toner XL',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-jm-solution-toner-xl.png',
        'JM Solution',
        'Còn hàng', [],
        '199000',
        '300000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng Klairs Daily Skin Hydrating Water 500ml',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-klairs-daily-skin-hydrating-water-500ml.png',
        'Klairs',
        'Còn hàng', [],
        '369000',
        '550000', [], [],
    ),
    // trang 2
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng La Roche-Posay Effaclar Astringent Lotion (Tặng sữa rửa mặt 50ml)',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-la-roche-posay-effaclar-astringent-lotion.png',
        'La Roche-Posay',
        'Còn hàng', [],
        '329000',
        '389000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Cân Bằng Làm Dịu Da Caryophy Portulaca Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-lam-diu-da-caryophy-portulaca-toner.png',
        'Caryophy ',
        'Còn hàng', [],
        '304000',
        '440000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Cân Bằng Madagascar Centella Toning Toner Skin1004',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-madagascar-centella-toning-toner-skin1004.png',
        'Skin1004',
        'Còn hàng', [],
        '315000',
        '465000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng Mamonde',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-mamonde-flower-story.png',
        'Mamonde',
        'Còn hàng', [],
        '189000', [], [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng pH 5.5 Red Water Tonic Toner So Natural',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-ph-5-5-red-water-tonic-toner-so-natural.png',
        'So Natural',
        'Còn hàng', [],
        '360000',
        '420000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng Seoulrose Rosa Deep Pore Healing Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-seoulrose-rosa-deep-pore-healing-toner.png',
        'SeoulRose',
        'Còn hàng', [],
        '209000',
        '345000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Cân Bằng Simple Smoothing Facial Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-simple-smoothing-facial-toner.png',
        'Simple',
        'Còn hàng', [],
        '89000',
        '125000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Cân Bằng Skin1004 Madagascar Centella Hyalu-Cica Brightening Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-skin1004-madagascar-centella-hyalu-cica-brightening-toner.png',
        'Skin1004',
        'Còn hàng', [],
        '309000',
        '460000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng Snail Truecica Miracle Repair Toner Some By Mi',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-snail-truecica-miracle-repair-toner-some-by-mi.png',
        'Some By Mi',
        'Còn hàng', [],
        '259000',
        '320000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Cân Bằng Some By Mi AHA-BHA-PHA 30 Days Miracle Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-some-by-mi-aha-bha-pha-30-days-miracle-toner.png',
        'Some By Mi',
        'Còn hàng', [],
        '229000',
        '390000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Cân Bằng Some By Mi Galactomyces Pure Vitamin C Glow Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-some-by-mi-galactomyces-pure-vitamin-c-glow-toner.png',
        ' Some By Mi ',
        'Còn hàng', [],
        '279000',
        '309000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Cân Bằng Some By Mi Red TeaTree Cicassoside Final Solution Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-hoa-hong-some-by-mi-red-teatree-cicassoside-final-solution-toner.png',
        'Some By Mi',
        'Còn hàng', [],
        '245000',
        '300000', [], [],
    ),
    // trang 3
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Cân Bằng Some By Mi Yuja Niacin 30 Days Micracle Brightening',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-some-by-mi-yuja-niacin-30-days-micracle-brightening.png',
        'Some By Mi',
        'Còn hàng', [],
        '209000',
        '320000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng Super Matcha Pore Tightening Toner 150 ml',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-super-matcha-pore-tightening-toner-150-ml.png',
        ' Some By Mi ',
        'Còn hàng', [],
        '249000',
        '350000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng Sur.medic Super Glutathione 100 Bright Skin',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-hoa-hong-sur-medic-super-glutathione-100-bright-skin.png',
        'Sur.medic',
        'Còn hàng', [],
        '199000',
        '280000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Cân Bằng Tea Tree Shine Control & Blemish Clear Toner Naruko',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-tea-tree-shine-control-blemish-clear-toner-naruko.png',
        'Naruko ',
        'Còn hàng', [],
        '239000',
        '295000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Cân Bằng The Ordinary Glycolic Acid 7% Toning Solution',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-hoa-hong-the-ordinary-glycolic-acid-7-toning-solution.png',
        'The Ordinary',
        'Còn hàng', [],
        '339000',
        '350000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng Tiam My Signature Vita Red Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-tiam-my-signature-vita-red-toner.png',
        'Tiam ',
        'Còn hàng', [],
        '309000',
        '365000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Cân Bằng Toner Christian Lenart',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-hoa-hong-toner-christian-lenart.png',
        'Christian',
        'Còn hàng', [],
        '129000',
        '250000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng Toner Thayers',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-toner-thayer.png',
        'Thayer',
        'Còn hàng', [],
        '220000',
        '250000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng tràm trà Derladie Herbal Extract Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-tram-tra-derladie-herbal-extract-toner.png',
        'Derladie',
        'Còn hàng', [],
        '299000',
        '399000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng trị mụn Cosrx AHA/BHA Clarifying Treatment Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-tri-mun-cosrx-aha-bha-clarifying-treatment-toner.png',
        'Corsrx',
        'Còn hàng', [],
        '215000',
        '390000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước cân bằng dưỡng ẩm Klairs Supple Preparation Facial Toner',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-can-bang-duong-am-klairs-supple-preparation-facial-toner.png',
        'Klairs',
        'Còn hàng', [],
        '239000',
        '360000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước dưỡng da By Wishtrend Mandelic Acid 5% Skin Prep Water',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-duong-da-by-wishtrend-mandelic-acid-5-skin-prep-water.png',
        ' By Wishtrend',
        'Còn hàng', [],
        '288000',
        '400000', [], [],
    ),
    // trang 4
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước Hoa Hồng Cân Bắng 9 Wishes Pine Clear Recovery Treatment Skin',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-hoa-hong-can-bang-9-wishes-pine-clear-recovery-treatment-skin.png',
        '9 Wishes ',
        'Còn hàng', [],
        '249000',
        '350000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Nước làm đẹp da Son&Park Beauty Water 60ml',
        './images/nhi-product/toner-nuoc-can-bang/nuoc-lam-dep-da-son-park-beauty-water-60ml.png',
        'Son&Park',
        'Còn hàng', [],
        '90000',
        '150000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Set Kem chống nắng dạng thỏi Sur.medic Super Ceramide + Toner 50ml',
        './images/nhi-product/toner-nuoc-can-bang/set-kem-chong-nang-dang-thoi-sur-medic-super-ceramide-toner-50ml.png',
        'Sur.Medic',
        'Còn hàng', [],
        '199000',
        '209000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Tinh chất bí đao The Cocoon Winter Melon Serum 70ml',
        './images/nhi-product/toner-nuoc-can-bang/tinh-chat-bi-dao-the-cocoon-winter-melon-serum-70ml.png',
        'Cocoon',
        'Còn hàng', [],
        '239000', [], [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Tinh chất chống lão hoá The Ordinary Buffet Multi-Technology Peptide Serum',
        './images/nhi-product/toner-nuoc-can-bang/tinh-chat-chong-lao-hoa-the-ordinary-buffet-multi-technology-peptide-serum.png',
        'The Ordinary',
        'Còn hàng', [],
        '415000',
        '550000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        "Tinh Chất Làm Hồng Angel's Liquid Glutathione + Niacinamide Inner Pure Gel",
        './images/nhi-product/toner-nuoc-can-bang/tinh-chat-lam-hong-angel-s-liquid-glutathione-niacinamide-inner-pure-gel.png',
        "Angel's Liquid",
        'Còn hàng', [],
        '435000', [], [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Tinh chất Some By Mi AHA-BHA-PHA 30 Days Miracle Serum',
        './images/nhi-product/toner-nuoc-can-bang/tinh-chat-some-by-mi-aha-bha-pha-30-days-miracle-serum.png',
        'Some By Mi',
        'Còn hàng', [],
        '245000',
        '300000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Tinh Chất Trắng Da Esthemax Vitamin C 561 100ml',
        './images/nhi-product/toner-nuoc-can-bang/tinh-chat-trang-da-esthemax-vitamin-c-561-100ml.png',
        'Esthemax',
        'Còn hàng', [],
        '199000',
        '239000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Tinh chất Trị Mụn Caryophy Portulaca Ampoule',
        './images/nhi-product/toner-nuoc-can-bang/tinh-chat-tri-mun-caryophy-portulaca-ampoule.png',
        'Caryophy ',
        'Còn hàng', [],
        '280000',
        '349000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Tinh chất truyền trắng Sur.Medic Super Glutathione 100 Bright Ampoule',
        './images/nhi-product/toner-nuoc-can-bang/tinh-chat-truyen-trang-sur-medic-super-glutathione-100-bright-ampoule.png',
        'Sur.medic',
        'Còn hàng', [],
        '21000', [], [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Tinh Dầu Tràm Trà Naruko Tea Tree Purifying Essential Oil',
        './images/nhi-product/toner-nuoc-can-bang/tinh-chat-tri-mun-chiet-xuat-cay-phi-derladie-witch-hazel-perfect-vitamin-serum.png',
        'Derladie',
        'Còn hàng', [],
        '199000',
        '230000', [], [],
    ),
    new Product(
        'cham-soc-da',
        'duong-da',
        'toner-nuoc-can-bang',
        'Toner dạng miếng Re:p Organic Cotton Treatment Toning Pad 130ml (90 miếng)',
        './images/nhi-product/toner-nuoc-can-bang/toner-dang-mieng-re-p-organic-cotton-treatment-toning-pad-130ml-90-mieng.png',
        'Re:p',
        'Còn hàng', [],
        '429000',
        '600000', [], [],
    ),

)


array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Sample Kem nền Maybelline Fit Me Matte Poreless Foundation',
        './images/hocImage/kemnen/kemnen1/626_1_951ce1c698da4a8ea260d0752d02a0ea_large.png',
        'Maybeline',
        'Còn hàng', ['TONE 128', 'TONE 120'],
        '35000',
        '75000', [], []
    ),
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước Missha Magic Cushion Cover Lasting SPF50+/PA+++',
        './images/hocImage/kemnen/kemnen1/missha-10_d714e435464949f79582b9feb69e4d45_large.jpg',
        'Missha',
        'Còn hàng', ['cover lasting 21', 'cover lasting 21', 'moist up 21', 'moist up 23'],
        '119000',
        '200000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước Missha Đỏ Velvet Finish Cushion',
        './images/hocImage/kemnen/kemnen1/misha-2_4b1dec1774b84dedbdd711c1ae4365ba_large.jpg',
        'Missha',
        'Còn hàng', ['TONE 21', 'TONE 23'],
        '135000',
        '179000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Kem nền Karadium Main Actress Cover Foundation',
        './images/hocImage/kemnen/kemnen1/chung_660904694eac431da50bc2f593e0f34e_large.jpg',
        'Karadium ',
        'Còn hàng', ['TONE 128', 'TONE 120'],
        '195000',
        '280000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Kem Nền Maybelline Fit Me',
        './images/hocImage/kemnen/kemnen1/kem-ne-n-fit-me_cad031634310419fada55ce71389ada3_large.jpg',
        'Maybeline',
        'Còn hàng', ['TONE 128', 'TONE 120'],
        '205000',
        '240000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Kem nền Maybelline Super Stay 24H Full Coverage Foundation',
        './images/hocImage/kemnen/kemnen1/maybelline-superstay-24h-full-coverage-foundation-120_6fcc5907410d4503a9e236fa398d502e_large.png',
        'Maybeline',
        'Còn hàng', ['120 classic irovy', '128 warm nude'],
        '229000',
        '299000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn nước Lemonade Matte Addict Dual Cushion',
        './images/hocImage/kemnen/kemnen1/phan_nuoc_lemonade_matte_addict_dual_cushion_a62054fb93fe4e84a22820bd2c9b29a6_large.png',
        'Lemonade',
        'Còn hàng', ['a01 light', 'a02 natural'],
        '325000',
        '459000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước A.Black All Day Perfect Cover Cushion SPF 47 PA++',
        './images/hocImage/kemnen/kemnen1/phan-nuoc-ablack-all-day-perfect-cover-cushion-spf-47-pa__2__1acc50928fe34098b2ddc7ff6d780d5b_large.png',
        'A.Black ',
        'Còn hàng', ['TONE 02', 'TONE 03'],
        '265000',
        '325000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Kem nền L’Oreal Paris True Match Super Blendable Foundation',
        './images/hocImage/kemnen/kemnen1/loreal-1_12c995dd921d49bcb54e4c7fe8d0dd11_large.jpg',
        ' L\'Oreal Paris',
        'Còn hàng', ['TONE g1', 'TONE g2', 'TONE n1', 'TONE f1'],
        '269000',
        '308000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước Chống Nắng Lilybyred Cotton Blur Cushion',
        './images/hocImage/kemnen/kemnen1/1_a60a4b1cc94e4ef3b175ebd9612b8dba_large.png',
        'Lilybyred',
        'Còn hàng', ['21 nude cotton', '23 natural cotton'],
        '279000',
        '269000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước Black Rouge Peach Cover Velvet Cushion',
        './images/hocImage/kemnen/kemnen1/blackrouge-peach-8.jpg_c9e2869eb6e849f4b4a1323714778ca5_large.png',
        'Black Rouge ',
        'Còn hàng', ['cp01', 'cp02'],
        '288000',
        '345000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước Lime Real Cover Pink Cushion',
        './images/hocImage/kemnen/kemnen1/phan_nuoc_lime_real_cover_pink_cushion_bb732e272a5d44568a0bd42041a6c2f6_large.png',
        ' Lime Cosmetics ',
        'Còn hàng', ['vỏ trắng tone 10', 'vỏ trắng tone 20'],
        '289000',
        '320000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn nước Lime V Collagen Ample Cushion',
        './images/hocImage/kemnen/kemnen2/phan_nuoc_lime_v_collagen_ample_cushion_d59d4d55ffb74d9a8e19bde775794d83_large.png',
        'Lime Cosmetics',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '289000',
        '320000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn nước AprilSkin Real Calendula Ampoule Glow Cushion',
        './images/hocImage/kemnen/kemnen2/phan_nuoc_aprilskin_real_calendula_ampoule_glow_cushion_6015e4e1525c49ddad7e166a00f5185a_large.png',
        ' April Skin',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '295000',
        '', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn nước Klavuu Cushion Blue Pearlsation Hight Coverage (vỏ xanh)',
        './images/hocImage/kemnen/kemnen2/phan_nuoc_klavuu_cushion_blue_pearlsation_hight_coverage__vo_xanh__88f9c97c73f249769b582af593ebc9fd_large.png',
        'Klavuu ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '299000',
        '325000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước April Skin Black Magic Snow Cushion (vỏ đen)',
        './images/hocImage/kemnen/kemnen2/409_1_f6f18c36b4e94866bff6f7d883c805b1_large.png',
        ' April Skin',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '309000',
        '500000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Kem nền April Skin Perfect Magic Cover Fit Foundation',
        './images/hocImage/kemnen/kemnen2/kem_neefn_ef488147b52049c998e134a7b7387ac0_large.jpg',
        'April Skin ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '309000',
        '450000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        '[Phiên bản giới hạn] Phấn nước Laneige Neo Cushion Matte',
        './images/hocImage/kemnen/kemnen2/laneige-voxanh_be1a059eb2b4424db25b1edb4cb15fc3_large.png',
        'Laneige ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '315000',
        '410000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Kem nền Lemonade Perfect Couple Dual Foundation',
        './images/hocImage/kemnen/kemnen2/kem-nen-lemonade-perfect-couple-dual-foundation__2__10f547b1eda14a87912b01644a931f21_large.jpg',
        'Lemonade ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '329000',
        '459000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn nước Klavuu Urban Cushion Pearlsation Hight Coverage (vỏ xám)',
        './images/hocImage/kemnen/kemnen2/phan_nuoc_klavuu_urban_cushion_pearlsation_hight_coverage__vo_xam__b6fa27ccebb7470ebfda39594a825a33_large.png',
        'Klavuu',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '330000',
        '400000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        '[Phiên bản Joseph Stacey] Phấn nước Laneige Neo Cushion (kèm lõi)',
        './images/hocImage/kemnen/kemnen2/laneige-vodo-5_48673248b8994f1fb9581669bdaeafd4_large.jpg',
        'Laneige ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '479000',
        '790000', [], []
    )
)
array.push(
        new Product(
            'make-up-5',
            'face-make-up',
            'cushion-1',
            'Phấn Nước Laneige Neo Cushion Matte (kèm lõi)',
            './images/hocImage/kemnen/kemnen2/394_a7eb7a9997d144ad918fa5049c5e9f4f_large.png',
            'Laneige ',
            'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
            '485000',
            '540000', [], []
        )
    )
    ///che-khuyet-diem
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'che-khuyet-diem',
        'Bút Che Khuyết Điểm Innisfree Mineral Stick Concealer',
        './images/hocImage/chekhuyetdiem/chekhuyetdiem1/but_che_khuyet_diem_innisfree_mineral_stick_concealer_c3b28347174d484bb18be06ae6de0d43_large.png',
        'Innisfree',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '125000',
        '190000', [], []
    )
)
array.push(
        new Product(
            'make-up-5',
            'face-make-up',
            'che-khuyet-diem',
            'Kem che khuyết điểm Maybelline Fit Me Concealer',
            './images/hocImage/chekhuyetdiem/chekhuyetdiem1/kem_che_khuyet_diem_maybelline_fit_me_concealer_73f14fd513e3444db457fb17eef345ad_large.png',
            'Maybelline',
            'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
            '142000',
            '155000', [], []
        )
    )
    //phan-phu-phan-nen
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'phan-phu-phan-nen',
        'Phấn Nền Maybelline Fit Me Skin Fit Powder Foundation',
        './images/hocImage/phannen/phannen1/phan_nen_maybelline_fit_me_skin_fit_powder_foundation_7421bf91ba0649cd81f5e987127a6cb1_large.png',
        'Maybelline',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '199000',
        '205000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'phan-phu-phan-nen',
        'Phấn Phủ Dạng Nén Missha Pro-Touch Powder Pact SPF25/PA++',
        './images/hocImage/phannen/phannen1/1__1__dda5f2c4ff9749d09e1e3a48b4853d0c_large.png',
        'Missha',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '185000',
        '235000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'phan-phu-phan-nen',
        'Phấn phủ kiềm dầu Innisfree No Sebum',
        './images/hocImage/phannen/phannen1/phan_phu_kiem_dau_innisfree_no_sebum_eccd20c0d66b4bad8911f360f8da3f0f_large.png',
        'Innisfree',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '95000',
        '', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        '(Sample) Sữa rửa mặt Green Tea Foam Innisfree',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sample-srm-green-tea-foam-innisfree.webp',
        'Innisfree',
        'Còn hàng', [],
        '9,000đ',
        '', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Bọt rửa mặt dịu nhẹ Sense Plus Mild Cleansing Foam',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/bot-rua-mat-diu-nhe-sense-plus-mild-cleansing-foam.webp',
        'Sense Plus',
        'Còn hàng', [],
        '149,000đ',
        '179,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Gel rửa mặt dịu nhẹ Senka Perfect Gel Gentle wash 100g',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/gel-rua-mat-diu-nhe-senka-perfect-gel-gentle-wash-100g.webp',
        'Senska',
        'Còn hàng', [],
        '109,000đ',
        '175,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Gel rửa mặt La Roche-Posay Effaclar Gel Moussant',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/gel-rua-mat-la-roche-posay-effaclar-gel-moussant.webp',
        'La Roche-Posay',
        'Còn hàng', [],
        '449,000đ',
        '535,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Gel Rửa Mặt Some By Mi Bye Bye Blemish Vita Tox Brightening Bubble Cleanser',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/gel-rua-mat-some-by-mi-bye-bye-blemish-vita-tox-brightening-bubble-cleanser.webp',
        'Some By Mi',
        'Còn hàng', [],
        '245,000đ',
        '320,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Gel rửa mặt và tắm La Roche-Posay Effaclar Micro-Peeling 400ml',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/gel-rua-mat-va-tam-la-roche-posay-effaclar-micro-peeling-400ml.webp',
        'La Roche-Posay',
        'Còn hàng', [],
        '469,000đ',
        '540,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa Rửa Mặt Angel’s Liquid Glutathione Tone Up Deep Pore Wash Cleansing Foam',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-angel-s-liquid-glutathione-tone-up-deep-pore-wash-cleansing-foam.webp',
        'Angel’s Liquid ',
        'Còn hàng', [],
        '179,000đ',
        '250,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt Bergamo 150ml',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-bergamo-150ml.webp',
        'Bergamo',
        'Còn hàng', [],
        '59,000đ',
        '99,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt Brightening Pore Facial Cleanser Innisfree',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/gel-rua-mat-diu-nhe-senka-perfect-gel-gentle-wash-100g.webp',
        'innisfree',
        'Còn hàng', [],
        '180,000đ',
        '220,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt chống lão hóa Senka Perfect Whip Collagen In 120g',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-chong-lao-hoa-senka-perfect-whip-collagen-in-120g.webp',
        'Senka',
        'Còn hàng', [],
        '105,000đ',
        '170,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt D Program Essence in Cleansing Foam 120gr',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-d-program-essence-in-cleansing-foam-120gr.webp',
        'D Program',
        'Còn hàng', [],
        '299,000đ',
        '390,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa Rửa Mặt dành cho nam MdoC Blackhead Perfect Scrub Foam 150g',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-danh-cho-nam-mdoc-blackhead-perfect-scrub-foam-150g.webp',
        'MdoC',
        'Còn hàng', [],
        '299,000đ',
        '479,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt dành cho nam MdoC Relief Foam Cleasing',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-danh-cho-nam-mdoc-relief-foam-cleasing-tang-mini-size-bat-ki-voi-chai-full-150gr.webp',
        'MdoC',
        'Còn hàng', [],
        '299,000đ',
        '399,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt đất sét trắng Senka Perfect White Clay 120g',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-dat-set-trang-senka-perfect-white-clay-120g.webp',
        'Senka',
        'Còn hàng', [],
        '99,000đ',
        '170,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa Rửa Mặt Jeju Volcanic Pore Cleansing Foam EX Innisfree',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-jeju-volcanic-pore-cleansing-foam-ex-innisfree-new-2020.webp',
        'Innisfree',
        'Còn hàng', [],
        '145,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa Rửa Mặt Klairs Rich Moist Foaming Cleanser',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-klairs-rich-moist-foaming-cleanser.webp',
        'Klairs',
        'Còn hàng', [],
        '229,000đ',
        '270,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt Loreal Paris White Perfect',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/gel-rua-mat-some-by-mi-bye-bye-blemish-vita-tox-brightening-bubble-cleanser.webp',
        ' L-Oreal Paris',
        'Còn hàng', [],
        '45,000đ',
        '99,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt Low pH Good Morning Gel Cleanser Cosrx',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-low-ph-good-morning-gel-cleanser.webp',
        'Cosrx',
        'Còn hàng', [],
        '169,000đ',
        '200,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa Rửa Mặt Lựu Innisfree Jeju Pomegranate Revitalizing Foam Cleanser',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-angel-s-liquid-glutathione-tone-up-deep-pore-wash-cleansing-foam.webp',
        'Innisfree',
        'Còn hàng', [],
        '189,000đ',
        '220,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt Muji Face Soap',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-muji-face-soap.webp',
        'Muji',
        'Còn hàng', [],
        '125,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa Rửa Mặt Naruko Tea Tree Purifying Clay Mask & Cleanser In 1',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/gel-rua-mat-diu-nhe-senka-perfect-gel-gentle-wash-100g.webp',
        'Naruko',
        'Còn hàng', [],
        '167,000đ',
        '200,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt Neogen Dermalogy Foam Cleanser',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-neogen-dermalogy-foam-cleanser.webp',
        'Neogen',
        'Còn hàng', [],
        '229,000đ',
        '290,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt ngăn ngừa mụn Senka Perfect Whip Acne Care 100g',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-ngan-ngua-mun-senka-perfect-whip-acne-care-100g.webp',
        'Senka',
        'Còn hàng', [],
        '79,000đ',
        '158,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt Secret Key Snail Repairing Foam Cleaner',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-secret-key-snail-repairing-foam-cleaner.webp',
        'MdoC',
        'Còn hàng', [],
        '99,000đ',
        '160,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt SeoulRose Rosa Skincare Centella',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-seoulrose-rosa-skincare-centella.webp',
        'Seoul Rose',
        'Còn hàng', [],
        '195,000đ',
        '342,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa Rửa Mặt Simple Kind To Skin Refreshing Facial Wash',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-simple-kind-to-skin-refreshing-facial-wash.webp',
        'Simple',
        'Còn hàng', [],
        '89,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa Rữa Mặt Skin1004 Madagascar Centella Ampoule Foam',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-derladie-witch-hazel-cleansing-gel-tang-bao-li-xi-tet-2021.webp',
        'Senska',
        'Còn hàng', [],
        '249,000đ',
        '300,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt Snail Truecica Some By Mi',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-snail-truecica-some-by-mi.webp',
        'Some By Mi',
        'Còn hàng', [],
        '189,000đ',
        '260,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt Some By Mi AHA-BHA-PHA 30 Days Miracle Acne Clear Foam',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-some-by-mi-aha-bha-pha-30-days-miracle-acne-clear-foam.webp',
        'Some By Mi',
        'Còn hàng', [],
        '189,000đ',
        '285,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa Rửa Mặt Some By Mi Bye Bye Blackhead 30 Days Miracle Green Tea Tox Bubble Cleanser',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-some-by-mi-bye-bye-blackhead-30-days-miracle-green-tea-tox-bubble-cleanser.webp',
        'Some By Mi',
        'Còn hàng', [],
        '225,000đ',
        '320,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa Rửa Mặt Sur.Medic PH Azulene Soothing PH Cleanser 150ml',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-sur-medic-ph-azulene-soothing-ph-cleanser-150ml.webp',
        'Sur.Medic',
        'Còn hàng', [],
        '199,000đ',
        '325,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt SVR SEBIACLEAR Gel Moussant',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-svr-sebiaclear-gel-moussant.webp',
        'SVR',
        'Còn hàng', [],
        '129,000đ',
        '140,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt tạo bọt Senka Perfect Whip 120g',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-tao-bot-senka-perfect-whip-120g.webp',
        'Senka',
        'Còn hàng', [],
        '85,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt tẩy trang The Ordinary Squalane Cleanser',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-tay-trang-the-ordinary-squalane-cleanser.webp',
        'The Ordinary',
        'Còn hàng', [],
        '245,000đ',
        '395,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt thải độc Super Vegitoks',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-thai-doc-super-vegitoks-kem-mini-30ml-trong-hop.webp',
        'Byvibes Wonder Bath',
        'Còn hàng', [],
        '219,000đ',
        '309,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt The Saem Healing Tea Garden Cleansing Foam',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-the-saem-healing-tea-garden-cleansing-foam.webp',
        'The saem',
        'Còn hàng', [],
        '120,000đ',
        '180,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa Rửa Mặt Trà Xanh Innisfree Green Tea Cleasing Foam',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-tra-xanh-innisfree-green-tea-cleasing-foam.webp',
        'Innisfree',
        'Còn hàng', [],
        '159,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt trà xanh Rohto Shirochasou',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-tra-xanh-rohto-shirochasou.webp',
        'Rohto',
        'Còn hàng', [],
        '99,000đ',
        '180,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt trị mụn Caryophy Portulaca Foam Cleanser',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-tri-mun-caryophy-portulaca-foam-cleanser.webp',
        'Caryophy',
        'Còn hàng', [],
        '232,000đ',
        '305,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt ý dĩ Hatomugi',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-y-di-hatomugi.webp',
        'Hatomugi',
        'Còn hàng', [],
        '69,000đ',
        '120,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa Rửa Mặt Tẩy Tế Bào Chết Muji Face Soap Scrub',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-tay-te-bao-chet-muji-face-soap-scrub.webp',
        'Muji',
        'Còn hàng', [],
        '138,000đ',
        '185,000đ', [], []
    ),
    new Product(
        'cham-soc-da',
        'lam-sach-tay-te-bao-chet',
        'sua-rua-mat-1',
        'Sữa rửa mặt Innisfree Bija Trouble Facial Foam Innisfree',
        './images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-innisfree-bija-trouble-facial-foam-innisfree.webp',
        'Innisfree',
        'Còn hàng', [],
        '139,000đ',
        '190,000đ', [], []
    ),
    //chăm sóc cơ thể
    //thuc-pham-chuc-nang
    new Product(
        'body',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Kẹo dẻo Chewable Hair Vitamins Hairburst',
        './images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/keo-deo-chewable-hair-vitamins-hairburst.webp',
        'Hairburst',
        'Còn hàng', [],
        '589,000đ',
        '629,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Thực phẩm bổ sung YUSACHI Collagen 3 in 1',
        './images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/thuc-pham-bo-sung-yusachi-collagen-3-in-1.webp',
        'Yusachi',
        'Còn hàng', [],
        '1,650,000đ',
        '2,000,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Tinh chất Collagen Lựu dạng bột Secret: X Red Vitality Pomegranate Collagen',
        './images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/tinh-chat-collagen-luu-dang-bot-secret-x-red-vitality-pomegranate-collagen.webp',
        'Secret: X',
        'Còn hàng', [],
        '265,000đ',
        '430,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Viên Uống Bổ Sung Kẽm DHC Nhật Bản',
        './images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/vien-uong-bo-sung-kem-dhc-nhat-ban.webp',
        'DHC',
        'Còn hàng', [],
        '120,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Viên Uống Bổ Sung Nước Và Collagen Innerb Aqua Rich',
        './images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/vien-uong-bo-sung-nuoc-va-collagen-innerb-aqua-rich.webp',
        'Innerb Aqua Rich',
        'Còn hàng', [],
        '510,000đ',
        '720,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Viên Uống Bổ Sung Vitamin C DHC Nhật Bản',
        './images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/vien-uong-bo-sung-vitamin-c-dhc-nhat-ban.webp',
        'DHC',
        'Còn hàng', [],
        '105,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Viên uống rau củ quả DHC Nhật Bản',
        './images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/vien-uong-rau-cu-qua-dhc-nhat-ban.webp',
        'DHC',
        'Còn hàng', [],
        '285,000đ',
        '320,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Viên Uống Trắng Da DHC Nhật Bản 20 ngày',
        './images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/vien-uong-trang-da-dhc-nhat-ban.webp',
        'DHC',
        'Còn hàng', [],
        '99,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Viên uống vitamin E DHC Nhật Bản',
        './images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/vien-uong-vitamin-e-dhc-nhat-ban.webp',
        'DHC',
        'Còn hàng', [],
        '165,000đ',
        '230,000đ', [], []
    ),
    //dưỡng thể
    new Product(
        'body',
        'duong-da-body',
        'duong-the',
        '[Sample 5ml] Kem Dưỡng Trắng Da Caryophy Glass Skin In Shower Body Tone-Up Cream',
        './images/imgHang/body-care/duong-da-body/duong-the/kem-duong-trang-da-skin-caryophy-glass-skin-in-shower-body-tone-up.webp',
        'Caryophy',
        'Còn hàng', [],
        '9,000đ',
        '20,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'duong-the',
        'Dầu nóng Hàn Quốc 100ml',
        './images/imgHang/body-care/duong-da-body/duong-the/dau-nong-han-quoc-100ml.webp',
        'Antiphlamine',
        'Còn hàng', [],
        '75,000đ',
        '105,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'duong-the',
        'Dưỡng thể nước hoa Victorias Secret 236ml',
        './images/imgHang/body-care/duong-da-body/duong-the/duong-the-nuoc-hoa-victoria-s-secret-236ml.webp',
        'Victorias Secret',
        'Còn hàng', [],
        '290,000đ',
        '400,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'duong-the',
        'Kem dưỡng thể Bath & Body Works 226g',
        './images/imgHang/body-care/duong-da-body/duong-the/kem-duong-the-bath-body-works-226g.webp',
        'Bath & Body Works',
        'Còn hàng', [],
        '259,000đ',
        '400,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'duong-the',
        'Kem dưỡng thể ST.ives Renewing Moisturizer Collagen & Elastin',
        './images/imgHang/body-care/duong-da-body/duong-the/kem-duong-the-st-ives-renewing-moisturizer-collagen-elastin.webp',
        'ST.ives',
        'Còn hàng', [],
        '119,000đ',
        '200,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'duong-the',
        'Kem dưỡng trắng da Skin Caryophy Glass Skin In Shower Body Tone Up 300g',
        './images/imgHang/body-care/duong-da-body/duong-the/kem-duong-trang-da-skin-caryophy-glass-skin-in-shower-body-tone-up.webp',
        'Caryophy',
        'Còn hàng', [],
        '469,000đ',
        '690,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'duong-the',
        'Kem Tan Mỡ Bụng Hot Burning Body Gel Missha',
        './images/imgHang/body-care/duong-da-body/duong-the/kem-tan-mo-bung-hot-burning-body-gel-missha.webp',
        'Missha',
        'Còn hàng', [],
        '119,000đ',
        '180,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'duong-the',
        'Sữa dưỡng thể JM Solution Tone Up Body lotion',
        './images/imgHang/body-care/duong-da-body/duong-the/sua-duong-the-jm-solution-tone-up-body-lotion.webp',
        'JM Solution',
        'Còn hàng', [],
        '249,000đ',
        '420,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'duong-the',
        'Sữa dưỡng thể Vaseline',
        './images/imgHang/body-care/duong-da-body/duong-the/sua-duong-the-vaseline.webp',
        'Vaseline',
        'Còn hàng', [],
        '135,000đ',
        '210,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'duong-the',
        'Sữa Dưỡng Trắng Da Chateau Rouge Beauty Milk (400ml)',
        './images/imgHang/body-care/duong-da-body/duong-the/sua-duong-trang-da-chateau-rouge-beauty-milk-400ml.webp',
        'Chateau Rouge',
        'Còn hàng', [],
        '315,000đ',
        '550,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'duong-the',
        'Sữa Dưỡng Trắng Da Chateau Rouge Beauty Milk (750ml)',
        './images/imgHang/body-care/duong-da-body/duong-the/sua-duong-trang-da-chateau-rouge-beauty-milk.webp',
        'Chateau Rouge',
        'Còn hàng', [],
        '440,000đ',
        '750,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'duong-the',
        'Sữa Dưỡng Thể Bath & Body Works body Lotion',
        './images/imgHang/body-care/duong-da-body/duong-the/su-a-duo-ng-the-bath-body-works-body-lotion.webp',
        'Bath & Body Works',
        'Còn hàng', [],
        '259,000đ',
        '400,000đ', [], []
    ),
    //sữa tắm
    new Product(
        'body',
        'duong-da-body',
        'sua-tam',
        'Bọt tắm mềm mịn Sense Plus Moisture Body Cleansing Foam',
        './images/imgHang/body-care/duong-da-body/sua-tam/bot-tam-mem-min-sense-plus-moisture-body-cleansing-foam.webp',
        'Sense Plus',
        'Còn hàng', [],
        '139,000đ',
        '165,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'sua-tam',
        'Sữa tắm Cottage',
        './images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-cottage.webp',
        'À la mode paris',
        'Còn hàng', [],
        '165,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'sua-tam',
        'Sữa Tắm Dưỡng Ẩm Hương Hoa Hồng & Hoa Nhài Senka Perfect Whip For Body 500ml',
        './images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-duong-am-huong-hoa-hong-hoa-nhai-senka-perfect-whip-for-body-500ml.webp',
        'Senka',
        'Còn hàng', [],
        '149,000đ',
        '159,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'sua-tam',
        'Sữa Tắm Dưỡng Ẩm Senka Perfect Bubble For Body 500ml',
        './images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-duong-am-senka-perfect-bubble-for-body-500ml.webp',
        'Senka',
        'Còn hàng', [],
        '149,000đ',
        '159,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'sua-tam',
        'Sữa tắm dưỡng da Happy Bath 900g',
        './images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-duong-da-happy-bath-900g.webp',
        'Happy Bath',
        'Còn hàng', [],
        '135,000đ',
        '290,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'sua-tam',
        'Sữa Tắm Dưỡng Trắng JM Solution Shower Tone Up Cream',
        './images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-duong-trang-jm-solution-shower-tone-up-cream.webp',
        'JM Solution',
        'Còn hàng', [],
        '310,000đ',
        '400,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'sua-tam',
        'Sữa tắm Le Petit Olivier',
        './images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-le-petit-olivier.webp',
        'Le Petit Olivier',
        'Hết hàng', [],
        'Liên hệ',
        '', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'sua-tam',
        'Sữa Tắm Tree Hut Shea Moisturizing Body Wash',
        './images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-tree-hut-shea-moisturizing-body-wash.webp',
        'Tree Hut',
        'Còn hàng', [],
        '229,000đ',
        '278,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'sua-tam',
        'Sữa Tắm Truyền Trắng Medifferent In Shower Tone-Up Cream',
        './images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-truyen-trang-medifferent-in-shower-tone-up-cream.webp',
        'Medifferent',
        'Còn hàng', [],
        '310,000đ',
        '360,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'sua-tam',
        'Sữa tắm White Conc Body Shampoo C II',
        './images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-white-conc-body-shampoo-c-ii.webp',
        'White Conc',
        'Còn hàng', [],
        '220,000đ',
        '230,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'sua-tam',
        'Xà Phòng Derladie Body Cleansing Bar For Blemish Skin',
        './images/imgHang/body-care/duong-da-body/sua-tam/xa-phong-derladie-body-cleansing-bar-for-blemish-skin.webp',
        'Derladie',
        'Còn hàng', [],
        '102,000đ',
        '145,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'sua-tam',
        'Xà phòng trị mụn lưng For Back',
        './images/imgHang/body-care/duong-da-body/sua-tam/xa-phong-tri-mun-lung-for-back.webp',
        'Pelican',
        'Còn hàng', [],
        '95,000đ',
        '140,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'sua-tam',
        'Xà Phòng Trị Thâm Mông Nhật Pelican Hip Care Soap',
        './images/imgHang/body-care/duong-da-body/sua-tam/xa-phong-tri-tham-mong-nhat-pelican-hip-care-soap.webp',
        'Pelican',
        'Còn hàng', [],
        '109,000đ',
        '170,000đ', [], []
    ),
    //khử mùi
    new Product(
        'body',
        'duong-da-body',
        'khu-mui',
        'Lăn Khử Mùi Angel.s Liquid Glutathione + Niacinamide Fresh Deodorant',
        './images/imgHang/body-care/duong-da-body/khu-mui/lan-khu-mui-angel-s-liquid-glutathione-niacinamide-fresh-deodorant.webp',
        'Angel.s Liquid',
        'Còn hàng', [],
        '369,000đ',
        '400,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'khu-mui',
        'Lăn khử mùi Etiaxil (mẫu mới)',
        './images/imgHang/body-care/duong-da-body/khu-mui/lan-khu-mui-etiaxil-mau-moi.webp',
        'Etiaxil',
        'Còn hàng', [],
        '185,000đ',
        '240,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'khu-mui',
        'Lăn Khử Mùi Perspirex',
        './images/imgHang/body-care/duong-da-body/khu-mui/lan-khu-mui-perspirex.webp',
        'Perspirex',
        'Còn hàng', [],
        '175,000đ',
        '250,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'khu-mui',
        'Lăn khử mùi Vichy 50ml',
        './images/imgHang/body-care/duong-da-body/khu-mui/lan-khu-mui-vichy-50ml.webp',
        'Vichy',
        'Còn hàng', [],
        '196,000đ',
        '290,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'khu-mui',
        'Xịt thơm mát vùng kín Femfresh (Tặng 2 mask BNBG Vita Genic)',
        './images/imgHang/body-care/duong-da-body/khu-mui/xit-thom-mat-vung-kin-femfresh.webp',
        'Femfresh',
        'Còn hàng', [],
        '185,000đ',
        '', [], []
    ),
    //chăm soc răng miệng
    new Product(
        'body',
        'duong-da-body',
        'cham-soc-rang-mieng',
        'Kem đánh răng Eucryl',
        './images/imgHang/body-care/duong-da-body/cham-soc-rang-mieng/kem-danh-rang-eucryl.webp',
        'Eucryl',
        'Còn hàng', [],
        '49,000đ',
        '80,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'cham-soc-rang-mieng',
        'Kem Đánh Răng Median Dental IQ 93%',
        './images/imgHang/body-care/duong-da-body/cham-soc-rang-mieng/kem-danh-rang-median-dental-iq-93.webp',
        'Median',
        'Còn hàng', [],
        '45,000đ',
        '70,000đ', [], []
    ),
    // tẩy tế bào chết
    new Product(
        'body',
        'duong-da-body',
        'tay-te-bao-chet-body',
        'Tẩy da chết cơ thể Cocoon Cà phê Đắk Lắk',
        './images/imgHang/body-care/duong-da-body/tay-te-bao-chet/tay-da-chet-co-the-cocoon-ca-phe-dak-lak.webp',
        'Cocoon',
        'Còn hàng', [],
        '115,000đ',
        '140,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'tay-te-bao-chet-body',
        'Tẩy Tế Bào Chết Gel Scrub Quế Hồi Coffee Cinnamon Cloves',
        './images/imgHang/body-care/duong-da-body/tay-te-bao-chet/tay-te-bao-chet-gel-scrub-que-hoi-coffee-cinnamon-cloves.webp',
        'Krasota',
        'Còn hàng', [],
        '85,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'tay-te-bao-chet-body',
        'Tẩy tế bào chết toàn thân Byphasse Exfoliant Body (350ml)',
        './images/imgHang/body-care/duong-da-body/tay-te-bao-chet/tay-te-bao-chet-toan-than-byphasse-exfoliant-body.webp',
        'Byphasse',
        'Còn hàng', [],
        '119,000đ',
        '199,000đ', [], []
    ),
    new Product(
        'body',
        'duong-da-body',
        'tay-te-bao-chet-body',
        'Tẩy tế bào chết toàn thân Organic Shop (hũ)',
        './images/imgHang/body-care/duong-da-body/tay-te-bao-chet/tay-te-bao-chet-toan-than-organic-shop.webp',
        'Organic Shop',
        'Còn hàng', [],
        '85,000đ',
        '150,000đ', [], []
    ),
    // chăm sóc tóc
    // dầu gội xã
    new Product(
        'body',
        'cham-soc-toc',
        'dau-goi-xa',
        'Bộ gội xả Gừng, Thảo Mộc Weilaiya ( tặng kèm set mini 20ml)',
        './images/imgHang/body-care/cham-soc-toc/dau-goi-xa/bo-goi-xa-gung-thao-moc-weilaiya-tang-kem-set-mini-20ml.webp',
        'Weilaiya',
        'Còn hàng', [],
        '488,000đ',
        '680,000đ', [], []
    ),
    new Product(
        'body',
        'cham-soc-toc',
        'dau-goi-xa',
        'Bộ gội xả Hairburst',
        './images/imgHang/body-care/cham-soc-toc/dau-goi-xa/bo-goi-xa-hairburst.webp',
        'Hairburst',
        'Còn hàng', [],
        '589,000đ',
        '750,000đ', [], []
    ),
    new Product(
        'body',
        'cham-soc-toc',
        'dau-goi-xa',
        'Cặp Dầu Gội Xả TIGI',
        './images/imgHang/body-care/cham-soc-toc/dau-goi-xa/cap-dau-goi-xa-tigi.webp',
        'Weilaiya',
        'Còn hàng', [],
        '399,000đ',
        '690,000đ', [], []
    ),
    new Product(
        'body',
        'cham-soc-toc',
        'dau-goi-xa',
        'Dầu Gội Khô Girlz Only',
        './images/imgHang/body-care/cham-soc-toc/dau-goi-xa/dau-goi-kho-girlz-only.webp',
        'Girlz Only',
        'Còn hàng', [],
        '92,000đ',
        '140,000đ', [], []
    ),
    new Product(
        'body',
        'cham-soc-toc',
        'dau-goi-xa',
        'Dầu gội, xả dưỡng tóc bóng mượt Premium Moist Tsubaki (Màu đỏ)',
        './images/imgHang/body-care/cham-soc-toc/dau-goi-xa/bo-doi-goi-xa-duong-toc-bong-muot-premium-moist-tsubaki-mau-do.webp',
        'Tsubaki',
        'Còn hàng', [],
        '159,000đ',
        '199,000đ', [], []
    ),
    new Product(
        'body',
        'cham-soc-toc',
        'dau-goi-xa',
        'Dầu gội/xả phục hồi ngăn rụng tóc Tsubaki Premium Repair 490ml (Màu Vàng)',
        './images/imgHang/body-care/cham-soc-toc/dau-goi-xa/dau-goi-xa-phuc-hoi-ngan-rung-toc-tsubaki-premium-repair-490ml-mau-vang.webp',
        'Tsubaki',
        'Còn hàng', [],
        '159,000đ',
        '199,000đ', [], []
    ),
    //dưỡng tóc
    new Product(
        'body',
        'cham-soc-toc',
        'duong-toc-1',
        'Dầu dưỡng tóc Argan oil of Morocco Natural World (100ml)',
        './images/imgHang/body-care/cham-soc-toc/duong-toc/dau-duong-toc-argan-oil-of-morocco-natural-world-100ml.webp',
        'Natural World',
        'Còn hàng', [],
        '115,000đ',
        '180,000đ', [], []
    ),
    new Product(
        'body',
        'cham-soc-toc',
        'duong-toc-1',
        'Dầu dưỡng tóc Argan oil of Morocco Natural World (25ml)',
        './images/imgHang/body-care/cham-soc-toc/duong-toc/dau-duong-toc-argan-oil-of-morocco-natural-world-25ml.webp',
        'Natural World',
        'Còn hàng', [],
        '58,000đ',
        '100,000đ', [], []
    ),
    new Product(
        'body',
        'cham-soc-toc',
        'duong-toc-1',
        'Dầu dưỡng tóc phục hồi hư tổn Tsubaki Oil Perfection Hair Oil 50ml',
        './images/imgHang/body-care/cham-soc-toc/duong-toc/dau-duong-toc-phuc-hoi-hu-ton-tsubaki-oil-perfection-hair-oil-50ml.webp',
        'Tsubaki',
        'Còn hàng', [],
        '229,000đ',
        '289,000đ', [], []
    ),
    new Product(
        'body',
        'cham-soc-toc',
        'duong-toc-1',
        'Dưỡng tóc Miseen Scene Perfect Serum',
        './images/imgHang/body-care/cham-soc-toc/duong-toc/duong-toc-miseen.webp',
        'Miseen Scene',
        'Còn hàng', [],
        '159,000đ',
        '170,000đ', [], []
    ),
    new Product(
        'body',
        'cham-soc-toc',
        'duong-toc-1',
        'Mặt nạ tóc Tsubaki Premium Repair Mask 180g',
        './images/imgHang/body-care/cham-soc-toc/duong-toc/mat-na-toc-tsubaki-premium-repair-mask-180g.webp',
        'Tsubaki',
        'Còn hàng', [],
        '199,000đ',
        '', [], []
    ),
    new Product(
        'body',
        'cham-soc-toc',
        'duong-toc-1',
        'Nước dưỡng tóc tinh dầu bưởi Cocoon Pomelo Hair Tonic',
        './images/imgHang/body-care/cham-soc-toc/duong-toc/nuoc-duong-toc-tinh-dau-buoi-cocoon-pomelo-hair-tonic.webp',
        'Cocoon',
        'Còn hàng', [],
        '130,000đ',
        '160,000đ', [], []
    ),
    new Product(
        'body',
        'cham-soc-toc',
        'duong-toc-1',
        'Tinh chất dưỡng tóc Guerisson Damage Control Hair Essence',
        './images/imgHang/body-care/cham-soc-toc/duong-toc/tinh-chat-duong-toc-guerisson-damage-control-hair-essence.webp',
        'Guerisson',
        'Còn hàng', [],
        '105,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'body',
        'cham-soc-toc',
        'duong-toc-1',
        'Tinh Dầu Dưỡng Tóc Argan Hair Oil R3 RAIP',
        './images/imgHang/body-care/cham-soc-toc/duong-toc/tinh-dau-duong-toc-argan-hair-oil-r3-raip.webp',
        'R3R',
        'Còn hàng', [],
        '85,000đ',
        '130,000đ', [], []
    ),
    new Product(
        'body',
        'cham-soc-toc',
        'duong-toc-1',
        'Xịt dưỡng tóc Hairburst Volume & Growth Elixir 125ml ( Tặng dầu gội khô Girlzonly màu bất kì)',
        './images/imgHang/body-care/cham-soc-toc/duong-toc/xit-duong-toc-hairburst-volume-growth-elixir-125ml-tang-dau-goi-kho-girlzonly-mau-bat-ki.webp',
        'Hairburst',
        'Còn hàng', [],
        '589,000đ',
        '980,000đ', [], []
    ),
    new Product(
        'body',
        'cham-soc-toc',
        'duong-toc-1',
        'Xịt dưỡng tóc phục hồi hư tổn Tsubaki Premium Repair Hair Water 220ml',
        './images/imgHang/body-care/cham-soc-toc/duong-toc/xit-duong-toc-phuc-hoi-hu-ton-tsubaki-premium-repair-hair-water-220ml.webp',
        'Tsubaki',
        'Còn hàng', [],
        '145,000đ',
        '179,000đ', [], []
    ),
    // phụ kiện
    //phụ kiện makeup
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Bộ cọ trang điểm 12 cây',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/bo-co-trang-diem-12-cay.webp',
        'Cỏ Cosmetics',
        'Còn hàng', [],
        '45,000đ',
        '75,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Bộ cọ trang điểm mini 7 cây thỏ hồng',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/bo-co-trang-diem-mini-7-cay-tho-hong.webp',
        'Cỏ Cosmetics',
        'Còn hàng', [],
        '30,000đ',
        '55,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Bộ cọ Vacosi My Darling 6 cây',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/bo-co-vacosi-my-darling-6-cay-mau-do.webp',
        'Vacosi',
        'Còn hàng', [],
        '125,000đ',
        '180,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ mút tán phấn mắt Vacosi',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/co-mut-tan-phan-mat-vacosi.webp',
        'Vacosi',
        'Còn hàng', [],
        '4,000đ',
        '5,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi E04',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-e04.webp',
        'Vacosi',
        'Còn hàng', [],
        '38,000đ',
        '65,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi E2E',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-e2e.webp',
        'Vacosi',
        'Còn hàng', [],
        '38,000đ',
        '65,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi F03',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-f03.webp',
        'Vacosi',
        'Còn hàng', [],
        '69,000đ',
        '115,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi F04',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-f04.webp',
        'Vacosi',
        'Còn hàng', [],
        '69,000đ',
        '80,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi F06',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-f06.webp',
        'Vacosi',
        'Còn hàng', [],
        '45,000đ',
        '65,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi L02',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-l02.webp',
        'Vacosi',
        'Còn hàng', [],
        '30,000đ',
        '60,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi M05',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-m05.webp',
        'Vacosi',
        'Còn hàng', [],
        '55,000đ',
        '91,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi M09',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-m09.webp',
        'Vacosi',
        'Còn hàng', [],
        '69,000đ',
        '115,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi M17',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-m17.webp',
        'Vacosi',
        'Còn hàng', [],
        '65,000đ',
        '80,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi M21',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-m21.webp',
        'Vacosi',
        'Còn hàng', [],
        '65,000đ',
        '108,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi M24',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-m24.webp',
        'Vacosi',
        'Còn hàng', [],
        '52,000đ',
        '85,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ Vacosi M10',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/co-vacosi-m10.webp',
        'Vacosi',
        'Còn hàng', [],
        '65,000đ',
        '85,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ Viền Đầu Dẹp Mảnh Vacosi Flat & Line Brush - E17',
        './images/imgHang/accessory/accessory-makeup/co-trang-diem/co-vien-dau-dep-manh-vacosi-flat-line-brush-e17.webp',
        'Vacosi',
        'Còn hàng', [],
        '39,000đ',
        '42,000đ', [], []
    ),
    //phụ kiện mi
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'phu-kien-mi',
        'Bấm mi cán đen Vacosi Morden Lash Curler',
        './images/imgHang/accessory/accessory-makeup/phu-kien-mi/bam-mi-can-den-vacosi-morden-lash-curler.webp',
        'Vacosi',
        'Còn hàng', [],
        '45,000đ',
        '55,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'phu-kien-mi',
        'Keo dán mi Vacosi Eyelash 3D Primer',
        './images/imgHang/accessory/accessory-makeup/phu-kien-mi/keo-dan-mi-vacosi-eyelash-3d-primer.webp',
        'Vacosi',
        'Còn hàng', [],
        '52,000đ',
        '80,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'phu-kien-mi',
        'Lông mi giả Vacosi 4D Pro Eyelashes',
        './images/imgHang/accessory/accessory-makeup/phu-kien-mi/long-mi-gia-vacosi-4d-pro-eyelashes.webp',
        'Vacosi',
        'Còn hàng', [],
        '53,000đ',
        '80,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'phu-kien-mi',
        'Miếng dán kích mí Vacosi Eyelid Tape',
        './images/imgHang/accessory/accessory-makeup/phu-kien-mi/mieng-dan-kich-mi-vacosi-eyelid-tape.webp',
        'Vacosi',
        'Còn hàng', [],
        '46,000đ',
        '80,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-makeup',
        'phu-kien-mi',
        'Miếng dán mi lưới Vacosi Invisible Fiber Tape VM16 ( 120 miếng/hộp)',
        './images/imgHang/accessory/accessory-makeup/phu-kien-mi/mieng-dan-mi-luoi-vacosi-invisible-fiber-tape-vm16-120-mieng-hop.webp',
        'Vacosi',
        'Còn hàng', [],
        '52,000đ',
        '85,000đ', [], []
    ),
    //phụ kiện cá nhân
    //phụ kiện phòng tắm
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Băng đô nơ có viền ren',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bang-do-no-co-vien-ren.webp',
        'No Brand',
        'Còn hàng', [],
        '25,000đ',
        '35,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Băng đô nơ Cool',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bang-do-rua-mat-no-cool.webp',
        'No Brand',
        'Còn hàng', [],
        '25,000đ',
        '35,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Băng đô nơ Line Friends',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bang-do-no-line-friends.webp',
        'No Brand',
        'Còn hàng', [],
        '25,000đ',
        '55,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Băng đô rửa mặt tai thỏ cà rốt',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bang-do-rua-mat-tai-tho-ca-rot.webp',
        'No Brand',
        'Còn hàng', [],
        '25,000đ',
        '35,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Băng đô tai thỏ',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bang-do-tai-tho.webp',
        'No Brand',
        'Còn hàng', [],
        '25,000đ',
        '45,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Bộ chiết mỹ phẩm',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bo-chiet-my-pham.webp',
        'No Brand',
        'Còn hàng', [],
        '55,000đ',
        '70,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Bông Phấn Hồ Lô Vacosi Pear Blender - BP06',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bong-phan-ho-lo-vacosi-pear-blender-bp06.webp',
        'Vacosi',
        'Còn hàng', [],
        '35,000đ',
        '', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Bông phấn tròn Vacosi Small Round Puff',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bong-phan-tron-vacosi.webp',
        'Vacosi',
        'Còn hàng', [],
        '15,000đ',
        '', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Bông tán Cushion Vacosi Accessories',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bong-cushion-vacosi.webp',
        'Vacosi',
        'Còn hàng', [],
        '18,000đ',
        '', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Chai chiết mỹ phẩm',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/chai-chiet-my-pham.webp',
        'Cỏ Cosmetics',
        'Hết hàng', [],
        'Liên hệ',
        '', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Dao cạo mày Ailin',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/dao-cao-may-ailin.webp',
        'Cỏ Cosmetics',
        'Còn hàng', [],
        '8,000đ',
        '14,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Dao cạo tỉa lông mày Nalamei',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/dao-cao-tia-long-may-nalamei.webp',
        'Nalamei',
        'Còn hàng', [],
        '12,000đ',
        '25,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Dao cạo tỉa lông mày Vacosi Eyebrow Knife',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/dao-cao-tia-long-may-vacosi-eyebrow-knife-dc06.webp',
        'Vacosi',
        'Còn hàng', [],
        '35,000đ',
        '49,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Dụng Cụ Rửa Mặt Vacosi Natural Studio Boover Cleanser Hình Bạch Tuộc',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/dung-cu-rua-mat-vacosi-natural-studio-boover-cleanser-hinh-bach-tuoc.webp',
        'Vacosi',
        'Còn hàng', [],
        '46,000đ',
        '68,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Gương mini kèm lược',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/guong-mini-kem-luoc.webp',
        'Cỏ Cosmetics',
        'Còn hàng', [],
        '15,000đ',
        '25,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Miếng Rửa Mặt Nhật Bản Loven Making Cleansing Pad',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/chai-chiet-my-pham.webp',
        'Loven',
        'Còn hàng', [],
        '42,000đ',
        '70,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Miếng rửa mặt Vacosi Accessories Beauty Tool Series',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/mieng-rua-mat-vacosi-accessories-beauty-tool-series.webp',
        'Vacosi',
        'Còn hàng', [],
        '35,000đ',
        '40,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Mút tán Real Techniques Limited Edition',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/mut-tan-real-techniques-limited-edition.webp',
        'Real Techniques',
        'Còn hàng', [],
        '119,000đ',
        '189,000đ', [], []
    ), new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Mút Tán Tam Giác 3 Miếng Vacosi',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/mut-tan-tam-giac-3-mieng-vacosi.webp',
        'Vacosi',
        'Còn hàng', [],
        '15,000đ',
        '25,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Túi đựng mỹ phẩm Travel Multi Pouch',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/tui-dung-my-pham-travel-multi-pouch.webp',
        'No Brand',
        'Còn hàng', [],
        '39,000đ',
        '59,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Túi đựng mỹ phẩm Washbag',
        './images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/tui-dung-my-pham-washbag.webp',
        'Washbag',
        'Còn hàng', [],
        '39,000đ',
        '45,000đ', [], []
    ),
    //phụ kiện cá nhân
    //phụ kiện cá nhân
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-ca-nhan-1',
        'Bấm móng tay Vacosi',
        './images/imgHang/accessory/accessory-personal/phu-kien-ca-nhan/bam-mong-tay-vacosi.webp',
        'Vacosi',
        'Còn hàng', [],
        '35,000đ',
        '60,000đ', [], []
    ),
    new Product(
        'phu-kien',
        'phu-kien-ca-nhan',
        'phu-kien-ca-nhan-1',
        'Cây nặn mụn Vacosi NM01',
        './images/imgHang/accessory/accessory-personal/phu-kien-ca-nhan/cay-nan-mun-vacosi-nm01-1.webp',
        'Vacosi',
        'Còn hàng', [],
        '15,000đ',
        '20,000đ', [], []
    ),

    //cho nam
    new Product(
        'cho-nam',
        'cho-nam',
        'cho-nam',
        'Chấm Mụn dành cho nam MdoC AC Solution Powder Spot 15ml',
        './images/imgHang/man/cham-mun-danh-cho-nam-mdoc-ac-solution-powder-spot-15ml.webp',
        'MdoC',
        'Còn hàng', [],
        '319,000đ',
        '439,000đ', [], []
    ),
    new Product(
        'cho-nam',
        'cho-nam',
        'cho-nam',
        'Kem dưỡng da ban đêm dành cho nam Mdoc Night Effects Whitening Gel 100g',
        './images/imgHang/man/kem-duong-da-ban-dem-danh-cho-nam-mdoc-night-effects-whitening-gel-100g.webp',
        'MdoC',
        'Còn hàng', [],
        '549,000đ',
        '729,000đ', [], []
    ),
    new Product(
        'cho-nam',
        'cho-nam',
        'cho-nam',
        'Kem dưỡng trắng Mdoc Whitening Tone Up Cream 50 ml',
        './images/imgHang/man/kem-duong-trang-mdoc-whitening-tone-up-cream-50-ml.webp',
        'MdoC',
        'Còn hàng', [],
        '499,000đ',
        '719,000đ', [], []
    ),
    new Product(
        'cho-nam',
        'cho-nam',
        'cho-nam',
        'Lotion dưỡng trắng dành cho nam Mdoc Whitening Skin+Lotion',
        './images/imgHang/man/lotion-duong-trang-danh-cho-nam-mdoc-whitening-skin-lotion.webp',
        'MdoC',
        'Còn hàng', [],
        '615,000đ',
        '749,000đ', [], []
    ),
    new Product(
        'cho-nam',
        'cho-nam',
        'cho-nam',
        'Nước cân bằng dành cho nam MdoC Sebum Strike Toner',
        './images/imgHang/man/nuoc-hoa-hong-danh-cho-nam-mdoc-sebum-strike-toner.webp',
        'MdoC',
        'Còn hàng', [],
        '469,000đ',
        '659,000đ', [], []
    ),
    new Product(
        'cho-nam',
        'cho-nam',
        'cho-nam',
        'Nước hoa dành cho nam Gucci Guilty Pour Homme ADT 15ml',
        './images/imgHang/man/nuoc-hoa-danh-cho-nam-gucci-guilty-pour-homme-adt-15ml.webp',
        'Gucci',
        'Còn hàng', [],
        '560,000đ',
        '750,000đ', [], []
    ),
    new Product(
        'cho-nam',
        'cho-nam',
        'cho-nam',
        'Serum dưỡng da dành cho nam MdoC Sebum Strike Serum',
        './images/imgHang/man/serum-duong-da-danh-cho-nam-mdoc-sebum-strike-serum.webp',
        'MdoC',
        'Còn hàng', [],
        '499,000đ',
        '669,000đ', [], []
    ),
    new Product(
        'cho-nam',
        'cho-nam',
        'cho-nam',
        'Sữa Rửa Mặt dành cho nam MdoC Blackhead Perfect Scrub Foam 150g',
        './images/imgHang/man/sua-rua-mat-danh-cho-nam-mdoc-blackhead-perfect-scrub-foam-150g.webp',
        'MdoC',
        'Còn hàng', [],
        '299,000đ',
        '479,000đ', [], []
    ),
    new Product(
        'cho-nam',
        'cho-nam',
        'cho-nam',
        'Sữa rửa mặt dành cho nam MdoC Relief Foam Cleasing',
        './images/imgHang/man/sua-rua-mat-danh-cho-nam-mdoc-relief-foam-cleasing-tang-mini-size-bat-ki-voi-chai-full-150gr.webp',
        'MdoC',
        'Còn hàng', [],
        '299,000đ',
        '399,000đ', [], []
    ),
    new Product(
        'cho-nam',
        'cho-nam',
        'cho-nam',
        'Tinh chất chống nắng dành cho nam MdoC Sunshine UV Solution Essence 50ml',
        './images/imgHang/man/tinh-chat-chong-nang-danh-cho-nam-mdoc-sunshine-uv-solution-essence-50ml.webp',
        'MdoC',
        'Còn hàng', [],
        '539,000đ',
        '659,000đ', [], []
    ),
    new Product(
        'cho-nam',
        'cho-nam',
        'cho-nam',
        'Tinh chất dưỡng trắng dành cho nam Mdoc Whitening Essence 100ml',
        './images/imgHang/man/tinh-chat-duong-trang-danh-cho-nam-mdoc-whitening-essence-100ml.webp',
        'MdoC',
        'Còn hàng', [],
        '569,000đ',
        '749,000đ', [], []
    ),
    new Product(
        'cho-nam',
        'cho-nam',
        'cho-nam',
        'Tinh chất thu gọn lỗ chân lông dành cho nam MdoC Skin Pore Tightener 2.0',
        './images/imgHang/man/tinh-chat-thu-gon-lo-chan-long-danh-cho-nam-mdoc-skin-pore-tightener-2-0.webp',
        'MdoC',
        'Còn hàng', [],
        '429,000đ',
        '619,000đ', [], []
    ),
    //nước hoa
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa dành cho nam Gucci Guilty Pour Homme ADT 15ml',
        './images/imgHang/perfume/nuoc-hoa-danh-cho-nam-gucci-guilty-pour-homme-adt-15ml.webp',
        'Gucci',
        'Còn hàng', [],
        '560,000đ',
        '750,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa dành cho nữ Gucci Guilty Pour Femme EDP 15ml',
        './images/imgHang/perfume/nuoc-hoa-danh-cho-nu-gucci-guilty-pour-femme-edp-15ml.webp',
        'Gucci',
        'Còn hàng', [],
        '590,000đ',
        '750,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa Dior J’adore Eau De Parfum (5ml)',
        './images/imgHang/perfume/nuoc-hoa-miss-dior-mini-5ml.webp',
        'Dior',
        'Còn hàng', [],
        '158,000đ',
        '220,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa Gucci Bloom Nettare Di Fiori EDP Intense 5ml (nâu)',
        './images/imgHang/perfume/nuoc-hoa-nu-gucci-bloom-profumo-di-fiori-vang.webp',
        'Gucci',
        'Còn hàng', [],
        '310,000đ',
        '470,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước Hoa Miss Dior (mini 5ml)',
        './images/imgHang/perfume/nuoc-hoa-miss-dior-mini-5ml.webp',
        'Dior',
        'Còn hàng', [],
        '158,000đ',
        '220,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nam 212 Men Sexy Carolina Herrera EDT 100ml',
        './images/imgHang/perfume/nuoc-hoa-nam-212-men-sexy-carolina-herrera-edt-100ml.webp',
        'Carolina Herrera',
        'Còn hàng', [],
        '1,380,000đ',
        '1,850,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nam Chanel Bleu De Chanel EDP 100ml',
        './images/imgHang/perfume/nuoc-hoa-nam-chanel-bleu-de-chanel-edp-100ml.webp',
        'Chanel',
        'Còn hàng', [],
        '3,800,000đ',
        '4,500,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nam Dolce & Gabbana Light Blue Pour Homme EDT (Mini 4.5ml)',
        './images/imgHang/perfume/nuoc-hoa-nam-dolce-gabbana-light-blue-pour-homme-edt-mini-4-5ml.webp',
        'Dolce & Gabbana',
        'Còn hàng', [],
        '219,000đ',
        '300,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nam Hugo Boss Man EDT 125ml',
        './images/imgHang/perfume/nuoc-hoa-nam-hugo-boss-man-edt-125ml.webp',
        'Hugo Boss',
        'Còn hàng', [],
        '830,000đ',
        '1,200,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước Hoa Nam MR.Burberry EDP (mini 2ml)',
        './images/imgHang/perfume/nuoc-hoa-nam-mr-burberry-edp-mini-2ml.webp',
        'MR.Burberry',
        'Còn hàng', [],
        '45,000đ',
        '52,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nam Versace Dylan Blue Pour Homme (mini 5ml)',
        './images/imgHang/perfume/nuoc-hoa-nam-versace-dylan-blue-pour-homme-mini-5ml.webp',
        'Versace',
        'Còn hàng', [],
        '119,000đ',
        '180,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nữ Armaf Club de Nuit Woman EDP',
        './images/imgHang/perfume/nuoc-hoa-nu-armaf-club-de-nuit-woman-edp.webp',
        'Armaf',
        'Còn hàng', [],
        '799,000đ',
        '1,039,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nữ Dolce & Gabbana The One EDP',
        './images/imgHang/perfume/nuoc-hoa-nu-dolce-gabbana-the-one-edp-75ml.webp',
        'Dolce & Gabbana',
        'Còn hàng', [],
        '229,000đ',
        '499,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nữ Flower By Kenzo EDP',
        './images/imgHang/perfume/nuoc-hoa-nu-flower-by-kenzo-edp.webp',
        'Kenzo',
        'Còn hàng', [],
        '159,000đ',
        '209,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nữ Gucci Bloom Profumo Di Fiori (vàng)',
        './images/imgHang/perfume/nuoc-hoa-nu-flower-by-kenzo-edp.webp',
        'Gucci',
        'Còn hàng', [],
        '439,000đ',
        '525,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nữ Moschino Toy 2 EDP',
        './images/imgHang/perfume/nuoc-hoa-nu-moschino-toy-2-edp.webp',
        'Moschino',
        'Còn hàng', [],
        '175,000đ',
        '390,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nữ Narciso Rodriguez Pure Musc mini 4ml',
        './images/imgHang/perfume/nuoc-hoa-nu-narciso-rodriguez-pure-musc-mini-4ml.webp',
        'Narciso Rodriguez',
        'Còn hàng', [],
        '208,000đ',
        '300,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nữ Paleta Perfume',
        './images/imgHang/perfume/nuoc-hoa-nu-paleta-perfume.webp',
        'Paleta',
        'Còn hàng', [],
        '146,000đ',
        '220,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nữ Versace Bright Crystal EDT',
        './images/imgHang/perfume/nuoc-hoa-nu-moschino-toy-2-edp.webp',
        'Versace',
        'Còn hàng', [],
        '1,290,000đ',
        '', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nữ Versace Crystal Noir EDT (mini 5ml)',
        './images/imgHang/perfume/nuoc-hoa-nu-versace-crystal-noir-edt-mini-5ml.webp',
        'Versace',
        'Còn hàng', [],
        '119,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa nữ Versace Yellow Diamond (mini 5ml)',
        './images/imgHang/perfume/nuoc-hoa-nu-versace-yellow-diamond-mini-5ml.webp',
        'Versace',
        'Còn hàng', [],
        '140,000đ',
        '220,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa Pinker Bell Korea',
        './images/imgHang/perfume/nuoc-hoa-nu-versace-crystal-noir-edt-mini-5ml.webp',
        'Perfume Holic',
        'Còn hàng', [],
        '225,000đ',
        '380,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa Versace Bright Crystal (mini 5ml)',
        './images/imgHang/perfume/nuoc-hoa-versace-bright-crystal-mini-5ml.webp',
        'Versace',
        'Còn hàng', [],
        '139,000đ',
        '200,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa Versace Bright Crystal Absolu (mini 5ml)',
        './images/imgHang/perfume/nuoc-hoa-versace-bright-crystal-absolu-mini-5ml.webp',
        'Perfume Holic',
        'Còn hàng', [],
        '190,000đ',
        '250,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa Versace Dylan Blue Pour Femme (mini 5ml)',
        './images/imgHang/perfume/nuoc-hoa-versace-dylan-blue-pour-femme-mini-5ml.webp',
        'Versace',
        'Còn hàng', [],
        '155,000đ',
        '260,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước hoa Versace Eros for Men EDT (mini 5ml)',
        './images/imgHang/perfume/nuoc-hoa-versace-eros-for-men-edt-mini-5ml.webp',
        'Versace',
        'Còn hàng', [],
        '115,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước Hoa Versace Pour Homme (mini 5ml)',
        './images/imgHang/perfume/nuoc-hoa-versace-pour-homme-mini-5ml.webp',
        'Versace',
        'Còn hàng', [],
        '115,000đ',
        '200,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Nước Hoa Vùng Kín Re:p Natural Herb Inner Balance 5ml',
        './images/imgHang/perfume/nuoc-hoa-vung-kin-re-p-natural-herb-inner-balance-5ml.webp',
        'Re:p',
        'Còn hàng', [],
        '399,000đ',
        '', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Xịt thơm quần áo Fabric Perfume',
        './images/imgHang/perfume/xit-thom-quan-ao-fabric-perfume.webp',
        'Fabric',
        'Còn hàng', [],
        '82,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Xịt Thơm Toàn Thân Body Bath & Body Works Fragrance Mist',
        './images/imgHang/perfume/xit-thom-toan-than-body-bath-body-works-fragrance-mist.webp',
        'Bath & Body Works',
        'Còn hàng', [],
        '259,000đ',
        '400,000đ', [], []
    ),
    new Product(
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'nuoc-hoa-1',
        'Xịt thơm Victoria.s Secret Fragrance Mist',
        './images/imgHang/perfume/xit-thom-victoria-s-secret-fragrance-mist.webp',
        'Victoria.s Secret',
        'Còn hàng', [],
        '290,000đ',
        '450,000đ', [], []
    ),
    //săn quà
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Siêu huyết thanh xóa mụn Derladie Herbal Ampoule for Blemish',
        './images/imgHang/gitf/huyet-thanh-derladie-tri-mun_e60a2f760beb4086932387d2d909e131_large.webp',
        'Derladie',
        'Còn hàng', [],
        '399,000đ',
        '630,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Nước cân bằng & Dưỡng ẩm Senka Deep Moist Lotion I',
        './images/imgHang/gitf/nuoc-can-bang-duong-am-senka-deep-moist-lotion-i.webp',
        'Senka',
        'Còn hàng', [],
        '169,000đ',
        '300,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Gel rửa mặt tẩy trang 2 trong 1 Senka Perfect Clear Cleanse 170ml',
        './images/imgHang/gitf/gel-rua-mat-tay-trang-2-trong-1-senka-perfect-clear-cleanse-170ml.webp',
        'Senka',
        'Còn hàng', [],
        '199,000đ',
        '220,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Dầu tẩy trang Senka A.L.L Clear Oil',
        './images/imgHang/gitf/dau-tay-trang-senka-a-l-l-clear-oil.webp',
        'Senka',
        'Còn hàng', [],
        '259,000đ',
        '420,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Kem dưỡng trắng da nâng tông 3 trong 1 Senka White Beauty Cream 100gr',
        './images/imgHang/gitf/kem-duong-trang-da-nang-tong-3-trong-1-senka-white-beauty-cream-100gr.webp',
        'Senka',
        'Còn hàng', [],
        '265,000đ',
        '290,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Kem dưỡng da ban ngày Senka White Beauty Glow UV Cream 50g',
        './images/imgHang/gitf/kem-duong-da-ban-ngay-senka-white-beauty-glow-uv-cream-50g.webp',
        'Senka',
        'Còn hàng', [],
        '229,000đ',
        '370,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Gel sữa chống nắng Senka Perfect UV Gel 80ml',
        './images/imgHang/gitf/gel-sua-chong-nang-senka-perfect-uv-gel-80ml-1.webp',
        'Senka',
        'Còn hàng', [],
        '175,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'CC Serum trắng da Senka White Beauty Serum in CC 40gr',
        './images/imgHang/gitf/cc-serum-trang-da-senka-white-beauty-serum-in-cc-40gr.webp',
        'Senka',
        'Còn hàng', [],
        '179,000đ',
        '205,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Sữa chống nắng Anessa Mild Milk 60ml',
        './images/imgHang/gitf/sua-chong-nang-anessa-mild-milk-60ml.webp',
        'Anessa',
        'Còn hàng', [],
        '499,000đ',
        '685,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Sữa chống nắng Anessa Perfect UV Suncreen Skincare Milk A 60ml',
        './images/imgHang/gitf/sua-chong-nang-anessa-perfect-uv-suncreen-skincare-milk-a-60ml.webp',
        'Anessa',
        'Còn hàng', [],
        '525,000đ',
        '685,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Kem chống nắng Anessa',
        './images/imgHang/gitf/kem-chong-nang-anessa.webp',
        'Anessa',
        'Còn hàng', [],
        '419,000đ',
        '550,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Gel rửa mặt dịu nhẹ Senka Perfect Gel Gentle wash 100g',
        './images/imgHang/gitf/gel-rua-mat-diu-nhe-senka-perfect-gel-gentle-wash-100g.webp',
        'Senka',
        'Còn hàng', [],
        '109,000đ',
        '175,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Nước sữa tẩy trang 2 lớp Senka A.L.L Clear Milky Water 230ml',
        './images/imgHang/gitf/nuoc-sua-tay-trang-2-lop-senka-a-l-l-clear-milky-water-230ml.webp',
        'Senka',
        'Còn hàng', [],
        '109,000đ',
        '199,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Xịt dưỡng tóc phục hồi hư tổn Tsubaki Premium Repair Hair Water 220ml',
        './images/imgHang/gitf/xit-duong-toc-phuc-hoi-hu-ton-tsubaki-premium-repair-hair-water-220ml.webp',
        'Tsubaki',
        'Còn hàng', [],
        '145,000đ',
        '179,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Tinh chất chống nắng Senka Perfect UV Essence',
        './images/imgHang/gitf/tinh-chat-chong-nang-senka-perfect-uv-essence.webp',
        'Senka',
        'Còn hàng', [],
        '149,000đ',
        '240,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Sữa chống nắng Senka Perfect UV Milk N 40ml',
        './images/imgHang/gitf/sua-chong-nang-senka-perfect-uv-milk-n-40ml.webp',
        'Senka',
        'Còn hàng', [],
        '149,000đ',
        '160,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Sữa Tắm Dưỡng Ẩm Senka Perfect Bubble For Body 500ml',
        './images/imgHang/gitf/sua-tam-duong-am-senka-perfect-bubble-for-body-500ml.webp',
        'Senka',
        'Còn hàng', [],
        '149,000đ',
        '159,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Kem xả Tsubaki 180gr',
        './images/imgHang/gitf/kem-xa-tsubaki-180gr.webp',
        'Tsubaki',
        'Còn hàng', [],
        '149,000đ',
        '189,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Dầu gội/xả phục hồi ngăn rụng tóc Tsubaki Premium Repair 490ml (Màu Vàng)',
        './images/imgHang/gitf/dau-goi-xa-phuc-hoi-ngan-rung-toc-tsubaki-premium-repair-490ml-mau-vang.webp',
        'Tsubaki',
        'Còn hàng', [],
        '159,000đ',
        '199,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Dầu gội, xả dưỡng tóc bóng mượt Premium Moist Tsubaki (Màu đỏ)',
        './images/imgHang/gitf/bo-doi-goi-xa-duong-toc-bong-muot-premium-moist-tsubaki-mau-do.webp',
        'Tsubaki',
        'Còn hàng', [],
        '159,000đ',
        '199,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Gel sữa chống nắng Senka Perfect UV Gel 80ml',
        './images/imgHang/gitf/gel-sua-chong-nang-senka-perfect-uv-gel-80ml-1.webp',
        'Senka',
        'Còn hàng', [],
        '175,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Mặt nạ ngủ Senka Deep Moist Gel Cream 50gr',
        './images/imgHang/gitf/mat-na-ngu-senka-deep-moist-gel-cream-50gr.webp',
        'Senka',
        'Còn hàng', [],
        '179,000đ',
        '290,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Nước dưỡng làm mềm & trắng da Senka White Beauty Lotion I',
        './images/imgHang/gitf/nuoc-duong-lam-mem-trang-da-senka-white-beauty-lotion-i.webp',
        'Senka',
        'Còn hàng', [],
        '170,000đ',
        '300,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Mặt nạ tóc Tsubaki Premium Repair Mask 180g',
        './images/imgHang/gitf/mat-na-toc-tsubaki-premium-repair-mask-180g.webp',
        'Tsubaki',
        'Còn hàng', [],
        '199,000đ',
        '', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Kem dưỡng trắng da ban đêm Senka White Beauty Glow Gel Cream 50gr',
        './images/imgHang/gitf/kem-duong-trang-da-ban-dem-senka-white-beauty-glow-gel-cream-50gr.webp',
        'Senka',
        'Còn hàng', [],
        '229,000đ',
        '249,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Serum dưỡng trắng da Senka White Beauty 35g',
        './images/imgHang/gitf/serum-duong-trang-da-senka-white-beauty-35g.webp',
        'Senka',
        'Còn hàng', [],
        '229,000đ',
        '360,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Dầu dưỡng tóc phục hồi hư tổn Tsubaki Oil Perfection Hair Oil 50ml',
        './images/imgHang/gitf/dau-duong-toc-phuc-hoi-hu-ton-tsubaki-oil-perfection-hair-oil-50ml.webp',
        'Tsubaki',
        'Còn hàng', [],
        '229,000đ',
        '289,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Kem nền Trang Điểm Chống Nắng Anessa Perfect UV Sunscreen Skincare BB Foundation SPF50+/ PA++++ 25ml',
        './images/imgHang/gitf/kem-nen-trang-diem-chong-nang-anessa-perfect-uv-sunscreen-skincare-bb-foundation-spf50-pa-25ml.webp',
        'Anessa',
        'Còn hàng', [],
        '289,000đ',
        '375,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Bộ đôi gội + xả Sạch Dầu Mát Lạnh Tsubaki Premium Cool Set (490ml/chai)',
        './images/imgHang/gitf/bo-doi-goi-xa-sach-dau-mat-lanh-tsubaki-premium-cool-set-490ml-chai.webp',
        'Tsubaki',
        'Còn hàng', [],
        '309,000đ',
        '', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Xịt chống nắng Anessa Perfect UV Sunscreen Skincare Spray A 60gr',
        './images/imgHang/gitf/xit-chong-nang-anessa-perfect-uv-sunscreen-skincare-spray-a-60gr.webp',
        'Anessa',
        'Còn hàng', [],
        '330,000đ',
        '435,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Xịt Chống Nắng Toàn Thân Anessa Perfect UV Sunscreen Bubble Spray A SPF50+/PA++++',
        './images/imgHang/gitf/xit-chong-nang-toan-than-anessa-perfect-uv-sunscreen-bubble-spray-a-spf50-pa.webp',
        'Anessa',
        'Còn hàng', [],
        '425,000đ',
        '509,000đ', [], []
    ),
)

//ma-hong
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'ma-hong',
        'Má Hồng Innisfree Jelly Cheek',
        './images/hocImage/mahong/mahong1/ma_hong_innisfree_jelly_cheek_d45a9ea296904ab093858126affae573_large.png',
        'Innisfree',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '138000',
        '200000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'ma-hong',
        'Phấn Má Hồng Lilybyred Luv Beam Cheek',
        './images/hocImage/mahong/mahong1/00_c645dfaf9e7246978c59ae4e9bdaf514_large.png',
        'Lilybyred',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '169000',
        '238000', [], []
    )
)
array.push(
        new Product(
            'make-up-5',
            'face-make-up',
            'ma-hong',
            'Phấn má hồng Sivanna Mini Bowknot Blusher',
            './images/hocImage/mahong/mahong1/phan_ma_hong_sivanna_mini_bowknot_blusher_17dba65ad03641f38ba7d02474e7c7bd_large.png',
            'Sivanna',
            'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
            '78000',
            '120000', [], []
        )
    )
    //tao-khoi-highlighter
array.push(
        new Product(
            'make-up-5',
            'face-make-up',
            'tao-khoi-highlighter',
            'Phấn tạo khối Black Rouge Up and Down Triple Contouring',
            './images/hocImage/taokhoi/taokhoi1/phan_tao_khoi_black_rouge_up_and_down_triple_contouring_c259f93976c64cb9a8fcc458e97de32b_large.png',
            'Black Rouge',
            'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
            '168000',
            '220000', [], []
        )
    )
    //xit-khoang-nen
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'xit-khoang-nen',
        'Xịt dưỡng da Klairs Fundamental Ampule Mist 125ml',
        './images/hocImage/xitkhoan/xitkhoan1/xit_duong_da_klairs_fundamental_ampule_mist_125ml_640f770f52bf42febfb18c833f2d4ee3_large.png',
        'Klairs',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '379000',
        '560000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'xit-khoang-nen',
        'Xịt Khoáng Cấp Nước Dưỡng Ẩm Eau Thermale Jonzac Thermal Spring Water',
        './images/hocImage/xitkhoan/xitkhoan1/xit_khoang_cap_nuoc_duong_am_eau_thermale_jonzac_thermal_spring_water_cb17c3061d59405c83f2d54140f5763b_large.png',
        'Jonzac',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '315000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'xit-khoang-nen',
        'Xịt khoáng dưỡng da Vichy Eau Thermale Mineralisante',
        './images/hocImage/xitkhoan/xitkhoan1/xit_khoang_duong_da_vichy_eau_thermale_mineralisante_ecb696fb645a4649a2b85c3d31e981e3_large.png',
        'Vichy',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '130000',
        '170000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'xit-khoang-nen',
        'Xịt khoáng Evoluderm',
        './images/hocImage/xitkhoan/xitkhoan1/xit_khoang_evoluderm_04c2914c896d453aa87c1d7c056b232b_large.png',
        'Evoluderm',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '95000',
        '150000', [], []
    )
)
array.push(
        new Product(
            'make-up-5',
            'face-make-up',
            'xit-khoang-nen',
            'Xịt khoáng La Roche-Posay Thermal Spring Water Sensitive Skin (Chai trắng)',
            './images/hocImage/xitkhoan/xitkhoan1/xit_khoang_la_roche-posay_498b40e15c6b406f896bfedf188bc0f5_large.png',
            'La Roche-Posay',
            'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
            '225000',
            '260000', [], []
        )
    )
    //son-moi
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem Black Rouge Air Fit Velvet Tint',
        './images/hocImage/sonmoi/sonmoi1/son_kem_black_rouge_air_fit_velvet_tint_7d9a8eeac20046bcae29a92b2fb9a436_large.png',
        'Black Rouge',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '180000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem Black Rouge Air Fit Velvet Tint',
        './images/hocImage/sonmoi/sonmoi1/son_kem_black_rouge_air_fit_velvet_tint_7d9a8eeac20046bcae29a92b2fb9a436_large.png',
        'Black Rouge',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '180000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Black Rouge Half N Half Collection',
        './images/hocImage/sonmoi/sonmoi1/son_kem_black_rouge_half_n_half_collection_71703493aafb4e76b32a6ba8c8523d53_large.png',
        'Black Rouge',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '125000',
        '200000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        '[HOT- CÓ SẴN] Son Kem Lì Merzy The Heritage Velvet Tint',
        './images/hocImage/sonmoi/sonmoi1/son_kem_li_merzy_the_heritage_velvet_tint_fa1257665ee441e98f296390c650bd3b_large.png',
        'Merzy',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '165000',
        '249000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem Bbia Last Velvet Lip Tint Ver 1 - Ver 5',
        './images/hocImage/sonmoi/sonmoi1/kem-bbia_96a9520ef53e4fa7bb58fe27aa1429a0_large.png',
        'Bbia',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '240000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì Romand Milk Tea Velvet Tint',
        './images/hocImage/sonmoi/sonmoi1/milktea_romand1_8f7ac1af6a88469ba0c084558bc08ecb_large.jpg',
        'Romand',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '200000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son thỏi Romand Zero Matte',
        './images/hocImage/sonmoi/sonmoi1/roman11_a09df779d43643779ab0bb8c516da4e0_large.jpg',
        'Romand',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '155000',
        '450000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        '[LIMITED] Son Kem Lì Peripera Ink Velvet 2021',
        './images/hocImage/sonmoi/sonmoi1/03_9c0679dfa61046efbec866a7ae6308da_large.png',
        'Peripera',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '179000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Merzy The First Velvet Tint Season 3 (Vỏ Đỏ)',
        './images/hocImage/sonmoi/sonmoi1/son_kem_merzy_mellow_tint__vo_do__dc827a6f6586445ebe8d23d211d21a4c_large.png',
        'Merzy',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '159000',
        '220000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Romand See Through Matte Tint (Hanbok)',
        './images/hocImage/sonmoi/sonmoi1/roman__690f1213448a44a1b2a0758850b1e796_large.jpg',
        'Romand',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '159000',
        '190000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem 3CE Cloud Lip Tint',
        './images/hocImage/sonmoi/sonmoi1/son_3ce_cloud_lip_tint_6a8af9f7f95a4d73bc5cefc07873ba79_large.png',
        '3CE',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '219000',
        '350000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Tint Lì Romand Juicy Lasting Tint',
        './images/hocImage/sonmoi/sonmoi1/roman-juicy-4_94adfe9f88ae4967baccc47027c17355_large.jpg',
        'Romand',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '200000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì Merzy Another Me Bite The Beat Mellow Tint (Vỏ City tím)',
        './images/hocImage/sonmoi/sonmoi2/merzy-votim.jpg_02bfbc2275e441d4812e52e6bcb3db82_large.png',
        'Merzy',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '180000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì Romand Zero Velvet Tint',
        './images/hocImage/sonmoi/sonmoi2/203_1_271a13909a5b4cef854ed8192351de76_large.png',
        'Romand',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '260000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son dưỡng Byphasse Baume SPF30',
        './images/hocImage/sonmoi/sonmoi2/71_1_0ef11006cc74430ba957a387be370225_large.png',
        'Byphasse',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '45000',
        '55000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem G9Skin First V-Fit Velvet Tint',
        './images/hocImage/sonmoi/sonmoi2/g9skin-firrst_27455a55b97c4c50957592ab8522a623_large.jpg',
        'G9Skin',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '138000',
        '149000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son thỏi G9 Skin First V-Fit Lipstick',
        './images/hocImage/sonmoi/sonmoi2/0af906f4a2f57b826e24304ba589487d_dd0d39b9aa504189b8d45b36f55798c7_large.jpeg',
        'G9 Skin',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '135000',
        '160000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì 3CE Velvet Lip Tint',
        './images/hocImage/sonmoi/sonmoi2/son_3ce_velvet_a3cd5373fe834168a7f8f023d699f178_large.png',
        '3CE',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '219000',
        '319000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Thỏi 3CE Matte Lip Color',
        './images/hocImage/sonmoi/sonmoi2/3ce-vo-vang-4_9fd94a56e02f47edb192d83a7303970c_large.jpg',
        '3CE',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '269000',
        '450000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Tint Merzy Aurora Dewy Tint',
        './images/hocImage/sonmoi/sonmoi2/son_merzy_aurora_dewy_eebb55fb819840a79b58499624537878_large.png',
        'Merzy',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '109000',
        '200000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Romand Glasting Water Tint (Hanbok)',
        './images/hocImage/sonmoi/sonmoi2/e8342e09bbb846172ef10fcda3d1578b_bc9a2d77d63d4dfbb1264d6f0989e118_large.jpg',
        'Romand',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '195000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem 3CE Flash Lip Tint',
        './images/hocImage/sonmoi/sonmoi2/3ce-flash_f9df632bd9874dce84c2a57648c42368_large.jpeg',
        '3CE ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '219000',
        '350000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Siêu Lì, Mịn Môi Black Rouge Cream Matt Rouge',
        './images/hocImage/sonmoi/sonmoi2/black-rouge-crem-matt_913ced08cf974ff99bcb4c2b4ef16284_large.jpg',
        'Black Rouge',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '89000',
        '170000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son dưỡng đa năng I\'m Meme Pep!Balm',
        './images/hocImage/sonmoi/sonmoi2/meme_93a0a87744b74afda760e0441550d4f3_large.jpg',
        ' I\'m Meme',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '110000',
        '170000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Romand Glasting Water Tint',
        './images/hocImage/sonmoi/sonmoi3/romand-glasting-7_f62ac7451bc449e8a568e4c98aee4071_large.jpg',
        'Romand',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '200000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem Lemonade Perfect Couple Lip Fashionista',
        './images/hocImage/sonmoi/sonmoi3/son-kem-lemonade-perfect-couple-lip-fashionista_23c79b80ad56405c8e1fb688a62a9736_large.jpg',
        'Lemonade',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '229000',
        '299000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem 3CE Blurring Liquid Lip',
        './images/hocImage/sonmoi/sonmoi3/3ce-blurrring-10.jpg_b51b525771154d3a8921c6a1500c222e_large.png',
        '3CE',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '219000',
        '350000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì Merzy Another Me Bite The Beat Mellow Tint (limited she is',
        './images/hocImage/sonmoi/sonmoi3/merzy-mellow-tint-4_c3ef204a316d4aaeb48c245c15de834b_large.jpg',
        'Merzy',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '180000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Colourpop Lippie Stix',
        './images/hocImage/sonmoi/sonmoi3/son-colourpop-lippie-stix__1__a92244095586469383e2d0ff8bbd35cd_large.jpg',
        'Colourpop',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '169000',
        '209000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Môi Thỏi Mac Matte Lipstick Rouge',
        './images/hocImage/sonmoi/sonmoi3/589_bb71485c8e0e40309713f8a25b25c6c7_large.png',
        'MAC',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '390000',
        '495000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son thỏi YSL Rouge Pur Couture (Limited Edition)',
        './images/hocImage/sonmoi/sonmoi3/7c244af452faa1a4f8eb_d1c84bf5d2524f29be98e78d67de6795_large.jpg',
        ' Yve Saint Laurent',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '580000',
        '750000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì 3CE Soft Lip Lacquer',
        './images/hocImage/sonmoi/sonmoi3/3ce-soft-3_7f76315af31c47a88930f44751e44271_large.jpg',
        '3CE',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '219000',
        '350000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son thỏi Colourpop Lux Lipstick',
        './images/hocImage/sonmoi/sonmoi3/son-thoi-colourpop-lux-lipstick__1__79b9844236a04f1cae5e4007d85c64a5_large.jpg',
        'Colourpop',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '195000',
        '265000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Colourpop Lux Velvet Liquid Lipstick',
        './images/hocImage/sonmoi/sonmoi3/48_1_80c55f5b30a34fbcbfb71428d9ff97b5_large.png',
        'Colourpop',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '195000',
        '265000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Gió Mỹ MOODmatcher Fran Wilson',
        './images/hocImage/sonmoi/sonmoi3/78_1_746f6ba9155740dcb9b33d99d41e3a82_large.png',
        'Moodmatcher',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '62000',
        '98000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì Merzy Another Me Bite The Beat Mellow Tint (vỏ đen dỏ)',
        './images/hocImage/sonmoi/sonmoi3/son_kem_merzy_mellow_tint__vo_den_do__7b29c65966764ce0a53d70c9c51d74f4_large.png',
        'Merzy',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '179000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Môi Clio Melting Matte Lips',
        './images/hocImage/sonmoi/sonmoi4/234_1_529c314b70ab457a969c740e26a36713_large.png',
        'Clio',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '109000',
        '199000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Unleashia Non-Sticky Dazzle Tint',
        './images/hocImage/sonmoi/sonmoi4/unleashia-1_76179a1280b0473da7e51e7c43a84256_large.jpg',
        'Unleashia',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '195000',
        '250000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem Loreal Rouge Signature',
        './images/hocImage/sonmoi/sonmoi4/loreal_cf53d9d908ac4a49946e5e81c47da963_large.png',
        'L\'Oreal Paris',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '249000',
        '270000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Thỏi BBia Last Powder Lipstick',
        './images/hocImage/sonmoi/sonmoi4/bbia-power_e1820d680751486b919d91b36d1a5228_large.jpg',
        'Bbia',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '169000',
        '190000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem Gilaa Long Wear Lip Cream',
        './images/hocImage/sonmoi/sonmoi4/9634718de5aac7bda13cc8f5a30eb11a_c5d1ba971ddd4bb580a77209bd9b5aa5_large.jpeg',
        'Gilaa',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '165000',
        '250000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son thỏi Nars Lipstick',
        './images/hocImage/sonmoi/sonmoi4/chung_310d46594a45440280e1f41c04dac137_large.jpg',
        'Nars',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '599000',
        '800000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Shu Uemura Rouge Unlimited Superme Matte',
        './images/hocImage/sonmoi/sonmoi4/d9a761d37add8983d0cc_3f9f2617c40c43d3bb2d2857d5e0bb06_large.jpg',
        'Shu Uemura',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '599000',
        '800000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son thỏi Clio Mad Mattle Stain Lips',
        './images/hocImage/sonmoi/sonmoi4/498002e21aece9b2b0fd_e17f97da2a1b4fb48ad5027335cef232_large.jpg',
        'Clio',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '138000',
        '210000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem Lemonade Super Natural Matte Lipcream',
        './images/hocImage/sonmoi/sonmoi4/lemonade-3_b564b30dfc70455caf0b2bcec505193c_large.jpg',
        'Lemonade ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '189000',
        '249000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì Dearmay Breeze Velvet Lip Tint',
        './images/hocImage/sonmoi/sonmoi4/dearmay_63604b2d9fc84663844930ba668a0345_large.jpg',
        'Dearmay',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '145000',
        '170000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Tint Romand Glasting Water Gloss',
        './images/hocImage/sonmoi/sonmoi4/romand-glasting-water-gloss-6_fd2fcf3224674af0bd93c3285789ebfc_large.jpg',
        'Romand',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '136000',
        '200000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì Mịn A. Black Artistic Velvet Tint',
        './images/hocImage/sonmoi/sonmoi4/son-a-black-3_eef7ec85090b4dba8984aaec7fdb1a49_large.jpg',
        ' A.Black',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '210000', [], []
    )
)
array.push(
        new Product(
            'make-up-5',
            'moi',
            'son-moi',
            'Son Hansmile Mystic Lipstick (Mua 1 cây, tặng 1 cây)',
            './images/hocImage/sonmoi/sonmoi5/son-hansmile-17-png_650d0dd75ee24533af23cebe3e27b4f1_large.jpg',
            'Hansmile',
            'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
            '390000',
            '450000', [], []
        )
    )
    //son-duong
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Dưỡng môi Mediheal Labocare Pantenolips',
        './images/hocImage/sonduong/sonduong1/medi__59a4f03692b849ed8e2ce7a145e8e662_large.jpg',
        'Mediheal',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '65000',
        '110000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng Byphasse Baume SPF30',
        './images/hocImage/sonduong/sonduong1/71_1_0ef11006cc74430ba957a387be370225_large.png',
        'Byphasse',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '45000',
        '55000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng đa năng I\'m Meme Pep!Balm',
        './images/hocImage/sonduong/sonduong1/meme_93a0a87744b74afda760e0441550d4f3_large.jpg',
        ' I\'m Meme',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '110000',
        '110000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng Dior Lip Maximizer Collagen Activ (Minisize 2ml)',
        './images/hocImage/sonduong/sonduong1/dior_29becf6e1597463895e45dc3031121eb_large.jpg',
        'Dior',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '179000',
        '250000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son Dưỡng Đổi Màu YNM Rainbow Honey Lip Balm (vàng)',
        './images/hocImage/sonduong/sonduong1/rainbow__e980ee30abee4963ba24c9b6c05f396e_large.jpg',
        'YNM',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '105000',
        '150000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng Innisfree Glow Tint',
        './images/hocImage/sonduong/sonduong1/sonduong-innisfree-3.jpg_22deb8ea18be4fa9ae61dac01d2b984c_large.png',
        'Innisfree',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '99000',
        '139000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng Maybelline Baby Lips',
        './images/hocImage/sonduong/sonduong1/baby-maybe2_b15fb507f8ec46aca0583387cc2ee09c_large.jpg',
        'Maybelline',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '65000',
        '95000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng môi Bioderma Atoderm Lèvres Stick Hydratantue',
        './images/hocImage/sonduong/sonduong1/sonduong-bioi.jpg_1205ced280404061a0bbbe84256b3428_large.png',
        'Bioderma',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '45000',
        '80000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng môi Caudalie Lip Conditioner',
        './images/hocImage/sonduong/sonduong1/caudalie1_d7f8add6e49348a5a198571bf7777355_large.jpg',
        'Caudalie',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '85000',
        '120000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son Dưỡng Môi Có Nhũ Unleashia Glittery Wave Lip Balm',
        './images/hocImage/sonduong/sonduong1/581_1_0a84595688f140dba400551b2440c35f_large.png',
        'Unleashia ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '195000',
        '210000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng môi dầu dừa Bến Tre the cocoon 5g',
        './images/hocImage/sonduong/sonduong1/1_56b1e0bd7c0f4feb9f2db4ad5c2c8953_large.jpg',
        'Cocoon',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '29000',
        '32000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng môi dừa thiên nhiên Sense Plus Coco Balmie',
        './images/hocImage/sonduong/sonduong1/son_duong_moi_dua_thien_nhien_sense_plus_coco_balmie__3.5g_0_ccf735c622a94021a0eda1501f9098dd_large.jpg',
        ' Sense Plus',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '75000',
        '89000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son Dưỡng Môi Givenchy Le Rouge Perfecto (Mini 1.2g)',
        './images/hocImage/sonduong/sonduong2/524_1_9dabe5763794426393eff375225a8887_large.png',
        'Givenchy',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '238000',
        '250000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng môi Nuxe Rêve de miel - lip moisturizing stick',
        './images/hocImage/sonduong/sonduong2/nuxe1_17808f51f7994487befcf900119026ac_large.jpg',
        'Nuxe Rêve de miel',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '88000',
        '130000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng môi tinh chất dừa Sense Plus Naked Kiss Balm',
        './images/hocImage/sonduong/sonduong2/son_duong_moi_tinh_chat_dua_sense_plus_naked_kiss_balm__5g__f0c8d98354ae4154882607a0136d8e37_large.jpg',
        'Sense Plus ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '65000',
        '75000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son Dưỡng Môi Vaseline Lip Therapy',
        './images/hocImage/sonduong/sonduong2/sonduong-vaseline_316b2674e2044a1981234a41d5702320_large.jpeg',
        'Vaseline',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '42000',
        '70000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son Dưỡng Omi Brotherhood Menturm Medicated Stick',
        './images/hocImage/sonduong/sonduong2/omi3_f9c54807c9b549a8903137504c00840a_large.jpg',
        ' Omi BrotherHood',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '28000',
        '40000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son Dưỡng YNM Honey Lip Balm',
        './images/hocImage/sonduong/sonduong2/sd-ynm_10b4c0d2db774ed2aa7068e601dafb74_large.jpg',
        'YNM ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '122000',
        '150000', [], []
    )
)
array.push(
        new Product(
            'make-up-5',
            'moi',
            'son-duong',
            'Son lót dưỡng Lemonade Lip Filler',
            './images/hocImage/sonduong/sonduong2/son-filler-4_63eee52e197741aeb43be9ad475b64e6_large.jpg',
            'Lemonade',
            'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
            '119000',
            '159000', [], []
        )
    )
    //mat-na-moi
array.push(
    new Product(
        'make-up-5',
        'moi',
        'mat-na-moi',
        'Mặt nạ môi dưỡng ẩm Sense Plus Hydrating Lip Mask',
        './images/hocImage/matnamoi/matnamoi1/matnamoi-sense.jpg_043e85d1c9184233ae090ff6af3c3142_large.png',
        'Sense Plus',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '15000',
        '17000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'mat-na-moi',
        'Mặt nạ ngủ môi Care:nel Lip Sleeping Mask',
        './images/hocImage/matnamoi/matnamoi1/matnamoi-care2_02a0b7fecdee4078bef709742e22ade3_large.jpg',
        'Care:nel',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '55000',
        '75000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'mat-na-moi',
        'Mặt Nạ Ngủ Môi Laneige Lip Sleeping Mask',
        './images/hocImage/matnamoi/matnamoi1/mat-na-ngu-moi-laneige-lip-sleeping-mask__1__666372ca11794bfd824c30a8d6625937_large.png',
        'Laneige ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '49000',
        '75000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'tay-te-bao-chet-moi',
        'Tẩy tế bào chết môi Beauty Treats Lip Scrub',
        './images/hocImage/taytebaochetmoi/taytebaochetmoi1/taytebaochetmoi_993cb6fb69d244b288238fe9b3b4319b_large.jpg',
        'Sense Plus',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '42000',
        '60000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'tay-te-bao-chet-moi',
        'Tẩy tế bào chết môi Cocoon cà phê Đắk Lắk',
        './images/hocImage/taytebaochetmoi/taytebaochetmoi1/321_1_c49d03174f17429dac512ab9d051cdad_large.png',
        'Care:nel',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '55000',
        '75000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'tay-te-bao-chet-moi',
        'Tẩy Tế Bào Chết Môi Unpa Bubi Bubi Bubble Lip Scrub',
        './images/hocImage/taytebaochetmoi/taytebaochetmoi1/3_74543bd153d64ee4b4326c1c2f7303c8_large.jpg',
        'Laneige ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '49000',
        '75000', [], []
    )
)

//mat
//eyeliner-ke-mat
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Bút Kẻ Mắt Dạng Gel Lilybyred Starry Eyes Am9 To Pm9 Gel Eyeliner',
        './images/hocImage/kemat/kemat1/00_893161eff9e64231bf0dbcfefb762c43_large.png',
        'Lilybyred',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '169000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Bút Kẻ Mắt Nước Siêu Mảnh Lilybyred am9 to pm9 Survival Pen Liner',
        './images/hocImage/kemat/kemat1/ke.pen.00_8fa92b57816b44b0b959255b10b8edf8_large.png',
        'Lilybyred',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '159000',
        '189000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Chì vặn kẻ mắt Vacosi Natural Studio Styling Twist Liner',
        './images/hocImage/kemat/kemat1/chi_ke_mat_6af45643bf9541fdbcf76d60074aa5bf_large.jpg',
        'Vacosi',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '79000',
        '120000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Gel kẻ mắt Tonymoly Backstage Gel Eyeliner',
        './images/hocImage/kemat/kemat1/tony-mat3_4f0ea7e5e0774b50ac1f7208098bba80_large.jpg',
        'Tonymoly',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '109000',
        '135000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt Black Rouge Power Proof Pen Liner',
        './images/hocImage/kemat/kemat1/ke-ma-t-black-rouge_88793f8859e84d52851d0dc698f2ea0e_large.jpg',
        'Black Rouge',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '140000',
        '160000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt Karadium Waterproof Brush Liner',
        './images/hocImage/kemat/kemat1/kematnuockaradium11nendepxinh_76a58666823b4698a7388b86c5a430a5_large.jpg',
        'Karadium',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '79000',
        '97000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt Merzy Pen Eyeliner',
        './images/hocImage/kemat/kemat1/ea08ba4e8e977ec92786_41af7a5d0d9d4ba8bc563b37b2385024_large.jpg',
        'Merzy',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '89000',
        '160000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt nhũ Black Rouge Pearlvely I Glitter',
        './images/hocImage/kemat/kemat1/nhu-ma-t-black-rouge-1_0e2a94ffb1154676982eda51d55909af_large.jpg',
        'Black Rouge',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '140000',
        '160000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt nhũ Black Rouge Pearlvely I Glitter Universe',
        './images/hocImage/kemat/kemat1/nhu-ma-t-black-rouge-1_0e2a94ffb1154676982eda51d55909af_large.jpg',
        ' Black Rouge',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '135000',
        '180000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ Mắt Nước Lâu Trôi Lemonade Supernatural Eyeliner Black',
        './images/hocImage/kemat/kemat1/00_9ec10532707949e790ad45731457affd_large.png',
        'Lemonade',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '199000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt nước Maybelline Hyper Sharp Power (màu đen)',
        './images/hocImage/kemat/kemat1/knm-maybe_11aa9c22596b4f59afb37bfac3f25d7e_large.jpg',
        'Maybelline',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '180000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt nước Merzy The Heritage Pen Eyeliner',
        './images/hocImage/kemat/kemat1/ke_mat_nuoc_merzy_the_heritage_pen_eyeliner_48c5c5010ebf4ba99b8a042f48df03f1_large.png',
        'Merzy',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '125000',
        '135000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ Mắt Nước Vacosi Waterproof Pen Eyeliner 24h',
        './images/hocImage/kemat/kemat2/161_ba808bc8f11b4d98851d5fedc0cf42da_large.png',
        'Vacosi',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '79000',
        '100000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt Powerproof Brush Liner Innisfree',
        './images/hocImage/kemat/kemat2/innisfree-power_016b29c4735f49ab84e6fad50989875f_large.jpg',
        'Innisfree ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '138000',
        '180000', [], []
    )
)
array.push(
        new Product(
            'make-up-5',
            'mat',
            'eyeliner-ke-mat',
            'Kẻ Mắt Vacosi Natural Studio Waterproof Eyeliner - VM24',
            './images/hocImage/kemat/kemat2/ke-mat-nuoc-vacosi-m24__1__921734429b8e40de802a47e3ea734657_large.jpg',
            'Vacosi',
            'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
            '85000',
            '115000', [], []
        )
    )
    //mascara
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Chì Kẻ Mày Và Mascara Chân Mày The Saem Eco Soul Brow Pencil & Mascara',
        './images/hocImage/mascara/mascara1/135_1_0155e897371a4feab5d5a70216e1583e_large.png',
        'The saem',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '115000',
        '149000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Chuốt Mi Black Rouge Perfect Lash Cara',
        './images/hocImage/mascara/mascara1/mascara-black-rouge-1_e4af543742a3498b880473e288e4688c_large.jpg',
        'Black Rouge',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '140000',
        '180000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Chuốt Mi Lemonade SuperNatural Mascara',
        './images/hocImage/mascara/mascara1/dc138b735fa6bb3632d0716659572f9c_a5535b45df2a46d6b2b81ce5b6b83e8b_large.jpg',
        'Lemonade ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '139000',
        '189000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Chuốt mi Missha Mascara The Style 4D (mẫu mới)',
        './images/hocImage/mascara/mascara1/224_1_a43b73276b8e409eaff7088df8801146_large.png',
        'Missha',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '49000',
        '80000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Lông mi giả Vacosi 4D Pro Eyelashes',
        './images/hocImage/mascara/mascara1/backround_sp_87b80f01e95a486fbeb109a05a3677fe_large.jpg',
        'Vacosi ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '53000',
        '80000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara Chân Mày Lilybyred Skinny Mes Brow Mascara',
        './images/hocImage/mascara/mascara1/1_a832cd1f149d41d890c4a9d136147bb1_large.png',
        'Lilybyred',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '150000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara Chuốt mi dày Karadium On the Top Fiber Mascara',
        './images/hocImage/mascara/mascara1/karadium-mascara_e8806484f715400a8454cb80a03ea5ee_large.jpg',
        'Karadium',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '110000',
        '150000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara Cong Mi Maybelline Hyper Curl',
        './images/hocImage/mascara/mascara1/mascara-maybelline-the-hyper-curl_8a97de436ad44d6d8a448ef79180a50b_large.jpg',
        'Maybelline',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '139000',
        '150000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara dày mi cực đại Maybelline New York Magnum Bigshot',
        './images/hocImage/mascara/mascara1/',
        'Maybelline',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '170000',
        '175000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara Dưỡng Mi Maybelline The Colossal Waterproof Mascara',
        './images/hocImage/mascara/mascara1/575_1_9a772bdf01b746aba0ee1dc94ac31e0d_large.png',
        'Khác',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '168000',
        '168000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara làm dày và dài mi Maybelline Falsies',
        './images/hocImage/mascara/mascara1/z2230369756961-cd8df748e756d9b2501878507aa9656e_664f7302a00542f09ff1e2c86d845760_large.jpg',
        'Maybelline ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '199000',
        '220000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara lông mày Innisfree Skinny Brow',
        './images/hocImage/mascara/mascara1/6a221dab8e1c5b39b188de9f6e788a7d_1f2009098cd24b40ab5d0332ea24acf5_large.jpg',
        'Innisfree ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '98000',
        '175000', [], []
    )
)
array.push(
        new Product(
            'make-up-5',
            'mat',
            'mascara',
            'Mascara Skinny Microcara Zero Innisfree',
            './images/hocImage/mascara/mascara2/6a221dab8e1c5b39b188de9f6e788a7d_11b8da51e42e4617826a524137bff22f_large.jpg',
            'Innisfree ',
            'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
            '149000',
            '189000', [], []
        )
    )
    //ke-may
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Bột Kẻ Chân Mày Innisfree Twotone Eyebrow Kit',
        './images/hocImage/kemay/kemay1/bo-t-ta-n-ma-y-innisfree-3_f2fdf63a98b34340a7f1b8f63e0e8adb_large.jpg',
        'Innisfree',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '118000',
        '140000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì kẻ mày 2 đầu Lemonade Want It Got It Dual Eyebrow',
        './images/hocImage/kemay/kemay1/6a74da7933b2c0ec99a3_236fb8e0a532414c860205b7ac950191_large.jpg',
        'Lemonade',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '199000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì kẻ mày 3 đầu Vacosi Dual Eyebrow Shape Pen',
        './images/hocImage/kemay/kemay1/chi-ke-may-3-dau-vacosi-dual-eyebrow-shape-pen-2_23d362d50aa64a9d817d131238f9fe40_large.jpg',
        'Vacosi',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '85000',
        '95000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì kẻ mày Black Rouge Brow Master',
        './images/hocImage/kemay/kemay1/6_3345fb3c4f274cf193176b6322941d75_large.png',
        'Black Rouge',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '115000',
        '158000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì kẻ mày Designing Eyebrow The Face Shop',
        './images/hocImage/kemay/kemay1/thefaceshopdesignmyeyebrow014_0f4f984a97964c7b9341468c7bcc6f2f_large.jpg',
        'The Face Shop',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '46000',
        '45000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì kẻ mày Innisfree Auto Eyebrow Pencil',
        './images/hocImage/kemay/kemay1/chi-ke-may-innisfree-auto-eyebrow-pencil__3__8196eaa5f4f241608cf747c8a6fa9bef_large.jpg',
        'Innisfree',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '52000',
        '78000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì kẻ mày nét mảnh Karadium Auto Eyebrow Pencil 0.18gr',
        './images/hocImage/kemay/kemay1/chung_784221eff3b94b4995f4af803ea71e6e_large.jpg',
        'Karadium',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '45000',
        '70000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì Kẻ Mày Ngang 2 Đầu The Saem Saemmul Artlook Eyebrow',
        './images/hocImage/kemay/kemay1/288_1_2d3796ac1b6e43e4b19896ed4c8ae341_large.png',
        ' The saem',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '89000',
        '89000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì Kẻ Mày Và Mascara Chân Mày The Saem Eco Soul Brow Pencil & Mascara',
        './images/hocImage/kemay/kemay1/135_1_0155e897371a4feab5d5a70216e1583e_large.png',
        'The saem',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '115000',
        '149000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì xé kẻ mày Cosmetic Art',
        './images/hocImage/kemay/kemay1/47b108e471ce7729e6ba377cac256968_fce441a48a6540469fa39b32580f522c_large.jpg',
        'Cỏ Cosmetics',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '10000',
        '15000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Dao cạo tỉa lông mày Nalamei',
        './images/hocImage/kemay/kemay1/dao-nalamei__1__8678d95f54e247bb8fc04ba33c1f6377_large.jpg',
        'Nalamei ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '12000',
        '25000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Dao cạo tỉa lông mày Vacosi Eyebrow Knife',
        './images/hocImage/kemay/kemay1/dao-cao-tia-long-may-vacosi-eyebrow-knife-dc06-1_e0931b48f2a34451b855870d73d9b3df_large.jpg',
        'Vacosi',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '35000',
        '49000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Kẻ Mày Dạng Xăm Vacosi Realbrow Tattoo Pen',
        './images/hocImage/kemay/kemay2/vacosirealbrowtattoopen_731e5273ce3b4f2d9c8fab172d1e22b2_large.jpg',
        'Vacosi',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '79000',
        '79000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Mascara Chân Mày Lilybyred Skinny Mes Brow Mascarae',
        './images/hocImage/kemay/kemay2/1_a832cd1f149d41d890c4a9d136147bb1_large.png',
        'Lilybyred',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '150000', [], []
    )
)
array.push(
        new Product(
            'make-up-5',
            'mat',
            'ke-may',
            'Mascara lông mày Innisfree Skinny Brow',
            './images/hocImage/kemay/kemay2/6a221dab8e1c5b39b188de9f6e788a7d_1f2009098cd24b40ab5d0332ea24acf5_large.jpg',
            'Innisfree',
            'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
            '98000',
            '175000', [], []
        )
    )
    //phan-mat
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Bảng Phấn Mắt Clio Prism Air Eye Palette',
        './images/hocImage/phanmat/phanmat1/clio.jpg_93af29a90bae40b5b0fe8c2b15eaca07_large.png',
        'Clio',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '265000',
        '368000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Bảng phấn mắt COLOURPOP',
        './images/hocImage/phanmat/phanmat1/baby-got_74d905f0df3f47978fc7cccae427b7a7_large.jpg',
        'CoulorPop ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '325000',
        '560000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Cọ mút tán phấn mắt Vacosi',
        './images/hocImage/phanmat/phanmat1/cm_375605cc5b4a4305a28b909b4ea74f5d_large.jpg',
        'Vacosi',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '4000',
        '5000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Phấn Mắt Black Rouge Crystal Heart Lock Shadow',
        './images/hocImage/phanmat/phanmat1/pha-n-ma-t-black-rouge-4.-1_4266e8608d6747e986732ef3cf5e6675_large.jpg',
        'Black Rouge',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '175000',
        '180000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Phấn mắt Dikalu 40 ô màu',
        './images/hocImage/phanmat/phanmat1/dikalu_f584c11033c44132a69f69e3e1cdb148_large.jpg',
        'Dikalu',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '95000',
        '145000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Phấn Mắt Etude House Play Color Eyes',
        './images/hocImage/phanmat/phanmat1/pha-n-ma-t-etude-cherry-blossom_d2f571e0de384b19a9eed26de31b7466_large.jpg',
        'Etude House',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        'Liên hệ',
        'Liên hệ', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Phấn Mắt Merzy The Heritage Shadow Palette',
        './images/hocImage/phanmat/phanmat1/phan_mat_merzy_the_heritage_shadow_palette_63420aa30379495d90ddb29f0889481d_large.png',
        'Merzy ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '225000',
        '299000', [], []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Phấn Mắt Nhũ 5 Ô Sivanna Colors Peach Pro Eyeshadow HF6031',
        './images/hocImage/phanmat/phanmat1/484_1_0f59cf44153b43cfa63e545d62ac9509_large.png',
        'Sivanna',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '82000',
        '120000', [], []
    )
)
array.push(
        new Product(
            'make-up-5',
            'mat',
            'phan-mat',
            'Set Phấn Mắt - Má Hồng - Tạo Khối Sivanna Hello Perfect',
            './images/hocImage/phanmat/phanmat1/0e638d331799820642649f7833be5c3d_bbfffe2159af4d279909479406744e39_large.jpg',
            'Sivanna ',
            'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
            '95000',
            '150000', [], []
        )
    )
    //cham-soc-da
    //duong-da
    //essence-serum-ampole
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'CC Serum trắng da Senka White Beauty Serum in CC 40gr',
        './images/hocImage/serum/serum1/12_bddadf7079d94cc880770e21c4f93c86_large.png',
        'Senka',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '179000',
        '205000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Gel chấm mụn Tea Tree Blemish Gel',
        './images/hocImage/serum/serum1/teatree3_987f65cb45914eb6aa48a3b23f573678_large.jpg',
        'The Body Shop',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '159000',
        '185000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Huyết thanh Dưỡng da MediskinbyC GLUTATHIONE C+ Ampoule 2X',
        './images/hocImage/serum/serum1/huyethanhdd_-mediskinbyc-1_222c6ef2779348b487f87f65b759a7bf_large.jpg',
        'MediskinbyC',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '340000',
        '550000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Huyết thanh dưỡng trắng chống lão hóa Mediskinbyc Idebenone C +Ampoule 2X',
        './images/hocImage/serum/serum1/huyetthanhchonglaohoa-mediakibyc_e99722ac00764503979f66b6d5d592be_large.jpg',
        'MediskinbyC',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '340000',
        '618000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Huyết Thanh Trắng Da Angel’s Liquid Glutathion 7Day Whitening Program 700V Ampoule',
        './images/hocImage/serum/serum1/huyetthanh-angel-7day-4_0913475e67814991ba4a88fc3640d3c4_large.jpg',
        'Angel\'s Liquid ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '419000',
        '500000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Huyết Thanh Trị Nám Trắng Da Angel\'s Liquid Glutathione + Niacinamide 700 V-ampoule',
        './images/hocImage/serum/serum1/huyetthanh-angel-7day-niacin-3_e81977f8f54448be97fec6648f5b42e5_large.jpg',
        'Angel\'s Liquid',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '439000',
        '500000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Kem giảm mụn, chống lão hóa A313 Pommade',
        './images/hocImage/serum/serum1/kemgiammuna313_d04c870744c64de69c6369846f428885_large.jpg',
        'Pharma Developpement',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '220000',
        '380000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Kem ngăn ngừa mụn và mờ thâm Jonzac Pure Anti - Imperfection',
        './images/hocImage/serum/serum1/jonzac1_8b7049967ed14288afa124109c8b0cc5_large.jpg',
        'Eau Thermale',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '195000',
        '588000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Kem trị mụn đỏ Ciracle Red Spot Cream',
        './images/hocImage/serum/serum1/c.redmun_c1d5c044de8f420f8ac90b46179ba2ca_large.jpg',
        'Ciracle ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '195000',
        '250000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Kem Trị Mụn Phục Hồi Da Medi-Peel Centella Mezzo Cream',
        './images/hocImage/serum/serum1/399_1_aa5a518cf3bd4479bbdbab83930c0e09_large.png',
        'Medi-Peel',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '215000',
        '275000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Kem trị mụn SVR Sebiaclear Active',
        './images/hocImage/serum/serum1/kem_tri_mun_svr_sebiaclear_active_f181b2ca8a724336abd1fda7514b35b8_large.png',
        'SVR',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '399000',
        '450000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Kem trị sẹo Gentacin Nhật Bản',
        './images/hocImage/serum/serum1/gentacin-1_f25e8cc68afe4b37aedcd74a2644b123_large.jpg',
        'Gentacin',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '55000',
        '70000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Peel da không bong tróc Red Peel Tingle Serum',
        './images/hocImage/serum/serum2/peel_da__red_peel_tingle_serum_723664823c754fd8a749554f322bf308_large.png',
        'So Natural',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '310000',
        '600000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Peel da không bong tróc Red Peel Tingle Serum (gói sample 2.5ml)',
        './images/hocImage/serum/serum2/sr-red_45fe100f84254438b9ce60d38d9ade38_large.jpg',
        'So Natural',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '30000',
        '40000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Sample tinh chất The Green Tea Seed Serum Innisfree',
        './images/hocImage/serum/serum2/sample_tinh_chat_the_green_tea_seed_serum_innisfree_bbf51e70b0f341c1a0922b60f3f828b6_large (1).png',
        'Innisfree',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '6000',
        '8000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Sample Trị mụn Bija Cica Balm EX Innisfree (tuýp 7ml)',
        './images/hocImage/serum/serum2/bija3_fe668fd01f96432cbdf97d994559da20_large.jpg',
        'Innisfree',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '32000',
        '60000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum cấp ẩm, phục hồi da The Ordinary Hyaluronic Acid 2% + B5',
        './images/hocImage/serum/serum2/tinhchat-b5_bdf7f62f676d4406829c7e23dadbb6ed_large.jpg',
        'The Ordinary',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '209000',
        '300000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum dưỡng da D Program Thermo Defense 40ml',
        './images/hocImage/serum/serum2/serumd.jpg1_b255a9f9e02c4a5b8e7cfeeddfff5925_large.jpg',
        'd program',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '529000',
        '690000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum dưỡng da dành cho nam MdoC Sebum Strike Serum',
        './images/hocImage/serum/serum2/srdd_e10b8049bf5842e09fb2a297ae93d7f1_large.jpg',
        'MdoC',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '499000',
        '669000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum Dưỡng Da Mắt The Ordinary Caffeine Solution 5% + EGCG',
        './images/hocImage/serum/serum2/caffeine_3f01828f962142f39ad05f6d8f89d27d_large.jpg',
        'The Ordinary ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '209000',
        '280000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum dưỡng da Vichy Mineral 89 (Tặng kèm Serum Mineral 89 10ml)',
        './images/hocImage/serum/serum2/sr-dd2_d54aef54c3f74ff493ed2a8c1d1cd0ff_large.jpg',
        'Vichy ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '799000',
        '1010000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum dưỡng da Vitamin C Melano CC',
        './images/hocImage/serum/serum2/vitaminc_fcab8070f5904540b6a3189698f48bc8_large.jpg',
        'Rohto',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '239000',
        '320000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum dưỡng tái tạo da Collagen Luxury Gold 3W Clinic',
        './images/hocImage/serum/serum2/serum-3w-clinic_d629c3b56715498d81e511f059de2a61_large.jpg',
        ' 3W Clinic',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '135000',
        '200000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum dưỡng trắng da Senka White Beauty 35g',
        './images/hocImage/serum/serum2/14_3a8a4a97b0ce4d2da3a281b9d36e4a40_large.png',
        'Senka',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '229000',
        '360000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum dưỡng trắng da Skin1004 Madagascar Centella Hyalu-cica Blue 50ml',
        './images/hocImage/serum/serum3/chung_57b9e1e77cc44b498193e903a559a69a_large.jpg',
        'Skin1004 ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '329000',
        '490000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum Lựu Innisfree Jeju Pomegranate 50ml',
        './images/hocImage/serum/serum3/208_1_d9f3a2be99d8447b9719222db67cffc3_large.png',
        'Innisfree',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '410000',
        '509000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum phục hồi tóc Cocoon Sa-chi 70ml',
        './images/hocImage/serum/serum3/32_f1a22328950b4d3b8b3c31539ea9ce17_large.png',
        'Cocoon',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '112000',
        '150000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum sáng da trị thâm The Ordinary Lactic Acid 10% + HA',
        './images/hocImage/serum/serum3/lactic-acid_c7721efe4b6a4f0a9cdd5b32fe20805c_large.jpg',
        'The Ordinary',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '209000',
        '260000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum sáng da trị thâm The Ordinary Lactic Acid 5% + HA',
        './images/hocImage/serum/serum3/latic-5_b8194b513498470a86c457ff29f78808_large.jpg',
        'The Ordinary',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '209000',
        '260000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Siêu huyết thanh xóa mụn Derladie Herbal Ampoule for Blemish',
        './images/hocImage/serum/serum3/huyet-thanh-derladie-tri-mun_e60a2f760beb4086932387d2d909e131_large.jpg',
        'Derladie',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '399000',
        '630000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'The Ordinary Niacinamide 10% + Zinc 1%',
        './images/hocImage/serum/serum3/buffetserum_f9f2a974634e45de8db283a45de830b8_large.jpg',
        'The Ordinary',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '185000',
        '250000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Tinh chất 9 Wishes Ampule Serum 25ml',
        './images/hocImage/serum/serum3/tinh_chat_9_wishes_ampule_serum_25ml_4c289b48569741aa958d0b5a30c38a38_large.png',
        '9 WISHES',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '175000',
        '290000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Tinh Chất Balance Active Formula Snake Venom Wrinkle-Freeze Serum 30ml',
        './images/hocImage/serum/serum3/t_noc_ran_balance_active_formula_snake_venom_wrinkle-freeze_serum_30ml_2e286323b0c84d2b8d71df17bef5eb96_large.png',
        'Balance Active Formula',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '139000',
        '220000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Tinh chất Balance Hyaluronic Deep Moisture Serum Intense Hydration',
        './images/hocImage/serum/serum3/tc-balance_48d0745a4cd640ac9ca8bd68823fc4ac_large.jpg',
        'Balance',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '139000',
        '290000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Tinh chất bí đao The Cocoon Winter Melon Serum 70ml',
        './images/hocImage/serum/serum3/tinh_chat_bi_dao_a7fbe1cd04bd4ad485aaee2774014142_large.jpg',
        'Cocoon ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '239000',
        '2390000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Tinh chất chống lão hoá The Ordinary Buffet Multi-Technology Peptide Serum',
        './images/hocImage/serum/serum3/202_1_dff86de2c2ee4a5989647ae5ba0ae50f_large.png',
        'The Ordinary',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '415000',
        '550000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Viên Uống Trắng Da Angel’s Liquid Glutathione',
        './images/hocImage/serum/serum7/vienuongtrangda_c448872abfcf4cd88b01dec26c889eb6_large.jpg',
        'Angel\'s Liquid',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '318000',
        '400000', [], []
    )
)
array.push(
        new Product(
            'cham-soc-da',
            'duong-da',
            'essence-serum-ampole',
            'Xịt giảm mụn lưng Angel\'s Liquid Body Mist',
            './images/hocImage/serum/serum7/xit-mun-lung-angel_808d7c3d45c04652bf847e4f05a57eb7_large.jpg',
            'Angel\'s Liquid',
            'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
            '409000',
            '725000', [], []
        )
    )
    //duong-vung-mat
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Dưỡng mắt Gold Collagen Rejuvenating Eye Serum Balance',
        './images/hocImage/duongmat/duongmat1/gold_collagen_4f9ef2582bee496d948a85903c34d5f9_large.jpg',
        'Balance Active Formula',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '119000',
        '150000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Gel dưỡng mắt Klairs Fundamental Eye Awakening Gel 35gr',
        './images/hocImage/duongmat/duongmat1/geldm_klairs_34182c7745a64af59cae13b7da6cc601_large.jpg',
        'Klairs',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '235000',
        '520000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem dưỡng mắt AHC Youth Lasting Real Eye Cream (xanh)',
        './images/hocImage/duongmat/duongmat1/478_1_388e9ba0bda74a8fbe5d117495f0fb09_large.png',
        'AHC',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '69000',
        '69000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem dưỡng mắt Balance Active Formula Snake Venom Eye Cream',
        './images/hocImage/duongmat/duongmat1/balance-1_f78744432acc47489099dc7d7675069d_large.jpg',
        'Balance Active Formula',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '98000',
        '150000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem dưỡng mắt Dragon\'s Blood Eye Lift Balm Balance',
        './images/hocImage/duongmat/duongmat1/blance_dragons_66c88e50067447458f9ec7ad7e72d405_large.jpg',
        'Balance Active Formula',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '119000',
        '150000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem dưỡng mắt Klairs Fundamental Nourishing Eye Butter 20gr',
        './images/hocImage/duongmat/duongmat1/klairs_fundamen_40b7925df9974d20b2c6794ad9bbd553_large.jpg',
        'Klairs ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '309000',
        '510000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem Dưỡng Mắt Kumargic Giảm Quầng Thâm & Bọng Mắt',
        './images/hocImage/duongmat/duongmat1/89_1_0427fc13121a44d6b0ecf91d5e5a954e_large.png',
        'Kumargic',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '208000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem Dưỡng Mắt Meishoku PlaceWhiter Medicated Whitening Eye Cream',
        './images/hocImage/duongmat/duongmat1/meishoku_13343afdfb1f45d09a61f29e5f892c92_large.jpg',
        'Meishoku',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '192000',
        '250000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem mắt AHC Ageless Real Eye Cream',
        './images/hocImage/duongmat/duongmat1/kemmat-ahc_f78a7e619a364d908d7328a8adc60656_large.png',
        'AHC',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '60000',
        '120000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem mắt Sur.Medic Perfection 100™ All In One Facial Eye Cream',
        './images/hocImage/duongmat/duongmat1/kemmat-sur_eaa43de533a44053adda13e1c3c3d970_large.png',
        ' Sur.Medic',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '359000',
        '460000', [], []
    )
)
array.push(
        new Product(
            'cham-soc-da',
            'duong-da',
            'duong-vung-mat',
            'Thanh Lăn Dưỡng Mắt và Da Mặt Innisfree Green Tea Seed Eye & Face Ball',
            './images/hocImage/duongmat/duongmat1/green_tea_seed_4a4a7ef96e9f4f5f807d6a7d815769dd_large.jpg',
            'Innisfree ',
            'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
            '269000',
            '400000', [], []
        )
    )
    //bo-duong-da
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ Dưỡng Ẩm Innisfree Jeju Cherry Blossom Special Kit (mini)',
        './images/hocImage/bo-dd/bdd1/5_66eb46eee5e54701b6cd283977b7657b_large.png',
        'Innisfree',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '115000',
        '150000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ Dưỡng Da cho da khô D Program Moist Care Set (Lotion 23ml + Emulsion 11ml)',
        './images/hocImage/bo-dd/bdd1/chung_e99a1b06923d48f09b539a1d1686a000_large.jpg',
        'D Program',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '199000',
        '245000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ dưỡng da Some By Mi AHA BHA PHA 30 Days Miracle Solution 4 Step Kit Edition (4 Items)',
        './images/hocImage/bo-dd/bdd1/kit.00_ef3930550ea84b99aba2d8452c60f75e_large.jpg',
        'Some By Mi',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '269000',
        '399000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ dưỡng trắng da 7 ngày Angel\'s Liquid Whitening Program Glutathione',
        './images/hocImage/bo-dd/bdd1/setmini-dd_ac09bdead62c4269b7ee996ce5f19378_large.jpg',
        ' Angel\'s Liquid ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '349000',
        '600000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ dưỡng trắng Some By Mi Yuja Niacin 30 Days Brightening Starter Kit',
        './images/hocImage/bo-dd/bdd1/bdt-somebymi_39de4eebd2e54227882b862b80ae6aea_large.jpg',
        'Some By Mi',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '285000',
        '400000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ Dưỡng Trị Mụn Some By Mi AHA-BHA-PHA 30 Days Miracle Travel Kit',
        './images/hocImage/bo-dd/bdd1/bdtm-somebymi1_1a7bcc4d380f4a56863a250bd7201e84_large.jpg',
        'Some By Mi',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '259000',
        '349000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ giảm mụn, thâm mụn & thu nhỏ lỗ chân lông La Roche-Posay',
        './images/hocImage/bo-dd/bdd1/bgm-roche_a74c87fea08b49cd8740ca65d6f10985_large.jpg',
        'La Roche-Posay',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '699000',
        '920000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ Kit Cocoon Bí Đao Chăm Sóc Da Mụn',
        './images/hocImage/bo-dd/bdd1/499_1_6e1f4f47fad74cd6a234a18bc862f295_large.png',
        'Cocoon',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '130000',
        '199000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ Kit dưỡng trắng Tiam My Signature Red C',
        './images/hocImage/bo-dd/bdd1/bkdt_a1037e50eb5e49bfa265414c97f6bdb9_large.jpg',
        'Tiam ',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '309000',
        '350000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ làm sạch sâu, giảm bã nhờn và nuôi dưỡng da Vichy',
        './images/hocImage/bo-dd/bdd1/z2273329020940-d2ba3956ff1e5d4a0b3a64c0a2e31167_58a5b76219a34b1caccc08302026e06d_large.jpg',
        'Vichy',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '319000',
        '405000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ Sản Phẩm Chăm Sóc Cho Da Mụn D Program Acne Set',
        './images/hocImage/bo-dd/bdd1/1_ac7531d8e47947e0838f173ef45b62c8_large.jpg',
        'D Program',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '199000',
        '245000', [], []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ Vitamin Duo Trial Kit Klairs',
        './images/hocImage/bo-dd/BdngdaTrang2/vitamin_a009caa8b5994472bd08ce3d4f5f139a_large.jpg',
        'Klairs',
        'Còn hàng', ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '299000',
        '480000', [], []
    )
)


localStorage.setItem("products", JSON.stringify(array))