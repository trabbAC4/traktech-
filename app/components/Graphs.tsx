import {AreaChart} from '@tremor/react';
import {DonutChart, Legend} from "@tremor/react";




export default function Graphs() {
    const chartdata = [
        {
          date: 'Jan 22',
          SemiAnalysis: 2890,
          'The Pragmatic Engineer': 2338,
        },
        {
          date: 'Feb 22',
          SemiAnalysis: 2756,
          'The Pragmatic Engineer': 2103,
        },
        {
          date: 'Mar 22',
          SemiAnalysis: 3322,
          'The Pragmatic Engineer': 2194,
        },
        {
          date: 'Apr 22',
          SemiAnalysis: 3470,
          'The Pragmatic Engineer': 2108,
        },
        {
          date: 'May 22',
          SemiAnalysis: 3475,
          'The Pragmatic Engineer': 1812,
        },
        {
          date: 'Jun 22',
          SemiAnalysis: 3129,
          'The Pragmatic Engineer': 1726,
        },
        {
          date: 'Jul 22',
          SemiAnalysis: 3490,
          'The Pragmatic Engineer': 1982,
        },
        {
          date: 'Aug 22',
          SemiAnalysis: 2903,
          'The Pragmatic Engineer': 2012,
        },
        {
          date: 'Sep 22',
          SemiAnalysis: 2643,
          'The Pragmatic Engineer': 2342,
        },
        {
          date: 'Oct 22',
          SemiAnalysis: 2837,
          'The Pragmatic Engineer': 2473,
        },
        {
          date: 'Nov 22',
          SemiAnalysis: 2954,
          'The Pragmatic Engineer': 3848,
        },
        {
          date: 'Dec 22',
          SemiAnalysis: 3239,
          'The Pragmatic Engineer': 3736,
        },
      ];
    const companies = [
        {
            name: 'WayPoint Technologies',
            sales: 980,
          },
          {
            name: 'Samsara',
            sales: 456,
          },
          {
            name: 'Hong Kong',
            sales: 390,
          },
          {
            name: 'San Francisco',
            sales: 240,
          },
          {
            name: 'Singapore',
            sales: 190,
          },
        
    ]

      
      const dataFormatter = (number: number | bigint) =>
        `$${Intl.NumberFormat('us').format(number).toString()}`;
      const valueFormatter = (number: number) =>
        `$ ${Intl.NumberFormat('us').format(number).toString()}`;
      
        return (
        <>
            <AreaChart
              className="h-80"
              data={chartdata}
              index="date"
              categories={['SemiAnalysis', 'The Pragmatic Engineer']}
              colors={['blue', 'green']}
              valueFormatter={dataFormatter}
              yAxisWidth={60}
              onValueChange={(v) => console.log(v)}
            />
            <div className="flex items-center justify-center space-x-6">
                <DonutChart
                data={companies}
                category="sales"
                index="name"
                valueFormatter={valueFormatter}
                colors={['blue', 'green', 'purple', 'violet', 'fuchsia']}
                className="w-40"
                />
            <Legend
            categories={['New York', 'London', 'Hong Kong', 'San Francisco', 'Singapore']}
            colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
            className="max-w-xs"
            />
            </div>
        </>


        );

          

}