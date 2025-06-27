"use client";

import React, { useState, useEffect } from "react";
import { Loader } from "../ui/loader";
import { CheckCircle } from "lucide-react";

export default function GiveIdea() {
  const [formData, setFormData] = useState({
    name: "",
    tgAddress: "",
    suggest: "",
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!formData.suggest.trim()) {
      setError(true);
    } else {
      setError(false);
      setLoading(true);

      const TOKEN = "7725558862:AAGg7Gg7wODOw5UGIVZ1stBPgTwm56jmfhw";
      const CHAT_ID = "7994566251";
      const TEXT = `📝 UI.mern.uz docs idea:\n\n👤 Ism: ${
        formData.name || "Noma'lum"
      }\n📩 Kontakt: ${formData.tgAddress || "Noma'lum"}\n💡 Taklif: ${
        formData.suggest
      }`;

      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: TEXT }),
      });

      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setFormData({ name: "", tgAddress: "", suggest: "" });
      }, 2000);
    }
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "suggest" && e.target.value.trim()) {
      setError(false);
    }
  };

  return (
    <div className="bg-transparent min-h-screen flex items-center justify-center w-full">
      <div className="container mx-auto px-4">
        {loading ? (
          <Loader />
        ) : success ? (
          <div className="flex items-center justify-center">
            <CheckCircle className="text-green-500 w-[150px] sm:w-[200px] md:w-[250px] h-auto" />
          </div>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-white mb-10 sm:mb-16 md:mb-20 leading-snug max-w-4xl mx-auto">
              If you have suggestions to improve the documentation on{" "}
              <span className="text-green-400">UI.mern.uz</span>, feel free to
              share them — we’re here to help!
            </h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6">
              <div className="bg-gray-800/40 border border-gray-700 p-6 sm:p-8 md:p-10 w-full sm:w-[500px] rounded-3xl shadow-lg backdrop-blur-md">
                <form className="w-full space-y-5" onSubmit={onSubmit}>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name (optional)"
                    className="w-full rounded-lg px-4 py-3 bg-gray-700 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    name="tgAddress"
                    type="text"
                    placeholder="Enter your contact detail (optional)"
                    className="w-full rounded-lg px-4 py-3 bg-gray-700 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                    value={formData.tgAddress}
                    onChange={handleChange}
                  />
                  <div>
                    <textarea
                      name="suggest"
                      placeholder="Suggest us your ideas"
                      className={`w-full h-[120px] rounded-lg px-4 py-3 bg-gray-700 text-white placeholder-gray-400 text-sm resize-none focus:outline-none focus:ring-2 transition ${
                        error
                          ? "border border-red-500 ring-red-500"
                          : "focus:ring-green-400"
                      }`}
                      value={formData.suggest}
                      onChange={handleChange}
                    ></textarea>
                    {error && (
                      <p className="text-red-500 text-xs mt-2">
                        Please enter your suggest
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg transition text-sm"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
