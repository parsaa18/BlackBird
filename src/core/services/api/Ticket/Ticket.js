import api from '../../TicketInterceptor/TicketInterceptor.js'

export const AllTicketUserAPI = async (UserId) => {
  try {
    const result = await api.get(`/getAllTicketsUser/${UserId}`);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const ReqTicketAPI = async (reqId) => {
  try {
    const result = await api.get(`/getReqMessage/${reqId}`);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const NewTicketAPI = async (Ticket) => {
  try {
    const result = await api.post(`/createTicket` , Ticket );
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const NewMessageAPI = async (Message) => {
  try {
    const result = await api.post(`/createMessage` , Message );
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const CloseTicketAPI = async (reqId) => {
  try {
    const result = await api.put(`/closeTicket/${reqId}` );
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};