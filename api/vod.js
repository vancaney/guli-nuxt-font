import request from '@/utils/request'

export default{
    getPlayAuth(id){
        return request({
            url: `/vodFont/getPlayAuth/${id}`,
            method: 'get'
        })
    }
}