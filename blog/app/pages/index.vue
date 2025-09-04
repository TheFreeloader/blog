<template>
     <div class="relative">
          <!-- Fixed background with parallax effect - same for all views -->
          <div
               class="fixed top-0 left-0 w-full h-screen bg-[url('~/assets/images/image.svg')] bg-cover bg-center bg-no-repeat">
          </div>

          <!-- Content overlay that scrolls -->
          <div class="relative z-10">
               <!-- Hero section -->
               <div
                    class="h-screen flex flex-col transition-all duration-700 ease-out px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                    <!-- Header at top-left -->
                    <div class="text-theme font-bold text-left mt-6 sm:mt-8 md:mt-12 lg:mt-14 mb-10">
                         <h1 class="text-xl sm:text-3xl md:text-5xl leading-tight tracking-wide">
                              FLOOD CONTROL LIST
                         </h1>
                         <h6 class="text-xs sm:text-xs md:text-md leading-relaxed tracking-wide opacity-80">
                              EVERY PROJECT, EVERY PESO. IN THE OPEN FOR PUBLIC SCRUTINY
                         </h6>
                    </div>

                    <!-- Main content centered -->
                    <div class="flex-1 flex items-start justify-center">
                         <div
                              class="flex flex-col md:flex-row justify-between items-center w-full gap-8 md:gap-12 lg:gap-16">
                              <!-- Left side content -->
                              <div
                                   class="text-theme font-bold text-center md:text-start transform transition-transform duration-1000 ease-out max-w-full">
                                   <h1
                                        class="font-poppins text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight">
                                        <span class="inline md:block">OCAMPO </span>
                                        <span class="inline md:block">CAMARINES </span>
                                        <span class="inline md:block">SUR</span>
                                   </h1>
                                   <div
                                        class="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 h-6 xs:h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 flex items-start justify-center md:justify-start max-w-full overflow-hidden">
                                        <span class="typewriter break-words whitespace-normal leading-tight">{{
                                             displayText
                                             }}</span>
                                        <span class="cursor flex-shrink-0 ml-1">|</span>
                                   </div>
                              </div>

                              <!-- Right side content - centered -->
                              <div
                                   class="text-theme font-bold text-center transform transition-transform duration-1000 ease-out max-w-full md:max-w-lg lg:max-w-4xl">
                                   <h1
                                        class="font-poppins text-2xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-relaxed tracking-wide md:mb-6">
                                        MAHIYA NAMAN KAYO
                                   </h1>
                                   <h2
                                        class="text-lg xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed tracking-wide mb-2 md:mb-6">
                                        sa inyong kapwa Pilipino!
                                   </h2>
                                   <h3
                                        class="text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-loose tracking-wide mb-4 md:mb-8 text-justify md:text-center">
                                        Mahiya naman kayo sa mga kabahayan nating naanod o nalubog sa mga pagbaha!
                                        Mahiya
                                        naman kayo lalo sa mga anak natin na magmamana sa mga utang na ginawa ninyo, na
                                        binulsa niyo lang ang pera.
                                   </h3>
                                   <h2
                                        class="text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed tracking-wide md:mb-4 font-semibold">
                                        PRESIDENT FERDINAND R. MARCOS JR.
                                   </h2>
                                   <h3
                                        class="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed tracking-wide">
                                        IN HIS FOURTH STATE OF THE NATION ADDRESS<br> JULY 28, 2025 | BATASANG PAMBANSA,
                                        QUEZON CITY.
                                   </h3>
                              </div>
                         </div>
                    </div>
               </div>

               <!-- Main content section -->
               <div class="min-h-screen bg-theme transition-all duration-500 ease-in-out">
                    <div
                         class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
                         <!-- Main Content -->
                         <main class="max-w-9xl mx-auto">
                              <div class="p-4 sm:p-6 md:p-8 lg:p-10">
                                   <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold mb-3 sm:mb-4 md:mb-6 leading-relaxed tracking-wide"
                                        style="color: var(--foreground)">
                                        LIST OF FLOOD CONTROL PROJECTS
                                   </h1>
                                   <p class="text-center mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide"
                                        style="color: var(--muted-foreground)">
                                        List of flood control projects in Ocampo, Camarines Sur.
                                   </p>

                                   <!-- Mobile Card Layout (< sm) -->
                                   <div class="block sm:hidden space-y-4 custom-scrollbar">
                                        <!-- Mobile Header -->
                                        <div class="mb-6 p-4 rounded-lg border shadow-sm"
                                             style="background: rgba(255, 255, 255, 0.05); border-color: var(--border); backdrop-filter: blur(8px);">
                                             <h2 class="text-lg font-bold text-center leading-relaxed tracking-wide"
                                                  style="color: var(--foreground)">
                                                  Projects Overview
                                             </h2>
                                             <p class="text-sm text-center mt-2 leading-relaxed tracking-wide"
                                                  style="color: var(--muted-foreground)">
                                                  Total Projects: {{ projects.length }}
                                             </p>
                                        </div>

                                        <div v-if="loading" class="text-center py-12">
                                             <div class="inline-flex items-center space-x-2">
                                                  <div class="w-4 h-4 rounded-full animate-pulse"
                                                       style="background-color: var(--primary)"></div>
                                                  <div class="animate-pulse leading-relaxed tracking-wide"
                                                       style="color: var(--muted-foreground)">Loading projects...</div>
                                             </div>
                                        </div>
                                        <div v-else-if="error" class="text-center py-12 px-4 rounded-lg border"
                                             style="background: rgba(239, 68, 68, 0.1); border-color: rgb(239, 68, 68);">
                                             <div class="text-red-500 leading-relaxed tracking-wide">{{ error }}</div>
                                        </div>
                                        <div v-else-if="projects.length === 0"
                                             class="text-center py-12 px-4 rounded-lg border"
                                             style="background: rgba(255, 255, 255, 0.05); border-color: var(--border);">
                                             <div class="leading-relaxed tracking-wide"
                                                  style="color: var(--muted-foreground)">No projects found.</div>
                                        </div>

                                        <!-- Mobile Project Cards -->
                                        <div v-else v-for="(project, index) in projects" :key="project.id"
                                             class="rounded-lg border shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                                             style="background: rgba(255, 255, 255, 0.08); border-color: var(--border); backdrop-filter: blur(8px);">

                                             <!-- Card Header -->
                                             <div class="px-4 py-3 border-b"
                                                  style="background: rgba(255, 255, 255, 0.05); border-color: var(--border);">
                                                  <div class="flex items-center justify-between">
                                                       <span class="text-xs font-medium px-2 py-1 rounded-full"
                                                            style="background: var(--primary); color: white;">
                                                            Project #{{ index + 1 }}
                                                       </span>
                                                       <span class="text-xs leading-relaxed tracking-wide"
                                                            style="color: var(--muted-foreground)">
                                                            ID: {{ project.contractId || 'N/A' }}
                                                       </span>
                                                  </div>
                                             </div>

                                             <!-- Card Content -->
                                             <div class="p-4">
                                                  <h3 class="font-bold mb-4 text-base leading-relaxed tracking-wide"
                                                       style="color: var(--foreground);">
                                                       {{ project.name }}
                                                  </h3>

                                                  <div class="space-y-3">
                                                       <div class="flex items-start justify-between py-2 border-b"
                                                            style="border-color: rgba(255, 255, 255, 0.1);">
                                                            <span class="font-medium text-sm flex items-center"
                                                                 style="color: var(--muted-foreground);">
                                                                 📍 Location:
                                                            </span>
                                                            <span class="text-sm text-right font-medium max-w-[60%]"
                                                                 style="color: var(--foreground);">
                                                                 {{ project.location }}
                                                            </span>
                                                       </div>

                                                       <div class="flex items-start justify-between py-2 border-b"
                                                            style="border-color: rgba(255, 255, 255, 0.1);">
                                                            <span class="font-medium text-sm flex items-center"
                                                                 style="color: var(--muted-foreground);">
                                                                 🏢 Corporation:
                                                            </span>
                                                            <span class="text-sm text-right font-medium max-w-[60%]"
                                                                 style="color: var(--foreground);">
                                                                 {{ project.corporation }}
                                                            </span>
                                                       </div>

                                                       <div class="flex items-start justify-between py-2 border-b"
                                                            style="border-color: rgba(255, 255, 255, 0.1);">
                                                            <span class="font-medium text-sm flex items-center"
                                                                 style="color: var(--muted-foreground);">
                                                                 💰 Cost:
                                                            </span>
                                                            <span class="text-sm text-right font-bold max-w-[60%]"
                                                                 style="color: var(--primary);">
                                                                 {{ project.cost }}
                                                            </span>
                                                       </div>

                                                       <div class="flex items-start justify-between py-2">
                                                            <span class="font-medium text-sm flex items-center"
                                                                 style="color: var(--muted-foreground);">
                                                                 📅 Completion:
                                                            </span>
                                                            <span class="text-sm text-right font-medium max-w-[60%]"
                                                                 style="color: var(--foreground);">
                                                                 {{ project.completionDate }}
                                                            </span>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   <!-- Tablet and Desktop Table Layout (>= sm) -->
                                   <div class="hidden sm:block overflow-x-auto custom-scrollbar">
                                        <!-- Desktop Header -->
                                        <div class="mb-6 p-4 rounded-lg border shadow-sm"
                                             style="background: rgba(255, 255, 255, 0.05); border-color: var(--border); backdrop-filter: blur(8px);">
                                             <div class="flex items-center justify-between">
                                                  <div>
                                                       <h2 class="text-xl font-bold leading-relaxed tracking-wide"
                                                            style="color: var(--foreground)">
                                                            Project Database
                                                       </h2>
                                                       <p class="text-sm mt-1 leading-relaxed tracking-wide"
                                                            style="color: var(--muted-foreground)">
                                                            Comprehensive flood control project listings
                                                       </p>
                                                  </div>
                                                  <div class="text-right">
                                                       <div class="text-2xl font-bold leading-relaxed tracking-wide"
                                                            style="color: var(--primary)">
                                                            {{ projects.length }}
                                                       </div>
                                                       <div class="text-sm leading-relaxed tracking-wide"
                                                            style="color: var(--muted-foreground)">
                                                            Total Projects
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>

                                        <!-- Enhanced Table -->
                                        <div class="rounded-lg border shadow-lg overflow-hidden"
                                             style="background: rgba(255, 255, 255, 0.03); border-color: var(--border); backdrop-filter: blur(8px);">
                                             <table class="w-full text-left border-collapse min-w-full">
                                                  <!-- Enhanced Table Header -->
                                                  <thead>
                                                       <tr class="border-b-2"
                                                            style="background: rgba(255, 255, 255, 0.08); border-color: var(--border);">
                                                            <th class="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-xs sm:text-sm md:text-base font-bold leading-relaxed tracking-wide"
                                                                 style="color: var(--foreground)">
                                                                 <div class="flex items-center space-x-2">
                                                                      <span>🏗️</span>
                                                                      <span>Project Name</span>
                                                                 </div>
                                                            </th>
                                                            <th class="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-xs sm:text-sm md:text-base font-bold leading-relaxed tracking-wide hidden md:table-cell"
                                                                 style="color: var(--foreground)">
                                                                 <div class="flex items-center space-x-2">
                                                                      <span>📍</span>
                                                                      <span>Location</span>
                                                                 </div>
                                                            </th>
                                                            <th class="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-xs sm:text-sm md:text-base font-bold leading-relaxed tracking-wide hidden md:table-cell"
                                                                 style="color: var(--foreground)">
                                                                 <div class="flex items-center space-x-2">
                                                                      <span>🏢</span>
                                                                      <span>Corporation</span>
                                                                 </div>
                                                            </th>
                                                            <th class="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-xs sm:text-sm md:text-base font-bold leading-relaxed tracking-wide"
                                                                 style="color: var(--foreground)">
                                                                 <div class="flex items-center space-x-2">
                                                                      <span>💰</span>
                                                                      <span>Cost</span>
                                                                 </div>
                                                            </th>
                                                            <th class="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-xs sm:text-sm md:text-base font-bold leading-relaxed tracking-wide hidden lg:table-cell"
                                                                 style="color: var(--foreground)">
                                                                 <div class="flex items-center space-x-2">
                                                                      <span>📅</span>
                                                                      <span>Completion Date</span>
                                                                 </div>
                                                            </th>
                                                            <th class="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-xs sm:text-sm md:text-base font-bold leading-relaxed tracking-wide hidden xl:table-cell"
                                                                 style="color: var(--foreground)">
                                                                 <div class="flex items-center space-x-2">
                                                                      <span>📋</span>
                                                                      <span>Contract ID</span>
                                                                 </div>
                                                            </th>
                                                       </tr>
                                                  </thead>
                                                  <tbody>
                                                       <!-- Loading State -->
                                                       <tr v-if="loading">
                                                            <td class="px-3 sm:px-4 md:px-6 py-12 text-center leading-relaxed tracking-wide"
                                                                 :colspan="6" style="color: var(--muted-foreground)">
                                                                 <div class="inline-flex items-center space-x-3">
                                                                      <div class="w-5 h-5 rounded-full animate-pulse"
                                                                           style="background-color: var(--primary)">
                                                                      </div>
                                                                      <div class="animate-pulse">Loading projects...
                                                                      </div>
                                                                 </div>
                                                            </td>
                                                       </tr>

                                                       <!-- Error State -->
                                                       <tr v-else-if="error">
                                                            <td class="px-3 sm:px-4 md:px-6 py-12 text-center leading-relaxed tracking-wide"
                                                                 :colspan="6">
                                                                 <div
                                                                      class="inline-flex items-center space-x-2 text-red-500">
                                                                      <span>⚠️</span>
                                                                      <span>{{ error }}</span>
                                                                 </div>
                                                            </td>
                                                       </tr>

                                                       <!-- Empty State -->
                                                       <tr v-else-if="projects.length === 0">
                                                            <td class="px-3 sm:px-4 md:px-6 py-12 text-center leading-relaxed tracking-wide"
                                                                 :colspan="6" style="color: var(--muted-foreground)">
                                                                 <div class="inline-flex items-center space-x-2">
                                                                      <span>📭</span>
                                                                      <span>No projects found.</span>
                                                                 </div>
                                                            </td>
                                                       </tr>

                                                       <!-- Project Rows -->
                                                       <tr v-else v-for="(project, index) in projects" :key="project.id"
                                                            class="border-b transition-all duration-200 hover:shadow-sm"
                                                            style="border-color: var(--border);"
                                                            :style="index % 2 === 0 ? 'background: rgba(255, 255, 255, 0.02)' : 'background: rgba(255, 255, 255, 0.01)'">

                                                            <!-- Project Name -->
                                                            <td class="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-xs sm:text-sm md:text-base font-semibold leading-relaxed tracking-wide"
                                                                 style="color: var(--foreground)">
                                                                 <div class="flex items-start space-x-2">
                                                                      <span class="text-xs px-2 py-1 rounded-full flex-shrink-0"
                                                                           style="background: var(--primary); color: white;">
                                                                           #{{ index + 1 }}
                                                                      </span>
                                                                      <span class="font-medium">{{ project.name
                                                                           }}</span>
                                                                 </div>
                                                            </td>

                                                            <!-- Location -->
                                                            <td class="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-xs sm:text-sm md:text-base leading-relaxed tracking-wide hidden md:table-cell"
                                                                 style="color: var(--foreground)">
                                                                 {{ project.location }}
                                                            </td>

                                                            <!-- Corporation -->
                                                            <td class="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-xs sm:text-sm md:text-base leading-relaxed tracking-wide hidden md:table-cell"
                                                                 style="color: var(--foreground)">
                                                                 {{ project.corporation }}
                                                            </td>

                                                            <!-- Cost -->
                                                            <td class="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-xs sm:text-sm md:text-base font-bold leading-relaxed tracking-wide"
                                                                 style="color: var(--primary)">
                                                                 {{ project.cost }}
                                                            </td>

                                                            <!-- Completion Date -->
                                                            <td class="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-xs sm:text-sm md:text-base leading-relaxed tracking-wide hidden lg:table-cell"
                                                                 style="color: var(--foreground)">
                                                                 {{ project.completionDate }}
                                                            </td>

                                                            <!-- Contract ID -->
                                                            <td class="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-xs sm:text-sm md:text-base font-mono leading-relaxed tracking-wide hidden xl:table-cell"
                                                                 style="color: var(--muted-foreground)">
                                                                 <code class="px-2 py-1 rounded text-xs"
                                                                      style="background: rgba(255, 255, 255, 0.1);">
                                                                      {{ project.contractId }}
                                                                 </code>
                                                            </td>
                                                       </tr>
                                                  </tbody>
                                             </table>
                                        </div>
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
          // Option 2: Fetch directly from public directory (bypasses API entirely)
          const res = await fetch('/dataset.json')
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

