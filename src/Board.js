import React from 'react';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            tasks: []
        };
    }

    addTasks(name) {
        const tasks = this.state.tasks;
        tasks.push({name: name});
        this.setState({tasks: tasks});
    }
    render() {
        return (
            <div>
                <p> タスク
                    <span>{this.state.tasks.length}</span>
                    <input type="text" onChange={(e) => this.setState({input: e.target.value})}/>
                    <button onClick={() => this.addTasks(this.state.input)}
                    >登録</button>
                </p>
                <div>
                    {
                        this.state.tasks.map((task, index) => {
                            return <p>{task.name}
                            <button onClick = {() => {
                                const tasks = this.state.tasks;
                                tasks.splice(index, 1);
                                this.setState({tasks: tasks});
                            }
                            }
                            >削除</button>
                            </p>
                        })
                    }
                </div>
            </div>
        );
    }

}