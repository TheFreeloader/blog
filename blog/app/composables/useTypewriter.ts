import { ref, onMounted, onUnmounted } from "vue";

export function useTypewriter(phrases: string[] = []) {
  const displayText = ref("");
  const currentPhraseIndex = ref(0);
  const currentCharIndex = ref(0);
  const isDeleting = ref(false);
  let typewriterInterval: NodeJS.Timeout | null = null;
  let pauseTimeout: NodeJS.Timeout | null = null;

  const startInterval = () => {
    typewriterInterval = setInterval(
      typewriterEffect,
      isDeleting.value ? 50 : 100
    );
  };

  const stopInterval = () => {
    if (typewriterInterval) {
      clearInterval(typewriterInterval);
      typewriterInterval = null;
    }
  };

  const typewriterEffect = () => {
    if (phrases.length === 0) return;

    const currentPhrase = phrases[currentPhraseIndex.value];
    if (!currentPhrase) return;

    if (!isDeleting.value) {
      // Typing
      if (currentCharIndex.value < currentPhrase.length) {
        const nextChar = currentPhrase[currentCharIndex.value];
        displayText.value = currentPhrase.slice(0, currentCharIndex.value + 1);
        currentCharIndex.value++;

        // If we just typed "!", pause before continuing
        if (nextChar === "!") {
          stopInterval();
          pauseTimeout = setTimeout(() => {
            isDeleting.value = true;
            startInterval();
          }, 2000);
          return;
        }
      } else {
        // Reached end of phrase normally
        stopInterval();
        pauseTimeout = setTimeout(() => {
          isDeleting.value = true;
          startInterval();
        }, 2000);
      }
    } else {
      // Deleting
      if (currentCharIndex.value > 0) {
        displayText.value = currentPhrase.slice(0, currentCharIndex.value - 1);
        currentCharIndex.value--;
      } else {
        // Move to next phrase
        isDeleting.value = false;
        currentPhraseIndex.value =
          (currentPhraseIndex.value + 1) % phrases.length;
      }
    }
  };

  onMounted(() => {
    if (phrases.length > 0) {
      startInterval();
    }
  });

  onUnmounted(() => {
    stopInterval();
    if (pauseTimeout) {
      clearTimeout(pauseTimeout);
    }
  });

  return {
    displayText,
    currentPhraseIndex,
    currentCharIndex,
    isDeleting,
  };
}
