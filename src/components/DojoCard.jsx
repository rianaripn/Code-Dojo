import { Link } from "react-router-dom"

function DojoCard({categoryName,categoryTagline,categoryDesc, countTechnique}){
    return(
        <Link to={`/dojo/${categoryName}`}>
            <div className="flex flex-col gap-4 bg-surface py-8 px-4 border border-edge">
                <div className="flex flex-col gap-1">
                    <h3 className="font-main text-2xl font-medium capitalize"><span className="text-ink-faint text-lg">巻 </span>{categoryName} Dojo</h3>
                    <h2 className="font-inter text-sm italic text-ink-faint">{categoryTagline}</h2>
                </div>
                <div className="border-b border-edge pb-4">
                    <p className="font-inter text-sm font-light">{categoryDesc}</p>
                </div>
                <div className="px-4">
                    <p className="font-mono tracking-widest text-sm text-ink-faint uppercase">{countTechnique} techniques</p>
                </div>
            </div>
        </Link>
    )
}

export default DojoCard