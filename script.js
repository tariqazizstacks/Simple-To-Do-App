 
        let input=document.querySelector("input")
        let btn= document.querySelector("button");
        let ulist= document.querySelector("ul");

        btn.addEventListener("click",()=>{
            let task = input.value.trim();
            if(task!==""){
                let list=document.createElement("li");
                list.innerText=task;
                ulist.appendChild(list);
                input.value=""
            }
        })
 