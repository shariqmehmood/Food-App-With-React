import React ,{useState} from "react";
import "./form.css"


function Signup() {
  const  [email, setemail]=useState("")
  const  [password, setpassword]=useState("")
  const [userRole, setUserRole] = useState('trainer');
  

  const regesterme=()=>{
    console.log(email,password,userRole);

  }


    return (
        <div>

       



        <div>

          
         
            <div className="center">
      <h1>Regestration form</h1>

   
        <div className="form">
          
        <div className="txt">
          <input value={email}   onChange={(ev) => { setemail(ev.target.value) }} type="text" required />
          <span></span>
          <label for="Username" >E-mail</label>
        </div>
        <div className="txt">
          <input value={password} onChange={(ev) => { setpassword(ev.target.value) }} type="password" required />
          <span></span>
          <label for="Password">Password</label>
        </div>
        <div className="txt">

        <select  name="role" className="dropdown" onChange={(e) => { setUserRole(e.target.value) }}>
                <option value='trainer'>Trainer</option>
                <option value='student'>Student</option>
            </select>
</div>
        
      <button className="submit"  onClick={regesterme}> Regester Me</button>
        <div>


        </div>
        </div>
    </div>
           
        </div>
        </div>

        
    )
}

export default Signup;