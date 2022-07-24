//** khởi tạo lớp validator */
var validation = {
  // tạo hàm kiemtrarong chứa 3 biến số
  kiemTrarong: function (value, idError, mess) {
    // nếu hàm rỗng (value.length = 0) thì show mess, trả về false
    if (value.length == 0) {
      document.getElementById(idError).innerHTML = mess;
      return false;
    } else {
      // nếu hàm ko rỗng (value.length != 0) thì ko show mess, trả về true
      document.getElementById(idError).innerHTML = "";
      return true;
    }
  },
  kiemTraDoDai: function (value, max, min, idError, mess) {
    if (value.length != 0 && (value.length > max || value.length < min)) {
      document.getElementById(idError).innerHTML = mess;
      return false;
    } else {
      return true;
    }
  },
  kiemTraEmail: function (value, idError, mess) {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // nếu input có giá trị và re value = false
    if (value.length != 0 && !re.test(value)) {
      document.getElementById(idError).innerHTML = mess;
      return false;
    } else {
      return true;
    }
  },
  kiemTraTen: function (value, idError, mess) {
    // const re = /^[A-Za-z]+$/;
    const re = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
    // nếu input có giá trị và re value = false
    if (value.length != 0 && !re.test(value)) {
      document.getElementById(idError).innerHTML = mess;
      return false;
    } else {
      return true;
    }
  },
  kiemTraPass: function (value, idError, mess) {
    // Pass phải có 1 kí tự in hoa, một kí tự ko in hoa, một chữ số và 1 kí tự đặc biệt
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{4,}$/;
    // nếu input có giá trị và re value = false
    if (value.length != 0 && !re.test(value)) {
      document.getElementById(idError).innerHTML = mess;
      return false;
    } else {
      return true;
    }
  },
  kiemTraDiem: function (value, idError, mess) {
    // tạo biến regex
    const re = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;
    // Kiểm tra có nằm ngoài 0-10
    var isOut0to10 = value < 0 || value > 10;
    // Kiểm tra có khác quy tắc theo biến regex
    var isRe = !re.test(value);
    console.log("isRe: ", isRe);
    console.log("is0to10: ", isOut0to10);
    // nếu input có giá trị và nằm ngoài 0-10 hoặc ko theo quy tắc biến regex
    if (value.length != 0 && (isOut0to10 || isRe)) {
      document.getElementById(idError).innerHTML = mess;
      return false;
    } else {
      return true;
    }
  },
  //Kiểm tra trùng id
  kiemTraTrung: function (value, idError, mess) {
    for (i = 0; i < dssv.length; i++) {
      // gán biến chứa mảng có giá trị cần so sánh
      var sv = dssv[i];
      // nếu giá trị cần tìm khác 0 và bằng giá trị so sánh
      if (value.length != 0 && value == sv.ma) {
        // Báo lỗi
        document.getElementById(idError).innerHTML = mess;
        // Trả về false
        return false;
      }
    }
    return true;
  },
};
