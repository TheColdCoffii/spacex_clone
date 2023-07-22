export default function Footer() {
    return (
        <>
            <footer className="h-[160px] w-full bg-black px-4 pt-10 text-xs text-white">
                <div className="flex flex-col items-center ">
                    <span className="mb-6 font-thin">SPACEX © 2023</span>
                    <div className="w-full">
                        <ul className="flex flex-wrap justify-center gap-2 font-extrabold">
                            <li className="">
                                <a href="">Twitter</a>
                            </li>
                            <li className="">
                                <a href="">Youtube</a>
                            </li>
                            <li className="">
                                <a href="">Instagram</a>
                            </li>
                            <li className="">
                                <a href="">Flickr</a>
                            </li>
                            <li className="">
                                <a href="">LinkedIn</a>
                            </li>
                            <li className="">
                                <a href="">Privacy Policy</a>
                            </li>
                            <li className="">
                                <a href="">Suppliers</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
