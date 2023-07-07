import React from 'react'
import './EmailList.css'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { mailAction } from '../../Store/MailSlice'

const EmailList = (props) => {
    const dispatch = useDispatch()
    
    const checkHandler = ()=>{
        // alert('Click')
    }

    const delteEmailHandler = () => {
        console.log(props.id)
        console.log('Delete message')
        alert('Delete Successful')
        dispatch(mailAction.remove(props.id))
    }
    return (
        <li key={props.id} onClick={checkHandler}>
            <div className='emailContainer'>
                {/* left side */}
                <div className='sendTo'>
                    <p>To: {props.To}</p>
                </div>
                {/* center side */}
                <div className='messageTitle'>
                    <p style={{ fontWeight: "bold" }}>{props.subject}</p>
                    <p style={{ color: 'gray', textOverflow: 'ellipsis'}}> - {props.message}</p>
                </div>
                {/* right side */}
                <div>
                    <Button variant='primary' onClick={delteEmailHandler}>X</Button>
                </div>
            </div>
        </li>
    )
}

export default EmailList
