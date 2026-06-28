# Proposal: Landing page de conversión — El Abogado del Corbatín

**Change ID:** `landing-page-abogado-corbatin`
**Created:** 2026-06-28
**Status:** Draft

---

## Problem Statement

"El Abogado del Corbatín" (despacho de derecho penal en Colombia) no tiene presencia web. Sin una landing page, los visitantes con un problema legal urgente no tienen forma de evaluar credibilidad, entender la especialidad del despacho ni solicitar una consulta. El PRD (`PRD.md`) define el objetivo: convertir visitantes con un problema legal en **solicitudes de consulta calificadas**, transmitiendo autoridad, confianza y discreción.

Pain points específicos del sector legal que debe resolver la página:
- El visitante llega con dudas ("¿me entiende?", "¿es confiable?", "¿cuánto cuesta?", "¿mis datos están seguros?").
- Sin prueba social ni credenciales visibles, no hay razón para confiar.
- Sin un CTA claro y visible, el visitante se va sin contactar.

## Proposed Solution

Construir la primera versión de la landing page como sitio estático (HTML + CSS + JS puro, sin framework ni build tool), siguiendo exactamente la estructura, paleta y tipografía definidas en el PRD:

- 9 secciones de PRD §5, en el orden definido, en `index.html`.
- Tokens de diseño (color, tipografía, espaciado) en `css/variables.css`, respetando la paleta de PRD §4 y la regla 60/30/10.
- Estilos mobile-first en `css/styles.css`, con contraste AA.
- `js/main.js`: menú móvil, botón flotante de WhatsApp, validación de formulario en cliente (sin backend), hooks de analítica (eventos de CTA, formulario, WhatsApp).
- `legal/privacidad.html`: aviso de privacidad / tratamiento de datos (obligatorio, PRD §6).
- Todo dato real aún no definido (ciudad exacta, años de experiencia, credenciales, testimonios, número de WhatsApp, dirección, foto) se deja como texto placeholder marcado con `[CORCHETES]`, fácil de ubicar con buscar-y-reemplazar.

## Scope

### In Scope
- Las 9 secciones de PRD §5 (Hero → Footer) en `index.html`.
- Paleta de color exacta de PRD §4 (Navy `#1E3A5F`, Navy oscuro `#16304D`, Dorado `#C9A227`, Teal `#2A6F77`, neutros y verde de éxito) aplicada con regla 60/30/10.
- Tipografía serif (Playfair Display) en títulos + sans-serif (Inter) en cuerpo, PRD §10.
- CTA principal visible sin scroll en el hero (mobile y desktop).
- Formulario de contacto con los campos de PRD §6 (Nombre, Email, Teléfono, descripción del caso), validación HTML5 + JS en cliente, mensaje de confidencialidad visible, sin envío a backend real (solo simulación de confirmación).
- Botón flotante de WhatsApp.
- Aviso de privacidad básico en `legal/privacidad.html`.
- Mobile-first, responsive, accesible (contraste AA, foco visible, landmarks semánticos).

### Out of Scope
- Backend real / integración con servicio de envío de formularios (Formspree, EmailJS, etc.) — se deja como TODO marcado.
- Analítica real (GA/GTM) — solo se deja el hook de eventos en JS, sin ID real.
- Fotografía profesional real, logo, testimonios reales — se usan placeholders.
- Revisión de cumplimiento normativo ante el colegio de abogados colombiano (PRD §8) — queda como recordatorio, no se resuelve en código.
- Migración a React/Tailwind u otro framework.

## Impact Analysis

| Component | Change Required | Details |
|-----------|-----------------|---------|
| `index.html` | Sí | Construir desde cero las 9 secciones del PRD §5 |
| `css/variables.css` | Sí | Definir tokens de color/tipografía/espaciado del PRD §4 y §10 |
| `css/styles.css` | Sí | Estilos mobile-first de todas las secciones, botón WhatsApp, formulario |
| `js/main.js` | Sí | Menú móvil, WhatsApp flotante, validación de formulario, stubs de analítica |
| `legal/privacidad.html` | Sí | Aviso de privacidad básico enlazado desde el formulario y el footer |
| Backend / API | No | Fuera de alcance en esta versión |

## Architecture Considerations

- Sitio 100% estático, sin dependencias de build en producción (coincide con la decisión ya documentada en `README.md` del proyecto, motivada por el requisito de carga <3s del PRD §9).
- `css/variables.css` centraliza los tokens de color y tipografía como variables CSS (`:root`), para que el reemplazo de placeholders y ajustes de marca no requiera tocar `styles.css`.
- `js/main.js` sin dependencias externas; el formulario se valida y "envía" en cliente, dejando un punto de integración claro (`// TODO: conectar a backend/servicio de formularios`) para una iteración futura.
- Estructura de carpetas ya existente (`css/`, `js/`, `assets/`, `legal/`) se respeta tal cual.

## Success Criteria

- [ ] Las 9 secciones del PRD §5 existen en `index.html`, en el orden especificado.
- [ ] La paleta de PRD §4 se usa exactamente (mismos HEX) y se puede verificar visualmente la proporción 60/30/10.
- [ ] El CTA principal es visible sin scroll en viewport móvil (375px) y desktop (1440px).
- [ ] El formulario tiene los 4 campos de PRD §6, valida en cliente y muestra mensaje de confidencialidad + confirmación de envío.
- [ ] Existe botón flotante de WhatsApp funcional (enlace `wa.me` con placeholder de número).
- [ ] Todos los datos reales faltantes están marcados con `[CORCHETES]` y son fáciles de encontrar (`grep -r "\["`).
- [ ] La página pasa una verificación visual básica de contraste AA en texto sobre fondo navy y dorado.

## Risks & Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Placeholders `[CORCHETES]` quedan publicados sin reemplazar | Med | Alto (incumplimiento PRD §8, datos falsos) | Centralizar placeholders, listarlos en README y en `tasks.md`; usar formato consistente y grep-eable |
| El dorado de acento (`#C9A227`) sobre fondos claros no cumple contraste AA en texto pequeño | Med | Medio (accesibilidad) | Usar el dorado solo en botones con texto oscuro/negro y tamaño suficiente, nunca como color de texto sobre blanco |
| Sin backend, el usuario puede creer que su consulta fue enviada cuando no lo fue | Bajo | Alto (expectativa rota con un cliente con problema legal urgente) | Mensaje de confirmación explícito sobre que es una demo y comentario `TODO` claro en el JS para la próxima iteración |
