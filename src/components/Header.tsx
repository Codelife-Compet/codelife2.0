import React from 'react';
import {useContext} from 'react'
import Switch from 'react-switch';
import {ThemeContext} from 'styled-components'
import {Container} from '@/context/theme/styles'

interface Props{
    toggleTheme():void;
}

const Header : React.FC<Props> = ({toggleTheme}) =>{
    const {colors,title} = useContext(ThemeContext);
    return (
        <Container>
            <header>
                <span className ="bg-codelife-green-100">CodeLife</span>
                <Switch
                    onChange={toggleTheme}
                    checked = {title == 'dark'}
                    checkedIcon ={false}
                    uncheckedIcon = {false}
                    height ={10}
                    width={40}
                    handleDiameter={20}
                    offColor={colors.primary}
                    onColor={colors.second}
                    
                />
            </header>
        </Container>
        
        
    );
};
export default Header;