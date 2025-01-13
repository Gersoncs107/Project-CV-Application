import { useState } from "react";

export default function Form(){
    
    return(
        <div>
            <h1>Resume</h1>
            <form>
                <div>
                    <div>
                        <h2>General Information</h2>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Digite seu nome"/>
                    
                        <label htmlFor="email">Email</label>
                        <input type="email"  id="email" name="email" placeholder="example@.com"/>
                        
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" name="phone number"  placeholder="12345"/>
                    </div>

                    <div>
                        <h2> Educational experience</h2>
                        <label htmlFor="educational">School Name</label>
                        <input type="text" id="educational" name="educational" />
                    </div>
                   
                </div>
                
            </form>
        </div>

    )
}