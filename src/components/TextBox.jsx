import SelectDropDrown from "./SelectDropDown";

const TextBox = ({
	selectedLanguage,
	setShowModal,
	style,
	setTextToTranslate,
	textToTranslate,
	translatedText,
	setTranslatedText,
}) => {

    const handleClick = () => {
        setTextToTranslate('')
        setTranslatedText('')
      }

	return (
		<div className={style}>
			<SelectDropDrown
				selectedLanguage={selectedLanguage}
				style={style}
				setShowModal={setShowModal}
			/>
			<textarea
				placeholder={style === "input" ? "Enter text" : "Translation"}
				disabled={style === "output"}
                onChange={(event) => setTextToTranslate(event.target.value)}
                value={style === 'input' ? textToTranslate : translatedText}
			/>
            {style === 'input' && (
                <div className="delete" onClick={handleClick}>
                ˟
                </div>
      )}
		</div>
	);
};

export default TextBox;
