# Implementation Tasks: Landing page de conversión — El Abogado del Corbatín

**Change ID:** `landing-page-abogado-corbatin`

---

## Phase 1: Foundation (Design Tokens)

- [ ] 1.1 Definir variables CSS de color (PRD §4: navy, navy oscuro, dorado, teal, neutros, verde éxito) en `css/variables.css`
- [ ] 1.2 Definir variables de tipografía (Playfair Display para títulos, Inter para cuerpo) y escala tipográfica
- [ ] 1.3 Definir variables de espaciado, radios y sombras base

**Quality Gate:**
- [ ] Los HEX de `variables.css` coinciden exactamente con los de PRD §4

---

## Phase 2: Estructura HTML (las 9 secciones del PRD §5)

- [ ] 2.1 `<head>`: meta SEO local ("abogado penalista en [CIUDAD]"), meta description, favicon, fuentes
- [ ] 2.2 Header / nav fijo con logo-texto y enlace de ancla al CTA
- [ ] 2.3 Sección 1 — Hero: titular + subtítulo + CTA principal + foto placeholder, visible sin scroll
- [ ] 2.4 Sección 2 — Prueba social / credenciales inmediatas (años, casos, tarjeta profesional, universidad)
- [ ] 2.5 Sección 3 — Áreas de práctica (lista de sub-especialidades penales)
- [ ] 2.6 Sección 4 — El problema / cómo ayudas (empatía + enfoque de trabajo)
- [ ] 2.7 Sección 5 — Cómo funciona (3 pasos)
- [ ] 2.8 Sección 6 — Testimonios / casos de éxito (con iniciales, placeholders)
- [ ] 2.9 Sección 7 — Sección de confianza (matrícula, confidencialidad, formación, FAQ con honorarios)
- [ ] 2.10 Sección 8 — CTA final + formulario (4 campos PRD §6 + mensaje de confidencialidad)
- [ ] 2.11 Sección 9 — Footer (contacto, dirección, datos legales, link a privacidad)
- [ ] 2.12 Botón flotante de WhatsApp (fuera del flujo de secciones, fixed)

**Quality Gate:**
- [ ] Orden de secciones coincide 1:1 con PRD §5
- [ ] HTML semántico (header/main/section/footer, encabezados jerárquicos, landmarks, atributos alt/aria)

---

## Phase 3: Estilos (mobile-first, responsive, AA)

- [ ] 3.1 Reset/base styles + aplicación de tokens de `variables.css`
- [ ] 3.2 Layout mobile-first de cada sección (320–768px primero, luego breakpoints tablet/desktop)
- [ ] 3.3 Estilos de botones (primario dorado, hover navy oscuro) y verificación de contraste AA
- [ ] 3.4 Estilos del formulario (estados focus, error, éxito) y mensaje de confidencialidad
- [ ] 3.5 Estilos del botón flotante de WhatsApp (posición, z-index, animación sutil)
- [ ] 3.6 Verificación de proporción 60/30/10 de la paleta a simple vista

**Quality Gate:**
- [ ] Sin scroll horizontal en 320px de ancho
- [ ] CTA principal visible sin scroll vertical en 375x667 y 1440x900

---

## Phase 4: Interactividad y validación (`js/main.js`)

- [ ] 4.1 Menú móvil (abrir/cerrar, accesible con teclado)
- [ ] 4.2 Botón de WhatsApp: enlace `https://wa.me/[NUMERO]` con mensaje predefinido
- [ ] 4.3 Validación de formulario en cliente (campos requeridos, formato email/teléfono)
- [ ] 4.4 Simulación de envío: mensaje de confirmación con tiempo de respuesta estimado, sin backend real (`TODO` explícito)
- [ ] 4.5 Stubs de analítica: funciones `trackEvent()` para clic en CTA, envío de formulario, clic en WhatsApp (sin proveedor real conectado)
- [ ] 4.6 Smooth scroll a los anclajes de CTA

**Quality Gate:**
- [ ] Formulario no se puede "enviar" con campos vacíos o email/teléfono inválido
- [ ] Sin errores en consola del navegador

---

## Phase 5: Legal y pulido final

- [ ] 5.1 Completar `legal/privacidad.html` con aviso de tratamiento de datos personales
- [ ] 5.2 Enlazar aviso de privacidad desde el formulario (checkbox/texto) y desde el footer
- [ ] 5.3 Revisar y listar en README todos los placeholders `[CORCHETES]` pendientes de dato real
- [ ] 5.4 Repasar checklist de aceptación del PRD §11

**Quality Gate:**
- [ ] `grep -rn "\[" index.html legal/privacidad.html` lista únicamente placeholders intencionales
- [ ] Todos los ítems de PRD §11 marcados como cumplidos o explícitamente pendientes de dato real

---

## Completion Checklist

- [ ] Todas las fases completas
- [ ] Todos los quality gates pasados
- [ ] README actualizado con estado real del proyecto y placeholders pendientes
- [ ] Listo para `/openspec-archive` una vez el usuario reemplace los datos reales y apruebe el contenido
