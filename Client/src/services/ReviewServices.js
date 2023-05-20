import Api from '@/services/Api'

export default {
  fetchReviews () {
    return Api().get('reviews')
  }
}
