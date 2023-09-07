import ReactDOM from 'react-dom/client'

const Button = ({name,handleClick}) => {
  return (
  <button onClick={handleClick}>{name}</button>
  )
}

export default Button

