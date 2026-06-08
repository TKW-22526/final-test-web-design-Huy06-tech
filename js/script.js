// Khai báo cơ sở dữ liệu sản phẩm chuẩn hóa của Grocify (Dữ liệu Tiếng Việt)
const products = [
    {
        id: 1,
        name: "Táo Xanh Mỹ Nhập Khẩu",
        category: "fruits",
        price: "65.000đ / Kg",
        image: "taoxanh.jpg",
        description: "Táo xanh tươi ngon nhập khẩu trực tiếp từ các nông trại hữu cơ tại Mỹ. Giòn ngọt, mọng nước và giàu Vitamin C, thích hợp cho việc giảm cân và làm sạch khoang miệng."
    },
    {
        id: 2,
        name: "Sữa Tươi Tiệt Trùng Nguyên Chất",
        category: "dairy",
        price: "32.000đ / Hộp",
        image: "suatuoi.jpg",
        description: "Sữa tươi tiệt trùng 100% nguyên chất tự nhiên, cung cấp nguồn Canxi dồi dào, vitamin D3 cùng các khoáng chất thiết yếu cho cơ thể khỏe mạnh mỗi ngày."
    },
    {
        id: 3,
        name: "Bông Cải Xanh Đà Lạt",
        category: "vegetables",
        price: "45.000đ / Kg",
        image: "bongcaixanh.jpg",
        description: "Bông cải xanh (súp lơ xanh) được canh tác hữu cơ theo tiêu chuẩn VietGAP tại Đà Lạt. Giàu chất xơ, vitamin chống oxy hóa và cực kỳ tươi ngon."
    },
    {
        id: 4,
        name: "Cam Vàng Ai Cập Mọng Nước",
        category: "fruits",
        price: "78.000đ / Kg",
        image: "camvang.jpg",
        description: "Cam vàng nhập khẩu trực tiếp từ Ai Cập, quả to tròn, mọng nước, vị ngọt thanh tự nhiên và hương thơm vô cùng dễ chịu."
    },
    {
        id: 5,
        name: "Dâu Tây New Zealand",
        category: "fruits",
        price: "245.000đ / Hộp",
        image: "dautay.jpg",
        description: "Dâu tây giống New Zealand cao cấp, quả đỏ mọng đồng đều, vị chua ngọt hài hòa, hương thơm đặc trưng cuốn hút."
    },
    {
        id: 6,
        name: "Nho Đen Không Hạt Mỹ",
        category: "fruits",
        price: "135.000đ / Kg",
        image: "nhoden.jpg",
        description: "Nho đen quả thuôn dài, vỏ mỏng, không hạt, thịt nho săn chắc và có vị ngọt đậm đà."
    },
    {
        id: 7,
        name: "Chuối Già Nam Mỹ",
        category: "fruits",
        price: "35.000đ / Nải",
        image: "chuoi.jpg",
        description: "Chuối chín vàng tự nhiên, giàu kali và năng lượng, là thực phẩm tuyệt vời cho người tập thể thao."
    },
    {
        id: 8,
        name: "Bơ Sáp Đắk Lắk Loại 1",
        category: "fruits",
        price: "60.000đ / Kg",
        image: "bo.jpg",
        description: "Bơ sáp đặc sản Đắk Lắk, quả già chín đều, thịt bơ vàng ươm, dẻo quánh và béo ngậy."
    },
    {
        id: 9,
        name: "Xoài Cát Hòa Lộc",
        category: "fruits",
        price: "85.000đ / Kg",
        image: "xoai.jpg",
        description: "Xoài cát Hòa Lộc chính gốc, vị ngọt lịm thơm lừng, thịt xoài mịn màng không có xơ."
    },
    {
        id: 10,
        name: "Kiwi Vàng New Zealand",
        category: "fruits",
        price: "160.000đ / Kg",
        image: "kiwi.jpg",
        description: "Kiwi vàng vị ngọt thanh, hàm lượng vitamin C cao gấp đôi cam, giúp tăng cường sức đề kháng tối đa."
    },
    {
        id: 11,
        name: "Cà Chua Bi Hữu Cơ",
        category: "vegetables",
        price: "38.000đ / Kg",
        image: "cachua.jpg",
        description: "Cà chua bi giòn ngọt, chứa nhiều lycopene tốt cho tim mạch, phù hợp ăn sống hoặc làm salad."
    },
    {
        id: 12,
        name: "Cải Bó Xôi (Rau Bina)",
        category: "vegetables",
        price: "29.000đ / Kg",
        image: "caiboxoi.jpg",
        description: "Rau bina tươi xanh, giàu sắt và chất xơ, rất tốt cho máu và hệ tiêu hóa của trẻ nhỏ."
    },
    {
        id: 13,
        name: "Măng Tây Xanh Loại A",
        category: "vegetables",
        price: "90.000đ / Kg",
        image: "mangtay.jpg",
        description: "Măng tây thân mập, giòn ngọt, chứa nhiều dinh dưỡng quý, cực kỳ ngon khi xào thịt bò."
    },
    {
        id: 14,
        name: "Ớt Chuông Đà Lạt Đủ Màu",
        category: "vegetables",
        price: "55.000đ / Kg",
        image: "otchuong.jpg",
        description: "Ớt chuông xanh, đỏ, vàng dày thịt, giòn ngọt không hăng, giàu vitamin A bảo vệ mắt."
    },
    {
        id: 15,
        name: "Nấm Đùi Gà Tươi",
        category: "vegetables",
        price: "42.000đ / Khay",
        image: "namduiga.jpg",
        description: "Nấm đùi gà thịt nấm chắc, vị ngọt thanh như thịt gà, thích hợp làm các món lẩu hoặc kho chay."
    },
    {
        id: 16,
        name: "Khoai Tây Đà Lạt",
        category: "vegetables",
        price: "30.000đ / Kg",
        image: "khoaitay.jpg",
        description: "Khoai tây vỏ mỏng, ruột vàng, nhiều tinh bột, khi nấu chín có độ bở và thơm bùi tự nhiên."
    },
    {
        id: 17,
        name: "Cà Rốt Hữu Cơ",
        category: "vegetables",
        price: "25.000đ / Kg",
        image: "carot.jpg",
        description: "Cà rốt tươi sạch, không thuốc kích thích, màu cam đậm, vị ngọt đậm thích hợp làm nước ép."
    },
    {
        id: 18,
        name: "Bắp Cải Trắng Khổng Lồ",
        category: "vegetables",
        price: "18.000đ / Kg",
        image: "bapcai.jpg",
        description: "Bắp cả cuộn chặt, lá trắng xanh dẻo dai, giữ được độ ngọt tự nhiên lâu ngày."
    },
    {
        id: 19,
        name: "Dưa Leo Baby",
        category: "vegetables",
        price: "32.000đ / Kg",
        image: "dualeo.jpg",
        description: "Dưa leo nhỏ gọn, ít ruột, giòn tan và nhiều nước, thức quà giải nhiệt tuyệt vời."
    },
    {
        id: 20,
        name: "Hành Tây Đà Lạt",
        category: "vegetables",
        price: "24.000đ / Kg",
        image: "hanhtay.jpg",
        description: "Hành tây củ to, ít hăng cay, ngọt dịu khi xào nấu, giúp tăng hương vị cho món ăn."
    },
    {
        id: 21,
        name: "Sữa Chua Hy Lạp Ít Béo",
        category: "dairy",
        price: "45.000đ / Hộp",
        image: "suachuahylap.jpg",
        description: "Sữa chua Hy Lạp kết cấu sánh mịn đặc trưng, hàm lượng protein cao, hỗ trợ ăn kiêng hiệu quả."
    },
    {
        id: 22,
        name: "Phô Mai Cheddar Lát",
        category: "dairy",
        price: "68.000đ / Gói",
        image: "phomai.jpg",
        description: "Phô mai Cheddar béo ngậy nhập khẩu, tan chảy đều, lý tưởng khi làm hamburger hoặc kẹp bánh mì."
    },
    {
        id: 23,
        name: "Bơ Thực Vật Tự Nhiên",
        category: "dairy",
        price: "39.000đ / Hộp",
        image: "bo-thuc-vat.jpg",
        description: "Bơ thực vật thơm béo, không chứa cholesterol xấu, dùng để làm bánh hoặc chiên xào cực đỉnh."
    },
    {
        id: 24,
        name: "Váng Sữa Monte Nhập Khẩu",
        category: "dairy",
        price: "58.000đ / Lốc",
        image: "vangsua.jpg",
        description: "Váng sữa thơm ngon béo ngậy hương vani và socola, bổ sung năng lượng dồi dào cho bé yêu."
    },
    {
        id: 25,
        name: "Sữa Đậu Nành Hữu Cơ Fami",
        category: "dairy",
        price: "28.000đ / Lốc",
        image: "suadaunanh.jpg",
        description: "Sữa đậu nành chọn lọc từ hạt đậu nành không biến đổi gen, thơm ngon, thanh mát."
    },
    {
        id: 26,
        name: "Thịt Ba Chỉ Bò Mỹ File",
        category: "meat",
        price: "195.000đ / Kg",
        image: "bachibo.jpg",
        description: "Ba chỉ bò Mỹ thịt nạc và mỡ xen kẽ lý tưởng, cuộn lại đẹp mắt, chuyên dụng cho món lẩu và nướng."
    },
    {
        id: 27,
        name: "Thịt Thăn Heo Sinh Học",
        category: "meat",
        price: "140.000đ / Kg",
        image: "thanheo.jpg",
        description: "Thịt thăn heo nuôi theo công nghệ sinh học, thớ thịt nhỏ mềm, không chứa chất tạo nạc."
    },
    {
        id: 28,
        name: "Ứg Gà Phi Lê Tươi",
        category: "meat",
        price: "85.000đ / Kg",
        image: "ucga.jpg",
        description: "Ứg gà loại bỏ da và mỡ, giàu protein tinh khiết, thực phẩm vàng cho gymer và người giảm cân."
    },
    {
        id: 29,
        name: "Cá Hồi Tươi Na Uy File",
        category: "meat",
        price: "450.000đ / Kg",
        image: "cahoi.jpg",
        description: "Cá hồi Na Uy nhập khẩu nguyên con được phi lê trong ngày, thịt cam tươi rói, đạt chuẩn ăn sashimi."
    },
    {
        id: 30,
        name: "Tôm Thẻ Chân Trắng Tươi",
        category: "meat",
        price: "210.000đ / Kg",
        image: "tomthe.jpg",
        description: "Tôm thẻ đánh bắt tự nhiên, thịt tôm săn chắc, ngọt đậm, vỏ mỏng dễ bóc."
    },
    {
        id: 31,
        name: "Gạo Lứt Huyết Rồng",
        category: "grains",
        price: "45.000đ / Kg",
        image: "gaolut.jpg",
        description: "Gạo lứt đỏ nguyên cám giàu dinh dưỡng, hỗ trợ kiểm soát đường huyết và tốt cho tim mạch."
    },
    {
        id: 32,
        name: "Yến Mạch Úc Nguyên Hạt",
        category: "grains",
        price: "75.000đ / Hộp",
        image: "yenmach.jpg",
        description: "Yến mạch nguyên cám nhập khẩu từ Úc, giàu chất xơ hòa tan, dùng nấu cháo hoặc làm ngũ cốc ăn sáng."
    },
    {
        id: 33,
        name: "Hạt Điều Rang Muối Bình Phước",
        category: "grains",
        price: "150.000đ / Hộp",
        image: "hatdieu.jpg",
        description: "Hạt điều vỏ lụa loại A hạt to, giòn bùi, thơm phức, vị mặn nhẹ vừa ăn."
    },
    {
        id: 34,
        name: "Mật Ong Rừng Nguyên Chất",
        category: "grains",
        price: "220.000đ / Chai",
        image: "matong.jpg",
        description: "Mật ong tự nhiên không pha đường, đặc sánh, dùng pha nước ấm thanh lọc cơ thể cực tốt."
    },
    {
        id: 35,
        name: "Hạt Chia Úc Organic",
        category: "grains",
        price: "95.000đ / Gói",
        image: "hatchia.jpg",
        description: "Hạt chia giàu hàm lượng Omega-3 và chất xơ, dễ dàng pha chế cùng nước trái cây, sữa chua."
    },
    {
        id: 36,
        name: "Quả Việt Quất Tươi Mỹ",
        category: "fruits",
        price: "85.000đ / Hộp",
        image: "vietquat.jpg",
        description: "Việt quất nhập khẩu quả mọng xanh thẫm, chứa chất chống oxy hóa cực cao, bảo vệ tế bào não bộ."
    },
    {
        id: 37,
        name: "Lê Nâu Hàn Quốc Premium",
        category: "fruits",
        price: "99.000đ / Kg",
        image: "lehanquoc.jpg",
        description: "Lê Hàn Quốc quả siêu to, nhiều nước, vị ngọt lịm mát rượi, ăn vào giải nhiệt tức thì."
    },
    {
        id: 38,
        name: "Dưa Lưới Huỳnh Long",
        category: "fruits",
        price: "75.000đ / Kg",
        image: "dualuoi.jpg",
        description: "Dưa lưới vỏ vàng ruột cam, vân lưới nổi rõ, thịt dưa giòn rụm và ngọt đậm đà."
    },
    {
        id: 39,
        name: "Súp Lơ Trắng Đà Lạt",
        category: "vegetables",
        price: "40.000đ / Kg",
        image: "suplo.jpg",
        description: "Súp lơ trắng tươi sạch, bông nấm cuộn chặt không sâu, giàu vitamin C và chất xơ hòa tan."
    },
    {
        id: 40,
        name: "Cải Thảo Tươi Ngon",
        category: "vegetables",
        price: "22.000đ / Kg",
        image: "caithao.jpg",
        description: "Cải thảo cuộn bắp chắc chắn, lá trắng ngọt, là nguyên liệu chính không thể thiếu của món kim chi."
    },
    {
        id: 41,
        name: "Bí Đỏ Hồ Lô",
        category: "vegetables",
        price: "28.000đ / Củ",
        image: "bido.jpg",
        description: "Bí đỏ hồ lô thịt dày, đặc ruột, dẻo và ngọt bùi, rất tốt cho sự phát triển trí não."
    },
    {
        id: 42,
        name: "Sữa Tiệt Trùng TH True Milk",
        category: "dairy",
        price: "36.000đ / Lốc",
        image: "sua.jpg",
        description: "Sữa tươi TH True Milk sạch từ đồng cỏ xanh, giữ trọn vị ngon tinh túy thiên nhiên."
    },
    {
        id: 43,
        name: "Sữa Hạnh Nhân Không Đường",
        category: "dairy",
        price: "65.000đ / Hộp",
        image: "suahanhnhan.jpg",
        description: "Sữa hạt hạnh nhân nguyên chất, lượng calo cực thấp, phù hợp cho người ăn chay thuần và ăn kiêng."
    },
    {
        id: 44,
        name: "Sườn Non Heo Sạch",
        category: "meat",
        price: "185.000đ / Kg",
        image: "suonnon.jpg",
        description: "Sườn non heo nhiều thịt, xương nhỏ, sụn giòn, làm món sườn xào chua ngọt thì ngon hết ý."
    },
    {
        id: 45,
        name: "Mực Ống Tươi Côn Đảo",
        category: "meat",
        price: "290.000đ / Kg",
        image: "mucong.jpg",
        description: "Mực ống cấp đông cấp tốc ngay tại tàu, giữ trọn vị ngọt lịm và độ giòn sần sật bùng nổ."
    },
    {
        id: 46,
        name: "Hạt Hạnh Nhân Rang Mộc",
        category: "grains",
        price: "145.000đ / Hộp",
        image: "hanhnhan.jpg",
        description: "Hạnh nhân nhập khẩu Mỹ rang mộc không muối, giàu chất béo tốt và vitamin E chống lão hóa."
    },
    {
        id: 47,
        name: "Gạo Tám Thơm Điện Biên",
        category: "grains",
        price: "32.000đ / Kg",
        image: "gaotam.jpg",
        description: "Gạo tám thơm hạt nhỏ đều, khi nấu cho cơm dẻo nhiều, vị đậm và hương thơm nồng nàn."
    },
    {
        id: 48,
        name: "Đậu Xanh Cà Vỏ Sạch",
        category: "grains",
        price: "48.000đ / Gói",
        image: "dauxanh.jpg",
        description: "Đậu xanh đã đãi sạch vỏ, hạt mẩy đều, chuyên dùng nấu chè thanh nhiệt hoặc làm nhân bánh."
    },
    {
        id: 49,
        name: "Nho Xanh Autumn Crisp Mỹ",
        category: "fruits",
        price: "180.000đ / Kg",
        image: "nhoxanh.jpg",
        description: "Nho xanh thượng hạng, siêu giòn, vị ngọt thanh mát, quả to tròn không hạt cực thích mắt."
    },
    {
        id: 50,
        name: "Rau Xà Lách Mỹ (Iceberg)",
        category: "vegetables",
        price: "35.000đ / Cây",
        image: "xalach.jpg",
        description: "Xà lách cuộn tròn như bắp cải, lá siêu giòn và nhiều nước, là linh hồn của các món cuốn và salad sốt."
    },
    {
        id: 51,
        name: "Lựu Đỏ Ai Cập Nhập Khẩu",
        category: "fruits",
        price: "125.000đ / Kg",
        image: "luudo.jpg",
        description: "Lựu đỏ Ai Cập quả to, hạt mềm mọng nước, vị ngọt thanh. Đây là loại trái cây cực kỳ giàu chất chống oxy hóa, tốt cho tim mạch và làm đẹp da từ bên trong."
    },
    {
        id: 52,
        name: "Khoai Lang Mật Đà Lạt",
        category: "vegetables",
        price: "45.000đ / Kg",
        image: "khoailanmat.jpg",
        description: "Khoai lang mật vùng đất đỏ Đà Lạt, khi nướng hoặc hấp chín sẽ tiết ra lớp mật ngọt lịm, thịt khoai dẻo mềm, màu cam bắt mắt và rất giàu chất xơ."
    }
];




