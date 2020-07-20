import { request } from "./request"

export function getAddresslist() {

    //console.log(data)
    return request({
        url: '/api/getMyAddress.do',
    })
}
export function getPayBylist() {
    //console.log(data)
    return request({
        url: '/api/getPayBy.do',
    })
}
export  function  addOrder(data)  {   
    console.log(data)    
    return  request({        
        url:   '/api/addOrder.do',     
        data:   { data },
        method:   'post'    
    })
}