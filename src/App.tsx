import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TranslationProvider } from "@/contexts/TranslationContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Portfolio from "./pages/Portfolio";
import HowItWorks from "./pages/HowItWorks";
import ContactPage from "./pages/ContactPage";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Management from "./pages/Management";
import Consultation from "./pages/Consultation";
import HelpCenter from "./pages/HelpCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ProductSearch from "./pages/ProductSearch";
import Product from "./pages/Product";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

// Product Pages
import PlotsForSale from "./pages/product/residential/PlotsForSale";
import ApartmentsForSale from "./pages/product/residential/ApartmentsForSale";
import GatedCommunityProjects from "./pages/product/residential/GatedCommunityProjects";
import FarmhousesHolidayHomes from "./pages/product/residential/FarmhousesHolidayHomes";
import OldHouseRenovationResale from "./pages/product/residential/OldHouseRenovationResale";
import RentalApartmentsService from "./pages/product/residential/RentalApartmentsService";
import ShoppingMallsMarketProjects from "./pages/product/commercial/ShoppingMallsMarketProjects";
import OfficeSpaceRentSale from "./pages/product/commercial/OfficeSpaceRentSale";
import HotelsResortsProperties from "./pages/product/commercial/HotelsResortsProperties";
import IndustrialPlotsFactoryBuildings from "./pages/product/commercial/IndustrialPlotsFactoryBuildings";
import CoWorkingSpaces from "./pages/product/commercial/CoWorkingSpaces";
import WarehousesStorageFacilities from "./pages/product/commercial/WarehousesStorageFacilities";
import RawLandBuyingSelling from "./pages/product/land-development/RawLandBuyingSelling";
import FarmLandProjects from "./pages/product/land-development/FarmLandProjects";
import TourismResortLandDevelopment from "./pages/product/land-development/TourismResortLandDevelopment";
import ResidentialProjectDevelopment from "./pages/product/land-development/ResidentialProjectDevelopment";

// Service Pages
import RealEstateInvestmentPartnership from "./pages/services/land-development/RealEstateInvestmentPartnership";
import RealEstateBrokerage from "./pages/services/real-estate-support/RealEstateBrokerage";
import PropertyManagement from "./pages/services/real-estate-support/PropertyManagement";
import PropertyMarketing from "./pages/services/real-estate-support/PropertyMarketing";
import InteriorDesignDecoration from "./pages/services/real-estate-support/InteriorDesignDecoration";
import RealEstateConsultancy from "./pages/services/real-estate-support/RealEstateConsultancy";
import ConstructionServices from "./pages/services/real-estate-support/ConstructionServices";
import ProductDetail from "./pages/ProductDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TranslationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.VITE_GITHUB_PAGES ? '/dwellwell-buildshare' : ''}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/management" element={<Management />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          
          {/* Product Routes */}
          <Route path="/product" element={<Product />} />
          <Route path="/product/search" element={<ProductSearch />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/house-sharing" element={<Properties />} />
          
          {/* Residential Real Estate Routes */}
          <Route path="/product/residential/plots-for-sale" element={<PlotsForSale />} />
          <Route path="/product/residential/apartments-for-sale" element={<ApartmentsForSale />} />
          <Route path="/product/residential/gated-community-projects" element={<GatedCommunityProjects />} />
          <Route path="/product/residential/farmhouses-holiday-homes" element={<FarmhousesHolidayHomes />} />
          <Route path="/product/residential/old-house-renovation-resale" element={<OldHouseRenovationResale />} />
          <Route path="/product/residential/rental-apartments-service" element={<RentalApartmentsService />} />
          
          {/* Commercial Real Estate Routes */}
          <Route path="/product/commercial/shopping-malls-market-projects" element={<ShoppingMallsMarketProjects />} />
          <Route path="/product/commercial/office-space-rent-sale" element={<OfficeSpaceRentSale />} />
          <Route path="/product/commercial/hotels-resorts-properties" element={<HotelsResortsProperties />} />
          <Route path="/product/commercial/industrial-plots-factory-buildings" element={<IndustrialPlotsFactoryBuildings />} />
          <Route path="/product/commercial/co-working-spaces" element={<CoWorkingSpaces />} />
          <Route path="/product/commercial/warehouses-storage-facilities" element={<WarehousesStorageFacilities />} />
          
          {/* Land Development & Investment Routes */}
          <Route path="/product/land-development-investment/raw-land-buying-selling" element={<RawLandBuyingSelling />} />
          <Route path="/product/land-development-investment/farm-land-projects" element={<FarmLandProjects />} />
          <Route path="/product/land-development-investment/tourism-resort-land-development" element={<TourismResortLandDevelopment />} />
          <Route path="/product/land-development-investment/residential-project-development" element={<ResidentialProjectDevelopment />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          
          {/* Land Development & Investment Services Routes */}
          <Route path="/services/land-development-investment/real-estate-investment-partnership" element={<RealEstateInvestmentPartnership />} />
          
          {/* Real Estate Services & Support Routes */}
          <Route path="/services/real-estate-services-support/real-estate-brokerage" element={<RealEstateBrokerage />} />
          <Route path="/services/real-estate-services-support/property-management" element={<PropertyManagement />} />
          <Route path="/services/real-estate-services-support/property-marketing" element={<PropertyMarketing />} />
          <Route path="/services/real-estate-services-support/interior-design-decoration" element={<InteriorDesignDecoration />} />
          <Route path="/services/real-estate-services-support/real-estate-consultancy" element={<RealEstateConsultancy />} />
          <Route path="/services/real-estate-services-support/construction-services" element={<ConstructionServices />} />
          
          {/* Product Detail Route */}
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </TranslationProvider>
  </QueryClientProvider>
);

export default App;
