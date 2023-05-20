import Api from '@/services/Api'

export default {
  fetchOrders () {
    return Api().get('orders')
  }
}
