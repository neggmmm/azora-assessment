export default function Navbar() {
  return (
    <div className="h-8 flex justify-between mx-10 my-[17.5px]">
        <img src="Vector.png" alt="Logo" />
        <ul className="flex items-center gap-7 [&>li]:cursor-pointer">
            <li>How it works</li>
            <li>All apps</li>
            <li>Pricing</li>
            <li>For teams</li>
            <li>Blog</li>
            <li>Prodcast</li>
            <li> | </li>
            <li>
                <img src="en.svg.png" alt="Search" />
            </li>
            <li>Sign in</li>
            <li className="border border-white px-6 py-[5.5px] rounded-lg">Try Free</li>
        </ul>
    </div>
  )
}
