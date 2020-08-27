class App extends React.Component {
  state = {
    isChecked: false,
    isValidated: false,
  }

  inputHandler = (e) => {
    if (this.state.isChecked) {
      this.setState((prevState) => ({
        isChecked: !prevState.isChecked,
        isValidated: false
      }))
    } else {
      this.setState((prevState) => ({
        isChecked: !prevState.isChecked
      }))
    }
  }

  buttonHandler = () => {
    const { isChecked, isValidated } = this.state;

    if (isChecked && !isValidated) {
      this.setState((prevState) => ({
        isValidated: !prevState.isValidated
      }))
    }
  }

  render() {
    const { isChecked, isValidated } = this.state;

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
          <ButtonForm clickEvent={this.buttonHandler} />
          {isValidated && <ResultContainer />}
        </div>
      </React.Fragment>
    )
  }
}

const ResultContainer = ({ }) => {
  return (
    <div className="result-container">
      There is no better team than the Arsenal.
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
            You have to check me before know my secret!
    </label>
  )
}

const ButtonForm = ({ clickEvent }) => {
  return (
    <button
      className="button"
      onClick={clickEvent}
    >

      Show secret
    </button>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
