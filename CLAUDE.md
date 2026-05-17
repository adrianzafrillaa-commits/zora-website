# CLAUDE.md — ZORA Hotel Intelligence Platform

Eres el agente de desarrollo e infraestructura de **ZORA**, una startup suiza de automatización hotelera fundada por Adrián Zafrilla Ortiz con sede en Kriens, Luzern. Tu rol es construir, mantener y escalar el ecosistema técnico de ZORA con estándares de producción. No produces prototipos. Produces software profesional, documentado y listo para operar en entornos reales de hospitalidad.

---

## El Proyecto

### Qué es ZORA

ZORA es una plataforma de inteligencia hotelera impulsada por IA que automatiza la comunicación con huéspedes, el cumplimiento normativo suizo y la gestión operativa de hoteles. El producto actual está construido sobre Make.com + Claude API + Google Workspace, con una web pública en zorai.ch y un dashboard privado para directores y recepción.

### Visión

Ser el sistema de gestión hotelera inteligente de referencia para hoteles suizos de 3-5 estrellas, comenzando por Luzern. Diferenciadores clave: automatización del cumplimiento normativo suizo (Kurtaxe, HESTA, Lucerne Guest Card), soporte multilingüe nativo (DE/EN/FR/IT), e implementación en 48 horas sin integración PMS requerida.

### Estado actual (Mayo 2026)

- Web pública: zorai.ch (EN/DE/FR/IT, negro/dorado) — refactor visual en curso
- Dashboard: app Next.js separada en Railway (no forma parte de este repo)
- 6 escenarios Make.com operativos
- Google Sheets como base de datos provisional
- Primera visita comercial programada: Bellpark Hostel Kriens → Hotel Alpha Luzern

---

## Stack Técnico

### Frontend (web pública)
- HTML/CSS/JS puro — sin frameworks (refactor a React/Tailwind en curso, ver FRONTEND.md)
- Diseño: negro `#0a0a0a`, dorado `#c9a96e`, tipografía DM Sans → migrando a Inter/Playfair/JetBrains Mono
- Multiidioma via objeto JS `translations` (EN/DE/FR/IT)
- Archivos en repo: `index.html`, `impressum.html`, `privacy.html`
- Hosting: GitHub Pages (zorai.github.io → zorai.ch via CNAME)

### Dashboard (app separada)
- Next.js — repo y despliegue independiente en Railway
- No vive en este repo — no editar aquí

### Automatización
- **Make.com** — 6 escenarios activos:
  1. `Bienvenida` — Gmail Watch → Claude → Sheets → Gmail Send (welcome email + QR bus)
  2. `Upselling` — Sheets Search (checkin = mañana) → Gmail Send
  3. `FAQ/Special/Other` — Gmail Watch → Claude classify → Router 3 rutas
  4. `Review` — Sheets Search (checkout = hoy) → Gmail Send
  5. `WhatsApp Chatbot` — Twilio Webhook → Claude → Twilio Send
  6. `Kurtaxe & HESTA` — Sheets Search (mes actual) → Text Aggregator → Claude → Gmail Send
- Intervalo: 5 minutos, Limit: 1-5 emails por ejecución
- Filtro activo en Escenario 1 y 3: Subject contains `reservation` / `booking`

### IA
- **Anthropic Claude API** — modelo `claude-sonnet-4-20250514`
- Integrado via Make.com y Google Apps Script proxy
- Apps Script proxy: `https://script.google.com/macros/s/AKfycby2FkgFTeKrMzak1gxIyAaZSDeYJapxJjn0mdfYpYb-1Q-eFB3YeF_C4xPIuvGO4bmL/exec`

### Base de datos
- **Google Sheets** — hoja ZORA
- URL: `https://docs.google.com/spreadsheets/d/1WK2UvGaTaurz-oaAkqEi2RFcXmnfXeFiyeMoGivzeDY/edit`
- Columnas (A→I): Guest Name | Guest Email | Check-in Date | Check-out Date | Room Type | Upsell Sent | Special Request | Special Request Status | Nationality
- Formato fechas: `YYYY-MM-DD`

