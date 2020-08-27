class App extends React.Component {
  state = {
    isChecked: false,
    isSubmitted: false,
  }

  inputHandler = (e) => {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
      isSubmitted: false
    }))
  }

  buttonHandler = () => {
    const { isChecked, isSubmitted } = this.state;

    if (isChecked && isSubmitted) {
      return null
    }
    else if (!isSubmitted) {
      this.setState((prevState) => ({
        isSubmitted: !prevState.isSubmitted
      }))
    }
  }

  render() {
    const { isChecked, isSubmitted } = this.state;

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
          {displayMessage(isChecked, isSubmitted)}
        </div>
      </React.Fragment>
    )
  }
}

const displayMessage = (isChecked, isSubmitted) => {
  if (isSubmitted && isChecked) {
    return (
      <div className="result-container">
        There is no better team than the Arsenal.
      </div>
    )
  } else if (isSubmitted && !isChecked) {
    return (
      <div className="wrong-validation">
        Wrong validation
      </div>
    )
  }
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
