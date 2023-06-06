import { useFormActiveContext, useFormActiveUpdateContext } from "../FormContextProvider"
import classes from "./floatingButton.module.sass"

function FloatingButton() {
  const activeForm = useFormActiveContext();
  const activeFormUpdate =  useFormActiveUpdateContext();

  return (
    <div className={classes.floatingButton}>
      <button className={activeForm ? 'active' : ''} onClick={activeFormUpdate}>
        {activeForm ? 'X' : '+'}
      </button>
    </div>
  )
}

export default FloatingButton;