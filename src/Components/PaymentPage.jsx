import React, { useState } from "react";
import RazorpayIcon from '../assets/images/Razorpay Icon.png';
import BookIcon from '../assets/images/Icon.png';
import ClockIcon from '../assets/images/Icon-1.png';
import TvIcon from '../assets/images/Icon-2.png';
import CapIcon from '../assets/images/Icon-3.png';
import AddIcon from '../assets/images/Icon-4.png';
import ClockIcon2 from '../assets/images/Icon Clock.png';

let PaymentPage = () => {

    let [state, setState] = useState({
        users: [
            {
                id: 1,
                subScription: "12 Months Subscription",
                offers: "Offer expired",
                subScribers: 100,
                totalAmount: 99,
                monthlyAmount: 8,
                isSlected: false
            },
            {
                id: 2,
                subScription: "12 Months Subscription",
                offers: "Recommended",
                subScribers: 90,
                totalAmount: 179,
                monthlyAmount: 15,
                isSlected: true
            },
            {
                id: 3,
                subScription: "6 Months Subscription",
                offers: "Good Offer",
                subScribers: 75,
                totalAmount: 149,
                monthlyAmount: 25,
                isSlected: false
            },
            {
                id: 4,
                subScription: "3 Months Subscription",
                offers: "Good Offer",
                subScribers: 65,
                totalAmount: 99,
                monthlyAmount: 33,
                isSlected: false
            }
        ]
    })

    let changeFun = (userID) => {
        let theUsers = users.map((user) => {
            if (user.id === userID) {
                return {
                    ...user,
                    isSlected: true
                };
            } else {
                return {
                    ...user,
                    isSlected: false
                };
            }
        });
        setState({
            ...state,
            users: theUsers
        });
    }

    let { users } = state;

    return (
        <React.Fragment>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="introText text-white">
                            <p>Access curated courses worth</p>
                            <p> <span className="amount"> &#8377; <s className="text-danger"><span className="text-white">18,500</span></s></span> at just <span
                                className="text-primary"> <span className="amount"> &#8377; 99 </span></span>  per year!</p>
                        </h1>
                        <div className="my-3">
                            <ul type="none">
                                <li className="text-white d-flex align-items-center my-4">
                                    <img src={BookIcon} className="img-fluid" alt="" />
                                    <span className="h3"><span className="text-primary fw-bold ms-5">100+</span> Job relevant courses</span>
                                </li>
                                <li className="text-white d-flex align-items-center ">
                                    <img src={ClockIcon} alt="" />
                                    <span className="h3"><span className="text-primary fw-bold ms-5">20000+</span> Houres of content</span>
                                </li>
                                <li className="text-white d-flex align-items-center my-4">
                                    <img src={TvIcon} alt="" />
                                    <span className="h3"><span className="text-primary fw-bold ms-5">Exclusive</span> webinar access</span>
                                </li>
                                <li className="text-white d-flex align-items-center my-4">
                                    <img src={CapIcon} alt="" />
                                    <span className="h3 ms-5"> Scholarship worth <span className="text-primary fw-bold me-3">&#8377;94,500</span></span>
                                </li>
                                <li className="text-white d-flex align-items-center my-4">
                                    <img src={AddIcon} alt="" />
                                    <span className="h3 ms-5"><span className="text-primary fw-bold">Add Free </span>learning experience</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body ">
                                <div className="row text-center mt-3">
                                    <div className="col">
                                        <h1 className="p-3 badge bg-primary rounded-circle">1</h1>
                                        <p>Sign Up</p>
                                    </div>
                                    <div className="col">
                                        <h1 className="p-3 badge bg-primary rounded-circle">2</h1>
                                        <p>Subscribe</p>
                                    </div>
                                </div>
                                <h5 className="subScriptionPlan text-center text-dark mt-2 mb-4">Select your subscription plan</h5>
                                {
                                    users.length > 0 && users.map(user => {
                                        return (
                                            <div key={user.id} className={(user.subScribers === 100 && "row expiredBox mx-1 mb-3") || (user.isSlected ? "row subScriptionBox mx-1 mb-3" : "row popularBox mx-1 mb-3") || (user.subScribers === 90 && "row subScriptionBox mb-3") || ((user.subScribers === 65 || user.subScribers === 75) && "row popularBox mb-3")}>
                                                <div className="col">
                                                    <div>
                                                        {
                                                            user.subScribers === 100 && <div className="bg-light"></div>
                                                        }
                                                        <div className="row">
                                                            <div>
                                                                {
                                                                    user.subScribers === 100 && <div className="offersBox text-center bg-danger">Offers expired</div>
                                                                }
                                                                {
                                                                    user.subScribers > 75 && user.subScribers <= 90 && <div className="offersBox text-center bg-success">Recommended</div>
                                                                }
                                                                {
                                                                    user.subScribers > 65 && user.subScribers <= 75 && <div className="offersBox text-center bg-warning">Better Offer</div>
                                                                }
                                                                {
                                                                    user.subScribers <= 65 && <div className="offersBox text-center bg-warning">Good Offer</div>
                                                                }
                                                            </div>
                                                            <div className="col-md-9 pt-2">
                                                                <div>
                                                                    {/* <input disabled={user.subScribers === 100 ? true : false}  onChange={()=>changeFun(user.id)} type="checkbox" className="form-check-input me-3 " /> */}
                                                                    <input disabled={user.subScribers === 100 ? true : false} onChange={() => changeFun(user.id)} type="radio" name="subscription" className="form-check-input me-3 " checked={user.isSlected} />
                                                                    <span className="subScription">{user.subScription}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 mb-4">
                                                                Total<span className="fw-bold"> &#8377;{user.totalAmount}</span>
                                                                <p className="text-center">&#8377;{user.monthlyAmount}  <span className="monthText">/mo</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                                <div className="row mx-1 border-botttom">

                                </div>
                                <div className="row ms-2  mb-3 mt-3">
                                    <div className="col-md-9 ">
                                        Subscription Fee
                                    </div>
                                    <div className="col-md-3 fw-bold">
                                        &#8377;18,500
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col">
                                        <div className="validityBox">
                                            <div className="row ">
                                                <div className="limitedText col-md-9">
                                                    Limited time offer
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="fw-bold ms-2">- &#8377;18,400</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <p className="text-danger"><img src={ClockIcon2} className="clockImg text-bg-danger" alt="" /> Offer valid till 25th March 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ms-2 mb-4">
                                    <div className="col-md-9 mt-2">
                                        <span className="fw-bold">Total</span> (Incl. of 18% GST)
                                    </div>
                                    <div className="col-md-3">
                                        {
                                            users.length > 0 && users.map(user => {
                                                return (
                                                    user.isSlected === true ? <h2 className="fw-bold">&#8377;{user.totalAmount}</h2> : null
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <button className="w-100 fw-bold p-3 btn btn btn-outline-danger">CANCEL</button>
                                    </div>
                                    <div className="col">
                                        <button className="w-100 p-3 btn btn-success">PROCEED TO PAY</button>
                                    </div>
                                </div>
                                <div className="row mt-4 mb-2">
                                    <div className="col-md-4 ms-1">
                                        <img src={RazorpayIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PaymentPage;