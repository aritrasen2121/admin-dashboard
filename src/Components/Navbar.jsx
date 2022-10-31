import React, { useState } from 'react'
import { applications} from '../Data'
import { useContext } from 'react'
import { StateContext } from '../context/ContextProvider'
// navbar icons
import GridViewIcon from '@mui/icons-material/GridView';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
const Navbar = () => {
  const {menu, setMenu} =useContext(StateContext)
  const [navdashboard, setNavdashboard] = useState(true)

  return (
    <div className={`flex flex-col p-3 bg-[#000424] shadow w-72 ${menu ? 'block md:relative absolute' : 'hidden'}`}>
        <div className="space-y-3 font-semibold text-gray-400">
          <div className="flex justify-between items-center mt-2">
            <h2 className="text-xl font-bold text-white">Navbar</h2>
            <LeaderboardIcon onClick={() => setMenu(false)} className='rotate-90' />
          </div>
          <div className='text-xs'>Menu</div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm ">
                <div className='flex items-center'>
                  <GridViewIcon />
                  <a className='ml-1 text-white' href="dashboard">Dashboard</a>
                  <div className='ml-auto' onClick={() => setNavdashboard(!navdashboard)}>
                    {navdashboard ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </div>
                </div>
                <div className={`ml-7 mt-3 flex flex-col ${navdashboard ? 'block' : 'hidden'}`}>
                  <a className='py-1 text-white' href="commerce">Commerce</a>
                  <a className='py-1' href="scss">Scss</a>
                  <a className='py-1' href="crypto">Crypto</a>
                </div>
              </li>
              <div className='py-2 text-gray-500 text-[.60rem]'>APPLICATIONS</div>
              {applications.map((ele) => {
                return (
                  <li className="rounded-sm flex items-center py-2">
                    <ele.icon />
                    <div className='ml-2'>{ele.name}</div>
                    {ele.leftIcon ? <ArrowDropDownIcon className='ml-auto' /> : <div className='ml-auto'>{ele.leftText} </div>}
                  </li>
                )
              })}
              <div className='py-2 text-gray-500 text-[.60rem]'>LAYOUTS</div>
              <div className='py-1 text-gray-500 text-[.60rem]'>PAGES</div>
              <li className="rounded-sm flex items-center py-2">
                <PersonAddAlt1OutlinedIcon />
                <div className='ml-2'>Authentication</div>
                <div className='ml-auto px-3 text-white bg-sky-400 rounded-xl'>8</div>
              </li>
              <li className="rounded-sm flex items-center py-2">
                <ViewInArIcon />
                <div className='ml-2'>Utility</div>
                <ArrowDropDownIcon className='ml-auto' />
              </li>
              <div className='py-2 text-gray-500 text-[.60rem]'>COMPONENTS</div>
              <li className="rounded-sm flex items-center py-2">
                <Grid4x4Icon />
                <div className='ml-2'>UI Elements</div>
                <ArrowDropDownIcon className='ml-auto' />
              </li>
              <li className="rounded-sm flex items-center py-2">
                <BorderColorIcon />
                <div className='ml-2'>Forms</div>
                <ArrowDropDownIcon className='ml-auto' />
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Navbar