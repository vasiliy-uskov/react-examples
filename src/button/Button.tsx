import "./Button.css"
import {useState} from "react";
import {Spinner} from "../spinner/Spinner";
import {withMods} from "../withMods";

/**
 * @param {{
 *   text: string,
 *   loading: (boolean|undefined),
 *   onClick: function(): void,
 * }} props
 */
function Button({
	text,
	onClick,
	loading = false,
}: {
	text: string,
	onClick: () => void,
	loading?: boolean,
}) {
	const [hover, setHovered] = useState(false)
	return (
<button
	className={withMods("button", {
		"hover": !loading && hover,
		"loading": loading,
	})}
	disabled={loading}
	onMouseOver={() => setHovered(true)}
	onMouseOut={() => setHovered(false)}
	onClick={onClick}
>
	<span className={"button-text"}>{text}</span>
	<Spinner/>
</button>)
}

export {
	Button
};