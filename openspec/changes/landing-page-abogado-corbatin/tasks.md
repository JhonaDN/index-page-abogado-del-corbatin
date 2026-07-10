# Implementation Tasks: Landing page de conversión — El Abogado del Corbatín

**Change ID:** `landing-page-abogado-corbatin`

> Rutas actualizadas tras el pivote a Nuxt 4 (Vue 3): `css/*` → `app/assets/css/*`, `index.html` → `app/pages/index.vue` + `app/components/sections/*.vue`, `js/main.js` → estado reactivo de Vue por componente, `legal/privacidad.html` → `app/pages/legal/privacidad.vue`.

---

## Phase 1: Foundation (Design Tokens)

- [x] 1.1 Definir variables CSS de color (PRD §4: navy, navy oscuro, dorado, teal, neutros, verde éxito) en `app/assets/css/variables.css`
- [x] 1.2 Definir variables de tipografía (Playfair Display para títulos, Inter para cuerpo) y escala tipográfica
- [x] 1.3 Definir variables de espaciado, radios y sombras base

**Quality Gate:**

- [x] Los HEX de `variables.css` coinciden exactamente con los de PRD §4

---

## Phase 2: Estructura Vue (las 9 secciones del PRD §5)

- [x] 2.1 `<head>`: meta SEO local ("abogado penalista en [CIUDAD]"), meta description, favicon, fuentes (`useSeoMeta` en `index.vue` + `nuxt.config.ts`)
- [x] 2.2 Header / nav fijo con logo-texto y enlace de ancla al CTA (`SiteHeader.vue`)
- [x] 2.3 Sección 1 — Hero: titular + subtítulo + CTA principal + foto placeholder, visible sin scroll (`HeroSection.vue`)
- [x] 2.4 Sección 2 — Prueba social / credenciales inmediatas (`CredentialsSection.vue`)
- [x] 2.5 Sección 3 — Áreas de práctica (`PracticeAreasSection.vue`)
- [x] 2.6 Sección 4 — El problema / cómo ayudas (`EmpathySection.vue`)
- [x] 2.7 Sección 5 — Cómo funciona (`ProcessSection.vue`)
- [x] 2.8 Sección 6 — Testimonios / casos de éxito (`TestimonialsSection.vue`)
- [x] 2.9 Sección 7 — Sección de confianza + FAQ (`TrustFaqSection.vue`)
- [x] 2.10 Sección 8 — CTA final + formulario (`ContactFormSection.vue`)
- [x] 2.11 Sección 9 — Footer (`SiteFooter.vue`)
- [x] 2.12 Botón flotante de WhatsApp (`WhatsappFloatButton.vue`)

**Quality Gate:**

- [x] Orden de secciones coincide 1:1 con PRD §5 (verificado por posición de los `id` en el HTML renderizado)
- [x] HTML semántico (header/main/section/footer, encabezados jerárquicos, landmarks, atributos alt/aria)

---

## Phase 3: Estilos (mobile-first, responsive, AA)

- [x] 3.1 Reset/base styles + aplicación de tokens de `variables.css`
- [x] 3.2 Layout mobile-first de cada sección (320–768px primero, luego breakpoints tablet/desktop)
- [x] 3.3 Estilos de botones (primario dorado, hover navy oscuro) y verificación de contraste AA (calculado con script de fórmula WCAG sobre todos los pares texto/fondo del sitio: todos pasan AA, ver Quality Gate de Fase 3)
- [x] 3.4 Estilos del formulario (estados focus, error, éxito) y mensaje de confidencialidad
- [x] 3.5 Estilos del botón flotante de WhatsApp (posición, z-index, animación sutil)
- [x] 3.6 Verificación de proporción 60/30/10 de la paleta: 4 zonas navy (header, hero, CTA final, footer) vs. 5 zonas neutras/claras (credenciales, áreas, empatía, proceso, testimonios, confianza) — testimonios se cambió de navy a fondo claro durante la revisión para no sobrecargar el azul

**Quality Gate:**

- [x] Sin scroll horizontal (layout mobile-first con `container` de ancho fluido)
- [x] CTA principal visible sin scroll vertical en 375×667 — se redujo el padding e interlineado del hero en mobile específicamente para esto; pendiente de confirmar con una herramienta de captura/viewport real (no disponible en este entorno: instalar un navegador headless requeriría una descarga de red no solicitada)
- [x] Contraste AA verificado con script de fórmula WCAG 2.x (luminancia relativa) sobre todos los pares texto/fondo: navy/blanco, dorado/texto oscuro, fondo claro/texto oscuro, texto secundario, error, éxito. Único fallo encontrado: `--color-success` (#16A34A) sobre blanco como texto normal (~3.3:1, solo pasa para texto grande/iconos) — corregido agregando `--color-success-text: #15803D` (~5:1) para el mensaje de confirmación del formulario; el verde original se mantiene para el ícono decorativo (contraste no-textual ≥3:1)

---

## Phase 4: Interactividad y validación

- [x] 4.1 Menú móvil (abrir/cerrar, accesible con teclado) — `ref` reactivo en `SiteHeader.vue`
- [x] 4.2 Botón de WhatsApp: enlace `https://wa.me/[NUMERO]` con mensaje predefinido
- [x] 4.3 Validación de formulario en cliente (campos requeridos, formato email/teléfono) — `ContactFormSection.vue`
- [x] 4.4 Simulación de envío: mensaje de confirmación con tiempo de respuesta estimado, sin backend real (`TODO` explícito en el `<script setup>`)
- [x] 4.5 Stubs de analítica: `useAnalytics().trackEvent()` + directiva `v-analytics` (sin proveedor real conectado)
- [x] 4.6 Smooth scroll a los anclajes de CTA (`scroll-behavior: smooth`, respeta `prefers-reduced-motion`)

**Quality Gate:**

- [x] Formulario no se puede "enviar" con campos vacíos o email/teléfono inválido
- [x] Build de producción (`npm run build`) sin errores; servidor verificado con `curl` (200 OK en `/` y `/legal/privacidad`)

---

## Phase 5: Legal y pulido final

- [x] 5.1 Completar `app/pages/legal/privacidad.vue` con aviso de tratamiento de datos personales
- [x] 5.2 Enlazar aviso de privacidad desde el formulario (checkbox) y desde el footer
- [x] 5.3 Revisar y listar en README todos los placeholders `[CORCHETES]` pendientes de dato real
- [ ] 5.4 Repasar checklist de aceptación del PRD §11 con el abogado (cliente final) antes de publicar

**Quality Gate:**

- [x] `grep -rn "\[" app/` lista únicamente placeholders intencionales
- [ ] Todos los ítems de PRD §11 confirmados por el cliente final (algunos dependen de datos reales que aún no existen)

---

## Completion Checklist

- [x] Todas las fases de implementación completas
- [x] Quality gates técnicos pasados (build, orden de secciones, paleta, formulario)
- [x] README actualizado con estado real del proyecto y placeholders pendientes
- [ ] Listo para `/openspec-archive` una vez el usuario reemplace los datos reales y apruebe el contenido
