import React, { useState } from 'react';
import HorizonItem from '../../components/horizon-item'
import { categoryTypes, alphaTypes } from '../../api/config';
import { NavContainer } from './style';
const Singers = () => {

    let [category, setCategory] = useState('');
    let [alpha, setAlpha] = useState('');

    let handleUpdateCategory = (val) => {
        setCategory(val);
    }
    let handleUpdateAlpha = (val) => {
        setAlpha(val);
    }
    return (
        <div>
            <NavContainer>
                <HorizonItem oldValue={category} list={categoryTypes} title={"分类 (默认热门):"} handleClick={handleUpdateCategory}></HorizonItem>
                <HorizonItem oldValue={alpha} list={alphaTypes} title={"首字母:"} handleClick={handleUpdateAlpha}></HorizonItem>
            </NavContainer>
        </div>
    );
}

export default React.memo(Singers);
