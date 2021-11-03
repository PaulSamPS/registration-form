import styles from './WhiteBlock.module.scss'
import {WhiteBlockProps} from "./WhiteBlock.props";

export const WhiteBlock = ({children}: WhiteBlockProps):JSX.Element => {
    return (
        <div className={styles.whiteBg}>
            {children}
        </div>
    )
}