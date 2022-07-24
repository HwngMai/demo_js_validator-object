function checkIsValid() {
  return true;
}
function checkIsOk() {
  return true;
}
var isValid = checkIsValid() && checkIsOk();
console.log("isValid: ", isValid);
