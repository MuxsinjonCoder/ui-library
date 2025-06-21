import LoginBgElements from "@/components/auth/login-bg-elements";
import LoginCard from "@/components/auth/login-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Iftixor Maktabi - Xodimlar Uchun Test Platformasi",
  description:
    "Iftixor maktabi xodimlarini bilim va ko‘nikmalarini baholash uchun mo‘ljallangan test platformasi.",
};

export default function SignInPage() {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="h-screen w-full flex items-center justify-center relative">
          {/* Animated background elements */}
          <LoginBgElements />

          {/* animated login card */}
          <LoginCard />
        </div>
      </div>
    </>
  );
}
