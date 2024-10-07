function Footer(props){
    
    let classes;

    if(props.dark){
        classes = "footer dark"
    }else{
        classes = "footer"
    }

    return <footer className={classes}><p>Created by Nelsola</p></footer>
}

export default Footer