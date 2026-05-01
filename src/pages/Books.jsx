import { useState } from "react";
import { Link } from "react-router-dom";
import { books as initialBooks } from "../data/books";

export default function Books() {
  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState("");
  const [filterGenre, setFilterGenre] = useState("Semua");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", author: "", genre: "Novel", year: "", description: "" });
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", author: "", genre: "Novel", year: "", description: "" });

  const genres = ["Semua", ...new Set(initialBooks.map((b) => b.genre))];

  const filtered = books.filter((b) => {
    const matchSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    const matchGenre = filterGenre === "Semua" || b.genre === filterGenre;
    return matchSearch && matchGenre;
  });

  const handleAdd = () => {
    if (!form.title || !form.author) return alert("Judul dan penulis wajib diisi!");
    const newBook = {
      ...form,
      id: String(Date.now()),
      rating: 4.0,
      pages: 200,
      year: Number(form.year) || new Date().getFullYear(),
      cover: "https://via.placeholder.com/120x180?text=Book",
    };
    setBooks([newBook, ...books]);
    setForm({ title: "", author: "", genre: "Novel", year: "", description: "" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Hapus buku ini?")) setBooks(books.filter((b) => b.id !== id));
  };

  const handleEdit = (book) => {
    setEditId(book.id);
    setEditForm({
      title: book.title,
      author: book.author,
      genre: book.genre,
      year: book.year,
      description: book.description,
    });
  };

  const handleSaveEdit = () => {
    if (!editForm.title || !editForm.author) return alert("Judul dan penulis wajib diisi!");
    setBooks(
      books.map((b) =>
        b.id === editId ? { ...b, ...editForm, year: Number(editForm.year) } : b
      )
    );
    setEditId(null);
  };

  return (
    <div style={S.page}>
      <h1 style={S.heading}>Koleksi Buku</h1>

      {/* Controls */}
      <div style={S.controls}>
        <input
          placeholder="Cari judul atau penulis..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={S.input}
        />
        <select
          value={filterGenre}
          onChange={(e) => setFilterGenre(e.target.value)}
          style={S.select}
        >
          {genres.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
        <button onClick={() => setShowForm(!showForm)} style={S.btn}>
          {showForm ? "Tutup" : "Tambah Buku"}
        </button>
      </div>

      {/* Form Tambah */}
      {showForm && (
        <div style={S.form}>
          <h3 style={{ color: "#ffc926", marginBottom: "1rem" }}>Tambah Buku Baru</h3>
          <input
            placeholder="Judul buku"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            style={{ ...S.input, marginBottom: "0.7rem", width: "100%" }}
          />
          <input
            placeholder="Nama penulis"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            style={{ ...S.input, marginBottom: "0.7rem", width: "100%" }}
          />
          <input
            placeholder="Tahun terbit"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
            style={{ ...S.input, marginBottom: "0.7rem", width: "100%" }}
          />
          <input
            placeholder="Deskripsi singkat"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            style={{ ...S.input, marginBottom: "0.7rem", width: "100%" }}
          />
          <select
            value={form.genre}
            onChange={(e) => setForm({ ...form, genre: e.target.value })}
            style={S.select}
          >
            {["Novel", "Sejarah", "Self-Help", "Fantasy", "Non-Fiksi"].map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
          <button onClick={handleAdd} style={{ ...S.btn, marginLeft: "1rem" }}>
            Simpan
          </button>
        </div>
      )}

      {/* Jumlah buku */}
      <p style={{ color: "#a8c4a2", marginBottom: "1rem" }}>
        Menampilkan {filtered.length} buku
      </p>

      {/* Grid Buku */}
      <div style={S.grid}>
        {filtered.map((book) => (
          <div key={book.id} style={S.card}>
            {editId === book.id ? (
              <div style={{ width: "100%" }}>
                <h4 style={{ color: "#ffc926", marginBottom: "0.8rem" }}>Edit Buku</h4>
                <input
                  placeholder="Judul buku"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  style={{ ...S.input, marginBottom: "0.5rem", width: "100%" }}
                />
                <input
                  placeholder="Nama penulis"
                  value={editForm.author}
                  onChange={(e) => setEditForm({ ...editForm, author: e.target.value })}
                  style={{ ...S.input, marginBottom: "0.5rem", width: "100%" }}
                />
                <input
                  placeholder="Tahun terbit"
                  value={editForm.year}
                  onChange={(e) => setEditForm({ ...editForm, year: e.target.value })}
                  style={{ ...S.input, marginBottom: "0.5rem", width: "100%" }}
                />
                <input
                  placeholder="Deskripsi"
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  style={{ ...S.input, marginBottom: "0.5rem", width: "100%" }}
                />
                <select
                  value={editForm.genre}
                  onChange={(e) => setEditForm({ ...editForm, genre: e.target.value })}
                  style={S.select}
                >
                  {["Novel", "Sejarah", "Self-Help", "Fantasy", "Non-Fiksi"].map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.8rem" }}>
                  <button onClick={handleSaveEdit} style={S.btn}>
                    Simpan
                  </button>
                  <button onClick={() => setEditId(null)} style={S.cancelBtn}>
                    Batal
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
                <img
                  src={book.cover}
                  alt={book.title}
                  style={S.cover}
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/120x180?text=Book")
                  }
                />
                <div style={S.info}>
                  <span style={S.genre}>{book.genre}</span>
                  <h3 style={S.title}>{book.title}</h3>
                  <p style={S.author}>{book.author}</p>
                  <p style={S.meta}>
                    {book.year} · {book.rating}
                  </p>
                  <div style={S.actions}>
                    <Link to={`/books/${book.id}`} style={S.detailBtn}>
                      Lihat Detail
                    </Link>
                    <button onClick={() => handleEdit(book)} style={S.editBtn}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(book.id)} style={S.deleteBtn}>
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ color: "#a8c4a2", textAlign: "center", marginTop: "3rem" }}>
          Tidak ada buku ditemukan.
        </p>
      )}
    </div>
  );
}

const S = {
  page: { minHeight: "calc(100vh - 64px)", backgroundColor: "#0f1f12", color: "#f3e8cc", padding: "2rem" },
  heading: { fontSize: "2rem", marginBottom: "1.5rem", color: "#ffc926" },
  controls: { display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" },
  input: {
    padding: "0.7rem 1rem", borderRadius: "8px", border: "1px solid #2a4a30",
    backgroundColor: "#1a3320", color: "#f3e8cc", fontSize: "0.95rem",
    flex: 1, minWidth: "200px",
  },
  select: {
    padding: "0.7rem 1rem", borderRadius: "8px", border: "1px solid #2a4a30",
    backgroundColor: "#1a3320", color: "#f3e8cc",
  },
  btn: {
    padding: "0.7rem 1.2rem", backgroundColor: "#ffc926", color: "#18542a",
    border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold",
  },
  cancelBtn: {
    padding: "0.7rem 1.2rem", backgroundColor: "transparent", color: "#a8c4a2",
    border: "1px solid #a8c4a2", borderRadius: "8px", cursor: "pointer",
  },
  form: {
    backgroundColor: "#1a3320", padding: "1.5rem", borderRadius: "12px",
    marginBottom: "1.5rem", border: "1px solid #ffc926",
  },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.2rem" },
  card: {
    backgroundColor: "#1a3320", borderRadius: "12px", overflow: "hidden",
    border: "1px solid #2a4a30", display: "flex", gap: "1rem", padding: "1rem",
  },
  cover: { width: "80px", height: "120px", objectFit: "cover", borderRadius: "6px", flexShrink: 0 },
  info: { flex: 1 },
  genre: {
    backgroundColor: "#18542a", color: "#ffc926", fontSize: "0.7rem",
    padding: "2px 8px", borderRadius: "20px", border: "1px solid #ffc926",
  },
  title: { fontSize: "1rem", margin: "0.5rem 0 0.3rem", color: "#f3e8cc" },
  author: { color: "#a8c4a2", fontSize: "0.85rem", marginBottom: "0.3rem" },
  meta: { color: "#6a8f70", fontSize: "0.8rem", marginBottom: "0.7rem" },
  actions: { display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" },
  detailBtn: {
    backgroundColor: "#0f1f12", color: "#ffc926", padding: "0.4rem 0.8rem",
    borderRadius: "6px", textDecoration: "none", fontSize: "0.8rem", border: "1px solid #ffc926",
  },
  editBtn: {
    backgroundColor: "transparent", border: "1px solid #ffc926",
    color: "#ffc926", padding: "0.4rem 0.6rem", borderRadius: "6px", cursor: "pointer",
  },
  deleteBtn: {
    backgroundColor: "transparent", border: "1px solid #2a4a30",
    color: "#ff8a80", padding: "0.4rem 0.6rem", borderRadius: "6px", cursor: "pointer",
  },
};