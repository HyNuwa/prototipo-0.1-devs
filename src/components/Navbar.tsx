import Link from "next/link";
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
// import { currentUser } from "@clerk/nextjs/server";
// import { syncUser } from "@/actions/user.action";

async function Navbar() {
//   const user = await currentUser();
//   if (user) await syncUser(); // POST

  return (
    <nav className="w-full border-b backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
              Devs Project
            </Link>
          </div>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;