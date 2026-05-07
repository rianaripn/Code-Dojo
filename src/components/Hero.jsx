function Hero({dojosCount, techniquesCount, bookmarksCount}){
    return(
        <section className="py-8 md:py-12 mx-4 md:mx-12">
            <div className="flex flex-col gap-6 max-w-full md:max-w-1/2">
                <div className="">
                    <h2 className="font-mono text-ink-faint text-sm md:text-xl tracking-widest ">THE WORLD MAP <span>. 世界地図</span></h2>
                </div>
                <div>
                    <h1 className="font-main text-3xl md:text-5xl font-black">
                    Master the art of code, <span className="text-accent">one scroll at a time.</span>
                    </h1>
                </div>
                <div>
                    <p className="font-inter text-ink-faint text-base md:text-xl font-medium tracking-wider">A curated dojo for wandering developers. No tutorial hell. No outdated noise. Just the techniques worth learning, ranked from Kohai to Sensei, and chosen by those who walked the path before you.</p>
                </div>
                <div className="flex flex-row gap-8">
                    <div>
                        <h2 className="font-main font-bold text-xl">{dojosCount}</h2>
                        <p className="font-mono tracking-widest text-ink-faint pt-1 text-xs md:text-sm">DOJOS</p>
                    </div>
                    <div>
                        <h2 className="font-main font-bold text-xl">{techniquesCount}</h2>
                        <p className="font-mono tracking-widest text-ink-faint pt-1 text-xs md:text-sm">TECHNIQUES</p>
                    </div>
                    <div>
                        <h2 className="font-main font-bold text-xl">{bookmarksCount}</h2>
                        <p className="font-mono tracking-widest text-ink-faint pt-1 text-xs md:text-sm">IN YOUR SCROLLS</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero 