import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import TaxPreparation from "./pages/TaxPreparation";
import Bookkeeping from "./pages/Bookkeeping";
import Payroll from "./pages/Payroll";
import BookAppointment from "./pages/BookAppointment";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services/tax-preparation"} component={TaxPreparation} />
      <Route path={"/services/bookkeeping"} component={Bookkeeping} />
      <Route path={"/services/payroll"} component={Payroll} />
      <Route path={"/book-appointment"} component={BookAppointment} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
