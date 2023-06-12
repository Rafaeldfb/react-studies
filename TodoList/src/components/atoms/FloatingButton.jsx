import { useFormActiveContext, useFormActiveUpdateContext } from "../FormContextProvider"
import Plus from "./CrossSvg"
import classes from "./floatingButton.module.sass"


function FloatingButton() {
  const activeForm = useFormActiveContext();
  const activeFormUpdate =  useFormActiveUpdateContext();

  return (
    <div className={classes.floatingButton}>
      <button 
        onClick={activeFormUpdate} 
        title={activeForm ? 'Close' : 'Add a new To Do Activity'}
      >
        <Plus size="16px" rotate={activeForm ? '45' : '0'} />
      </button>
    </div>
  )
}

export default FloatingButton;