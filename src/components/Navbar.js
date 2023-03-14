function Navbar (props) {

    return (

        <div>
                <ul>
                    <li> <a href="#"> Home </a> </li>
                    <li> <a href="#"> About </a> </li>
                    <li> <a href="#"> Contact </a> </li>
                    {/* ambil parameter */}
                    <li> <a href="#"> {props.test} </a> </li>
                </ul>
                
        </div>
    )
}

export default Navbar;