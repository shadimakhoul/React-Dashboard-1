import React from "react";

import icon_24_store  from "../public/Icons/icon_24_store.svg"
import icon_24_user from "../public/Icons/icon_24_user.svg"
import icon_24_service from "../public/Icons/icon_24_service.svg"

function NumberInfo(){
    return (
        <div className="numberInfo">
        <div className="numberGridDiv">
            <div className="serviceNumber">
                <div className="textService">
                    <div className="storesNumber"><p >عدد المتاجر</p></div>
                    <div className="storeNum">
                        <a className="a1">+20%</a>
                        <a className="a2">170</a>
                    </div>
                </div>
                <div className="storeIcon"><img src={icon_24_service} alt="store svg" /></div>
            </div>
            <div className="serviceNumber">
                <div className="textService">
                    <div className="storesNumber"><p >عدد المندوبين</p></div>
                    <div className="storeNum">
                        <a className="a1">+20%</a>
                        <a className="a2">170</a>
                    </div>
                </div>
                <div className="storeIcon"><img src={icon_24_user} alt="store svg" /></div>
            </div>
            <div className="serviceNumber">
                <div className="textService">
                    <div className="storesNumber"><p >عدد الخدمات</p></div>
                    <div className="storeNum">
                        <a className="a1">+20%</a>
                        <a className="a2">170</a>
                    </div>
                </div>
                <div className="storeIcon"><img src={icon_24_store} alt="store svg" /></div>
            </div>

        </div>
    </div>
    )
}

export default NumberInfo