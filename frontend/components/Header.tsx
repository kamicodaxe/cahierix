import Logo from "./Logo";

type Props = {

}

const Header: React.FC<Props> = ({ }) => {
    return (
        <div className="w-full
        bg-[url('http://localhost:3000/home-banner.jpg')]
        hero-base sm:hero-sm xl:hero-xl
        ">
            <header
                className="container sm:w-10/12 xl:w-9/12 mx-auto"
            >
                <nav className="flex justify-between pr-4">
                    <Logo />
                    <ul className="hidden md:flex space-x-4 flex-1 items-center justify-start pl-4">
                        <li className="font-semibold">Accueil</li>
                        <li className="">Suivis des commandes</li>
                        <li className="">Boutique</li>
                    </ul>
                    <img className="md:hidden cursor-pointer" alt="Menu button" src="/hamburger.svg" />
                </nav>

                <div className="text-black space-y-8 pt-16 px-8 text-center sm:text-left sm:px-0 sm:pt-16 md:w-8/12 lg:w-7/12 xl:w-1/2">

                    <h1 className="text-4xl sm:text-6xl">
                        Simplifiez votre rentrée scolaire avec <span className="text-[#470047]">Cahierix</span>
                    </h1>
                    <p className="text-[18px] sm:text-xl">
                        Envoyez-nous votre liste d&apos;effets scolaires, on s&apos;occupe de tout ! Nous pratiquons les meilleurs coûts sur le marché camerounais. Nous vous repondons en moins de 15mins.
                    </p>

                </div>

                <div className=" flex flex-col space-y-4 items-center sm:flex-row sm:items-start sm:space-y-0 space-x-4 py-8 pb-16 text-white">
                    <button className="px-4 py-4 lg:px-8 text-base lg:text-xl rounded-lg bg-[#470047]">
                        Envoyez nous votre liste
                    </button>
                    <button className="px-4 py-[14px] lg:px-8 text-base lg:text-xl rounded-lg border-2 border-white">
                        Liste des manuels
                    </button>
                </div>

            </header>
        </div>
    )
}

export default Header;