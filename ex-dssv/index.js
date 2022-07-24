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
//FUNCTION** Kiểm tra biến isvalid
function checkIsValid(sv) {
  var isValid =
    validation.kiemTrarong(
      sv.ma,
      "spanMaSV",
      "Mã sinh viên không được để trống"
    ) &
    validation.kiemTrarong(
      sv.ten,
      "spanTenSV",
      "Tên sinh viên không được để trống"
    ) &
    validation.kiemTrarong(
      sv.email,
      "spanEmailSV",
      "Email sinh viên không được để trống"
    ) &
    validation.kiemTrarong(
      sv.matKhau,
      "spanMatKhau",
      "Mật khẩu không được để trống"
    ) &
    validation.kiemTrarong(
      sv.toan,
      "spanToan",
      "Điểm toán không được để trống"
    ) &
    validation.kiemTrarong(sv.ly, "spanLy", "Điểm lý không được để trống") &
    validation.kiemTrarong(sv.hoa, "spanHoa", "Điểm hóa không được để trống") &
    // Kiểm tra độ dài
    validation.kiemTraDoDai(
      sv.ten,
      20,
      1,
      "spanTenSV",
      "Tên sinh viên phải trên 1 kí tự và dưới 20 kí tự"
    ) &
    validation.kiemTraDoDai(
      sv.ma,
      10,
      3,
      "spanMaSV",
      "Mã sinh viên phải trên 3 kí tự và dưới 10 kí tự"
    ) &
    validation.kiemTraDoDai(
      sv.matKhau,
      20,
      8,
      "spanMatKhau",
      "Mật khẩu sinh viên phải trên 8 kí tự và dưới 20 kí tự"
    ) &
    // Kiểm tra email
    validation.kiemTraEmail(sv.email, "spanEmailSV", "Email không hợp lệ") &
    //Kiểm tra kí tự tên
    validation.kiemTraTen(
      sv.ten,
      "spanTenSV",
      "Tên phải là kí tự chữ không dấu"
    ) &
    // Kiểm tra pass
    validation.kiemTraPass(
      sv.matKhau,
      "spanMatKhau",
      "Pass phải có 1 kí tự in hoa, một kí tự không in hoa, một chữ số và 1 kí tự đặc biệt "
    ) &
    //Kiểm tra điểm
    validation.kiemTraDiem(
      sv.toan,
      "spanToan",
      "Vui lòng nhập điểm số từ 0-10"
    ) &
    validation.kiemTraDiem(sv.ly, "spanLy", "Vui lòng nhập điểm số từ 0-10") &
    validation.kiemTraDiem(sv.hoa, "spanHoa", "Vui lòng nhập điểm số từ 0-10");
  // validation.kiemTraTrung(sv.ma, "spanMaSV", "Mã sinh viên bị trùng");
  return isValid;
}

//FUNCTION** Thêm sinh viên
function themSV() {
  //Lấy từng biến vào biến-mảng = newSv cho func layThongTinTuForm của controller.js
  var newSv = layThongTinTuForm();
  //Kiểm tra input
  var isValid =
    // Kiểm tra valid
    checkIsValid(newSv) &
    // Kiểm tra trùng
    validation.kiemTraTrung(newSv.ma, "spanMaSV", "Mã sinh viên bị trùng");
  console.log("isValid: ", isValid);
  // Nếu isValid = true
  if (isValid == true) {
    //Đẩy từng giá trị của biến newSv vào mảng Dssv
    dssv.push(newSv);
    console.log("dssv: ", dssv);
    //TẠO JSON
    var dssvJson = JSON.stringify(dssv);
    //thêm value dssvJSON vào localStorage DSSV
    localStorage.setItem("DSSV", dssvJson);
    //RENDER dssv
    renderDSSV(dssv);
    resetInput();
  }
}
//FUNCTION** Xóa sinh viên
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
//FUNCTION** Sửa sinh viên
//Show thông tin lên form - cho phép sửa + cập nhật
function suaSinhVien(id) {
  //Tìm index của sv trong mảng dssv
  var index = timKiemViTri(id, dssv);
  console.log("index: ", index);
  //Nếu tìm thấy (index != -1) thì show thông tin lên form
  if (index != -1) {
    var sv = dssv[index];
    showThongTin(sv);
    togDisable("txtMaSV");
    togDisable("btnThemSV");
    togEnable("btnCapNhat");
  }
}
//FUNCTION** Cập nhật thông tin
function capNhatSV(id) {
  //lấy index mảng chứa id đó
  var index = timKiemViTri(id, dssv);
  //Tạo biến mảng dummy - xóa mảng cũ gán mảng mới
  var editSv = layThongTinTuForm();
  //Validation input editSv
  var isValid = checkIsValid(editSv);
  // validation.kiemTraTrung(editSv.ma, "spanMaSV", "Mã sinh viên bị trùng");
  // Nếu true
  if (isValid) {
    //cắt bỏ mảng cũ chèn mảng editsv vào vị trí index
    dssv.splice(index, 1, editSv);
    //lấy lại mảng dssv
    renderDSSV(dssv);
    //mở disable input id
    togEnable("txtMaSV");
    togDisable("btnCapNhat");
    togEnable("btnThemSV");
    //Reset input
    resetInput();
    //Lưu lại dssv vào biến JSON
    var dssvJson = JSON.stringify(dssv);
    //Lưu JSON vào localStorage
    localStorage.setItem("DSSV", dssvJson);
  }
}
//FUNCTION** Reset thông tin
function resetThongTin() {
  //Reset input
  resetInput();
  //mở disable input id
  togEnable("txtMaSV");
  togEnable("btnThemSV");
  togDisable("btnCapNhat");
}
//FUNCTION** Tìm kiếm theo tên show lên input
//Tìm tên => xuất index
function searchTen(ten) {
  //lấy index mảng chứa tên đó
  var index = timKiemTen(ten, dssv);
  if (index != -1) {
    var sv = dssv[i];
    showThongTin(sv);
    togDisable("txtMaSV");
    togEnable("btnCapNhat");
    togDisable("btnThemSV");
  } else {
    alert("Không tìm thấy, vui lòng kiểm tra lại tên cần tìm !");
    resetThongTin();
  }
}
