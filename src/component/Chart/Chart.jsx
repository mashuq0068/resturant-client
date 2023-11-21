
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
// import useCartData from '../../Hooks/useCartData';
// import useChartData from '../../Hooks/useChartData';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import useAxios from '../../Hooks/useAxios';

// const colors = ['#0088FE','#FF8042' , '#00C49F', '#FFBB28','red' ];

// const data = [
//   {
//     name: 'Salad',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Soup',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Pizza',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Desert',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Drinks',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
  
// ];

// const getPath = (x, y, width, height) => {
//   return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//   Z`;
// };

// const TriangleBar = (props) => {
//   const { fill, x, y, width, height } = props;

//   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };



// // App.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';


// const Chart = () => {
//     const [totalmenu , setTotalMenu] = useState(null)
//     const axiosSecure = useAxios()
//     const salad = useChartData('salad')
//     const desert = useChartData('desert')
//     const pizza = useChartData('pizza')
//     const soup = useChartData('soup')
//     const drinks = useChartData('drinks')
//     useEffect(()=>{
//         axiosSecure.get('/adminCount')
//         .then(res => {
//             setTotalMenu(res.data)
//         })
//     },[])

  
//     return (
//         <div className='mt-[5%]'>
//                <BarChart
//       width={800}
//       height={500}
//       data={data}
//       margin={{
//         top: 20,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={colors[index % 20]} />
//         ))}
//       </Bar>
//     </BarChart>
//         </div>
//     );
// };

// export default Chart;

import { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import useAxios from '../../Hooks/useAxios';
import useChartData from '../../Hooks/useChartData';

const colors = ['#0088FE', '#FF8042', '#00C49F', '#FFBB28', 'red'];

const Chart = () => {
  const [totalmenu, setTotalMenu] = useState(null);
  const axiosSecure = useAxios();
  const salad = useChartData('salad')
      const desert = useChartData('dessert')
      const pizza = useChartData('pizza')
      const soup = useChartData('soup')
      const drinks = useChartData('drinks')

  useEffect(() => {
    axiosSecure.get('/adminCount').then((res) => {
      setTotalMenu(res.data);
    });
  }, []);

  const data = totalmenu
    ? [
        { name: 'Salad', uv: salad, pv: 0, amt: 0 },
        { name: 'Soup', uv: soup, pv: 0, amt: 0 },
        { name: 'Pizza', uv: pizza, pv: 0, amt: 0 },
        { name: 'Desert', uv: desert, pv: 0, amt: 0 },
        { name: 'Drinks', uv: drinks, pv: 0, amt: 0 },
      ]
    : [];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="mt-[5%]">
      <BarChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: 'top' }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Chart;
