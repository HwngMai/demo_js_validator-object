//
function layThongTinTuForm() {
  const maSv = document.getElementById("txtMaSV").value;
  const tenSv = document.getElementById("txtTenSV").value;
  const loaiSv = document.getElementById("loaiSV").value;
  const diemToan = document.getElementById("txtDiemToan").value * 1;
  const diemVan = document.getElementById("txtDiemVan").value * 1;
  var sv = {
    id: maSv,
    name: tenSv,
    type: loaiSv,
    math: diemToan,
    literature: diemVan,
    getScore: function () {
      return (this.math + this.literature) / 2;
    },
    getRank: function () {
      var dtb = this.getScore();
      if (dtb < 5) {
        return "bad";
      } else {
        return "good";
      }
    },
  };
  return sv;
  //
}
function showThongTinLenForm(sv) {
  document.getElementById("spanTenSV").innerHTML = sv.name;
  document.getElementById("spanLoaiSV").innerHTML = sv.type;
  document.getElementById("spanMaSV").innerHTML = sv.id;
  document.getElementById("spanDTB").innerHTML = sv.getScore();
  document.getElementById("spanXepLoai").innerHTML = sv.getRank();
}
