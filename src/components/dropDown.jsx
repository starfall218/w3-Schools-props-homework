import './dropdown.css';
function Dropdown(props){
  if(props.name === 'Menu'){
    return <div className="dropdown">
      <button className="dropbtn  menu-btn">{props.name} <span className="arrow-down"></span></button>
    </div>
  }
     return <div className="dropdown">
     <button className="dropbtn">{props.name} <span class="arrow-down"></span></button>
   </div>
}
export default Dropdown;