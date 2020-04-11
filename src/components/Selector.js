
import React from "react";
import { withFormik } from "formik";

const RadioForm = props => {
  const {
    values,
    setFieldValue
  } = props;
  return (
    <form className = "radio">
      <label>
        <input type="radio" name="strategy" value="FCFS" checked={values.strategy === "FCFS"} onChange={() => setFieldValue("strategy", "FCFS")} />  FCFS
      </label>
      <label>
        <input type="radio" name="strategy" value="LCFS" checked={values.strategy === "LCFS"} onChange={() => setFieldValue("strategy", "LCFS")} />  LCFS
      </label>
      <label>
        <input type="radio" name="strategy" value="RR" checked={values.strategy === "RR"} onChange={() => setFieldValue("strategy", "RR")} />  RR
      </label>
      <label>
        <input type="radio" name="strategy" value="SJN" checked={values.strategy === "SJN"} onChange={() => setFieldValue("strategy", "SJN")} />  SJN
      </label>
      <label>
        <input type="radio" name="strategy" value="SRT" checked={values.strategy === "SRT"} onChange={() => setFieldValue("strategy", "SRT")} />  SRT
      </label>
    </form>
  );
};

const Selector = withFormik({
  mapPropsToValues: () => ({ strategy: "RR" }),
})(RadioForm);

const Render = () => (
    <div>
        <Selector />
    </div>
)

export default Render;