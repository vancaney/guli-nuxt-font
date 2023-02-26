import request from '@/utils/request'

export default{
    getTeacherAndCourse(){
        return request({
            url: `/crmBanner/getTeacherAndCourse`,
            method: 'get'
        })
    },
    getTeacherList(teacherQuery){
        return request({
            url: `/teacherFont/getTeacherListFont`,
            method: 'post',
            data: teacherQuery
        })
    },
    getTeacherInfoById(id){
        return request({
            url: `teacherFont/getTeacherInfoById/${id}`,
            method: 'get',
            data: id
        })
    },
    getCourseListFont(courseQuery){
        return request({
            url: `/teacherFont/getCourseListFont`,
            method: 'post',
            data: courseQuery
        })
    },
    getSubjectOneLevelAndTwoLevel(){
        return request({
            url: `/teacherFont/getSubjectOneLevelAndTwoLevel`,
            method: 'get'
        })
    }
}