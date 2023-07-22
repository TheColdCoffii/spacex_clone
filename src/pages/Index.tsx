export default function Index() {
    return (
        <div className="text-white">
            <section className="relative h-screen w-screen bg-[url('/images/starlink_launch.jpg')] bg-cover bg-bottom ">
                <div className="absolute bottom-[10%] left-4 flex flex-col gap-2">
                    <p className="text-xl uppercase">Upcoming Launch</p>
                    <h1 className="text-4xl font-bold uppercase">
                        Starlink Mission
                    </h1>
                    <button className="max-w-min border-2 border-white px-14 py-3 uppercase">
                        Watch
                    </button>
                </div>
            </section>

            <section className="relative h-screen w-screen bg-[url('/images/Euclid_outsidetower.jpg')] bg-cover bg-bottom ">
                <div className="absolute bottom-[10%] left-4 flex flex-col gap-2">
                    <p className="text-xl uppercase">Recent Launch</p>
                    <h1 className="text-4xl font-bold uppercase">
                        ESA EUCLID Mission
                    </h1>
                    <button className="max-w-min border-2 border-white px-14 py-3 uppercase">
                        Rewatch
                    </button>
                </div>
            </section>

            <section className="relative h-screen w-screen bg-[url('/images/STARSHIP_Testflight_DESKTOP_2b3bea613a.jpg')] bg-cover bg-bottom ">
                <div className="absolute bottom-[10%] left-4 flex flex-col gap-2">
                    <h1 className="text-4xl font-bold uppercase">
                        Starship Flight Test
                    </h1>
                    <button className="max-w-min border-2 border-white px-14 py-3 uppercase">
                        Rewatch
                    </button>
                </div>
            </section>
        </div>
    );
}
