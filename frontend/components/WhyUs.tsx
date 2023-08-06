// import classnames from 'classnames';

type Props = {

}

const WhyUs: React.FC<Props> = ({ }) => {
    return (
        <section className="w-full relative">
            
            <div className="absolute left-0 top-0 right-1/2 -z-10 bottom-0 bg-[#FAABAA] md:bg-[url('http://localhost:3000/why-cahierix.png')] md:bg-cover">

            </div>

            <div className="section mx-auto z-20">

                <div className="mx-4 md:mx-0">
                    <h2 className="text-4xl text-center mb-8 font-semibold">Pourquoi choisir Cahierix</h2>

                    <div className="space-y-8 md:m-whyus">
                        <div className="flex items-center space-x-4">
                            <span className="number-label text-center">
                                1
                            </span>
                            <p className="mt-4 text-lg md:text-base">
                                Envoyez-nous votre liste d&apos;effets scolaires via notre site internet ou whatsapp au 693 369 xxx.
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="number-label text-center">
                                2
                            </span>
                            <p className="mt-4 text-lg md:text-base">
                                Notre équipe d&apos;expert prépare soigneusement votre commande.
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
                                Notre équipe d&apos;expert prépare soigneusement votre commande.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            
        </section>
    )
}

export default WhyUs;