import * as React from "react";

export type HtmlChangeEvent = React.ChangeEvent<HTMLInputElement>
export type HtmlMouseEvent = React.MouseEvent<HTMLElement>

export type SetStateFunction = (state: any) => void