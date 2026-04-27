import { PortfolioGallery } from "@/components/sections/portfolio-gallery";

export const metadata = {
  title: "Portfolio — Andrew Bieh-Mintah",
};

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <PortfolioGallery />
    </div>
  );
}
