---
title: KargoFly Gizlilik Politikası
permalink: /tr/privacy/
lang: tr
---

[Русский](../../privacy/) · [O‘zbekcha](../../uz/privacy/) · **Türkçe**

_Sürüm tarihi: 8 Kasım 2026_

KargoFly, gönderi göndermek isteyenlerin Özbekistan ile diğer ülkeler — Türkiye, Rusya, Güney Kore, ABD, Çin, BAE, Kazakistan, Suudi Arabistan ve Almanya — arasında uçan yolcuları bulmasına yardımcı olan bir mobil uygulamadır. Bu politika hangi verileri topladığımızı, neden topladığımızı, bunları kimlerin gördüğünü ve nasıl silebileceğinizi açıklar.

**Veri sorumlusu:** Qmind (Shavkat Abdiyev, bireysel girişimci), Özbekistan.
**Verilerle ilgili iletişim:** info@kargofly.uz

## 1. Hangi verileri topluyoruz

| Veri | Kaynağı | Amacı |
|---|---|---|
| Ad, e-posta, Apple veya Google hesap kimliği | Apple / Google ile giriş yaptığınızda | hesap oluşturmak ve hesaba giriş yapmak |
| Telefon numarası | siz girer ve 6 haneli kodla doğrularsınız | anlaşma onaylandıktan sonra tarafların iletişim kurması, sahte hesaplara karşı koruma |
| Pasaportun fotoğraflı sayfası ve pasaportla selfie — isteğe bağlı | uygulamadaki kamerayla çekersiniz (galeriden seçilemez) | kimliğinizin moderatör tarafından doğrulanması ve profildeki “Pasaport doğrulandı” işareti |
| İlanlar: yolculuklar ve gönderiler (şehirler, tarihler, ağırlık, fiyat, açıklama, gönderi fotoğrafları) | siz yayınlarsınız | ilanı diğer kullanıcılara göstermek |
| Anlaşmalar, sohbet mesajları, yorumlar, şikâyetler, engellemeler | uygulamadaki işlemleriniz | anlaşmanın yürütülmesi, topluluğun güvenliği |
| Anlaşma sohbetindeki fotoğraflar | kendiniz gönderirsiniz: kamerayla çeker veya galeriden seçersiniz | anlaşmanın diğer tarafıyla fotoğraf paylaşmak |
| Konum — anlaşma sohbetine gönderdiğiniz nokta | yalnızca “Konum gönder” düğmesine kendiniz bastığınızda | buluşma yerinde anlaşmak |
| Anlık bildirim (push) token'ı, uygulama dili | cihazınızdan | bildirimleri kendi dilinizde göndermek |
| Sunucunun teknik kayıtları (IP adresi, istek zamanı) | otomatik olarak | güvenlik ve hataların giderilmesi |
| Çökme raporları ve tanılama verileri: çağrı yığını, cihaz modeli, işletim sistemi ve uygulama sürümü, çökme zamanı, hesabın dahili kimliği (ad, telefon numarası ve e-posta olmadan) | çökme anında otomatik olarak, yalnızca App Store ve Google Play'deki uygulama sürümlerinde | çökmeleri bulmak ve düzeltmek |

Konumunuzu arka planda **toplamayız** ve anlaşma sohbetine kendiniz gönderdiğiniz nokta dışında koordinatlarınızı almayız: şehri forma yerleştirmek için kullanılan konum telefonunuzda kalır. Telefon rehberinizi okumayız, ödeme bilgisi toplamayız, reklam kimlikleri ve analiz araçları kullanmayız. Uygulamanın çalışmasıyla ilgili bilgi toplayan hizmetlerden yalnızca Firebase Crashlytics'i çökme raporları için kullanırız (aşağıya bakın). Teslimat ücreti uygulama dışında ödenir.

### Telefon numarası ve doğrulama kodu

