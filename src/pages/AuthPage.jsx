import { useState } from "react";

export default function AuthPage() {
    const [isAuth, setIsAUth] = useState(false);


    function testAuth(formData) {
        const pseudo = formData.get("pseudo");
        const password = formData.get("password");
        if (pseudo == import.meta.env.VITE_ADMIN_PSEUDO && password == import.meta.env.VITE_ADMIN_PASSWORD) {
            setIsAUth(true);
        }
    }


    if (!isAuth) {
        return (
            <form action={testAuth}>
                <label>
                    Pseudo :
                    <input name="pseudo" />
                </label>
                <label>
                    Password :
                    <input type="password" name="password" />
                </label>
            </form>
        )
    }

}