import { useNavigate } from "react-router-dom";

function Home () {
    const navigate = useNavigate()
    return  (

        <>
            <h3> homepage route</h3>
            <button onClick={() => navigate('/about')}> About </button>
        </>
    )



}

export default Home;