
document.addEventListener('DOMContentLoaded', function() {
    
    // Tema Değiştirme İşlemi
    const btnTema = document.getElementById('btnTema');
    const htmlElement = document.documentElement; // <html> etiketine erişim

    btnTema.addEventListener('click', function() {
        const mevcutTema = htmlElement.getAttribute('data-bs-theme');
        
        if (mevcutTema === 'light') {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            btnTema.textContent = 'Açık Temaya Geç';
            btnTema.classList.remove('btn-outline-dark');
            btnTema.classList.add('btn-outline-light');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            btnTema.textContent = 'Koyu Temaya Geç';
            btnTema.classList.remove('btn-outline-light');
            btnTema.classList.add('btn-outline-dark');
        }
    });

    // Form İşlemleri
    const form = document.getElementById('kayitFormu');
    const formUyari = document.getElementById('formUyari');
    const sonucAlani = document.getElementById('sonucAlani');
    const btnTemizle = document.getElementById('btnTemizle');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Sayfanın yenilenmesini engeller

        // Değerleri al
        const adSoyad = document.getElementById('adSoyad').value.trim();
        const eposta = document.getElementById('eposta').value.trim();
        const bolum = document.getElementById('bolum').value.trim();
        const sinif = document.getElementById('sinif').value;
        const oturum = document.getElementById('oturum').value;
        const katilim = document.getElementById('katilim').value;
        const mesaj = document.getElementById('mesaj').value.trim();
        const onay = document.getElementById('onay').checked;

        // Boş alan kontrolü
        if (!adSoyad || !eposta || !bolum || !sinif || !oturum || !katilim || !onay) {
            formUyari.classList.remove('d-none'); // Uyarıyı göster
            return; // İşlemi durdur
        }

        // Hata yoksa uyarıyı gizle
        formUyari.classList.add('d-none');

        // Özet HTML'i oluştur
        const ozetHTML = `
            <div class="card border-success shadow-sm text-start">
                <div class="card-header bg-success text-white">
                    <h4 class="mb-0"><i class="bi bi-check-circle"></i> Başvuru Başarıyla Alındı!</h4>
                </div>
                <div class="card-body">
                    <h5 class="card-title text-success">Sayın ${adSoyad},</h5>
                    <p class="card-text"><strong>${oturum}</strong> etkinliği için <strong>${katilim}</strong> katılım talebiniz alınmıştır.</p>
                    <hr>
                    <div class="row">
                        <div class="col-sm-6">
                            <ul class="list-unstyled mb-0">
                                <li><strong>E-posta:</strong> ${eposta}</li>
                                <li><strong>Bölüm:</strong> ${bolum}</li>
                                <li><strong>Sınıf:</strong> ${sinif}</li>
                            </ul>
                        </div>
                        <div class="col-sm-6">
                            <div class="p-2 bg-light rounded h-100 text-dark">
                                <strong>Mesajınız:</strong><br>
                                ${mesaj ? mesaj : '<em>Mesaj bırakılmadı.</em>'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Sonuç alanına yazdır ve sınıfını güncelle (tasarımı iyileştirmek için)
        sonucAlani.innerHTML = ozetHTML;
        sonucAlani.className = "mt-4"; // Alert görünümünden standart dive geçir
        
        // Forma odaklanmayı kaldırıp sonuca kaydır (UX iyileştirmesi)
        document.getElementById('sonuc').scrollIntoView({ behavior: 'smooth' });
    });

    // Formu temizle butonuna basınca sonuç alanını ve uyarıları da sıfırla
    btnTemizle.addEventListener('click', function() {
        formUyari.classList.add('d-none');
        sonucAlani.className = "alert alert-info rounded-4 p-4 text-center";
        sonucAlani.innerHTML = "Henüz başvuru özeti oluşturulmadı. Formu doldurduktan sonra sonuç burada görünecek.";
    });
});