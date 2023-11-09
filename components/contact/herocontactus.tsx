import Image from "next/image";
import PersonContact from "@/public/contact/person-contact.png";
import { RiMailSendFill } from "react-icons/ri";

// Component: HeroContactUs
export default function HeroContactUs() {
    return (
        <>
            <div className="hero min-h-screen bg-primary text-black">
                <div className="hero-content flex-col lg:flex-row-reverse max-w-full overflow-hidden">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold m-2 text-center">Contact service</h1>
                        <div className="card w-96 bg-base-100 shadow-xl mx-auto lg:mx-0">
                            <figure>
                                <Image
                                    src={PersonContact}
                                    alt="person-contact"
                                    width={700}
                                    height={700}
                                    priority={true}
                                    className="rounded-xl w-60 h-auto lg:w-96 lg:h-96"
                                />
                            </figure>
                        </div>
                    </div>

                    <div className="text-center lg:text-left">
                        <div className="card w-96 bg-base-100 shadow-xl mx-auto lg:mx-0">
                            <div className="divider lg:divider-horizontal">
                                <RiMailSendFill className="text-6xl text-center lg:ml-10" />
                            </div>
                        </div>
                    </div>

                    <div className="card glass flex-shrink-0 w-full max-w-full lg:max-w-sm shadow-2xl bg-secondary">
                        <form className="card-body">
                            <h1 className="mb-4 text-2xl font-bold card-title">Get in touch 👋🏻</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input type="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">How can we help?</span>
                                </label>
                                <input type="message" placeholder="message" className="input input-bordered input-lg w-full h-40 max-w-xs" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send my message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
