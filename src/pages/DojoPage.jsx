import { useParams, useSearchParams } from "react-router-dom"
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
    
    console.log(categoriesData)
    
    return(
        <main className="bg-bg h-full">
            <section className="flex flex-col gap-6 mx-16 py-12">
                <div>
                    <p className="font-mono uppercase text-ink-faint text-lg ">back to world map</p>
                </div>
                <div>
                    <h2 className="font-mono text-ink-faint text-xl tracking-widest ">- DOJO <span>. 道場</span></h2>
                </div>
                <div className="flex flex-col gap-3 max-w-2xl">
                    <h2 className="font-main text-4xl font-bold">{categoriesData?.name}</h2>
                    <p className="font-main italic font-light text-lg">{categoriesData?.tagline}</p>
                    <p className="font-inter text-base text-ink-soft">{categoriesData?.description}</p>
                </div>
                {/* FILTER RANK */}
                <div className="flex flex-row gap-4 justify-between border-b border-edge pb-4">
                    <h2 className="font-mono uppercase text-ink-mute ">Filter by Ranks</h2>
                    <div className="flex flex-row gap-2 flex-1 items-center">
                        {['all','kohai','senpai','sensei'].map(r=>(    
                            <button className="font-main text-ink-mute border-edge capitalize border rounded-full px-4 "
                            onClick={()=>r==="all"?setSearchParams({}):setSearchParams({rank:r})}
                            key={r}>
                                {r}
                            </button>
                        )) }
                    </div>
                    <p className="font-mono text-ink-mute uppercase ">
                        {filtered.length} Techniques</p>
                </div>

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

            </section>
        </main>
    )
}

export default DojoPage