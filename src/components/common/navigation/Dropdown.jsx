import { NavLink } from "react-router-dom"

const Dropdown = ({ data, status }) => {
  return (
    <div className={ status ? "dropdown active": "dropdown"}>
              <ul>
                     { data.map(item => <li key={item.id}><NavLink to={item.link}>{item.title}</NavLink></li>)}
              </ul>
    </div>
  )
}

export default Dropdown