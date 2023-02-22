import request from '@/utils/request'

export default{
    getTeacherAndCourse(){
        return request({
            url: `/crmBanner/getTeacherAndCourse`,
            method: 'get'
        })
    }
}