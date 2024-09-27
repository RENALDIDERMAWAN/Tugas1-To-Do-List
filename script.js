document.getElementById('simpan-data').addEventListener('click', function() {
    const input = document.getElementById('input-nama');
    const nama = input.value.trim();

    if (nama === "") {
        alert("Tidak Ada Inputan.");
        return;
    }

    
    const li = document.createElement('li');
    li.textContent = nama;

    const tombolhapus = document.createElement('button');
    tombolhapus.textContent = "Hapus";
    tombolhapus.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(tombolhapus);
    document.getElementById('list-nama').appendChild(li);

    input.value = "";
});
