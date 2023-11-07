import Image from 'next/image';
import SportAgentLogo from "@/public/logo/sports-agents-logo.png";
import BmxStreet from "@/public/sports/boxing.png";

// Component register
export default function Register() {
    return (
        <>
            <div className="hero min-h-screen bg-primary text-black">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left shadow-xl rounded-full m-2 p-2 bg-base-100">
                        <Image
                            className="w-auto h-auto rounded-full shadow-2xl"
                            src={BmxStreet}
                            alt="BmxStreet"
                            width={400}
                            height={500}
                            priority
                        />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className="mb-4 text-2xl font-bold card-title">Welcome to join 🤠</h1>
                            <h3 className="mb-4 text-sm font-bold card-title">Resgister get a account</h3>
                            <div className="form-control">
                                {/* Username */}
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" placeholder="username" className="input input-bordered" required />

                                {/* Email */}
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />

                                {/* Password */}
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />

                                {/* Confirm Password */}
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirm password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            {/*You have a acount in link */}
                            <div className="flex items-center justify-center mt-6">
                                <label className="label-text-alt">You have an account?</label>
                                <a href="/login" className="btn btn-sm btn-secondary btn-square ml-2 w-32 " >Login</a>
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left shadow-xl rounded-full m-2 p-2 bg-base-100">
                        <Image
                            className="w-auto h-auto rounded-full shadow-2xl"
                            src={SportAgentLogo}
                            alt="SportAgentLogo"
                            width={400}
                            height={500}
                            priority
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
