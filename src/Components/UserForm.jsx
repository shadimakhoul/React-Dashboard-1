import React from "react";
import {HiOutlineMail} from "react-icons/hi"
import { FiPhoneCall } from "react-icons/fi"
import Dropdown from 'react-bootstrap/Dropdown';
import { useRef } from "react";
import { BiUpArrowCircle } from "react-icons/bi"

function UserForm(){

    const upload = useRef()

    return (
        <div className="userForm">
            <div className="userFromHeader">
                <h3>تعديل بيانات حسابي</h3>
                <h5>جدول المستخدمين /<i>تعديل بيانات المستخدم</i></h5>
            </div>
            <div className="userInfo">
                <div className="adminDiv"><button className="adminBtn">أدمن</button></div>  
                <div>
                    <div className="usernameInput2">
                        <p className="usernamep">ادخل كلمة المرور</p>
                        <input id="username" type="password" placeholder="0000000000"/>
                        <p className="usernamep2">ادخل رموز حروف ارقام</p>
                    </div>
                    <div className="usernameInput2">
                        <p className="usernamep">تأكيد كلمة المرور</p>
                        <input id="username" type="password" placeholder="0000000000"/>
                        <p className="usernamep2">ادخل رموز وحروف وارقام</p>
                    </div>
                </div>  
                <div className="personalImg">
                    <div className="textDiv">
                        <h6 className="username">محمد عبد الرحمن</h6>
                        <p className="email">shadimakhoul@gmail.com <HiOutlineMail /></p>
                        <p className="email">+971-654-546 <FiPhoneCall /></p>
                    </div>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        alt="personalImg"
                        />
                </div>
                <div className="inputs">
                    <Dropdown >
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            اختر نوع الدور الوظيفي
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">الدور 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">الدور 2</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                        <div className="usernameInput">
                            <p className="usernamep">اسم المستخدم</p>
                            <input id="username" type="text" placeholder="ادخل حروف فقط"/>
                        </div>
                        <div className="usernameInput">
                            <p className="usernamep">البريد الالكتروني</p>
                            <input id="username" type="text" placeholder="shadi@makhoul.com"/>
                        </div>
                        <div style={{marginTop:"35px"}} className="usernameInput">
                                <div className="upload" onClick={() => { upload.current.click()}}>
                                    <button className="upbtn" ><BiUpArrowCircle /></button>
                                </div>
                            <input ref={upload} style={{display: "none"}} type="file" />
                        </div>
                </div>
            </div>
            <div className="saveUserInfo">
                <button className="saveBtn">حفظ وأغلاق</button>
            </div>
        </div>
    )
}

export default UserForm