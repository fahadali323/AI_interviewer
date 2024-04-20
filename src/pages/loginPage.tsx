import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import Success from './home';

const supabaseURL = process.env.REACT_APP_SUPABASE_URL!;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY!;

const supabase = createClient(
  supabaseURL,
  supabaseAnonKey
);

function Login() {
    const [session, setSession] = useState({});

    useEffect(() => {
        async function getCurrentSession() {
            await supabase.auth.getSession().then((value) => {
                // value.data.user
                if (value.data?.session) {
                    setSession(value.data.session);
                }
            });
        }
        getCurrentSession();
        supabase.auth.onAuthStateChange((event, session) => {
            setSession(session!);
        })
    }, [])

    if (!session) {
        return (
            <div className="Login">
                <header className="LoginHeader">
                    <button onClick={() => {
                        supabase.auth.signInWithOAuth({
                            provider: "google",
                        })
                    }}>Sign in with Google</button>
                </header>
            </div>
        )
    }

    return (
        <>
            <Success/>
        </>
    )
}

export default Login;