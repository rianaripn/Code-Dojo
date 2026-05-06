import { Link } from "react-router-dom"

function ScrollCard({id,rank,source,title,tagline,duration,onBookmarks,bookmarks}){
    const rankStyle = {
        kohai: "bg-kohai/10 text-kohai border border-kohai px-6 py-1 font-mono font-normal uppercase tracking-widest",
        senpai: "bg-senpai/10 text-senpai border border-senpai px-6 py-1 font-mono font-normal uppercase tracking-widest",
        sensei: "bg-sensei/10 text-sensei border border-sensei px-6 py-1 font-mono font-normal uppercase tracking-widest"
        }
    const isBookmarked = bookmarks.includes(id)
     
    return (
            <section className="flex flex-row border-b gap-3 border-edge">
                <div className="p-8">
                    <p className="text-4xl text-ink-faint">巻</p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-row gap-3 items-center justify-between">
                        <div className="flex flex-row gap-4 items-center">
                            <h2 className={rankStyle[rank]}>{rank}</h2>
                            <p className="font-mono uppercase text-ink-mute">{source} <span>.</span> {duration} Min </p>
                        </div>
                        <button onClick={(e)=>{
                            e.stopPropagation()
                            onBookmarks(id)}}
                        className="cursor-pointer px-4 py-1 border border-edge bg-accent-soft/20 text-ink-soft hover:bg-accent/50 hover:text-white">
                            {isBookmarked ? "Remove Scrolls": "Add Scrolls"}</button>
                    </div>
                    <div className="flex flex-col gap-2 pb-4">
                        <h2 className="font-main text-2xl ">{title}</h2>
                        <p className="font-inter">{tagline}</p>
                    </div>
                </div>
            </section>
    
    )
}

export default ScrollCard