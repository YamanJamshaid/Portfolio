import { RevealOnScroll } from "../RevealOnScroll";


export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 pz-4 ">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-cyan-500/80 leading-right  bg-clip-text text-transparent">
                    Hello, I'm <span >Usman Jamshaid</span>
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Currently working as a Shopify Developer at Innovative Widget, 
                    where I focus on developing and maintaining e-commerce solutions.
                    I have a strong foundation in front-end technologies (HTML, CSS, JS) and am actively learning the Reactjs, ASP .NET,
                    PHP/Laravel, and Next.js.
                    Gaining experience, knowledge, and wisdom.

                </p>
                <div className="flex justify-center space-x-4"> 
                    <a href="#contact" className="bg-cyan-500/80 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(162, 97, 246)] ">Contact Me</a>
                    <a href="#projects" className=" border border-emerald-500/50 text-emerald-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(43, 127, 255)] hover:bg-emerald-200/10 ">Projects</a>
                </div>
            </div>
            </RevealOnScroll>
        </section>

    );
};