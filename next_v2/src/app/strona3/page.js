import ContextMenuDemo from "@/components/ContextMenu";
import DialogDemo from "@/components/Dialog";
import HoverCardDemo from "@/components/HoverCard";

export default function Strona3(){


    return (
        <div >
            <h1>Strona 3</h1>    
            {/* Właściwe treść strony */}
            <HoverCardDemo></HoverCardDemo>
            <ContextMenuDemo></ContextMenuDemo>
            <DialogDemo></DialogDemo>
        </div>
    )
}