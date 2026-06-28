<script setup lang="ts">
const credentials = [
  {
    title: 'Tarjeta profesional',
    desc: 'T.P. [N.º tarjeta profesional], vigente y verificable ante el Consejo Superior de la Judicatura.',
    paths: ['M14 10h4M14 14h4'],
    rect: { x: 3, y: 5, width: 18, height: 14, rx: 2 },
    circle: { cx: 9, cy: 12, r: 2 }
  },
  {
    title: 'Confidencialidad garantizada',
    desc: 'Todo lo que compartas durante tu consulta está protegido por el secreto profesional del abogado. No se discute tu caso con terceros sin tu autorización.',
    paths: ['M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z', 'M9 12l2 2 4-4']
  },
  {
    title: 'Formación',
    desc: '[Título universitario] — [Universidad]. [Especialización o curso relevante en derecho penal].',
    paths: ['M12 3l9 4.5-9 4.5-9-4.5L12 3z', 'M5 9.5V15c0 1.5 3 3 7 3s7-1.5 7-3V9.5']
  },
  {
    title: 'Equipo de apoyo',
    desc: '[Describir si hay equipo: asistentes, paralegales o colaboradores que apoyan cada caso].',
    paths: ['M2 21c0-3.5 3-6 7-6s7 2.5 7 6', 'M16 21c0-2.3-1-4.2-2.6-5.4'],
    circle: { cx: 9, cy: 7, r: 3 },
    circle2: { cx: 17, cy: 8, r: 2.5 }
  }
]

const faqs = [
  {
    question: '¿Cuánto cuesta la consulta inicial?',
    answer:
      '[Explicar aquí cómo funciona el cobro: por ejemplo, si la primera consulta tiene un valor fijo de [PRECIO CONSULTA] o si es sin costo, y cómo se define el esquema de honorarios para el resto del proceso.] No se cobra ni se promete nada sin explicarte antes el costo con claridad.'
  },
  {
    question: '¿Mi información está realmente segura?',
    answer:
      'Sí. Toda la información que compartas, por el formulario, WhatsApp o en consulta, está cubierta por el secreto profesional del abogado y se usa únicamente para evaluar y atender tu caso.'
  },
  {
    question: '¿Atienden casos urgentes (capturas o audiencias inmediatas)?',
    answer:
      '[Confirmar política real de urgencias.] Para casos urgentes, escribe directamente por WhatsApp: se prioriza la respuesta frente a una citación o audiencia próxima.'
  },
  {
    question: '¿Atienden en toda Colombia o solo en [CIUDAD]?',
    answer: '[Confirmar cobertura real: ciudad principal, departamento o si se atiende todo el país de forma virtual.]'
  },
  {
    question: '¿Cuánto tiempo tardan en responder?',
    answer: 'El tiempo estimado de respuesta es de [X horas/24 horas] hábiles después de enviar tu solicitud.'
  }
]

const openFaqs = ref(new Set<number>())

function toggleFaq(index: number) {
  if (openFaqs.value.has(index)) {
    openFaqs.value.delete(index)
  } else {
    openFaqs.value.add(index)
  }
}
</script>

<template>
  <section id="confianza" class="section section--light">
    <div class="container">
      <header class="section-header">
        <p class="eyebrow">Por qué confiar tu caso</p>
        <h2>Credenciales, confidencialidad y respuestas claras</h2>
      </header>

      <div class="trust__grid">
        <div class="trust__credentials-list">
          <div v-for="item in credentials" :key="item.title" class="trust__credential">
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round">
              <rect v-if="item.rect" :x="item.rect.x" :y="item.rect.y" :width="item.rect.width" :height="item.rect.height" :rx="item.rect.rx" />
              <circle v-if="item.circle" :cx="item.circle.cx" :cy="item.circle.cy" :r="item.circle.r" />
              <circle v-if="item.circle2" :cx="item.circle2.cx" :cy="item.circle2.cy" :r="item.circle2.r" />
              <path v-for="d in item.paths" :key="d" :d="d" />
            </svg>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <div class="trust__faq">
          <h3>Preguntas frecuentes</h3>
          <div id="faqAccordion" class="accordion">
            <div v-for="(faq, index) in faqs" :key="faq.question" class="accordion-item">
              <button
                class="accordion-trigger"
                :aria-expanded="openFaqs.has(index)"
                :aria-controls="`faq-${index}`"
                @click="toggleFaq(index)"
              >
                {{ faq.question }}
                <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div :id="`faq-${index}`" class="accordion-panel" :class="{ 'is-open': openFaqs.has(index) }">
                <div>
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
