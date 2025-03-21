export async function GET() {
  const data = {
    recentOrders: [
      {
        id: '#ORD-7843',
        customer: 'Sarah Johnson',
        status: 'Delivered',
        amount: 234.0,
      },
      {
        id: '#ORD-7842',
        customer: 'Michael Smith',
        status: 'Processing',
        amount: 178.0,
      },
      {
        id: '#ORD-7841',
        customer: 'Emma Wilson',
        status: 'Shipped',
        amount: 432.0,
      },
    ],
    vendorPerformance: [
      { vendor: 'TechHaven', products: 234, rating: 4.8, revenue: 45234 },
      { vendor: 'Fashion Plus', products: 187, rating: 4.6, revenue: 38432 },
      { vendor: 'Home Essentials', products: 156, rating: 4.7, revenue: 32654 },
    ],
    salesSummary: {
      totalSales: 124563.0,
      totalOrders: 1463,
      activeVendors: 284,
      activeCustomers: 8942,
      salesGrowth: 12.5, 
      ordersGrowth: 8.2,
      vendorsGrowth: 4.3,
      customersGrowth: 6.8,
    },
    topProducts: [
      { name: 'Smartphone ProMax', price: 999.0, sold: 842 },
      { name: 'Wireless Headphones', price: 249.0, sold: 654 },
      { name: 'SmartWatch Series 5', price: 399.0, sold: 524 },
    ],
  }

  return Response.json(data)
}
