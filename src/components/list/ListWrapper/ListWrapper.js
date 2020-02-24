import React from 'react';
import styles from './ListWrapper.scss';
import classNames from 'classnames/bind';

/*
 * ListWrapper 컴포넌트는 내부 내용을 페이지 한가운데에 정렬시켜주고, 위아래에 패딩이 설정되어 있으며
 * 웹 브라우저 크기에 따라 화면을 조정한다.
 */
const cx = classNames.bind(styles);

const ListWrapper = ({children}) => (
    <div className={cx('list-wrapper')}>
        {children}
    </div>
);

export default ListWrapper;