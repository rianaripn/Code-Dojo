import { useParams } from "react-router-dom"

function DojoPage(){
    const {slug}= useParams()
    return(
        <h1>Dojo Page : {slug}</h1>
    )
}

export default DojoPage