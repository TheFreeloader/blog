export default defineEventHandler(async (event) => {
  try {
    // Simply redirect to the public JSON file
    // This way Vercel serves it as a static asset
    return await $fetch('/dataset.json')
  } catch (err) {
    console.error('Failed to load dataset:', err)
    setResponseStatus(event, 500)
    return { success: false, error: 'Failed to load projects data' }
  }
})
