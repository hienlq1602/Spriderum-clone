Đây là thông tin phân tích cho trang blog:

- tên trang: Weblog
- số lượng trang chính: 5
- các trang bao gồm: home, details, about, login, admin
  +, home: thực hiện hiển thị danh sách các post của blog, điều hướng đến các trang khác
  +, details: thực hiện hiển thị chi tiết các bài post
  +, about: đây là trang mang thông tin cơ bản về chủ của trang blog
  +, login: thực hiện chức năng đăng nhập
  +, thực hiện quản lý nội dung, danh sách các post trong blog
- các chức năng chính của trang blog:
  +, hiển thị các post
  +, quản lý các post (hiển thị, thêm, sửa, xóa)
  +, chức năng comment ? //
- mô tả các trang:
  +, với trang chủ:
  .Phần header: Tên(logo), menu(danh sách các post yêu thích, about, github-liên kết, tên tài khoản, logo tài khoản)
  .body(chứa danh sách các bài viết)
  +, với trang chi tiết bài viết:
  .Phần header: chung phần header với trang chủ
  .Phần body: hiển thị nội dung bài viết tương ứng (bên dưới sẽ có phần comment, chức năng yêu thích(vote))
  +, với trang about: hiển thị các nội dung của chủ blog
  +, với trang login:
  .Phần header: riêng, có link đến trang chủ
  .Phần body: chứa form để điền thông tin đăng nhập
  +, với trang admin:
  .Phần header: có link đến trang chủ, github, có hiển thị tên admin, ảnh
  .Phần body: chia làm 2 phần: navbar và content
  ./ với navbar: có liên kết đến các trang con là trang danh sách bài viết(default), thống kê
