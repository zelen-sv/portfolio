import Vue from 'vue';
import moment from 'moment';

export default (context) => {
  Vue.filter('to_date', function (date) {
    if (!date) return ''
    return moment(date).format('ll')
  })
}
