import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = ()=>{
    const chatProps = useMultiChatLogic(
        'cca71e05-ed00-4014-8bc4-6ed92cd531ab',
        props.user.username, 
        props.user.secret
        );
    return (
        <div style={{ height :'100vh'}}>
        <MultiChatSocket{...chatprops} />
        <MultiChatWindow{...chatprops} style ={{height:'100vh' }}/>
    </div>
}
);
export default ChatsPage