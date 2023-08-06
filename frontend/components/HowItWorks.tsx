// import classnames from 'classnames';

type Props = {

}

const HowItWorks: React.FC<Props> = ({ }) => {
    return (
        <section className="w-full bg-[#470047]">
            <div className="section mx-auto text-white text-center">
                <h2 className=" text-4xl mb-8">Comment ça marche</h2>

                <div className="space-y-8 md:flex md:space-x-0 md:space-y-2">
                    <div className="flex-1">
                        <span className="number-label mx-auto">
                            1
                        </span>
                        <p className="mt-4 text-lg md:text-base">
                            Envoyez-nous votre liste d&apos;effets scolaires via notre site internet ou whatsapp au 693 369 xxx.
                        </p>
                    </div>
                    <div className="flex-1">
                        <span className="number-label mx-auto">
                            2
                        </span>
                        <p className="mt-4 text-lg md:text-base">
                            Notre équipe d&apos;expert prépare soigneusement votre commande.
                        </p>
                    </div>
                    <div className="flex-1">
                        <span className="number-label mx-auto">
                            3
                        </span>
                        <p className="mt-4 text-lg md:text-base">
                            Recevez vos cahiers et livres directements chez vous, prêt pour la rentrée.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;