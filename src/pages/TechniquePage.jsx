import ScrollCard from '../components/ScrollCard'
import data from '../data/resources.json'
import { useParams,useNavigate } from 'react-router-dom'

function TechniquePage({bookmarks,onBookmark}){
    const {slug} = useParams()
    const technique = data.find(d=>d.id === slug)
    const continueLearning = data.filter(d=>d.category===technique.category && d.id !==technique.id)
    const navigate = useNavigate()
    console.log(continueLearning)
    
    return (
        <section className='h-full bg-bg'>
            
            <div className=' max-w-3/4 m-auto  px-16 py-12 flex flex-col gap-6'>
                <div>
                    <p onClick={()=>navigate(-1)}
                    className="border border-edge px-6 py-1 w-fit font-mono uppercase text-ink-faint text-sm cursor-pointer 
                    hover:bg-edge hover:text-surface transition-all ease-in-out duration-300 "> ← Back </p>
                </div>
                <div>
                    <p className='uppercase font-mono text-ink-faint text-lg'>{technique.category} DOJO</p>
                </div>
                <div className='flex flex-row gap-4 font-mono uppercase text-ink-faint tracking-widest'>
                    <p className='text-accent'>- {technique.rank}</p>
                    <p>. {technique.training_time} Min Training </p>
                    <p>. {technique.source}</p>
                </div>
                <div className='border-b border-edge pb-6'>
                    <h2 className='font-main font-bold text-4xl'>{technique.title}</h2>
                </div>
                <div className='flex flex-row gap-8 items-start'>
                    <div className='flex flex-col w-5/8 gap-4 font-inter text-base '>
                        <p>{technique.content.description}</p>
                        <h3 className='font-main text-lg font-bold'>What will you learn</h3>
                        <p>{technique.content.whatYouLearn}</p>
                        <p className='border-l-4 border-accent p-4 text-ink-mute font-main italic text-lg'>{technique.content.quote}</p>
                        <h3 className='font-main text-lg font-bold'>The Path Forward</h3>
                        <p>{technique.content.pathForward}</p>
                    </div>
                    <div className='flex flex-col gap-4 flex-1 bg-surface border border-edge p-6'>
                        <div className='border-b border-edge pb-4 mx-2'>
                            <h3 className='font-mono text-ink-faint text-sm uppercase tracking-widest'>Rank · 階級</h3>
                            <p className='font-main text-base capitalize'>{technique.rank}</p>
                        </div>
                        <div className='border-b border-edge pb-4 mx-2'>
                            <h3 className='font-mono text-ink-faint text-sm uppercase tracking-widest'>Training time · 修行</h3>
                            <p className='font-main text-base capitalize'>{technique.training_time}</p>
                        </div>
                        <div className='border-b border-edge pb-4 mx-2'>
                            <h3 className='font-mono text-ink-faint text-sm uppercase tracking-widest'>Source · 出典</h3>
                            <p className='font-main text-base capitalize'>{technique.source}</p>
                        </div>
                        <div className='mx-2'>
                            <h3 className='font-mono text-ink-faint text-sm uppercase tracking-widest'>Dojo · 道場</h3>
                            <p className='font-main text-base capitalize'>{technique.category} DOJO</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-5'>
                    <a href={technique.source_link}
                    target='_blank'  
                    className='border border-accent-soft bg-accent-soft px-6 py-3 cursor-pointer text-white rounded-2xl'>
                        Begin Training</a>
                    <button onClick={()=> onBookmark(technique.id)} 
                    className='border border-edge bg-bg-dark px-6 py-3 cursor-pointer rounded-2xl'>
                        {bookmarks.includes(technique.id)? "Remove from Scrolls" : "Add to Scrolls"}</button>
                </div>
                <div>
                    <div className=' border-b border-edge pb-6'>
                        <h2 className='font-main text-2xl font-bold'> 
                            <span className='text-accent font-light text-lg tracking-widest'>— 続 — </span> Continue Learning  
                            <span className='text-ink-mute font-light text-lg tracking-widest'> 続き</span></h2>
                    </div>
                    <div>
                        {continueLearning.map((cl)=>(
                            <ScrollCard
                            key={cl.id}
                            id={cl.id}
                            rank={cl.rank}
                            source={cl.source}
                            title={cl.title}
                            tagline={cl.tagline}
                            duration={cl.training_time}
                            bookmarks={bookmarks}
                            onBookmark={onBookmark}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechniquePage