import {HtmlChangeEvent, SetStateFunction} from "../types/react_types";

export const onInput = (setState: SetStateFunction) => (key: string) => (event: HtmlChangeEvent) => {
  setState({key: event.target.value})
}