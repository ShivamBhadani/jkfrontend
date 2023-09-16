import React from "react";
import {useNavigate} from "react-router-dom";

function handleclick() {
    const navigate = useNavigate();
    navigate("/add");
    return;
}

const plus = () => {
    return <button onClick={handleclick}>➕</button>;
    };

export default plus;