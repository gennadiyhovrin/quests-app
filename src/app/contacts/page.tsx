import ContactInfo from "@/components/ContactInfo";
import Map from "@/components/Map";

export default function Page() {
  return (
    <>
      <div>
        <div className="space-y-2  pt-6 md:space-y-5">
          <p className="text-lg leading-7 text-orange-500">Quests in Kyiv </p>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contacts{" "}
          </h1>
        </div>
        <div className="w-full border-t border-gray-600 dark:border-gray-700 my-8" />
        <div className="flex min-h-screen">
          <ContactInfo />
          <Map />
        </div>
      </div>
    </>
  );
}