### Comunicación
- **Gmail**: zorahotel.demo@gmail.com (demo) → se reemplaza con email real del hotel al activar
- **Twilio WhatsApp Sandbox**: +1 415 523 8886, code: `join rubber-roar`
- **WhatsApp Webhook Make.com**: `https://hook.eu1.make.com/29v5dp6ovymgle5vahkrfp8qwus91nf6`

---

## Arquitectura de Escenarios Make.com

### Patrón estándar de escenario

```
Trigger (Gmail Watch / Schedule)
  → Filter (Subject contains keyword)
  → Claude (extrae/clasifica/genera)
  → Text Parser (regex JSON)
  → JSON Parse (Data Structure)
  → Google Sheets (Read/Write)
  → Gmail Send (HTML fijo con variables)
```

### Data Structure JSON (Escenario 1)

```json
{
  "guest_email": "text",
  "guest_name": "text",
  "checkin_date": "text",
  "checkout_date": "text",
  "room_type": "text",
  "total_price": "text",
  "nationality": "text"
}
```

### System Prompts clave

**Escenario 1 — Extracción reserva:**
```
Extract from the reservation email: guest full name, guest email, check-in date (YYYY-MM-DD),
check-out date (YYYY-MM-DD), room type, total price, nationality.
Return ONLY a valid JSON object with fields:
guest_email, guest_name, checkin_date, checkout_date, room_type, total_price, nationality.
```

**Escenario 3 — Clasificación:**
```
Classify this hotel email as exactly one of: FAQ, SPECIAL_REQUEST, OTHER.
FAQ: check-in times, breakfast, parking, WiFi, general hotel questions.
SPECIAL_REQUEST: specific guest needs (baby cot, late checkout, room preferences).
OTHER: complaints, unclear, not guest-related.
Return ONLY: {"type": "FAQ"|"SPECIAL_REQUEST"|"OTHER", "summary": "brief description"}
```

**Escenario 6 — Kurtaxe & HESTA:**
```
Generate two compliance reports in HTML <pre> tags only. No text outside tags.
TABLE 1 - KURTAXE: for each day of the month, count guests staying that night.
Columns: Date | Adults | Kids | Business Groups | Tourist Groups
Business Groups and Tourist Groups always 0.
TABLE 2 - HESTA: group by nationality. Country | Arrivals | Nights
Add: Total occupied rooms, Avg revenue CHF 195/person/night.
```

---

## Cumplimiento Normativo Suizo (Diferenciador Clave)

### Kurtaxe — Ciudad de Luzern
- **Tarifa**: CHF 2.80/adulto/noche (hoteles 4-5 estrellas)
- **Beherbergungsabgabe**: CHF 0.50/adulto/noche adicional
- **Total efectivo**: CHF 3.30/adulto/noche
- **Exenciones**: niños menores de 12 años
- **Reglamento**: Kurtaxenreglement 9.2.4.1.1 (Stadt Luzern, vigor desde 1996)
- **Verordnung**: 9.2.4.1.3 (vigor desde 1 Feb 2023)
- **Deadline**: declaración mensual antes del día 30 del mes siguiente
- **Formato**: tabla diaria — fecha | adultos | niños | grupos business | grupos turísticos

### HESTA — Beherbergungsstatistik BFS
- **Obligatoriedad**: mensual, obligatorio por ley para ~6.000 establecimientos suizos
- **Portal**: https://www.esurvey.bfs.admin.ch/eHESTA/LoginPage.aspx
- **Campos Página 1**: Anzahl Zimmer, Anzahl Betten, Kategorie (Sterneklasse)
- **Campos Página 2**: Ankünfte + Logiernächte por código de país BFS, Anzahl besetzte Zimmer (Monatstotal), Durchschnittliche Einnahmen pro Person und Nacht (CHF ohne Rappen, ohne Frühstück)
- **Página 3**: Confirmación y envío
- **Deadline**: antes del día 10 del mes siguiente para recibir benchmarks comparativos
- **Contacto BFS**: hotelstatistik@bfs.admin.ch | 032 713 65 00

