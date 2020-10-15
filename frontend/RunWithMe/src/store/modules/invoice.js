const state = {
  rows: [
    {
      invoiceId: "1",
      billFrom: "John",
      billTo: "UI Lib",
      billFromAdress:
        "rodriguez.trent@senger.com 61 Johnson St. Shirley, NY 11967. ",
      billToAdress:
        "sales@ui-lib.com 8254 S. Garfield Street. Villa Rica, GA 30180. ",
      status: '<span class="badge badge-primary">Primary</span>'
    },
    {
      invoiceId: "2",
      billFrom: "Wick",
      billTo: "UI Lib",
      billFromAdress:
        "rodriguez.trent@senger.com 61 Johnson St. Shirley, NY 11967. ",
      billToAdress:
        "sales@ui-lib.com 8254 S. Garfield Street. Villa Rica, GA 30180. ",
      status: '<span class="badge badge-success">success</span>'
    },
    {
      invoiceId: "3",
      billFrom: "Gabriel",
      billTo: "UI Lib",
      billFromAdress:
        "rodriguez.trent@senger.com 61 Johnson St. Shirley, NY 11967. ",
      billToAdress:
        "sales@ui-lib.com 8254 S. Garfield Street. Villa Rica, GA 30180. ",
      status: '<span class="badge badge-warning">Warning</span>'
    },
    {
      invoiceId: "4",
      billFrom: "John",
      billTo: "UI Lib",
      billFromAdress:
        "rodriguez.trent@senger.com 61 Johnson St. Shirley, NY 11967. ",
      billToAdress:
        "sales@ui-lib.com 8254 S. Garfield Street. Villa Rica, GA 30180. ",
      status: '<span class="badge badge-info">Info</span>'
    },
    {
      invoiceId: "5",
      billFrom: "John",
      billTo: "UI Lib",
      billFromAdress:
        "rodriguez.trent@senger.com 61 Johnson St. Shirley, NY 11967. ",
      billToAdress:
        "sales@ui-lib.com 8254 S. Garfield Street. Villa Rica, GA 30180. ",
      status: '<span class="badge badge-danger">Danger</span>'
    }
  ],
  newInvoice: "",
  editInvoice: "",
  updateInvoice: ""
};

const getters = {
  invoiceList: state => state.rows,
  getNewInvoice: state => state.newInvoice,
  getEditInvoice: state => state.editInvoice
  // rows: state => state.rows.filter(invoice => invoice.invoiceId),
};

const actions = {
  addInvoice({commit}, data) {
    commit("ADD_INVOICE", data);
    // commit('GET_TODO', data.invoiceId);
  },
  removeInvoice({commit}, data) {
    commit("REMOVE_INVOICE", data);
  },
  editInvoice({commit}, id) {
    commit("EDIT_INVOICE", id);
  },
  viewInvoice({commit}, id) {
    commit("VIEW_INVOICE", id);
  },
  updateInvoice({commit}, payload) {
    commit("UPDATE_INVOICE", payload);
  }
};

const mutations = {
  EDIT_INVOICE(state, data) {
    state.editInvoice = data;
    // console.log(data)
  },
  UPDATE_INVOICE(state, data) {
    state.rows.map(row => {
      if (row.invoiceId === state.editInvoice.invoiceId) {
        row.billFrom = state.editInvoice.billFrom;
        row.billFromAdress = state.editInvoice.billFromAdress;
        row.billTo = state.editInvoice.billTo;
        row.billToAdress = state.editInvoice.billToAdress;
        row.status = state.editInvoice.status;
      }
    });

    // state.editInvoice.invoiceId === state
    //  console.log(state.editInvoice)
  },
  VIEW_INVOICE(state, data) {
    state.newInvoice = data;
    // console.log(data);
  },
  ADD_INVOICE(state, data) {
    state.rows.push(data);
    state.newInvoice = data;
    // console.log(state.newInvoice);
  },

  REMOVE_INVOICE(state, data) {
    state.rows.pop(data);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
