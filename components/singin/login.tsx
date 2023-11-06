import Image from 'next/image';
import BmxPark from "@/public/sports/bmxpark.png";

// Component Login
export default function Login() {
    return (
        <>
            <div className="hero min-h-screen bg-secondary">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className="mb-4 text-2xl font-bold card-title">Welcome back 👋🏻</h1>
                            <h3 className="mb-4 text-sm font-bold card-title">Login to your account</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {/*You dont have a acount in link */}
                            <div className="flex items-center justify-center mt-6">
                                <label className="label-text-alt">You dont have an account?</label>
                                <a href="/register" className="btn btn-sm btn-secondary btn-square ml-2 w-32" >Register</a>
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left">
                        <p className="py-6 font-bold underline text-2xl text-black">Access the best that the sports industry can offer you to improve your characteristics as an athlete and achieve your professional goals..</p>
                        <div className="mockup-phone border-primary">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1">
                                    <h1 className="text-2xl font-bold m-2">Access in sports worlds</h1>
                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <h1 className="text-2xl font-bold">Sports Agent</h1>
                                        <p className="text-sm text-gray-500">The best app for sports</p>
                                    </div>
                                    <Image
                                        className="w-auto h-auto rounded-lg shadow-2xl"
                                        src={BmxPark}
                                        alt="BmxPark"
                                        width={200}
                                        height={200}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
