// Переместить диск с 1 на 3
// Переместить диск с 1 на 2
// Переместить диск с 3 на 2
// Переместить диск с 1 на 3
// Переместить диск с 2 на 1
// Переместить диск с 2 на 3
// Переместить диск с 1 на 3

function tower (n, start, end, tmp) {
  if (n === 1) {
    console.log(`Переместить диск с ${start} на ${end}`);
  } else {
    tower(n-1, start, tmp, end);
    console.log(`Переместить диск с ${start} на ${end}`);
    tower(n-1, tmp, end, start);
  }
}

tower(3, 1, 3, 2);