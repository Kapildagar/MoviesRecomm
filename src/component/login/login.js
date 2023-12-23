import React, { useState } from "react";

export default function Login() {
    const [formdata, setformdata] = useState({
        email: "",
        password: "",
        conpassword: "",
        checkbox:false
    })
    console.log(formdata.email)
    function handletoggle(event) {
        const { value, name,type ,checked} = event.target;
        setformdata(preformdata => {
            return {
                ...preformdata,
                [name]:type==="checkbox"?checked:value

            }
        })
    }
    function handlesubmit(){
        //check the conform password equal to password
    }
    return (
        <div className="main">
          <form onSubmit={handlesubmit}>
            <input type="email" name="email" value={formdata.email} placeholder="enter the email" onChange={handletoggle} /> <br />
            <input type="password" name="password" value={formdata.password} placeholder="enter the email" onChange={handletoggle} /> <br />
            <input type="password" name="conpassword" value={formdata.conpassword} placeholder="conform password" onChange={handletoggle} />
            <input type="checkbox"  name="chexkbox" checked={formdata.checkbox} />
            <label htmlFor=" "/>
            </form>
        </div>
    )
}