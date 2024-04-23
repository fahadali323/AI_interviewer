import supabase from '../lib/supabase';
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();

    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate("/");
    }

    return (
        <nav className="m-4">
            <ul className="flex justify-around items-center">
                <li>
                    <a
                        className="block font-mono"
                        href="/generateQuestionsPage"
                    >Interopers AI</a>
                </li>
                <li>
                    <a
                        className="block font-mono" 
                        href="/discussionPage"
                    >Discussion</a>
                </li>
                <li>
                    <a
                        className="block font-mono" 
                        href="/practicePage"
                    >Practice</a>
                </li>
                <li>
                    <a
                        className="block font-mono" 
                        href="/pricingPage"
                    >Pricing</a>
                </li>                 
                <li>
                    <button className="font-mono text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                        onClick={() => signOutUser()}
                    >Sign Out</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;