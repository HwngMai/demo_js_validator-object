function SinhVien(maSv, tenSv, loaiSV, diemToan, diemVan) {
  this.id = maSv;
  this.name = tenSv;
  this.type = loaiSV;
  this.math = diemToan;
  this.literature = diemVan;
  this.getScore = function () {
    return (this.math + this.literature) / 2;
  };
  this.getRank = function () {
    var dtb = this.getScore();
    if (dtb < 5) {
      return "bad";
    } else {
      return "good";
    }
  };
}

var sinhVien1 = new SinhVien('123', 'donalds trump','ngu','9','9');
console.log('sinhVien1: ', sinhVien1);
