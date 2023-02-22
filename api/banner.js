import request from '@/utils/request'

export default{
    getBannerList(){
        return request({
            url: `/crmBanner/getCrmBannerList`,
            method: 'get'
        })
    }
}