<template>
  <section id="confianza" class="section section--light">
    <div class="container">
      <header class="section-header">
        <h2>Credenciales, confidencialidad y respuestas claras</h2>
      </header>

      <div class="trust__grid">
        <div class="trust__faq">
          <h3>Preguntas frecuentes</h3>

          <div class="faq-tabs" role="tablist" aria-label="Categorías de preguntas frecuentes">
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              role="tab"
              class="faq-tabs__button"
              :class="{ 'is-active': activeCategory === category }"
              :aria-selected="activeCategory === category"
              @click="selectCategory(category)"
            >
              {{ category }}
            </button>
          </div>

          <div id="faqAccordion" class="accordion" role="tabpanel">
            <div v-for="faq in filteredFaqs" :key="faq.id" class="accordion-item">
              <button
                class="accordion-trigger"
                :aria-expanded="openFaqs.has(faq.id)"
                :aria-controls="`faq-${faq.id}`"
                @click="toggleFaq(faq.id)"
              >
                {{ faq.question }}
                <svg
                  class="icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                :id="`faq-${faq.id}`"
                class="accordion-panel"
                :class="{ 'is-open': openFaqs.has(faq.id) }"
              >
                <div>
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="faq-help">
            <p class="faq-help__text">
              ¿No encontraste lo que buscabas? Escríbeme directamente y te respondo de forma
              confidencial.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    id: 'consulta-inicial',
    category: 'Proceso y honorarios',
    question: '¿Cuánto cuesta la consulta inicial?',
    answer:
      'No te preocupes por el pago inicial, ni por los honorarios, que eso los podemos acordar para tu mayor beneficio, por ahora mi mayor  preocupación es defenderte y asesorarte dentro de la situación que estes afrontando y dentro de tu proceso penal.'
  },
  {
    id: 'tiempo-respuesta',
    category: 'Proceso y honorarios',
    question: '¿Cuánto tiempo tardan en responder?',
    answer: 'El tiempo estimado de respuesta es de 24 horas hábiles después de enviar tu solicitud.'
  },
  {
    id: 'informacion-segura',
    category: 'Confidencialidad',
    question: '¿Mi información está realmente segura?',
    answer:
      'Sí. Toda la información que compartas, por el formulario, WhatsApp o en consulta, está cubierta por el secreto profesional del abogado y se usa únicamente para evaluar y atender tu caso.'
  },
  {
    id: 'casos-urgentes',
    category: 'Urgencias y cobertura',
    question: '¿Atienden casos urgentes (capturas o audiencias inmediatas)?',
    answer:
      'Para casos urgentes, escribe directamente por WhatsApp: se prioriza la respuesta frente a una citación o audiencia próxima.'
  },
  {
    id: 'cobertura-colombia',
    category: 'Urgencias y cobertura',
    question: '¿Atienden en toda Colombia o solo en Bogotá?',
    answer:
      'Si tenego una covertura en todo el pais, no importa lugar de Colombia en el que te encuentres, puedo atenderte y representarte.'
  }
]

const categories = [...new Set(faqs.map((faq) => faq.category))]
const activeCategory = ref(categories[0])

const filteredFaqs = computed(() => faqs.filter((faq) => faq.category === activeCategory.value))

const openFaqs = ref(new Set<string>())

function selectCategory(category: string) {
  activeCategory.value = category
}

function toggleFaq(id: string) {
  if (openFaqs.value.has(id)) {
    openFaqs.value.delete(id)
  } else {
    openFaqs.value.add(id)
  }
}
</script>
