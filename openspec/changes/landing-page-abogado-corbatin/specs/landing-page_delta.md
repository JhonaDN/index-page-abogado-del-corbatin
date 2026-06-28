# Delta: Landing Page (sitio estático)

**Change ID:** `landing-page-abogado-corbatin`
**Affects:** `index.html`, `css/variables.css`, `css/styles.css`, `js/main.js`, `legal/privacidad.html`

---

## ADDED

### Requirement: Estructura de secciones del PRD §5

La landing page DEBE presentar, en `index.html`, las siguientes 9 secciones en este orden exacto: Hero, Prueba social/credenciales, Áreas de práctica, El problema/cómo ayudas, Cómo funciona, Testimonios, Sección de confianza, CTA final + formulario, Footer.

#### Scenario: Visitante recorre la página de arriba a abajo
- GIVEN un visitante abre `index.html`
- WHEN hace scroll de principio a fin
- THEN encuentra las 9 secciones en el orden definido por PRD §5, sin secciones adicionales intercaladas

### Requirement: CTA principal visible sin scroll

El hero DEBE incluir un botón de llamada a la acción visible dentro del viewport inicial, tanto en móvil (≥320px) como en escritorio.

#### Scenario: Carga inicial en móvil
- GIVEN un visitante con viewport de 375x667
- WHEN la página termina de cargar
- THEN el botón CTA principal es visible sin necesidad de hacer scroll

### Requirement: Paleta de color exacta con regla 60/30/10

Los estilos DEBEN usar únicamente los colores HEX definidos en PRD §4 (`#1E3A5F`, `#16304D`, `#C9A227`, `#2A6F77`, `#F8F9FA`, `#FFFFFF`, `#1A1A1A`, `#6B7280`, `#E5E7EB`, `#16A34A`), expuestos como variables CSS, respetando la proporción aproximada 60% neutros / 30% navy / 10% dorado.

#### Scenario: Inspección de la hoja de estilos
- GIVEN un desarrollador revisa `css/variables.css` y `css/styles.css`
- WHEN busca colores hardcodeados fuera de las variables definidas
- THEN no encuentra ningún color que no pertenezca a la paleta de PRD §4

### Requirement: Tipografía serif + sans-serif

Los títulos (h1–h3) DEBEN usar una tipografía serif (Playfair Display, con fallback Lora/serif del sistema) y el cuerpo de texto DEBE usar una sans-serif (Inter, con fallback Open Sans/sans-serif del sistema), según PRD §10.

#### Scenario: Renderizado de un encabezado y un párrafo
- GIVEN la hoja de estilos cargada
- WHEN se inspecciona un `<h1>` y un `<p>` cualquiera
- THEN el `<h1>` usa `font-family` serif y el `<p>` usa `font-family` sans-serif

### Requirement: Formulario de contacto con campos mínimos y mensaje de confidencialidad

El formulario de la sección "CTA final + formulario" DEBE incluir los campos Nombre, Email, Teléfono y Descripción breve del caso, validarlos en el cliente, mostrar un mensaje de confidencialidad visible junto al formulario y un mensaje de confirmación al enviarlo. No existe backend en esta versión.

#### Scenario: Envío válido del formulario
- GIVEN un visitante completa Nombre, Email, Teléfono y descripción del caso con datos válidos
- WHEN hace clic en el botón de envío
- THEN ve un mensaje de confirmación indicando que su solicitud fue recibida y un tiempo estimado de respuesta

#### Scenario: Envío con campos inválidos o vacíos
- GIVEN un visitante deja vacío algún campo requerido o ingresa un email con formato inválido
- WHEN hace clic en el botón de envío
- THEN el formulario no se envía y se muestra un mensaje de error específico por campo

### Requirement: Botón flotante de WhatsApp

La página DEBE incluir un botón flotante, visible en todas las secciones, que abra una conversación de WhatsApp mediante un enlace `wa.me` con número de teléfono en placeholder.

#### Scenario: Clic en el botón flotante
- GIVEN un visitante en cualquier punto de scroll de la página
- WHEN hace clic en el botón flotante de WhatsApp
- THEN se abre (o se intenta abrir) `https://wa.me/[NUMERO_WHATSAPP]` en una nueva pestaña

### Requirement: Placeholders marcados para datos reales faltantes

Todo dato real no definido en PRD §12 (ciudad exacta, años de experiencia, credenciales, testimonios, número de WhatsApp, dirección, foto, logo) DEBE representarse como texto visible entre corchetes (`[DATO PENDIENTE]`) para que sea fácil de ubicar y reemplazar.

#### Scenario: Búsqueda de pendientes antes de publicar
- GIVEN el sitio construido
- WHEN se ejecuta `grep -rn "\[" index.html legal/privacidad.html`
- THEN todos los resultados corresponden a placeholders de datos reales pendientes, no a texto final

---

## MODIFIED

(None — proyecto nuevo, no hay requisitos previos que modificar)

---

## REMOVED

(None)
