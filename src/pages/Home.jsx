import data from '../data/resources.json'
import Hero from '../components/Hero'

function Home(){
    // console.log(data)
    const featured = data.filter(resource => resource.isFeatured)
    const categories = [...new Set(data.map(item=>item.category))]
    console.log(featured)
    console.log(categories)
    return(
        <main className='bg-bg h-full'>
            <Hero 
            dojosCount={categories.length}
            techniquesCount={data.length}/>
            <section>
                <h2>Choose your dojo</h2>
                {categories.map((i)=>(
                    <p key={i}>{i}</p>
                ) )}
            </section>
            <section>
                <h2>Featured Tecniques</h2>
                {featured.map((f)=>(
                    <div key={f.id} className='flex flex-col gap-3'>
                        <h3 >{f.title}</h3>
                        <p >{f.tagline}</p>
                    </div>

                ))}
            </section>
            
        </main >
    )
}

export default Home