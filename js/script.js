// Khai báo cơ sở dữ liệu sản phẩm chuẩn hóa của Grocify (Dữ liệu Tiếng Việt)
const products = [
    {
        id: 1,
        name: "Táo Xanh Mỹ Nhập Khẩu",
        category: "fruits",
        price: "65.000đ / Kg",
        image: "https://i.ibb.co/6NGpL9P/apple.png",
        description: "Táo xanh tươi ngon nhập khẩu trực tiếp từ các nông trại hữu cơ tại Mỹ. Giòn ngọt, mọng nước và giàu Vitamin C, thích hợp cho việc giảm cân và làm sạch khoang miệng."
    },
    {
        id: 2,
        name: "Sữa Tươi Tiệt Trùng Nguyên Chất",
        category: "dairy",
        price: "32.000đ / Hộp",
        image: "https://i.ibb.co/YyYhC2x/milk.png",
        description: "Sữa tươi tiệt trùng 100% nguyên chất tự nhiên, cung cấp nguồn Canxi dồi dào, vitamin D3 cùng các khoáng chất thiết yếu cho cơ thể khỏe mạnh mỗi ngày."
    },
    {
        id: 3,
        name: "Bông Cải Xanh Đà Lạt",
        category: "vegetables",
        price: "45.000đ / Kg",
        image: "https://i.ibb.co/vYgK6Yt/broccoli.png",
        description: "Bông cải xanh (súp lơ xanh) được canh tác hữu cơ theo tiêu chuẩn VietGAP tại Đà Lạt. Giàu chất xơ, vitamin chống oxy hóa và cực kỳ tươi ngon."
    },
    {
        id: 4,
        name: "Cam Vàng Ai Cập Mọng Nước",
        category: "fruits",
        price: "78.000đ / Kg",
        image: "https://i.ibb.co/ZxrpHfG/orange.png",
        description: "Cam vàng nhập khẩu trực tiếp từ Ai Cập, quả to tròn, mọng nước, vị ngọt thanh tự nhiên và hương thơm vô cùng dễ chịu."
    }
];

// Khởi tạo các chức năng khi trang tải xong
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products); // Chạy hiển thị sản phẩm ban đầu
    setupTabs();              // Cài đặt sự kiện click cho các nút phân loại
    setupSearch();            // Cài đặt thanh tìm kiếm
    loadProductDetail();      // Đọc thông tin chi tiết (nếu đang ở trang chi tiết)
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
        <div class="product-card" onclick="goToDetail(${product.id})">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/150'">
            <h3>${product.name}</h3>
            <div class="product-price">${product.price}</div>
            <a href="javascript:void(0)" class="btn-detail">Xem chi tiết</a>
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

// Đọc tham số URL để đổ dữ liệu vào trang chi-tiet.html
function loadProductDetail() {
    const titleEl = document.getElementById('det-title');
    if (!titleEl) return; // Nếu không ở trang chi-tiet.html thì thoát

    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));

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
        document.getElementById('det-img').src = product.image;
        document.getElementById('det-img').alt = product.name;
    } else {
        document.getElementById('detail-wrapper').innerHTML = `
            <div style="text-align: center; padding: 4rem 0;">
                <h2 style="margin-bottom: 1rem;">Sản phẩm không tồn tại!</h2>
                <a href="san-pham.html" class="btn-shop-now">Quay lại cửa hàng</a>
            </div>
        `;
    }
}