function hitung(operator) {
  let a = parseFloat(document.getElementById("angka1").value);
  let b = parseFloat(document.getElementById("angka2").value);
  

  let hasil;

  if (isNaN(a) || isNaN(b) ) {
    document.getElementById("hasil").textContent = "Hasil: Masukkan angka dulu!";
    return;
  }

  if (operator === '+') hasil = a + b ;
  else if (operator === '-') hasil = a - b ;
  else if (operator === '*') hasil = a * b ;
  else if (operator === '/') {
    if (c === 0) hasil = "Tidak bisa dibagi 0!";
    else hasil = a / b ;
  }

  document.getElementById("hasil").textContent = "Hasil: " + hasil;

}
