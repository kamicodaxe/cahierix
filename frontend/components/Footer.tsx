import Logo from "./Logo";

type Props = {

}

const Footer: React.FC<Props> = ({ }) => {
    return (
        <section className="w-full bg-[#3D393D]">
            <div className="section pt-0 mx-auto text-md md:text-base text-white">

                <div className="grid grid-cols-1 mx-4 md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <Logo />
                        <h2 className="text-4xl my-4">A Propos</h2>

                        <p className="">
                            Chez Cahierix, notre mission est de simplifier la rentrée
                            scolaire en vous offrant un service pratique et rapide pour
                            la préparation de vos fournitures scolaires. Notre engagement
                            est de vous offrir une expérience sans soucis afin que vous
                            puissiez vous concentrer sur ce qui compte vraiment: soutenir
                            la réussite éducative de vos enfants. Faites confiance à
                            Cahierix pour une rentrée scolaire en toute sérénité!
                        </p>

                    </div>

                    <div className="mt-4 md:mt-[9.5rem]">
                        <h3 className="text-2xl mb-4">Contact</h3>
                        <ul className="space-y-4">
                            <li>Tel: (+237) 693 369 ###</li>
                            <li>Email: contact@cahierix.com</li>
                            <li>Adresse: BP 5406 Biyemassi, Yaoundé</li>
                        </ul>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://fb.com/cahierix" target={"_blank"}>
                                <img src="/facebook-icon.svg" alt="Facebook icon" />
                            </a>
                            <img src="/linkedin-icon.svg" alt="linkedin icon" />
                        </div>
                    </div>

                    <div className="mt-4 lg:mt-[9.5rem]">
                        <h3 className="text-2xl mb-4">Liens</h3>
                        <ul className="space-y-4">
                            <li>Accueil</li>
                            <li>Suivis des commandes</li>
                            <li>Boutique</li>
                        </ul>
                    </div>

                </div>

            </div>

            <a
                href="https://bogital.com"
                target={"_blank"}
                className="text-xs text-white text-center block pt-4 p-2 md:pt-2 hover:underline">
                Coded with ❤️ by <span className="text-teal-400 uppercase">Bogital</span>
            </a>

        </section>
    )
}

export default Footer;