#!/bin/bash
# IndexNow: notify Bing/Yandex/search engines of all URLs
# Run: bash scripts/indexnow.sh

KEY="4fc93cb1647c475ca0318686ebb50bb6"
HOST="www.moquetaecologica.com"
BASE="https://${HOST}"

# Build URL list from sitemap structure
URLS=$(cat <<'URLS_END'
"https://www.moquetaecologica.com",
"https://www.moquetaecologica.com/productos",
"https://www.moquetaecologica.com/productos/rewind-flat",
"https://www.moquetaecologica.com/productos/rewind-dilour",
"https://www.moquetaecologica.com/moqueta-ecologica-barcelona",
"https://www.moquetaecologica.com/moqueta-ecologica-girona",
"https://www.moquetaecologica.com/moqueta-ecologica-tarragona",
"https://www.moquetaecologica.com/moqueta-ecologica-lleida",
"https://www.moquetaecologica.com/barcelona/eventos",
"https://www.moquetaecologica.com/barcelona/ferias",
"https://www.moquetaecologica.com/barcelona/congresos",
"https://www.moquetaecologica.com/barcelona/stands",
"https://www.moquetaecologica.com/barcelona/bodas",
"https://www.moquetaecologica.com/girona/eventos",
"https://www.moquetaecologica.com/girona/ferias",
"https://www.moquetaecologica.com/girona/congresos",
"https://www.moquetaecologica.com/girona/stands",
"https://www.moquetaecologica.com/girona/bodas",
"https://www.moquetaecologica.com/tarragona/eventos",
"https://www.moquetaecologica.com/tarragona/ferias",
"https://www.moquetaecologica.com/tarragona/congresos",
"https://www.moquetaecologica.com/tarragona/stands",
"https://www.moquetaecologica.com/tarragona/bodas",
"https://www.moquetaecologica.com/lleida/eventos",
"https://www.moquetaecologica.com/lleida/ferias",
"https://www.moquetaecologica.com/lleida/congresos",
"https://www.moquetaecologica.com/lleida/stands",
"https://www.moquetaecologica.com/lleida/bodas",
"https://www.moquetaecologica.com/comarcas/barcelones",
"https://www.moquetaecologica.com/comarcas/valles-occidental",
"https://www.moquetaecologica.com/comarcas/valles-oriental",
"https://www.moquetaecologica.com/comarcas/baix-llobregat",
"https://www.moquetaecologica.com/comarcas/maresme",
"https://www.moquetaecologica.com/comarcas/garraf",
"https://www.moquetaecologica.com/comarcas/alt-penedes",
"https://www.moquetaecologica.com/comarcas/anoia",
"https://www.moquetaecologica.com/comarcas/bages",
"https://www.moquetaecologica.com/comarcas/osona",
"https://www.moquetaecologica.com/comarcas/bergueda",
"https://www.moquetaecologica.com/comarcas/moianes",
"https://www.moquetaecologica.com/comarcas/girones",
"https://www.moquetaecologica.com/comarcas/alt-emporda",
"https://www.moquetaecologica.com/comarcas/baix-emporda",
"https://www.moquetaecologica.com/comarcas/selva",
"https://www.moquetaecologica.com/comarcas/garrotxa",
"https://www.moquetaecologica.com/comarcas/ripolles",
"https://www.moquetaecologica.com/comarcas/pla-estany",
"https://www.moquetaecologica.com/comarcas/cerdanya",
"https://www.moquetaecologica.com/comarcas/tarragones",
"https://www.moquetaecologica.com/comarcas/baix-camp",
"https://www.moquetaecologica.com/comarcas/alt-camp",
"https://www.moquetaecologica.com/comarcas/baix-penedes",
"https://www.moquetaecologica.com/comarcas/baix-ebre",
"https://www.moquetaecologica.com/comarcas/montsia",
"https://www.moquetaecologica.com/comarcas/priorat",
"https://www.moquetaecologica.com/comarcas/terra-alta",
"https://www.moquetaecologica.com/comarcas/ribera-ebre",
"https://www.moquetaecologica.com/comarcas/conca-barbera",
"https://www.moquetaecologica.com/comarcas/segria",
"https://www.moquetaecologica.com/comarcas/noguera",
"https://www.moquetaecologica.com/comarcas/urgell",
"https://www.moquetaecologica.com/comarcas/pla-urgell",
"https://www.moquetaecologica.com/comarcas/garrigues",
"https://www.moquetaecologica.com/comarcas/segarra",
"https://www.moquetaecologica.com/comarcas/alt-urgell",
"https://www.moquetaecologica.com/comarcas/solsones",
"https://www.moquetaecologica.com/comarcas/pallars-jussa",
"https://www.moquetaecologica.com/comarcas/pallars-sobira",
"https://www.moquetaecologica.com/comarcas/val-aran",
"https://www.moquetaecologica.com/comarcas/alta-ribagorca",
"https://www.moquetaecologica.com/municipios/hospitalet",
"https://www.moquetaecologica.com/municipios/badalona",
"https://www.moquetaecologica.com/municipios/terrassa",
"https://www.moquetaecologica.com/municipios/sabadell",
"https://www.moquetaecologica.com/municipios/mataro",
"https://www.moquetaecologica.com/municipios/santa-coloma",
"https://www.moquetaecologica.com/municipios/cornella",
"https://www.moquetaecologica.com/municipios/sant-cugat",
"https://www.moquetaecologica.com/municipios/sant-boi",
"https://www.moquetaecologica.com/municipios/rubi",
"https://www.moquetaecologica.com/municipios/manresa",
"https://www.moquetaecologica.com/municipios/vilanova",
"https://www.moquetaecologica.com/municipios/granollers",
"https://www.moquetaecologica.com/municipios/viladecans",
"https://www.moquetaecologica.com/municipios/el-prat",
"https://www.moquetaecologica.com/municipios/castelldefels",
"https://www.moquetaecologica.com/municipios/gava",
"https://www.moquetaecologica.com/municipios/cerdanyola",
"https://www.moquetaecologica.com/municipios/reus",
"https://www.moquetaecologica.com/municipios/girona-ciudad",
"https://www.moquetaecologica.com/municipios/lleida-ciudad",
"https://www.moquetaecologica.com/municipios/tarragona-ciudad",
"https://www.moquetaecologica.com/municipios/figueres",
"https://www.moquetaecologica.com/municipios/blanes",
"https://www.moquetaecologica.com/municipios/lloret",
"https://www.moquetaecologica.com/municipios/vic",
"https://www.moquetaecologica.com/municipios/igualada",
"https://www.moquetaecologica.com/municipios/tortosa",
"https://www.moquetaecologica.com/municipios/cambrils",
"https://www.moquetaecologica.com/municipios/salou",
"https://www.moquetaecologica.com/blog",
"https://www.moquetaecologica.com/blog/economia-circular-moqueta-reciclable-eventos",
"https://www.moquetaecologica.com/blog/normativa-ignifuga-bfl-s1-moqueta-ferial",
"https://www.moquetaecologica.com/blog/guia-elegir-moqueta-ecologica-evento",
"https://www.moquetaecologica.com/mapa-del-sitio"
URLS_END
)

BODY=$(cat <<EOF
{
  "host": "${HOST}",
  "key": "${KEY}",
  "keyLocation": "${BASE}/${KEY}.txt",
  "urlList": [
    ${URLS}
  ]
}
EOF
)

echo "Submitting $(echo "$URLS" | grep -c 'http') URLs to IndexNow..."
echo ""

# Submit to IndexNow API (routes to Bing, Yandex, Seznam, Naver)
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "$BODY")

HTTP_CODE=$(echo "$RESPONSE" | tail -1)
BODY_RESP=$(echo "$RESPONSE" | head -n -1)

echo "IndexNow API response: HTTP ${HTTP_CODE}"
if [ -n "$BODY_RESP" ]; then
  echo "Body: ${BODY_RESP}"
fi

if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "202" ]; then
  echo ""
  echo "OK - URLs submitted successfully."
  echo "Bing, Yandex, Seznam and Naver have been notified."
else
  echo ""
  echo "Note: HTTP 200=OK, 202=Accepted. Key file must be live at:"
  echo "${BASE}/${KEY}.txt"
  echo ""
  echo "If you get 422, deploy first so the key file is accessible."
fi
