// people dropping off a form (action creator)
const createPolicy = (name, amount) => {
      return { //action, form 
        type: 'CREATE_POLICY',
        payload: {
          name,
          amount
        }
      };
    };
    
    
    const deletePolicty = (name) => {
      return {
        type: 'DELETE_POLICY',
        payload: {
          name
        }
      }
    };
    
    
    const createClaim = (name, amountOfMoneyToCollect) => {
      return {
        type: 'CREATE_CLAIM',
        payload: {
          name,
          amountOfMoneyToCollect
        }
      }
    }
    
    
    // reducers (Departments)
    
    
    const claimsHistory = (oldListOfClaims = [], action) => {
      if(action.type === 'CREATE_CLAIM') {
        // we care about the action
        return [...oldListOfClaims, action.payload];// creating a new array 
      }
      
      // we don't care about the action
      return oldListOfClaims;
    }
    
    
    const accounting = (bagOfMoney = 100, action) => {
      if(action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
      } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
      }
      
      return bagOfMoney;
    }
    
    
    const policies = (listOfPolicies = [], action) => {
      if(action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
      } else if(action.type === 'DELETE_POLICY') {
        return listOfPolicies.filer( name => name !== action.payload.name); // return a new array
      }
      
      return listOfPolicies; 
    }
    
    
    
    
    const { createStore, combineReducers } = Redux;
    const ourDepartments = combineReducers({
      accounting: accounting,
      claimsHistory: claimsHistory,
      policies: policies
    });
    
    
    const store = createStore(ourDepartments);// represents our redux application 
    
    
    
    
    store.dispatch(createPolicy('Alex', 20));
    store.dispatch(createPolicy('Jim', 30));
    store.dispatch(createPolicy('Bob', 40));
    store.dispatch(createClaim('alex', 120));
    store.dispatch(createClaim('Jim', 50));
    store.dispatch(deletePolicy('Bob'));
    console.log(store.getState());