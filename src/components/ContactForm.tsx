import React, { useState } from "react";
import { LuxuryButton } from "./LuxuryButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
const API_URL = "https://mail-msg.onrender.com";

export const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    hp: "", // honeypot (leave empty)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.hp) return;

    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");

      toast({ title: "ההודעה נשלחה ✉️", description: "נחזור אליך בהקדם" });
      setFormData({
        name: "",
        phone: "",
        hp: "",
      });
    } catch (err) {
      toast({
        title: "שליחה נכשלה",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 bg-gradient-card border-primary/20 shadow-elegant max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
        {/* Honeypot */}
        <input
          name="hp"
          value={formData.hp}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <Input
          name="name"
          placeholder="שם מלא"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-background/50 border-primary/30 focus:border-primary text-right"
        />

        <Input
          name="phone"
          type="tel"
          placeholder="טלפון"
          value={formData.phone}
          onChange={handleChange}
          required
          className="bg-background/50 border-primary/30 focus:border-primary text-right"
        />

        <LuxuryButton
          type="submit"
          size="lg"
          className="w-full"
          disabled={loading}
        >
          {loading ? "שולח..." : "שלח"}
        </LuxuryButton>
      </form>
    </Card>
  );
};
