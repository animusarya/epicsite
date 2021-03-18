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
};

export default schema;
