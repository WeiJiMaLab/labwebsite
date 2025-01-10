import { TransformWrapper, TransformComponent, MiniMap} from "react-zoom-pan-pinch";
import Image from "next/image";
import styles from "../styles/zoomableimage.module.css";

const ZoomableImage = ({ src, alt }) => (
    <div className={styles.image}>
        <TransformWrapper>
            {({ zoomIn, zoomOut, resetTransform }) => (
                <div style={{ margin: "1% 10% 1% 10%", position: "relative", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <TransformComponent style={{ zIndex: 1 }}>
                        <Image
                            width={1000}
                            height={1000}
                            src={src}
                            alt={alt}
                            style={{ padding: "50px", minWidth: "100%", height: "auto" }}
                        />
                    </TransformComponent>
                    <div style={{ position: "absolute", bottom: 10, right: 10, zIndex: 1, display: "flex", gap: "5px" }}>
                        <button
                            onClick={() => zoomIn()}
                            style={{
                                padding: "2px 6px",
                                backgroundColor: "rgba(0, 0, 0, 0.2)",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontSize: "14px"
                            }}
                        >
                            Zoom In
                        </button>
                        <button
                            onClick={() => zoomOut()}
                            style={{
                                padding: "2px 6px",
                                backgroundColor: "rgba(0, 0, 0, 0.2)",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontSize: "14px"
                            }}
                        >
                            Zoom Out
                        </button>
                        <button
                            onClick={() => resetTransform()}
                            style={{
                                padding: "2px 6px",
                                backgroundColor: "rgba(0, 0, 0, 0.2)",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontSize: "14px"
                            }}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            )}
        </TransformWrapper>
    </div>
);

export default ZoomableImage;