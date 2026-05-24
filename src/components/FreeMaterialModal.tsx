import React, { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import "./BookingModal.css";
import "./FreeMaterialModal.css";

interface FreeMaterialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeMaterialModal: React.FC<FreeMaterialModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    last_name: "",
    phone: "",
    city: "",
    especialidad: "",
    pagina_web: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Extract property name from fields[xxx]
    const fieldName = name.match(/\[(.*?)\]/)?.[1] || name;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  // Helper to hash data using SHA-256 for Meta CAPI compliance
  const sha256 = async (message: string) => {
    if (!message) return null;
    const msgBuffer = new TextEncoder().encode(message.trim().toLowerCase());
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  };

  const MAILERLITE_ACTION_URL =
    "https://assets.mailerlite.com/jsonp/2310556/forms/188385953356710924/subscribe";
  const FACEBOOK_ACCESS_TOKEN =
    "EAASzhKZCH3lEBRcwPlDUOP9NHzQxBMU5MDcyzK0fZA0QvDQcvaMfjTZB4sxs9SClpXhd1yhzyJUonIZBxAGUuAHnasx5nsbgZCoIdsbsVWbzCEYEZCYJWZCWDuqmzNwfLdySqZCvITzUe7nLZBuK6IbATm13G1eURHyt4u4xPoPw7STizGsYutNldjMbVjJj2sv6jFwZDZD";
  const PIXEL_ID = "4357457554583645";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // 1. MailerLite Submission
    const mlParams = new URLSearchParams();
    mlParams.append("fields[email]", formData.email);
    mlParams.append("fields[name]", formData.name);
    mlParams.append("fields[last_name]", formData.last_name);
    mlParams.append("fields[phone]", formData.phone);
    mlParams.append("fields[city]", formData.city);
    mlParams.append("fields[especialidad]", formData.especialidad);
    mlParams.append("fields[pagina_web]", formData.pagina_web);
    mlParams.append("fields[source]", "free_pdf_download");
    mlParams.append("ajax", "1");
    mlParams.append("ml-submit", "1");
    mlParams.append("anticsrf", "true");

    try {
      // Parallel submission: MailerLite + Facebook Pixel + Facebook CAPI
      const mlRequest = fetch(MAILERLITE_ACTION_URL, {
        method: "POST",
        body: mlParams,
        mode: "no-cors",
      });

      // Facebook Pixel (Browser-side)
      if (window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Descarga Material Gratuito",
          value: 5.0,
          currency: "USD",
        });
      }

      // Facebook CAPI (Server-side simulation from Frontend)
      const hashedEmail = await sha256(formData.email);
      const hashedPhone = await sha256(formData.phone);

      const capiRequest = fetch(
        `https://graph.facebook.com/v17.0/${PIXEL_ID}/events?access_token=${FACEBOOK_ACCESS_TOKEN}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            data: [
              {
                event_name: "Lead",
                event_time: Math.floor(Date.now() / 1000),
                action_source: "website",
                user_data: {
                  em: [hashedEmail],
                  ph: hashedPhone ? [hashedPhone] : [],
                },
                custom_data: {
                  currency: "USD",
                  value: "5.00",
                },
              },
            ],
          }),
        },
      );

      await Promise.allSettled([mlRequest, capiRequest]);

      setStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content glass-panel animate-slide-up free-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close" 
          onClick={onClose} 
          aria-label="Cerrar modal"
          style={{ zIndex: 10 }}
        >
          <X size={24} />
        </button>

        <div className="free-modal-left">
          <img
            src="/y CIVIL LAW.png"
            alt="Common Law vs Civil Law cover"
            className="free-modal-cover-img"
          />
        </div>

        <div className="free-modal-right">
          <div className="modal-header" style={{ marginBottom: "20px", textAlign: "left" }}>
            <h2 className="modal-title" style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#1e1f33", textAlign: "left", marginBottom: "8px", textTransform: "none" }}>
              Descarga Gratis: "LA VERDADERA DIFERENCIA"
            </h2>
            <p className="modal-subtitle" style={{ fontSize: "0.85rem", color: "#555", marginTop: "0", lineHeight: "1.4", textAlign: "left" }}>
              Un ensayo práctico y sin rodeos sobre <strong>Common Law vs. Civil Law</strong>. Descubra cómo encaja el sistema anglosajón para convertirse en un mejor abogado. Escrito por el <strong>Dr. Marcus Ambrose</strong>.
            </p>
          </div>

          <div className="ma-modal-body" style={{ padding: "0" }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "10px 10px 20px" }}>
                <CheckCircle
                  size={50}
                  color="#10B981"
                  style={{ marginBottom: "15px" }}
                />
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "800",
                    color: "#1e1f33",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  ¡Registro Completado, Colega!
                </h3>
                <p style={{ color: "#555", fontSize: "0.85rem", marginBottom: "15px", lineHeight: "1.4" }}>
                  Hemos registrado tus datos correctamente. Haz clic en el botón de abajo para descargar tu ensayo de inmediato.
                </p>

                <div
                  style={{
                    padding: "15px",
                    background: "#f8f9fa",
                    borderRadius: "12px",
                    marginBottom: "15px",
                    border: "1px solid #eee",
                  }}
                >
                  <h4
                    style={{
                      fontWeight: "800",
                      fontSize: "0.95rem",
                      color: "#1e1f33",
                      marginBottom: "6px",
                    }}
                  >
                    🎁 Tu PDF GRATIS
                  </h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#555",
                      marginBottom: "12px",
                    }}
                  >
                    Descarga <strong>GRATIS</strong> nuestra guía "Common Law vs Civil Law" del
                    Dr. Ambrose. ¡Sin costo alguno!
                  </p>
                  <a
                    href="/Common Law vs Civil Law - Dr. Marcus Ambrose - es.pdf"
                    download
                    className="ma-btn-black"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 20px",
                      fontSize: "0.85rem",
                      fontWeight: "800",
                      borderRadius: "8px",
                      backgroundColor: "var(--latam-maroon)",
                      color: "white",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      boxShadow: "0 4px 12px rgba(142, 61, 74, 0.2)",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    DESCARGAR PDF GRATIS
                  </a>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    setStatus("idle");
                    setFormData({
                      email: "",
                      name: "",
                      last_name: "",
                      phone: "",
                      city: "",
                      especialidad: "",
                      pagina_web: "",
                    });
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#666",
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "0.85rem",
                  }}
                >
                  Cerrar ventana
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form" style={{ display: "grid", gap: "10px" }}>
                <div className="form-group">
                  <label style={{ fontSize: "0.7rem", fontWeight: "800", color: "#1e1f33" }}>
                    CORREO ELECTRÓNICO <span style={{ color: "var(--latam-maroon)" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="fields[email]"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="ejemplo@correo.com"
                    required
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      border: "1.5px solid #eee",
                      fontSize: "0.8rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <div className="form-group">
                    <label style={{ fontSize: "0.7rem", fontWeight: "800", color: "#1e1f33" }}>
                      NOMBRE <span style={{ color: "var(--latam-maroon)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="fields[name]"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Juan"
                      required
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "1.5px solid #eee",
                        fontSize: "0.8rem",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ fontSize: "0.7rem", fontWeight: "800", color: "#1e1f33" }}>
                      APELLIDO <span style={{ color: "var(--latam-maroon)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="fields[last_name]"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      placeholder="Pérez"
                      required
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "1.5px solid #eee",
                        fontSize: "0.8rem",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ fontSize: "0.7rem", fontWeight: "800", color: "#1e1f33" }}>
                    NÚMERO DE TELÉFONO <span style={{ color: "var(--latam-maroon)" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="fields[phone]"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+52 1..."
                    required
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      border: "1.5px solid #eee",
                      fontSize: "0.8rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <div className="form-group">
                    <label style={{ fontSize: "0.7rem", fontWeight: "800", color: "#1e1f33" }}>
                      ESPECIALIDAD
                    </label>
                    <input
                      type="text"
                      name="fields[especialidad]"
                      value={formData.especialidad}
                      onChange={handleInputChange}
                      placeholder="Ej. Corporativo"
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "1.5px solid #eee",
                        fontSize: "0.8rem",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ fontSize: "0.7rem", fontWeight: "800", color: "#1e1f33" }}>
                      CIUDAD
                    </label>
                    <input
                      type="text"
                      name="fields[city]"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Ej. Bogotá"
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "1.5px solid #eee",
                        fontSize: "0.8rem",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ fontSize: "0.7rem", fontWeight: "800", color: "#1e1f33" }}>
                    PÁGINA WEB / LINKEDIN
                  </label>
                  <input
                    type="text"
                    name="fields[pagina_web]"
                    value={formData.pagina_web}
                    onChange={handleInputChange}
                    placeholder="https://..."
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      border: "1.5px solid #eee",
                      fontSize: "0.8rem",
                      outline: "none",
                    }}
                  />
                </div>

                {status === "error" && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "0.7rem",
                      textAlign: "center",
                      marginTop: "3px",
                    }}
                  >
                    Ocurrió un error. Por favor intenta de nuevo.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="ma-btn-black"
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "0.85rem",
                    fontWeight: "800",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "5px",
                    borderRadius: "10px",
                    backgroundColor: "var(--latam-maroon)",
                    color: "white",
                    border: "none",
                    transition: "all 0.2s ease",
                    boxShadow: "0 4px 12px rgba(142, 61, 74, 0.25)",
                    opacity: status === "loading" ? 0.7 : 1,
                  }}
                >
                  {status === "loading" ? "PROCESANDO..." : "DESCARGAR PDF GRATIS"}
                </button>

                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "#777",
                    textAlign: "center",
                    marginTop: "5px",
                    marginBottom: "0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                    fontWeight: "500",
                  }}
                >
                  <span>🔒</span> Jamás compartiremos sus datos
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );

};

export default FreeMaterialModal;
