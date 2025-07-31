// function 
// blok kode yang bisa digunakan berulang.


// function tradisional
function sayHello(){
  alert('Hallo ini adalah function');
}

function namaSaya(){
  alert("halo nama saya Fahmi");
}

//arrow function
const persegi = () => {
  // 
  console.log('Ini adalah rumus persegi');
}

// expression
const luas = () => alert('hello ini expression')

// Paramter dan Argumen

// parameter => wadah kosong
function hello(nama, waktu){
  console.log(`Selamat ${waktu}, Mr ${nama}`)
  // alert("Hallo selamat pagi, ", nama)
}
// argumen => isinya.
hello("Asep", "Pagi")

function luasPersegi(sisi){
  return sisi * sisi;
}

function persegiPanjang(panjang, lebar){
  return panjang * lebar;
}

let angka = luasPersegi(10);
console.log("Luas Persegi adalah : ", angka)

let luasPersegiPanjang = persegiPanjang(10, 15) 
console.log("Luas Persegi Panjang adalah : ", luasPersegiPanjang)












// kondisi

let nilai = 29; //nilainya

// kondisi pertama
if (nilai >= 90 && nilai <= 100) {
  // output
  console.log("Predikat kamu adalah A");
}

// kondisi ke 2
else if (nilai >= 80 && nilai <= 89) {
  // output
  console.log("Predikat kamu adalah B");
}

// kondisi ke 3
else if (nilai >= 0 && nilai < 80) {
  console.log("kamu mengulang");
}

// jika semua kondisi tidak memenuhi
else {
  console.log("error");
}

// switch

let today = "rabu"; //nilai yang dijadikan pembanding
// jika today isinya :
switch (today) {
  case "senin": //senin
    console.log("Mager bangun pagi"); //output
    break;

  case "selasa":
  case "rabu":
  case "kamis":
    console.log("harus semangat kerja");
    break;

  case "jumat":
    console.log("Mulai semangat karena mau libur");
    break;

  case "sabtu":
  case "minggu":
    console.log("yeay libur");
    break;
  default:
    console.log("Data yang kamu masukan salah. Coba periksa lagi.");
}

// looping
// for loop

for (let i = 5; i < 10; i++) {
  console.log("perulangan ke - ", i);
}

// while
let count = 3;
while (count < 5) {
  console.log("Angka menghitung", count);
  count++;
}

// operator
// aritmatik
let bil1 = 10;
let bil2 = 30;
console.log(`hasil dari ${bil1} + ${bil2} adalah ${bil1 + bil2}`);
console.log(`hasil dari ${bil1} - ${bil2} adalah ${bil1 - bil2}`);
console.log(`hasil dari ${bil1} * ${bil2} adalah ${bil1 * bil2}`);
console.log(`hasil dari ${bil1} / ${bil2} adalah ${bil1 / bil2}`);
console.log(`hasil dari modulus 16%3 adalah ${16 % 3}`);
console.log(`pangkat dari 5 pangkat 5 ${5 ** 5}`);

// operator penugasan dasar.
let skor = 10;
console.log("Penugasan dasar", skor);

skor += 20;
console.log("tambahkan dan tugaskan, nilai awal 10 ditambah 20 menjadi", skor);

skor -= 5;
console.log(`tambahkan dan tugaskan, nilai awal 30 Kurangi 5 menjadi ${skor}`);

// operator perbandingan
console.log(5 == 5); //true
console.log(5 == "5"); //true
console.log(5 === "5"); //false
console.log(5 === 5); //true

console.log(5 != 5); // sama saja => false
console.log(5 != "5"); //sama saja => false
console.log(5 !== "5"); // salah => true
console.log(5 !== 5); //false

console.log(10 < 7); //false
console.log(10 >= 7); //true
console.log(10 <= 7); //false

// and && = keduanya harus sama
// or || = salah satunya harus benar
// not ! = kebalikannya.

// T && T => true
// T && F => false
// F && F => false

// T || T => true
// T || F => true
// F || F => false

// !F = true
// !T = false

let gajian = true;
let senang = false;

console.log(gajian && senang); //false
console.log(gajian || senang); //true
console.log(!senang); //true

// operator ternerary.
// penulisan kondisi if-else yang sangat sederhan ketika ada sebuah kondisi.
let umur = 10;
let ktp = umur >= 17 ? "Dapet KTP" : "Belum dapet KTP";
console.log(ktp);

// convert tipe data
let lima = 5; //tipe data awal = integer
console.log(lima);
console.log("ini sudah diubah jadi string", String(lima)); //convert ke string

// tipe data
// tipe data primitif
// tipe data string digunakan untuk text
let mobil = "toyota"; //string.
let mobilSaya = `Saya punya mobil. Mereknya adalah ${mobil}`; //string dengan template literal
console.log(mobilSaya); //output

let name = "fahmi";
let age = 20;
const asal = "Jakarta Barat";

// 1
console.log("Hallo, nama saya" + name + "umur saya adalah" + age);
// 2 => bisa lebih dari 1  variable yang dipanggil (recomended).
console.log(
  `Halo nama saya ${name}, umur saya adalah ${age}, saya berasal dari ${asal}`
);

// Tipe data non primitive

let kelas = {
  nama_kelas: "Web programming Basic",
  jenis_kelas: "Programming",
  total_peserta: 20,
  is_running: true,
  data_trainer: {
    nama_trainer: "asep",
    no_hanphone: "+1 2345 678",
  },
};
console.log(kelas.nama_kelas);
console.log(kelas["total_peserta"]);

console.log(
  `Saya sedang mengikuti ${kelas.nama_kelas}, dengan jumlah pesertanya ${kelas["total_peserta"]} dan Trainernya adalah Mr. ${kelas.data_trainer["nama_trainer"]}`
);

// Array
let buah = ["apel", "mangga", "Anggur", "Pear", "Jeruk"];
console.log(buah[3]);

buah.push("Salak");
console.log("Buah buahan saya : " + buah);

// menghitung jumlah array => length

// Metode perubahan data yang umum digunakan
// 1. push(item) => menambahkan item di akhir,
// 2. pop() => menghapus item di akhir,
// 3. shift() => menghapus item di awal,
// 3. unshift(item) => Menambah item di awal,

// number (integer, float, NaN, Infinity)
let usia = 25; //integer
const pi = 3.14; // float decimal
let salah = "10" / 2; //NaN
let hasil = 100 - 200; // -Infinity
console.log(hasil);

// boolean (kebenaran) nilainya hanya true, false.
let isActive = true;
isActive = false;
let makan = true;
console.log(isActive);
console.log(makan);

// undifined mewakili varibel yang sengaja dibuat tapi isinya tidak ada.
// wajib menggunakan let.
let car;
console.log(car);

//null nilainya kosong dan sengaja diberikan oleh pengembang
let lunch = null;
const objectKosong = null;
console.log(objectKosong);

// operator untuk membaca tipe data
console.log(typeof mobilSaya);
console.log(typeof hasil);
console.log(typeof isActive);
console.log(typeof car);
console.log(typeof objectKosong);

//=================================
// const tetap tidak bisa diubah.
const gender = "laki laki";

// let bisa di reusable / diubah.
let nama = "Fahmi"; //nilai pertama
nama = "Ilham"; //perubahan pertama
nama = "Fadhil"; // perubaha terakhir

console.log(nama); //output : Fadhil
console.log(gender); //output : laki laki
