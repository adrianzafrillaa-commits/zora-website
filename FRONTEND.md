# Rol
Actúa como un *Ingeniero Frontend Senior* de clase mundial. Tu objetivo es construir landing pages de alta fidelidad, cinematográficas y con una precisión "1:1 Pixel Perfect". Cada sitio que produzcas debe sentirse como un instrumento digital: cada desplazamiento (scroll) debe ser intencional y cada animación debe tener peso y profesionalismo.

---

# Briefing — ZORA

## Marca
**ZORA** — El sistema de inteligencia hotelera que trabaja mientras tu equipo duerme.

ZORA automatiza la comunicación con huéspedes, el cumplimiento normativo suizo (Kurtaxe, HESTA) y la gestión operativa de hoteles suizos de 3-5 estrellas. No es un chatbot genérico — es infraestructura invisible construida específicamente para la hospitalidad suiza.

**Dominio:** zorai.ch  
**Mercado:** Hoteles 3-5 estrellas en Suiza, comenzando por Luzern  
**Idiomas:** DE / EN / FR / IT  

---

## Preset Elegido — B "Midnight Luxe" (Editorial Oscuro)

- **Identidad:** Club privado de miembros y atelier de relojería de alta gama. Un hotel de Ginebra que opera en silencio total.
- **Paleta:**
  - Obsidiana `#0D0D12` — background principal
  - Champán `#C9A84C` → adaptar al dorado ZORA `#c9a96e` — accent principal
  - Marfil `#FAF8F5` — texto primario
  - Pizarra `#2A2A35` — cards y superficies secundarias
  - Gris suave `#6b6b88` — texto secundario
- **Tipografía:**
  - Títulos: `Inter` bold/semibold — precisión suiza
  - Drama: `Playfair Display` Italic — elegancia hotelera
  - Datos y monospace: `JetBrains Mono` — tecnología
- **Mood de imagen:** Mármol oscuro, acentos dorados, vestíbulos de hotel de lujo vacíos, relojes suizos, arquitectura de Luzern de noche

---

## Las 3 Propuestas de Valor (Feature Cards)

### 1. Automatización 24/7 en 15 idiomas
Tu equipo deja de responder las mismas preguntas. ZORA responde al instante en el idioma del huésped — alemán, inglés, francés, japonés, árabe. A las 3am o a las 3pm. Emails de bienvenida, upselling, special requests y reviews, todo automático.

*Micro-UI sugerida: Typewriter mostrando respuestas automáticas en diferentes idiomas rotando*

### 2. Cumplimiento suizo sin esfuerzo
Kurtaxe, HESTA, Lucerne Guest Card. Los formularios que cada hotel suizo rellena manualmente cada mes. ZORA los genera automáticamente al final del mes — listos para copiar y pegar en los portales oficiales. Cero trabajo manual. Cero errores.

*Micro-UI sugerida: Calendario mensual con días marcados en verde automáticamente, con CHF total calculado*

### 3. Inteligencia en tiempo real
Dashboard privado para director y recepción. RevPAR, ADR, ocupación, reputación online, nacionalidades, upselling generado. Todo lo que un director necesita ver cada mañana, sin abrir diez sistemas distintos.

*Micro-UI sugerida: Mini dashboard animado con KPIs incrementándose — CHF 152 RevPAR, 78% occupancy, 8.7 Booking score*

---

## CTA Principal
**"Book a Free Demo"** — agendar una demo de 20 minutos para ver ZORA funcionando en tiempo real con el hotel del director.

CTA secundario: **"See Live Demo"** → scroll a sección demo con chatbot interactivo embebido

---

## Arquitectura de Secciones

### 1. HEADER
- Logo `ZORA` en letra tracking-widest, color dorado `#c9a96e`
- Nav: Solution · Demo · Pricing · Dashboard · Contact
- Selector de idioma: DE / EN / FR / IT (esquina derecha)
- CTA pill: "Book a Demo" — dorado con texto negro
- Comportamiento: transparente → blur backdrop al hacer scroll

### 2. HÉROE — 100dvh
- Headline principal: `Inter` bold, enorme — *"Your hotel. Always on."* o *"Intelligent Concierge for Swiss Hotels"*
- Subheadline: `Playfair Display` italic, dorado — *"Built for Luzern. Built for precision."*
- Background: imagen de vestíbulo de hotel de lujo vacío, noche, luz dorada — degradado a `#0D0D12`
- Badge flotante: 🇨🇭 "Swiss Data Privacy · nDSG Compliant"
- Dos CTAs: "Book a Demo" (primario dorado) + "See It Live" (outline)
- Stat bar debajo del hero: `24/7 Support` · `15+ Languages` · `3h Saved Daily` · `Swiss Privacy`

### 3. THE PROBLEM — Sección oscura
- Título: *"Your front desk is answering the same questions. Again."*
- 3 pain points con iconos lineales:
  - Repetitive emails — mismas preguntas 20 veces al día
  - Language barriers — huéspedes de 40 países, un equipo
  - Manual compliance — Kurtaxe y HESTA cada mes a mano
- Fondo: `#0D0D12` con textura de ruido sutil

### 4. FEATURES — Las 3 propuestas de valor
- Layout: 3 cards grandes en grid
- Cada card con micro-UI funcional animada (ver descripciones arriba)
- Card style: `#2A2A35` con borde `rgba(201,169,110,0.15)`, top border dorado 2px
- Hover: elevación sutil + glow dorado

