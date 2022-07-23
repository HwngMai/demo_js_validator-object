//model.js là file chứa các khuôn mẫu cho obj(khuôn mẫu = các lớp đối tượng)
//khai báo khuôn mẫu cho obj SinhVien
function SinhVien(ten, ma, email, matKhau, toan, ly, hoa) {
  this.ten = ten;
  this.ma = ma;
  this.email = email;
  this.matKhau = matKhau
  this.toan = toan;
  this.ly = ly;
  this.hoa = hoa;
  this.tinhDTB = function(){
    return ((this.toan  * 1 + this.ly * 1 + this.hoa * 1) / 3 ).toFixed(2);
  }
}

