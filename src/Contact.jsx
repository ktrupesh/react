import React from 'react';
import { useNavigate } from 'react-router-dom';
function Contact() {
    const back = useNavigate();

    const GotoHome = () => {
        back("/");
    };
    return (
        <>
            <div>Contact Page</div>
            <button onClick={GotoHome}>Goto Home</button>
        </>
    )
}

export default Contact;