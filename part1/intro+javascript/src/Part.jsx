import ReactDOM from 'react-dom/client'

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

export default Part

