import CustomizeButton from "../Common/CustomizeButton";
function Header(){
    const menuItems = [
        {'id':1,'menu_name':'Home'},
        {'id':2,'menu_name':'About'},
        {'id':3,'menu_name':'Services'},
        {'id':4,'menu_name':'Shop'},
        {'id':5,'menu_name':'Pages'},
        {'id':6,'menu_name':'Blog'},
        {'id':7,'menu_name':'Contact'}
    ];
    return (<>
        <header>
            <nav>
                <div className="Image">
                    <img src={'./assets/websiteLogo.png'} alt="logo"></img>
                </div>
                <ul>
                {menuItems.map((item)=>{
                  return  <li key={item.id}>{item.menu_name}</li>
                })}
                </ul>
                <CustomizeButton button_text="Get a Quote"></CustomizeButton>
            </nav>
        </header>
    </>)

}
export default Header;