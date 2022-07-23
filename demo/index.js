var pull = {
  name: "pull",
  age: "2",
  gender: "Male",
  address: "Cao théng",
  bark: function () {
    console.log("Ảo thậc đếy");
  },
  children: ["Đen", "vàng", "Đỏ"],
  wife: {
    name: "bull",
    age: "1",
    gender: "female",
  },
  isMarried: true,
};
var miu = pull;
console.log('milk: ', miu);
console.log(pull['name']);
console.log(miu.name)
miu.name = 'dog';