// index.js là nơi gọi các function từ controller - render/ xuất output theo tương tác
//** Khởi tạo mảng danh sách chứa toàn bộ thông tin sinh viên
var dssv = [];
//Lấy thông tin DSSV từ localStorage
var dssvJson = localStorage.getItem("DSSV");
// Nếu mảng dssv = null gọi lại dssvJson đưa vào dssv
if (dssvJson != null) {
  dssv = JSON.parse(dssvJson);
  //array khi lưu xuống từ bộ nhớ json sẽ ko có thuộc tính như ban đầu
  //gọi lại toàn bộ thuộc tính, map lại
  for (i = 0; i < dssv.length; i++) {
    var sv = dssv[i];
    dssv[i] = new SinhVien(
      sv.ten,
      sv.ma,
      sv.email,
      sv.matKhau,
      sv.toan,
      sv.ly,
      sv.hoa
    );
  }
  // render lại hàm dssv
  renderDSSV(dssv);
}
//** Thêm sinh viên
function themSV() {
  //Lấy từng biến vào biến-mảng = newSv cho func layThongTinTuForm của controller.js
  var newSv = layThongTinTuForm();
  //Kiểm tra rỗng (dấu & plus bit)
  var isValid =
    validation.kiemTrarong(
      newSv.ma,
      "spanMaSV",
      "Mã sinh viên không được để rỗng"
    ) &
    validation.kiemTrarong(
      newSv.ten,
      "spanTenSV",
      "Tên sinh viên không được để rỗng"
    ) &
    validation.kiemTrarong(
      newSv.email,
      "spanEmailSV",
      "Email sinh viên không được để rỗng"
    ) &
    validation.kiemTrarong(
      newSv.matKhau,
      "spanMatKhau",
      "Mật khẩu không được để rỗng"
    ) &
    validation.kiemTrarong(
      newSv.toan,
      "spanToan",
      "Điểm toán không được để rỗng"
    ) &
    validation.kiemTrarong(newSv.ly, "spanLy", "Điểm lý không được để rỗng") &
    validation.kiemTrarong(
      newSv.hoa,
      "spanHoa",
      "Điểm hóa viên không được để rỗng"
    ) &
    // Kiểm tra độ dài
    validation.kiemTraDoDai(
      newSv.ten,
      20,
      1,
      "spanTenSV",
      "Tên sinh viên phải trên 1 kí tự và dưới 20 kí tự"
    ) &
    validation.kiemTraDoDai(
      newSv.ma,
      10,
      3,
      "spanMaSV",
      "Mã sinh viên phải trên 3 kí tự và dưới 10 kí tự"
    ) &
    validation.kiemTraDoDai(
      newSv.matKhau,
      20,
      8,
      "spanMatKhau",
      "Mật khẩu sinh viên phải trên 8 kí tự và dưới 20 kí tự"
    ) &
    // Kiểm tra email
    validation.kiemTraEmail(newSv.email, "spanEmailSV", "Email không hợp lệ") &
    //Kiểm tra kí tự tên
    validation.kiemTraTen(
      newSv.ten,
      "spanTenSV",
      "Tên phải là kí tự chữ không dấu"
    ) &
    // Kiểm tra pass
    validation.kiemTraPass(
      newSv.matKhau,
      "spanMatKhau",
      "Pass phải có 1 kí tự in hoa, một kí tự không in hoa, một chữ số và 1 kí tự đặc biệt "
    ) &
    //Kiểm tra điểm
    validation.kiemTraDiem(
      newSv.toan,
      "spanToan",
      "Vui lòng nhập điểm số từ 0-10"
    ) &
    validation.kiemTraDiem(
      newSv.ly,
      "spanLy",
      "Vui lòng nhập điểm số từ 0-10"
    ) &
    validation.kiemTraDiem(
      newSv.hoa,
      "spanHoa",
      "Vui lòng nhập điểm số từ 0-10"
    );
  // Nếu isValid = true
  if (isValid) {
    //Đẩy từng giá trị của biến newSv vào mảng Dssv
    dssv.push(newSv);
    console.log("dssv: ", dssv);
    //TẠO JSON
    var dssvJson = JSON.stringify(dssv);
    //thêm value dssvJSON vào localStorage DSSV
    localStorage.setItem("DSSV", dssvJson);
    //RENDER dssv
    renderDSSV(dssv);
  }
}
//** Xóa sinh viên
function xoaSinhVien(id) {
  // Tìm index của sv trong mảng dssv
  var index = timKiemViTri(id, dssv);
  //Kiểm tra lại index khác -1 thì xóa
  if (index != -1) {
    // Xóa tại vị trí index vừa tìm được
    dssv.splice(index, 1);
    //render lại dssv
    renderDSSV(dssv);
    //Lưu lại vào JSON
    var dssvJson = JSON.stringify(dssv);
    //Lưu JSON vào localStorage
    localStorage.setItem("DSSV", dssvJson);
  }
}
//** Sửa sinh viên
//Show thông tin lên form - cho phép sửa + cập nhật
function suaSinhVien(id) {
  //Tìm index của sv trong mảng dssv
  var index = timKiemViTri(id, dssv);
  //Nếu tìm thấy (index != -1) thì show thông tin lên form
  if (index != -1) {
    var sv = dssv[i];
    showThongTin(sv);
    togDisable();
  }
}
//** Cập nhật thông tin
function capNhatSV(id) {
  //lấy index mảng chứa id đó
  var index = timKiemViTri(id, dssv);
  //Tạo biến mảng dummy - xóa mảng cũ gán mảng mới
  var editSv = layThongTinTuForm();
  //Validation input editSv
  var isValid =
    validation.kiemTrarong(
      editSv.ma,
      "spanMaSV",
      "Mã sinh viên không được để rỗng"
    ) &
    validation.kiemTrarong(
      editSv.ten,
      "spanTenSV",
      "Tên sinh viên không được để rỗng"
    ) &
    validation.kiemTrarong(
      editSv.email,
      "spanEmailSV",
      "Email sinh viên không được để rỗng"
    ) &
    validation.kiemTrarong(
      editSv.matKhau,
      "spanMatKhau",
      "Mật khẩu không được để rỗng"
    ) &
    validation.kiemTrarong(
      editSv.toan,
      "spanToan",
      "Điểm toán không được để rỗng"
    ) &
    validation.kiemTrarong(editSv.ly, "spanLy", "Điểm lý không được để rỗng") &
    validation.kiemTrarong(
      editSv.hoa,
      "spanHoa",
      "Điểm hóa viên không được để rỗng"
    ) &
    // Kiểm tra độ dài
    validation.kiemTraDoDai(
      editSv.ten,
      20,
      1,
      "spanTenSV",
      "Tên sinh viên phải trên 1 kí tự và dưới 20 kí tự"
    ) &
    validation.kiemTraDoDai(
      editSv.ma,
      10,
      3,
      "spanMaSV",
      "Mã sinh viên phải trên 3 kí tự và dưới 10 kí tự"
    ) &
    validation.kiemTraDoDai(
      editSv.matKhau,
      20,
      8,
      "spanMatKhau",
      "Mật khẩu sinh viên phải trên 8 kí tự và dưới 20 kí tự"
    ) &
    // Kiểm tra email
    validation.kiemTraEmail(editSv.email, "spanEmailSV", "Email không hợp lệ") &
    //Kiểm tra kí tự tên
    validation.kiemTraTen(
      editSv.ten,
      "spanTenSV",
      "Tên phải là kí tự chữ không dấu"
    ) &
    // Kiểm tra pass
    validation.kiemTraPass(
      editSv.matKhau,
      "spanMatKhau",
      "Pass phải có 1 kí tự in hoa, một kí tự không in hoa, một chữ số và 1 kí tự đặc biệt "
    ) &
    //Kiểm tra điểm
    validation.kiemTraDiem(
      editSv.toan,
      "spanToan",
      "Vui lòng nhập điểm số từ 0-10"
    ) &
    validation.kiemTraDiem(
      editSv.ly,
      "spanLy",
      "Vui lòng nhập điểm số từ 0-10"
    ) &
    validation.kiemTraDiem(
      editSv.hoa,
      "spanHoa",
      "Vui lòng nhập điểm số từ 0-10"
    );
  // Nếu true
  if (isValid) {
    dssv.splice(index, 1, editSv);
    //lấy giá trị sửa đưa cho mảng dummy
    //Lưu lại vào JSON
    var dssvJson = JSON.stringify(dssv);
    //Lưu JSON vào localStorage
    localStorage.setItem("DSSV", dssvJson);
    // Xuất ra màn hình
    renderDSSV(dssv);
    //mở disable input id
    togEnable();
    //Reset input
    resetInput();
  }
}
//** Reset thông tin
function resetThongTin() {
  //Reset input
  resetInput();
  //mở disable input id
  togEnable();
}
//** Tìm kiếm theo tên show lên input
//Tìm tên => xuất index
function searchTen(ten) {
  if (isValid) {
    //lấy index mảng chứa tên đó
    var index = timKiemTen(ten, dssv);
    if (index != -1) {
      var sv = dssv[i];
      showThongTin(sv);
      togDisable();
    } else {
      alert("Không tìm thấy");
      resetThongTin();
    }
  }
}
