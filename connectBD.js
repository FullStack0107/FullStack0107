import mysql from 'mysql2';

// Tạo kết nối đến MySQL
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', // Thay thế bằng mật khẩu đúng
    database: 'demonode2025', // Tên cơ sở dữ liệu
});

// Truy vấn dữ liệu từ bảng "products"
db.query('SELECT * FROM products', (err, results) => {
    if (err) {
        console.error('Lỗi khi truy vấn:', err.message);
        return;
    }

    // Hiển thị dữ liệu trả về trong terminal
    console.log('Danh sách sản phẩm:');
    results.forEach((product) => {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Mô tả: ${product.description}, Giá: ${product.price}`);
    });

    // Đóng kết nối sau khi truy vấn xong
    db.end();
});