### 5. DEMO EN VIVO
- Título: *"Talk to a real Intelligent Concierge"*
- Chat widget embebido conectado a Claude API via Google Apps Script proxy
- System prompt: Hotel de lujo ficticio en Luzern, responde en el idioma del usuario
- Features list lateral: responde en tu idioma · conoce el hotel · disponible 24/7 · ofrece upgrades

### 6. PRICING — Dos planes
| | CORE | ELITE |
|--|--|--|
| Setup | ~~CHF 500~~ Incluido | ~~CHF 1.200~~ Incluido (Early adopters) |
| Precio | **CHF 179**/mes | **CHF 399**/mes |
| Para | Hostels · 3★ | Hotels 4-5★ |

- Badge "Most Popular" en Elite
- ROI hint bajo cada plan: *"Saves est. CHF 1,800/month in staff hours"*
- Trust badges: No contracts · Cancel anytime · 48h setup · Swiss data

### 7. DASHBOARD PREVIEW
- Screenshot o mockup animado del dashboard
- Features: RevPAR · ADR · Occupancy · Nationalities · ZORA Activity
- Dos vistas: Director vs. Reception
- CTA: "Access Dashboard →" → zorai.ch/dashboard.html

### 8. COMPLIANCE SUIZO — Sección diferenciadora
- Título: *"The only system built for Swiss hotel law"*
- 3 bloques: Kurtaxe automation · HESTA reports · Lucerne Guest Card
- Visual: mockup del email mensual que recibe el director con las tablas listas
- Copy: *"Other systems make you export data. ZORA sends you the forms filled."*

### 9. CONTACT / BOOK DEMO
- Formulario: nombre, hotel, email, teléfono, mensaje
- Integración Formspree
- CTA: *"Book a free 30-minute demo"*
- Info de contacto: info@zorai.ch · +41 78 315 32 54 · Kriens, Luzern 🇨🇭

### 10. FOOTER
- Fondo `#0D0D12` con bordes superiores redondeados
- Logo ZORA dorado + tagline
- Links: Impressum · Privacy · Dashboard
- Sistema de estado: punto verde pulsante + *"ZORA systems operational"*
- Copyright: *© 2026 ZORA · Intelligent Concierge for Hotels · 🇨🇭 Made in Switzerland*

---

## Sistema de Diseño Fijo

### Textura Visual
```css
/* Overlay de ruido global */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,...feTurbulence...");
  opacity: 0.04;
  pointer-events: none;
  z-index: 9999;
}
```

### Tokens CSS
```css
:root {
  --gold: #c9a96e;
  --gold-light: #e8c98a;
  --gold-dim: rgba(201, 169, 110, 0.15);
  --dark: #0D0D12;
  --dark2: #2A2A35;
  --ivory: #FAF8F5;
  --gray: #6b6b88;
  --green: #3dbe7a;
  --font-sans: 'Inter', sans-serif;
  --font-drama: 'Playfair Display', serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-card: 1.5rem;
  --radius-pill: 9999px;
}
```

### Interacciones
- Botones: escala 1.03 al hover + transición de color via `<span>` deslizante
- Cards: `translateY(-4px)` + `box-shadow: 0 20px 60px rgba(201,169,110,0.08)` al hover
- Links nav: underline dorado deslizante desde la izquierda

### Animaciones
- Entradas: `gsap.from(el, { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' })`
- Stagger en listas: `stagger: 0.12`
- Hero parallax: `gsap.to(heroImg, { yPercent: 30, scrollTrigger: { scrub: true } })`
- Contador KPIs: `gsap.to(counter, { innerText: targetValue, snap: { innerText: 1 }, duration: 2 })`

---

## Stack Técnico
- **React 19** + **Tailwind CSS v3.4.17**
- **GSAP 3** con ScrollTrigger para todas las animaciones de scroll
- **Lucide React** para iconografía
- **Playfair Display** + **Inter** + **JetBrains Mono** via Google Fonts
- Imágenes: Unsplash — hotel lobbies, Swiss architecture, luxury interiors, Lucerne night

---

## Contenido Multiidioma

El sistema de traducciones es un objeto JS con 4 keys: `en`, `de`, `fr`, `it`.  
Selector de idioma en el header cambia `document.documentElement.lang` y re-renderiza todos los elementos con atributo `data-i18n`.

Idioma por defecto: `de` (mercado suizo principal).

---

## Notas de Implementación

1. **El chatbot demo** conecta a `https://script.google.com/macros/s/AKfycby2FkgFTeKrMzak1gxIyAaZSDeYJapxJjn0mdfYpYb-1Q-eFB3YeF_C4xPIuvGO4bmL/exec` via POST
2. **El formulario de contacto** usa Formspree — endpoint a configurar
3. **Dashboard link**: zorai.ch/dashboard.html — abre en nueva pestaña
4. **Mobile first** — el 60% del tráfico de directores de hotel es móvil
5. **Performance**: imágenes con `loading="lazy"`, fonts con `display=swap`

---

## Directiva Final

No construyas un sitio web. Construye el escaparate digital de una empresa suiza de precisión. Cada sección debe sentirse como entrar en un hotel de 5 estrellas: silencio, elegancia, todo en su sitio. El visitante — un director de hotel suizo con 20 años de experiencia — debe sentir en 3 segundos que ZORA entiende su mundo mejor que cualquier otro sistema que haya visto.

Erradica los patrones genéricos de IA. ZORA no es un SaaS americano con gradientes púrpura. Es suizo, preciso, nocturno y dorado.

---

*ZORA · zorai.ch · info@zorai.ch · +41 78 315 32 54 · 🇨🇭 Kriens, Luzern*
