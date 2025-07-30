
// tipe data
// tipe data primitif
// tipe data string digunakan untuk text
let mobil = "toyota" //string.
let mobilSaya = `Saya punya mobil. Mereknya adalah ${mobil}`; //string dengan template literal
console.log(mobilSaya) //output

let name = "fahmi"
let age = 20
const asal = 'Jakarta Barat' 

// 1
console.log('Hallo, nama saya' + name + 'umur saya adalah' + age);
// 2 => bisa lebih dari 1  variable yang dipanggil (recomended).
console.log(`Halo nama saya ${name}, umur saya adalah ${age}, saya berasal dari ${asal}`)


// Tipe data non primitive

let kelas = {
    'nama_kelas' : 'Web programming Basic',
    'jenis_kelas' : 'Programming',
    'total_peserta' : 20,
    'is_running' : true,
    'data_trainer' : {
        'nama_trainer' : 'asep', 
        'no_hanphone' : '+1 2345 678', 
    }
}

// number (integer, float, NaN, Infinity)
let usia = 25; //integer
const pi = 3.14; // float decimal
let salah = '10' / 2; //NaN
let hasil = 100 - 200; // -Infinity
console.log(hasil);

// boolean (kebenaran) nilainya hanya true, false.
let isActive = true;
isActive = false;
let makan = true;
console.log(isActive)
console.log(makan)

// undifined mewakili varibel yang sengaja dibuat tapi isinya tidak ada.
// wajib menggunakan let.
let car;
console.log(car);

//null nilainya kosong dan sengaja diberikan oleh pengembang
let lunch = null;
const objectKosong = null;
console.log(objectKosong)

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
