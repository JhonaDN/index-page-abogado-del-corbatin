<script setup lang="ts">
const faqs = [
  {
    question: "¿Cuánto cuesta la consulta inicial?",
    answer:
      "No te preocupes por el pago inicial, ni por los honorarios, que eso los podemos acordar para tu mayor beneficio, por ahora mi mayor  preocupación es defenderte y asesorarte dentro de la situación que estes afrontando y dentro de tu proceso penal.",
  },
  {
    question: "¿Mi información está realmente segura?",
    answer:
      "Sí. Toda la información que compartas, por el formulario, WhatsApp o en consulta, está cubierta por el secreto profesional del abogado y se usa únicamente para evaluar y atender tu caso.",
  },
  {
    question: "¿Atienden casos urgentes (capturas o audiencias inmediatas)?",
    answer:
      "[Confirmar política real de urgencias.] Para casos urgentes, escribe directamente por WhatsApp: se prioriza la respuesta frente a una citación o audiencia próxima.",
  },
  {
    question: "¿Atienden en toda Colombia o solo en [CIUDAD]?",
    answer:
      "[Confirmar cobertura real: ciudad principal, departamento o si se atiende todo el país de forma virtual.]",
  },
  {
    question: "¿Cuánto tiempo tardan en responder?",
    answer:
      "El tiempo estimado de respuesta es de [X horas/24 horas] hábiles después de enviar tu solicitud.",
  },
];

const openFaqs = ref(new Set<number>());

function toggleFaq(index: number) {
  if (openFaqs.value.has(index)) {
    openFaqs.value.delete(index);
  } else {
    openFaqs.value.add(index);
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
        <div class="trust__faq">
          <h3>Preguntas frecuentes</h3>
          <div id="faqAccordion" class="accordion">
            <div
              v-for="(faq, index) in faqs"
              :key="faq.question"
              class="accordion-item"
            >
              <button
                class="accordion-trigger"
                :aria-expanded="openFaqs.has(index)"
                :aria-controls="`faq-${index}`"
                @click="toggleFaq(index)"
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
                :id="`faq-${index}`"
                class="accordion-panel"
                :class="{ 'is-open': openFaqs.has(index) }"
              >
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
