import type { Metadata } from "next";
import "@/styles/globals.css";
import MainHeader from "@/components/MainHeader";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: "800",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Vahab Afsharian - Frontend Developer",
    description:
        "Personal portfolio showcasing my projects and skills as a frontend developer",
    keywords: ["frontend", "developer", "react", "nextjs", "portfolio"],
    authors: [{ name: "Vahab Afsharian" }],
    openGraph: {
        title: "Vahab Afsharian - Frontend Developer",
        description: "Personal portfolio showcasing my projects and skills",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <MainHeader />
                <main>{children}</main>
            </body>
        </html>
    );
}
