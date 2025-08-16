import './css/Projects.css'

function Project(props) {
  return (
    <div className="project" style={{ '--project-color': props.color }}>
      <img className="project-image" src={props.img}></img>
      <div className="project-name">{props.name}</div>
      <div className="project-des">{props.des}</div>
      <div className="project-tech">{props.tech}</div>
      <div className="project-status">{props.status}</div>
      <a className="project-link" href={props.link} target='blank'>Visit</a>
    </div>
    
  )
}

export default Project