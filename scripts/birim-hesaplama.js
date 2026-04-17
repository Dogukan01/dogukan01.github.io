// Birim Dönüştürücü JavaScript Kodları
function hesaplaBirim() {
    const deger = parseFloat(document.getElementById("degerInput").value);
    const tip = document.getElementById("donusumTipi").value;
    const sonucDiv = document.getElementById("sonucBirim");

    if (isNaN(deger)) {
        alert("Lütfen dönüştürülecek bir sayı giriniz.");
        return;
    }

    let sonuc = 0;

    switch (tip) {
        case "m_km":
            sonuc = deger / 1000;
            break;
        case "c_f":
            sonuc = (deger * 9/5) + 32;
            break;
        case "kg_g":
            sonuc = deger * 1000;
            break;
    }

    // Sonucu ekrana yazdırma
    sonucDiv.style.display = "block";
    
    // Sayıyı görseldeki gibi formatlı (örneğin 50000 yerine 50.000) yazdırmak için
    let formatliSonuc = (tip === "kg_g") ? sonuc.toLocaleString('tr-TR') : sonuc;
    
    sonucDiv.innerHTML = `<strong>Sonuç: ${formatliSonuc}</strong>`;
}