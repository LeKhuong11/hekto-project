import './about.scss'

function Intro(props) {
    const { image, title } = props;
  return (
    <div style={{width: 220}} className="about-intro">
        <img width={70} src={image} alt='' />
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
  )
}

export default Intro