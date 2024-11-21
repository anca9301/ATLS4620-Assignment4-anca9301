import InputTitle from "./InputTitle"
import InputBody from "./InputBody";
import SaveButton from "./SaveButton";

export default function NoteCreation() {
    return (
            <fieldset>
                <legend>New Note</legend>
                <InputTitle/>
                <InputBody/>
                <SaveButton/>
            </fieldset>
    )
}