// <!-- Plugins CSS -->
// 	<link rel="stylesheet" type="text/css" href="assets/vendor/font-awesome/css/all.min.css">
// 	<link rel="stylesheet" type="text/css" href="assets/vendor/bootstrap-icons/bootstrap-icons.css">
// 	<link rel="stylesheet" type="text/css" href="assets/vendor/tiny-slider/tiny-slider.css">
// 	<link rel="stylesheet" type="text/css" href="assets/vendor/glightbox/css/glightbox.css">

// 	<!-- Theme CSS -->
// 	<link id="style-switch" rel="stylesheet" type="text/css" href="assets/css/style.css"></link>
import '../assets/vendor/font-awesome/css/all.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/tiny-slider/tiny-slider.css';
import '../assets/vendor/glightbox/css/glightbox.css';
import '../assets/css/style.css';

import {Navbar} from '../components/layouts'
import Homepage from '../pages/Homepage';
// import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
