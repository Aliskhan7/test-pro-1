import {useEffect, useState} from "react";


function App() {
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) =>{
                return res.json()
            })
            .then((arr) => {
                setData(arr);
            })
    }, [])

  return (
    <ul className='list'>
        {data.map((item, index)=> {
            return(
                <li key={index}  className='list-item'>
                    <div>
                        Номер: {item.id}
                    </div>
                    <div>
                        Заголовок: {item.title}
                    </div>
                    <div>
                        Статус: {item.completed === true ? 'Да' : 'Нет'}
                    </div>
                </li>
            )
        })}
    </ul>
  );
}

export default App;
