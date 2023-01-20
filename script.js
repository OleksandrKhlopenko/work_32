"use strict"
let i = 10;
while( i<=20){
  document.write(  ` ${i},`)
  i++
}

for ( let i=10; i<=20; i++) {
  document.write(  `<br> ${i*i}, `)
}
for ( let i=7; i<=7; i++) {
  for(let j=1; j<=10;j++)
  document.write(  `<br> ${i*j}, `)
}

let sum = 0;
for( let i = 1; i < 16; i++ ) {
 sum += i
 
}
document.write(  `<br> Сума ${sum} `)

let sMult = 1;
for( let i = 15; i <= 35; i++ ) {
  sMult= sMult * i
 
}
document.write(  `<br>Додаток ${sMult } `)

let average = 0;
for( let i = 0; i <= 500; i ++ ) {
  average += i / 500
}
document.write(  `<br> C.арифметичне ${average } `)



for( let i = 30; i <= 80; i +=2 ) {
  document.write(  ` <br> ${i} `)
}


for (i = 100; i <= 200; i++) 
if (i % 3 == 0) {
  document.write(  ` <br> ${i} `)

}

let count = 0,
  summ = 0;
for (let i = 2; i * 2 <= 20; i++) {
  if (20 % i == 0) {
    document.write(`<br> ${i} `);

    if (i % 2 === 0) {
      count++;
      summ += i;
    }
  }
}
document.write(`<hr/>  ${count} <br ><br >`);
document.write(` ${summ} <br> <br > <hr>`);
  
for ( let i=1; i<=10; i++) {
  for(let j=1; j<=10;j++)
  document.write(  ` ${i*j}  `)
  document.write('<br>')
}