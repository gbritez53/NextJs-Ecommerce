import Head from "next/head"
import Link from "next/link"
import { FC, ReactNode } from "react"

const styles = {
    mainWrapper: `flex min-h-screen flex-col justify-between`,
    content: `m-auto mt-4 px-4`,
    navLink: `text-lg font-bold`,
    navbar: `flex h-12 justify-between shadow-md items-center p-4`,
    footer: `flex justify-center items-center h-10 shadow-inner`
}

interface Props {
    children: ReactNode,
    title: string
}

export const MainLayout: FC<Props> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{`${title ? title + ' - Amazona' : 'Amazona'}`}</title>
                <meta name='description' content='Ecommerce Website' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className={styles.mainWrapper}>
                <header>
                    <nav className={styles.navbar}>
                        <Link href='/'>
                            <a className={styles.navLink}>Amazona</a>
                        </Link>
                        <div className="space-x-2">
                            <Link href='/cart'>Cart</Link>
                            <Link href='/login'>Login</Link>
                        </div>
                    </nav>
                </header>
                <main className={styles.content}>{children}</main>
                <footer className={styles.footer}>Copyright &copy; 2022 - all rights reserved </footer>
            </div>
        </>
    )
}
