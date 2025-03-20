//19.03.25HW

/*
//1-tapsirma
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile/:username" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

function UserProfile() {
  const { username } = useParams();
  return <h1>Welcome, {username}!</h1>;
}

export default App;

*/


/*
//2-tapsirma
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default App;
*/


/*
//3-tapsirma
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>🏠 Home Page</h1>;
}
function Profile() {
  return <h1>👤 Profile Page</h1>;
}
function Posts() {
  return <h1>📝 Posts Page</h1>;
}
function About() {
  return <h1>ℹ️ About Page</h1>;
}

function Surprise() {
  const navigate = useNavigate();
  const pages = ["/", "/profile", "/posts", "/about"];

  const goToRandomPage = () => {
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    navigate(randomPage);
  };

  return (
    <div>
      <h1>🎉 Surprise Page!</h1>
      <button onClick={goToRandomPage}>Surprise Me!</button>
    </div>
  );
}


*/


/*
//4-tapsirma
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>📢 Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body.substring(0, 50)}...</p>
          <Link to={`/posts/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default App;

*/


/*
//5-tapsirma
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundGame />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>🏠 Home Page</h1>;
}

function NotFoundGame() {
  const navigate = useNavigate();
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks((prev) => {
      const newClicks = prev + 1;
      if (newClicks === 5) {
        navigate("/");
      }
      return newClicks;
    });
  };

  return (
    <div>
      <h1>🎮 404 Mini Game</h1>
      <p>Click the button 5 times to go back home!</p>
      <button onClick={handleClick}>Click Me ({clicks}/5)</button>
    </div>
  );
}


*/






















/*

//20.03.2025HW
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate, Navigate } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/profile">My Profile</NavLink>
      <NavLink to="/projects">My Projects</NavLink>
      <NavLink to="/about">About Me</NavLink>
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

*/



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



