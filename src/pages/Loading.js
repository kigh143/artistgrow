import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { storeService } from '../store/store'

const Loading = () => {
    const history = useHistory();
    useEffect(()=>{
        const res = storeService.get();
        alert(res)
      if(res === null ){
          history.push("/login");
      }else{
        history.push("/home");
      }
    }, [])
        return (
            <div className="bg-green-800 w-full h-full flex justify-center items-center">
                <h2 className="text-3xl text-white"> Artist Grow</h2>
            </div>
        )
}

export default Loading
