// import classnames from 'classnames';

type Props = {

}

const Testimonials: React.FC<Props> = ({ }) => {
    return (
        <section className="w-full bg-[#3D393D]">
            <div className="section mx-auto text-white">

                <div className="mx-4 md:mx-0">

                    <h2 className="text-4xl text-center mb-8 font-semibold">Témoignages</h2>

                    <div className="flex justify-between">

                        <div className="h-16 w-16 text-6xl text-center bg-gray-60 text-white shrink-0 hidden sm:block -translate-y-8">
                            <img src="/quote-left.svg" className="h-24" alt="quote-left svg" />
                        </div>

                        <div className="max-w-2xl self-center text-center">
                            <p className="">
                                Je recommande vivement Cahierix à tous les parents occupés! J&apos;étais toujours stressé avant la rentrée,
                                à essayer de trouver tous les articles scolaires nécessaires. Mais depuis que j&apos;ai découvert Cahierix,
                                tout est devenu beaucoup plus simple. Leur équipe attentionnée s&apos;occupe de tout, et j&apos;ai reçu ma commande
                                rapidement. C&apos;est un service fiable et pratique que je ne peux que louer. Merci de rendre la rentrée scolaire si agréable !
                            </p>

                            <p className="pt-8"><i>Herman D.</i></p>

                            <div className="space-x-2 mt-8">
                                <span className="w-4 h-4 rounded-full inline-block bg-white"></span>
                                <span className="w-4 h-4 rounded-full inline-block bg-[#F8C004]"></span>
                                <span className="w-4 h-4 rounded-full inline-block bg-white"></span>
                                <span className="w-4 h-4 rounded-full inline-block bg-white"></span>
                                <span className="w-4 h-4 rounded-full inline-block bg-white"></span>
                            </div>

                        </div>


                        <div className="h-16 w-16 text-6xl text-center bg-gray-60 text-white shrink-0 hidden sm:block self-end -translate-y-16">
                            <img src="/quote-right.svg" className="h-24" alt="quote-right svg" />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Testimonials;