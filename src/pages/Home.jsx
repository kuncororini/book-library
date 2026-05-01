import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Selamat Datang di <span style={styles.accent}>BookLib</span></h1>
        <p style={styles.subtitle}>
          Temukan, simpan, dan kelola koleksi buku favoritmu dalam satu tempat.
        </p>
        <Link to="/books" style={styles.btn}>Jelajahi Koleksi</Link>
      </div>

      <div style={styles.cards}>
        {[
          { icon: "", title: "Koleksi Lengkap", desc: "Ratusan buku dari berbagai genre tersedia." },
          { icon: "", title: "Cari & Filter", desc: "Temukan buku berdasarkan genre atau judul." },
          { icon: "", title: "Rating Buku", desc: "Lihat rating dan ulasan setiap buku." },
        ].map((f) => (
          <div key={f.title} style={styles.card}>
            <div style={styles.icon}>{f.icon}</div>
            <h3 style={styles.cardTitle}>{f.title}</h3>
            <p style={styles.cardDesc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: "calc(100vh - 64px)", backgroundColor: "#0f1f12", color: "#f3e8cc", padding: "3rem 2rem" },
  hero: { textAlign: "center", padding: "4rem 1rem 3rem" },
  title: { fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1rem" },
  accent: { color: "#ffc926" },
  subtitle: { fontSize: "1.2rem", color: "#a8c4a2", maxWidth: "600px", margin: "0 auto 2rem" },
  btn: {
    display: "inline-block", backgroundColor: "#ffc926", color: "#18542a",
    padding: "0.8rem 2rem", borderRadius: "8px", textDecoration: "none",
    fontSize: "1rem", fontWeight: "bold",
  },
  cards: { display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "3rem" },
  card: {
    backgroundColor: "#1a3320", padding: "2rem", borderRadius: "12px",
    width: "220px", textAlign: "center", border: "1px solid #2a4a30",
  },
  icon: { fontSize: "2.5rem", marginBottom: "1rem" },
  cardTitle: { fontSize: "1.1rem", marginBottom: "0.5rem", color: "#ffc926" },
  cardDesc: { color: "#a8c4a2", fontSize: "0.9rem" },
};