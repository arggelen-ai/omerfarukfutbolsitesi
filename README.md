# ⚽ Football Pro | Veri Odaklı Futbol Portalı

Bu proje, modern web teknolojileri ve Python veri kazıma (web scraping) teknikleri kullanılarak geliştirilmiş, dinamik bir futbol bilgi portalıdır. Projenin temel amacı, verilerin manuel girişine gerek kalmadan otomatik olarak güncellendiği bir sistem kurgulamaktır.

## 🚀 Öne Çıkan Özellikler
- **Dinamik Veri Akışı:** Puan durumu ve haberler, Python scripti tarafından otomatik olarak güncellenir.
- **Veri Görselleştirme:** Chart.js kütüphanesi kullanılarak oyuncu performansları radar grafiklerle analiz edilir.
- **Gelişmiş Galeri:** Maç fotoğrafları için interaktif ve slider özellikli fotoğraf galerisi.
- **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlarla tam uyumlu arayüz.

## 🛠️ Kullanılan Teknolojiler
- **Frontend:** HTML5, CSS3 (Flexbox & Grid), JavaScript (ES6+), Chart.js
- **Backend/Automation:** Python 3.x, BeautifulSoup4, Requests
- **Veri Formatı:** JSON (Veri iletimi için veri tabanı görevi görür)
- **CI/CD:** GitHub Actions (Otomatik veri güncelleme planlayıcısı)

## 📊 Çalışma Mantığı (Data Pipeline)
1. **Veri Çekme (Scraping):** `guncelle.py` scripti, spor sitelerinden güncel verileri çeker.
2. **Veri İşleme:** Ham veriler temizlenir ve `veriler.json` dosyasına yazılır.
3. **Veri Sunumu:** JavaScript `fetch()` API'si ile JSON dosyasındaki verileri anlık olarak HTML tablolarına basar.

## 💻 Yerel Çalıştırma
1. Bu depoyu klonlayın.
2. Python bağımlılıklarını yükleyin: `pip install requests beautifulsoup4`
3. Verileri güncellemek için: `python guncelle.py`
4. Web sitesini görüntülemek için herhangi bir yerel sunucu (örn: Live Server) kullanın.

---
**Hazırlayan:** [Adın Soyadın] - Veri Bilimi ve Analitiği Bölümü 1. Sınıf Öğrencisi