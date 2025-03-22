import { create } from 'zustand'
import { DashboardData } from '../type/dashboard'

interface DashboardState {
  data: DashboardData | null 
  loading: boolean
  error: string | null
  fetchDashboardData: () => Promise<void> 
}

const useDashboardStore = create<DashboardState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchDashboardData: async () => {
    try {
      set({ loading: true, error: null })

      const res = await fetch('/api/dashboard')
      if (!res.ok) throw new Error('Failed to fetch dashboard data')

      const jsonData: DashboardData = await res.json() 
      set({ data: jsonData, loading: false })
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },
}))

export default useDashboardStore
