import request from '@/utils/request'

export default{
    registerMember(member){
        return request({
            url: `/educenter/member/registry`,
            method: 'post',
            data: member
        })
    },
    sendCode(phoneNumber){
        return request({
            url: `/educenter/member/sendMessage/${phoneNumber}`,
            method: 'get',
        })
    }
}