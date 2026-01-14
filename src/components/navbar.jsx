export default function Navbar() {
    const links = [
        "How it works",
        "All apps",
        "Pricing",
        "For teams",
        "Blog",
        "Prodcast",
        "|",
    ];
    return (
        <div className="h-8 flex justify-between mx-10 my-[17.5px] text-white">

            <img
                src="Vector.png"
                alt="Logo"
                className="transition-transform duration-300 hover:scale-110"
            />

            <ul className="flex items-center gap-7 z-50">
                {links.map(item => (
                    <li key={item} className="relative inline-block cursor-pointer group leading-none">
                        <span>{item}</span>
                        <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    </li>
                ))}

                <li className="cursor-pointer">
                    <img src="en.svg.png" alt="Language" />
                </li>

                <li className="relative inline-block cursor-pointer group leading-none">
                    <span>Sign in</span>
                    <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </li>

                <li className="relative overflow-hidden border border-white px-6 py-[5.5px] rounded-lg cursor-pointer group">
                    <span className="absolute inset-0 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                        Try Free
                    </span>
                </li>
            </ul>
        </div>
    );
}
