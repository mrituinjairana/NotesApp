const addbtn =document.querySelector("#addbtn")
const main = document.querySelector("#main")


const savenotes= () => {
    const notes= document.querySelectorAll(".note textarea");
    console.log(notes);
    const data= [];
    notes.forEach(
        (note) => 
        {
            data.push(note,value); 
        }

    ) 
    //console.log(data)
    if(data.length===0)
    {
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
       
}
addbtn.addEventListener(
    "click",
    function()
    {
        addNote()
    }
)

const addNote = (text = "") => 
{
    const note= document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
     <div class="tool">
                         <i class="trash fa-solid fa-trash"></i>
                         <i class="save fa-solid fa-floppy-disk"></i>
                        </div>
        <textarea name="textarea">${text}</textarea>`;

        note.querySelector(".trash").addEventListener
        (
            "click",

            function()
            {
                note.remove()
                savenotes()
            }
        
        )
        note.querySelector(".save").addEventListener
        (
            "click",
            function()
            {
                savenotes()
            }
        )
        note.querySelector("textarea").addEventListener(
            "focusout",
            function()
            {
                savenotes()
            }
        )
main.appendChild(note);
savenotes()
}

(

function()
    {
        const lsnotes= JSON.parse(localStorage.getItem("notes"));

       if(lsnotes ===null){
        addNote()
       }
        lsnotes.forEach(
            (lsnotes) =>{
                addNote(lsnotes)
            }
        )
        if(lsnotes.length ===0)
        {
            localStorage.removeItem("notes")
        }
        else{
            addNote()
        }

    }
)
()