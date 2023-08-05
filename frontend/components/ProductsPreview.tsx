// import classnames from 'classnames';

type Props = {

}

const ProductsPreview: React.FC<Props> = ({ }) => {
    return (
        <section className="w-full">
            <div className="section mx-auto">
                <h2 className="text-4xl text-center mb-8 text-black">Boutque</h2>

                <div className="flex justify-center space-x-4 flex-wrap mb-4">
                    {
                        [
                            "Cahiers",
                            "Livres",
                            "Livres Anglophones",
                            "Livres Francophones",
                            "Autres"
                        ].map(
                            category => (
                                <span className="text-md md:text-base inline-block" id={category}>
                                    {category}
                                </span>
                            )
                        )
                    }
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        new Array(8).fill('').map(
                            (_, i) => (
                                <div className="h-64 mx-4 md:mx-0 bg-gray-300" />
                            )
                        )
                    }
                </div>

                <button className="block mx-auto p-4 mt-4">Allez à la boutique</button>

            </div>
        </section>
    )
}

export default ProductsPreview;