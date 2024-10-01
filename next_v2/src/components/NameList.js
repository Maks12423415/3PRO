export default function NameList({imie, color, ok}){

    var classname = "";

    if(ok){
        classname="w-1/2 border-2 bg-green-500"
    }else{
        classname="w-1/2 border-2"
    }
    return(
        //var color = "text-"{color}"-500";
        <div className={classname}> 
            <h1 className={color}>{imie}</h1>
        </div>


    )
}