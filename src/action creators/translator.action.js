import { TRANSLATOR } from "./constants";

const APIKey = /* Enter your unique API-key */ null;
const url = "https://translate.yandex.net/api/v1.5/tr.json/translate";

export function translator(text, lang, err) {
  return dispatch => {
    fetch(`${url}?key=${APIKey}&text=${text}&lang=${lang}`, {
      method: "POST"
    })
      .then(response => {
        if (response.status !== 200) {
          throw response.status;
        } else {
          return response.json();
        }
      })
      .then(value => {
        console.log("value", value.text);
        dispatch({
          type: TRANSLATOR,
          payload: {
            text: text,
            translate: value.text,
            err: false
          }
        });
      })
      .catch(err => {
        alert("Oops... something went wrong!");
        dispatch({
          type: TRANSLATOR,
          payload: {
            err: err
          }
        });
      });
  };
}
