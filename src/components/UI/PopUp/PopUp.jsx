import React, {useState} from 'react';
import styles from './PopUp.module.scss';
import classNames from "classnames";

const PopUp = ({setVisible, imageURL}) => {
  const [opacity, setOpacity] = useState(true)

  const hiddenImage = () => {
    setOpacity(false)
    setTimeout(() => {
      setVisible(false);
      document.documentElement.classList.remove('no-scroll');
    }, 700)
  }

  return (
      <div className={classNames(styles.PopUpWrapper, !opacity && styles.PopUpWrapper_Opacity)}
           onClick={hiddenImage} data-testid="popUp">
        <div className={styles.PopUpContent}>
          <img className={styles.Image} src={imageURL} alt="" onClick={(e) => e.stopPropagation()}/>
        </div>
      </div>
  );
};

export default PopUp;