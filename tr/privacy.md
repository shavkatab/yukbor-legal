---
title: KargoFly Gizlilik Politikası
permalink: /tr/privacy/
lang: tr
---

[Русский](../../privacy/) · [O‘zbekcha](../../uz/privacy/) · **Türkçe**

_Sürüm tarihi: 20 Ekim 2026_

KargoFly, gönderi göndermek isteyenlerin Türkiye ile Özbekistan arasında uçan yolcuları bulmasına yardımcı olan bir mobil uygulamadır. Bu politika hangi verileri topladığımızı, neden topladığımızı, bunları kimlerin gördüğünü ve nasıl silebileceğinizi açıklar.

**Veri sorumlusu:** Shavkat Abdiyev (bağımsız geliştirici), Özbekistan.
**Verilerle ilgili iletişim:** shabdiyev@gmail.com

## 1. Hangi verileri topluyoruz

| Veri | Kaynağı | Amacı |
|---|---|---|
| Ad, e-posta, Apple veya Google hesap kimliği | Apple / Google ile giriş yaptığınızda | hesap oluşturmak ve hesaba giriş yapmak |
| Telefon numarası | siz girer ve 6 haneli kodla doğrularsınız | anlaşma onaylandıktan sonra tarafların iletişim kurması, sahte hesaplara karşı koruma |
| Pasaportun fotoğraflı sayfası ve pasaportla selfie | uygulamadaki kamerayla çekersiniz (galeriden seçilemez) | kimliğinizin moderatör tarafından doğrulanması |
| İlanlar: yolculuklar ve gönderiler (şehirler, tarihler, ağırlık, fiyat, açıklama, gönderi fotoğrafları) | siz yayınlarsınız | ilanı diğer kullanıcılara göstermek |
| Anlaşmalar, sohbet mesajları, yorumlar, şikâyetler, engellemeler | uygulamadaki işlemleriniz | anlaşmanın yürütülmesi, topluluğun güvenliği |
| Anlaşma sohbetindeki fotoğraflar | kendiniz gönderirsiniz: kamerayla çeker veya galeriden seçersiniz | anlaşmanın diğer tarafıyla fotoğraf paylaşmak |
| Konum — anlaşma sohbetine gönderdiğiniz nokta | yalnızca “Konum gönder” düğmesine kendiniz bastığınızda | buluşma yerinde anlaşmak |
| Anlık bildirim (push) token'ı, uygulama dili | cihazınızdan | bildirimleri kendi dilinizde göndermek |
| Sunucunun teknik kayıtları (IP adresi, istek zamanı) | otomatik olarak | güvenlik ve hataların giderilmesi |

Konumunuzu arka planda **toplamayız** ve siz düğmeye basmadan belirlemeyiz; telefon rehberinizi okumayız, ödeme bilgisi toplamayız, reklam kimlikleri, analiz ve çökme raporlama araçları kullanmayız. Teslimat ücreti uygulama dışında ödenir.

### Telefon numarası ve doğrulama kodu

İlan yayınlamak ve yanıt vermek için telefon numaranızı doğrulamanız gerekir. 6 haneli kodu Telegram Gateway üzerinden (Telegram mesajı olarak) göndeririz; bu başarısız olursa veya SMS isterseniz Eskiz SMS hizmeti üzerinden göndeririz. Bunun için onlara telefon numaranızı, kodu içeren metni ve SMS için mesajın dilini iletiriz. Kodun kendisini yalnızca geri döndürülemez bir özet (hash) olarak saklarız; kod 5 dakika geçerlidir.

### Pasaport fotoğrafı ve selfie

- Fotoğraflar yalnızca moderatörün gerçek bir kişi olduğunuzdan ve belgenin size ait olduğundan emin olması için gereklidir. Otomatik yüz veya belge tanıma yoktur; pasaport bilgilerini veritabanına aktarmayız.
- Fotoğraflar erişime kapalı bir dosya deposunda saklanır ve yalnızca en fazla 10 dakika geçerli geçici bir bağlantıyla açılabilir. Moderatörün Telegram botuna adınız, telefon numaranız ve böyle bir bağlantı gelir — fotoğrafların kendisi Telegram'a gönderilmez.
- Doğrulama reddedilirse fotoğraflar hemen silinir. Çektiğiniz ama doğrulamaya göndermediğiniz fotoğraflar yaklaşık bir saat sonra silinir. Onaylanan fotoğraflar hesabınız var olduğu sürece saklanır ve hesap silindiğinde silinir.

### Sohbette konum

Konum yalnızca anlaşma sohbetine gönderilebilir: “Şu an neredeyim” ya da haritada seçilen buluşma noktası. Uygulama konum iznini, uygulamayı tanıtan ilk ekranlardaki isteğe bağlı adımda veya düğmeye bastığınız anda ister; konum yalnızca uygulama açıkken kullanılır. Gönderilen noktayı yalnızca o anlaşmanın diğer tarafı görür. Arka planda konum takibi yoktur. Buluşma yerini seçmek için haritayı Android'de Google Maps (Google LLC), iPhone'da Apple Maps gösterir — bkz. Bölüm 2.

### Sohbette fotoğraflar

