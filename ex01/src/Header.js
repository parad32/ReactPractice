function Header(props){
    console.log("props =>", props);
    return (
        <header>
            <h1>HEADER 영역</h1>
            
            test : {props.test}<br/>
            num : {props.number}<br/>
            <hr></hr>
        </header>
    )
}
export default Header;