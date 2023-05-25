import classes from "./checkbox.module.scss";
import PropTypes from 'prop-types';
import { useState } from "react";

function Checkbox({checkedState, label, size='', attributes, setFinishedHandler}) {
  Checkbox.propTypes = {
    checkedState: PropTypes.bool,
    label: PropTypes.string,
    size: PropTypes.string,
    attributes: PropTypes.array,
    setFinishedHandler: PropTypes.func,
  }


  const sizeApplied = ['sm', 'lg', 'xl'].includes(size) ? size : 'auto';

  const [checked, setChecked] = useState(checkedState);

  function setCheckedHandler() {
    setChecked(!checked);
    setFinishedHandler(checked)
  }

  return (
    <div className={classes.checkboxWrapper}>
      <label className={classes[sizeApplied]}>
        <input 
          type="checkbox" 
          className={checked ? classes.checked : ""}
          onChange={() => setCheckedHandler()} 
          checked={checked} 
          {...attributes}
        />

        <span>{label}</span>
      </label>
    </div>
  )
}

export default Checkbox;