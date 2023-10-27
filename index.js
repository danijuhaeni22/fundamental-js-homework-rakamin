// Diketahui air memiliki kondisi tertentu kapan cair, uap maupun beku, berikut
// rentangnya
// - Beku suhu minus -100 sampai 0
// - Cair suhu 1 sampai 100
// - Uap suhu 101 sampai 500
// - Suhu selain rentang tersebut tidak terdefinisi

let suhuAir = 1000;
// - Beku suhu minus -100 sampai 0
if (suhuAir >= -100 && suhuAir <= 0) {
  console.log("Beku");
  //  - Cair suhu 1 sampai 100
} else if (suhuAir >= 1 && suhuAir <= 100) {
  console.log("Cair");
  // - Uap suhu 101 sampai 500
} else if (suhuAir >= 101 && suhuAir <= 500) {
  console.log("Uap");
  // - Suhu selain rentang tersebut tidak terdefinisi
} else {
  console.log("Suhu tidak terdefinisi");
}



// Diketahui SPBU memiliki logika sebagai berikut
// - Jika plat kuning atau motor maka BBM subsidi
// - Jika mobil CC kurang dari 1500 maka PERTAMAX
// - Jika mobil CC diatas atau sama dengan 1500 maka pertamax turbo

// let plat = "hitam";
// let jenisKendaraan = "mobil"
// let cc = 1600;
//   // - Jika plat kuning atau motor maka BBM subsidi
//   if (plat === "kuning" || jenisKendaraan === "motor") {
//     console.log("BBM subsidi");
//     // - Jika mobil CC kurang dari 1500 maka PERTAMAX
//   } else if (cc < 1500 && jenisKendaraan === "mobil") {
//     console.log("PERTAMAX");
//     // - Jika mobil CC diatas atau sama dengan 1500 maka pertamax turbo
//   } else if (cc >= 1500 && jenisKendaraan === "mobil") {
//     console.log("Pertamax Turbo");
//   }
