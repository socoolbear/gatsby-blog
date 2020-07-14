import React from 'react';
import axios from 'axios';

export default () => {
    const [content, setContent] = React.useState('');
    const submit = () => {
        axios.post('/api/feeds', {
            content
        }).then(() => {
            alert("완료 되었 습니다.")
        }).catch(error => {
            console.log(error);
            alert(error.message);
        });
    }

    return <>
        <input type="text" value={content} onChange={text => setContent(event.target.value)}/>
        <button onClick={submit}>전송</button>
    </>
};