function getImageSrc(fileName) {
    if (!fileName) return '';

    const isAbsolute = /^(?:https?:)?\/\//i.test(fileName);
    if (isAbsolute) return fileName;

    const basePath = window.location.pathname.includes('/html/') ? '../assets/' : 'assets/';
    return `${basePath}${fileName}`;
}

// Khởi tạo các chức năng khi trang tải xong
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products); // Chạy hiển thị sản phẩm ban đầu
    setupTabs();              // Cài đặt sự kiện click cho các nút phân loại
    setupSearch();            // Cài đặt thanh tìm kiếm
    renderCart();             // Hiển thị giỏ hàng trên trang sản phẩm
    loadProductDetail();      // Đọc thông tin chi tiết (nếu đang ở trang chi tiết)

    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkoutCart);
    }
});

// Hàm hiển thị sản phẩm lên Grid lưới
function renderProducts(productsArray) {
    const grid = document.getElementById('product-grid');
    if (!grid) return; // Nếu không ở trang san-pham.html thì bỏ qua

    if (productsArray.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #6b7280; padding: 3rem 0;">Không tìm thấy sản phẩm nào phù hợp.</div>`;
        return;
    }

    grid.innerHTML = productsArray.map(product => `
        <div class="product-card">
            <img src="${getImageSrc(product.image)}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/150'">
            <h3>${product.name}</h3>
            <div class="product-price">${product.price}</div>
            <div class="product-actions">
                <a href="javascript:void(0)" class="btn-detail" onclick="event.stopPropagation(); goToDetail(${product.id});">Xem chi tiết</a>
                <button type="button" class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id});">Thêm vào giỏ hàng</button>
            </div>
        </div>
    `).join('');
}

