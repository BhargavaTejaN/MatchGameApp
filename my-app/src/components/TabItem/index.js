import './index.css'

const TabItem = (props) => {
    const {details,isActive,onChangeTab} = props 
    const {tabId,displayText} = details 

    const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

    const changeTab = () => {
        onChangeTab(tabId)
    }

    return(
        <li className='tab-item'>
            <button onClick={changeTab} type="button" className={tabBtnClassName}>
                {displayText}
            </button>
        </li>
    )
}

export default TabItem