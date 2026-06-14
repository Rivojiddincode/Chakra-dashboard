import React from 'react'
import "./Dashboard.css"
import Wallet from '../../assets/img/svg/wallet.svg'
import Braw from '../../assets/img/svg/braw.svg'
import Doc from '../../assets/img/svg/doc.svg'
import Korzina from '../../assets/img/svg/korzina.svg'
import Arr from '../../assets/img/svg/arr.svg'
import Chakra from '../../assets/img/png/chakra.png'
import Devs from '../../assets/img/png/devs.png'
import Prog from '../../assets/img/png/prog.png'
import Wallet2 from '../../assets/img/svg/wallet2.svg'
import Raketa2 from '../../assets/img/svg/raketa2.svg'
import Sels from '../../assets/img/svg/sels.svg'
import Nast from '../../assets/img/svg/nast.svg'
import Done from '../../assets/img/svg/done.svg'
import Prog2 from '../../assets/img/png/prog2.png'
import Prog3 from '../../assets/img/png/prog3.png'
import Prog4 from '../../assets/img/png/prog4.png'
import Prog6 from '../../assets/img/png/prog6.png'
import Avatar1 from '../../assets/img/png/avatar1.png'
import Avatar2 from '../../assets/img/png/avatar2.png'
import Avatar3 from '../../assets/img/png/avatar3.png'
import Avatar4 from '../../assets/img/png/avatar4.png'
import Avatar5 from '../../assets/img/png/avatar5.png'
import Avatar6 from '../../assets/img/png/avatar6.png'
import Icon1 from '../../assets/img/svg/icon1.svg'
import Html from '../../assets/img/svg/html.svg'
import Icon2 from '../../assets/img/svg/icon2.svg'
import Icon3 from '../../assets/img/svg/icon3.svg'
import Icon4 from '../../assets/img/svg/icon4.svg'
import Icon5 from '../../assets/img/svg/icon5.svg'
import Drop from '../../assets/img/svg/Drop.svg'
import Icon6 from '../../assets/img/svg/icon6.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCartShopping, faCreditCard, faBell } from "@fortawesome/free-solid-svg-icons";

