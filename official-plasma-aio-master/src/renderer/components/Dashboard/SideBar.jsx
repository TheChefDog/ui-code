import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="flex flex-col items-center w-24 p-4 pt-16 space-y-10 rounded-l-lg bg-pSideBarDark border-pSideBarBorder">
                <Logo classSelector={"mb-12 -mt-12"} />
                <Link to="/dashboard">
                    <button className={this.props.SelectedTab == 1 ? 'flex justify-center w-24 border-r border-pPink focus:outline-none' : 'flex justify-center w-24 transition duration-300 ease-in-out transform hover:scale-125 focus:outline-none'}>
                        <svg className={this.props.SelectedTab == 1 ? "-mt-1 py-1 rounded-md text-white bg-gradient-to-br from-pSideBarSelected via-pSideBarSelected to-pink-400" : "text-pLighterDark"} height={this.props.SelectedTab == 1 ? "42" : "26"} viewBox={this.props.SelectedTab == 1 ? "-1 -2 22 23" : "0 0 21 21"} width={this.props.SelectedTab == 1 ? "42" : "26"} xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m.5 9.5 9-9 9 9" /><path d="m2.5 7.5v8c0 .5522847.44771525 1 1 1h3c.55228475 0 1-.4477153 1-1v-4c0-.5522847.44771525-1 1-1h2c.5522847 0 1 .4477153 1 1v4c0 .5522847.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1v-8" /></g></svg>
                    </button>
                </Link>

                <Link to="/tasks">
                    <button className={this.props.SelectedTab == 2 ? 'flex justify-center w-24 border-r border-pPink focus:outline-none' : 'flex justify-center w-24 transition duration-300 ease-in-out transform hover:scale-125 focus:outline-none'}>
                     <svg className={this.props.SelectedTab == 2 ? "px-2 py-1 rounded-md text-white bg-gradient-to-br from-pSideBarSelected via-pSideBarSelected to-pink-400" : "text-pLighterDark"} width={this.props.SelectedTab == 2 ? "42" : "24"} height={this.props.SelectedTab == 2 ? "42" : "24"} viewBox={this.props.SelectedTab == 2 ? "0 0 26 31" : "0 0 25 31"} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6759 4.09874H18.9472V2.87802C18.9472 2.48308 18.5164 2.30357 18.1214 2.30357H16.0031C15.5005 0.86741 14.2438 0.149328 12.8077 0.149328C11.3873 0.0959305 10.0954 0.966851 9.61221 2.30357H7.52978C7.13483 2.30357 6.73988 2.48308 6.73988 2.87802V4.09874H4.01112C2.39408 4.11599 1.07117 5.39162 0.995163 7.00694V27.5799C0.995163 29.1597 2.43133 30.3086 4.01112 30.3086H21.6759C23.2557 30.3086 24.6919 29.1597 24.6919 27.5799V7.00701C24.6159 5.39162 23.2929 4.11599 21.6759 4.09874ZM8.17598 3.73974H10.1507C10.4954 3.69768 10.7723 3.43543 10.8329 3.09347C11.0456 2.1675 11.8579 1.50282 12.8077 1.4778C13.7486 1.50632 14.5488 2.17307 14.7465 3.09347C14.8109 3.44725 15.106 3.71287 15.4646 3.73974H17.5111V6.61206H8.17598V3.73974ZM23.2557 27.58C23.2557 28.3699 22.4658 28.8725 21.6759 28.8725H4.01112C3.22122 28.8725 2.43133 28.3699 2.43133 27.58V7.00701C2.50458 6.18481 3.18576 5.55002 4.01112 5.53497H6.73982V7.36609C6.77775 7.76839 7.12617 8.06932 7.52971 8.04829H18.1214C18.5323 8.07077 18.8917 7.77395 18.9471 7.36609V5.5349H21.6758C22.5011 5.55002 23.1824 6.18475 23.2556 7.00694V27.58H23.2557Z" fill={this.props.SelectedTab == 2 ? "white" : "#2E2E3C"} /><path d="M10.0789 16.1985C9.80955 15.9146 9.36244 15.8986 9.07353 16.1626L6.77566 18.3527L5.80625 17.3474C5.53693 17.0635 5.08982 17.0475 4.80091 17.3115C4.52279 17.6029 4.52279 18.0613 4.80091 18.3527L6.27295 19.8607C6.40036 20.0034 6.5844 20.0822 6.77559 20.0761C6.96499 20.0735 7.14566 19.996 7.27822 19.8607L10.0787 17.2038C10.3564 16.9491 10.3749 16.5175 10.1202 16.24C10.1071 16.2255 10.0933 16.2117 10.0789 16.1985Z" fill={this.props.SelectedTab == 2 ? "white" : "#2E2E3C"} /><path d="M20.3834 17.7423H12.1254C11.7288 17.7423 11.4074 18.0638 11.4074 18.4604C11.4074 18.857 11.7288 19.1785 12.1254 19.1785H20.3834C20.7799 19.1785 21.1014 18.857 21.1014 18.4604C21.1014 18.0638 20.7799 17.7423 20.3834 17.7423Z" fill={this.props.SelectedTab == 2 ? "white" : "#2E2E3C"} /><path d="M10.0789 10.4538C9.80955 10.1699 9.36244 10.1539 9.07353 10.4179L6.77566 12.6081L5.80625 11.6027C5.53693 11.3188 5.08982 11.3028 4.80091 11.5668C4.52279 11.8582 4.52279 12.3167 4.80091 12.6081L6.27295 14.116C6.40036 14.2587 6.5844 14.3376 6.77559 14.3315C6.96499 14.3288 7.14566 14.2514 7.27822 14.116L10.0787 11.4592C10.3564 11.2045 10.3749 10.7729 10.1202 10.4953C10.1071 10.4808 10.0933 10.467 10.0789 10.4538Z" fill={this.props.SelectedTab == 2 ? "white" : "#2E2E3C"} /><path d="M20.3834 11.9977H12.1254C11.7288 11.9977 11.4074 12.3191 11.4074 12.7157C11.4074 13.1123 11.7288 13.4338 12.1254 13.4338H20.3834C20.7799 13.4338 21.1014 13.1123 21.1014 12.7157C21.1014 12.3191 20.7799 11.9977 20.3834 11.9977Z" fill={this.props.SelectedTab == 2 ? "white" : "#2E2E3C"} /><path d="M10.0789 21.943C9.80955 21.6592 9.36244 21.6432 9.07353 21.9072L6.77566 24.0973L5.80625 23.092C5.53693 22.8081 5.08982 22.7921 4.80091 23.0561C4.52279 23.3475 4.52279 23.8059 4.80091 24.0973L6.27295 25.6053C6.40036 25.7479 6.5844 25.8268 6.77559 25.8207C6.96499 25.818 7.14566 25.7406 7.27822 25.6053L10.0787 22.9484C10.3564 22.6937 10.3749 22.2621 10.1202 21.9846C10.1071 21.9701 10.0933 21.9563 10.0789 21.943Z"fill={this.props.SelectedTab == 2 ? "white" : "#2E2E3C"} /><path d="M20.3834 23.487H12.1254C11.7288 23.487 11.4074 23.8085 11.4074 24.2051C11.4074 24.6016 11.7288 24.9231 12.1254 24.9231H20.3834C20.7799 24.9231 21.1014 24.6016 21.1014 24.2051C21.1014 23.8085 20.7799 23.487 20.3834 23.487Z" fill={this.props.SelectedTab == 2 ? "white" : "#2E2E3C"} /></svg>
                    </button>
                </Link>
            
                <button className="flex justify-center w-24 transition duration-300 ease-in-out transform hover:scale-125 focus:outline-none">
                    <svg width="24" height="24" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4941 14.1835C14.3463 14.1835 15.95 13.5191 17.2607 12.2085C18.5709 10.898 19.2355 9.29453 19.2355 7.4421C19.2355 5.59031 18.5712 3.98665 17.2605 2.67575C15.9498 1.36548 14.3461 0.701172 12.4941 0.701172C10.6417 0.701172 9.03824 1.36548 7.72776 2.67596C6.41729 3.98644 5.75276 5.5901 5.75276 7.4421C5.75276 9.29453 6.41729 10.8982 7.72776 12.2087C9.03867 13.5189 10.6423 14.1835 12.4941 14.1835ZM8.8877 3.83568C9.89324 2.83013 11.0728 2.34135 12.4941 2.34135C13.9152 2.34135 15.095 2.83013 16.1008 3.83568C17.1063 4.84144 17.5953 6.02123 17.5953 7.4421C17.5953 8.8634 17.1063 10.043 16.1008 11.0487C15.095 12.0545 13.9152 12.5433 12.4941 12.5433C11.0732 12.5433 9.89367 12.0543 8.8877 11.0487C7.88194 10.0432 7.39294 8.8634 7.39294 7.4421C7.39294 6.02123 7.88194 4.84144 8.8877 3.83568Z" fill="#2E2E3C" /><path d="M24.2897 22.2231C24.2519 21.6777 24.1754 21.0828 24.0629 20.4546C23.9493 19.8217 23.803 19.2234 23.6279 18.6765C23.4468 18.1113 23.2011 17.5531 22.8968 17.0182C22.5814 16.463 22.2107 15.9795 21.7947 15.5817C21.3597 15.1655 20.8272 14.8309 20.2113 14.5868C19.5976 14.344 18.9175 14.221 18.19 14.221C17.9043 14.221 17.628 14.3383 17.0943 14.6857C16.7659 14.8999 16.3818 15.1476 15.953 15.4215C15.5863 15.6552 15.0897 15.874 14.4762 16.0722C13.8776 16.2659 13.2699 16.3641 12.6699 16.3641C12.0702 16.3641 11.4625 16.2659 10.8635 16.0722C10.2507 15.8742 9.75379 15.6554 9.38779 15.4218C8.96307 15.1504 8.5787 14.9026 8.24537 14.6855C7.71217 14.3381 7.43585 14.2208 7.15014 14.2208C6.42241 14.2208 5.74251 14.344 5.12901 14.587C4.5136 14.8307 3.98083 15.1653 3.54543 15.5819C3.12946 15.9799 2.75876 16.4632 2.44358 17.0182C2.13971 17.5531 1.89372 18.111 1.71264 18.6767C1.53775 19.2236 1.39148 19.8217 1.27788 20.4546C1.16513 21.082 1.0889 21.6771 1.0511 22.2238C1.01395 22.7582 0.995155 23.3145 0.995155 23.8765C0.995155 25.3375 1.4596 26.5203 2.37546 27.3926C3.28 28.2534 4.47666 28.6899 5.93234 28.6899H19.4091C20.8643 28.6899 22.061 28.2534 22.9657 27.3926C23.8818 26.521 24.3463 25.3378 24.3463 23.8763C24.346 23.3124 24.327 22.7561 24.2897 22.2231ZM21.8349 26.2043C21.2372 26.7732 20.4437 27.0497 19.4089 27.0497H5.93234C4.89733 27.0497 4.10382 26.7732 3.50635 26.2045C2.92019 25.6465 2.63533 24.8849 2.63533 23.8765C2.63533 23.3521 2.65263 22.8343 2.68722 22.3371C2.72096 21.8494 2.78993 21.3137 2.89222 20.7444C2.99322 20.1821 3.12177 19.6545 3.27466 19.1768C3.42136 18.7188 3.62144 18.2652 3.86957 17.8283C4.10639 17.4119 4.37886 17.0547 4.67952 16.7668C4.96075 16.4976 5.31522 16.2772 5.7329 16.1119C6.11918 15.959 6.5533 15.8753 7.02458 15.8627C7.08202 15.8932 7.18431 15.9515 7.35001 16.0596C7.68718 16.2793 8.07582 16.53 8.50546 16.8044C8.98976 17.1132 9.61371 17.3921 10.3592 17.6327C11.1213 17.8791 11.8986 18.0043 12.6701 18.0043C13.4416 18.0043 14.2191 17.8791 14.9807 17.6329C15.7268 17.3918 16.3506 17.1132 16.8355 16.804C17.2752 16.523 17.6529 16.2795 17.9901 16.0596C18.1558 15.9518 18.2581 15.8932 18.3156 15.8627C18.787 15.8753 19.2212 15.959 19.6077 16.1119C20.0251 16.2772 20.3796 16.4978 20.6608 16.7668C20.9615 17.0545 21.234 17.4117 21.4708 17.8285C21.7191 18.2652 21.9194 18.719 22.0659 19.1766C22.219 19.6549 22.3478 20.1823 22.4486 20.7442C22.5506 21.3145 22.6198 21.8505 22.6536 22.3374V22.3378C22.6884 22.833 22.7059 23.3506 22.7061 23.8765C22.7059 24.8851 22.421 25.6465 21.8349 26.2043Z" fill="#2E2E3C" /></svg>
                </button>

                <button className="flex justify-center w-24 transition duration-300 ease-in-out transform hover:scale-125 focus:outline-none">
                    <svg width="24" height="24" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.5852 0.856201H7.59332C7.04079 0.856201 6.59371 1.30328 6.59371 1.85581V6.85378H1.59574C1.04321 6.85378 0.59613 7.30086 0.59613 7.85339V27.8453C0.59613 28.3978 1.04321 28.8449 1.59574 28.8449H21.5876C22.1402 28.8449 22.5872 28.3978 22.5872 27.8453V22.8473H27.5852C28.1377 22.8473 28.5848 22.4002 28.5848 21.8477V1.85581C28.5848 1.30328 28.1377 0.856201 27.5852 0.856201V0.856201ZM20.588 26.8457H2.59534V8.85299H20.5881V26.8457H20.588ZM26.5856 20.8481H22.5872V7.85339C22.5872 7.30086 22.1402 6.85378 21.5876 6.85378H8.59292V2.85541H26.5857V20.8481H26.5856Z" fill="#2E2E3C" />
                    </svg>
                </button>
                    
                <button className="flex justify-center w-24 transition duration-300 ease-in-out transform hover:scale-125 focus:outline-none">
                    <svg width="24" height="24" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5905 8.26579C11.4256 8.26579 8.85065 10.8407 8.85065 14.0057C8.85065 17.1706 11.4256 19.7455 14.5905 19.7455C17.7555 19.7455 20.3304 17.1706 20.3304 14.0057C20.3304 10.8407 17.7555 8.26579 14.5905 8.26579ZM14.5905 18.1056C12.3298 18.1056 10.4906 16.2663 10.4906 14.0057C10.4906 11.745 12.3298 9.90576 14.5905 9.90576C16.8512 9.90576 18.6904 11.745 18.6904 14.0057C18.6904 16.2663 16.8512 18.1056 14.5905 18.1056Z" fill="#2E2E3C" />
                        <path d="M27.9607 11.5694L24.7532 10.7807C24.5601 10.1723 24.3122 9.58217 24.0124 9.0178C24.4924 8.21783 25.5072 6.52653 25.5072 6.52653C25.7007 6.2039 25.6499 5.7909 25.3838 5.52485L23.0646 3.20561C22.7985 2.93955 22.3855 2.88872 22.0629 3.08229C22.0421 3.09475 20.3805 4.09174 19.5687 4.57766C19.0074 4.28077 18.421 4.03499 17.8166 3.84328C17.5746 2.86062 17.0266 0.635188 17.0266 0.635188C16.9364 0.26882 16.6077 0.0112915 16.2304 0.0112915H12.9505C12.5732 0.0112915 12.2445 0.26882 12.1543 0.635243C11.9288 1.55143 11.5517 3.08311 11.3644 3.84301C10.7214 4.04691 10.0993 4.31193 9.50572 4.63467C9.15433 4.42388 8.63069 4.10967 8.14624 3.81901L6.91835 3.08229C6.59555 2.88872 6.18272 2.93961 5.91666 3.20561L3.59732 5.52485C3.33126 5.7909 3.28042 6.2039 3.47399 6.52653C3.48492 6.54485 4.44622 8.14704 5.0741 9.19798C4.81652 9.70691 4.60043 10.2359 4.42812 10.7788C3.3347 11.0509 1.24534 11.5633 1.22085 11.5693C0.854042 11.6592 0.59613 11.988 0.59613 12.3657V15.6456C0.59613 16.0233 0.854096 16.352 1.2209 16.442C1.24512 16.4479 3.31901 16.9564 4.42905 17.2311C4.62393 17.8489 4.87643 18.4487 5.18321 19.023L3.75131 21.4097C3.55774 21.7324 3.60858 22.1454 3.87463 22.4114L6.19392 24.7307C6.45998 24.9968 6.87292 25.0476 7.19561 24.854C7.21578 24.8419 8.80622 23.8877 9.587 23.4203C10.1566 23.7236 10.7521 23.9741 11.3662 24.1688L12.1543 27.3755C12.2442 27.7422 12.5729 28 12.9505 28H16.2304C16.6078 28 16.9366 27.7423 17.0267 27.3758L17.8154 24.1686C18.4461 23.9685 19.0547 23.71 19.6334 23.3963C20.422 23.8695 22.0629 24.8541 22.0629 24.8541C22.3855 25.0477 22.7985 24.9969 23.0646 24.7308L25.3838 22.4115C25.6499 22.1454 25.7007 21.7324 25.5072 21.4098C25.5072 21.4098 24.5084 19.7451 24.0335 18.9536C24.3237 18.4022 24.5644 17.8257 24.7529 17.2311C25.7273 16.9906 27.9339 16.4484 27.9605 16.4419C28.3271 16.3518 28.5848 16.0231 28.5848 15.6456V12.3657C28.5848 11.9882 28.3272 11.6596 27.9607 11.5694ZM26.9449 15.0027C25.9981 15.2354 24.2814 15.6576 23.9536 15.7396L23.8917 15.755C23.6058 15.8294 23.3819 16.0519 23.3058 16.3374C23.0983 17.1152 22.7867 17.861 22.3796 18.554C22.2277 18.8126 22.2291 19.1337 22.3834 19.391C22.4261 19.4621 23.2848 20.8934 23.7715 21.7045L22.3577 23.1184C21.5352 22.6249 20.0773 21.7501 20.0649 21.7427C19.8039 21.586 19.4777 21.5867 19.2176 21.7446C18.5069 22.1757 17.7357 22.504 16.925 22.7206C16.642 22.7962 16.4208 23.017 16.3448 23.2999C16.2995 23.4683 16.2549 23.6465 16.2542 23.6496L15.5876 26.36H13.5935L13.0024 23.9524L12.843 23.3148C12.7707 23.0255 12.547 22.7982 12.2588 22.7214C11.4644 22.5096 10.702 22.1886 9.993 21.7677C9.73559 21.6148 9.41519 21.6145 9.15744 21.7667C8.98088 21.871 7.66759 22.6585 6.90075 23.1185L5.48683 21.7045L6.83493 19.4576C6.99023 19.1987 6.99073 18.8754 6.83613 18.616C6.41062 17.9019 6.08804 17.1361 5.87757 16.3396C5.80121 16.0506 5.57363 15.8261 5.28374 15.7536C4.6968 15.6069 3.12096 15.2197 2.23604 15.0025V13.0086C3.12938 12.7892 4.72534 12.3965 5.28429 12.255C5.57243 12.1821 5.79858 11.9589 5.87533 11.6717C6.07016 10.9421 6.35759 10.2379 6.72975 9.57878C6.8744 9.32261 6.87068 9.00862 6.72008 8.7559C6.32375 8.09084 5.6224 6.9204 5.20956 6.23189L6.62348 4.81791L7.30243 5.22528C8.12066 5.71623 9.05063 6.2742 9.07578 6.28923C9.33642 6.44503 9.6619 6.44404 9.92156 6.28655C10.6508 5.84442 11.4372 5.5091 12.2588 5.28989C12.5466 5.21314 12.7701 4.98639 12.8427 4.69754C12.8581 4.63626 13.3385 2.68503 13.5931 1.65125H15.5878C15.8565 2.74227 16.3324 4.67491 16.3381 4.69732C16.4106 4.98639 16.6342 5.21336 16.9222 5.29017C17.7084 5.49986 18.4634 5.81638 19.1662 6.23085C19.4239 6.38287 19.744 6.38244 20.0013 6.2297C20.2313 6.09315 21.58 5.28437 22.3577 4.81786L23.7715 6.23172C23.2775 7.05509 22.3983 8.52051 22.3614 8.58184C22.2064 8.84014 22.2055 9.16266 22.3591 9.42189C22.7761 10.1255 23.0944 10.8822 23.3052 11.6709C23.3808 11.9533 23.6009 12.1742 23.883 12.2505C24.0523 12.2964 24.2314 12.3411 24.2344 12.3419L26.9449 13.0084V15.0027Z" fill="#2E2E3C" />
                    </svg>
                </button>

                <div className="flex pt-56 pb-6"> 
                    <img className="w-8 h-8 rounded-md" src="https://cdn.discordapp.com/avatars/568700694953984000/6ae0f11427ffb7d46d6d4893f5448d46.png?size=128"></img>
                </div>
            </div>
        )
    }
}