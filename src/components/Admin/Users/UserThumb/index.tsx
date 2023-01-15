import styles from './style.module.scss';

export default function UserThumb({ content }) {

    return (
        <div className={styles.user}>
            <img className={styles.icon} src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />

            <div className={styles.title}>
                <p> { content.user } </p>
                <p className={content.permission}> Admin </p>
            </div>

            <div className={styles.controls}>
                <button className={styles.editButton}> Editar </button>
                <button className={styles.deleteButton}> Apagar </button>
            </div>
        </div>
    )
}