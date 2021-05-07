import React, { useState } from 'react';

const Connect = () => {
    const [myInfo] = useState({
        first_name:"Borzoo",
        last_name:"Moazami",
        email:"borzoomoazami94@gmail.com"
    });

    return(
        <section className="Connect">
            <h2>Let's Connect</h2>
            <form >
                <input name="name" type="name"  placeholder="Name" required />
                <input name="email" type="email"  placeholder="Email" required />
                <input name="subject" type="text"  placeholder="Subject" />
                <textarea ></textarea>
                <input type="submit" value="Send"/>

            </form>
        </section>
    );
}

export default Connect;