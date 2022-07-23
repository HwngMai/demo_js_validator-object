function layThongTinTuForm() {
    const maSv = document.getElementById("txtMaSV").value;
    const tenSv = document.getElementById("txtTenSV").value;
    const email = document.getElementById("txtEmail").value;
    const matKhau = document.getElementById("txtPass").value;
    const diemToan = document.getElementById("txtDiemToan").value * 1;
    const diemLy = document.getElementById("txtDiemLy").value * 1;
    const diemHoa = document.getElementById("txtDiemHoa").value * 1;
  }
  return new SinhVien(tenSv, maSv, matKhau, email, diemToan, diemLy, diemHoa);