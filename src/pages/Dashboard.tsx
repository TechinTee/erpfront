import styles from '../styles/Dashboard.module.css'

function Dashboard() {
    return (
        <div >
            <div className={styles.center_container}>
                <img className={styles.spc_image} src='/images/spc4.png' alt="spc" />
                <h1 className={styles.zoom_left}>
                    Comming Soon
                </h1>
            </div>
        </div >

    )
}

export default Dashboard;