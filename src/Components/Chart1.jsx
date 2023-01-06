import React from "react";
import icon_32_growth from "../public/Icons/icon_32_growth.svg"
import icon_24_dollar from "../public/Icons/icon_24_dollar.svg"
import icon_32_income from "../public/Icons/icon_32_income.svg"
import icon_date from "../public/Icons/icon_date.svg"
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Area } from "recharts";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDate } from "./features/data";

function Chart1(){
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.value)
    const allMonths = [
        "January"
        ,"February"
        ,"March"
        ,"April"
        ,"May"
        ,"June"
        ,"July"
        ,"August"
        ,"Septemper"
        ,"October"
        ,"November"
        ,"December"
    ]

    const [calendar, setCalendar] = useState(false)
    const [from, setFrom] = useState(-1)
    const [to, setTo] = useState(-1)

    return(
    <div className="statisticsDiv">
        <div className="calendar">
            <input onClick={() => {setCalendar(!calendar)}} type="text" className="calendarInp" placeholder="اختر فترة من-الى" />
            <button onClick={() => {setCalendar(!calendar)}} className="calendarBtn"><img src={icon_date} alt="date icon" /></button>
            { calendar && <div className="calendarList">
                <div>
                    <ul>
                        <h6 style={{position:"sticky", top:0}}>From</h6>
                        {allMonths.map(e => {return <li key={e} onClick={() => {setFrom(e)}} value={e}>{e}</li>})}
                    </ul>
                </div>
                <div>
                <button onClick={() =>{dispatch(changeDate({from: -1, to: -1 }))} }>Reset</button>
                <button onClick={() => {dispatch(changeDate({from: allMonths.indexOf(from), to: allMonths.indexOf(to) }))} }>Done</button>
                </div>
                <div>
                    <ul>
                        <h6 style={{position:"sticky", top:0}}>To</h6>
                        {allMonths.map(e => {return <li key={e} onClick={() => {setTo(e)}} value={e}>{e}</li>})}
                    </ul>
                </div>
            </div>}
        </div>
        <div className="planDiv">
            <div className="extras">
                <div style={{height: "5rem", marginLeft:"20px"}} className="serviceNumber">
                    <div className="textService">
                        <div style={{alignItems:"center"}} className="storesNumber"><p style={{fontFamily:"inherit"}}>280</p></div>
                        <div className="storeNum">
                            <a className="a1"></a>
                            <a className="a2">عدد المتاجر</a>
                        </div>
                    </div>
                    <div className="storeIcon"><img src={icon_32_income} alt="store svg" /></div>
                </div>
                <div style={{height: "5rem", marginLeft:"20px"}} className="serviceNumber">
                    <div className="textService">
                        <div className="storesNumber"><p style={{fontFamily:"inherit"}}>1250$</p></div>
                        <div className="storeNum">
                            <a className="a1"></a>
                            <a className="a2">قيمة الاشتراكات</a>
                        </div>
                    </div>
                    <div className="storeIcon"><img src={icon_24_dollar} alt="store svg" /></div>
                </div>
                <div style={{height: "5rem", marginLeft:"20px"}} className="serviceNumber">
                    <div className="textService">
                        <div className="storesNumber"><p style={{fontFamily:"inherit"}}>+2.0%</p></div>
                        <div className="storeNum">
                            <a className="a1"></a>
                            <a className="a2">الايرادات</a>
                        </div>
                    </div>
                    <div className="storeIcon"><img src={icon_32_growth} alt="store svg" /></div>
                </div>
                <div style={{height: "5rem", marginLeft:"20px"}} className="serviceNumber">
                    <div className="textService">
                        <div className="storesNumber"><p style={{fontFamily:"inherit"}}>8,800$</p></div>
                        <div className="storeNum">
                            <a className="a1"></a>
                            <a className="a2">اجمالي الايرادات</a>
                        </div>
                    </div>
                    <div className="storeIcon"><img src={icon_24_dollar} alt="store svg" /></div>
                </div>
                

            </div>
            <div className="chaterDiv">
                <h5>احصائيات المتجر</h5>
                <h6>Avg. $5.309</h6>
                <div>
                <ResponsiveContainer width="100%" height={300} >
                    <AreaChart data={data}>
                        <Area dataKey="values" stroke="#1DBBBE" strokeWidth={3} fill="#fff"/>
                        <XAxis dataKey="date"
                                axisLine={false}
                                tickLine={false}
                                tickFormatter={(str) => {
                                    let date = new Date(str)
                                    date = date.getMonth()                                                  
                                    let s = allMonths[date]
                                    return s
                                }}
                        />
                        <YAxis dataKey="values" 
                            axisLine={false}
                            tickLine={false}
                            orientation="right"
                            tickCount={7}
                            tickFormatter={(number) =>{ 
                            if (number > 0){
                                return`$${number - 1}K`
                            }else if ( number < 0){
                                return`$${number + 1}K`
                            }else{
                                return`$${number}K`
                            }}

                            }/>
                        <CartesianGrid opacity={1} horizontal={false} />
                    </AreaChart>
                </ResponsiveContainer>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Chart1