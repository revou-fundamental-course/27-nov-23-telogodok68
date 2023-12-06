function toggleInputs(operation) {
    const luasInput = document.getElementById("luas-input");
    const kelilingInput = document.getElementById("keliling-input");

    luasInput.style.display = operation === "luas" ? "block" : "none";
    kelilingInput.style.display = operation === "keliling" ? "block" : "none";
}

function calculate() {
    const operation = document.getElementById("luas-input").style.display === "block" ? "luas" : "keliling";
    const resultDiv = document.getElementById("result");

    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const sisi1 = parseFloat(document.getElementById("sisi1").value);
    const sisi2 = parseFloat(document.getElementById("sisi2").value);
    const sisi3 = parseFloat(document.getElementById("sisi3").value);

    let result;

    switch (operation) {
        case "luas":

            result = `<p>Luas : 1/2 * alas * tinggi </p>`;
            result += `<p>Luas : 1/2 * ${alas} * ${tinggi} </p>`;
            result += `<p>Luas : ${0.5 * alas * tinggi} </p>`;

            break;
        case "keliling":

            result = `<p>Keliling : sisi a + sisi b + sisi c </p>`;
            result += `<p>Keliling : ${sisi1} + ${sisi2} + ${sisi3} </p>`;
            result += `<p>Keliling : ${sisi1 + sisi2 + sisi3}</p>`;

            break;
        default:
            result = "Pilih operasi terlebih dahulu";
    }

    resultDiv.innerHTML = `<strong>${result}</strong>`;
}

function resetForm() {
    document.getElementById("luas-input").style.display = "none";
    document.getElementById("keliling-input").style.display = "none";

    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("sisi1").value = "";
    document.getElementById("sisi2").value = "";
    document.getElementById("sisi3").value = "";

    resetResult(); // Panggil fungsi resetResult untuk mereset hasil
}

function resetResult() {
    document.getElementById("result").innerHTML = "";
}