import { useParams, Link } from "react-router-dom";
import { books } from "../data/books";

export default function BookDetail() {
  const { id } = useParams();   // <-- ambil ID dari URL
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div style={{ ...S.page, textAlign: "center" }}>
        <h2 style={{ color: "#e94560" }}>Buku tidak ditemukan</h2>
        <Link to="/books" style={S.backBtn}>← Kembali ke Koleksi</Link>
      </div>
    );
  }

  return (
    <div style={S.page}>
      <Link to="/books" style={S.backBtn}>← Kembali ke Koleksi</Link>
      <div style={S.card}>
        <img src={book.cover} alt={book.title} style={S.cover} onError={(e) => e.target.src = "https://via.placeholder.com/200x300?text=Book"} />
        <div style={S.info}>
          <span style={S.genre}>{book.genre}</span>
          <h1 style={S.title}>{book.title}</h1>
          <p style={S.author}>{book.author}</p>
          <div style={S.meta}>
            <span>Tahun: {book.year}</span>
            <span>{book.pages} halaman</span>
            <span>⭐ Rating: {book.rating}/5</span>
          </div>
          <h3 style={{ color: "#e94560", marginBottom: "0.5rem" }}>Sinopsis</h3>
          <p style={S.desc}>{book.description}</p>
          <p style={{ color: "#555", fontSize: "0.8rem", marginTop: "1.5rem" }}>
            🔗 URL: /books/<strong style={{ color: "#e94560" }}>{id}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

const S = {
  page: { minHeight: "calc(100vh - 64px)", backgroundColor: "#0f1f12", color: "#f3e8cc", padding: "2rem" },
  backBtn: { color: "#ffc926", textDecoration: "none", display: "inline-block", marginBottom: "1.5rem" },
  card: { display: "flex", gap: "2rem", flexWrap: "wrap", backgroundColor: "#1a3320", padding: "2rem", borderRadius: "16px", border: "1px solid #2a4a30" },
  cover: { width: "180px", height: "270px", objectFit: "cover", borderRadius: "10px" },
  info: { flex: 1, minWidth: "250px" },
  genre: { backgroundColor: "#18542a", color: "#ffc926", fontSize: "0.75rem", padding: "3px 10px", borderRadius: "20px", border: "1px solid #ffc926" },
  title: { fontSize: "2rem", margin: "0.8rem 0 0.4rem", color: "#f3e8cc" },
  author: { color: "#a8c4a2", marginBottom: "1rem" },
  meta: { display: "flex", gap: "1.5rem", flexWrap: "wrap", color: "#6a8f70", marginBottom: "1.5rem", fontSize: "0.9rem" },
  desc: { color: "#c8d8c2", lineHeight: 1.7, maxWidth: "600px" },
};