// Öğrenci Not Hesaplama JavaScript Kodları
function hesaplaNot() {
    const adSoyad = document.getElementById("adSoyad").value;
    const vize = parseFloat(document.getElementById("vizeNotu").value);
    const final = parseFloat(document.getElementById("finalNotu").value);
    const sonucDiv = document.getElementById("sonucNot");

    if (!adSoyad || isNaN(vize) || isNaN(final)) {
        alert("Lütfen tüm alanları geçerli bir şekilde doldurunuz.");
        return;
    }

    // Ortalama hesaplama (Vize %40, Final %60)
    const ortalama = (vize * 0.4) + (final * 0.6);
    
    // Durum belirleme (>=50 Geçti)
    const durum = ortalama >= 50 ? "Geçti" : "Kaldı";

    // Harf Notu belirleme (Görseldeki 60 -> CB eşleşmesine göre tahmini skala)
    let harfNotu = "";
    if (ortalama >= 90) harfNotu = "AA";
    else if (ortalama >= 80) harfNotu = "BA";
    else if (ortalama >= 70) harfNotu = "BB";
    else if (ortalama >= 60) harfNotu = "CB";
    else if (ortalama >= 50) harfNotu = "CC";
    else harfNotu = "FF";

    // Sonucu Ekrana Yazdırma
    sonucDiv.style.display = "block";
    sonucDiv.innerHTML = `
        <strong>${adSoyad}</strong><br><br>
        Ortalama: ${ortalama.toFixed(2)}<br>
        Harf Notu: ${harfNotu}<br>
        Durum: ${durum}
    `;
}
