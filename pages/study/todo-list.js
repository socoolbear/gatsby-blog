const TodoList = () => {
    const [list, setList] = React.useState([]);

    const addItem = () => {
        let todoList = localStorage.getItem('todo-list');
        if (todoList) {
            todoList = JSON.parse(todoList);
        } else {
            todoList = [];
        }

        todoList.push({
            id: new Date().getTime().toString(),
            content: '할 일 목록 ' + Math.random()
        });

        localStorage.setItem('todo-list', JSON.stringify(todoList));
        load();
    }

    const load = () => {
        let list = localStorage.getItem('todo-list');
        if (list) list = JSON.parse(list);
        else list = [];

        setList(list);
    }

    // 주시 대상이 없어도 mount 될 때 한 번은 동작 하게 되므로, componentDidMount 와 동일 하게 동작 하는 useEffect
    React.useEffect(() => {
        load();
    }, [])

    return (
        <div className={"container"}>
            <ul>
                {list.map(item => (
                    <li key={ item.id}>{item.content}</li>
                ))}
                <li>
                    할 일 목록
                </li>
                <li>
                    할 일 목록
                </li>
            </ul>
            <div className={"form-inline"}>
                <div className={"form-group"}>
                    <input className={"form-control"}/>
                </div>
                <div className={"form-group"}>
                    <button className={"btn btn-white"} onClick={addItem}>추가</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList