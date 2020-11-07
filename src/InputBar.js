function InputBar({ updateInput }) {
    const submit = (event) => {
        event.preventDefault(); // Stop page reload
        updateInput(event.target.input.value);
    };

    return (
        <form onSubmit={submit}>
            <input type="text" name="input" />
        </form>
    );
}

export default InputBar;
