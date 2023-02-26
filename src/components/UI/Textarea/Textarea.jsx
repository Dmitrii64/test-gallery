import React from "react";
import styles from "./Textarea.module.scss";
import classNames from 'classnames';

const Textarea = (props) => {
  return <textarea className={classNames(styles.Textarea, props.className)} {...props} rows={7}/>;
};

export default Textarea;
