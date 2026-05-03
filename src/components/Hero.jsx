function Hero({dojosCount, techniquesCount}){
    return(
        <section className="max-w-screen py-12 mx-12 bg">
            <div className="flex flex-col gap-6 max-w-1/2">
                <div className="">
                    <h2 className="font-mono text-ink-faint text-xl tracking-widest ">THE WORLD MAP <span>. 世界地図</span></h2>
                </div>
                <div>
                    <h1 className="font-main text-5xl font-black">
                    Master the art of code, <span className="text-accent">one scroll at a time.</span>
                    </h1>
                </div>
                <div>
                    <p className="font-inter text-ink-faint text-xl font-medium tracking-wider">A curated dojo for wandering developers. No tutorial hell. No outdated noise. Just the techniques worth learning, ranked from Kohai to Sensei, and chosen by those who walked the path before you.</p>
                </div>
                <div className="flex flex-row gap-8">
                    <div>
                        <h2 className="font-main font-bold text-xl">{dojosCount}</h2>
                        <p className="font-mono tracking-widest text-ink-faint pt-1">DOJOS</p>
                    </div>
                    <div>
                        <h2 className="font-main font-bold text-xl">{techniquesCount}</h2>
                        <p className="font-mono tracking-widest text-ink-faint pt-1">TECHNIQUES</p>
                    </div>
                    <div>
                        <h2 className="font-main font-bold text-xl">0</h2>
                        <p className="font-mono tracking-widest text-ink-faint pt-1">IN YOUR SCROLLS</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero 