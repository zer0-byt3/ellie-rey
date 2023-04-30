/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Passcode } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PasscodeUpdateFormInputValues = {
    name?: string;
    description?: string;
};
export declare type PasscodeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PasscodeUpdateFormOverridesProps = {
    PasscodeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PasscodeUpdateFormProps = React.PropsWithChildren<{
    overrides?: PasscodeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    passcode?: Passcode;
    onSubmit?: (fields: PasscodeUpdateFormInputValues) => PasscodeUpdateFormInputValues;
    onSuccess?: (fields: PasscodeUpdateFormInputValues) => void;
    onError?: (fields: PasscodeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PasscodeUpdateFormInputValues) => PasscodeUpdateFormInputValues;
    onValidate?: PasscodeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PasscodeUpdateForm(props: PasscodeUpdateFormProps): React.ReactElement;
