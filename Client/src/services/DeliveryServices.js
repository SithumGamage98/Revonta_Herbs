import Api from '@/services/Api'

export default {
  fetchDeliveries () {
    return Api().get('deliveries')
  }
}
