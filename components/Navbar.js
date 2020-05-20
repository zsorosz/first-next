import Link from 'next/link';

const Navbar = () => {
    const styles = {
        display: "flex",
        backgroundColor: "grey",
        justifyContent: "space-between",
        padding: "1rem"
    }
    return (
    <div style={styles}>
        <Link href='/'>
            <a>Home page</a>
        </Link>
        <Link href='/about'>
            <a>About page</a>
        </Link>
        <Link href='/contact'>
            <a>Contact page</a>
        </Link>
    </div>
)};

export default Navbar;