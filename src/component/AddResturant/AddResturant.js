
import React, { useState } from "react";
import "./AddResturant.css"
import getStorage from "../router/firebase"




function AddResturant() {
    
    const [image, setImage] = useState(null);
    const [name, setname] = useState("");
    
    const onfilechange=(e)=>{
        
            setImage(e.target.files[0]);
            const file = e.target.files[0];
            const storageRef = storage().ref();
            const fileRef = storageRef.child(file.name);
            fileRef.put(file).then(() => {
                console.log("fileuploded", file.name)
            }
        
    )}
        

         
    const addResturant = () => {
        console.log("image :", image.name, name);
        setInterval(() => {
            setname("")

        }, 3000);

    

  
    
    }
    
    return (
        <div>
            <h1 style={{ color: "white", textAlign: "center" }}> AddResturant</h1>
            <div className="Addresturant-div">


                <input placeholder="RESTURANT_LOGO" type="file" onChange={onfilechange} /><br />
                <input placeholder="RESTURANT_NAME" value={name} type="text" onChange={(e) => { setname(e.target.value) }} /><br />

                <button onClick={addResturant}>add</button>
            </div>
        </div>
    )
}
export default AddResturant;