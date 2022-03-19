import styles from './style.module.css';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setText, getText, getShowExample, getExampleText } from '../../app/previewerSlice';

export default function Input() {

  const dispatch = useAppDispatch();
  const showExample = useAppSelector(getShowExample);
  const showExampleText = useAppSelector(getExampleText);
  const currentText = useAppSelector(getText);

  const handleChange = (text: string) => {
    dispatch(setText(text));
  }

  if (showExample) {
    return (
      <div className={styles.inputContainer}>
        <textarea
          className={styles.input}
          value={showExampleText} />
      </div>
    )
  } else {
    return (
      <div className={styles.inputContainer}>
        <textarea
          className={styles.input}
          value={currentText}
          onChange={(e) => handleChange(e.target.value)} />
      </div>
    )
  }
}
