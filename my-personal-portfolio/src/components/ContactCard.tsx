import { IconType } from "react-icons";

type ContactCartProps = {
    icon: IconType;
    title: string;
    subTitle: string;
    iconColor: string;
    navigateTo: string;
};

export default function ContactCard({
    icon: Icon,
    title,
    subTitle,
    iconColor,
    navigateTo,
}: ContactCartProps) {
    return (
        <a
            href={navigateTo}
            target="_blank"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-gray-800 bg-gray-900/30 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/50"
        >
            <Icon className={`text-4xl ${iconColor}`} />
            <div className="text-center">
                <h3 className="mb-1 text-xl font-medium text-white">{title}</h3>
                <p className="text-gray-300 transition-colors group-hover:text-white">
                    {subTitle}
                </p>
            </div>
        </a>
    );
}
