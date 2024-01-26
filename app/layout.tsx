import AppContextProvider from "@/components/AppContext"
import "../styles/globals.css"
import type { Metadata } from "next"
import EventBusContextProvider from "@/components/EventBusContext"

export const metadata: Metadata = {
    title: "Home",
    description: "Home"
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body>
                <AppContextProvider>
                    <EventBusContextProvider>
                        {children}
                    </EventBusContextProvider>
                </AppContextProvider>
            </body>
        </html>
    )
}
