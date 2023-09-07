import { ReactDOM } from "react-dom/client";

const Anecdote = (props) => {
  return (
    <>
    <p>{props.content}</p>
    <p>has {props.vote}</p>
    </>
  )
}

export default Anecdote
