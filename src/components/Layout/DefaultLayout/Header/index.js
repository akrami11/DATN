import classNames from 'classnames';
import styles from './Header.Module.scss';

const cx = classNames.bind(styles);

function Header() {
  return <header className={cx('wrapper')}>header</header>;
}

export default Header;
