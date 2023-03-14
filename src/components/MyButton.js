function MyButton (props) {
    return (
        <div>

                <button onClick={() => props.clicked()}> click here with me</button> 
        </div>
    );
    

}

export default MyButton;