/*
//14.03.2025 HW

import { useState, useEffect } from "react";

const Products = ["Телефон", "Ноутбук", "Құлаққап", "Сағат", "Камера"];

function App() {
  const [Views, setRecentViews] = useState([]);

  useEffect(() => {
    const storedViews = JSON.parse(localStorage.getItem("Views")) || [];
    setRecentViews(storedViews);
  }, []);

  const handleProductClick = (product) => {
    setRecentViews((prevViews) => {
      const updatedViews = [product, ...prevViews.filter((p) => p !== product)];
      localStorage.setItem("Views", JSON.stringify(updatedViews));

      console.log("Соңғы қаралғандар:", updatedViews);

      return updatedViews;
    });
  };

  useEffect(() => {
    console.log("Жаңартылған соңғы қаралғандар:", Views);
  }, [Views]); 

  return (
    <div>
      <h2>🛒 Өнімдер</h2>
      {Products.map((product) => (
        <button key={product} onClick={() => handleProductClick(product)}>
          {product}
        </button>
      ))}

      <h3>Соңғы қаралғандар:</h3>
      <ul>
        {Views.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


*/
/*
//1tapsirma
import { useState, useEffect } from "react";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "white");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "white" ? "black" : "white";
    setTheme(newTheme);
  };

  return (
    <nav style={{ backgroundColor: theme, padding: "10px", color: theme === "white" ? "black" : "white" }}>
      <button onClick={toggleTheme}>Түсін өзгерту</button>
    </nav>
  );
}

export default Navbar;
*/
/*
//2tapsirma
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/not-found");
    }, 5000);
  }, [navigate]);

  return <h1>Contact Us</h1>;
}

export default Contact;
*/

/*
//3-tapsirma
import { useState, useEffect } from "react";

function About() {
  const [favorites, setFavorites] = useState(() => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = () => {
    const newFavorites = [...favorites, "About"];
    setFavorites(newFavorites);
  };

  const goToTED = () => {
    window.location.href = "https://www.ted.com";
  };

  return (
    <div>
      <h1>About Us</h1>
      <button onClick={goToTED} style={{ marginLeft: "10px" }}>Менің сүйікті бетім</button>
    </div>
  );
}

export default About;

*/

/*
//4-tapsirma
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>❌ Page Not Found (404)</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default NotFound;
*/
/*
5-tapsirma

import { useState } from "react";

function Quiz() {
  const question = "React деген не?";
  const options = ["Framework", "Library", "Programming language"];
  const correctAnswer = "Library";

  const [message, setMessage] = useState("");

  const checkAnswer = (answer) => {
    const checkAnswer = (answer) => {
      if (answer === correctAnswer) {
        setMessage("Дұрыс жауап!");
      } else {
        setMessage("Қате жауап!");
      }
    };
  } 

  return (
    <div>
      <h1>{question}</h1>
      {options.map((option, index) => (
        <button key={index} onClick={() => checkAnswer(option)}>
          {option}
        </button>
      ))}
      <p>{message}</p>
    </div>
  );
}

export default Quiz;

*/


//Sinip zhumisi 18.03.2025
// mport { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/next" element={<NextVideo />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function Navbar() {
//   const navigate = useNavigate();

//   return (
//     <nav>
//       <Link to="/home">Home</Link> {" | "}
//       <Link to="/about">About</Link> {" | "}
//       <Link to="/contact">Contact</Link> {" | "}
//       <a href="https://www.ted.com/" target="_blank" rel="noopener noreferrer">
//         TED
//       </a>
//       {" | "}
//       <button onClick={() => navigate("/next")}>Youtube</button>
//       <button onClick={() => navigate(-1)}>Back</button> {/* Артқа ауысады */}
//       <button onClick={() => navigate(1)}>Алдыға</button> {/* Алдыға ауысады */}
//     </nav>
//   );
// }

// function NextVideo() {
//   return <h1>NextVideo</h1>;
// }

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }

// function NotFound() {
//   return <h1>404 Not Found</h1>;
// }

