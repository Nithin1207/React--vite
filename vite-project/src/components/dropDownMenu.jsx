import Menu from "../menu.jsx"
import { useState } from "react"
import { EXAMPLES } from "../data.js"
import Section from "./Section.jsx"
import "../menu.css"
import Tabs from "./Tabs.jsx"


const DropDownMenu = function () {
    const [component, setComponent] = useState("")
    function dropdownData(componentData) {
        setComponent(componentData)
    }

    let content = <p> please select topic...</p>
    if (component) {
        content = (<div id='tab-content'>
            <h3>{EXAMPLES[component].title}</h3>
            <p> {EXAMPLES[component].description}</p>
            <pre>
                <code>
                    {EXAMPLES[component].code}
                </code>
            </pre>
        </div>)
    }

    return (

        <Tabs button={
            <>
                <Menu is_Select={component === "components"} onSelect={() => dropdownData("components")}>component</Menu>

                <Menu is_Select={component === "jsx"} onSelect={() => dropdownData("jsx")}>jsx</Menu>

                <Menu is_Select={component === "props"} onSelect={() => dropdownData("props")}>props</Menu>

                <Menu is_Select={component === "state"} onSelect={() => dropdownData("state")}>state</Menu>
            </>

        } ButtonTag="menu">
            {content}
        </Tabs>


    )
}

export default DropDownMenu