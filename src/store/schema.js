/* eslint-disable no-param-reassign */
import { action } from 'easy-peasy';

const schema = {
  isLoggedIn: {
    value: false,
    toggle: action((state, payload) => {
      state.value = payload;
    }),
  },
  user: {
    data: {},
    update: action((state, payload) => {
      state.data = payload;
    }),
  },

  setCommunity: action((state, payload) => {
    state.community = payload;
  }),
};

export default schema;
