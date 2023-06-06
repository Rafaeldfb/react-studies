import { useState, createContext, useContext } from "react";
import PropTypes from 'prop-types';

// Custom Hooks
const FormActiveContext = createContext(null);
const FormActiveUpdateContext = createContext(null);

function useFormActiveContext() {
  return useContext(FormActiveContext);
}

function useFormActiveUpdateContext() {
  return useContext(FormActiveUpdateContext)
}


// Context Component
function FormContextProvider({ children }) {
  FormContextProvider.propTypes = { children: PropTypes.node };

  const [formActive, setFormActive] = useState(false);

  function formActiveHandler() {
    return setFormActive(!formActive);
  }

  return (
    <FormActiveContext.Provider value={formActive}>
      <FormActiveUpdateContext.Provider value={formActiveHandler}>
        {children}
      </FormActiveUpdateContext.Provider>
    </FormActiveContext.Provider>
  )
}

export { FormContextProvider, useFormActiveContext, useFormActiveUpdateContext }