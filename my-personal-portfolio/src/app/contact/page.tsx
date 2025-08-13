import ContactCard from "@/components/ContactCard";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

export default function ContactPage() {
    return (
        <section className="flex min-h-screen items-center justify-center px-8 py-16">
            <div className="mx-auto max-w-2xl space-y-12 text-center">
                {/* header */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-light text-white md:text-5xl">
                        Contact Me
                    </h1>
                    <p className="mx-auto max-w-md text-lg text-gray-400">
                        Interested in working together? Feel free to reach out
                        through any of these channels.
                    </p>
                </div>
                {/* Contact Info Grid */}
                <div className="grid gap-8 md:gap-12">
                    {/* Email Card */}
                    <ContactCard
                        icon={SiGmail}
                        iconColor="text-red-400"
                        title="Email"
                        subTitle="vahab.afsharian@gmail.com"
                        navigateTo="mailto:vahab.afsharian@gmail.com"
                    />

                    {/* LinkedIn Card */}
                    <div className="grid gap-6 md:grid-cols-2">
                        <ContactCard
                            icon={SiLinkedin}
                            iconColor="text-blue-400"
                            title="LinkedIn"
                            subTitle="Professional Profile"
                            navigateTo="https://www.linkedin.com/in/vahab-afsharian/"
                        />

                        {/* GitHub Card */}
                        <ContactCard
                            icon={SiGithub}
                            iconColor="text-gray-400"
                            title="GitHub"
                            subTitle="View My Code"
                            navigateTo="https://github.com/yourusername"
                        />
                    </div>

                    {/* Location */}
                    <div className="flex items-center justify-center gap-3 text-gray-400">
                        <FaMapMarkerAlt className="text-lg" />
                        <span>Based in Jyväskylä, Finland</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
