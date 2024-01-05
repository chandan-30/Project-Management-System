const getUsersRequest = (axios,dispatch,getUser) => {
    axios.get('http://localhost:8000/users').then( async res => {
      try {
        if (res.status !== 200 && res.statusText !== 'OK' ) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        dispatch(getUser(res.data));
      } catch (error) {
        console.error(error);
      }
    });
}

const getTasksRequest = (axios,dispatch,getTask) => {
    axios.get('http://localhost:8000/tasks').then( async res => {
        try {
          if (res.status !== 200 && res.statusText !== 'OK' ) {
              throw new Error(`HTTP error! Status: ${res.status}`);
          }
          dispatch(getTask(res.data));
        } catch (error) {
          console.error(error);
        }
    });
 }

export { getUsersRequest, getTasksRequest}