import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts'
export default function Dashboard() {
  const data = [
    { value: 200 }, { value: 350 }, { value: 150 }, { value: 80 },
    { value: 300 }, { value: 480 }, { value: 220 }, { value: 400 },
    { value: 260 }, { value: 180 }, { value: 320 }, { value: 100 },
  ]
  const data2 = [
    { month: 'Jan', a: 500, b: 190 },
    { month: 'Feb', a: 190, b: 210 },
    { month: 'Mar', a: 270, b: 230 },
    { month: 'Apr', a: 280, b: 240 },
    { month: 'May', a: 460, b: 260 },
    { month: 'Jun', a: 470, b: 270 },
    { month: 'Jul', a: 380, b: 230 },
    { month: 'Aug', a: 340, b: 200 },
    { month: 'Sep', a: 350, b: 110 },
    { month: 'Oct', a: 400, b: 170 },
    { month: 'Nov', a: 410, b: 180 },
    { month: 'Dec', a: 430, b: 140 },
  ]

  return (
    <div className="dashboard">
      <div className="result-dash">
        <div className="result-money">
          <div className="money-text">
            <span className='money-span'>Today's Money</span>
            <p className='money-p'>$53,000 <small className='money-small'>+55%</small></p>
          </div>
          <img src={Wallet} alt="wallet" />
        </div>
        {/* 2 */}
        <div className="result-money">
          <div className="money-text">
            <span className='money-span'>Today's Users</span>
            <p className='money-p'>2,300 <small className='money-small'>+5%</small></p>
          </div>
          <img src={Braw} alt="wallet" />
        </div>
        {/* 3 */}
        <div className="result-money">
          <div className="money-text">
            <span className='money-span'>New Clients</span>
            <p className='money-p'>+3,052 <small className='money-small1'>-14%</small></p>
          </div>
          <img src={Doc} alt="wallet" />
        </div>
        {/* 4 */}
        <div className="result-money">
          <div className="money-text">
            <span className='money-span'>Total Sales</span>
            <p className='money-p'>$173,000 <small className='money-small'>+8%</small></p>
          </div>
          <img src={Korzina} alt="wallet" />
        </div>
      </div>
      <div className="dev-dash">
        <div className="dev-dash-text">
          <span className='dev-dash-span'>Built by developers</span>
          <h5 className='h5'>Purity UI Dashboard</h5>
          <p className='pp'>From colors, cards, typography to complex elements, <br /> you will find the full documentation.</p>
          <div className="more">
            Read more <img className='arr' src={Arr} alt="arr" />
          </div>
        </div>
        <img className='chakra-box' src={Chakra} alt="" />
        <img className='devss-box' src={Devs} alt="" />

      </div>

      <div className="charts">
        <div className="left-chart">


          <div style={{ background: '#1a2035', borderRadius: '1rem', padding: '1rem' }}>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data} barSize={5} width={150}>
                <XAxis hide />
                <YAxis
                  tick={{ fill: '#ffffff', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  ticks={[0, 100, 200, 300, 400, 500]}
                />
                <Bar dataKey="value" fill="#ffffff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className='chart-p'>Active Users</p>
          <span className='chart-span'>(+23) <small className='chart-small'> than last week</small></span>
          <div className="ress">
            <div className="res1">
              <div className="foiz">
                <img className='res-img' src={Wallet2} alt="" />
                <p className='res1-p'>Users</p>
              </div>
              <span className='res-span'>32,984</span>
              <img className='pr' src={Prog} alt="" />
            </div>
            <div className="res1">
              <div className="foiz">
                <img className='res-img' src={Raketa2} alt="" />
                <p className='res1-p'>Clicks</p>
              </div>
              <span className='res-span'>2,42m</span>
              <img className='pr' src={Prog} alt="" />
            </div>

            <div className="res1">
              <div className="foiz">
                <img className='res-img' src={Sels} alt="" />
                <p className='res1-p'>Sales</p>
              </div>
              <span className='res-span'>2,400$</span>
              <img className='pr' src={Prog} alt="" />
            </div>
            <div className="res1">
              <div className="foiz">
                <img className='res-img' src={Nast} alt="" />
                <p className='res1-p'>Items</p>
              </div>
              <span className='res-span'>320</span>
              <img className='pr' src={Prog} alt="" />
            </div>
          </div>
        </div>
        <div className="right">
          <p className='chart-p'>Sales overview</p>
          <span className='chart-span'>(+5) <small className='chart-small'>more in 2021</small></span>

          <ResponsiveContainer width="100%" height={360}>
            <AreaChart data={data2}>
              <defs>
                <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2D3748" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2D3748" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#A0AEC0' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#A0AEC0' }} axisLine={false} tickLine={false} ticks={[0, 100, 200, 300, 400, 500]} />
              <Area type="monotone" dataKey="a" stroke="#4FD1C5" strokeWidth={2} fill="url(#colorA)" />
              <Area type="monotone" dataKey="b" stroke="#2D3748" strokeWidth={2} fill="url(#colorB)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>


      </div>

      <div className="projects">
        <div className="left-projects">
          <p id='p'>Projects</p>
          <div className="done">
            <img className='done-img' src={Done} alt="" />
            <p className='done-p'>30 done this month</p>
          </div>
          <div className="names-pr">
            <p className='ppp'>COMPANIES</p>
            <p>MEMBERS</p>
            <p>BUDGET</p>
            <p>COMPLETION</p>
          </div>
          <div className="project-box">
            <div className="project-icon">
              <img src={Icon1} alt="" />
              <p>Chakra </p>
            </div>
            <img src={Avatar1} alt="" />
            <strong>$14,000</strong>
            <img className='progg' src={Prog2} alt="" />
          </div>
          <div className="project-box">
            <div className="project-icon">
              <img src={Icon2} alt="" />
              <p>Add</p>
            </div>
            <img src={Avatar2} alt="" />
            <strong>$3,000</strong>
            <img className='progg' src={Prog2} alt="" />
          </div>
          {/* 3 */}
          <div className="project-box">
            <div className="project-icon">
              <img src={Icon3} alt="" />
              <p>Fix</p>
            </div>
            <img src={Avatar3} alt="" />
            <strong>Not set</strong>
            <img className='progg' src={Prog4} alt="" />
          </div>
          {/* 4 */}
          <div className="project-box">
            <div className="project-icon">
              <img src={Icon4} alt="" />
              <p>Launch </p>
            </div>
            <img src={Avatar4} alt="" />
            <strong>$32,000</strong>
            <img className='progg' src={Prog3} alt="" />
          </div>
          {/* 5 */}
          <div className="project-box">
            <div className="project-icon">
              <img src={Icon5} alt="" />
              <p>Page</p>
            </div>
            <img src={Avatar5} alt="" />
            <strong>$400</strong>
            <img className='progg' src={Prog6} alt="" />
          </div>
          {/* 6 */}
          <div className="project-box">
            <div className="project-icon">
              <img src={Icon6} alt="" />
              <p>Redesign</p>
            </div>
            <img src={Avatar6} alt="" />
            <strong>$7,600</strong>
            <img className='progg' src={Prog3} alt="" />
          </div>
        </div>
        <div className="right-projects">
          <p>Orders overview</p>
          <span>+30% <small>this month</small></span>
          <div className="orders">
            <div className="orders-left">
              <FontAwesomeIcon className='ic3' icon={faBell} />
              <div className="chizu"></div>
              <FontAwesomeIcon className='ic2' icon={faCartShopping} />
              <div className="chizu"></div>
              <FontAwesomeIcon className='ic' icon={faCreditCard} />
              <div className="chizu"></div>
              <img src={Html} alt="" />
              <div className="chizu"></div>
              <img src={Icon1} alt="" />
              <div className="chizu"></div>
              <img src={Drop} alt="" />


            </div>
            <div className="orders-right">
              <div className="order-text">
                <p className='order-tetx-p'>$2400, Design changes</p>
                <span className='order-text-span'>22 DEC 7:20 PM</span>
              </div>
              <div className="order-text">
                <p className='order-tetx-p'>New order #4219423</p>
                <span className='order-text-span'>21 DEC 11:21 PM</span>
              </div>
              <div className="order-text">
                <p className='order-tetx-p'>Server Payments for April</p>
                <span className='order-text-span'>21 DEC 9:28 PM</span>
              </div>
              <div className="order-text">
                <p className='order-tetx-p'>New card added for order #3210145</p>
                <span className='order-text-span'>20 DEC 3:52 PM</span>
              </div>
              <div className="order-text">
                <p className='order-tetx-p'>Unlock packages for Development</p>
                <span className='order-text-span'>19 DEC 11:35 PM</span>
              </div>
              <div className="order-text">
                <p className='order-tetx-p'>New order #9851258</p>
                <span className='order-text-span'>118 DEC 4:41 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
