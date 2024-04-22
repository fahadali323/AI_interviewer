import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import supabase from '../lib/supabase';
import GenerateQuestions from '../pages/generateQuestionsPage';

const PrivateRoute = () => {
    const [session, setSession] = useState({});

    useEffect(() => {
        async function getCurrentSession() {
            await supabase.auth.getSession().then((value) => {
                if (value.data?.session) {
                    setSession(value.data.session);
                }
            });
        }
        getCurrentSession();
        supabase.auth.onAuthStateChange((event, session) => {
            setSession(session!);
        })
    }, []);

    return session ? <GenerateQuestions /> : <Navigate to="/loginPage" />;
}

export default PrivateRoute;