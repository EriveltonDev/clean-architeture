import { css } from "@stitches/react";

export const ContainerViewPort = css({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#EAF0F2",
});

export const Container = css({
  backgroundColor: "#1AA49D",
  maxWidth: "600px",
  maxHeight: "200px",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "6px",
  gap: "30px",
});

export const ParagraphPresentation = css({
  backgroundColor: "white",
  width: "80%",
  textAlign: "center",
  padding: "10px 20px",
  borderRadius: "6px",
});

export const Button = css({
  backgroundColor: "#1AA49D",
  border: "none",
  borderRadius: "50px",
  padding: "10px 20px",
  color: "white",
  border: "1px solid white",
  cursor: "pointer",

  "&:hover": {
    filter: "brightness(0.8)",
  },
});
