// import classnames from 'classnames';

type Props = {

}

const Testimonials: React.FC<Props> = ({ }) => {
    return (
        <section className="w-full bg-gray-800">
            <div className="section mx-auto text-white">
                <h2 className="text-4xl text-center mb-8">Témoignages</h2>

                <div className="flex justify-between">

                    <div className="h-16 w-16 text-6xl text-center bg-gray-60 text-white shrink-0 -translate-y-8">
                        <p className="leading-[6rem]">"</p>
                    </div>

                    <div className="max-w-2xl self-center text-center">
                        <p className="">
                            Envoyez-nous votre liste d'effets scolaires via notre site internet ou whatsapp au 693 369 xxx.
                            Notre équipe d'expert prépare soigneusement votre commande.
                            Recevez vos cahiers et livres directements chez vous, prêt pour la rentrée.
                            Notre équipe d'expert prépare soigneusement votre commande.
                        </p>

                        <p className="pt-8"><i>Herman D.</i></p>
                        
                    </div>
                    

                    <div className="h-16 w-16 text-6xl text-center bg-gray-60 text-white shrink-0 self-end translate-y-8">
                        <p className="leading-[6rem]">"</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Testimonials;