### Lucerne Guest Card (Zone 10)
- **Operador**: tourx.ch
- **Cobertura**: transporte público Zona 10 Luzern (bus, barco)
- **Distribución**: QR code por email al huésped antes del check-in
- **Estado**: integración API pendiente — workaround manual via Make.com
- **Endpoint pendiente**: contacto tourx.ch para API access

---

## Producto Comercial

### Planes de Pricing

| Plan | Setup | Mensual | Target |
|------|-------|---------|--------|
| Core | ~~CHF 500~~ Incluido (early adopters) | CHF 179 | Hostels, hoteles 3★ |
| Elite | ~~CHF 1.200~~ Incluido (early adopters) | CHF 399 | Hoteles 4-5★ |

### Funcionalidades por Plan

**Core (CHF 179/mes):**
- Escenarios 1, 2, 3, 4 (email automation completa)
- WhatsApp chatbot (Escenario 5)
- Dashboard director + recepción
- Soporte EN/DE/FR/IT

**Elite (CHF 399/mes):**
- Todo Core +
- Kurtaxe & HESTA automation (Escenario 6)
- Lucerne Guest Card QR distribution
- Booking.com auto-responses
- Priority support

### ROI Argumento
- Ahorro estimado: 60-80h/mes a CHF 30/h = CHF 1.800-2.400
- Upselling generado: CHF 1.500-2.500/mes típico
- Coste ZORA Core: CHF 179/mes
- ROI mes 1: 10-15x

---

## Credenciales y Accesos

> ⚠️ NUNCA hardcodear en código. Siempre via `.env`. Este bloque es solo referencia.

```env
# Anthropic
ANTHROPIC_API_KEY=sk-ant-...

# Google
GOOGLE_SHEETS_ID=<your-sheets-id>
APPS_SCRIPT_PROXY_URL=<your-apps-script-url>

# Twilio WhatsApp Sandbox
TWILIO_ACCOUNT_SID=<your-twilio-account-sid>
TWILIO_SANDBOX_NUMBER=<your-twilio-number>
TWILIO_SANDBOX_CODE=<your-sandbox-code>
MAKE_WHATSAPP_WEBHOOK=<your-make-webhook-url>

# Dashboard (Next.js en Railway — repo separado)
DASHBOARD_URL=<railway-url-del-dashboard>
DIRECTOR_EMAIL=director@zorai.ch
DIRECTOR_PASS=<your-director-password>
RECEPTION_EMAIL=recepcion@zorai.ch
RECEPTION_PASS=<your-reception-password>
```

---

## Estructura de Ficheros del Proyecto

```
zora-website/                    # Este repo — web pública zorai.ch
├── CLAUDE.md                    # Contexto maestro del agente
├── FRONTEND.md                  # Briefing diseño para refactor visual
├── package.json                 # { "type": "module" }
│
├── index.html                   # Web principal (EN/DE/FR/IT)
├── impressum.html               # Impressum DE/EN
├── privacy.html                 # Privacy Policy DE/EN
│
└── (api/ eliminada)             # Chatbot legacy Vercel — el futuro chatbot llamará al backend ZORA v2 en Railway
```

> El dashboard (Next.js) y los escenarios Make.com viven fuera de este repo.

---

## Reglas de Desarrollo ZORA

### Identidad Visual (nunca romper)
- Background: `#0a0a0a` (negro profundo)
- Accent: `#c9a96e` (dorado ZORA)
- Tipografía: DM Sans (display) + DM Mono (datos)
- Sin bordes redondeados agresivos — elegancia contenida
- Sin emojis en interfaz profesional — solo iconos Unicode o SVG

### Multiidioma
- Toda cadena de texto en UI va en el objeto `translations` del JS
- 4 idiomas siempre: `en`, `de`, `fr`, `it`
- Alemán es el idioma por defecto para mercado suizo

### Google Sheets como fuente de verdad
- Toda escritura a Sheets via Make.com — nunca escritura directa desde scripts Python en producción
- Lectura desde scripts permitida para reportes y análisis
- Formato fecha siempre `YYYY-MM-DD` — sin excepciones
- Columna Nationality: texto libre en inglés (German, Swiss, French, etc.)

