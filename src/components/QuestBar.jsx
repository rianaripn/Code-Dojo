import { NavLink } from "react-router-dom"

function QuestBar({bookmarksCount}){
    return(
        <header className="text-xl bg-bg border-b border-b-edge ">
            <div className="max-w-7xl mx-auto">
                <nav className="flex flex-row gap-5 justify-between items-center px-12 py-4" >
                    <div className="flex flex-row items-center gap-3"> 
                        <div className="bg-accent-2 px-1.5 py-3 border border-white ">
                            <p className="text-bg font-bold tracking-widest">道場</p>
                        </div>
                        <div className="flex flex-col items-left justify-center ">
                            <NavLink className="font-main font-bold text-2xl"
                            to="/">Code-Dojo</NavLink>
                            <p className="font-extralight text-sm text-ink-faint tracking-widest">コード道場</p>
                        </div>
                    </div>
                    <input className="flex-1 border border-edge bg-bg px-5 py-2 rounded-md"
                    type="text"
                    placeholder="Search techniques, dojos, or scrolls . . ." />
                    <div className="flex flex-row font-main font-medium gap-4 items-center">
                        <NavLink className={({isActive})=>
                        isActive ? "text-accent font-bold bg-bg py-2 px-2" : "text-ink"} 
                        to="/" 
                        end>Map</NavLink>
                        <NavLink className={({isActive})=>
                        isActive ? "text-accent font-bold bg-bg py-2 px-2" : "text-ink"} 
                        to="/scrolls"
                        end>
                            <span>
                                Scrolls {bookmarksCount>0 && (<span className="text-sm rounded-full border-accent border bg-accent/20 text-accent px-2 py-1" >{bookmarksCount}</span>)}    
                            </span>
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default QuestBar