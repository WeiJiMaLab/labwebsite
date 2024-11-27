import Link from "next/link";
import Image from "next/image";

function LinkButton({ text, href }) {
    return (
        <span style={{ marginRight: "10px" }}>
            <Link className="button" href={href} target="_blank">
                {text}
                <Image
                    className="externallinkimage"
                    src="/images/external-link.svg"
                    width={15}
                    height={15}
                />
            </Link>
        </span>
    );
}

export default LinkButton;