// Option 3: Create a composable with embedded data
import { ref } from 'vue'

export const useProjectsData = () => {
  const projects = ref([
    {
      "id": "7086",
      "name": "Construction of Hibago Flood Control, Ocampo, Camarines Sur",
      "location": "CAMARINES SUR",
      "corporation": "FP5 CONSTRUCTION & DEVELOPMENT CORPORATION (FORMERLY: JS & V ENTERPRISES GENERAL CONTRACTOR, INC.) / PHILWORKS CONSTRUCTION & SUPPLY",
      "cost": "48,463,641.53",
      "completionDate": "07/04/2024",
      "contractId": "23FF0054"
    }
    // Add more projects here
  ])

  const loading = ref(false)
  const error = ref(null)

  const loadProjects = () => {
    // Simulate async loading if needed
    return Promise.resolve(projects.value)
  }

  return {
    projects,
    loading,
    error,
    loadProjects
  }
}
