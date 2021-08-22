

// create an action , which is a function which returns a map
const INCREMENT = 'increment' // for naming purposes so that we wont mix upthings
export const increment = () =>({
    type:INCREMENT
})

const initialState = {
    count:10
}

export default (state = initialState , action) =>{
    switch (action.type) {
        case INCREMENT:
            return{...state , count :state.count +1}
            
        default:
            return  state
    }
}