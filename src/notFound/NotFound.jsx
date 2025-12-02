import { Link } from 'react-router';
import notfound from '../notFound/notfound.png';


const NotFound = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-1 mt-10">
                    <div className='my-15 lg:my-30'>
                        <div className="container">
                            <div className="flex gap-6 items-center flex-col lg:flex-row">
                                <div className="lg:w-1/2">
                                    <img className='w-full' src={notfound} alt="notfound" />
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="flex justify-center items-center">
                                        <div className="max-w-lg text-center lg:text-left space-y-5">
                                            <h1 className='text-slate-900 text-[150px] lg:text-[200px] font-bold'>40<span className='text-blue-600'>4</span></h1>
                                            <h4 className='font-bold text-slate-900 text-3xl'>Oops! It looks like you're lost.</h4>
                                            <p className='text-slate-900'>The page you're looking for isn't available. Try to search again or use the go to.</p>
                                            <Link to='/' className='btn bg-blue-600 text-gray-100 duration-300 hover:bg-slate-900 inline-block'>Go back to homepage</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound;