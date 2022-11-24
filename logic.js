// Hitung jumlah pasang kaos kaki terjual
//input [5,7,7,9,10,4,5,10,6,5]
//output 3

function kaosKaki(num) {
  let n = num.length;
  let count = 0;
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (num[i] === num[j] && i < j ){
        count++;
      }
    }
    if (count %2 !== 0) {
      result++;
    }
    count=0;
  }
  console.log(Math.floor(result));
}

console.log("No 1")
// kaosKaki([5, 7, 7, 9, 10, 4, 5, 10, 6, 5]);
kaosKaki([10,20,20,10,10,30,50,10,20]);
kaosKaki([6,5,2,3,5,2,2,1,1,5,1,3,3,3,5]);
kaosKaki([1,1,3,1,2,1,3,3,3,3]);
console.log("_____________________________________________")

//Hitung jumlah kata dalam sebuah kalimat tanpa spesial karakter
//input  Kemarin Shopia per[gi ke mall.
//output 4

function checkLetter(sentence){
  let array = sentence.split(" ");
  let result = array.length;
  let temp = 0;

  const format = /[!@#$%^&[*()_+-={};:'"|<>/?/]/
  array.map((e) => {
    if (format.test(e)){
      temp++;
    }
  })
  result= result - temp;
  console.log(result)
}


console.log("NO 2")
checkLetter("Kemarin Shopia per[gi ke mall")
checkLetter("Saat meng*ecat tembok , Agung dib_antu oleh Raihan .")
checkLetter("Berapa u(mur minimal [ untuk ! mengurus ktp?")
checkLetter("Masing - masing anak mendap(atkan uang jajan ya=ng be&rbeda")