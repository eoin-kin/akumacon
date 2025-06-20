import React from "react";
import { Twitter, Facebook, Instagram, Mail } from "lucide-react";

export function Bottom({
  conBookLink = "https://www.akumakon.com/_files/ugd/aeafb7_f9cf85ce649d497683e3c4c99e26747d.pdf",
}) {
  return (
    <div className=" text-white py-3" style={{ background: "var(--primary)" }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <a
            href={conBookLink}
            className="btn fw-bold"
            style={{ background: "var(--highlight)", color: "var(--primary)" }}
          >
            Con Book
          </a>

          <div className="d-flex gap-3">
            <a href="https://twitter.com/Akumakon" className="text-white">
              <Twitter size={20} />
            </a>
            <a href="https://facebook.com/akumakon" className="text-white">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com/akumakon" className="text-white">
              <Instagram size={20} />
            </a>

            <a
              href="mailto:akumakon@socs.universityofgalway.ie"
              className="text-white"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
