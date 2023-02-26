import React, {useState} from 'react';
import styles from './GalleryItem.module.scss';
import Textarea from "../UI/Textarea/Textarea";

const GalleryItem = ({photo, showImage}) => {
  const {
    source: source,
    comment: comment,
    id: id
  } = photo

  const [imageComment, setImageComment] = useState(comment);
  const [isCommentChange, setIsCommentChange] = useState(false);

  const ChangeComment = () => {
    setIsCommentChange(prevCheck => !prevCheck);
  }

  return (
      <li className={styles.GalleryItem}>
        <div className={styles.GalleryImgWrapper} onClick={() => showImage(source)} data-testid={`img-${id}`}>
          <img src={source} alt="Incorrect URl" className={styles.GalleryImg}/>
        </div>
        <div className={styles.Text}>
          {isCommentChange ? <Textarea value={imageComment} onChange={e => setImageComment(e.target.value)}
                                       data-testid={`textarea-${id}`}/> :
              <p className={styles.GalleryComment}>{imageComment}</p>}
          <button className={styles.ChangeButton} onClick={ChangeComment} data-testid={`change-comment-btn-${id}`}>
            <img
                className={styles.ChangeImage} src={isCommentChange ? "./approve-comment.png" : "./change-comment.png"}
                alt=""/>
          </button>
        </div>
      </li>
  );
};

export default GalleryItem;