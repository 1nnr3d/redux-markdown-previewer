/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import styles from './style.module.css';

import { useAppSelector } from '../../app/hooks';
import { getText, getShowExample, getExampleText } from '../../app/previewerSlice';
import { marked } from 'marked';

export default function Preview() {
  const [text, setText] = useState("");

  const showExample = useAppSelector(getShowExample);
  const showExampleText = useAppSelector(getExampleText);
  const currentText = useAppSelector(getText);

  useEffect(() => {
    if (showExample) {
      setText(marked.parse(showExampleText));
    } else {
      setText(marked.parse(currentText))
    }
  }, [currentText, showExample])

  return (
    <div className={styles.previewContainer}>
      <div className={styles.preview} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}
