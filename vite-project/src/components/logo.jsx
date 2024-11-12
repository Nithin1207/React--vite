import reactLogo from '../../src/assets/react.svg'
import viteLogo from '/vite.svg'



export default function LogoSection() {
    return (

        <div>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>

    )
}


