import "./index.css"
const Day = ({setActive , Active, content}) => {
    const onClick = ()=> setActive(content);
    return(
        <div className={`Day ${content === Active && "active"}`} onClick = {onClick}>
            {content}
        </div>
    );
};
 export default Day