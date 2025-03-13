 /*import { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0)

  //let count = 0
  function add() {
    setCount(count+1)
  }

  function alu() {
    setCount(count-1)
  }

  function reset() {
    setCount(removeEventListener)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={alu}>-</button>
      <button onClick={reset}>reset</button>
    </>
  );
}*/
/*
export default function App() {
    let cities = ['Almaty', 'Taraz', 'Talgar']
    cities.map((city => (
        console.log(city)
    )))
    return <ul>
        {cities.map((city,index) =>
      <li key={index}> {city}</li>)}
    </ul>;
}
//mapti usestatepen koldanu

const [users,setusers] = useState(["zake","dake", "kama","taha"])
return (
    <ul>
        {users.map((user,index))}
    </ul>
)


*/


/*
import { useState } from "react";

export default function Todolist() {
  const [item, setTask] = useState("");
  const [items, setItems] = useState([]);

  const addTask = () => {
    if (item.trim() !== "") {
      setItems([...items, item]);
      setTask("");
    }
  };

  return (
    <div>
      <h1>Тапсырмалар тізімі</h1>
      <input
        type="text"
        placeholder="Amjilt Cyber School"
        value={item}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Қосу</button>
      <ul>
        {items.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
*/

/*
//5-тапсырма
import { useState } from "react";

const shops = [
  { id: 1, name: "Телефон", price: 92000 },
  { id: 2, name: "Планшет", price: 150000 },
  { id: 3, name: "Ноутбук", price: 450000 },
  { id: 4, name: "Құлаққап", price: 25000 },
  { id: 5, name: "Зарядка", price: 2500 },
  { id: 6, name: "Тышқан", price: 6000 },
  { id: 7, name: "Холодильник", price: 250000 },
  { id: 8, name: "Кір жуғыш машина", price: 250000 },
  { id: 9, name: "Ыдыс жуғыш", price: 450000 },
  { id: 10, name: "Клавиатура", price: 50000 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (shop) => {
    setCart([...cart, shop]);
  };

  const removeFromCart = (shopId) => {
    setCart(cart.filter((item) => item.id !== shopId));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Өнімдер</h2>
      <ul>
        {shops.map((shop) => (
          <li key={shop.id}>
            {shop.name} - {shop.price}₸
            <button onClick={() => addToCart(shop)}>Қосу</button>
          </li>
        ))}
      </ul>

      <h2>Себет</h2>
      {cart.length > 0 && (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}₸
              <button onClick={() => removeFromCart(item.id)}>Өшіру</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Жалпы: {total}₸</h3>
    </div>
  );
}
*/

/*
// 4-тапсырма
import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", age: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submit = () => alert("Форма сәтті жіберілді!");

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Аты-жөніңіз</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Аты-жөніңіз"
          />
          <button onClick={nextStep}>Келесі</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Жасыңыз</h2>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Жасыңыз"
          />
          <div>
            <button onClick={prevStep}>Артқа</button>
            <button onClick={nextStep}>Келесі</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Электрондық пошта</h2>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <div>
            <button onClick={prevStep}>Артқа</button>
            <button onClick={nextStep}>Келесі</button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div>
          <h2>Сіздің мәліметтеріңіз</h2>
          <p><strong>Аты:</strong> {formData.name}</p>
          <p><strong>Жасы:</strong> {formData.age}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <div>
            <button onClick={prevStep}>Артқа</button>
            <button onClick={submit}>Жіберу</button>
          </div>
        </div>
      )}
    </div>
  );
}
*/

/*
// 3-тапсырма
import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive && seconds > 0) {
      const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [isActive, seconds]);

  return (
    <div>
      <input type="number" value={seconds} onChange={(e) => setSeconds(+e.target.value)} disabled={isActive} />
      <button onClick={() => setIsActive(true)} disabled={isActive}>Старт</button>
      <button onClick={() => setIsActive(false)}>Тоқтату</button>
      <h3>{seconds > 0 ? seconds : "Уақыт бітті!"}</h3>
    </div>
  );
}
  */

/*
//2-тапсырма

import { useState } from "react";

export default function ColorSwitcher() {
  const [color, setColor] = useState("#ffffff");
  const [history, setHistory] = useState([]);

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const changeColor = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    setHistory((prev) => [newColor, ...prev.slice(0, 4)]);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
      <button
        onClick={changeColor}
      >
        Түсін өзгерту
      </button>
      <h2>Библиофил-Асем</h2>
      <ul>
        {history.map((col, index) => (
          <li key={index} style={{ color: col }}>{col}</li>
        ))}
      </ul>
    </div>
  );
}
*/

/*
//1-тапсырма

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const inc = () => setCount((prev) => Math.min(prev + 1, 10));
  const dec = () => setCount((prev) => Math.max(prev - 1, 0));

  return (
    <div>
      <h2>Сан: {count}</h2>
      <div>
        <button onClick={dec}>-1</button>
        <button onClick={inc}>+1</button>
      </div>
      {count === 10 && <p>10-ға жеттіңіз!</p>}
      {count === 0 && <p>0-ден төмен болмауы керек!</p>}
    </div>
  );
}


*/

