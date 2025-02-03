const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const trafficData = {
  tanggal: "2025-02-03",
  jumlah_kendaraan: 24580,
  kecepatan_rata_rata: 42.3,
  kepadatan_lalu_lintas: 67.8,
  jumlah_kendaraan_per_jam: [
    { jam: "00:00", jumlah: 300 },
    { jam: "01:00", jumlah: 250 },
    { jam: "02:00", jumlah: 200 },
    { jam: "03:00", jumlah: 150 },
    { jam: "04:00", jumlah: 180 },
    { jam: "05:00", jumlah: 400 },
    { jam: "06:00", jumlah: 1200 },
    { jam: "07:00", jumlah: 3200 },
    { jam: "08:00", jumlah: 4500 },
    { jam: "09:00", jumlah: 3000 },
    { jam: "10:00", jumlah: 2800 },
    { jam: "11:00", jumlah: 2600 },
    { jam: "12:00", jumlah: 2300 },
    { jam: "13:00", jumlah: 2100 },
    { jam: "14:00", jumlah: 2400 },
    { jam: "15:00", jumlah: 2600 },
    { jam: "16:00", jumlah: 3100 },
    { jam: "17:00", jumlah: 4200 },
    { jam: "18:00", jumlah: 4500 },
    { jam: "19:00", jumlah: 3800 },
    { jam: "20:00", jumlah: 3400 },
    { jam: "21:00", jumlah: 2800 },
    { jam: "22:00", jumlah: 2000 },
    { jam: "23:00", jumlah: 1200 },
  ]
};

app.get('/', (req, res) => {
  res.json(trafficData);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});