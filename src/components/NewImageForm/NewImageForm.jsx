import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import styles from "./NewImageForm.module.scss"

const NewImageForm = ({createImage}) => {
  const [source, setSource] = useState('');
  const [comment, setComment] = useState('');

  const addNewImage = () => {
    const newImage = {
      id: Date.now(),
      source,
      comment
    }
    createImage(newImage)
    setComment('');
    setSource('');
  }

  return (
      <form className={styles.NewImageForm}>
        <Input value={source} onChange={e => setSource(e.target.value)} type="text" placeholder="Image url"
               data-testid="url-input"/>
        <Input value={comment} onChange={e => setComment(e.target.value)} type="text" placeholder="Comment"
               data-testid="comment-input"/>
        <Button type={'button'} onClick={addNewImage} data-testid="add-image-btn">Add new image</Button>
      </form>
  );
};

export default NewImageForm;