# Görsel Prompt Seti — ES-ES Danışmanlık

Sitedeki tüm görsel alanları için **marka tutarlı**, yapay zekâ ile üretilebilir
prompt'lar. Amaç: stok hissi vermeyen, sıcak, sakin ve "premium" editoryal bir
fotoğraf dili. Marka tonu: _sessiz rehber_ — güven veren, abartısız, insani.

> Prompt'lar İngilizce yazıldı (Midjourney / Flux / Firefly / DALL·E bu dilde
> en tutarlı sonucu verir). Üretim aracı fark etmeksizin önce **Ortak Stil**
> bloğunu, sonra slot prompt'unu, en sonda **Negatif Prompt**'u kullanın.

---

## 1. Nasıl kullanılır

1. **Ortak Stil** (§3) bloğunu her prompt'un başına ekleyin — tüm görsellerin
   aynı ışık/palet/dokuda durmasını bu sağlar.
2. İlgili slotun prompt'unu (§5) ekleyin.
3. **Negatif Prompt** (§4) ile istenmeyenleri dışlayın.
4. Üretilen kareyi §6'daki teknik özelliklere göre dışa aktarıp
   `src/assets/img/<isim>.jpg` olarak kaydedin (mevcut adı koruyun; kod
   `src/lib/images.ts` üzerinden bu adlarla referans veriyor).

---

## 2. Marka paleti (prompt içinde ton tarif etmek için)

| Rol            | Ton                          | Yaklaşık HEX |
| -------------- | ---------------------------- | ------------ |
| Yüzey (kâğıt)  | sıcak krem / fildişi         | `#f7f1e5`    |
| Çapa           | derin gece laciverti         | `#14182b`    |
| Köprü (doğa)   | mat zeytin yeşili            | `#4a5749`    |
| Aksan (≤%5)    | ölçülü, soluk altın          | `#b8894e`    |

Görsellerde **lacivert + krem + sıcak ahşap** baskın olmalı; yeşil ve altın
yalnızca küçük aksanlar (bir zeytin dalı, pirinç bir detay) olarak görünmeli.

---

## 3. Ortak Stil (her prompt'a eklenecek temel)

```
Editorial lifestyle photograph, warm and quiet premium mood for a Turkish
education-consulting brand. Soft natural window light from one side, gentle
falloff, soft shadows, golden-hour warmth. Muted, cohesive palette of warm
cream/ivory, deep navy, soft olive green, with restrained brass/gold accents.
Authentic candid moment, calm and trustworthy, documentary feel — not posed,
no fake smiles. Shallow depth of field, 50mm look, fine film grain, true-to-life
skin tones, matte finish. Generous negative space for text overlay.
```

---

## 4. Negatif Prompt (istenmeyenler)

```
no text, no logos, no watermark, no typography, no captions, harsh flash,
oversaturated colors, neon, HDR look, plastic skin, stock-photo cheesiness,
exaggerated smiles, cluttered desk, modern sci-fi, cold blue tint, lens flare,
distorted hands, extra fingers, deformed faces, busy background, clipart
```

---

## 5. Teknik özellikler

- **Çözünürlük:** uzun kenar ≥ **1600 px** (kod 480–1400 px arası `widths`
  üretir; kaynak büyük olmalı). Üretim aracında mümkünse 2× üretip dışa aktarın.
- **Oran:** slota göre (aşağıda belirtildi). Container `object-cover` olduğu
  için ana özne ortada/güvenli bölgede dursun — kenarlardan kırpılabilir.
- **Format/kayıt:** `.jpg`, kalite ~82. Astro build sırasında otomatik `webp`
  üretiyor — sadece kaynak `.jpg`'yi koyun.
- **Köşe yuvarlaması:** kodda (`rounded-[28px]`) uygulanıyor; görselin kendisi
  köşesiz/dolu kare olmalı.
- **Dosya adı:** mevcut adı birebir koruyun (örn. `hero.jpg`).

---

## 6. Slot bazlı prompt'lar

### 6.1 `hero.jpg` — Ana sayfa kahramanı · oran **4/5** · *kullanımda*

> Alt metin: "Pencere kenarında defterine yazan öğrenci, sıcak gün ışığı"

```
A focused teenage student writing in a notebook by a large window, warm morning
sunlight streaming across the page, a cup of tea nearby, books stacked softly in
the background, navy-and-cream tones. Three-quarter back view, contemplative and
calm. Vertical 4:5 composition with breathing room at the top.
```

### 6.2 `bireysel.jpg` — Bireysel mentörlük · oran **3/4** · *kullanımda*

> Alt metin: "Pencere kenarında birebir mentörlük görüşmesi"

```
A one-on-one mentoring conversation by a window: an experienced mentor and a
student seated at a small wooden table, an open notebook and a fountain pen
between them, warm side light. Quiet, attentive, respectful body language.
Vertical 3:4 framing, soft background blur.
```

