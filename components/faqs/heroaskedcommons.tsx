import { FaRegCircleQuestion } from "react-icons/fa6";

// Component: HeroAskedCommons
export default function HeroAskedCommons() {
    const generalServiceQuestions = [
        "How do I access the service portal?",
        "What are the available subscription plans?",
        "How can I contact customer support?",
        "Is there a trial period for the service?",
        "Can I upgrade or downgrade my subscription?"
    ];

    const companySolutionQuestions = [
        "What are the company's main products?",
        "How can I integrate the solutions into my business?",
        "Are there any tutorials available for the products?",
        "Can I request a custom solution for my company?",
        "How often are updates released for the products?"
    ];

    const membersQuestions = [
        "How can I become a member of the organization?",
        "What are the benefits of being a member?",
        "Are there any exclusive events for members?",
        "How can I contribute to the organization's activities?",
        "Can I recommend new initiatives for the organization?"
    ];

    const societyQuestions = [
        "What is the mission of the society?",
        "How can I participate in the society's projects?",
        "Are there any community events organized by the society?",
        "Can I collaborate with other members on social projects?",
        "How does the society impact the local community?"
    ];

    return (
        <>
            <div className="hero min-h-screen bg-base-200 flex items-center justify-center text-black">
                <div className="hero-content grid grid-cols-1 gap-4 text-center max-w-6xl">
                    {/* Columna derecha para los colapsos */}
                    <div className="grid grid-flow-row gap-4">
                        <p className="py-6 text-2xl font-bold">
                            What are the frequently asked questions of our clients?
                        </p>
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                            <div className="collapse-title text-xl font-medium">
                                Questions general service
                            </div>
                            <div className="collapse-content">
                                {generalServiceQuestions.map((question, index) => (
                                    <p key={index} className="text-start">
                                        <FaRegCircleQuestion className="text-xl text-primary" />
                                        {question}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                            <div className="collapse-title text-xl font-medium">
                                Questions company for solutions
                            </div>
                            <div className="collapse-content">
                                {companySolutionQuestions.map((question, index) => (
                                    <p key={index} className="text-start">
                                        <FaRegCircleQuestion className="text-xl text-primary" />
                                        {question}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                            <div className="collapse-title text-xl font-medium">
                                Questions members
                            </div>
                            <div className="collapse-content">
                                {membersQuestions.map((question, index) => (
                                    <p key={index} className="text-start">
                                        <FaRegCircleQuestion className="text-xl text-primary" />
                                        {question}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                            <div className="collapse-title text-xl font-medium">
                                Questions society
                            </div>
                            <div className="collapse-content">
                                {societyQuestions.map((question, index) => (
                                    <p key={index} className="text-start">
                                        <FaRegCircleQuestion className="text-xl text-primary" />
                                        {question}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
