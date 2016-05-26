const {
  Router,
  Route,
  IndexRoute
} = ReactRouter;

class App extends React.Component {
  render() {
    return (
        <div>
          {/* Views will be rendered here */}
          {this.props.children}
        </div>
    );
  }
}

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
        rows.push(
          <div className="item" key={id}>
            <i className="large comment middle aligned icon"></i>
            <div className="content">
              <a className="header">{todo.description}</a>
              <div className="description">#{todo.id}</div>
            </div>
          </div>)
    })
    return (
      <div className="ui relaxed divided list">
        {rows}
      </div>
    )
  }
}

class About extends React.Component {
  render() {
    return (
        <div>
          <h1>About</h1>
        </div>
    );
  }
}

class Routes extends React.Component {
  render() {
    return (
        <Router>
          <Route path="/" component={App}>
            <IndexRoute component={List}/>
            <Route path="/about" component={About}/>
          </Route>
      </Router>
    );
  }
}

ReactDOM.render(
   <Routes />,
   document.getElementById('app')
 );