İlan yayınlamak ve yanıt vermek için telefon numaranızı doğrulamanız gerekir. Özbekistan'ın ve yukarıda sayılan dokuz güzergâh ülkesinin cep telefonu numaraları kabul edilir. 6 haneli kodu Telegram Gateway üzerinden (Telegram mesajı olarak) göndeririz; bu başarısız olursa veya SMS isterseniz Eskiz SMS hizmeti üzerinden göndeririz. Özbekistan dışındaki numaralara Eskiz uluslararası SMS gönderir. Çin numaralarına kod Telegram kullanılmadan doğrudan SMS ile gider, çünkü orada Telegram'a erişilemez. Bunun için onlara telefon numaranızı, kodu içeren metni ve SMS için mesajın dilini ve numaranın ülkesini iletiriz. Kodun kendisini yalnızca geri döndürülemez bir özet (hash) olarak saklarız; kod 5 dakika geçerlidir.

Uluslararası SMS ücretlidir; bu yüzden günlük sayısı hem hesap başına hem de uygulamanın tamamı için sınırlıdır. Bu sayım için Özbekistan dışındaki bir numaraya gönderilen her SMS'i kaydederiz: hesap kimliği, numaranın ülkesi ve gönderim zamanı. Bu kayıtta numaranın kendisi ve kod yer almaz. Telegram üzerinden gönderilen kodlar ve Özbekistan numaralarına giden SMS'ler bu sayıma girmez. Bu kayıtlar 30 gün saklanır, ardından silinir — hesap silinmiş olsa bile: bu süre dolana kadar kalırlar, ancak adınız, e-postanız ve telefon numaranızla bağlantıları kalmaz, çünkü bunlar hesap silinirken silinir.

### Pasaport fotoğrafı ve selfie

- Pasaport doğrulaması isteğe bağlıdır: ilan yayınlamak ve yanıt vermek için gerekmez, doğrulanmış bir telefon numarası yeterlidir. Doğrulamayı profilden yapabilirsiniz; onaylandıktan sonra profilinizde diğer kullanıcıların gördüğü “Pasaport doğrulandı” işareti çıkar.
- Fotoğraflar yalnızca moderatörün gerçek bir kişi olduğunuzdan ve belgenin size ait olduğundan emin olması için gereklidir. Otomatik yüz veya belge tanıma yoktur; pasaport bilgilerini veritabanına aktarmayız.
- Fotoğraflar erişime kapalı bir dosya deposunda saklanır ve yalnızca en fazla 10 dakika geçerli geçici bir bağlantıyla açılabilir. Moderatörün Telegram botuna adınız, telefon numaranız ve böyle bir bağlantı gelir — fotoğrafların kendisi Telegram'a gönderilmez.
- Doğrulama reddedilirse fotoğraflar hemen silinir. Çektiğiniz ama doğrulamaya göndermediğiniz fotoğraflar yaklaşık bir saat sonra silinir. Onaylanan fotoğraflar hesabınız var olduğu sürece saklanır ve hesap silindiğinde silinir.

### Konum

Uygulama konumu yalnızca açıkken ve yalnızca konum erişimine izin verdiyseniz kullanır. Uygulama konum iznini, uygulamayı tanıtan ilk ekranlardaki isteğe bağlı adımda, giriş yaptıktan sonra bir kez (bu adımı atladıysanız) veya sohbette “Konum gönder” düğmesine bastığınızda ister. Arka planda konum takibi yoktur.

- **Yolculuk veya gönderi formundaki şehir.** “Özbekistan'dan” yönünde bir yolculuk veya gönderi oluşturduğunuzda uygulama forma size en yakın Özbekistan şehrini yerleştirir. Şehir telefonunuzda hesaplanır, koordinatlar bize gönderilmez — sunucuya yalnızca ilanı yayınladığınız anda formda seçili olan şehir ulaşır. Şehri değiştirebilirsiniz; konum erişimi yoksa Taşkent yerleştirilir.
- **Anlaşma sohbeti.** Konum yalnızca anlaşma sohbetine gönderilebilir: “Şu an neredeyim” ya da haritada seçilen buluşma noktası. Gönderilen noktayı yalnızca o anlaşmanın diğer tarafı görür. Buluşma yerini seçmek için haritayı Android'de Google Maps (Google LLC), iPhone'da Apple Maps gösterir — bkz. Bölüm 2.

