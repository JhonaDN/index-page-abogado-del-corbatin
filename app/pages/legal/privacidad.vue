<script setup lang="ts">
import { useHead, useRuntimeConfig, useSeoMeta } from 'nuxt/app'

const {
  public: { siteOrigin }
} = useRuntimeConfig()
const canonicalUrl = `${siteOrigin}${useRuntimeConfig().app.baseURL}legal/privacidad`

useSeoMeta({
  title: 'Política de privacidad | El Abogado del Corbatín',
  description:
    'Política de privacidad y tratamiento de datos personales de El Abogado del Corbatín, conforme a la normativa colombiana de protección de datos.',
  robots: 'noindex, follow'
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }]
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <div>
    <header class="header">
      <div class="container header__inner">
        <BrandLogo to="/" />
      </div>
    </header>

    <main class="container legal-doc">
      <NuxtLink class="back-link" to="/">&larr; Volver a la página principal</NuxtLink>

      <h1>Política de privacidad y tratamiento de datos personales</h1>
      <p>
        Última actualización: 2026-07-09. Este documento explica qué datos personales recopila
        <strong>El Abogado del Corbatín</strong> a través de este sitio web, para qué se usan y qué
        derechos tienes sobre ellos, en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de
        2013 de Colombia sobre protección de datos personales.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        Juan David Lorduy Romero, me puede encontrar en la ciudad de Bogotá, Colombia, correo de
        contacto
        <a href="mailto:lorduy.aso@outlook.es">lorduy.aso@outlook.es</a> y teléfono 322 9730276.
      </p>

      <h2>2. Datos que recopilamos</h2>
      <p>
        A través del formulario de contacto y el botón de WhatsApp de este sitio podemos recopilar:
      </p>
      <ul>
        <li>Nombre completo.</li>
        <li>Número de teléfono / WhatsApp.</li>
        <li>La descripción que escribas sobre tu situación o caso legal.</li>
      </ul>

      <h2>3. Finalidad del tratamiento</h2>
      <p>Los datos suministrados se usan exclusivamente para:</p>
      <ul>
        <li>Evaluar tu solicitud de consulta y contactarte para darle seguimiento.</li>
        <li>Prestar el servicio de asesoría o representación legal, si decides contratarlo.</li>
        <li>
          Dar cumplimiento a obligaciones legales y deontológicas propias del ejercicio de la
          abogacía.
        </li>
      </ul>
      <p>
        No se venden ni se comparten tus datos con terceros para fines comerciales o publicitarios.
        La información de tu caso está adicionalmente protegida por el secreto profesional del
        abogado.
      </p>

      <h2>4. Confidencialidad</h2>
      <p>
        Toda la información que compartas relacionada con tu caso es tratada de forma reservada. El
        acceso a esa información está limitado a quienes participan directamente en la evaluación o
        atención de tu situación.
      </p>

      <h2>5. Tus derechos</h2>
      <p>Como titular de los datos, puedes en cualquier momento:</p>
      <ul>
        <li>Conocer, actualizar y rectificar tus datos personales.</li>
        <li>Solicitar prueba de la autorización otorgada para el tratamiento de tus datos.</li>
        <li>Ser informado sobre el uso que se ha dado a tus datos personales.</li>
        <li>
          Revocar la autorización y/o solicitar la supresión de tus datos, cuando no exista un deber
          legal o contractual que lo impida.
        </li>
        <li>
          Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la
          normativa de protección de datos.
        </li>
      </ul>
      <p>
        Para ejercer estos derechos, escribe a
        <a href="mailto:lorduy.aso@outlook.es">lorduy.aso@outlook.es</a>.
      </p>

      <h2>6. Tiempo de conservación</h2>
      <p>
        Los datos se conservarán durante el tiempo necesario para atender tu solicitud y, en caso de
        que se formalice una relación profesional, durante el plazo exigido por las normas
        aplicables al ejercicio de la abogacía. [Confirmar plazo exacto de conservación con asesoría
        legal antes de publicar.]
      </p>

      <h2>7. Contacto</h2>
      <p>
        Si tienes preguntas sobre esta política o el tratamiento de tus datos, contáctanos en
        <a href="mailto:lorduy.aso@outlook.es">lorduy.aso@outlook.es</a> o al teléfono 322 9730276.
      </p>

      <p>
        <em>
          Este documento es una plantilla base y no constituye asesoría legal. Antes de publicarlo,
          debe ser revisado y ajustado por un profesional para garantizar el cumplimiento de la
          normativa colombiana de protección de datos y de las normas deontológicas aplicables.
        </em>
      </p>
    </main>

    <footer class="footer">
      <div class="container footer__bottom">
        <p>&copy; {{ currentYear }} El Abogado del Corbatín. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Estilos mínimos propios de esta página legal, no reutilizables en el resto del sitio */
.legal-doc {
  max-width: 760px;
  margin-inline: auto;
  padding-block: var(--space-6);
}
.legal-doc h2 {
  margin-top: var(--space-5);
}
.legal-doc p,
.legal-doc li {
  color: var(--color-text-secondary);
}
.legal-doc ul {
  list-style: disc;
  padding-left: 1.4rem;
  margin-bottom: var(--space-2);
}
.legal-doc ul li {
  margin-bottom: 0.4rem;
}
.back-link {
  display: inline-block;
  margin-bottom: var(--space-4);
}
</style>
