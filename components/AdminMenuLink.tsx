"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function AdminMenuLink() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let active = true;

    async function check() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        if (active) setIsAdmin(false);
        return;
      }

      const { data } = await supabase
        .from("admins")
        .select("user_id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (active) setIsAdmin(Boolean(data));
    }

    void check();

    const { data: listener } = supabase.auth.onAuthStateChange(() => void check());
    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  return isAdmin ? <a className="adminNavLink" href="/admin">Admin Paneli</a> : null;
}
