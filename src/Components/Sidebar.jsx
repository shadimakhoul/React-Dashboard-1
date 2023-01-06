import React from "react";
import { useState } from "react";
import { BsFillGrid1X2Fill, BsShopWindow, BsHandbagFill, BsCaretLeftFill, BsCaretDownFill, BsFillCircleFill, BsFiles } from "react-icons/bs"
import { CiShoppingTag } from "react-icons/ci"
import { FaShapes, FaPeopleArrows } from "react-icons/fa"
import { GiGraduateCap } from "react-icons/gi"
import { CgTemplate } from "react-icons/cg"
import { FcAdvertising, FcMoneyTransfer } from "react-icons/fc"
import { AiOutlineAppstore, AiFillSetting } from "react-icons/ai"
import { SlSupport } from "react-icons/sl"
import { FiLogOut } from "react-icons/fi"


function Sidebar() {
    const [market, setMarket] = useState(false);
    const [store, setStore] = useState(false)
    const [offers, setOffers] = useState(false)
    const [template, setTemplate] = useState(false)
    const [marketing, setMarketing] = useState(false)
    const [deals, setDeals] = useState(false)
    const [classification, setClassification] = useState(false)
    const [settings, setSettings] = useState(false)

    return (<>
        <div style={{marginTop:"3rem"}} className="sidebarButtons">
            <button className="mainButton">الرئيسية<BsFillGrid1X2Fill className="buttonIcon" /></button>
        </div>
    
        { !market && <button className="mainButton" onClick={ ()=> {setMarket(!market)}}><BsCaretLeftFill className="arrowButton"/>السوق <BsHandbagFill className="buttonIcon"/></button>}

        {market && <>
            <button style={{backgroundColor:"#3AE374"}} className="mainButton"  onClick={ ()=> {setMarket(!market)}}><BsCaretDownFill className="arrowButton"/>السوق <BsHandbagFill className="buttonIcon"/></button>
            <button className="mainButton listButton">زر ما <BsFillCircleFill className="buttonIcon"/></button>
            </>
        }

            { !store && <button className="mainButton" onClick={ ()=> {setStore(!store)}}><BsCaretLeftFill className="arrowButton"/>المتاجر<BsShopWindow className="buttonIcon"/></button>}

        {store && <>
            <button style={{backgroundColor:"#3AE374"}} className="mainButton" onClick={ ()=> {setStore(!store)}}><BsCaretDownFill className="arrowButton"/>المتاجر <BsShopWindow className="buttonIcon"/></button>
            <button className="mainButton listButton">زر ما <BsFillCircleFill className="buttonIcon"/></button>
            </>
        }

            { !offers && <button className="mainButton" onClick={ ()=> {setOffers(!offers)}}><BsCaretLeftFill className="arrowButton"/>الباقات<CiShoppingTag className="buttonIcon"/></button>}
       
        {offers && <>
            <button style={{backgroundColor:"#3AE374"}} className="mainButton" onClick={ ()=> {setOffers(!offers)}}><BsCaretDownFill className="arrowButton"/>الباقات <CiShoppingTag className="buttonIcon"/></button>
            <button className="mainButton listButton">زر ما <BsFillCircleFill className="buttonIcon"/></button>
            </>
        }

        
        {<button className="mainButton">الخدمات<FaShapes className="buttonIcon"/></button>}


        
        {<button className="mainButton">أكادمية اطلبها<GiGraduateCap className="buttonIcon"/></button>}
        {<button className="mainButton">أكادمية اطلبها<GiGraduateCap className="buttonIcon"/></button>}
        
        { !template && <button className="mainButton" onClick={ ()=> {setTemplate(!template)}}><BsCaretLeftFill className="arrowButton"/>الباقات<CgTemplate className="buttonIcon"/></button>}
        {template && <>
            <button style={{backgroundColor:"#3AE374"}} className="mainButton" onClick={ ()=> {setTemplate(!template)}}><BsCaretDownFill className="arrowButton"/>القالب <CgTemplate className="buttonIcon"/></button>
            <button className="mainButton listButton">زر ما <BsFillCircleFill className="buttonIcon"/></button>
            </>
        }

        {<button className="mainButton">الصفحات<BsFiles className="buttonIcon"/></button>}

        { !marketing && <button className="mainButton" onClick={ ()=> {setMarketing(!marketing)}}><BsCaretLeftFill className="arrowButton"/>التسويق<FcAdvertising className="buttonIcon"/></button>}
        {marketing && <>
            <button style={{backgroundColor:"#3AE374"}} className="mainButton" onClick={ ()=> {setMarketing(!marketing)}}><BsCaretDownFill className="arrowButton"/>التسويق <FcAdvertising className="buttonIcon"/></button>
            <button className="mainButton listButton">زر ما <BsFillCircleFill className="buttonIcon"/></button>
            </>
        }

        { !deals && <button className="mainButton" onClick={ ()=> {setDeals(!deals)}}><BsCaretLeftFill className="arrowButton"/>المندوبين<FaPeopleArrows className="buttonIcon"/></button>}
        {deals && <>
            <button style={{backgroundColor:"#3AE374"}} className="mainButton" onClick={ ()=> {setDeals(!deals)}}><BsCaretDownFill className="arrowButton"/>المندوبين <FaPeopleArrows className="buttonIcon"/></button>
            <button className="mainButton listButton">عرض المناديب <BsFillCircleFill className="buttonIcon"/></button>
            <button className="mainButton listButton">حالة التسجيل <BsFillCircleFill className="buttonIcon"/></button>
            </>
        }

        { !classification && <button className="mainButton" onClick={ ()=> {setClassification(!classification)}}><BsCaretLeftFill className="arrowButton"/>التصنيفات<FaShapes className="buttonIcon"/></button>}
        {classification && <>
            <button style={{backgroundColor:"#3AE374"}} className="mainButton" onClick={ ()=> {setClassification(!classification)}}><BsCaretDownFill className="arrowButton"/>التصنيفات <FaShapes className="buttonIcon"/></button>
            <button className="mainButton listButton">زر ما<BsFillCircleFill className="buttonIcon"/></button>
            </>
        }

        {<button className="mainButton" >الطلبات<AiOutlineAppstore className="buttonIcon"/></button>}
        {<button className="mainButton">المحفظة<FcMoneyTransfer className="buttonIcon"/></button>}
        {<button className="mainButton">الدعم الفني<SlSupport className="buttonIcon"/></button>}

        { !settings && <button className="mainButton" onClick={ ()=> {setSettings(!settings)}}><BsCaretLeftFill className="arrowButton"/>الاعدادات<AiFillSetting className="buttonIcon"/></button>}
        {settings && <>
            <button style={{backgroundColor:"#3AE374"}} className="mainButton" onClick={ ()=> {setSettings(!settings)}}><BsCaretDownFill className="arrowButton"/>الاعدادات <AiFillSetting className="buttonIcon"/></button>
            <button className="mainButton listButton">زر ما<BsFillCircleFill className="buttonIcon"/></button>
            </>
        }

        <div style={{height:"1px", backgroundColor:"#1DBBBE", marginTop:"20rem"}}></div>

        {<button className="mainButton">تسجيل الخروج<FiLogOut className="buttonIcon"/></button>}

        
    </>
        
    )
}

export default Sidebar;