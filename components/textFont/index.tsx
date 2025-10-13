import { Text, TextProps } from "@chakra-ui/react";
import { Font } from "../../utils/fonts";
import React from "react";

type TextFontProps = Font & TextProps & {
    children?: React.ReactNode;
};

export default function TextFont({ className, fontWeight, fontSize, children, ...rest }: TextFontProps) {
    return (
        <Text
            className={className}
            fontWeight={fontWeight}
            fontSize={fontSize}
            {...rest}
        >
            {children}
        </Text>
    );
}