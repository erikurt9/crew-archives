/* ============================================================
   CREW ARCHIVES — datos de la página (aquí se agrega todo lo nuevo)

   AGREGAR UN CLIP A UN SKATER:
     1) Sube media/<skater>/<skater>-N.mp4 y media/<skater>/<skater>-N.jpg (mismo nombre)
     2) Agrega una línea en su lista 'clips' (la 'f' es el nombre sin extensión)
     tipo: RAILS · LEDGES · ESCALERAS · BAJADAS · LÍNEAS · SESIONES
     by: quien graba (si sale en el clip) · tags: cuentas etiquetadas · fit:'contain' para clips cuadrados
   AGREGAR UN SKATER NUEVO: copia un bloque de 'skaters' y cambia id, name, ig y clips.
   ============================================================ */
window.CREW = {

  skaters: [
    {"id": "raspu", "name": "Raspu", "ig": "https://www.instagram.com/juancamolina23/", "nick": "EL PÁJARO", "stance": "Regular", "years": 9, "spot": "Skatepark Los Ángeles, Ricardo Vicuña", "hue": 350, "favs": ["Kickflip back lip", "Frontside 180 nollie", "Tre flip"], "setup": {"deck": "8.25\" Maple 7-ply", "trucks": "Independent 149", "wheels": "54mm 99A", "bearings": "Bones Reds"},
      "clips": []},
    {"id": "boris", "name": "Boris", "ig": "https://www.instagram.com/borisgaticarojas/", "nick": "EL ZORRO", "stance": "Goofy", "years": 6, "spot": "Parque Ecuador", "hue": 45, "favs": ["Backside tailslide", "Varial flip", "Manual a nollie"], "setup": {"deck": "8.0\" Maple 7-ply", "trucks": "Thunder 147", "wheels": "52mm 101A", "bearings": "Swiss"},
      "clips": [
        {"f": "boris-1", "short": "SLIDE", "title": "SLIDE EN EL LEDGE", "spot": "Skatepark · de noche", "dur": "0:08", "tipo": "LEDGES"},
        {"f": "boris-2", "short": "FLIP", "title": "FLIP SOBRE EL LEDGE", "spot": "Skatepark · de noche", "dur": "0:04", "tipo": "LEDGES", "tags": "@tourpizza.la @lostangelesteam"},
        {"f": "boris-3", "short": "GRIND", "title": "GRIND EN EL LEDGE", "spot": "Skatepark · de noche", "dur": "0:08", "tipo": "LEDGES"},
        {"f": "boris-4", "short": "LEDGE", "title": "TRUCOS EN EL LEDGE", "spot": "Skatepark · atardecer y noche", "dur": "0:15", "tipo": "LEDGES"}
      ]},
    {"id": "droppa", "name": "Droppa", "ig": "https://www.instagram.com/dr0pp4/", "hl": "https://www.instagram.com/stories/highlights/18050739551253964/", "nick": "HUESOS", "stance": "Regular", "years": 12, "spot": "Costanera Sur", "hue": 200, "favs": ["Hardflip", "Switch bs 180", "Noseslide largo"], "setup": {"deck": "8.5\" Maple 8-ply", "trucks": "Venture 5.6", "wheels": "56mm 99A", "bearings": "Bronson G3"},
      "clips": [
        {"f": "droppa-1", "short": "OLLIE", "title": "OLLIE DE NOCHE", "spot": "Skatepark · de noche", "dur": "0:06", "tipo": "LÍNEAS"},
        {"f": "droppa-2", "short": "RAIL SLIDE", "title": "SLIDE EN EL RAIL DEL BANK", "spot": "Skatepark · de día", "dur": "0:11", "tipo": "RAILS", "by": "@coke_san_martin"},
        {"f": "droppa-3", "short": "LÍNEA", "title": "LÍNEA EN EL SKATEPARK", "spot": "Skatepark · de día", "dur": "0:09", "tipo": "LÍNEAS"},
        {"f": "droppa-4", "short": "LEDGE", "title": "GRINDS EN EL LEDGE", "spot": "Skatepark · atardecer y noche", "dur": "0:15", "tipo": "LEDGES"},
        {"f": "droppa-5", "short": "FLIP + GRIND", "title": "FLIP Y GRIND EN EL BOWL", "spot": "Skatepark · de día", "dur": "0:15", "tipo": "LEDGES", "by": "@coke_san_martin"},
        {"f": "droppa-6", "short": "RAIL", "title": "GRIND LARGO EN EL RAIL", "spot": "Skatepark · de noche", "dur": "0:10", "tipo": "RAILS"}
      ]},
    {"id": "diego", "name": "Diego", "ig": "https://www.instagram.com/_diego.skt/", "nick": "EL TIGRE", "stance": "Goofy", "years": 4, "spot": "Skatepark Los Ángeles, Ricardo Vicuña", "hue": 280, "favs": ["Fs boardslide", "Ollie al gap", "Bs bigspin"], "setup": {"deck": "7.875\" Maple 7-ply", "trucks": "Independent 139", "wheels": "53mm 100A", "bearings": "Bones Swiss"},
      "clips": [
        {"f": "diego-1", "short": "ESCALERAS", "title": "BAJANDO LAS ESCALERAS", "spot": "Escaleras frente a un Santander", "dur": "0:06", "tipo": "ESCALERAS", "by": "@sktvchile"},
        {"f": "diego-2", "short": "CAÍDA", "title": "DE NUEVO ME GANÓ EL SPOT", "spot": "Escalones en una plaza", "dur": "0:03", "tipo": "ESCALERAS"},
        {"f": "diego-3", "short": "LÍNEA", "title": "LÍNEA POR EL CENTRO", "spot": "Centro · galería techada", "dur": "0:12", "tipo": "LÍNEAS"},
        {"f": "diego-4", "short": "BAJADA", "title": "BAJADA DE NOCHE", "spot": "Rampa de estacionamiento · de noche", "dur": "0:08", "tipo": "BAJADAS"},
        {"f": "diego-5", "short": "WEDGE", "title": "SESIÓN NOCTURNA EN EL WEDGE", "spot": "Skatepark · de noche", "dur": "0:11", "tipo": "SESIONES", "by": "@juancamolina23"},
        {"f": "diego-6", "short": "NOCTURNA", "title": "SESIÓN NOCTURNA", "spot": "Skatepark · poca luz", "dur": "0:05", "tipo": "SESIONES"},
        {"f": "diego-7", "short": "BANCA", "title": "TRUCOS EN LA BANCA", "spot": "Plaza · de noche", "dur": "0:15", "tipo": "LEDGES"},
        {"f": "diego-8", "short": "CICLOVÍA", "title": "RODANDO POR LA CICLOVÍA", "spot": "Ciclovía · atardecer", "dur": "0:15", "tipo": "LÍNEAS"},
        {"f": "diego-9", "short": "RODADA", "title": "RODADA NOCTURNA", "spot": "Plaza con bolardos · de noche", "dur": "0:10", "tipo": "LÍNEAS"},
        {"f": "diego-10", "short": "MONTAJE", "title": "MONTAJE STREET", "spot": "Varios spots", "dur": "0:14", "tipo": "SESIONES"},
        {"f": "diego-11", "short": "SESIÓN", "title": "SESIÓN EN EL SKATEPARK", "spot": "Skatepark · de noche", "dur": "0:14", "tipo": "SESIONES"},
        {"f": "diego-12", "short": "LEDGE", "title": "GRIND EN EL CANTERO", "spot": "Plaza · de día", "dur": "0:05", "tipo": "LEDGES"},
        {"f": "diego-13", "short": "GRIND", "title": "GRIND EN EL BLOQUE", "spot": "Calle · de noche", "dur": "0:08", "tipo": "LEDGES"},
        {"f": "diego-14", "short": "SESH", "title": "ESTUVO WENA LA SESH", "spot": "Skatepark · de noche", "dur": "0:15", "tipo": "SESIONES", "tags": "@ivancifuentesvalen @ffffilips @ben.ja_dh"},
        {"f": "diego-15", "short": "CALLE", "title": "RODADA DE NOCHE", "spot": "Calle · de noche", "dur": "0:28", "tipo": "LÍNEAS", "by": "@dr0pp4"},
        {"f": "diego-16", "short": "PLAZA", "title": "LÍNEA POR LA PLAZA", "spot": "Plaza del centro · de día", "dur": "0:07", "tipo": "LÍNEAS", "by": "@dr0pp4"},
        {"f": "diego-17", "short": "BOX", "title": "SLIDE EN EL BOX", "spot": "Skatepark · de noche", "dur": "0:08", "tipo": "LEDGES"}
      ]},
    {"id": "chelo", "name": "Chelo", "ig": "https://www.instagram.com/chelo_cataclysmic/", "nick": "", "stance": "", "years": "", "spot": "", "hue": 160, "favs": [], "setup": {},
      "clips": [
        {"f": "chelo-1", "short": "BAJADA", "title": "BAJADA AL ATARDECER", "spot": "Calles con pendiente · atardecer", "dur": "0:50", "tipo": "BAJADAS"},
        {"f": "chelo-2", "short": "MONTAJE", "title": "SESIÓN NOCTURNA EN EL SKATEPARK", "spot": "Skatepark · de noche", "dur": "0:37", "tipo": "SESIONES"},
        {"f": "chelo-3", "short": "RAILS", "title": "MONTAJE DE RAILS", "spot": "Skatepark · de noche y de día", "dur": "0:42", "tipo": "RAILS"},
        {"f": "chelo-4", "short": "SLIDES", "title": "SLIDES EN LOS RAILS", "spot": "Skatepark · atardecer y noche", "dur": "0:23", "tipo": "RAILS"},
        {"f": "chelo-5", "short": "SESIÓN", "title": "SESIÓN NOCTURNA CON LA CREW", "spot": "Skatepark · de noche", "dur": "0:43", "tipo": "SESIONES"},
        {"f": "chelo-6", "short": "ESCALERAS", "title": "BAJANDO LAS ESCALERAS", "spot": "Skatepark · escaleras con baranda", "dur": "0:08", "tipo": "ESCALERAS", "by": "@chelo_cataclysmic"},
        {"f": "chelo-7", "short": "LEDGE", "title": "LEDGES Y UNA CAÍDA", "spot": "Skatepark · de día", "dur": "0:20", "tipo": "LEDGES", "fit": "contain"}
      ]}
  ],

  /* video del mes (el reproductor principal arranca con este) */
  featured: {"slug": "droppa-6", "date": "OCT 2026", "desc": "Un grind largo en un rail, de noche, con las luces del skatepark.", "thumb": "media/droppa/droppa-6-card.jpg"},

  /* Hall of Fame: skater + número de clip (n) */
  hof: [{"sk": "droppa", "n": 6}, {"sk": "droppa", "n": 2}, {"sk": "boris", "n": 2}, {"sk": "chelo", "n": 6}, {"sk": "diego", "n": 1}],

  /* portada del mes */
  cover: {"img": "media/cover-del-mes.jpg", "name": "CHELO", "title": "ESCALERAS"},

  /* formulario de clips: pon UNO (whatsapp con código de país y sin +, ej. '56912345678'; o email; o instagram sin @) */
  contact: {"whatsapp": "", "email": "", "instagram": ""},

  /* skateparks. foto: media/spots/spot-N.jpg · cred: quién tomó la foto */
  spots: [
    {"n": "01", "name": "Skatepark Los Ángeles", "sector": "Parque Ricardo Vicuña", "lat": -37.4725625, "lng": -72.3547344, "pid": "ChIJdZCj2Enda5YR34IXwx805zQ", "foto": "media/spots/spot-1.jpg", "cred": ""},
    {"n": "02", "name": "Skatepark N.º 2", "sector": "Parque Estero Quilque · Costanera Quilque Norte", "lat": -37.4694021, "lng": -72.379533, "pid": "ChIJAc3fDADda5YRceyy6Duk-VM", "foto": "media/spots/spot-2.jpg", "cred": ""},
    {"n": "03", "name": "Skatepark Paillihue", "sector": "Paillihue · sector Plaza General Bernales", "lat": -37.4885375, "lng": -72.3327031, "pid": "ChIJw7uRZQDDa5YRWFIxGuWgl6o", "foto": "media/spots/spot-3.jpg", "cred": ""}
  ]
};
