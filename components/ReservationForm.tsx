"use client";

import { FormEvent, useState } from "react";
import { supabase } from "../lib/supabase";

type Message = { type: "success" | "error"; text: string } | null;

export default function ReservationForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      full_name: String(data.get("fullName") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      reservation_date: String(data.get("reservationDate") || ""),
      guest_count: Number(data.get("guestCount")),
      reservation_type: String(data.get("reservationType") || ""),
      note: String(data.get("note") || "").trim() || null,
      status: "pending",
    };

    if (
      payload.full_name.length < 2 ||
      payload.phone.length < 10 ||
      !payload.reservation_date ||
      payload.guest_count < 1 ||
      !payload.reservation_type
    ) {
      setMessage({ type: "error", text: "Lütfen gerekli alanları doldur." });
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("reservations").insert(payload);

    if (error) {
      setMessage({ type: "error", text: `Gönderilemedi: ${error.message}` });
      setLoading(false);
      return;
    }

    form.reset();
    setMessage({ type: "success", text: "Rezervasyon talebin başarıyla gönderildi." });
    setLoading(false);
  }

  return (
    <form className="reservationForm" onSubmit={handleSubmit}>
      <input name="fullName" placeholder="Ad Soyad" minLength={2} maxLength={100} required />
      <input name="phone" type="tel" placeholder="Telefon" minLength={10} maxLength={20} required />

      <div className="formRow">
        <input name="reservationDate" type="date" required />
        <input name="guestCount" type="number" min={1} max={50} placeholder="Kişi sayısı" required />
      </div>

      <select name="reservationType" defaultValue="" required>
        <option value="" disabled>Rezervasyon türü</option>
        <option value="Loca">Loca</option>
        <option value="Şezlong">Şezlong</option>
        <option value="Restaurant">Restaurant</option>
      </select>

      <textarea name="note" rows={4} maxLength={500} placeholder="Notunuz" />

      <button disabled={loading} type="submit">
        {loading ? "Gönderiliyor..." : "Rezervasyon Talebi Gönder"}
      </button>

      {message && (
        <p className={message.type === "success" ? "formMessage successMessage" : "formMessage errorMessage"}>
          {message.text}
        </p>
      )}
    </form>
  );
}
