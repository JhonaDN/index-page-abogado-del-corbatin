# Landing Page — El Abogado del Corbatín

Landing page de conversión para un despacho de **derecho penal** en Colombia, bajo la marca "El Abogado del Corbatín". Basado en el PRD compartido (v1.1).

**Estado actual:** las 9 secciones del PRD §5 están implementadas en Nuxt (Vue 3), con validación de formulario en cliente, acordeón de FAQ y botón flotante de WhatsApp. Todo dato real aún no confirmado queda marcado con `[CORCHETES]` (ver `openspec/changes/landing-page-abogado-corbatin/`).

## Stack técnico

[Nuxt 4](https://nuxt.com) (Vue 3 + Vite). Sin backend: el formulario de contacto se valida en el cliente y simula un envío exitoso (`app/components/sections/ContactFormSection.vue`).

```bash
npm install     # instala dependencias
npm run dev     # http://localhost:3000, con recarga en caliente
npm run build   # build de producción
npm run generate # build estático (SSG), si se decide no usar SSR/Node en producción
```

## Estructura de carpetas

```
app/
  app.vue                  → raíz de la app, monta <NuxtPage />
  pages/
    index.vue              → ensambla las 9 secciones de la landing
    legal/privacidad.vue   → aviso de privacidad / tratamiento de datos
  components/
    layout/                → SiteHeader, SiteFooter, WhatsappFloatButton, BrandLogo
    sections/               → una sección del PRD §5 por componente
  composables/
    useAnalytics.ts        → stub de trackEvent() (PRD §9)
  plugins/
    analytics.client.ts    → directiva v-analytics, equivalente al listener de data-analytics
  assets/css/
    variables.css          → tokens de diseño: color y tipografía
    styles.css             → estilos del sitio
public/                    → favicon, robots.txt (assets estáticos servidos tal cual)
assets/                    → carpeta heredada para imágenes/iconos aún sin usar (img/, icons/)
```

## Información ya definida (PRD §12)

| Campo | Valor |
|---|---|
| Nombre / marca | El Abogado del Corbatín |
| Área de práctica | Derecho Penal |
| Cobertura | Colombia |
| Propuesta de valor | "Defensor de tus Derechos y experto en soluciones legales" |
| Años de experiencia / credenciales | Por definir |
| Testimonios | Por definir |
| Texto del CTA | Por definir — propuesta abajo |

### Propuesta de CTA (sujeta a cambios)

**"Agenda tu consulta confidencial"** — combina la acción (agendar) con el elemento de confianza más crítico en lo legal (confidencialidad), que es justo lo que el PRD pide reforzar en el CTA y en el formulario (§6, §7). Alternativas: "Habla con tu abogado ahora", "Solicita tu asesoría confidencial".

## Pendiente por confirmar antes de publicar

Estos datos son necesarios para reemplazar los placeholders `[CORCHETES]` del sitio (`grep -rn "\[" app/`):

- [ ] **Ciudad o ciudades específicas** dentro de Colombia para SEO local real (el PRD recomienda "abogado [especialidad] en [ciudad]"; "Colombia" solo es muy genérico para SEO local).
- [ ] **Sub-especialidades dentro de penal** a destacar (ej: delitos contra el patrimonio, delitos económicos, audiencias y juicio oral, libertad provisional, recursos de apelación, etc.).
- [ ] **Años de experiencia y casos atendidos** (cifra real o aproximada).
- [ ] **Credenciales:** universidad, tarjeta profesional / número de matrícula, asociaciones o especializaciones.
- [ ] **Foto profesional real** del abogado (archivo de imagen).
- [ ] **Logo o tratamiento visual del nombre** "El Abogado del Corbatín" (¿hay logo? ¿se usa un ícono de corbatín como marca?).
- [ ] **Testimonios o reseñas reales** (aunque sea con iniciales).
- [ ] **Número de WhatsApp y/o teléfono** para el botón flotante y el formulario.
- [ ] **Dirección física del despacho** (footer, requisito de confianza del PRD §7).
- [ ] **Backend del formulario:** no hay servidor — decidir si se usa un servicio externo (Formspree, EmailJS, Netlify Forms) o un backend propio para recibir las solicitudes de consulta.
- [ ] **Cuenta de analítica** (Google Analytics / GTM ID) para los eventos de conversión del PRD §9.
- [ ] **Verificación de cumplimiento** de publicidad legal ante el colegio de abogados / normativa colombiana aplicable (PRD §8) — recordatorio, no se resuelve en el código.

## Plan de trabajo restante

1. Reemplazar los placeholders `[CORCHETES]` con datos reales (ver lista arriba).
2. Conectar el formulario a un servicio real de envío o backend propio.
3. Conectar `useAnalytics()` a Google Analytics / GTM.
4. Revisar contra los criterios de aceptación del PRD §11.
5. Probar en navegador (mobile + desktop) y medir tiempo de carga.
