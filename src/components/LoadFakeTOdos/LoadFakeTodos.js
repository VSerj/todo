import { Button } from "../Button"
import s from "./loadFakeTodos.module.css"
export const LoadFakeTodos = () => {
  return <Button className={s.btn} onAction={null}>Load fake todos</Button>
}