### Sohbette fotoğraflar

- Fotoğraf yalnızca anlaşma sohbetine gönderilebilir: kamerayla çekilerek veya galeriden seçilerek. Uygulama, yüklemeden önce fotoğrafı küçültür ve çekildiği yer dahil meta verilerini (EXIF) siler.
- Fotoğraflar erişime kapalı bir dosya deposunda saklanır. Onları yalnızca anlaşmanın iki tarafı, en fazla 10 dakika geçerli geçici bir bağlantıyla görür. Anlaşma, gönderi yolcuya teslim edilmeden önce reddedilir veya iptal edilirse fotoğraflar sohbetle birlikte gizlenir.
- Bir fotoğraf şikâyet edilirse moderatörün Telegram botuna yalnızca o fotoğrafa ait, 10 dakika geçerli bir bağlantı gelir. Fotoğrafın kendisi Telegram'a gönderilmez; moderatör sohbetteki diğer mesajları görmez.
- Fotoğraf bildiriminde yalnızca “📷 Fotoğraf” yazısı görünür, fotoğrafın kendisi görünmez.
- Gönderilen fotoğraflar, gönderenin hesabı var olduğu sürece saklanır ve hesap silindiğinde silinir. Yüklediğiniz ama göndermediğiniz fotoğraflar yaklaşık bir saat sonra otomatik olarak silinir.

### Çökme raporları

- Uygulama çökerse veya yakalanmamış bir hata oluşursa, çökme raporu Firebase Crashlytics'e gönderilir. Bu, raporu bizim adımıza işleyen bir Google LLC hizmetidir.
- Raporda şunlar bulunur: çağrı yığını (kodda hatanın oluştuğu yer), cihaz modeli, işletim sistemi ve uygulama sürümü, çökme zamanı, çökme anında cihazın durumuna ilişkin teknik bilgiler (örneğin boş bellek), uygulama kurulumunun teknik kimlikleri ve hesabınızın bizdeki dahili kimliği — ad, telefon numarası ve e-posta içermeyen rastgele bir kod. Mesaj metinleri, fotoğraflar, pasaport bilgileri ve koordinatlar raporlara girmez.
- Raporlar yalnızca çökmeleri bulmak ve düzeltmek için kullanılır; reklam veya davranış analizi için kullanılmaz.
- Raporlar yalnızca App Store ve Google Play'deki uygulama sürümlerinden gönderilir; test sürümlerinde toplama kapalıdır.
- Raporlar, ABD dahil Google sunucularında 90 gün saklanır, ardından silinir.

## 2. Verilerinizi kimler görür

