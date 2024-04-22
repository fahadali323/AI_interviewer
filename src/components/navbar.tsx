import supabase from '../lib/supabase';
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();

    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate("/");
    }

    return (
        <nav className="flex justify-between m-4">
            <h1 className="font-mono">Interopers AI</h1>
            <button className="font-mono text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            onClick={() => signOutUser()}
            >Sign Out</button>
        </nav>
    )
}

export default Navbar;