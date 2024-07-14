
document.getElementById('kodam').addEventListener('submit', function (e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const khodam = generateKhodam(nama);
    document.getElementById('hasil').innerHTML = `<p>Khodam yang bersemayam dalam diri ${nama} adalah ${khodam}</p>`;
    document.getElementById('nama').value = "";

    if (nama == '') {
        alert('Nama Harus Diisi!!!')
        document.getElementById('hasil').innerHTML = ``
        return
    }
})

function generateKhodam(nama) {
    const khodams = [
        'Kosong',
        'Ban Tubles',
        'Decul',
        'Rx King',
        'CBR Lecet',
        'Kuda Jantan',
        'Buah Naga',
        'Singa Senyum',
        'Naga Guling',
        'Macan Tersenyum',
        'Elang Ganteng',
        'Kuda Bersemangat',
        'Kelinci Gemas',
        'Tikus Imut',
        'Gajah Gembira',
        'Kucing Menggemaskan',
        'Anjing Setia',
        'Katak Ceria',
        'Kura-Kura Tangguh',
    ];

    const index = nama.length % khodams.length;
    return khodams[index];
}