document.getElementById("btn-show").addEventListener("click", function () {
  var sv = layThongTinTuForm();
  console.log('sv: ', sv);
  console.log('sv: ', sv.getRank());
  console.log('sv: ', sv.getScore());
  showThongTinLenForm(sv);
});
