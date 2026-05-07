import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import data from '../data/resources.json'
import categoriesDojo from '../data/categoriesDojo.json'
import ScrollCard from "../components/ScrollCard"


function DojoPage({bookmarks,onBookmark}){
    const {slug}= useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const rank = searchParams.get('rank')
    const resources = data.filter(r=>r.category === slug)
    const filtered = rank ? resources.filter(r=>r.rank===rank): resources
    const categoriesData =categoriesDojo.find(c=>c.slug===slug)
    const navigate = useNavigate()
    
    console.log(categoriesData)
    
    return(
        <main className="bg-bg h-full min-h-screen">
            <section className="flex flex-col gap-6 mx-4 md:mx-16 py-8 md:py-12">
                <div>
                    <p onClick={()=>navigate(-1)}
                    className="border border-edge px-4 py-1 w-fit font-mono uppercase text-ink-faint text-xs md:text-sm cursor-pointer hover:bg-edge hover:text-surface transition-all ease-in-out duration-300 "> ← Back to world map</p>
                </div>
                <div>
                    <h2 className="font-mono text-ink-faint text-sm md:text-xl tracking-widest ">- DOJO <span>. 道場</span></h2>
                </div>
                <div className="flex flex-col gap-3 max-w-full md:max-w-2xl">
                    <h2 className="font-main text-2xl md:text-4xl font-bold">{categoriesData?.name}</h2>
                    <p className="font-main italic font-light text-base md:text-lg">{categoriesData?.tagline}</p>
                    <p className="font-inter text-sm md:text-base text-ink-soft">{categoriesData?.description}</p>
                </div>
                {/* FILTER RANK */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-between border-b border-edge pb-4">
                    <h2 className="font-mono uppercase text-ink-mute text-sm">Filter by Ranks</h2>
                    <div className="flex flex-row gap-2 flex-wrap items-center">
                        {['all','kohai','senpai','sensei'].map(r=>(    
                            <button 
                            className=
                            {(r===rank || (r==='all' && rank === null)) ? 
                                "font-main text-accent border-accent capitalize border rounded-full px-4 cursor-pointer transition-all ease-in-out duration-300 hover:bg-edge hover:text-surface" : 
                                
                                "font-main text-ink-mute border-edge capitalize border rounded-full px-4 cursor-pointer transition-all ease-in-out duration-300 hover:bg-edge hover:text-surface"  }
                            
                            onClick={()=>r==="all"?setSearchParams({}):setSearchParams({rank:r})}
                            key={r}>
                                {r}
                            </button>
                        )) }
                    </div>
                    <p className="font-mono text-ink-mute uppercase text-sm ">
                        {filtered.length} Techniques</p>
                </div>
                <div>
                    {filtered.map(r=>
                        (<ScrollCard
                            key={r.id}
                            id={r.id}
                            rank={r.rank}
                            source={r.source}
                            title={r.title}
                            tagline={r.tagline}
                            duration={r.training_time}
                            bookmarks={bookmarks}
                            onBookmark={onBookmark}
                        />)
                    )
                    }
                </div>

            </section>
        </main>
    )
}

export default DojoPage