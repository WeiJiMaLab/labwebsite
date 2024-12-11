import Link from "next/link";
import Image from "next/image";

function LinkButton({text, href}) {
    return (
        <div style={{ margin: "6px 6px 6px 0px", display: "inline-block", whiteSpace: "nowrap" }}>
            <Link className="button" href={href} target = "_blank">
                {text}
                <Image
                    className="externallinkimage"
                    src="/images/external-link.svg"
                    width={15}
                    height={15}
                />
            </Link>
        </div>
    );
}

export default LinkButton;