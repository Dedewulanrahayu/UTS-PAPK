var hargalaundry = 0;
var jumlahukuran = 0;

function hitungharga() {
  if (kategori.value == 'Cuci Baju Kiloan') {
    hargalaundry = 25000;
    jumlahukuran = ukuran.value;

    harga.value = jumlahukuran * hargalaundry;
  } else if (kategori.value == 'Cuci Baju Satuan') {
    hargalaundry = 5000;
    jumlahukuran = ukuran.value;

    harga.value = jumlahukuran * hargalaundry;
  } else if (kategori.value == 'Cuci Karpet') {
    hargalaundry = 45000;
    jumlahukuran = ukuran.value;

    harga.value = jumlahukuran * hargalaundry;
  } else if (kategori.value == 'Cuci Sepatu ') {
    hargalaundry = 35000;
    jumlahukuran = ukuran.value;

    harga.value = jumlahukuran * hargalaundry;
  } else if (kategori.value == 'Cuci Selimut') {
    hargalaundry = 50000;
    jumlahukuran = ukuran.value;

    harga.value = jumlahukuran * hargalaundry;
  } else if (kategori.value == 'Setrika Kiloan') {
    hargalaundry = 15000;
    jumlahukuran = ukuran.value;

    harga.value = jumlahukuran * hargalaundry;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Fungsi untuk menghilangkan splash screen setelah beberapa detik (misal: 3 detik)
  setTimeout(function () {
    document.getElementById('splashScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
  }, 3000); // Ubah angka 3000 (dalam milidetik) sesuai kebutuhan
});


function allData() {
  table.innerHTML = ``;
  contactList = JSON.parse(localStorage.getItem('listItem')) ?? [];
  contactList.forEach(function (value, i) {
    var table = document.getElementById('table');

    table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${value.name}</td>
                <td>${value.age}</td>
                <td>${value.address}</td>
                <td>${value.phone}</td>
                <td>${value.kategori}</td>
                <td>${value.ukuran}</td>
                <td>${value.harga}</td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`;
  });
}

function save() {
  contactList = JSON.parse(localStorage.getItem('listItem')) ?? [];

  var id;
  contactList.length != 0 ? contactList.findLast((item) => (id = item.id)) : (id = 0);

  if (document.getElementById('id').value) {
    contactList.forEach((value) => {
      if (document.getElementById('id').value == value.id) {
        (value.name = document.getElementById('name').value),
          (value.age = document.getElementById('age').value),
          (value.address = document.getElementById('address').value),
          (value.phone = document.getElementById('phone').value),
          (value.kategori = document.getElementById('kategori').value),
          (value.ukuran = document.getElementById('ukuran').value),
          (value.harga = document.getElementById('harga').value);
      }
    });

    document.getElementById('id').value = '';
  } else {
    var item = {
      id: id + 1,
      name: document.getElementById('name').value,
      age: document.getElementById('age').value,
      address: document.getElementById('address').value,
      phone: document.getElementById('phone').value,
      kategori: document.getElementById('kategori').value,
      ukuran: document.getElementById('ukuran').value,
      harga: document.getElementById('harga').value,
    };

    contactList.push(item);
  }

  localStorage.setItem('listItem', JSON.stringify(contactList));

  allData();
  document.getElementById('form').reset();
}
function find(id) {
  contactList = JSON.parse(localStorage.getItem('listItem')) ?? [];
  contactList.forEach(function (value) {
    if (value.id == id) {
      document.getElementById('id').value = value.id;
      document.getElementById('name').value = value.name;
      document.getElementById('age').value = value.age;
      document.getElementById('address').value = value.address;
      document.getElementById('phone').value = value.phone;
      document.getElementById('kategori').value = value.kategori;
      document.getElementById('ukuran').value = value.ukuran;
      document.getElementById('harga').value = value.harga;
    }
  });
}
function removeData(id) {
  contactList = JSON.parse(localStorage.getItem('listItem')) ?? [];
  contactList = contactList.filter(function (value) {
    return value.id != id;
  });

  localStorage.setItem('listItem', JSON.stringify(contactList));
  allData();
}
