import React from "react";
import styles from "./Input.module.scss";
import classNames from 'classnames';

const Input = (props) => {
  return <input className={classNames(styles.Input, props.className)} {...props} />;
};

export default Input;
