import NoteContext from "./NoteState";


const NoteState =(props)=>{
   const state ={
     name:"arjun",
     age:'12'
   }
   return(
    <NoteContext.Provider value={state}>
       {props.children}
    </NoteContext.Provider>
   )
}

export default NoteState;