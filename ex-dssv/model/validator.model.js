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
    const re = /^[A-Za-z]+$/;
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
    // Pass phải có 1 kí tự in hoa, một kí tự ko in hoa, một chữ số và 1 kí tự đặc biệt
    const re = /^[0-9][0]?$|^10$/;
    // nếu input có giá trị và re value = false
    if (value.length != 0 && !re.test(value)) {
      document.getElementById(idError).innerHTML = mess;
      return false;
    } else {
      return true;
    }
  },
  //Kiểm tra trùng id
  kiemTraTrung: function (value, idError, mess) {
    for (i = 0; i < dssv.length; i++) {
      var sv = dssv[i];
      if (value.length != 0 && value == sv.ma) {
        document.getElementById(idError).innerHTML = mess;
        return false;
      } else {
        return true;
      }
    }
  },
};