- **Anlaşma onaylanmadan önce diğer kullanıcılar** yalnızca rolünüzü (“Yolcu” / “Gönderici”), puanınızı, anlaşma sayınızı, doğrulama işaretini ve ilanın gönderi fotoğrafları olmadan içeriğini görür.
- **Anlaşmanın diğer tarafı**, yanıt kabul edildikten sonra adınızı, profil fotoğrafınızı ve telefon numaranızı görür. Yolcu gönderi fotoğraflarını, gönderici ona bu gönderiyle bir talep gönderdiğinde veya yanıt kabul edildiğinde görür. Sohbet mesajlarını, sohbetteki fotoğrafları ve gönderilen konumu yalnızca anlaşmanın iki tarafı görür. Anlaşma, gönderi yolcuya teslim edilmeden önce reddedilir veya iptal edilirse ad, telefon numarası, gönderi fotoğrafları ve sohbet (fotoğraflarla birlikte) yeniden gizlenir.
- **Moderatör** adınızı, telefon numaranızı, pasaport fotoğrafınızı ve selfie'nizi görür — fotoğrafları yalnızca 10 dakika geçerli bir bağlantıyla. Sohbetteki bir fotoğraf şikâyet edildiğinde moderatör yalnızca o fotoğraf için aynı şekilde 10 dakikalık bir bağlantı alır.
- **Verileri bizim adımıza işleyen hizmet sağlayıcılar:**
  - sunucu, veritabanı ve dosya deposu barındırma — Railway;
  - anlık bildirimlerin iletilmesi — Expo Push Service, Android için Firebase Cloud Messaging (Google), iPhone için Apple Push Notification service; bunlar cihaz token'ını ve bildirim metnini alır (sohbet mesajlarında mesajın başı, fotoğraflarda fotoğrafın kendisi olmadan yalnızca “📷 Fotoğraf”);
  - doğrulama kodlarının gönderilmesi — Telegram Gateway, Eskiz (uluslararası SMS dahil);
  - moderatörün Telegram botu — Telegram;
  - giriş — Apple, Google;
  - çökme raporları — Firebase Crashlytics (Google LLC): Bölüm 1'de açıklanan çökme raporunu ve cihazın IP adresini alır; sunucuları ABD dahil;
  - sohbette buluşma yeri seçerken haritanın gösterilmesi — Android'de Google Maps (Google LLC), iPhone'da Apple Maps: onlara adınızı, telefon numaranızı ve mesajlarınızı iletmeyiz; haritayı göstermek için cihazdan haritanın görüntülenen alanını, IP adresini ve cihazla ilgili teknik bilgileri alır ve bunları kendi gizlilik politikalarına göre işlerler.

Verileri satmayız ve reklam ağlarına aktarmayız.

## 3. Veriler nerede ve ne kadar süre saklanır

Tüm ülkelerdeki kullanıcıların verileri bir arada, yukarıda belirtilen hizmet sağlayıcıların sunucularında saklanır; bu sunucular Özbekistan'ın ve bulunduğunuz ülkenin dışında da olabilir. Verileri hesabınız var olduğu sürece saklarız. Sunucu kayıtları en fazla 30 gün, Firebase Crashlytics'teki çökme raporları 90 gün saklanır. Pasaport fotoğrafı, selfie, sohbet fotoğrafları ve uluslararası SMS kayıtlarının saklama süreleri Bölüm 1'de yer alır.

## 4. Hesabın silinmesi

Uygulamada: **Profil → Hesabı sil**. Profilinizi, telefon numaranızı, pasaport fotoğrafınızı ve selfie'nizi, gönderi fotoğraflarını, ilanları ve mesajları (gönderilen konum ve sohbetlerdeki fotoğraflarla birlikte — hem gönderilmiş hem de yüklenip gönderilmemiş olanlar) sileriz. Diğer kullanıcılar hakkında yazdığınız yorumlar kalır, ancak adınız olmadan. Uluslararası SMS kayıtları (Bölüm 1) gönderimden sonra en fazla 30 gün kalır — numara, ad ve e-posta olmadan — ardından silinir. Çökme raporları (Bölüm 1) 90 gün sonra kendiliğinden silinir; bunlarda ad, telefon numarası ve e-posta yer almaz. Devam eden bir anlaşmanız varken (yanıt kabul edilmiş veya gönderi yolcuya teslim edilmişse) hesap silinemez — önce anlaşmayı tamamlayın veya iptal edin. Hesabınızı, hesaba bağlı e-posta adresinizden info@kargofly.uz adresine yazarak da sildirebilirsiniz; bu en fazla 30 gün sürer.

## 5. Yaş sınırı

Uygulama 18 yaşından büyükler için tasarlanmıştır.

## 6. Değişiklikler

Politikadaki önemli değişiklikleri uygulama içinde duyururuz. Son sürümün tarihi belgenin başında yer alır.
