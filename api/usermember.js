import request from '@/utils/request'
export default{
    login(member){
        return request({
            url:`/educenter/member/login`,
            method: 'post',
            data: member
        })
    },
    getUserInfo(){
        return request({
            url: `/educenter/member/getUserInfo`,
            method: 'get'
        })
    }
}