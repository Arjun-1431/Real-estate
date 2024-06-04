import '../CSSfiles/cart.css';

export default function Card() {
    return (
        <div className='cart-container' style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>

            <div className="flex flex-col"> 
                <a style={{ margin: 10 }} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={require('../Assets/cart0.jpg')} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Garden City Project</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Spread over a sprawling 55 acres, located near VISM College, Jhansi road, all dressed in varied hues of green. With over 5 acres of dedicated landscape area.</p>
                    </div>
                </a>
            </div>

            <div className="flex flex-col"> 
                <a style={{ margin: 10 }} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={require('../Assets/cart-1.jpg')} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Garden City Project</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Spread over a sprawling 55 acres, located near VISM College, Jhansi road, all dressed in varied hues of green. With over 5 acres of dedicated landscape area.</p>
                    </div>
                </a>
            </div>

            <div className="flex flex-col"> 
                <a  style={{ margin: 10 }} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={require('../Assets/cart0.jpg')} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Regal Garden P</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">For those looking to buy a residential property, here comes one of the choicest offerings in Gwalior, at New City Center. Brought to you by Neoteric G.</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
