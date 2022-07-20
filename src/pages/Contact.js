import { useLocation } from "react-router-dom"

export function ContactPage() {
  const queryString = useLocation().search
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")
  // ?name=jhon

  return (
    <div>
      <h1>Hey {name} Contact us here..</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, illum itaque tenetur beatae ea, unde accusantium omnis enim reiciendis ipsum nemo exercitationem cum doloremque tempore ratione vero accusamus eius aperiam?</p>
    </div>
  )
}