import '../assets/vendor/font-awesome/css/all.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/tiny-slider/tiny-slider.css';
import '../assets/vendor/glightbox/css/glightbox.css';
import '../assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/vendor/choices/js/choices.min.js';
import '../assets/js/functions.js';
import '../assets/css/style.css';


import {BrowserRouter as Router} from 'react-router-dom';
import Routes from '../routes';
import { Suspense } from 'react';
import Loadingpage from '../pages/Loadingpage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
 
function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loadingpage />}>
        <Router>
          <Routes />
        </Router>
      </Suspense>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
