import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />

      <PostForm />

      <PostList />

      <Footer />
    </div>
  );
}

export default App;
