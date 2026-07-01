<template>
  <section id="contacto" class="section section--navy">
    <div class="container cta-form__inner">
      <div class="cta-form__intro">
        <p class="eyebrow">Da el primer paso</p>
        <h2> Agendar consulta con El Abogado del Corbatín</h2>
        <p>
          Cuéntame brevemente tu situación y te contacto para definir los siguientes pasos. No se requiere
          compromiso para escribir.
        </p>
        <ul class="cta-form__points">
          <li>
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" />
            </svg>
            100% confidencial
          </li>
          <li>
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="9" /><path d="M12 7v5l4 2" />
            </svg>
            Respuesta en menos de 1 hora
          </li>
          <li>
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" />
            </svg>
            Sin compromiso
          </li>
        </ul>
        <a
          class="btn btn--ghost"
          href="https://wa.me/3229730276"
          target="_blank"
          rel="noopener"
          v-analytics="'whatsapp_cta_section'"
        >
          Escribir por WhatsApp
        </a>
      </div>

      <form class="contact-form" novalidate @submit.prevent="handleSubmit">
        <h3 class="contact-form__title">Cuéntame brevemente tu situación</h3>

        <div class="form-field" :class="{ 'has-error': errors.nombre }">
          <label for="nombre">Nombre completo <span aria-hidden="true">*</span></label>
          <input
            id="nombre"
            ref="nombreInput"
            v-model="fields.nombre"
            type="text"
            name="nombre"
            autocomplete="name"
            required
            minlength="2"
            @blur="validateField('nombre')"
          />
          <p class="form-field__error" role="alert">{{ errors.nombre }}</p>
        </div>

        <div class="form-field" :class="{ 'has-error': errors.telefono }">
          <label for="telefono">Teléfono / WhatsApp <span aria-hidden="true">*</span></label>
          <input
            id="telefono"
            ref="telefonoInput"
            v-model="fields.telefono"
            type="tel"
            name="telefono"
            autocomplete="tel"
            required
            @blur="validateField('telefono')"
          >
          <p class="form-field__error" role="alert">{{ errors.telefono }}</p>
        </div>

        <div class="form-field" :class="{ 'has-error': errors.caso }">
          <label for="caso">Breve descripción de tu caso <span aria-hidden="true">*</span></label>
          <textarea
            id="caso"
            ref="casoInput"
            v-model="fields.caso"
            name="caso"
            rows="4"
            required
            minlength="10"
            @blur="validateField('caso')"
          ></textarea>
          <p class="form-field__error" role="alert">{{ errors.caso }}</p>
        </div>

        <div class="confidentiality-note">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <p>
            <strong>Tu información es confidencial.</strong> Todo lo que compartas aquí está protegido por el
            secreto profesional del abogado y se usa exclusivamente para evaluar tu caso.
          </p>
        </div>

        <div class="form-field form-field--checkbox" :class="{ 'has-error': errors.privacidad }">
          <input
            id="privacidad"
            ref="privacidadInput"
            v-model="fields.privacidad"
            type="checkbox"
            name="privacidad"
            required
            @change="validateField('privacidad')"
          />
          <label for="privacidad">
            He leído y acepto el
            <NuxtLink to="/legal/privacidad" target="_blank">aviso de privacidad y tratamiento de datos personales</NuxtLink>
            <span aria-hidden="true">*</span>
          </label>
          <p class="form-field__error" role="alert">{{ errors.privacidad }}</p>
        </div>

        <button type="submit" class="btn btn--primary btn--lg btn--block" :disabled="isSubmitting" v-analytics="'form_submit'">
          Agendar mi consulta
        </button>

        <p
          class="contact-form__status"
          role="status"
          aria-live="polite"
          :class="{ 'is-error': status.type === 'error', 'is-success': status.type === 'success' }"
        >
          {{ status.message }}
        </p>
      </form>
    </div>
  </section>
</template>


<script setup lang="ts">
const { trackEvent } = useAnalytics()

const PHONE_PATTERN = /^[0-9+\s()-]{7,20}$/
const WHATSAPP_NUMBER = '3229730276'

const fields = reactive({
  nombre: '',
  telefono: '',
  caso: '',
  privacidad: false
})

const errors = reactive<Record<string, string>>({
  nombre: '',
  telefono: '',
  caso: '',
  privacidad: ''
})

const validators: Record<string, () => string> = {
  nombre: () => (fields.nombre.trim().length >= 2 ? '' : 'Ingresa tu nombre completo.'),
  telefono: () => (PHONE_PATTERN.test(fields.telefono.trim()) ? '' : 'Ingresa un número de teléfono válido.'),
  caso: () =>
    fields.caso.trim().length >= 10 ? '' : 'Cuéntanos un poco más sobre tu caso (mínimo 10 caracteres).',
  privacidad: () => (fields.privacidad ? '' : 'Debes aceptar el aviso de privacidad para continuar.')
}

const nombreInput = ref<HTMLElement | null>(null)
const telefonoInput = ref<HTMLElement | null>(null)
const casoInput = ref<HTMLElement | null>(null)
const privacidadInput = ref<HTMLElement | null>(null)

const fieldRefs: Record<keyof typeof validators, Ref<HTMLElement | null>> = {
  nombre: nombreInput,
  telefono: telefonoInput,
  caso: casoInput,
  privacidad: privacidadInput
}

function validateField(name: keyof typeof validators) {
  const validator = validators[name]
  errors[name] = validator ? validator() : ''
  return !errors[name]
}

function validateForm() {
  const names = Object.keys(validators) as Array<keyof typeof validators>
  let isValid = true
  let firstInvalid: keyof typeof validators | null = null

  for (const name of names) {
    if (!validateField(name)) {
      isValid = false
      if (!firstInvalid) firstInvalid = name
    }
  }

  if (firstInvalid) fieldRefs[firstInvalid]?.value?.focus()
  return isValid
}

const isSubmitting = ref(false)
const status = reactive({ message: '', type: '' as '' | 'error' | 'success' })

function handleSubmit() {
  if (!validateForm()) {
    status.type = 'error'
    status.message = 'Revisa los campos marcados antes de continuar.'
    return
  }

  isSubmitting.value = true
  status.type = ''
  status.message = 'Abriendo WhatsApp...'

  const message = [
    'Hola, quiero agendar una consulta con El Abogado del Corbatín.',
    `Nombre: ${fields.nombre.trim()}`,
    `Teléfono: ${fields.telefono.trim()}`,
    `Caso: ${fields.caso.trim()}`
  ].join('\n')

  trackEvent('form_submit_success', { caso_length: fields.caso.trim().length })
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener')

  status.type = 'success'
  status.message = 'Te estamos redirigiendo a WhatsApp para continuar la conversación.'

  fields.nombre = ''
  fields.telefono = ''
  fields.caso = ''
  fields.privacidad = false
  for (const name of Object.keys(errors)) errors[name] = ''

  isSubmitting.value = false
}
</script>