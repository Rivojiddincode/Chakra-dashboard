import React from 'react'
import "./Billing.css"
import Circle from '../../assets/img/svg/Circles.svg'
import Xam from '../../assets/img/png/xam.png'
import Py from '../../assets/img/svg/py.svg'
import Vis from '../../assets/img/svg/vis.svg'
import Mas from '../../assets/img/svg/mas.svg'
import Pastga from '../../assets/img/svg/pastga.svg'
import Apple from '../../assets/img/svg/Apple.svg'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileText } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
export default function Billing() {
    return (
        <div className="billing">
            <div className="b">
                <div className="left-billing">
                    <div className="cart-conts">
                        <div className="card-1">
                            <div className="card-1-logo">
                                <p>Purity UI</p>
                                <img src={Circle} alt="" />
                            </div>
                            <span>7812 2139 0823 XXXX</span>
                            <div className="crs">
                                <div className="cr-nm">
                                    <p>VALID THRU</p>
                                    <span>05/24</span>
                                </div>
                                <div className="cr-nm2">
                                    <p>CVV</p>
                                    <span>09X</span>

                                </div>
                            </div>
                        </div>
                        <div className="salary">
                            <img src={Xam} alt="" />
                            <p>Salary</p>
                            <span>Belong Interactive</span>
                            <div className="lin"></div>
                            <strong>+$2000</strong>
                        </div>
                        {/* 2 */}
                        <div className="salary">
                            <img src={Py} alt="" />
                            <p>Paypal</p>
                            <span>Freelance Payment</span>
                            <div className="lin"></div>
                            <strong>$455.00</strong>
                        </div>
                    </div>
                    <div className="visa-cont">
                        <div className="visa-logo">
                            <p>Payment Method</p>
                            <button>ADD A NEW CARD</button>
                        </div>
                        <div className="visa-inputs">
                            <div className="masterkart">
                                <img src={Mas} alt="" />
                                <input type="text" placeholder='7812 2139 0823 XXXX' />
                                <FontAwesomeIcon icon={faPen} />
                            </div>
                            <div className="visa-cart">
                                <img src={Vis} alt="" />
                                <input type="text" placeholder='7812 2139 0823 XXXX' />
                                <FontAwesomeIcon icon={faPen} />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-billing">
                    <div className="Invoices">
                        <div className="Invoices-logo">
                            <p>Invoices</p>
                            <button>VIEW ALL</button>
                        </div>
                        <div className="Invoices-box">
                            <div className="boxese">
                                <div className="boxese-text">
                                    <p>March, 01, 2020</p>
                                    <span>#MS-415646</span>
                                </div>
                                <div className="kl">
                                    <strong>$180</strong>
                                    <FontAwesomeIcon className='ac' icon={faFileText} />
                                    <p>PDF</p>

                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="Invoices-box">
                            <div className="boxese">
                                <div className="boxese-text">
                                    <p>February, 10, 2021</p>
                                    <span>#RV-126749</span>
                                </div>
                                <div className="kl">
                                    <strong>$250</strong>
                                    <FontAwesomeIcon className='ac' icon={faFileText} />
                                    <p>PDF</p>

                                </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="Invoices-box">
                            <div className="boxese">
                                <div className="boxese-text">
                                    <p>April, 05, 2020</p>
                                    <span>#FB-212562</span>
                                </div>
                                <div className="kl">
                                    <strong>$560</strong>
                                    <FontAwesomeIcon className='ac' icon={faFileText} />
                                    <p>PDF</p>

                                </div>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className="Invoices-box">
                            <div className="boxese">
                                <div className="boxese-text">
                                    <p>June, 25, 2019</p>
                                    <span>#QW-103578</span>
                                </div>
                                <div className="kl">
                                    <strong>$120</strong>
                                    <FontAwesomeIcon className='ac' icon={faFileText} />
                                    <p>PDF</p>

                                </div>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className="Invoices-box">
                            <div className="boxese">
                                <div className="boxese-text">
                                    <p>March, 01, 2019</p>
                                    <span>#AR-8034816</span>
                                </div>
                                <div className="kl">
                                    <strong>$300</strong>
                                    <FontAwesomeIcon className='ac' icon={faFileText} />
                                    <p>PDF</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="f">
                <div className="left-2billing">
                    <p>Billing Information</p>
                    <div className="box2-left">
                        <div className="box2-left-head">
                            <p>Oliver Liam</p>
                            <div className="ics">
                                <FontAwesomeIcon className='trash' icon={faTrash} />
                                <p className='trash-p'>DELETE</p>
                                <FontAwesomeIcon className='spp' icon={faPen} />
                                <span>EDIT</span>
                            </div>
                        </div>
                        <div className="p-box">
                            <p>Company Name:

                                <span>Viking Burrito

                                </span></p>
                            <p>Email Address:<span>oliver@burrito.com</span></p>
                            <p>VAT Number:<span> FRB1235476</span></p>
                        </div>
                    </div>
                    <div className="box2-left">
                        <div className="box2-left-head">
                            <p>Oliver Liam</p>
                            <div className="ics">
                                <FontAwesomeIcon className='trash' icon={faTrash} />
                                <p className='trash-p'>DELETE</p>
                                <FontAwesomeIcon className='spp' icon={faPen} />
                                <span>EDIT</span>
                            </div>
                        </div>
                        <div className="p-box">
                            <p>Company Name:

                                <span>Viking Burrito

                                </span></p>
                            <p>Email Address:<span>oliver@burrito.com</span></p>
                            <p>VAT Number:<span> FRB1235476</span></p>
                        </div>
                    </div>
                    <div className="box2-left">
                        <div className="box2-left-head">
                            <p>Oliver Liam</p>
                            <div className="ics">
                                <FontAwesomeIcon className='trash' icon={faTrash} />
                                <p className='trash-p'>DELETE</p>
                                <FontAwesomeIcon className='spp' icon={faPen} />
                                <span>EDIT</span>
                            </div>
                        </div>
                        <div className="p-box">
                            <p>Company Name:

                                <span>Viking Burrito

                                </span></p>
                            <p>Email Address:<span>oliver@burrito.com</span></p>
                            <p>VAT Number:<span> FRB1235476</span></p>
                        </div>
                    </div>
                </div>
                <div className="right-2billing">
                    <div className="cs2">
                    <p>Your Transactions</p>
                    <div className="cs2-box">
                          <FontAwesomeIcon className='fgh' icon={faCalendar} />
                         <p>23 - 30 March 2020</p>
                    </div>
                    </div>
                    <div className="trasfers-box">

                        <p>NEWEST</p>




                        <div className="trsf-con">
                            <div className="zzzzz">
                                <img src={Pastga} alt="" />
                                <div className="trsf-text">
                                    <p>Netflix</p>
                                    <span>27 March 2020, at 12:30 PM</span>
                                </div>
                                <div className="sena">
                                  
                                    -$2500

                                </div>
                            </div>
                        </div>
                          <div className="trsf-con">
                            <div className="zzzzz">
                                <img src={Apple} alt="" />
                                <div className="trsf-text">
                                    <p>Apple</p>
                                    <span>27 March 2020, at 12:30 PM</span>
                                </div>
                                <div className="sena2">
                                  
                                    +$2500

                                </div>
                            </div>
                        </div>
                        <p className='yes'>YESTERDAY</p>
                             <div className="trsf-con">
                            <div className="zzzzz">
                                <img src={Apple} alt="" />
                                <div className="trsf-text">
                                    <p>Stripe</p>
                                    <span>26 March 2020, at 13:45 PM</span>
                                </div>
                                <div className="sena2">
                                  
                                    +$800

                                </div>
                            </div>
                        </div>
                             <div className="trsf-con">
                            <div className="zzzzz">
                                <img src={Apple} alt="" />
                                <div className="trsf-text">
                                    <p>HubSpot</p>
                                    <span>26 March 2020, at 13:45 PM</span>
                                </div>
                                <div className="sena2">
                                  
                                +$1700

                                </div>
                            </div>
                        </div>
                             <div className="trsf-con">
                            <div className="zzzzz">
                                <img src={Apple} alt="" />
                                <div className="trsf-text">
                                    <p>Webflow</p>
                                    <span>26 March 2020, at 05:00 AM</span>
                                </div>
                                <div className="sena2">
                                  
                                Pending

                                </div>
                            </div>
                        </div>
                        <div className="trsf-con">
                            <div className="zzzzz">
                                <img src={Pastga} alt="" />
                                <div className="trsf-text">
                                    <p>Microsoft</p>
                                    <span>25 March 2020, at 16:30 PM</span>
                                </div>
                                <div className="sena">
                                  
                                    -$987

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
