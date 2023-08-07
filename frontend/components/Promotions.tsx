// import classnames from 'classnames';

type Props = {

}

const Promotions: React.FC<Props> = ({ }) => {
    return (
        <section className="w-full bg-[url('/promotion.jpg')] bg-cover">
            <div className="section mx-auto text-white">

                <div className="mx-4 md:mx-0">

                    <h2 className="text-4xl text-center mb-8 font-semibold text-[#004080]">Promotions</h2>

                    <div className="text-center">
                        <p>
                            <span className="text-2xl inline-block pb-4">Livraisons à</span> <br />
                            <span className="text-[#004080] font-bold">
                                <span className="text-[8rem]">0</span>
                                <span className="text-5xl inline-block -translate-y-24">FCFA</span>
                            </span>
                            <br />
                            <span className="text-2xl">
                                Pour les commandes supérieure à <br className="md:hidden" /> <span className="text-[#004080] font-bold line">99 900 FCFA</span>
                            </span>
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Promotions;