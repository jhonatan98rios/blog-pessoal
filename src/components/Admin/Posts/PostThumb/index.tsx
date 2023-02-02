import Link from 'next/link';
import { IPost } from 'types';
import styles from './style.module.scss';

interface IPostThumb {
    content: IPost
}

export default function PostThumb({ content }: IPostThumb) {

    return (
        <div className={styles.thumb}>
            <img className={styles.banner} src={content.banner.src} alt="Banner" />
            <h2 className={styles.title}> { content.title } </h2>
            <div className={styles.controls}>
                <Link href={`/admin/posts/editar/${content.slug}`} className={styles.editButton}> Editar </Link>
                <button className={styles.deleteButton}> Apagar </button>
            </div>
        </div>
    )
}
