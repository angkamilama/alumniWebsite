import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./components/About";
import Home from "./Home";
import RootLayout from "./components/RootLayout";
import Donation from "./components/Giving/Donation";
import ComeOnBoard from "./components/Giving/ComeOnBoard";
import MakeAGift from "./components/Giving/MakeAGift";
import Volunteer from "./components/Giving/Volunteer";
import AlumniCalendar from "./components/Events/AlumniCalendar";
import KailashHomeCalendar from "./components/Events/KailashHomeCalendar";
import Reunion from "./components/Events/Reunion";
import OldPhotos from "./components/Gallery/OldPhotos";
import NewPhotos from "./components/Gallery/NewPhotos";
import Videos from "./components/Gallery/Videos";
import CurrentStudents from "./components/Stories/CurrentStudents";
import OldStudents from "./components/Stories/OldStudents";
import Staff from "./components/Stories/Staff";
import Volunteers from "./components/Stories/Volunteers";
import AlumniContactList from "./components/Gallery/AlumniContactList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Gallery">
        <Route path="OldPhotos" element={<OldPhotos />} />
        <Route path="NewPhotos" element={<NewPhotos />} />
        <Route path="Videos" element={<Videos />} />
        <Route path="AlumniContactList" element={<AlumniContactList />} />
      </Route>
      <Route path="Events">
        <Route path="AlumniCalendar" element={<AlumniCalendar />} />
        <Route path="KailashHomeCalendar" element={<KailashHomeCalendar />} />
        <Route path="Reunion" element={<Reunion />} />
      </Route>
      <Route path="Giving">
        <Route path="Donation" element={<Donation />} />
        <Route path="ComeOnBoard" element={<ComeOnBoard />} />
        <Route path="MakeAGift" element={<MakeAGift />} />
        <Route path="Volunteer" element={<Volunteer />} />
      </Route>
      <Route path="Stories">
        <Route path="CurrentStudents" element={<CurrentStudents />} />
        <Route path="OldStudents" element={<OldStudents />} />
        <Route path="Staff" element={<Staff />} />
        <Route path="Volunteers" element={<Volunteers />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
