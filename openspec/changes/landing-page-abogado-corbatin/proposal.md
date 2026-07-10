# Proposal: Landing page de conversión — El Abogado del Corbatín

**Change ID:** `landing-page-abogado-corbatin`
**Created:** 2026-06-28
**Status:** Implemented (Nuxt)

> **Nota de pivote de stack (2026-06-28):** la versión inicial de este proposal se escribió para un sitio estático en HTML + CSS + JS puro. Durante la implementación el proyecto se migró a **Nuxt 4 (Vue 3)**; se mantiene el mismo alcance, estructura, paleta y tipografía, solo cambia la tecnología de implementación. Este documento se actualizó para reflejar esa decisión.

---

## Problem Statement

"El Abogado del Corbatín" (despacho de derecho penal en Colombia) no tiene presencia web. Sin una landing page, los visitantes con un problema legal urgente no tienen forma de evaluar credibilidad, entender la especialidad del despacho ni solicitar una consulta. El PRD (`PRD.md`) define el objetivo: convertir visitantes con un problema legal en **solicitudes de consulta calificadas**, transmitiendo autoridad, confianza y discreción.

Pain points específicos del sector legal que debe resolver la página:

- El visitante llega con dudas ("¿me entiende?", "¿es confiable?", "¿cuánto cuesta?", "¿mis datos están seguros?").
- Sin prueba social ni credenciales visibles, no hay razón para confiar.
- Sin un CTA claro y visible, el visitante se va sin contactar.

## Proposed Solution

Construir la primera versión de la landing page con **Nuxt 4 (Vue 3 + Vite)**, sin backend propio, siguiendo exactamente la estructura, paleta y tipografía definidas en el PRD:

- 9 secciones de PRD §5, en el orden definido, ensambladas en `app/pages/index.vue` a partir de un componente por sección (`app/components/sections/`).
- Tokens de diseño (color, tipografía, espaciado) en `app/assets/css/variables.css`, respetando la paleta de PRD §4 y la regla 60/30/10.
- Estilos mobile-first en `app/assets/css/styles.css`, con contraste AA.
- Menú móvil y acordeón de FAQ como estado reactivo de Vue (`ref`/`reactive`) en `SiteHeader.vue` y `TrustFaqSection.vue`.
- Validación de formulario en cliente (sin backend) en `ContactFormSection.vue`.
- Botón flotante de WhatsApp (`WhatsappFloatButton.vue`) y stub de analítica (`useAnalytics()` + directiva `v-analytics`).
- `app/pages/legal/privacidad.vue`: aviso de privacidad / tratamiento de datos (obligatorio, PRD §6).
- Todo dato real aún no definido (ciudad exacta, años de experiencia, credenciales, testimonios, número de WhatsApp, dirección, foto) se deja como texto placeholder marcado con `[CORCHETES]`, fácil de ubicar con buscar-y-reemplazar.

## Scope

### In Scope

- Las 9 secciones de PRD §5 (Hero → Footer) en `app/pages/index.vue` + `app/components/sections/*.vue`.
- Paleta de color exacta de PRD §4 (Navy `#1E3A5F`, Navy oscuro `#16304D`, Dorado `#C9A227`, Teal `#2A6F77`, neutros y verde de éxito) aplicada con regla 60/30/10.
- Tipografía serif (Playfair Display) en títulos + sans-serif (Inter) en cuerpo, PRD §10.
- CTA principal visible sin scroll en el hero (mobile y desktop).
- Formulario de contacto con los campos de PRD §6 (Nombre, Email, Teléfono, descripción del caso), validación HTML5 + JS en cliente, mensaje de confidencialidad visible, sin envío a backend real (solo simulación de confirmación).
- Botón flotante de WhatsApp.
- Aviso de privacidad básico en `app/pages/legal/privacidad.vue`.
- Mobile-first, responsive, accesible (contraste AA, foco visible, landmarks semánticos).

### Out of Scope

- Backend real / integración con servicio de envío de formularios (Formspree, EmailJS, etc.) — se deja como TODO marcado.
- Analítica real (GA/GTM) — solo se deja el hook de eventos en JS, sin ID real.
- Fotografía profesional real, logo, testimonios reales — se usan placeholders.
- Revisión de cumplimiento normativo ante el colegio de abogados colombiano (PRD §8) — queda como recordatorio, no se resuelve en código.

