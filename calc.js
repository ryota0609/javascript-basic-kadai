const num = 1;

if (num % 3 === 0) {
  console.log('3の倍数です');
}

if (num % 5 === 0) {
  console.log('5の倍数です');
}

if (num % 3 || num % 5 === 0) {
  console.log('“3と5の倍数です');
}
