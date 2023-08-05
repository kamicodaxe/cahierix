// import classnames from 'classnames';

type Props = {

}

const WhyUs: React.FC<Props> = ({ }) => {
    return (
        <section className="w-full bg-[url('http://localhost:3000/home-banner.jpg')] whyus-hero md:whyus-hero-md lg:whyus-hero-lg">
            <div className="section mx-auto">
                <h2 className="text-4xl text-center mb-8">Pourquoi choisir Cahierix</h2>

                <div className="space-y-8 md:m-whyus lg:m-whyus-lg">
                    <div className="flex items-center space-x-4">
                        <span className="number-label text-center">
                            1
                        </span>
                        <p className="mt-4 text-lg md:text-base">
                            Envoyez-nous votre liste d'effets scolaires via notre site internet ou whatsapp au 693 369 xxx.
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="number-label text-center">
                            2
                        </span>
                        <p className="mt-4 text-lg md:text-base">
                            Notre équipe d'expert prépare soigneusement votre commande.
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="number-label text-center">
                            3
                        </span>
                        <p className="mt-4 text-lg md:text-base">
                            Recevez vos cahiers et livres directements chez vous, prêt pour la rentrée.
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="number-label text-center">
                            4
                        </span>
                        <p className="mt-4 text-lg md:text-base">
                            Notre équipe d'expert prépare soigneusement votre commande.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;