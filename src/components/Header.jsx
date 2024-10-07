function Header(props){

    let classes;

    if(props.dark){
        classes = "header dark"
    }else{
        classes = "header"
    }

    return <header className={classes}><p>Emgula</p></header>;
}

export default Header