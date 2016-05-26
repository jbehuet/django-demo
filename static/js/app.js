(function(){

  class List extends React.Component {

    constructor() {
      super()
      this.state = { todos: [] }
    }

    componentDidMount(){
      $.get( '/api/todos', function(data) {
        this.setState({ todos: data })
      }.bind(this));
    }

    render() {
      var rows = [];
      this.state.todos.forEach(function(todo, id){
          rows.push(<li key={id}>{todo.description}</li>)
      })
      return (
        <ul>
          {rows}
        </ul>
      )
    }
  }

  ReactDOM.render(
    <List />,
    document.getElementById('app')
  );
})();
