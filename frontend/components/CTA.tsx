// import classnames from 'classnames';

type Props = {

}

const CTA: React.FC<Props> = ({ }) => {
    return (
        <section className="w-full bg-[#ffbb00]">
            <div className="section mx-auto text-black">
                <h2 className="text-4xl text-center mb-8 text-black">Envoyez nous votre liste maintenant!</h2>

                <div className="max-w-2xl text-center mx-auto">
                    <p className="">
                        Préparez-vous pour la rentrée dès maintenant, envoyez-nous votre liste d'effets
                        scolaires! L'un de nos now collaborateurs vous contactera dans les 15 minutes suivant
                        la réception de la liste pour vous offrir un service personnalisé.
                    </p>
                </div>

                <button className="block px-4 py-4 lg:px-8 text-base lg:text-xl rounded-lg bg-[#470047] mx-auto text-white mt-8">Lancez-vous ici!</button>

            </div>
        </section>
    )
}

export default CTA;