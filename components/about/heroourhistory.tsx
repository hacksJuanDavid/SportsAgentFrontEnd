import Image from "next/image";
import GroupAgents from "@/public/steps/group-agents.png";
import Hands from "@/public/steps/hands.png";
import SportAgentEvaluation from "@/public/steps/sport-agent-evaluation.png";
import SportsAgentsOffice from "@/public/steps/sports-agents-office.png";

// Component: HeroOurHistory
export default function HeroOurHistory() {

    return (
        <>
            <div className="hero min-h-screen bg-base-200 text-black">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-center mt-20 m-6">Our History</h1>
                        <ul className="steps steps-vertical">
                            <li className="step step-primary w-auto h-96">
                                <div className="card w-86 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">2020</h2>
                                        <p>
                                            We started with the idea on paper of how we could help athletes.
                                        </p>
                                    </div>
                                    <figure>
                                        <Image
                                            src={GroupAgents}
                                            alt="Group Agents"
                                            width={300}
                                            height={300}
                                            className="rounded-xl w-auto h-auto m-2"
                                        />
                                    </figure>
                                </div>
                            </li>
                            <li className="step step-secondary">
                                <div className="card w-86 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">2021</h2>
                                        <p>
                                            Once we had something designed, we began to look at the market
                                            and who was there because they were there and we created a
                                            small work team for SportAgent.
                                        </p>
                                    </div>
                                    <figure>
                                        <Image
                                            src={Hands}
                                            alt="Hands"
                                            width={300}
                                            height={300}
                                            className="rounded-xl w-auto h-auto m-2"
                                        />
                                    </figure>
                                </div>
                            </li>
                            <li className="step step-accent">
                                <div className="card w-86 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">2022</h2>
                                        <p>
                                            Once consolidated, we launched our company as a service for athletes
                                        </p>
                                    </div>
                                    <figure>
                                        <Image
                                            src={SportAgentEvaluation}
                                            alt="Sport Agent Evaluation"
                                            width={300}
                                            height={300}
                                            className="rounded-xl w-auto h-auto m-2"
                                        />
                                    </figure>
                                </div>
                            </li>
                            <li className="step step-neutral">
                                <div className="card w-86 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">2023</h2>
                                        <p>
                                            We are currently working to improve, we have experience offering
                                            our personalized service to athletes and we have been
                                            growing and generating jobs.
                                        </p>
                                    </div>
                                    <figure>
                                        <Image
                                            src={SportsAgentsOffice}
                                            alt="Sports Agents Office"
                                            width={300}
                                            height={300}
                                            className="rounded-xl w-auto h-auto m-2"
                                        />
                                    </figure>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}