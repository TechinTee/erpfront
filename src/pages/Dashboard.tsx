import { useEffect, useState } from "react";
import styles from './Dashboard.module.css'
import { getComingSoon } from "../../services/commingsoon";

function Dashboard() {
    const [msg, setMsg] = useState<string>("Loading...");

    useEffect(() => {
        getComingSoon()
            .then(res => {
                const textname = res.data?.data?.textname;
                setMsg(typeof textname === "string" ? textname : "Error");
            })
            .catch(err => {
                console.error(err);
                setMsg("Error");
            });
    }, []);


    return (
        <div >
            <div className={styles.center_container}>
                <img className={styles.spc_image} src='/images/spc4.png' alt="spc" />
                <h1 className={styles.zoom_left}>
                    {msg}
                </h1>
            </div>
        </div >

    )
}

export default Dashboard;