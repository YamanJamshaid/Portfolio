import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const Frontendskills = ["CSS", "React", "Tailwind CSS", "Bootstrap", "WordPreess", "Shopify"];

    const Backendskills = ["PHP", "ASP .NET", "Node.js"];
    return (
        <section id="about" className="flex items-center justify-center min-h-screen py-20">
            <RevealOnScroll>
                <div className="max-w-3xl px-4 mx-auto">
                    <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-cyan-500/80 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    <div className=" rounded-xl p-8 border-white/10 border hover:translate-y-1 transform transition-all">
                        <p className="text-gray-300 mb-6">I'am actively learning the Reactjs, ASP .NET,
                            PHP/Laravel, and Next.js.
                            Gaining experience, knowledge, and wisdom.</p>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                                <div className="flex flex-wrap gap-2">
                                    {Frontendskills.map((tech, key) => (
                                        <span key={key} className="px-3 py-1 bg-gray-500/10 text-cyan-500 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(20, 255, 200, 0.2)] transition">
                                            {tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend </h3>
                                <div className="flex flex-wrap gap-2">
                                    {Backendskills.map((tech, key) => (
                                        <span key={key} className="px-3 py-1 bg-gray-500/10 text-cyan-500 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(20, 255, 200, 0.2)] transition">
                                            {tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8">
                        <div className="rounded-xl p-6 border-white/10 border hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Metric A Level</strong> (2021-2023)
                                </li>
                                <li>
                                    <strong>Diploma</strong> Aptech HDSE (2023-current)
                                </li>
                                <li>
                                    Relevent Courses: Web Development, Database Management.
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-xl p-6 border-white/10 border hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Work Experiance</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Intern Web develepor at Utrix Solution (2022-2023) </h4>
                                    <p>Maintan company's website</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Intern Shopify & Wordpress develepor at Innovative Widget (2023-2024) </h4>
                                    <p>Assisted in biuding eccomerce sites and business</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};