/*
function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("");
  
    // Жаңа тапсырма қосу
    const addTask = (taskText) => {
      if (!taskText.trim()) return;
      const newTask = { id: Date.now(), text: taskText, completed: false };
      setTasks([...tasks, newTask]);
    };
  
    // Тапсырманың күйін өзгерту
    const toggleTask = (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };
  
    // Тапсырманы өшіру
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };
  
    // Іздеу сүзгісін орнату
    const handleFilterChange = (query) => {
      setFilter(query);
    };
  
    return (
      <div className="container">
        <h1>📝 Менің Тапсырмаларым</h1>
        <TaskInput addTask={addTask} />
        <TaskFilter filter={filter} setFilter={handleFilterChange} />
        <TaskList tasks={tasks} filter={filter} toggleTask={toggleTask} deleteTask={deleteTask} />
      </div>
    );
  }
  
  export default App;
  */

/*
8-наурыз Үй жұмысы
  
import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import TaskFilter from "./TaskFilter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    if (!taskText.trim()) return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

 
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  const handleFilterChange = (query) => {
    setFilter(query);
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="container">
      <h1>📝 Менің Тапсырмаларым</h1>
      <TaskInput addTask={addTask} />
      <TaskFilter filter={filter} setFilter={handleFilterChange} />
      <TaskList tasks={tasks} filter={filter} toggleTask={toggleTask} deleteTask={deleteTask} />
      <p>Барлық тапсырмалар: {tasks.length} | Аяқталған: {completedCount}</p>
    </div>
  );
}

export default App;
*/



//03,03,25
//hw




/*export default function And(){
    let test = true

    return (
        <>
          {test && <p>Welcom || <p>Hello</p></p>}
        </>
    )
}
*/
// const isLoggedIn = false
// return(
//     <>
//        {isLoggedIn && <p>"Сіз әкімшісіз"</p>}
//     </>
// )
// const  isSubscribed  = false
// return(
//     <>
//        {isSubscribed  <p>"Сіз Premium қолданушысыз"</p>}
//     </>
// )





/*
export default function And(){
    const isLoggedIn = true;  
    const isAdmin = true;    
    const isSubscribed = false; 
    
      return (
        <div>
        <p>{isSubscribed ? "Сіз Premium қолданушысыз" : "Қарапайым қолданушы"}</p>
        {isLoggedIn && isAdmin && <p>Сіз әкімшісіз</p>}
        </div>
      );
    }
    
    
    export default function Online(){
    const isOnline = true
    return(
        <div>
            <p>{isOnline ? "Қолданушы онлайн" : "Қолданушы офлайн"}</p>
        </div>
    )
    }
    
    export default function Temperature() {
        const temperature = 18; 
        return (
            <div>
                <p>{temperature > 18 ? "Ыстық" : temperature > 13 ? "Жылы" : "Суық"}</p>
            </div>
        );
    }
    
    export default function ThemeToggle() {
        const isDark = true;
        return (
            <>
                <p>{isDark ? "Жарық режим" : "Қараңғы режим"}</p>
            </>
        );
    }
    
    
    export default function ToggleText(){
        const slow = false
        return(
            <div>
                <button> onClick={slow ? "Жасыру" : "Көбірек көрсету"} </button>
                {slow && <p>Бұл қосымша ақпарат</p>}
            </div>
        )
    }
    
    import { useState } from "react";
    
    export default function ToggleText() {
        const [slow, setSlow] = useState(false);
    
        return (
            <div>
                <button onClick={() => setSlow(!slow)}>
                    {slow ? "Жасыру" : "Көбірек көрсету"}
                </button>
                {slow && <p>Ақпарат жасырылды</p>}
            </div>
        );
    }
    */
   /*
    
    import { useState } from "react";

    export default function ToDoList() {
        const [tasks, setTasks] = useState([]);
        const [taskText, setTaskText] = useState("");
    
        const addTask = () => {
            if (!taskText.trim()) return;
            setTasks([...tasks, { text: taskText, completed: false }]);
            setTaskText("");
        };
    
        const toggleComplete = (index) => {
            setTasks(
                tasks.map((task, i) =>
                    i === index ? { ...task, completed: !task.completed } : task
                )
            );
        };
    
    
        return (
            <div>
                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                />
                <button onClick={addTask}>Қосу</button>
                <ul>
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            style={{
                                textDecoration: task.completed ? "line-through" : "none",
                            }}
                        >
                            {task.text}
                            <button onClick={() => toggleComplete(index)}>
                                {task.completed ? "Қайта бастау" : "Аяқтау"}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    */
