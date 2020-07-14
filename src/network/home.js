import { request } from "./request"
//get 方式
export function getHomeInfo() {
    return request({
        url: '/api/getIndex.do'
    })

}

// // post方式
// export function getDetail(id) {
//     return request({
//         url: '/api/proDetails.do',
//         data: { id: id },
//         method: 'post'
//     })
// }