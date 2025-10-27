import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Accommodations from "./pages/Accommodations";
import VenueInfo from "./pages/VenueInfo";
import TravelGuide from "./pages/TravelGuide";
import NotFound from "./pages/NotFound";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router basename="/APECS">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/venue-info" element={<VenueInfo />} />
          <Route path="/travel-guide" element={<TravelGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
