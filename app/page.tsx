import ContactPage from "./contact/page";
import HomePage from "./home/page";
import OverviewPage from "./overview/page";
import ServicePage from "./services/page";

export default function Home() {
  return (
    <>
      < HomePage />
      <OverviewPage />
      <ServicePage />
      <ContactPage />
    </>
  );
}
