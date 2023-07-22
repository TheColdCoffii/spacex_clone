export default function Header() {
    return (
        <>
            <header className="fixed z-10 w-full bg-transparent py-8">
                <nav className="mx-4 grid grid-cols-3 items-center">
                    <a href="/" className="col-start-2 justify-self-center">
                        <img
                            src="./svg/SpaceX-Logo.svg"
                            alt="The SpaceX logo"
                            className="min-w-[150px] max-w-[200px]"
                        />
                    </a>
                    <button className="h-8 w-8 justify-self-end ">
                        <img src="./svg/hamburger.svg" alt="" />
                    </button>
                </nav>
            </header>
        </>
    );
}