// Logic chuyển đổi Tab danh mục sản phẩm giống video
function setupTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    if (tabs.length === 0) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            // Đổi class active giữa các nút tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const category = tab.getAttribute('data-category');
            
            // Lọc mảng sản phẩm theo danh mục lựa chọn
            if (category === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === category);
                renderProducts(filtered);
            }
        });
    });
}

// Logic xử lý tìm kiếm thời gian thực (Real-time Search)
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase().trim();
        
        // Nếu người dùng đang gõ ở trang khác, tự động chuyển họ sang trang sản phẩm kèm từ khóa
        if (!document.getElementById('product-grid')) {
            window.location.href = `html/san-pham.html?search=${encodeURIComponent(keyword)}`;
            return;
        }

        const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
        renderProducts(filtered);
    });

    // Kiểm tra xem có từ khóa tìm kiếm được truyền từ trang chủ qua URL không
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam && document.getElementById('product-grid')) {
        searchInput.value = searchParam;
        const filtered = products.filter(p => p.name.toLowerCase().includes(searchParam.toLowerCase()));
        renderProducts(filtered);
    }
}

// Xử lý chuyển hướng trang chi tiết an toàn
function goToDetail(id) {
    if (window.location.pathname.includes('/html/')) {
        window.location.href = `chi-tiet.html?id=${id}`;
    } else {
        window.location.href = `html/chi-tiet.html?id=${id}`;
    }
}

