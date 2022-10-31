import React, { useState } from 'react'
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer, RadialBarChart, RadialBar, BarChart, Bar } from 'recharts'
import Chart from 'react-apexcharts'
// assets
import flag from '../assets/flag.png'
import dp from '../assets/dp.png'
import cover from '../assets/cover.jpg'
// components
import { RevOrderCustomer, areaData, topProduct, semipiData, barData} from '../Data'
// navbar icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useContext } from 'react'
import { StateContext } from '../context/ContextProvider'

const Dashboard = () => {
  const {menu, setMenu} =useContext(StateContext)
  const [profile, setProfile] = useState(true)

  return (
    <>
      <div className='w-full mx-auto bg-sky-100'>
        <div className="h-16 md:px-5 pl-2 flex justify-between items-center">
          <div className='flex'>
            <div onClick={() => setMenu(!menu)} className={`flex items-center ${menu ? 'hidden' :'block'} `}>
              <LeaderboardIcon className='rotate-90' />
            </div>
            <span className='font-semibold'>Dashboard</span>
          </div>
          <div className='flex'>
            <SearchIcon className='md:mx-2 sm:mx-1' />
            <img className='h-3 mt-1.5 md:mx-2  sm:mx-1' src={flag} alt="" />
            <DatasetOutlinedIcon className='md:mx-2 sm:mx-1' />
            <NotificationsNoneIcon className='md:mx-2 sm:mx-1' />
            <SettingsOutlinedIcon className='md:mx-2 sm:mx-1' />
            <img className='h-6 rounded-full md:mx-2 sm:mx-1' src={dp} onClick={() => setProfile(!profile)} alt="" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col mx-5">
          <div className="w-full flex flex-col md:order-1 order-2 bg-sky-100">
            <div className='flex gap-4 md:flex-row flex-col justify-between'>
              {
                RevOrderCustomer.map((ele) => {
                  return (
                    <div className='flex justify-between px-4 items-center bg-sky-50 h-16 md:w-1/3 rounded-xl'>
                      <div className='flex'>
                        <div className='h-9 w-9 mr-3 flex justify-center my-auto items-center rounded-md bg-sky-600'><ele.icon /></div>
                        <div className='flex flex-col'>
                          <div className='text-xs text-gray-500'>{ele.name}</div>
                          <div className='font-semibold'>{ele.numericdata}</div>
                        </div>
                      </div>
                      <div className=' flex items-end mt-auto mb-2 text-sm bg-red-100 text-red-500 font-semibold rounded-full px-1'>
                        {ele.progress}
                      </div>
                    </div>
                  )
                })
              }

            </div>
            <div className="mt-6 p-3 rounded-xl bg-sky-50">
              <div className='flex'>
                <div className=' font-semibold'>Overview</div>
                <div className='ml-auto text-sm'>Short By:</div>
                <div className='text-sm ml-1 text-gray-500'>yearly</div>
                <ArrowDropDownIcon />
              </div>
              <div className="flex md:flex-row flex-col">
                <div className='md:w-2/6 md:order-1 order-2  text-gray-500'>
                  <div className='font-semibold'>This Month</div>
                  <div className="flex">
                    <div className='text-xl font-semibold text-black'>$24,568</div>
                    <div className='mt-auto mb-1 ml-1 text-sm bg-red-100 text-red-500 font-semibold rounded-full px-1'>
                      +2.65%
                    </div>
                  </div>
                  <div className='flex md:justify-start justify-center'>
                    <table class="table-auto">
                      <tbody>
                        <tr>
                          <td className='border-b-2 border-r-2 text-center h-20 w-24'>
                            <div className='text-xs'>Orders</div>
                            <div className='font-semibold text-black'>4,566</div>
                          </td>
                          <td className='border-b-2 text-center h-20 w-24'>
                            <div className='text-xs'>Sales</div>
                            <div className='font-semibold text-black'>16,273</div>
                          </td>
                        </tr>
                        <tr>
                          <td className='border-b-2 border-r-2 text-center h-20 w-24'>
                            <div className='text-xs'>Order Value</div>
                            <div className='font-semibold text-black'>12.03%</div>
                          </td>
                          <td className='border-b-2 text-center h-20 w-24'>
                            <div className='text-xs'>Customers</div>
                            <div className='font-semibold text-black'>21,456</div>
                          </td>
                        </tr>
                        <tr>
                          <td className='border-r-2 text-center h-20 w-24'>
                            <div className='text-xs'>Income</div>
                            <div className='font-semibold text-black'>$35,652</div>
                          </td>
                          <td className=' text-center h-20 w-24'>
                            <div className='text-xs'>Expenses</div>
                            <div className='font-semibold text-black'>$12,248</div>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='md:order-2 md:w-5/6 h-[18rem] order-1 '>
                  <ResponsiveContainer width="90%" height="100%" >
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />

                      <Bar dataKey="pv" fill='#bae6fd' />
                      <Bar dataKey="uv" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className='flex md:flex-row flex-col mt-4'>
              <div className='p-3 md:w-1/3 bg-sky-50 rounded-xl md:mr-2 mt-2'>
                <div className='flex'>
                  <div className='font-semibold'>User Activity</div>
                  <div className='ml-auto text-gray-500 text-xs'>Weekly</div>
                  <ArrowDropDownIcon />
                </div>
                <div className='text-gray-500 text-xs pt-2 pb-1 '>This Month</div>
                <div className='font-semibold'>16,543</div>
                <div className='flex text-xs justify-end mr-2'>
                  <div className='h-3 w-3 mt-1 mr-1 rounded-full bg-blue-500'></div>
                  <div className='mr-1'>Current</div>
                  <div className='h-3 w-3 mt-1 mr-1 rounded-full bg-red-500'></div>
                  <div>Previous</div>
                </div>
                <div className='h-52'>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={areaData}
                      margin={{ top: 10 }}>
                      <defs >
                        <linearGradient id="colorcurrent" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                          <stop offset="60%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorprevious" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                          <stop offset="60%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Area type="monotone" dataKey="current" stroke="#8884d8" fillOpacity={1} fill="url(#colorcurrent)" />
                      <Area type="monotone" dataKey="previous" stroke="#82ca9d" fillOpacity={1} fill="url(#colorprevious)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className='p-3 md:w-1/3 bg-sky-50 rounded-xl md:mx-2 mt-2'>
                <div className='flex'>
                  <div className='font-semibold mb-6'>Order Status</div>
                  <MoreHorizIcon className='ml-auto' />
                </div >
                <div className='h-72 flex justify-center'>
                  <Chart
                    type='donut'
                    width='90%'
                    height='90%'
                    series={[60, 30, 10]}

                    options={{
                      labels: ['Completed', 'Pending', 'Cancel'],
                      legend: {
                        show: false
                      },
                      plotOptions: {
                        pie: {
                          dataLabels: {
                            name: {
                              show: false
                            },
                            value: {
                              show: false
                            }
                          }
                        }
                      }
                    }}
                  />
                </div>
                <div className="flex justify-around text-xs text-gray-500">
                  <div>Completed</div>
                  <div>Pending</div>
                  <div>Calcel</div>
                </div>
              </div>
              <div className='p-3 md:w-1/3 bg-sky-50 md:ml-2 mt-2 rounded-xl'>
                <div className='flex mb-2'>
                  <div className='font-semibold mb-6'>Top Product</div>
                  <div className='ml-auto text-gray-500 text-xs'>Monthly</div>
                  <ArrowDropDownIcon />
                </div>
                {
                  topProduct.map((ele) => {
                    return (
                      <div className='flex my-5'>
                        <div className='px-2 py-2 h-9 rounded-xl bg-blue-500 text-white font-semibold mr-3'>{ele.id}</div>
                        <div className='flex flex-col text-sm'>
                          <div className='text-gray-500'>{ele.name}</div>
                          <div className='font-semibold'>{ele.price}</div>
                        </div>
                        <div className='ml-auto h-6 font-semibold px-3 py-1 text-xs bg-gray-200 rounded-xl'>{ele.monthly}</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

          {/* profile section starts*/}
          <div className={`md:ml-5 ml-0 mb-10 text-center md:order-2 order-1 rounded-xl bg-sky-50 ${profile ? 'block' : 'hidden'}`}>
            <img className='h-24 w-full rounded-xl' src={cover} alt="" />
            <img className='h-16 mx-auto rounded-full' src={dp} alt="" />
            <div className='mx-3'>
              <div className='text-center font-bold'>Jennifer Bennet</div>
              <div className='text-center text-xs'>Product Designer</div>
              <div className="flex justify-around text-center my-5">
                <div>
                  <div className='text-sm font-semibold'>1,269</div>
                  <div className='text-xs'>Products</div>
                </div>

                <div>
                  <div className='text-sm font-semibold'>5.2k</div>
                  <div className='text-xs'>Followers</div>
                </div>
              </div>
              <div className='h-[1px] w-11/12 bg-gray-300 mx-auto'></div>

              <div className="flex justify-between my-4">
                <div className='text-md font-semibold'>Earning</div>
                <InfoOutlinedIcon fontSize="small" />
              </div>
              <div className='flex justify-center relative'>
                <RadialBarChart
                  width={300}
                  height={150}
                  padding={0}
                  innerRadius="70"
                  outerRadius="80"
                  data={semipiData}
                  startAngle={180}
                  endAngle={45}
                >
                  <RadialBar background clockWise={true} dataKey='uv' />
                </RadialBarChart>
                <div className=' text-2xl font-semibold absolute md:right-32 sm:right-40 top-10'>76%</div>

              </div>
              <div className='font-semibold text-lg mb-1'>$26,256</div>
              <div className='text-sm text-gray-500 font-semibold my-1'>Earning this Month</div>
              <div className="my-3">
                <span className='text-sm bg-red-100 text-red-500 font-semibold rounded-full px-1'>+2,65%</span>
                <span className='text-sm text-gray-500 font-semibold'>From previous periods</span>
              </div>
              <div className='h-[1px] w-11/12 bg-gray-300 mx-auto my-4'></div>
              <div className='text-left text-md font-semibold mb-4'>Recent Activity</div>
              <div className='flex mb-3'>
                <div className='flex flex-col  px-4 font-semibold rounded-xl bg-sky-100'>
                  <div>12</div>
                  <div>Sep</div>
                </div>
                <div className='mx-3 mt-2 text-sm text-left text-gray-500 font-semibold'>Responded to need "Volunteer Activities"</div>
              </div>
              <div className='flex mb-3'>
                <div className='flex flex-col  px-4 font-semibold rounded-xl bg-sky-100'>
                  <div>11</div>
                  <div>Sep</div>
                </div>
                <div className='mx-3 mt-2 text-sm text-left text-gray-500 font-semibold'>Everyone realizes would be disiarable...<div className='text-blue-600 text-left font-semibold'>Read more</div></div>

              </div>
              <div className='flex mb-3'>
                <div className='flex flex-col  px-4 font-semibold rounded-xl bg-sky-100'>
                  <div>10</div>
                  <div>Sep</div>
                </div>
                <div className='mx-3 mt-2 text-sm text-left text-gray-500 font-semibold'>Joined the group "Boardsmanship Forum"</div>
              </div>
            </div>
          </div>
          {/* profile section ends */}
        </div>
      </div>
    </>
    
  )
}

export default Dashboard