### 6.3 `grup.jpg` — Grup programları · oran **4/5** · *kullanımda*

> Alt metin: "Ahşap masada birlikte çalışan grup, sessiz bir çalışma saati"

```
A small group of students studying together around a large wooden table during
a quiet study hour, notebooks and books open, warm pendant light overhead and
soft daylight from a window. Collaborative but calm focus, no phones. Vertical
4:5, balanced composition.
```

### 6.4 `kurumsal.jpg` — Kurumsal danışmanlık · oran **4/5** (servis) / **1/1** (anasayfa) · *kullanımda*

> Alt metin: "Okul toplantı odasında birlikte çalışan öğretmen ekibi"

```
A team of teachers and a consultant collaborating in a warm, well-lit school
meeting room, documents and a notebook on the table, engaged discussion, natural
window light. Professional yet human and approachable. Compose for both 4:5 and
square crops (keep subjects centered, safe margins).
```

### 6.5 `hakkimizda.jpg` — Hakkımızda · oran **3/4** · *kullanımda*

> Alt metin: "Defter, gözlük, çay ve zeytin dalı; lacivert keten örtü üzerinde"

```
Still-life flat-lay on deep-navy linen cloth: a leather notebook, a pair of
reading glasses, a glass of tea, and a single olive branch, with a small brass
accent. Soft directional daylight, warm cream highlights, calm and editorial.
Vertical 3:4, top-down or slight angle, lots of negative space.
```

### 6.6 `yaklasim.jpg` — Yaklaşımımız · oran **1/1** · *kullanımda*

> Alt metin: "Dolma kalem ve çevrilen defter sayfası, yakın çekim"

```
Extreme close-up of a hand turning the page of a notebook with a fountain pen
resting on it, warm window light raking across the paper texture, navy and cream
tones, brass pen accent. Macro feel, very shallow depth of field. Square 1:1.
```

### 6.7 `portre.jpg` — Kurucu/danışman portresi · oran **4/5** önerilir · *şu an kullanılmıyor*

> Hâlihazırda hazır profesyonel bir portre mevcut. Aşağıdaki istek, ekiple
> tutarlı yeni bir kare gerekirse içindir. Hakkımızda veya iletişim sayfasında
> değerlendirilebilir.

```
A natural, approachable professional portrait of an education consultant (40s),
soft window light, warm cream background, navy attire, gentle confident
expression, looking slightly off-camera. Editorial headshot, shallow depth of
field. Vertical 4:5, subject offset to one side for text space.
```

### 6.8 `detay.jpg` — Kitap + gözlük detayı · oran **1/1** veya **4/5** · *şu an kullanılmıyor*

> Bölüm aralarında doku/nefes görseli olarak kullanılabilir.

```
Intimate detail shot of an open book with reading glasses resting on it, warm
desk lamp glow and soft daylight, navy bookmark ribbon, brass accents, cream
and navy palette. Cozy, scholarly, calm. Square or 4:5, shallow depth of field.
```

---

## 7. Kâğıt dokuları (`doku.jpg`, `ayrac.jpg`) — *kullanılmıyor*

Bu PR ile **CSS tabanlı kâğıt lif dokusu + sıcak vignette** eklendi
(`globals.css` → `.paper-texture` / `.paper-vignette`). Bu, tüm yüzeyde
çözünürlükten bağımsız, hafif ve performanslı bir kâğıt hissi verir.

**Öneri:** Görsel doku dosyalarına (`doku.jpg` / `ayrac.jpg`) gerek kalmadı;
arka plan dokusu için CSS katmanı tercih edilmeli (dosya boyutu yok, retina'da
keskin). İleride bölüm ayıracı (decorative divider) olarak kullanılmak istenirse:

```
Seamless tileable texture of warm cream handmade paper with subtle fibers and
soft deckle grain, very low contrast, neutral warm tone, flat even lighting,
no objects, no text. (ayrac: add a faint single horizontal torn-paper edge)
```

---

## 8. Tutarlılık ipuçları

- **Aynı seed / stil referansı:** Tüm seti üretirken aynı stil referans
  görselini (veya Midjourney `--sref`) kullanın; ışık ve ton kayması olmaz.
- **Palet kilidi:** Üretilen kareler maviye/griye kaçarsa prompt'a
  `warm white balance, cozy, golden tone` ekleyin.
- **İnsan görsellerinde mahremiyet:** Yüzler net tanınır olmasın gerekmiyorsa
  arkadan/yandan kadrajlayın (KVKK ve hak konuları açısından daha güvenli).
- **Tek bir "kahraman" sıcaklığı:** `hero` en sıcak/ışıklı kare olsun; iç
  sayfa görselleri bir tık daha sakin ve nötr kalsın ki hiyerarşi korunsun.
