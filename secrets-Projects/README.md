# Secrets App

Bu proje, eğlence amaçlı geliştirdiğim basit bir backend uygulamasıdır. Kullanıcıdan alınan şifreyi kontrol ederek gizli bir sayfaya yönlendirme yapar.

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

- Web tabanlı, basit bir "Secrets" (Gizli Mesajlar) uygulamasıdır.
- `index.html` sayfasında kullanıcıdan bir şifre alır.
- Girilen şifre doğrulanır ve doğru ise `secret.html` sayfasına yönlendirme yapılır, yanlış ise ana sayfaya geri yönlendirilir.
- Şifre: `ILoveProgramming`

---

## Özellikler

- Form üzerinden şifre girişi.
- Backend tarafında şifre kontrolü.
- Başarılı girişte gizli içeriğin görüntülenmesi.
- Yanlış şifrede ana sayfaya yönlendirme.

---

## Kurulum

1. **Önkoşullar**
   - Node.js v14+ ve npm yüklü olmalıdır.

2. **Depoyu klonlama**
   ```bash
   git clone <repository_url>
   cd <repository_klasörü>
   ```

3. **Bağımlılıkların yüklenmesi**
   ```bash
   npm install
   ```

---

## Kullanım

1. **Sunucuyu başlatma**
   ```bash
   node index.js
   ```

2. **Tarayıcıdan erişim**
   - `http://localhost:3000` adresine gidin.

3. **Şifre Girme**
   - Şifre alanına `ILoveProgramming` girin.
   - Doğru girildiğinde gizli tavsiyelerin olduğu sayfa açılacaktır.
   - Yanlış girildiğinde tekrar ana sayfaya yönlendirilirsiniz.

---

## Dosya Yapısı

```
├── index.js        # Express sunucusu ve şifre kontrol logic'i
├── package.json    # Proje bağımlılıkları ve komutlar
└── public
    ├── index.html  # Ana sayfa (şifre formu)
    └── secret.html # Şifre doğruysa gösterilen gizli içerik
```

---

## Teknolojiler

- [Node.js](https://nodejs.org/) - Sunucu tarafı JavaScript runtime
- [Express](https://expressjs.com/) - Web framework
- [body-parser](https://www.npmjs.com/package/body-parser) - Form verilerini ayrıştırma

---

## Katkıda Bulunma

- Fork yaparak ve yeni bir branch açarak katkıda bulunabilirsiniz.
- Pull request gönderirken değişikliklerinizi açıklayan bir açıklama eklemeyi unutmayın.

---

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Ayrıntılar için `LICENSE` dosyasına bakabilirsiniz.

