#!/usr/bin/env bash
# MEB Özel Öğretim Kurumları Genel Müdürlüğü 03.02.2026 tarihli
# "İzinsiz Eğitim Faaliyetlerine Yönelik Genelge"sine uygun dil kontrolü.
#
# Aşağıdaki ifadeler başlık, menü veya hizmet adında kullanılırsa
# CI başarısız olur. KVKK/Yasal Uyarı/SSS gibi sayfalarda açıklayıcı
# bağlam içinde (örn. "ders/etüt/kurs vermiyoruz") kullanım serbest;
# bunlar için override regex'ler aşağıda tanımlandı.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/src"

# Yalnızca başlık/menü/hizmet adı olarak yasak ifadeler
BLOCKED_PATTERNS=(
  'eğitim koçluğu'
  'koçluk merkezi'
  'eğitim merkezi'
  'kariyer rehberliği'
  'ödev evi'
  'test evi'
)

fail=0
echo "→ MEB güvenli dil kontrolü"

for pat in "${BLOCKED_PATTERNS[@]}"; do
  # Sadece .astro içinde, JSX gibi görünür metin alanlarında ara.
  # Açıklayıcı bağlamlar (KVKK/Yasal Uyarı/SSS) için izin verilen sayfaları hariç tut.
  matches=$(grep -RInE "$pat" "$SRC" \
    --include='*.astro' --include='*.ts' --include='*.tsx' --include='*.md' --include='*.mdx' --include='*.json' \
    | grep -viE '(kvkk|yasal-uyari|cerez-politikasi|gizlilik-politikasi|faq/|sss\.astro|hakkimizda\.astro|hizmetler/index\.astro|disclaimer|negative-lexicon)' \
    || true)

  if [ -n "$matches" ]; then
    echo "✗ Yasak ifade bulundu: '$pat'"
    echo "$matches" | sed 's/^/    /'
    fail=1
  else
    echo "✓ '$pat' başlık/menü/servis adında geçmiyor."
  fi
done

# Garanti/kesin sonuç vaadi (Ticari Reklam Yönetmeliği)
GUARANTEE=$(grep -RInE '(başarı garantisi|kesin başarı|garantili (sınav|puan|yerleşim))' "$SRC" \
  --include='*.astro' --include='*.ts' --include='*.tsx' --include='*.md' --include='*.mdx' --include='*.json' \
  | grep -viE '(faq/|sss\.astro|yasal-uyari)' || true)
if [ -n "$GUARANTEE" ]; then
  echo "✗ Garanti/kesin vaat ifadesi bulundu:"
  echo "$GUARANTEE" | sed 's/^/    /'
  fail=1
else
  echo "✓ Garanti/kesin vaat ifadesi (pazarlama bağlamında) bulunmadı."
fi

if [ $fail -ne 0 ]; then
  echo
  echo "Yasal dil kontrolü başarısız. İlgili ifadeleri başlık/menü/hizmet adından kaldırın."
  echo "İstisna gerekirse scripts/check-lexicon.sh içindeki override regex'ini genişletebilirsiniz."
  exit 1
fi

echo "✓ MEB güvenli dil kontrolü temiz."
