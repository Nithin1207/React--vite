import React from "react";

export default function Tabs({ button, children, ButtonTag }) {
    // const ButtonTag = buttonTag
    return (

        <>
            {button}
            <ButtonTag>{children}</ButtonTag>
        </>

    )
}