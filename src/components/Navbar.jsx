import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/books", label: "Koleksi Buku" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>BookLib</Link>
      <div style={styles.links}>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              ...styles.link,
              ...(pathname === link.to ? styles.active : {}),
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "1rem 2rem", backgroundColor: "#18542a", color: "#f3e8cc",
    position: "sticky", top: 0, zIndex: 100,
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },
  logo: { color: "#ffc926", fontSize: "1.4rem", fontWeight: "bold", textDecoration: "none" },
  links: { display: "flex", gap: "1.5rem" },
  link: { color: "#a8c4a2", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" },
  active: { color: "#ffc926", fontWeight: "bold" },
};