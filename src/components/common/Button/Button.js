import React from 'react';
import styles from './Button.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 전달받은 className, onClick 등 값들이 rest 안에 들어있음
// JSX에서 ...을 사용하면 내부에 있는 값들을 props로 넣어준다.
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
    children, to, onClick, disabled, theme = 'default',
}) => {
    // to값이 존재하면 Link를 사용하고, 그렇지 않으면 div를 사용
    // 비활성화되어 있는 버튼일 때도 div를 사용
    const Element = (to && !disabled) ? Link : Div;

    // 비활성화되면 onClick은 실행되지 않음
    // disabled값이 true가 되면 className에 disabled를 추가
    return (
        <Element
            to={to}
            className={cx('button', theme, {disabled})}
            onClick={disabled ? () => null : onClick}>
            {children}
        </Element>
    )
}

export default Button;