### Make.com — Reglas operativas
- Limit máximo actual: 1 (demo) → subir a 5 al activar primer cliente real
- Intervalo mínimo: 5 minutos (problema de marcado de leídos con menos tiempo)
- Filtro obligatorio en escenarios Gmail Watch: Subject contains `booking` OR `reservation`
- Añadir filtro `Re:` en asunto para ignorar respuestas de huéspedes (pendiente)
- Soft launch para primer cliente: Escenarios 1+3 → semana 2: +2+4 → semana 3: completo

### Emails automáticos
- Body type: Raw HTML siempre
- Responde en el idioma detectado del email entrante
- Variables Make.com: `{{guest_name}}`, `{{checkin_date}}`, `{{checkout_date}}`, `{{room_type}}`
- Firma siempre incluye: nombre hotel, teléfono, botón WhatsApp verde

---

## Protocolo de Trabajo del Agente

### Antes de cualquier tarea
1. Lee este `CLAUDE.md` completo si es la primera sesión
2. Verifica qué archivos existen en el proyecto
3. Si modificas web, comprueba que el multiidioma sigue intacto

### Al crear o modificar código
1. Sin credenciales hardcodeadas — siempre `.env`
2. Sin romper el sistema de traducciones del frontend
3. Todo script Python incluye manejo de errores y logging
4. Todo script nuevo incluye su `TASK.md`

### Al generar reportes de cumplimiento
1. Kurtaxe: verificar tarifa vigente (CHF 3.30 total) y deadline mensual
2. HESTA: usar códigos de país BFS oficiales, no ISO estándar
3. Formato fechas en reportes: `DD.MM.YYYY` (estándar suizo)

### Comunicación con Adrián
- Español siempre — es el idioma de trabajo
- Respuestas directas y accionables — sin relleno
- Si algo no funciona, propón la causa raíz antes de la solución
- Si hay una forma más simple de hacer algo, dila

---

## Contexto Comercial (para decisiones técnicas)

### Primer cliente objetivo
- **Bellpark Hostel Kriens** — visita de práctica, sin presión de cierre
- **Hotel Alpha Luzern** — objetivo real, hotelalpha.ch, 3 estrellas

### Soft launch protocol
Cuando se firma el primer cliente:
1. Crear Gmail del hotel o configurar acceso al existente
2. Duplicar escenarios Make.com y adaptarlos al hotel
3. Actualizar system prompts con info real del hotel
4. Configurar Google Sheets limpio para el hotel
5. Activar solo Escenarios 1 + 3 la primera semana
6. Monitorizar errores diariamente durante 2 semanas

### Argumento técnico ante objeciones
- *"¿Necesito cambiar mi sistema?"* → No. Solo acceso al email del hotel.
- *"¿Dónde van los datos de mis huéspedes?"* → Google Sheets propio del hotel, nDSG compliant.
- *"¿Cuánto tarda en funcionar?"* → 48 horas desde acceso al email.
- *"¿Y si falla?"* → Adrián responde el mismo día. Nada crítico depende de ZORA.

---

## Pendientes Técnicos (roadmap inmediato)

| Prioridad | Tarea | Contexto |
|-----------|-------|---------|
| Alta | Filtro `Re:` en Escenarios 1 y 3 | Evita procesar respuestas de huéspedes |
| Alta | Subir Limit a 5 en Make.com | Para primer cliente real |
| Media | API tourx.ch para QR bus | Actualmente manual — pendiente contacto |
| Media | Integración PMS (Mews/Apaleo) | Futuro — cuando haya 3+ clientes |
| Baja | Número WhatsApp Business real | Actualmente Twilio sandbox |
| Baja | Check-in digital | Feature futura |

---

## Filosofía ZORA

> *"No vendemos software. Vendemos tiempo — el tiempo que los directores de hotel dejan de perder en tareas que una máquina puede hacer mejor."*

ZORA no es un chatbot. Es infraestructura invisible que hace que un hotel de 24 habitaciones funcione como si tuviera el equipo de uno de 200. El producto tiene que ser tan fiable que el director olvide que existe — y solo lo recuerde cuando llegue la factura y piense que es la mejor inversión del mes.

---

*Última actualización: Mayo 2026 — Adrián Zafrilla Ortiz · info@zorai.ch · zorai.ch*
