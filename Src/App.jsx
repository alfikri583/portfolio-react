
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Power, Share2 } from "lucide-react";

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const [pulling, setPulling] = useState(false);
  const [startY, setStartY] = useState(0);
  const [cordY, setCordY] = useState(0);
  const [messageKey, setMessageKey] = useState(0);

  const startPull = (e) => {
    setPulling(true);
    setStartY(e.clientY);
  };

  const movePull = (e) => {
    if (!pulling) return;
    setCordY(Math.max(0, Math.min(100, e.clientY - startY)));
  };

  const endPull = () => {
    if (!pulling) return;
    if (cordY > 45) {
      setIsOn(true);
      setMessageKey((key) => key + 1);
    }
    setPulling(false);
    setCordY(0);
  };

  const sharePage = async () => {
    const shareData = {
      title: "A Little Reminder",
      text: "Ada sedikit pengingat untukmu. Semoga harimu lebih baik.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link berhasil disalin!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        alert("Tidak dapat membagikan link.");
      }
    }
  };

  const turnOff = () => {
    setIsOn(false);
    setCordY(0);
  };

  return (
    <main className={`page ${isOn ? "lamp-on" : ""}`}>
      <div className="ambient-glow" />

      <div className="top-label">
        <span className="tiny-star">✦</span>
        A LITTLE REMINDER
      </div>

      <section className="scene">
        <div className={`light-beam ${isOn ? "active" : ""}`} />
        
<div className="lamp">
  <img
    src="/lampu.png"
    alt="Lampu gantung hitam dengan cahaya keemasan"
    className="lamp-image"
  />
</div>

        <div
          className="pull-area"
          onPointerDown={startPull}
          onPointerMove={movePull}
          onPointerUp={endPull}
          onPointerCancel={endPull}
          style={{ touchAction: "none" }}
        >
          <div
            className="pull-cord"
            style={{ transform: `translateY(${cordY}px)` }}
          >
            <div className="cord-line" />
            <div className="cord-handle" />
          </div>
        </div>

        {!isOn && (
          <p className="pull-hint">
            Tarik talinya untuk menyalakan lampu
          </p>
        )}
      </section>

      <AnimatePresence>
        {isOn && (
          <motion.section
            key={messageKey}
            className="message-card"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="card-kicker">A MESSAGE JUST FOR YOU</span>

            <h1>Semangat yaa, kamu!</h1>

            <p className="intro">
              Iyaa, kamu yang udah buka link ini.
            </p>

            <div className="gold-line" />

            <div className="message-text">
              <p>
                Jangan mengeluh terus, yaaa. Kalau sesekali boleh kok,
                itu juga baik buat kita. Mengungkapkan apa yang kita
                rasakan bukanlah hal yang salah.
              </p>

              <p>
                Tapi jangan terlalu sering larut dalam keluhan, karena
                kesehatan kita juga perlu dijaga.
              </p>

              <p>
                Tetap semangat, ya. Kamu nggak harus selalu kuat setiap
                waktu. Pelan-pelan saja, satu hari demi satu hari.
              </p>
            </div>

            <p className="closing">
              God is always with good people.
            </p>

            <div className="card-footer">
              YOU ARE DOING BETTER THAN YOU THINK ♡
            </div>

            <div className="actions">
              <button
                onClick={() => setMessageKey((key) => key + 1)}
              >
                <RotateCcw size={16} />
                Baca ulang
              </button>

              <button onClick={turnOff}>
                <Power size={16} />
                Matikan lampu
              </button>

              <button onClick={sharePage}>
                <Share2 size={16} />
                Bagikan link
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <footer className="page-footer">
        A LITTLE LIGHT FOR YOUR DAY ♡
      </footer>
    </main>
  );
}
