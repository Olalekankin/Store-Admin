import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { ChartData } from '../type/dashboard'

interface ChartProps {
  data: ChartData[]
}

export default function Chart({ data }: ChartProps) {
  if (!data || data.length === 0) return <p>Loading chart...</p>

  return (
    <div className='w-full'>
      <ResponsiveContainer width='100%' height={250}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray='3 3' opacity={0.3} />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='value'
            stroke='#8884d8'
            fill='#8884d8'
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
