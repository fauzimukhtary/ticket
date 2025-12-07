"use strict";

console.log("");
console.log("-----------------------");
console.log("--- Tiket Masuk Zoo ---");
console.log("-----------------------");
console.log("");

const pengunjung = [
  {
    nama: "Judy",
    umur: 4,
  },
  {
    nama: "Joko",
    umur: 35,
  },
  {
    nama: "Sela",
    umur: 65,
  },
  {
    nama: "Zell",
    umur: 10,
  },
];

const hargaTicket = 50000;

for (let i = 0; i < pengunjung.length; i++) {
  let namaPengunjung = pengunjung[i].nama;
  let umur = pengunjung[i].umur;
  let pesan = "";

  switch (true) {
    case umur < 5:
      pesan = "Free! Untuk Balita";
      break;
    case umur <= 12:
      pesan = "Diskon 50% harga tiket: " + hargaTicket * 0.5;
      break;
    case umur >= 60:
      pesan = "Diskon 30% harga tiket: " + hargaTicket * 0.7;
      break;
    default:
      pesan = "Harga normal: " + hargaTicket;
      break;
  }

  console.log("Nama pengunjung :", namaPengunjung);
  console.log("Umur            :", umur, "tahun");
  console.log("Keterangan      :", pesan);
  console.log("");
}
