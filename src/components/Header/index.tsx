import styles from './style.module.css';

import { setShowExample, getShowExample } from '../../app/previewerSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export default function Header() {
  const dispatch = useAppDispatch();
  const isShowExample = useAppSelector(getShowExample);

  const handleClick = () => {
    dispatch(setShowExample(!isShowExample))
  }

  return (
    <div>
      <div className={styles.header}>
        Markdown Previewer
      </div>

      <button onClick={handleClick} className={styles.exampleBtn}>Show Example</button>
    </div>
  )
}
