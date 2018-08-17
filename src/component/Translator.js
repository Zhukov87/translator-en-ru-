import React, { Component } from "react";
import { connect } from "react-redux";
import { translator } from "../action creators/translator.action";
import TranslateList from "./TranslateList";

class Translator extends Component {
  state = {
    textForTranslate: "",
    onLoad: false,
    lang: "ru-en"
  };
  handleSubmit = () => {
    this.setState({ onLoad: true });
    this.props.translator(this.state.textForTranslate, this.state.lang);
  };

  renderTranslateList = translate => {
    return (
      <ul>
        {translate.map(pair => {
          return (
            <li>
              <TranslateList pair={pair} />
            </li>
          );
        })}
      </ul>
    );
  };

  componentWillReceiveProps() {
    this.state.onLoad ? this.setState({ onLoad: false }) : "";
  }

  render() {
    const { translate } = this.props;
    return (
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.handleSubmit();
          }}
        >
          <h2>Enter text</h2>
          <select
            onChange={event => this.setState({ lang: event.target.value })}
          >
            <option value="#">Select laguage</option>
            <option value="ru-en">Russian - English</option>
            <option value="en-ru">English - Russian</option>
          </select>
          <br />
          <textarea
            required
            rows="5"
            cols="50"
            placeholder="Enter text for translate"
            value={this.state.textForTranslate}
            onChange={event => {
              this.setState({ textForTranslate: event.target.value });
            }}
          />
          <br />
          <button type="submit" value="submit">
            Translate
          </button>
        </form>
        <h2>Translation</h2>
        {this.state.onLoad ? (
          <div>Please wait</div>
        ) : (
          this.renderTranslateList(translate)
        )}
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      translate: state.translate
    };
  },
  { translator }
)(Translator);
