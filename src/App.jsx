import Home from "./page/Home";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

function AppContent() {
  const { direction } = useLanguage();

  return (
    <div dir={direction}>
      <Home />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
