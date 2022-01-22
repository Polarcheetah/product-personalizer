import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = ({ className, action, children }) => {
  return (
    <button className={clsx(styles.button, className)} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
