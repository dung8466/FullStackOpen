import ReactDOM from 'react-dom/client'

const Total = (props) => {
  let sum = props.total[0].exercises + props.total[1].exercises + props.total[2].exercises
  return (
    <>
      <p> Number of exercises {sum} </p>
    </>
  )
}

export default Total

