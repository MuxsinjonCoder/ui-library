import ProfileUpdate from "@/components/profile/profile-update";
import ChangePassword from "@/components/profile/update-password";

export const metadata = {
  title: "Profil - Admin profili",
};

export default function ProfilePage() {
  return (
    <>
      <div>
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-5 mb-5">
          <h1 className="text-2xl font-bold">Foydalanuvchi profili</h1>
          <ChangePassword />
        </div>
        <ProfileUpdate />
      </div>
    </>
  );
}
