import { useEffect, useState } from 'react';
import UserThumb from '../../../components/Admin/Users/UserThumb';
import { getAllUsers } from '../../../services/client';
import styles from './style.module.scss';

export default function AdminsUsers() {

    const [users, setUsers] = useState([])

    useEffect(() => {

        const getUsers = async () => {
            const data = await getAllUsers()

            if (data?.users) {
                setUsers(data.users)
            }
        }

        getUsers()
            .catch(err => console.log('Erro:', err))

    }, [])

    return (
        <main className={styles.main}>
            <h1> Admin Users </h1>

            <section className={styles.section}>
                { users?.map((user, index) => {
                    return (
                        <UserThumb content={user} key={index} />
                    )
                }) }
            </section>
        </ main>
    )
}