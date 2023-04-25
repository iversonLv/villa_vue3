import { reactive, readonly } from 'vue'
import axios from "axios";
import config from '../config'
import utils from '../utils';


const state = reactive({
  villas: [],
  villa: {},
  viewMode: 'table',
  order: 'asc',
  sort: '',
  availableDate: '',
  fromToDate: [utils.dateFormatPipe(new Date()), utils.dateFormatPipe(new Date())]
})

const _LIMIT = 5
const _AVAILABLE_DATE_FROM_GTE = utils.dateFormatPipe(new Date())
const _AVAILABLE_DATE_TO_LTE = utils.dateFormatPipe(new Date())
const _ORDER = state.order
const _SORT = state.sort

const methods = {
  // get villas
  async getVillas(
    _limit = _LIMIT, 
    {
      from = _AVAILABLE_DATE_FROM_GTE,
      to = _AVAILABLE_DATE_TO_LTE
    },
    _order = _ORDER,
    _sort = _SORT) {
    try {
      const response = await axios.get(
        `${config.API_URL}/villas`,
        {
          // there is some default params as follows
          params: {
            'availableDate.from_gte': from,
            'availableDate.to_lte': to,
            _sort,
            _limit,
            _order
          },
        }
      );
      if (response.data) {
        return (state.villas = response.data);
      }
    } catch (err) {
      console.log(err);
    }
  },

  // update villa
  async updateVilla(id, putElement){
    try {
      const response = await axios.patch(
        `${config.API_URL}/villas/${id}`,
        {
          ...putElement
        }
      );
      if (response.data) {
        return (state.villa = response.data);
      }
    } catch (err) {
      console.log(err);
    }
  },

  // get villa
  async getVilla(id){
    try {
      const response = await axios.get(
        `${config.API_URL}/villas/${id}`,
      );
      if (response.data) {
        return (state.villa = response.data);
      }
    } catch (err) {
      console.log(err);
      return err
    }
  },

  setViewMode(value) {
    state.viewMode = value;
  },
  
  setOrder(value) {
    state.order = value;
  },

  setSort(value) {
    state.sort = value;
  },

  setSelectedFromToDate(value) {
    state.fromToDate[0] = value[0]
    state.fromToDate[1] = value[1]
    state.availableDate = {from: value[0], to: value[1]}
  },


}

export default {
  state: readonly(state),
  methods,
}