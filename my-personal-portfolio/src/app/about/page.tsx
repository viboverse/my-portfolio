export default function AboutMePage() {
    return (
        <section className="min-h-screen px-8 py-16">
            <div className="mx-auto max-w-4xl">
                <div className="space-y-12">
                    {/* Header */}
                    <div className="space-y-4 text-center">
                        <h1 className="text-4xl md:text-5xl">About me</h1>
                        <div className="mx-auto h-0.5 w-24 bg-purple-600"></div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid gap-12 md:grid-cols-2">
                        {/* Left Colomns */}
                        <div className="space-y-6">
                            <h2 className="mb-4 text-2xl font-medium text-white">
                                My Journey
                            </h2>
                            <p className="leading-relaxed text-gray-300">
                                Hi, I’m an ICT student at Jamk University of
                                Applied Sciences(I go by “Vibo”) who loves
                                building web apps and learning everything I can
                                along the way. I started with simple HTML and
                                CSS pages, then got curious about how to make
                                them interactive—so I dived into JavaScript,
                                React, Tailwind CSS, and TypeScript. Every step
                                opened new doors, and I’ve been hooked ever
                                since.
                            </p>
                            <p className="leading-relaxed text-gray-300">
                                What excites me most is the process of learning
                                something new and immediately putting it into
                                practice. Whether it’s a new framework, a design
                                pattern, or a small coding trick, I enjoy
                                experimenting and finding better ways to solve
                                problems. For me, coding isn’t just about
                                getting something to work—it’s about improving
                                it, refining it, and making the experience
                                smoother for the user.
                            </p>
                        </div>

                        {/* Right Columns */}
                        <div className="space-y-6">
                            <h2 className="mb-4 text-2xl font-medium text-white">
                                How I Add Value
                            </h2>

                            <div className="space-y-4">
                                <div className="border-l-4 border-purple-600 pl-4">
                                    <h3 className="font-medium text-white">
                                        Always Learning
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        I’m constantly exploring new tools,
                                        frameworks, and best practices to keep
                                        improving.
                                    </p>
                                </div>
                                <div className="border-l-4 border-purple-600 pl-4">
                                    <h3 className="font-medium text-white">
                                        Clean Code
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        Writing maintainable, well-structured
                                        code for long-term scalability.
                                    </p>
                                </div>
                                <div className="border-l-4 border-purple-600 pl-4">
                                    <h3 className="font-medium text-white">
                                        Responsive Design
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        Creating layouts that look and work
                                        great on any device.
                                    </p>
                                </div>
                                <div className="border-l-4 border-purple-600 pl-4">
                                    <h3 className="font-medium text-white">
                                        Problem-Solving
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        Tackling challenges with logical
                                        thinking and creativity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