/*

   import React, { useState } from "react";

export default function ToDoList() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([
        { taskName: "Гүл суару", completed: true },
        { taskName: "Күнделікті үй тапсырмасын орындау", completed: false }
    ]);

    function handleSubmit(e) {
        e.preventDefault();
        if (task.trim() === "") return;
        setTasks([...tasks, { taskName: task, completed: false }]);
        setTask("");
    }

    function handleRemove(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    value={task} 
                    type="text" 
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit">Қосу</button>
            </form>

            <ul>
                {tasks.map((tapsyrma, index) => (
                    <li key={index}>
                        <div>{tapsyrma.taskName}</div>
                        <div className="btn-box">
                            {tapsyrma.completed ? (
                                <button style={{ color: "green" }}>✔</button>
                            ) : (
                                <button>X</button>
                            )}
                            <button onClick={() => handleRemove(index)}>Жою</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

*/
    
    
    
    /* 
    import React, { useState } from 'react';

   export default function ToDoList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([
        { taskName: "Гүл суару", completed: true, id: 1 },
        { taskName: "Күнделікті үй тапсырмасын орындау", completed: false, id: 2 }
    ]);
    const [filter, setFilter] = useState("all");

    function handleSubmit(e) {
        e.preventDefault();
        setTasks([...tasks, { taskName: task, completed: false, id: tasks.length + 1 }]);
        setTask('');
    }

    const handleRemove = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "all") return true;
        if (filter === "complete") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return true;
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    value={task} 
                    type="text" 
                    onChange={(e) => setTask(e.target.value)} 
                />
                <button type="submit">Қосу</button>
            </form>
            <ul>
                {filteredTasks.map((task, index) => (
                    <li key={task.id}>
                        <div>{task.taskName}</div>
                        <div className="btn-box">
                            {task.completed ? (
                                <button style={{ color: "green" }}> ✔ </button>
                            ) : (
                                <button onClick={() => handleRemove(task.id)}>X</button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            <div className="filter-box">
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter("complete")}>Complete</button>
                <button onClick={() => setFilter("incomplete")}>Incomplete</button>
            </div>
        </div>
    );
} */


    //13.03.25
    /*
//1-tapsirma
import { useState, useEffect } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    const savedColor = localStorage.getItem("color");
    if (savedColor) {
      setColor(JSON.parse(savedColor));
    }
  }, []);

  useEffect(() => {
    if (color) {
      localStorage.setItem("color", JSON.stringify(color));
    }
  }, [color]);

  return (
    <div style={{ backgroundColor: color, height: "100vh", padding: "20px" }}>
      <h2>Түс таңда:</h2>
      <button onClick={() => setColor("red")}>🔴 Қызыл</button>
      <button onClick={() => setColor("blue")}>🔵 Көк</button>
      <button onClick={() => setColor("green")}>🟢 Жасыл</button>
    </div>
  );
}
*/


/*
//2-tapsirma
import { useState, useEffect } from "react";

export default function Login() {
  const [username, setUsername] = useState(localStorage.getItem("username") || ""); 

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUsername(savedUser);
    }
  }, []);

  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    } else {
      localStorage.removeItem("username");
    }
  }, [username]);

  return (
    <div>
      <h2>{username ? `Сәлем, ${username}!` : "Жүйеге кіріңіз"}</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Атыңызды енгізіңіз"
      />
      <button onClick={() => setUsername("")}>🚪 Шығу</button>
    </div>
  );
}

*/

/*
//3-tapsirma
import { useState, useEffect } from "react";

export default function VolumeControl() {
  const [volume, setVolume] = useState(localStorage.getItem("volume"));

  useEffect(() => {
    const savedVolume = localStorage.getItem("volume");
    if (savedVolume) {
      setVolume(Number(savedVolume));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("volume", volume);
  }, [volume]);

  return (
    <div>
      <h2>Дыбыс деңгейі: {volume}</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume("")}
      />
    </div>
  );
}
*/


//4-tapsirma

import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(() => Number(localStorage.getItem("seconds")) || 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("seconds", seconds);
  }, [seconds]);

  return (
    <div>
      <h2>Таймер: {seconds} сек</h2>
    </div>
  );
}



/*

//5-tapsirma
import { useState, useEffect } from "react";

export default function CurrencyConverter() {
  const [currency, setCurrency] = useState.localStorage("currency"); 

  useEffect(() => {
    const savedCurrency = localStorage.getItem("currency");
    if (savedCurrency) {
      setCurrency(savedCurrency);
    }
  }, []);

  useEffect(() => {
    lo.setItem("currency", currency);
  }, [currency]);

  return (
    <div>
      <h2>Таңдалған валюта: {currency}</h2>
      <button onClick={() => setCurrency("USD")}>💵 USD</button>
      <button onClick={() => setCurrency("EUR")}>💶 EUR</button>
      <button onClick={() => setCurrency("KZT")}>🇰🇿 KZT</button>
    </div>
  );
}


*/


/*
//6-тапсырма
import { useState, useEffect } from "react";

export default function ModeColor() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  useEffect(() => {
    localStorage.setItem("mode", mode);
    document.body.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <div>
      <h2>Қараңғы (Dark Mode) немесе ашық (Light Mode) тақырыпты таңдау: {mode}</h2>
      <button onClick={() => setMode("dark")}>Dark Mode</button>
      <button onClick={() => setMode("light")}>Light Mode</button>
    </div>
  );
}
*/
