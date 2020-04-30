import axios from 'axios';


export const createUser = async (data) => {
  try {
    const res = await axios.post('/api/users', data)
    if (res.status === 200 && window){ 
      return res;
    }
  }
  catch (err) {
    return err
  }
}

export const login = async (data) => {
  try{
      const res = await axios.post('/api/login', data);
      if (res.status === 200 && window){ 
        return res.data;
      }
      return null;
    }
    catch (err) {
      console.log("LOGIN CLIENT SIDE ERROR: ", err)
    }
}