/* Enhanced scrollbar */
.custom-scrollbar::-webkit-scrollbar {
     height: 8px;
     width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
     background: rgba(255, 255, 255, 0.1);
     border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
     background: var(--primary);
     border-radius: 4px;
     transition: all 0.3s ease;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
     background: var(--primary-dark);
}

/* Table hover effects */
tr:hover {
     background: rgba(255, 255, 255, 0.05) !important;
     transform: translateY(-1px);
     transition: all 0.2s ease;
}

/* Card hover effects for mobile */
@media (max-width: 640px) {
     .block.sm\\:hidden>div:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
     }
}

/* Enhanced animations */
@keyframes fadeInUp {
     from {
          opacity: 0;
          transform: translateY(20px);
     }

     to {
          opacity: 1;
          transform: translateY(0);
     }
}

.block.sm\\:hidden>div,
.hidden.sm\\:block tr {
     animation: fadeInUp 0.3s ease-out;
}

/* Responsive table improvements */
@media (min-width: 640px) {
     .hidden.sm\\:block {
          border-radius: 12px;
          overflow: hidden;
     }
}

/* Enhanced mobile card styling */
@media (max-width: 640px) {
     .block.sm\\:hidden>div:not(:first-child):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(4)) {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
     }

     .block.sm\\:hidden>div:not(:first-child):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(4)):hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
     }
}
</style>