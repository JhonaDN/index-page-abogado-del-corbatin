# Landing Page — El Abogado del Corbatín

Landing page de conversión para un despacho de **derecho penal** en Colombia, bajo la marca "El Abogado del Corbatín". Basado en el PRD compartido (v1.1).

**Estado actual:** solo esqueleto del proyecto (carpetas + archivos vacíos). Aún no hay HTML/CSS/JS escrito — se espera confirmar el contenido pendiente (sección "Por definir" abajo) antes de empezar a programar.

## Stack técnico

HTML + CSS + JS plano, sin framework ni build tool (decisión tomada para maximizar velocidad de carga y mantener control total sobre el peso de la página — requisito clave del PRD: <3s de carga).

`npm` se usa únicamente para correr un servidor local de desarrollo (`http-server`), no para build ni dependencias de producción.

```bash
npm install   # instala el servidor local (una sola vez)
npm run dev   # abre la página en el navegador con recarga del servidor
```

## Estructura de carpetas

```
index.html              → página principal (pendiente de escribir)
css/
  variables.css          → tokens de diseño: color y tipografía (pendiente)
  styles.css             → estilos del sitio (pendiente)
js/
  main.js                → menú móvil, botón WhatsApp, formulario, analítica (pendiente)
assets/
  img/                   → fotos, logo, imágenes de las secciones
  icons/                 → iconos SVG (WhatsApp, confianza, balanza, etc.)
legal/
  privacidad.html        → aviso de privacidad / tratamiento de datos (obligatorio por PRD §6)
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

## Pendiente por confirmar antes de escribir código

Estos datos son necesarios para no dejar placeholders genéricos en el sitio:

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

## Plan de trabajo (una vez confirmado lo anterior)

1. Definir tokens de diseño en `css/variables.css` (paleta y tipografía del PRD §4 y §10).
2. Construir `index.html` con las 9 secciones del PRD §5 (Hero → Footer), semántico y accesible.
3. Construir `css/styles.css` mobile-first, cumpliendo contraste AA.
4. Construir `js/main.js`: menú móvil, botón flotante de WhatsApp, validación y envío del formulario, hooks de analítica.
5. Completar `legal/privacidad.html` con el aviso de tratamiento de datos.
6. Revisar contra los criterios de aceptación del PRD §11.
7. Probar en navegador (mobile + desktop) y medir tiempo de carga.
