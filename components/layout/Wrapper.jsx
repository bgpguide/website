import { SiGithub } from "@icons-pack/react-simple-icons"

export const Wrapper = ({children}) => (
    <div className="min-h-screen flex flex-col">
        <div className="fixed top-0 left-0 w-full bg-white/[50%] backdrop-blur-sm border-b border-gray-200/[75%]">
            <div className="container">
                <div className="flex gap-4 items-center">
                    <p className="text-lg font-medium">bgpguide</p>
                    <div className="flex flex-grow justify-center nav">
                        <a href="#">Guides</a>
                        <a href="#">Resources</a>
                        <a href="#">Documentation</a>
                        <a href="#">Donate</a>
                    </div>
                    <a href="#" className="text-sm flex gap-2 items-center px-3 py-6 border-b border-transparent hover:border-black text-gray-700 hover:text-black">
                        GitHub
                        <SiGithub className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
        <div className="flex-grow">
            {children}
        </div>
        <div className="container py-12">
            <div className="flex items-center gap-4">
                <p className="text-xs text-gray-500">Copyleft bgp.guide contributors.</p>
                <div className="flex flex-grow justify-end">
                    <p className="text-xs text-gray-500">a <a target="_blank" href="https://kjartann.is/" className="text-sky-500 font-medium underline hover:opacity-80">kjartann.is</a> website.</p>
                </div>
            </div>
        </div>
    </div>
)