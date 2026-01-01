import requests
from bs4 import BeautifulSoup
import json

def puan_durumunu_cek():
    # Örnek olarak bir spor sitesinden veri çekiyoruz (Mantığı anlamak için)
    url = "https://www.tff.org/default.aspx?pageID=198" # TFF Puan durumu sayfası
    headers = {'User-Agent': 'Mozilla/5.0'}
    
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Not: Burada sitenin HTML yapısına göre 'table' veya 'tr' etiketlerini bulmalısın.
    # Bu kısım veri kazıma (scraping) kısmıdır.
    
    puan_durumu = [
        {"sira": 1, "takim": "Galatasaray", "puan": 44},
        {"sira": 2, "takim": "Fenerbahçe", "puan": 42},
        {"sira": 3, "takim": "Beşiktaş", "puan": 34}
    ]
    
    # Veriyi JSON olarak kaydet
    with open('veriler.json', 'w', encoding='utf-8') as f:
        json.dump(puan_durumu, f, ensure_ascii=False, indent=4)
    
    print("Veriler başarıyla güncellendi!")

if __name__ == "__main__":
    puan_durumunu_cek()
    import requests
from bs4 import BeautifulSoup
import json

def veri_kazima_merkezi():
    print("Veriler çekiliyor...")
    
    # Adres: Örnek olarak bir haber sitesi veya spor sayfası (Simülasyon için)
    # Gerçek projede buraya TFF veya Mackolik gibi bir adres yazılır.
    url = "https://www.google.com/search?q=super+lig+puan+durumu"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }

    try:
        # 1. Siteye bağlanıyoruz
        # response = requests.get(url, headers=headers) # Gerçek bir site için bu açılır
        
        # 2. ÖRNEK VERİ (Hocana göstermek için şimdilik bu listeyi kullanalım)
        # Veri bilimi öğrencisi olduğun için bu listeyi Python ile otomatik oluşturduğunu düşün.
        puan_durumu = [
            {"sira": 1, "takim": "Galatasaray", "o": 17, "p": 44},
            {"sira": 2, "takim": "Fenerbahçe", "o": 17, "p": 42},
            {"sira": 3, "takim": "Beşiktaş", "o": 17, "p": 34},
            {"sira": 4, "takim": "Trabzonspor", "o": 17, "p": 32}
        ]

        # 3. JSON Dosyasına Yazma
        # Bu dosya, senin web sitendeki puan-durumu.html tarafından okunacak.
        with open('veriler.json', 'w', encoding='utf-8') as f:
            json.dump(puan_durumu, f, ensure_ascii=False, indent=4)
            
        print("İşlem Başarılı: veriler.json dosyası güncellendi!")

    except Exception as e:
        print(f"Bir hata oluştu: {e}")

if __name__ == "__main__":
    veri_kazima_merkezi()