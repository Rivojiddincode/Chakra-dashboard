import React from 'react'
import "./Table.css"
import ImgDef from '../../assets/img/png/imgdef.png'
import Opa from '../../assets/img/png/opa.png'
import Brat from '../../assets/img/png/brat.png'
import Oka from '../../assets/img/png/oka.png'
import Uka from '../../assets/img/png/uka.png'
import Jigar from '../../assets/img/png/jigar.png'
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
import Icon2 from '../../assets/img/svg/icon2.svg'
import Icon3 from '../../assets/img/svg/icon3.svg'
import Icon4 from '../../assets/img/svg/icon4.svg'
import Icon5 from '../../assets/img/svg/icon5.svg'
import Icon6 from '../../assets/img/svg/icon6.svg'
export default function Tables() {
  return (
    <div className="tables">
<div className="table-one">
    <p>Authors Table</p>
    <div className="tab-name">
<div className="pek">
    <p>AUTHOR</p>
</div>
<div className="tkl">
<p>FUNCTION</p>
<p>STATUS</p>
<p>EMPLOYED</p>
</div>
    </div>
    <div className="tab">
        <div className="tab-img">
        <img src={ImgDef} alt="" />
        <div className="tabe-name">
            <p>Esthera Jackson</p>
            <span>esthera@simmmple.com</span>
        </div>
        </div>
        <div className="tbs">
        <div className="manger">
            <p>Manager</p>
            <span>Organization</span>
        </div>
        <div className="onlin">
            Online
        </div>
        <span>
            14/06/21
        </span>
        <strong>
            Edit
        </strong>
        </div>
    </div>
    {/* 2 */}
      <div className="tab">
        <div className="tab-img">
        <img src={Opa} alt="" />
        <div className="tabe-name">
            <p>Alexa Liras</p>
            <span>alexa@simmmple.com</span>
        </div>
        </div>
        <div className="tbs">
        <div className="manger">
            <p>Programmer</p>
            <span>Developer</span>
        </div>
        <div className="offline">
            Offline
        </div>
        <span>
            14/06/21
        </span>
        <strong>
            Edit
        </strong>
        </div>
    </div>
    {/* 3 */}
      <div className="tab">
        <div className="tab-img">
        <img src={Brat} alt="" />
        <div className="tabe-name">
            <p>Laurent Michael</p>
            <span>laurent@simmmple.com</span>
        </div>
        </div>
        <div className="tbs">
        <div className="manger">
            <p>Executive</p>
            <span>Projects</span>
        </div>
        <div className="onlin">
            Online
        </div>
        <span>
            14/06/21
        </span>
        <strong>
            Edit
        </strong>
        </div>
    </div>
    {/* 4 */}
      <div className="tab">
        <div className="tab-img">
        <img src={Oka} alt="" />
        <div className="tabe-name">
            <p>Freduardo Hill</p>
            <span>freduardo@simmmple.com</span>
        </div>
        </div>
        <div className="tbs">
        <div className="manger">
            <p>Manager</p>
            <span>Organization</span>
        </div>
        <div className="onlin">
            Online
        </div>
        <span>
            14/06/21
        </span>
        <strong>
            Edit
        </strong>
        </div>
    </div>
    {/* 5 */}
      <div className="tab">
        <div className="tab-img">
        <img src={Uka} alt="" />
        <div className="tabe-name">
            <p>Daniel Thomas</p>
            <span>daniel@simmmple.com</span>
        </div>
        </div>
        <div className="tbs">
        <div className="manger">
            <p>Programmer</p>
            <span>Developer</span>
        </div>
        <div className="offline">
            Offline
        </div>
        <span>
            14/06/21
        </span>
        <strong>
            Edit
        </strong>
        </div>
    </div>
    {/* 6 */}
      <div className="tab">
        <div className="tab-img">
        <img src={Jigar} alt="" />
        <div className="tabe-name">
            <p>Mark Wilson</p>
            <span>mark@simmmple.com</span>
        </div>
        </div>
        <div className="tbs">
        <div className="manger">
            <p>Designer</p>
            <span>UI/UX Design</span>
        </div>
        <div className="offline">
            Offline
        </div>
        <span>
            14/06/21
        </span>
        <strong>
            Edit
        </strong>
        </div>
    </div>
</div>
<div className="table-two">
   
      <div className="left-projects2">
              <p id='p2'>Projects</p>
              <div className="done2">
                <img className='done-img2' src={Done} alt="" />
                <p className='done-p2'>30 done this month</p>
              </div>
              <div className="names-pr2">
                <p className='ppp2'>COMPANIES</p>
                <p>MEMBERS</p>
                <p>BUDGET</p>
                <p>COMPLETION</p>
              </div>
              <div className="project-box2">
                <div className="project-icon2">
                  <img src={Icon1} alt="" />
                  <p>Chakra </p>
                </div>
                <img src={Avatar1} alt="" />
                <strong>$14,000</strong>
                <img className='progg2' src={Prog2} alt="" />
              </div>
              <div className="project-box2">
                <div className="project-icon2">
                  <img src={Icon2} alt="" />
                  <p>Add</p>
                </div>
                <img src={Avatar2} alt="" />
                <strong>$3,000</strong>
                <img className='progg2' src={Prog2} alt="" />
              </div>
              {/* 3 */}
              <div className="project-box2">
                <div className="project-icon2">
                  <img src={Icon3} alt="" />
                  <p>Fix</p>
                </div>
                <img src={Avatar3} alt="" />
                <strong>Not set</strong>
                <img className='progg2' src={Prog4} alt="" />
              </div>
              {/* 4 */}
              <div className="project-box2">
                <div className="project-icon2">
                  <img src={Icon4} alt="" />
                  <p>Launch </p>
                </div>
                <img src={Avatar4} alt="" />
                <strong>$32,000</strong>
                <img className='progg2' src={Prog3} alt="" />
              </div>
              {/* 5 */}
              <div className="project-box2">
                <div className="project-icon2">
                  <img src={Icon5} alt="" />
                  <p>Page</p>
                </div>
                <img src={Avatar5} alt="" />
                <strong>$400</strong>
                <img className='progg2' src={Prog6} alt="" />
              </div>
              {/* 6 */}
              <div className="project-box2">
                <div className="project-icon2">
                  <img src={Icon6} alt="" />
                  <p>Redesign</p>
                </div>
                <img src={Avatar6} alt="" />
                <strong>$7,600</strong>
                <img className='progg2' src={Prog3} alt="" />
              </div>
            </div>
    
</div>
    </div>
  )
}
