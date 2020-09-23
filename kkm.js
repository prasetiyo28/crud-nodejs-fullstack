const gradCheck = (nilai) => {
    let cekLulus = "Lulus"
    if (nilai < 65) {
        cekLulus = "Tidak Lulus !"
    }

    console.log(cekLulus);
}

gradCheck(65);