- Fotoğraf yalnızca anlaşma sohbetine gönderilebilir: kamerayla çekilerek veya galeriden seçilerek. Uygulama, yüklemeden önce fotoğrafı küçültür ve çekildiği yer dahil meta verilerini (EXIF) siler.
- Fotoğraflar erişime kapalı bir dosya deposunda saklanır. Onları yalnızca anlaşmanın iki tarafı, en fazla 10 dakika geçerli geçici bir bağlantıyla görür. Anlaşma, gönderi yolcuya teslim edilmeden önce reddedilir veya iptal edilirse fotoğraflar sohbetle birlikte gizlenir.
- Bir fotoğraf şikâyet edilirse moderatörün Telegram botuna yalnızca o fotoğrafa ait, 10 dakika geçerli bir bağlantı gelir. Fotoğrafın kendisi Telegram'a gönderilmez; moderatör sohbetteki diğer mesajları görmez.
- Fotoğraf bildiriminde yalnızca “📷 Fotoğraf” yazısı görünür, fotoğrafın kendisi görünmez.
- Gönderilen fotoğraflar, gönderenin hesabı var olduğu sürece saklanır ve hesap silindiğinde silinir. Yüklediğiniz ama göndermediğiniz fotoğraflar yaklaşık bir saat sonra otomatik olarak silinir.

## 2. Verilerinizi kimler görür

- **Anlaşma onaylanmadan önce diğer kullanıcılar** yalnızca rolünüzü (“Yolcu” / “Gönderici”), puanınızı, anlaşma sayınızı, doğrulama işaretini ve ilanın gönderi fotoğrafları olmadan içeriğini görür.
- **Anlaşmanın diğer tarafı**, yanıt kabul edildikten sonra adınızı, profil fotoğrafınızı ve telefon numaranızı görür. Yolcu gönderi fotoğraflarını, gönderici ona bu gönderiyle bir talep gönderdiğinde veya yanıt kabul edildiğinde görür. Sohbet mesajlarını, sohbetteki fotoğrafları ve gönderilen konumu yalnızca anlaşmanın iki tarafı görür. Anlaşma, gönderi yolcuya teslim edilmeden önce reddedilir veya iptal edilirse ad, telefon numarası, gönderi fotoğrafları ve sohbet (fotoğraflarla birlikte) yeniden gizlenir.
- **Moderatör** adınızı, telefon numaranızı, pasaport fotoğrafınızı ve selfie'nizi görür — fotoğrafları yalnızca 10 dakika geçerli bir bağlantıyla. Sohbetteki bir fotoğraf şikâyet edildiğinde moderatör yalnızca o fotoğraf için aynı şekilde 10 dakikalık bir bağlantı alır.
- **Verileri bizim adımıza işleyen hizmet sağlayıcılar:**
  - sunucu, veritabanı ve dosya deposu barındırma — Railway;
  - anlık bildirimlerin iletilmesi — Expo Push Service, Android için Firebase Cloud Messaging (Google), iPhone için Apple Push Notification service; bunlar cihaz token'ını ve bildirim metnini alır (sohbet mesajlarında mesajın başı, fotoğraflarda fotoğrafın kendisi olmadan yalnızca “📷 Fotoğraf”);
  - doğrulama kodlarının gönderilmesi — Telegram Gateway, Eskiz;
  - moderatörün Telegram botu — Telegram;
  - giriş — Apple, Google;
  - sohbette buluşma yeri seçerken haritanın gösterilmesi — Android'de Google Maps (Google LLC), iPhone'da Apple Maps: onlara adınızı, telefon numaranızı ve mesajlarınızı iletmeyiz; haritayı göstermek için cihazdan haritanın görüntülenen alanını, IP adresini ve cihazla ilgili teknik bilgileri alır ve bunları kendi gizlilik politikalarına göre işlerler.

Verileri satmayız ve reklam ağlarına aktarmayız.

## 3. Veriler nerede ve ne kadar süre saklanır

Veriler, yukarıda belirtilen hizmet sağlayıcıların sunucularında, Özbekistan ve Türkiye dışında da saklanır. Verileri hesabınız var olduğu sürece saklarız. Sunucu kayıtları en fazla 30 gün saklanır. Pasaport fotoğrafı, selfie ve sohbet fotoğraflarının saklama süreleri Bölüm 1'de yer alır.

## 4. Hesabın silinmesi

Uygulamada: **Profil → Hesabı sil**. Profilinizi, telefon numaranızı, pasaport fotoğrafınızı ve selfie'nizi, gönderi fotoğraflarını, ilanları ve mesajları (gönderilen konum ve sohbetlerdeki fotoğraflarla birlikte — hem gönderilmiş hem de yüklenip gönderilmemiş olanlar) sileriz. Diğer kullanıcılar hakkında yazdığınız yorumlar kalır, ancak adınız olmadan. Devam eden bir anlaşmanız varken (yanıt kabul edilmiş veya gönderi yolcuya teslim edilmişse) hesap silinemez — önce anlaşmayı tamamlayın veya iptal edin. Hesabınızı, hesaba bağlı e-posta adresinizden shabdiyev@gmail.com adresine yazarak da sildirebilirsiniz; bu en fazla 30 gün sürer.

## 5. Yaş sınırı

Uygulama 18 yaşından büyükler için tasarlanmıştır.

## 6. Değişiklikler

Politikadaki önemli değişiklikleri uygulama içinde duyururuz. Son sürümün tarihi belgenin başında yer alır.
