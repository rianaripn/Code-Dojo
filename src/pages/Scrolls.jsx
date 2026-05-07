import data from '../data/resources.json'
import ScrollCard from '../components/ScrollCard'

function Scrolls({bookmarks,onBookmark}){
    const scroll = data.filter(s=>bookmarks.includes(s.id)) 
    console.log(scroll)
    return (
        <section className='h-screen bg-bg'>
            <div className='px-24 py-16 flex flex-col gap-6'>
                <div>
                    <h2 className='font-mono tracking-widest text-ink-mute'>Sacred Scrolls · 巻物</h2>
                </div>
                <div className='max-w-2xl flex flex-col gap-2'>
                    <h2 className='font-main text-4xl font-bold'>Your Collection</h2>
                    <p className='font-inter text-sm tracking-wider'>The scrolls you've chosen to keep. Stored in your browser, no login required — and yours alone to revisit when the lesson is needed.</p>
                </div>
                <div className='flex flex-row justify-between px-4 border-b border-edge pb-4'>
                    <h2 className='font-main text-xl'><span className='text-accent font-light text-lg tracking-widest'>— 巻 — </span> Saved techniques</h2>
                    <p className='font-inter text-sm tracking-widest text-ink-mute'> {scroll.length} Scrolls</p>
                </div>
                <div>
                    {scroll.length === 0 ? (
                        <div>
                            <p className='font-main italic tracking-widest mx-auto'>Your scroll collection is empty. Begin training to save your first scroll</p>
                        </div>
                    ) : scroll.map((s)=>(
                        <ScrollCard
                            key={s.id}
                            id={s.id}
                            rank={s.rank}
                            source={s.source}
                            title={s.title}
                            tagline={s.tagline}
                            duration={s.training_time}
                            bookmarks={bookmarks}
                            onBookmark={onBookmark}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Scrolls