## Impact Analysis

| Component                                                                                      | Change Required | Details                                                                 |
| ---------------------------------------------------------------------------------------------- | --------------- | ----------------------------------------------------------------------- |
| `app/pages/index.vue` + `app/components/sections/*.vue`                                        | Sí              | Las 9 secciones del PRD §5, una por componente                          |
| `app/assets/css/variables.css`                                                                 | Sí              | Tokens de color/tipografía/espaciado del PRD §4 y §10                   |
| `app/assets/css/styles.css`                                                                    | Sí              | Estilos mobile-first de todas las secciones, botón WhatsApp, formulario |
| `app/components/layout/*.vue` + `app/composables/useAnalytics.ts` + `app/plugins/analytics.ts` | Sí              | Header con menú móvil, footer, WhatsApp flotante, stub de analítica     |
| `app/pages/legal/privacidad.vue`                                                               | Sí              | Aviso de privacidad básico enlazado desde el formulario y el footer     |
| Backend / API                                                                                  | No              | Fuera de alcance en esta versión                                        |

## Architecture Considerations

- Nuxt en modo SSR/Node por defecto (`nuxt build` + `node .output/server/index.mjs`); también soporta `nuxt generate` para salida 100% estática si se prefiere ese despliegue, dado el requisito de carga <3s del PRD §9.
- `app/assets/css/variables.css` centraliza los tokens de color y tipografía como variables CSS (`:root`), para que el reemplazo de placeholders y ajustes de marca no requiera tocar `styles.css`.
- El formulario usa estado reactivo de Vue (`reactive`/`ref`) en vez de manipulación directa del DOM; se valida y "envía" en cliente, dejando un punto de integración claro (`// TODO: conectar a backend/servicio de formularios`) para una iteración futura.
- Un componente por sección (`app/components/sections/`) mantiene el archivo de ensamblaje (`index.vue`) corto y hace explícito el orden del PRD §5.

## Success Criteria

- [x] Las 9 secciones del PRD §5 existen en `app/pages/index.vue`, en el orden especificado.
- [x] La paleta de PRD §4 se usa exactamente (mismos HEX) — verificado en `variables.css` y el balance de fondos navy/claro en las secciones renderizadas.
- [x] El CTA principal es visible sin scroll en viewport móvil (375×667) y desktop — ajustado el espaciado del hero para garantizarlo en pantallas pequeñas.
- [x] El formulario tiene los 4 campos de PRD §6, valida en cliente y muestra mensaje de confidencialidad + confirmación de envío.
- [x] Existe botón flotante de WhatsApp funcional (enlace `wa.me` con placeholder de número).
- [x] Todos los datos reales faltantes están marcados con `[CORCHETES]` y son fáciles de encontrar (`grep -rn "\[" app/`).
- [x] Verificación de contraste AA con cálculo automatizado de la fórmula WCAG (luminancia relativa) sobre todos los pares texto/fondo de `variables.css`: todos pasan AA tras corregir el texto de confirmación de éxito del formulario (ver `tasks.md` Fase 3). Pendiente: confirmación visual con Lighthouse/axe en navegador real (no disponible en este entorno sandbox).

## Risks & Mitigations

| Risk                                                                                        | Probability | Impact                                                            | Mitigation                                                                                                           |
| ------------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Placeholders `[CORCHETES]` quedan publicados sin reemplazar                                 | Med         | Alto (incumplimiento PRD §8, datos falsos)                        | Centralizar placeholders, listarlos en README y en `tasks.md`; usar formato consistente y grep-eable                 |
| El dorado de acento (`#C9A227`) sobre fondos claros no cumple contraste AA en texto pequeño | Med         | Medio (accesibilidad)                                             | Usar el dorado solo en botones con texto oscuro/negro y tamaño suficiente, nunca como color de texto sobre blanco    |
| Sin backend, el usuario puede creer que su consulta fue enviada cuando no lo fue            | Bajo        | Alto (expectativa rota con un cliente con problema legal urgente) | Mensaje de confirmación explícito sobre que es una demo y comentario `TODO` claro en el JS para la próxima iteración |
