import { Link } from "react-router-dom"

function ScrollCard({id,rank,source,title,tagline,duration}){
    const rankStyle = {
        kohai: "bg-kohai/10 text-kohai border border-kohai px-6 py-1 font-mono font-normal uppercase tracking-widest",
        senpai: "bg-senpai/10 text-senpai border border-senpai px-6 py-1 font-mono font-normal uppercase tracking-widest",
        sensei: "bg-sensei/10 text-sensei border border-sensei px-6 py-1 font-mono font-normal uppercase tracking-widest"
        }
    return (
        <Link to={`/technique/${id}`}>
            <section className="flex flex-row border-b gap-3 border-edge">
                <div className="p-8">
                    <p className="text-4xl text-ink-faint">巻</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-3 items-center">
                        <h2 className={rankStyle[rank]}>{rank}</h2>
                        <p className="font-mono uppercase text-ink-mute">{source} <span>.</span> {duration} Min </p>
                    </div>
                    <div className="flex flex-col gap-2 pb-4">
                        <h2 className="font-main text-2xl ">{title}</h2>
                        <p className="font-inter">{tagline}</p>
                    </div>
                </div>
            </section>
        </Link>
    )
}

export default ScrollCard