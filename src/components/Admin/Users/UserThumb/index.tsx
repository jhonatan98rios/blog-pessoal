import Link from 'next/link';
import { UserModel } from 'models/User';
import styles from './style.module.scss';

interface IUserThumb {
  user: UserModel
}

export default function UserThumb({ user }: IUserThumb) {

  return (
    <div className={styles.user}>
      <img className={styles.icon} src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />

      <div className={styles.title}>
        <p> {user.user} </p>
        <p className={styles.permission}> {user.role} </p>
      </div>

      <div className={styles.controls}>
        <Link
          href={`/admin/users/editar/${user.user}`}
          className={styles.editButton}
        > Editar </Link>
      </div>
    </div>
  )
}
