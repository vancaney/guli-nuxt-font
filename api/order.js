import request from '@/utils/request'

export default{
    saveOrder(courseId){
        return request({
            url: `/order/saveOrder/${courseId}`,
            method: 'post'
        })
    },
    oederByOrderNo(orderNo){
        return request({
            url: `/order/getOrderInfoByOrderId/${orderNo}`,
            method: 'get'
        })
    },
    getCourseStatus(courseId){
        return request({
            url: `/order/getOrderStatusByUser/${courseId}`,
            method: 'post'
        })
    }
}