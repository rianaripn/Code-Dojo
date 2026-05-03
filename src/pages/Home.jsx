import data from '../data/resources.json'
import Hero from '../components/Hero'
import DojoCard from '../components/DojoCard'
import categoriesDojo from '../data/categoriesDojo.json'

function Home(){
    // console.log(data)
    const featured = data.filter(resource => resource.isFeatured)
    const categories = categoriesDojo
    console.log(featured)
    console.log(categories)
    return(
        <main className='bg-bg h-full px-8 flex flex-col gap-3 '>
            <Hero 
            dojosCount={categories.length}
            techniquesCount={data.length}/>
            <section className='px-8 flex flex-col gap-3'>
                <div className='border-edge border-b pb-4 flex flex-row justify-between px-4'>
                    <h2 className=' font-main text-2xl font-medium'><span className='font-bold text-accent'> — </span> Choose your dojo <span className='font-light text-ink-faint'>道場</span></h2>
                    <p className='font-mono font-light text-ink-faint text-lg tracking-widest'>{categories.length} DOJOS</p>
                </div>
                <div className='grid grid-cols-4 gap-3'>
                    {categories.map((category)=>(
                        <DojoCard 
                        key={category.name}
                        categoryName={category.slug} 
                        categoryTagline={category.tagline}
                        categoryDesc={category.description}
                        countTechnique = {
                            data.filter((cat)=> cat.category === category.slug).length
                        }
                        />
                    ))}
                </div>
            </section>
            <section className='mx-8 flex flex-col gap-3' >
                <h2 className='font-main text-2xl font-medium'> <span className='font-bold text-accent'> — </span>Featured Tecniques</h2>
                {featured.map((f)=>(
                    <div key={f.id} className='flex flex-col gap-3'>
                        <h3>{f.title}</h3>
                        <p>{f.tagline}</p>
                    </div>

                ))}
            </section>
            
        </main >
    )
}

export default Home