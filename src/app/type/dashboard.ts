export interface Order {
  id: string
  customer: string
  status: 'Processing' | 'Shipped' | 'Delivered'
  amount: number
}

export interface VendorPerformance {
  vendor: string
  products: number
  rating: number
  revenue: number
}

export interface ChartData {
  name: string
  value: number
}

export interface SalesSummary {
  totalSales: number
  totalOrders: number
  activeVendors: number
  activeCustomers: number
  salesGrowth: number
  ordersGrowth: number
  vendorsGrowth: number
  customersGrowth: number
}

export interface TopProduct {
  name: string
  price: number
  sold: number
  imageUrl: string
}

export interface DashboardData {
  recentOrders: Order[]
  vendorPerformance: VendorPerformance[]
  salesSummary: SalesSummary
  topProducts: TopProduct[]
  chartData: ChartData[]
}
