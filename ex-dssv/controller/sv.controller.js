//controller là folder chứa các func + nội dung chi tiết của nó
//các func trong controller có thể dựa vào model.js để khởi tạo các biến nằm trong func
// Lấy các thông tin từ form đưa vào biến dựa theo model SinhVien trong ./model.js
function layThongTinTuForm() {
  // lấy các giá trị từ input người dùng
  const tenSv = document.getElementById("txtTenSV").value;
  const maSv = document.getElementById("txtMaSV").value;
  const email = document.getElementById("txtEmail").value;
  const matKhau = document.getElementById("txtPass").value;
  const diemToan = document.getElementById("txtDiemToan").value;
  const diemLy = document.getElementById("txtDiemLy").value;
  const diemHoa = document.getElementById("txtDiemHoa").value;
  //đưa về 1 mảng mới theo cấu tạo của model SinhVien từ model.js
  return new SinhVien(tenSv, maSv, email, matKhau, diemToan, diemLy, diemHoa);
}
// Xuất thông tin đã đưa vào mảng mới lên bảng
function renderDSSV(svArr) {
  // Tạo biến chứa giá trị HTML
  var contentHTML = "";
  // duyệt các obj sv trong mảng dssv
  for (i = 0; i < svArr.length; i++) {
    //gọi các thuộc tính trong obj sinh viên gán vào 1 biến sv sử dụng trong vòng lặp
    var sv = svArr[i];
    //tạo biến thẻ tr chứa các thông tin cần xuất. gán các thuộc tính gọi từ obj sinh viên
    var trContent = `<tr>
    <td>${sv.ma}</td>
    <td>${sv.ten}</td>
    <td>${sv.email}</td>
    <td>${sv.tinhDTB()}</td>
    <td><button onclick="xoaSinhVien('${
      sv.ma
    }')" class='btn btn-danger'>Xóa</button></td>
    <td><button onclick="suaSinhVien('${
      sv.ma
    }');" class='btn btn-warning'>Sửa</button></td>
    </tr>`;
    //thêm giá trị vào biến
    contentHTML += trContent;
  }
  //xuất ra bảng id tbodySinhVien
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
// Tìm kiếm vị trí
function timKiemViTri(id, dssv) {
  for (i = 0; i < dssv.length; i++) {
    // tạo biến sv gán bằng biến sv index = i trong mảng dssv (dssv[i])
    var sv = dssv[i];
    // Nếu sv.ma == id trả về giá trị i
    if (sv.ma == id) {
      return i;
    }
  }
  // Nếu sv.ma != id trả về giá trị -1
  return -1;
}
// FUNCTION show thông tin lên form
function showThongTin(sv) {
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtDiemToan").value = sv.toan;
  document.getElementById("txtDiemLy").value = sv.ly;
  document.getElementById("txtDiemHoa").value = sv.hoa;
}
// FUNCTION disable ô input và btn
function togDisable(id) {
  document.getElementById(id).disabled = true;
}
function togEnable(id) {
  document.getElementById(id).disabled = false;
}
// FUNCTION reset thông tin
function resetInput() {
  document.getElementById("txtMaSV").value = "";
  document.getElementById("txtTenSV").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtPass").value = "";
  document.getElementById("txtDiemToan").value = "";
  document.getElementById("txtDiemLy").value = "";
  document.getElementById("txtDiemHoa").value = "";
}
//FUNCTION tìm kiếm theo tên
function timKiemTen(searchTen, dssv) {
  var searchTen = document.getElementById("txtSearch").value;
  for (i = 0; i < dssv.length; i++) {
    // tạo biến sv gán bằng biến sv index = i trong mảng dssv (dssv[i])
    var sv = dssv[i];
    // Nếu sv.ma == id trả về giá trị i
    if (sv.ten == searchTen) {
      return i;
    }
  }
  // Nếu sv.ma != id trả về giá trị -1
  return -1;
}
