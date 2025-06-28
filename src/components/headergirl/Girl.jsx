import { useEffect } from "react";
import Typed from "typed.js";
const Girl = () => {
    useEffect(() => {
        const typed = new Typed("#typed", {
            strings: [
                "Bienvenid@s Esfotdianos",
                "Noticias actuales",
                "Apoyo académico",
                "Cursos de refuerzo",
                "y mucho más....",
            ],
            typeSpeed: 80,
            loop: true,
        })

        return () => typed.destroy();
    }, [])
    
    return (
        <main>
            <h2 id="typed"></h2>
        </main>
    )
}

export default Girl