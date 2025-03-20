//20.03.2025HW
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate, Navigate } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-4">
      <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to="/profile">My Profile</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to="/projects">My Projects</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to="/about">About Me</NavLink>
    </nav>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-xl font-bold">My Profile</h1>
      <p>Name:Asem</p>
      <p>Email: @akhmetasem.gmail.com</p>
      <p>Academy:Amjilt Cyber Shool</p>
      <button onClick={() => navigate('/projects')}> My Projects бару</button>
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        <li><strong>Project 1:</strong> Жаңа жылдық проекті</li>
        <li><strong>Project 2:</strong>Тағам рецептісі</li>
        <li><strong>Project 3:</strong> Ауа райы болжамы</li>
      </ul>
      <button onClick={() => navigate('/about')}>Go to About Me</button>
    </div>
  );
};

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Me</h1>
      <p>Мен Айти маманы</p>
      <button onClick={() => navigate('/profile')}>Go to My Profile</button>
    </div>
  );
};

const NotFound = () => <Navigate to="/about" />;

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;



/*
//20.03.2025

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protec from "./Protec";
import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<Protec />}>
            <Route path="aidana" element={<Aidana_Acc />} />
          </Route>
          <Route path="asil" element={<Asil_Acc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function Aidana_Acc() {
  return <h1>Instagram Aidana</h1>;
}

function Asil_Acc() {
  return <h1>Instagram Asil</h1>;
}

*/






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


/*

//19.03.25
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:name" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

function UserList() {
  const users = [
    { id: 1, name: "Asel" },
    { id: 2, name: "Aiazhan" },
    { id: 3, name: "Aset" },
  ];

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} - <Link to={`/users/${user.name}`}>View Profile</Link>
        </p>
      ))}
    </div>
  );
}

function UserProfile() {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>User profile: {name}</h1>
      <button onClick={() => navigate("/")}>Back to users</button>
    </div>
  );
}
*/

/*
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'
import Comments from './componets/Comments'

function App(){
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element { <Home></> }/>
        <Route path='/posts' element { <Posts></> }/>
        <Route path='/posts/:id' element { <>PostDetail</> }/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
import React from 'react'
import Navbar from '../components/Navbar'

export default Home(){
  return (
    <div>
    <Navbar/>
    Home Pages
    </div>
  )
}


import { Link } from "react-router-dom";
export default function Navbar(){
  return (
    <nav>
      <link to='/'>Home</link>
      <link to='/posts'>Posts</link>
    </nav>
  )
}
*/



