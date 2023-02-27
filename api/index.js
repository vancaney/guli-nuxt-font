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
            url: `/indexFont/getTeacherListFont`,
            method: 'post',
            data: teacherQuery
        })
    },
    getTeacherInfoById(id){
        return request({
            url: `indexFont/getTeacherInfoById/${id}`,
            method: 'get',
            data: id
        })
    },
    getCourseListFont(courseQuery){
        return request({
            url: `/indexFont/getCourseListFont`,
            method: 'post',
            data: courseQuery
        })
    },
    getSubjectOneLevelAndTwoLevel(){
        return request({
            url: `/indexFont/getSubjectOneLevelAndTwoLevel`,
            method: 'get'
        })
    },
    getCourseInfoFont(courseId){
        return request({
            url: `/indexFont/getCourseInfoFont/${courseId}`,
            method: 'get',
            data: courseId
        })
    }
}