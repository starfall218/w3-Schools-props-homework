import './right-links.css'
function MoreLinks(prop){
  if(prop.name === 'For Teachers' ||
     prop.name === 'Spaces'){
    return <>
          <a href="#" className="nav-item hide">{prop.name} {prop.icon}</a>
          </>
  }
  return <>
          <a href="#" className="nav-item">{prop.name} {prop.icon}</a>
          
          </>
}
export default MoreLinks;