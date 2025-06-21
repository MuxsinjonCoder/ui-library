import NotificationsList from "@/components/notifications/notifications-list";

export default function NotificationsPage() {
  return (
    <>
      <div className="container">
        <h1 className="font-bold text-xl sm:text-2xl mb-5">Bildirishnomalar</h1>
        <div>
          <NotificationsList />
        </div>
      </div>
    </>
  );
}
