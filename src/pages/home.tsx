import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'

const supabaseURL = process.env.REACT_APP_SUPABASE_URL!
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY!

const supabase = createClient(
  supabaseURL,
  supabaseAnonKey
)

function Home() {
    const navigate = useNavigate();

    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate("/");
    }

    return (
        <div>
            <h1>Authenticated</h1>
            <button onClick={() => signOutUser()}>Sign Out</button>
        </div>
    )
}
  
  export default Home;