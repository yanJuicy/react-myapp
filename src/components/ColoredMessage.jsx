export const ColoredMessage = ({color, children}) => {

    const contentStyle = {
        color,
        fontsize: "20px"
    };

    return <p style={contentStyle}>{children}</p>
}
