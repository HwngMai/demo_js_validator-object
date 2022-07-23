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
    if (value.length != 0 && !re.test(value)) {
      document.getElementById(idError).innerHTML = mess;
      return false;
    } else {
      return true;
    }
  },
};