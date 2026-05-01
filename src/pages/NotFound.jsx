import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={S.page}>
      <h1 style={S.code}>404</h1>
      <h2 style={S.title}>Halaman Tidak Ditemukan</h2>
      <p style={S.desc}>Halaman yang kamu cari tidak ada atau sudah dipindahkan.</p>
      <Link to="/" style={S.btn}>Kembali ke Home</Link>
    </div>
  );
}

const S = {
  page: { minHeight: "calc(100vh - 64px)", backgroundColor: "#0f1f12", color: "#f3e8cc", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" },
  code: { fontSize: "8rem", fontWeight: "900", color: "#ffc926", margin: 0, lineHeight: 1 },
  title: { fontSize: "2rem", marginBottom: "1rem", color: "#f3e8cc" },
  desc: { color: "#a8c4a2", marginBottom: "2rem" },
  btn: { backgroundColor: "#ffc926", color: "#18542a", padding: "0.8rem 2rem", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" },
};