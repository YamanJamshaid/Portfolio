import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-cyan-500/80 bg-clip-text text-transparent text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(20, 255, 200, 0.2)] transition">
                            <img src="/Portfolio/images/Aspproject.jpg" alt="Project 1" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Star Security</h3>
                            <p className="text-gray-400 mb-4">A simple website with crud operations and Admin Dashboard where crud operations are perfomed.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["ASP .Net core", "SQL Server", "Bootstrap", "Razor pages"].map((tech, key) => (
                                    <span key={key} className="px-3 py-1 bg-gray-500/10 text-cyan-500 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(20, 255, 200, 0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="#" className="block mt-4 text-cyan-400/90 hover:text-cyan-300 my-4">View Project ➡</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(20, 255, 200, 0.2)] transition">
                            <img src="/Portfolio/images/TJsolution.jpg" alt="Project 2" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-bold mb-2">TJ Solutions</h3>
                            <p className="text-gray-400 mb-4">Developed HTML, CSS Website on the given template</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "Bootstrap", "javascript"].map((tech, key) => (
                                    <span key={key} className="px-3 py-1 bg-gray-500/10 text-cyan-500 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(20, 255, 200, 0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="https://www.tjsolutions.com.pk" className="block mt-4 text-cyan-400/90 hover:text-cyan-300 my-4">View Project ➡</a>
                            </div>
                        </div>
                        
                        <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(20, 255, 200, 0.2)] transition">
                            <img src="/Portfolio/images/myportfolio.jpg" alt="Project 3" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-bold mb-2">My Portfolio</h3>
                            <p className="text-gray-400 mb-4">Create the My personal portfolio website using react and tailwindcss.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Vite","ReactJS", "Tailwindcss"].map((tech, key) => (
                                    <span key={key} className="px-3 py-1 bg-gray-500/10 text-cyan-500 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(20, 255, 200, 0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="#" className="block mt-4 text-cyan-400/90 hover:text-cyan-300 my-4">View Project ➡</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(20, 255, 200, 0.2)] transition">
                            <img src="/images/.jpg" alt="Project 3" className="w-full h-48 object-cover rounded-lg mb-4" alt="Movie booking"/>
                            <h3 className="text-2xl font-bold mb-2">Movie Ticket Booking site</h3>
                            <p className="text-gray-400 mb-4">Created Movie Ticket Booking site using php and phpmyadmin.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["php","phpmyadmin"].map((tech, key) => (
                                    <span key={key} className="px-3 py-1 bg-gray-500/10 text-cyan-500 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(20, 255, 200, 0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="#" className="block mt-4 text-cyan-400/90 hover:text-cyan-300 my-4">Not Uploaded yet</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(20, 255, 200, 0.2)] transition">
                            <img src="/Portfolio/images/graocoffee.jpg" alt="Project 3" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-bold mb-2">GraoCoffee</h3>
                            <p className="text-gray-400 mb-4">Create the UI of Graocoffee eccomerce store.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Shopify"].map((tech, key) => (
                                    <span key={key} className="px-3 py-1 bg-gray-500/10 text-cyan-500 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(20, 255, 200, 0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="https://graocoffee.co" className="block mt-4 text-cyan-400/90 hover:text-cyan-300 my-4">View Project ➡</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(20, 255, 200, 0.2)] transition">
                            <img src="/Portfolio/images/Thegemstore.jpg" alt="Project 3" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Thegemstore</h3>
                            <p className="text-gray-400 mb-4">Create the UI of Thegemstore eccomerce store.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Shopify"].map((tech, key) => (
                                    <span key={key} className="px-3 py-1 bg-gray-500/10 text-cyan-500 rounded-full text-sm hover:bg-gray-500/20 hover:shadow-[0_2px_8px_rgba(20, 255, 200, 0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="https://thegemstoreonline.com" className="block mt-4 text-cyan-400/90 hover:text-cyan-300 my-4">View Project ➡</a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
