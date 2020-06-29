import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = () => {
    const { text, date, checked } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate,
        });
      }
    } else {
      alert("This name is too short!");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    //*1 change string to number (we want to have max date 2021-12-31)
    maxDate = maxDate + "-12-31";

    return (
      <div className="form">
        <input
          type="text"
          placeholder="TO DO"
          value={this.state.text}
          onChange={this.handleText}
        />
        <label className="important">
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckbox}
          />
          <span className="custom-checkbox" />
          Important
        </label>
        <br />
        <label htmlFor="date">Task should be done at the latest:</label>
        <input
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <br />
        <button onClick={this.handleClick}>Add task</button>
      </div>
    );
  }
}

export default AddTask;
