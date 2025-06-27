import { useParams } from "react-router-dom"
import { cbc } from "../../data/education"

const CBCSection = () => {
  const { name } = useParams();
  const stage = cbc.find(item => item.url_param === name)
  return (
    <div className="cbc-section">
             <div className="inner-row">
                      <div className="cbc-section-intro">
                               <h2>{ stage && stage.title}({stage.grade})</h2>
                               <img src={stage && stage.image} alt="" />
                      </div>
                      <div className="cbc-section-body">
                                <p>{stage && stage.intro}</p>
                                <ul>
                                         { stage && stage.list.map(item => <li key={item}>{item}</li>)}
                                </ul>
                                <p>{stage && stage.middle}</p>

                                <p>{stage && stage.extra_list && stage.extra_list.intro}</p>
                                <ul>
                                        { stage && stage.extra_list && stage.extra_list.data.map(item => <li key={item}>{item}</li>)}
                                </ul>
                                <p>{stage && stage.extra_list2 && stage.extra_list2.intro}</p>
                                <ul>
                                        { stage && stage.extra_list2 && stage.extra_list2.data.map(item => <li key={item}>{item}</li>)}
                                </ul>
                                 <p>{stage && stage.extra_list3 && stage.extra_list3.intro}</p>
                                <ul>
                                        { stage && stage.extra_list3 && stage.extra_list3.data.map(item => <li key={item}>{item}</li>)}
                                </ul>
                                { stage && stage.description && stage.description.map(item => <p key={item}>{item}</p>)}
                      </div>
             </div>
    </div>
  )
}

export default CBCSection