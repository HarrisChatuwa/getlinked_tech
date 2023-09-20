import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="bg-slate-700 p-8">
                <div className="container mx-auto flex justify-between items-center bg-green-200">
                    <NavLink to={"/"}>Logo</NavLink>
                    <div className="flex justify-around bg-red-200 space-x-12 items-center">
                        <div className="flex justify-between space-x-6 bg-purple-200 font-semibold">
                            <NavLink to={"/#"}>Timeline</NavLink>
                            <NavLink to={"/#"}>Overview</NavLink>
                            <NavLink to={"/#"}>FAQs</NavLink>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </div>
                        <NavLink to={"/register"}>
                            <div className="px-4 py-2 bg-amber-400 text-white">Register</div>
                        </NavLink>
                    </div>
                </div>
            </nav>
            <div className="mt-4">
                <Outlet />
            </div>
        </>
    );
}