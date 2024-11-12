import React from "react";
import "./menu.css"

let Menu = function ({ children, onSelect, is_Select }) {

    let P_name = "nithin"
    return (
        <>

            <button className={is_Select ? "active" : null} onClick={onSelect}>


                {children}
            </button>
        </>
    )
}

export default Menu;