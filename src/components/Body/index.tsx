import React from 'react';

import styles from './style.module.css';

import Input from '../Input';
import Preview from '../Preview';

export default function Body() {
  return (
    <div className={styles.bodyContainer}>
      <Input />
      <Preview />
    </div>
  )
}
