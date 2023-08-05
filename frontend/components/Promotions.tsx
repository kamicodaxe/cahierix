// import classnames from 'classnames';

type Props = {

}

const Promotions: React.FC<Props> = ({ }) => {
    return (
        <section className="w-full bg-[#ffbb00]">
            <div className="section mx-auto text-white">
                <h2 className="text-4xl text-center mb-8 text-black">Promotions</h2>

                <div className="text-center">
                    <p className="">
                        Livraisons à <br />
                        <span className="text-blue-800 font-bold">
                            <span className="text-[8rem]">0</span>
                            <span className="text-3xl inline-block -translate-y-24">FCFA</span>
                        </span>
                        <br />
                        Pour les commandes supérieure à <span className="text-blue-800 font-semibold">99 900 FCFA</span>.
                    </p>

                </div>

            </div>
        </section>
    )
}

export default Promotions;