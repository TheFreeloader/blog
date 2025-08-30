<template>
     <div class="relative">
          <!-- Fixed background with parallax effect -->
          <div
               class="fixed top-0 left-0 w-full h-screen bg-[url('~/assets/images/image.svg')] bg-cover bg-center bg-no-repeat">
          </div>

          <!-- Content overlay that scrolls -->
          <div class="relative z-10">
               <!-- Hero section -->
               <div
                    class="h-screen flex flex-col items-start ml-4 justify-center transition-all duration-700 ease-out sm:px-6 md:px-8">
                    <div class="text-theme font-bold text-start transform transition-transform duration-1000 ease-out">
                         <h1 class="font-poppins text-4xl sm:text-6xl md:text-5xl lg:text-8xl leading-tight lg:mt-20">
                              OCAMPO <br>CAMARINES<br>SUR
                         </h1>
                         <h1
                              class="text-sm sm:text-2xl md:text-3xl lg:text-4xl lg:mb-50 mt-4 sm:mt-6 md:mt-8 lg:mt-10 h-8 sm:h-10 md:h-12 lg:h-16 flex items-start max-w-full overflow-hidden">
                              <span class="typewriter break-words whitespace-normal leading-tight">{{ displayText
                              }}</span>
                              <span class="cursor flex-shrink-0">|</span>
                         </h1>
                    </div>
               </div>

               <div class="min-h-screen bg-theme transition-all duration-500 ease-in-out">
                    <div class="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
                         <!-- Main Content -->
                         <main class="max-w-7xl mx-auto">
                              <div class="bg-card rounded-lg p-6">
                                   <h1 class="text-4xl text-center font-semibold text-foreground mb-2">LIST OF FLOOD
                                        CONTROL PROJECTS
                                   </h1>
                                   <p class="text-center text-muted-foreground mb-6">
                                        list of flood control projects in Ocampo, Camarines Sur.
                                   </p>

                                   <div class="overflow-x-auto">
                                        <table class="w-full text-left border-collapse">
                                             <thead>
                                                  <tr>
                                                       <th class="px-3 py-2 border-b">Project Name</th>
                                                       <th class="px-3 py-2 border-b">Location</th>
                                                       <th class="px-3 py-2 border-b">Corporation</th>
                                                       <th class="px-3 py-2 border-b">Cost</th>
                                                       <th class="px-3 py-2 border-b">Completion Date</th>
                                                       <th class="px-3 py-2 border-b">Contract ID</th>
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  <tr v-if="loading">
                                                       <td class="px-3 py-2" colspan="6">Loading…</td>
                                                  </tr>
                                                  <tr v-else-if="error">
                                                       <td class="px-3 py-2 text-red-500" colspan="6">{{ error }}</td>
                                                  </tr>
                                                  <tr v-else-if="projects.length === 0">
                                                       <td class="px-3 py-2" colspan="6">No projects found.</td>
                                                  </tr>
                                                  <tr v-else v-for="project in projects" :key="project.id">
                                                       <td class="px-3 py-2 border-b">{{ project.name }}</td>
                                                       <td class="px-3 py-2 border-b">{{ project.location }}</td>
                                                       <td class="px-3 py-2 border-b">{{ project.corporation }}</td>
                                                       <td class="px-3 py-2 border-b">{{ project.cost }}</td>
                                                       <td class="px-3 py-2 border-b">{{ project.completionDate }}</td>
                                                       <td class="px-3 py-2 border-b">{{ project.contractId }}</td>
                                                  </tr>
                                             </tbody>
                                        </table>
                                   </div>
                              </div>
                         </main>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const phrases = [
     "Padagos Ocampo!",
     "Sulong Ocampo!",
     "Onward Ocampo!",
];

const { displayText } = useTypewriter(phrases);

const projects = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
     try {
          const res = await fetch('/api/get/projects')
          const json = await res.json()
          let all = []
          if (json && json.success && json.data && Array.isArray(json.data.projects)) {
               all = json.data.projects
          }

          // hardcoded filter term: 'ocampo' (case-insensitive)
          const term = 'ocampo'
          const termLower = term.toLowerCase()
          const keys = ['id', 'name', 'location', 'corporation', 'cost', 'completionDate', 'contractId']

          const matches = (p) => {
               for (const k of keys) {
                    const v = p[k]
                    if (v && String(v).toLowerCase().includes(termLower)) return true
               }
               return false
          }

          projects.value = all.filter(matches)
     } catch (err) {
          console.error('Failed to load projects', err)
          error.value = err && err.message ? err.message : String(err)
     } finally {
          loading.value = false
     }
})
</script>

<style scoped>
.cursor {
     animation: blink 1s infinite;
}

@keyframes blink {

     0%,
     50% {
          opacity: 1;
     }

     51%,
     100% {
          opacity: 0;
     }
}

.typewriter {
     font-family: "Poppins", sans-serif;
}
</style>