import { BrowserRouter, Route, Routes } from "react-router";

import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { InfiniteScroll } from "./pages/InfiniteScroll/InfiniteScroll";
import { NotFound } from "./pages/NotFound/NotFound";
import { Pagination } from "./pages/Pagination/Pagination";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/infinite-scroll" element={<InfiniteScroll />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
