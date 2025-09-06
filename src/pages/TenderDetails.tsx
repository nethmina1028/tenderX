import { useParams } from "react-router-dom"

function TenderDetails() {
  const { id } = useParams();

  return (
    <div>TenderDetails {id}</div>
  )
}

export default TenderDetails