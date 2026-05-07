import { Link } from "react-router-dom"

function ScrollCard({id,rank,source,title,tagline,duration,onBookmark,bookmarks}){
    const rankStyle = {
        kohai: "bg-kohai/10 text-kohai border border-kohai px-6 py-1 font-mono font-normal uppercase tracking-widest",
        senpai: "bg-senpai/10 text-senpai border border-senpai px-6 py-1 font-mono font-normal uppercase tracking-widest",
        sensei: "bg-sensei/10 text-sensei border border-sensei px-6 py-1 font-mono font-normal uppercase tracking-widest"
        }
    const isBookmarked = bookmarks.includes(id)
     
    return (
        <Link to={`/technique/${id}`}>
            <section className="flex flex-row border-b gap-2 md:gap-3 py-4 md:py-6 px-2 md:px-6 border-edge hover:bg-bg-dark transition-all cursor-pointer">
                <div className="hidden md:block p-8">
                    <p className="text-4xl text-ink-faint">巻</p>
                </div>
                <div className="flex flex-col gap-2 w-full min-w-0">
                    <div className="flex flex-row gap-2 items-start md:items-center justify-between flex-wrap">
                        <div className="flex flex-row gap-2 md:gap-4 items-center flex-wrap">
                            <h2 className={rankStyle[rank]}>{rank}</h2>
                            <p className="font-mono uppercase text-ink-mute text-xs md:text-sm">{source} <span>.</span> {duration} Min </p>
                        </div>
                        <button 
                        onClick={(e)=>{
                            e.preventDefault()
                            e.stopPropagation()
                            onBookmark(id)}}
                        className="cursor-pointer px-3 py-1 text-sm border border-edge bg-accent-soft/20 text-ink-soft hover:bg-accent/50 hover:text-white whitespace-nowrap">
                            {isBookmarked ? "Remove Scrolls": "Add Scrolls"}</button>
                    </div>
                    <div className="flex flex-col gap-2 pb-4">
                        <h2 className="font-main text-lg md:text-2xl ">{title}</h2>
                        <p className="font-inter text-sm md:text-base">{tagline}</p>
                    </div>
                </div>
            </section>
        </Link>
    
    )
}

export default ScrollCard