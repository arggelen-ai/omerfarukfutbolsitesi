// Eğer skor 2-1 ise bir uyarı ver
let skor = "2-1";
if (skor === "2-1") {
    console.log("Maç çok heyecanlı gidiyor!");
}
// 1. KRONOMETRE SİSTEMİ
let dakika = 0;
const dakikaElementi = document.getElementById('mac-dakika');

// Her 1 saniyede bir dakikayı artır (Gerçek maçta bu 60 saniyedir)
const macSayaci = setInterval(() => {
    dakika++;
    dakikaElementi.innerText = dakika;

    if (dakika >= 90) {
        clearInterval(macSayaci); // 90. dakikada durdur
        alert("Maç Bitti!");
    }
}, 1000); // 1000ms = 1 saniye


// 2. DİNAMİK SKOR SİSTEMİ
const skorElementi = document.getElementById('canli-skor');

function golOldu() {
    let evSahibi = Math.floor(Math.random() * 3); // 0-2 arası rastgele gol
    let deplasman = Math.floor(Math.random() * 3);
    
    // Skoru ekrana yaz ve bir efekt ver
    skorElementi.innerText = `${evSahibi} - ${deplasman}`;
    skorElementi.style.color = "#e74c3c"; // Gol olduğunda kırmızı yanar
    
    setTimeout(() => {
        skorElementi.style.color = "inherit"; // 2 saniye sonra normale döner
    }, 2000);
}

// Her 10 saniyede bir gol kontrolü yapıyormuş gibi simüle et
setInterval(golOldu, 10000);
// CHART.JS ANALİZ GRAFİĞİ
const ctx = document.getElementById('myRadarChart').getContext('2d');
const myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Gol', 'Asist', 'Hız', 'Şut', 'Pas', 'Fizik'],
        datasets: [{
            label: 'Victor Osimhen',
            data: [90, 45, 95, 88, 70, 92],
            fill: true,
            backgroundColor: 'rgba(46, 204, 113, 0.2)',
            borderColor: '#2ecc71',
            pointBackgroundColor: '#2ecc71',
        }, {
            label: 'Mauro Icardi',
            data: [95, 55, 75, 92, 85, 80],
            fill: true,
            backgroundColor: 'rgba(231, 76, 60, 0.2)',
            borderColor: '#e74c3c',
            pointBackgroundColor: '#e74c3c',
        }]
    },
    options: {
        elements: { line: { borderWidth: 3 } },
        scales: {
            r: {
                angleLines: { color: 'rgba(255,255,255,0.1)' },
                grid: { color: 'rgba(255,255,255,0.1)' },
                pointLabels: { color: '#f8fafc', font: { size: 12 } },
                ticks: { display: false }
            }
        },
        plugins: {
            legend: { labels: { color: '#f8fafc', font: { family: 'Poppins' } } }
        }
    }
});const formCtx = document.getElementById('formChart').getContext('2d');
new Chart(formCtx, {
    type: 'line',
    data: {
        labels: ['13.Hafta', '14.Hafta', '15.Hafta', '16.Hafta', '17.Hafta'],
        datasets: [{
            label: 'Galatasaray',
            data: [34, 37, 40, 41, 44],
            borderColor: '#2ecc71',
            tension: 0.4,
            fill: false
        }, {
            label: 'Fenerbahçe',
            label: 'Fenerbahçe',
            data: [33, 36, 36, 39, 42],
            borderColor: '#e74c3c',
            tension: 0.4,
            fill: false
        }]
    },
    options: {
        scales: {
            y: { ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,0.1)' } },
            x: { ticks: { color: '#fff' }, grid: { display: false } }
        },
        plugins: { legend: { labels: { color: '#fff' } } }
    }
});
function oyVer(takim) {
    const anketKutu = document.getElementById('anket-kart');
    anketKutu.innerHTML = `
        <h3>TEŞEKKÜRLER!</h3>
        <p>Oyunuz kaydedildi: <b>${takim}</b></p>
        <div style="margin-top:10px; font-size:0.8rem; opacity:0.7;">
            Toplam 1,248 kişi oy kullandı.
        </div>
    `;
}async function haberleriYukle() {
    try {
        // Not: Yerel bilgisayarda çalışırken tarayıcı güvenlikleri (CORS) nedeniyle 
        // bu kodun çalışması için bir canlı sunucu (Live Server) gerekebilir.
        const response = await fetch('veriler.json');
        const veriler = await response.json();
        console.log("Veriler başarıyla yüklendi:", veriler);
        // Burada verileri HTML içine döngü ile basabilirsin
    } catch (error) {
        console.log("Veri çekme hatası:", error);
    }
}
haberleriYukle();
// 5 saniye sonra bir gol bildirimi çıkar
setTimeout(() => {
    const bildirim = document.createElement('div');
    bildirim.className = 'bildirim';
    bildirim.innerHTML = '⚽ GOL HABERİ: Man City 1-0 Liverpool';
    document.body.appendChild(bildirim);
    
    setTimeout(() => bildirim.classList.add('aktif'), 100);
    setTimeout(() => bildirim.classList.remove('aktif'), 5000);
}, 5000);
async function tabloyuDoldur() {
    const response = await fetch('veriler.json');
    const veriler = await response.json();
    
    let tabloBody = document.querySelector("#puan-tablosu-body");
    tabloBody.innerHTML = ""; // Mevcut tabloyu temizle

    veriler.forEach(item => {
        tabloBody.innerHTML += `
            <tr>
                <td>${item.sira}</td>
                <td><b>${item.takim}</b></td>
                <td>${item.puan}</td>
            </tr>
        `;
    });
}
tabloyuDoldur();async function tabloyuGuncelle() {
    try {
        // 1. JSON dosyasını oku
        // Not: Yerel dosyada çalışırken tarayıcı güvenliği (CORS) nedeniyle 
        // bu kod bazen hata verebilir. İleride internete yüklediğimizde sorunsuz çalışacak.
        const response = await fetch('veriler.json');
        const veriler = await response.json();

        // 2. Tablonun içini bul ve temizle
        const tabloBody = document.getElementById('puan-tablosu-body');
        tabloBody.innerHTML = ""; 

        // 3. Her bir takımı tabloya satır olarak ekle
        veriler.forEach(item => {
            const satir = `
                <tr>
                    <td>${item.sira}</td>
                    <td><b>${item.takim}</b></td>
                    <td>${item.o}</td>
                    <td class="puan-vurgu">${item.p}</td>
                </tr>
            `;
            tabloBody.innerHTML += satir;
        });
    } catch (error) {
        console.error("Veri çekme hatası:", error);
        document.getElementById('puan-tablosu-body').innerHTML = "<tr><td colspan='4'>Veri yüklenemedi.</td></tr>";
    }
}

// Sayfa yüklendiğinde çalıştır
tabloyuGuncelle();