import { ref } from 'vue'

export function useDarkMode() {
  const isDarkMode = ref(true) // Always dark mode

  // Remove theme toggle functionality - always dark
  const toggleTheme = () => {
    // No-op function to maintain compatibility
  }

  return { isDarkMode, toggleTheme }
}
