import Section from "./Footer" 
import Section from "./Header"
import Section from "./Main"



function Div(props){
    return 
    <>
    <div id="">
    <Header dark={props.dark} />
        <Main dark={props.dark} />
    <Footer dark={props.dark} />
    </div>
    </>
}
export default Div