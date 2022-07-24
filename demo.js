fruits = ["a", "b", "c", "d"];
console.log("index c ", fruits.indexOf("c"));
fruits.splice(2, 1, "e");
console.log("fruits: ", fruits);
console.log("index e ", fruits.indexOf("e"));
fruits.splice(2, 1, "f");
console.log("index f ", fruits.indexOf("f"));