function getCart() {
    try {
        return JSON.parse(localStorage.getItem('grocifyCart')) || {};
    } catch (error) {
        return {};
    }
}

function saveCart(cart) {
    localStorage.setItem('grocifyCart', JSON.stringify(cart));
}

function formatPrice(value) {
    return new Intl.NumberFormat('vi-VN').format(value) + 'đ';
}

function getNumericPrice(priceText) {
    const digits = priceText.replace(/[^0-9]/g, '');
    return Number(digits) || 0;
}

function updateCartSummary() {
    const cart = getCart();
    const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartAmount = document.getElementById('cart-amount');

    const amount = Object.entries(cart).reduce((sum, [productId, qty]) => {
        const product = products.find(p => p.id === Number(productId));
        if (!product) return sum;
        return sum + qty * getNumericPrice(product.price);
    }, 0);

    if (cartCount) {
        cartCount.innerText = count;
    }
    if (cartTotal) {
        cartTotal.innerText = count;
    }
    if (cartAmount) {
        cartAmount.innerText = formatPrice(amount);
    }
}

function renderCart() {
    const cart = getCart();
    const cartList = document.getElementById('cart-list');
    if (!cartList) return;

    const cartEntries = Object.entries(cart);
    if (cartEntries.length === 0) {
        cartList.innerHTML = `<div class="cart-empty">Giỏ hàng của bạn đang trống. Thêm sản phẩm vào giỏ để tiếp tục.</div>`;
        updateCartSummary();
        return;
    }

    cartList.innerHTML = cartEntries.map(([productId, qty]) => {
        const product = products.find(p => p.id === Number(productId));
        if (!product) return '';

        return `
            <div class="cart-item">
                <img src="${getImageSrc(product.image)}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/72'">
                <div>
                    <div class="cart-item-info">
                        <h4>${product.name}</h4>
                        <p>${product.price}</p>
                    </div>
                    <div class="cart-item-actions">
                        <div class="qty-controls">
                            <button type="button" class="qty-btn" onclick="updateCartItem(${product.id}, -1)">−</button>
                            <span class="qty-value">${qty}</span>
                            <button type="button" class="qty-btn" onclick="updateCartItem(${product.id}, 1)">+</button>
                        </div>
                        <button type="button" class="remove-btn" onclick="removeFromCart(${product.id})">Xóa</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    updateCartSummary();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cart = getCart();
    cart[productId] = (cart[productId] || 0) + 1;
    saveCart(cart);
    renderCart();

    const productLabel = product.name.length > 30 ? product.name.slice(0, 30) + '...' : product.name;
    alert(`Đã thêm "${productLabel}" vào giỏ hàng!`);
}

function updateCartItem(productId, delta) {
    const cart = getCart();
    if (!cart[productId]) return;

    cart[productId] += delta;
    if (cart[productId] <= 0) {
        delete cart[productId];
    }

    saveCart(cart);
    renderCart();
}

function removeFromCart(productId) {
    const cart = getCart();
    if (!cart[productId]) return;

    delete cart[productId];
    saveCart(cart);
    renderCart();
}

function clearCart() {
    localStorage.removeItem('grocifyCart');
    renderCart();
}

function checkoutCart() {
    const cart = getCart();
    const hasItems = Object.keys(cart).length > 0;
    if (!hasItems) {
        alert('Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán.');
        return;
    }

    alert('Cảm ơn bạn đã thanh toán, hẹn gặp lại lần sau');
    clearCart();
}

function loadProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const detailWrapper = document.getElementById('detail-wrapper');
    if (!id || !detailWrapper) return;

    const product = products.find(p => p.id === id);
    if (product) {
        // Bản dịch danh mục hiển thị
        let displayCategory = "Sản phẩm";
        if (product.category === 'fruits') displayCategory = "Trái Cây Tươi";
        if (product.category === 'vegetables') displayCategory = "Rau Củ Sạch";
        if (product.category === 'dairy') displayCategory = "Sữa & Bơ";

        document.getElementById('det-title').innerText = product.name;
        document.getElementById('det-category').innerText = `Danh mục: ${displayCategory}`;
        document.getElementById('det-price').innerText = product.price;
        document.getElementById('det-desc').innerText = product.description;
        document.getElementById('det-img').src = getImageSrc(product.image);
        document.getElementById('det-img').alt = product.name;

        const detailAddCartBtn = document.getElementById('btn-add-cart-detail');
        if (detailAddCartBtn) {
            detailAddCartBtn.onclick = () => addToCart(product.id);
        }
    } else {
        detailWrapper.innerHTML = `
            <div style="text-align: center; padding: 4rem 0;">
                <h2 style="margin-bottom: 1rem;">Sản phẩm không tồn tại!</h2>
                <a href="san-pham.html" class="btn-shop-now">Quay lại cửa hàng</a>
            </div>
        `;
    }
}