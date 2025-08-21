import React, { useState } from "react";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  return (
    <main className="app-container">
      <header className="header">
        <h1 className="title">Nişan Organizasyonumuza Hoş Geldiniz</h1>
        <p className="subtitle">
          En özel anlarınızı bizimle paylaşmak için aşağıdaki alandan fotoğraf
          ve videolarınızı yükleyebilirsiniz.
        </p>
      </header>

      <section className="upload-section">
        <div className="upload-box">
          <label htmlFor="media-upload" className="upload-label">
            📁 Fotoğraf veya Video Yükle
          </label>
          <input
            type="file"
            id="media-upload"
            multiple
            accept="image/*,video/*"
            hidden
          />
        </div>
      </section>
    </main>
  );
}
