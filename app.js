const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const toxy = require('toxy');
const poisons = toxy.poisons;
const axios = require('axios');

const app = express();
const port = 3000;
let proxyPort = 3001; // İlk proxy portu

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/analyze', async (req, res) => {
    const targetUrl = req.body.url;
    const chaosType = req.body.chaosType;
    let results = [];

    const proxy = toxy().forward(targetUrl);

    switch (chaosType) {
        case 'latency':
            proxy.poison(poisons.latency({ min: 1000, max: 3000 }));
            break;
        case 'abort':
            proxy.poison(poisons.abort());
            break;
        case 'slowRead':
            proxy.poison(poisons.slowRead({ bps: 500 }));
            break;
        case 'injectError':
            proxy.poison(poisons.inject({ code: 500, body: 'Internal Server Error' }));
            break;
        default:
            break;
    }

    proxy.all('/*');
    proxy.listen(proxyPort, async () => {
        console.log(`Toxy proxy running on port ${proxyPort}, targeting ${targetUrl} with ${chaosType} chaos`);

        if (chaosType === 'latency') {
            // Gerçek verilerle istek yap ve sonuçları kaydet
            for (let i = 0; i < 10; i++) {
                try {
                    const start = Date.now();
                    await axios.get(`http://localhost:${proxyPort}`);
                    const end = Date.now();
                    const responseTime = end - start;
                    console.log(`Request ${i + 1}: ${responseTime} ms`); // Konsol çıktısı
                    results.push({ request: i + 1, responseTime });
                } catch (error) {
                    console.log(`Request ${i + 1}: error`); // Konsol çıktısı
                    results.push({ request: i + 1, responseTime: 'error' });
                }
            }
        } else {
            // Diğer kaos türleri için sadece error döndür
            for (let i = 0; i < 10; i++) {
                results.push({ request: i + 1, responseTime: 'error' });
            }
        }

        console.log(results); // Toplanan verileri konsola yazdır
        res.render('results', { targetUrl, chaosType, proxyPort, results });
        proxyPort++; // Bir sonraki proxy için portu artır
    });
    
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
