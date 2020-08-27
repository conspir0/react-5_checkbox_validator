class App extends React.Component {
  state = {
    isChecked: false
  }

  inputHandler = (e) => {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked
    }))
  }

  render() {
    const { isChecked } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <h1 className="title-container">
            Hey Dude!
          </h1>
          <InputCheckbox
            isChecked={isChecked}
            inputEvent={this.inputHandler}
          />
          {isChecked && <ResultContainer />}
        </div>
      </React.Fragment>
    )
  }
}

const ResultContainer = ({ }) => {
  return (
    <div className="result-container">
      Nope. Go back and code.
    </div>
  )
}

const InputCheckbox = ({ isChecked, inputEvent }) => {
  return (
    <label className="label-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={inputEvent}
      />
            I'm master React Developer
    </label>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
