<template>
  <div class="min-h-screen">
    <!-- Header -->
    <header class="bg-card border-b" :style="{ borderColor: 'var(--border)' }">
      <div class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-primary">Nordic Blog</h1>
        <button @click="toggleTheme"
          class="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
          {{ isDarkMode ? '☀️ Light' : '🌙 Dark' }}
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4 py-8">
      <div class="bg-card rounded-lg p-6 border" :style="{ borderColor: 'var(--border)' }">
        <h2 class="text-xl font-semibold text-foreground mb-4">Welcome to the Nordic Theme</h2>
        <p class="text-muted-foreground mb-4">
          This blog uses a beautiful Nordic-inspired color palette with support for both light and dark modes.
        </p>

        <!-- Demo Cards -->
        <div class="grid md:grid-cols-2 gap-4 mt-6">
          <div class="bg-background p-4 rounded border" :style="{ borderColor: 'var(--border)' }">
            <h3 class="text-lg font-medium text-foreground mb-2">Primary Colors</h3>
            <div class="flex gap-2">
              <div class="w-8 h-8 rounded bg-nord-8"></div>
              <div class="w-8 h-8 rounded bg-nord-9"></div>
              <div class="w-8 h-8 rounded bg-nord-10"></div>
            </div>
          </div>

          <div class="bg-background p-4 rounded border" :style="{ borderColor: 'var(--border)' }">
            <h3 class="text-lg font-medium text-foreground mb-2">Accent Colors</h3>
            <div class="flex gap-2">
              <div class="w-8 h-8 rounded bg-nord-7"></div>
              <div class="w-8 h-8 rounded bg-nord-13"></div>
              <div class="w-8 h-8 rounded bg-nord-14"></div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4 mt-6">
          <button class="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
            Primary Button
          </button>
          <button
            class="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-accent hover:text-accent-foreground transition-colors">
            Secondary Button
          </button>
          <button
            class="px-4 py-2 bg-destructive text-destructive-foreground rounded hover:bg-destructive/90 transition-colors">
            Destructive Button
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const isDarkMode = ref(false)

// Toggle theme function
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

// Load theme preference from localStorage and apply to <html>
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
})

// Save theme preference and update <html> class
watch(isDarkMode, (newValue) => {
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', newValue)
})
</script>