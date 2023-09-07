import ReactDOM from 'react-dom/client'
const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

export default Header
