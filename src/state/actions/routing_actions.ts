import {push, RouterAction} from "react-router-redux";

export function changePage(location: string): RouterAction {
  return push(location)
}