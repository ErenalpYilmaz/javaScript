# Weekday Warrior App

Bu proje, haftanın gününe göre kullanıcıya motive edici veya eğlenceli bir mesaj gösteren basit bir Express.js uygulamasıdır.

---

## İçindekiler

1. [Proje Hakkında](#proje-hakkında)
2. [Özellikler](#özellikler)
3. [Kurulum](#kurulum)
4. [Kullanım](#kullanım)
5. [Dosya Yapısı](#dosya-yapısı)
6. [Teknolojiler](#teknolojiler)
7. [Katkıda Bulunma](#katkıda-bulunma)
8. [Lisans](#lisans)

---

## Proje Hakkında

- Bu uygulama, haftanın hangi günü olduğuna göre farklı mesajlar gösterir.
- Hafta içi: "It's time to work hard"
- Hafta sonu: "It's time to have some fun"
- Mesajlar, bir EJS şablonu aracılığıyla tarayıcıya render edilir.

---

## Özellikler

- Haftanın gününe göre koşullu mesaj
- EJS ile dinamik sayfa render
- Basit ve minimal frontend

---

## Kurulum

1. **Önkoşullar**
   - Node.js ve npm kurulu olmalıdır.

2. **Projeyi Klonlayın**
   ```bash
   git clone <repository_url>
   cd <proje_klasörü>
   ```

3. **Bağımlılıkları Yükleyin**
   ```bash
   npm install
   ```

---

## Kullanım

1. **Sunucuyu Başlatın**
   ```bash
   node index.js
   ```

2. **Tarayıcıdan Erişin**
   - `http://localhost:3000`

---

## Dosya Yapısı

```
├── index.js         # Sunucu ve routing kodları
├── package.json     # Bağımlılıklar
└── views
    └── index.ejs    # Dinamik HTML şablonu
```

---

## Teknolojiler

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/) - HTML templating

---

## Katkıda Bulunma

- Fork yaparak katkıda bulunabilirsiniz.
- Değişikliklerinizi pull request ile gönderebilirsiniz.

---

## Lisans

Bu proje MIT lisansı altındadır. Daha fazla bilgi için `LICENSE` dosyasına bakabilirsiniz.