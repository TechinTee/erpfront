import styles from './Login.module.css';
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <div className={styles.split}>
            <div className={styles.left}>
                <div className={styles.leftContent}>
                    <img src='/images/spc4.png' alt="spc" width='90%' />
                    <h1>Welcome</h1>
                    <NavLink to="/admin/login">
                        <button className={styles.registerBtn}>Register</button>
                    </NavLink>
                </div>
            </div>

            <div className={styles.right}>
                <form className={styles.form}>
                    <a>Login</a>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <NavLink to="/admin/login">
                        <button type="submit">Login</button>
                    </NavLink>
                </form>
            </div>
        </div>
    )
}

export default Login;