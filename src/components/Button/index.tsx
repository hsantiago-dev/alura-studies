import React from "react";
import style from './Button.module.scss';

interface Props {
    children?: React.ReactNode
    , type?: 'button' | 'submit' | 'reset' | undefined
    , onClick?: () => void
}

function Button({
    children
    , type
    , onClick
}: Props) {
    
    return (
        <button type={type} onClick={onClick} className={style.botao}>
            {children}
        </button>
    );
}

// CLASS COMPONENT - DEPRECATED

// class Button extends React.Component<{
//     children: React.ReactNode
//     , type?: 'button' | 'submit' | 'reset' | undefined
//     , onClick?: () => void
// }> {
//     render(): React.ReactNode {
//         const { type = 'button', onClick } = this.props;
//         return (
//             <button type={type} onClick={onClick} className={style.botao}>
//                 {this.props.children}
//             </button>
//         );
//     }
// }

export default Button;