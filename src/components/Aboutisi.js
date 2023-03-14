import { useNavigate } from "react-router-dom";

function About () {
    const navigate = useNavigate()
    return  (

        <>
            <h3> about route</h3>
            <button onClick={() => navigate('/')}> Home </button>
        </>
    )



}

export default About;