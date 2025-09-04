<template>
     <nav :class="[
          'fixed top-0 px-7 w-full z-50 transition-all duration-300',
          isScrolled ? '!bg-transparent backdrop-blur-md' : 'bg-transparent'
     ]">
          <div class="max-w-full mx-auto px-5 py-2 flex justify-between items-center">
               <div class="flex items-center gap-2">
                    <img src="~/assets/svg/logo.svg" alt="Logo" class="w-8 h-8" />
                    <h1 class="text-xl font-bold text-primary font-notable">Dev-for-Hire</h1>
               </div>
          </div>
     </nav>
</template>

<script setup>
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
     isScrolled.value = window.scrollY > 50
}

onMounted(() => {
     window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
     window.removeEventListener("scroll", handleScroll)
})
</script>
